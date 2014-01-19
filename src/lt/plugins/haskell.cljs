(ns lt.objs.langs.haskell
  (:require [lt.object :as object]
            [lt.objs.files :as files]
            [lt.objs.editor :as ed]
            [lt.objs.editor.pool :as pool]
            [lt.objs.proc :as proc]
            [lt.objs.notifos :as notifos]
            [lt.objs.sidebar.command :as cmd]
            [lt.util.load :as load]

            [clojure.string :as string])
  (:require-macros [lt.macros :refer [behavior]]))

(def exec (.-exec (load/node-module "shelljs")))

(behavior ::on-proc-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (object/update! this [:proc :out] str (.toString data))))

(behavior ::on-proc-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (object/update! this [:proc :error] str (.toString data))))

(behavior ::on-proc-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      (object/update! this [:running] (constantly false))))

(object/object* ::runner
                :behaviors [::on-proc-out ::on-proc-error ::on-proc-exit]
                :running true
                :proc {:process nil :out nil :error nil}
                :init (fn [this command args init-fn]
                        (let [p (proc/simple-spawn* this {:command command, :args args} nil {})]
                          (when init-fn
                            (init-fn p))
                          (object/update! this [:proc :process] (fn [_ n] n) p)
                          (notifos/done-working "ghci started")
                          nil)))

(defn ghci-process [cb]
  (let [o (object/create ::runner "ghci" []
                         (fn [p]
                           (.write (.-stdin p) ":set prompt \"--EvalFinished--\\n\"\n")))]
    (add-watch o :ghci-watch (fn [_ _ old new]
                               (let [old-out (get-in old [:proc :out])
                                     new-out (get-in new [:proc :out])
                                     err-out (get-in new [:proc :error])]
                                 (if (and new-out
                                          (not= old-out new-out)
                                          (.contains new-out "--EvalFinished--"))
                                   (cb new-out err-out)))))
    o))

(defn ghci-command [ghci-obj command]
  (let [stdin (.-stdin (get-in @ghci-obj [:proc :process]))]
    (object/update! ghci-obj [:proc] (fn [p]
                                       (assoc p :out nil :error nil)))
    (.write stdin (str command "\n"))))

(defn selection-info [editor]
  (let [pos (ed/->cursor editor)
        info (:info @editor)
        info (if (ed/selection? editor)
               (assoc info
                 :meta {:start (-> (ed/->cursor editor "start") :line)
                        :end (-> (ed/->cursor editor "end") :line)}
                 :code (ed/selection editor))
               (assoc info
                 :pos pos
                 :code (ed/line editor (:line pos))))]
    info))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [info (selection-info editor)]
                        (when-not (string/blank? (:code info))
                          (object/raise haskell :eval! {:origin editor
                                                        :info info})))))

(defn show-result [editor loc]
  (fn [output error-output]
    (let [results (string/split output "--EvalFinished--\n")
          res (peek results)
          res (if (string/blank? res)
                "-- ok"
                res)]
      (if error-output
        (object/raise editor :editor.exception error-output loc)
        (object/raise editor :editor.result res loc)))))

(defn prepare-code [code]
  (string/replace code #"^(\w+)(\s+)?=" "let $1 ="))

(defn get-ghci [editor]
  (let [ghci (-> @editor :haskell.client)
        ghci (if-not ghci
               (let [ghci (ghci-process #((get-in @editor [:haskell.result-fn]) %1 %2))]
                 (object/update! editor [:haskell.client] (fn [_ n] n) ghci)
                 ghci)
               ghci)]
    ghci))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event
                            loc {:line (or (get-in info [:meta :end])
                                           (get-in info [:pos :line]))}
                            ghci (get-ghci origin)]
                        (object/update! origin [:haskell.result-fn] (fn [_ n] n) (show-result origin loc))
                        (ghci-command ghci (prepare-code (:code info))))))

(behavior ::on-eval.type
          :triggers #{:eval.type}
          :reaction (fn [editor]
                      (let [info (selection-info editor)
                            loc {:line (or (get-in info [:meta :end])
                                           (get-in info [:pos :line]))}
                            ghci (get-ghci editor)]
                        (when-not (string/blank? (:code info))
                          (object/update! editor [:haskell.result-fn] (fn [_ n] n) (show-result editor loc))
                          (ghci-command ghci (str ":type " (prepare-code (:code info))))))))

(cmd/command {:command :editor-type-form
              :desc "Eval: Get the type of a form in editor"
              :exec (fn []
                      (when-let [ed (pool/last-active)]
                        (object/raise ed :eval.type)))})

(behavior ::doc
          :triggers #{:editor.doc}
          :reaction (fn [editor]
                      (if (ed/selection? editor)
                        (let [loc (ed/->cursor editor "end")
                              token (ed/selection editor)
                              cmd (str "hoogle search -i " token)]
                          (exec cmd (fn [return-code output]
                                      (if (= return-code 0)
                                        (object/raise editor :editor.doc.show! {:name token, :ns "", :doc output, :loc loc})
                                        (object/raise editor :editor.exception output loc))))))))

(object/object* ::haskell-lang
                :tags #{:haskell.lang})

(def haskell (object/create ::haskell-lang))