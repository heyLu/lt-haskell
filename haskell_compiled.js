if(!lt.util.load.provided_QMARK_('lt.objs.langs.haskell')) {
goog.provide('lt.objs.langs.haskell');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor');

lt.objs.langs.haskell.__BEH__on_proc_out = (function __BEH__on_proc_out(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null),cljs.core.str,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-out","lt.objs.langs.haskell/on-proc-out",1745558851),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_proc_out,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.out","proc.out",4302083112),null], null), null));

lt.objs.langs.haskell.__BEH__on_proc_error = (function __BEH__on_proc_error(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null),cljs.core.str,data.toString());
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-error","lt.objs.langs.haskell/on-proc-error",578456649),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_proc_error,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.error","proc.error",4143512802),null], null), null));

lt.objs.langs.haskell.__BEH__on_proc_exit = (function __BEH__on_proc_exit(this$,data){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"running","running",2564688177)], null),cljs.core.constantly.call(null,false));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-exit","lt.objs.langs.haskell/on-proc-exit",3391114753),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_proc_exit,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"proc.exit","proc.exit",4162906152),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","runner","lt.objs.langs.haskell/runner",4789578392),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-out","lt.objs.langs.haskell/on-proc-out",1745558851),new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-error","lt.objs.langs.haskell/on-proc-error",578456649),new cljs.core.Keyword("lt.objs.langs.haskell","on-proc-exit","lt.objs.langs.haskell/on-proc-exit",3391114753)], null),new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"process","process",704385505),null,new cljs.core.Keyword(null,"out","out",1014014656),null,new cljs.core.Keyword(null,"error","error",1110689146),null], null),new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,command,args,init_fn){var p = lt.objs.proc.simple_spawn_STAR_.call(null,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"command","command",1964298941),command,new cljs.core.Keyword(null,"args","args",1016906831),args], null),null,cljs.core.PersistentArrayMap.EMPTY);if(cljs.core.truth_(init_fn))
{init_fn.call(null,p);
} else
{}
lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"process","process",704385505)], null),(function (_,n){return n;
}),p);
lt.objs.notifos.done_working.call(null,"ghci started");
return null;
}));

lt.objs.langs.haskell.ghci_process = (function ghci_process(cb){var o = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","runner","lt.objs.langs.haskell/runner",4789578392),"ghci",cljs.core.PersistentVector.EMPTY,(function (p){return p.stdin.write(":set prompt \"--EvalFinished--\\n\"\n");
}));cljs.core.add_watch.call(null,o,new cljs.core.Keyword(null,"ghci-watch","ghci-watch",4090499067),(function (_,___$1,old,new$){var old_out = cljs.core.get_in.call(null,old,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null));var new_out = cljs.core.get_in.call(null,new$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"out","out",1014014656)], null));var err_out = cljs.core.get_in.call(null,new$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"error","error",1110689146)], null));if(cljs.core.truth_((function (){var and__6729__auto__ = new_out;if(cljs.core.truth_(and__6729__auto__))
{var and__6729__auto____$1 = cljs.core.not_EQ_.call(null,old_out,new_out);if(and__6729__auto____$1)
{return new_out.contains("--EvalFinished--");
} else
{return and__6729__auto____$1;
}
} else
{return and__6729__auto__;
}
})()))
{return cb.call(null,(function (){var or__6741__auto__ = err_out;if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return new_out;
}
})());
} else
{return null;
}
}));
return o;
});

lt.objs.langs.haskell.ghci_command = (function ghci_command(ghci_obj,command){var stdin = cljs.core.get_in.call(null,cljs.core.deref.call(null,ghci_obj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928),new cljs.core.Keyword(null,"process","process",704385505)], null)).stdin;lt.object.update_BANG_.call(null,ghci_obj,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proc","proc",1017353928)], null),(function (p){return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"out","out",1014014656),null,new cljs.core.Keyword(null,"error","error",1110689146),null);
}));
return stdin.write([cljs.core.str(command),cljs.core.str("\n")].join(''));
});

lt.objs.langs.haskell.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos))));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info__$1))))
{return null;
} else
{return lt.object.raise.call(null,lt.objs.langs.haskell.haskell,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info__$1], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-eval.one","lt.objs.langs.haskell/on-eval.one",613177222),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));

lt.objs.langs.haskell.show_result = (function show_result(editor,loc){return (function (output){var results = clojure.string.split.call(null,output,"--EvalFinished--\n");var res = cljs.core.peek.call(null,results);var res__$1 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,res))?"-- ok":res);if(cljs.core.truth_(cljs.core.re_find.call(null,/\*\*\* Exception|<interactive>/,res__$1)))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),res__$1,loc);
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),res__$1,loc);
}
});
});

lt.objs.langs.haskell.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8208 = event;var map__8208__$1 = ((cljs.core.seq_QMARK_.call(null,map__8208))?cljs.core.apply.call(null,cljs.core.hash_map,map__8208):map__8208);var origin = cljs.core.get.call(null,map__8208__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8208__$1,new cljs.core.Keyword(null,"info","info",1017141280));var loc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(function (){var or__6741__auto__ = cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"end","end",1014004813)], null));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"line","line",1017226086)], null));
}
})()], null);var ghci = new cljs.core.Keyword(null,"haskell.client","haskell.client",4292563063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,origin));var ghci__$1 = ((cljs.core.not.call(null,ghci))?(function (){var ghci__$1 = lt.objs.langs.haskell.ghci_process.call(null,((function (map__8208,map__8208__$1,origin,info,loc,ghci){
return (function (p1__8206_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,origin),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.result-fn","haskell.result-fn",3772146800)], null)).call(null,p1__8206_SHARP_);
});})(map__8208,map__8208__$1,origin,info,loc,ghci))
);lt.object.update_BANG_.call(null,origin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.client","haskell.client",4292563063)], null),((function (ghci__$1,map__8208,map__8208__$1,origin,info,loc,ghci){
return (function (_,n){return n;
});})(ghci__$1,map__8208,map__8208__$1,origin,info,loc,ghci))
,ghci__$1);
return ghci__$1;
})():ghci);lt.object.update_BANG_.call(null,origin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.result-fn","haskell.result-fn",3772146800)], null),(function (_,n){return n;
}),lt.objs.langs.haskell.show_result.call(null,origin,loc));
return lt.objs.langs.haskell.ghci_command.call(null,ghci__$1,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","eval!","lt.objs.langs.haskell/eval!",3675368899),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","haskell-lang","lt.objs.langs.haskell/haskell-lang",2628060897),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"haskell.lang","haskell.lang",2228745498),null], null), null));

lt.objs.langs.haskell.haskell = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","haskell-lang","lt.objs.langs.haskell/haskell-lang",2628060897));

}

//# sourceMappingURL=