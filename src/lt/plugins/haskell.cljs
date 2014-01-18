(ns lt.objs.langs.haskell
  (:require [lt.object :as object]
            [lt.objs.eval :as eval]
            [lt.objs.console :as console]
            [lt.objs.command :as cmd]
            [lt.objs.clients.tcp :as tcp]
            [lt.objs.sidebar.clients :as scl]
            [lt.objs.dialogs :as dialogs]
            [lt.objs.files :as files]
            [lt.objs.popup :as popup]
            [lt.objs.platform :as platform]
            [lt.objs.editor :as ed]
            [lt.objs.plugins :as plugins]
            [lt.plugins.watches :as watches]
            [lt.objs.proc :as proc]
            [clojure.string :as string]
            [lt.objs.clients :as clients]
            [lt.objs.notifos :as notifos]
            [lt.util.load :as load]
            [lt.util.cljs :refer [js->clj]])
  (:require-macros [lt.macros :refer [behavior defui]]))

;;****************************************************
;; Proc
;;****************************************************

(def shell (load/node-module "shelljs"))
(def hs-path (files/join plugins/*plugin-dir* "src-hs/Server.hs"))

(behavior ::on-out
          :triggers #{:proc.out}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (object/update! this [:buffer] str out)
                        (when (> (.indexOf out "Connected") -1)
                          (do
                            (notifos/done-working)
                            (object/merge! this {:connected true})
                            ;(object/destroy! this)
                            )))))

(behavior ::on-error
          :triggers #{:proc.error}
          :reaction (fn [this data]
                      (let [out (.toString data)]
                        (when-not (> (.indexOf (:buffer @this) "Connected") -1)
                          (object/update! this [:buffer] str data)
                          ))
                      ))

(behavior ::on-exit
          :triggers #{:proc.exit}
          :reaction (fn [this data]
                      ;(object/update! this [:buffer] str data)
                      (when-not (:connected @this)
                        (notifos/done-working)
                        (popup/popup! {:header "We couldn't connect."
                                       :body [:span "Looks like there was an issue trying to connect
                                              to the project. Here's what we got:" [:pre (:buffer @this)]]
                                       :buttons [{:label "close"}]})
                        (clients/rem! (:client @this)))
                      (proc/kill-all (:procs @this))
                      (object/destroy! this)
                      ))

(object/object* ::connecting-notifier
                :triggers []
                :behaviors [::on-exit ::on-error ::on-out]
                :init (fn [this client]
                        (object/merge! this {:client client :buffer ""})
                        nil))

(defn escape-spaces [s]
  (if (= files/separator "\\")
    (str "\"" s "\"")
    s))


(defn run-py [{:keys [path project-path name client] :as info}]
  (let [n (notifos/working "Connecting..")
        obj (object/create ::connecting-notifier client)]
    (proc/exec {:command "ghci"
                :args [(escape-spaces hs-path) tcp/port (clients/->id client)]
                :cwd project-path
                :env {}
                :obj obj})))


(defn check-ghci [obj]
  (assoc obj :ghci (.which shell "ghci")))

(defn check-client [obj]
  (assoc obj :haskell-client (files/exists? hs-path)))

(defn find-project [obj]
  (let [p (:path obj)
        roots (files/get-roots)]
    (loop [cur p
           prev ""]
      (if (or (empty? cur)
              (roots cur)
              (= cur prev))
        (assoc obj :project-path nil)
        (if (and (not (some #(.endsWith % ".cabal") (files/ls-sync cur)))
                 (files/dir? cur))
          (assoc obj :project-path cur)
          (recur (files/parent cur) cur))))))

(defn notify [obj]
  (let [{:keys [ghci project-path path haskell-client client]} obj]
    (cond
     (or (not ghci) (empty? ghci)) (do
                                     (clients/rem! client)
                                     (notifos/done-working)
                                     (popup/popup! {:header "We couldn't find ghci."
                                                    :body "In order to evaluate in ghci files, a Haskell interpreter has to be installed and on your system PATH."
                                                    :buttons [{:label "Download Haskell"
                                                               :action (fn []
                                                                         (platform/open "http://www.haskell.org/platform/"))}
                                                              {:label "ok"}]}))
     (not project-path) (do
                          (clients/rem! client)
                          (notifos/done-working)
                          (popup/popup! {:header "We couldn't find this file."
                                         :body "In order to evaluate in Haskell files, the file has to be on disk somewhere."
                                         :buttons [{:label "Save this file"
                                                    :action (fn []
                                                              (cmd/exec! :save)
                                                              (try-connect obj))}
                                                   {:label "Cancel"
                                                    :action (fn []
                                                              )}]}))
     :else (run-hs obj))
    obj))

(defn check-all [obj]
  (-> obj
      (check-ghci)
      (check-client)
      (find-project)
      (notify)))

;;****************************************************
;; Eval
;;****************************************************

(defn try-connect [{:keys [info]}]
  (let [path (:path info)
        client (clients/client! :haskell.client)]
    (check-all {:path path
                :client client})
    client))

(defn haskell-watch [meta src]
  (let [meta (js/JSON.stringify (clj->js meta))]
    (str "sys.modules['lttools'].__dict__['watch'](" src ", " meta ")")))

(behavior ::watch-src
          :triggers #{:watch.src+}
          :reaction (fn [editor cur meta src]
                      (haskell-watch meta src)))

(behavior ::on-eval
          :triggers #{:eval}
          :reaction (fn [editor]
                      (object/raise haskell :eval! {:origin editor
                                                    :info (assoc (@editor :info)
                                                            :code (watches/watched-range editor nil nil haskell-watch))})))

(behavior ::on-eval.one
          :triggers #{:eval.one}
          :reaction (fn [editor]
                      (let [code (watches/watched-range editor nil nil haskell-watch)
                            pos (ed/->cursor editor)
                            info (:info @editor)
                            info (if (ed/selection? editor)
                                   (assoc info
                                     :code (ed/selection editor)
                                     :meta {:start (-> (ed/->cursor editor "start") :line)
                                            :end (-> (ed/->cursor editor "end") :line)})
                                   (assoc info :pos pos :code code))]
                        (object/raise haskell :eval! {:origin editor
                                                      :info info}))))

(behavior ::haskell-watch
          :triggers #{:editor.eval.haskell.watch}
          :reaction (fn [editor res]
                      (when-let [watch (get (:watches @editor) (-> res :meta :id))]
                        (let [str-result (:result res)]
                          (object/raise (:inline-result watch) :update! str-result)))))

(behavior ::haskell-result
          :triggers #{:editor.eval.haskell.result}
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (object/raise editor :editor.result (:result res) {:line (:end (:meta res))
                                                                         :start-line (-> res :meta :start)})))

(behavior ::haskell-success
          :triggers #{:editor.eval.haskell.success}
          :reaction (fn [editor res]
                      (notifos/done-working)
                      (object/raise editor :editor.result "✓" {:line (-> res :meta :end)
                                                               :start-line (-> res :meta :start)})))

(behavior ::haskell-error
          :triggers #{:editor.eval.haskell.error}
          :reaction (fn [editor ex]
                      (notifos/done-working)
                      (object/raise editor :editor.exception (:ex ex) {:line (-> ex :meta :end)
                                                                       :start-line (-> ex :meta :start)})))

(behavior ::haskell-printer
          :triggers #{:editor.eval.haskell.print}
          :reaction (fn [editor p]
                      (console/loc-log {:file (files/basename (:file p))
                                        :line "stdout"
                                        :content (:msg p)})))

(behavior ::eval!
          :triggers #{:eval!}
          :reaction (fn [this event]
                      (let [{:keys [info origin]} event
                            client (-> @origin :client :default)]
                        (notifos/working "")
                        (clients/send (eval/get-client! {:command :editor.eval.haskell
                                                         :origin origin
                                                         :info info
                                                         :create try-connect})
                                      :editor.eval.haskell
                                      info
                                      :only
                                      origin))))

(behavior ::connect
          :triggers #{:connect}
          :reaction (fn [this path]
                      (try-connect {:info {:path path}})))


(object/object* ::haskell-lang
                :tags #{:haskell.lang})

(def haskell (object/create ::haskell-lang))

(scl/add-connector {:name "Haskell"
                    :desc "Select a directory to serve as the root of your Haskell project."
                    :connect (fn []
                               (dialogs/dir haskell :connect))})

(behavior ::haskell-exe
          :triggers #{:object.instant}
          :desc "Haskell: Set the path to the ghci executable for clients"
          :type :user
          :params [{:label "path"
                    :type :path}]
          :exclusive true
          :reaction (fn [this exe]
                      (object/merge! haskell {:ghci-exe exe})))
