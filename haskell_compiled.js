if(!lt.util.load.provided_QMARK_('lt.objs.langs.haskell')) {
goog.provide('lt.objs.langs.haskell');
goog.require('cljs.core');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.files');
goog.require('lt.objs.notifos');
goog.require('lt.objs.proc');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('clojure.string');
goog.require('lt.objs.files');
goog.require('lt.util.load');
goog.require('clojure.string');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.util.load');
goog.require('lt.objs.proc');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.editor');

lt.objs.langs.haskell.exec = lt.util.load.node_module.call(null,"shelljs").exec;

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
{return cb.call(null,new_out,err_out);
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

lt.objs.langs.haskell.selection_info = (function selection_info(editor){var pos = lt.objs.editor.__GT_cursor.call(null,editor);var info = new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var info__$1 = (cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor))?cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",1123661780),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"start")),new cljs.core.Keyword(null,"end","end",1014004813),new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(lt.objs.editor.__GT_cursor.call(null,editor,"end"))], null),new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.selection.call(null,editor)):cljs.core.assoc.call(null,info,new cljs.core.Keyword(null,"pos","pos",1014015430),pos,new cljs.core.Keyword(null,"code","code",1016963423),lt.objs.editor.line.call(null,editor,new cljs.core.Keyword(null,"line","line",1017226086).cljs$core$IFn$_invoke$arity$1(pos))));return info__$1;
});

lt.objs.langs.haskell.__BEH__on_eval__DOT__one = (function __BEH__on_eval__DOT__one(editor){var info = lt.objs.langs.haskell.selection_info.call(null,editor);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info))))
{return null;
} else
{return lt.object.raise.call(null,lt.objs.langs.haskell.haskell,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-eval.one","lt.objs.langs.haskell/on-eval.one",613177222),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_eval__DOT__one,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.one","eval.one",1173589382),null], null), null));

lt.objs.langs.haskell.show_result = (function show_result(editor,loc){return (function (output,error_output){var results = clojure.string.split.call(null,output,"--EvalFinished--\n");var res = cljs.core.peek.call(null,results);var res__$1 = (cljs.core.truth_(clojure.string.blank_QMARK_.call(null,res))?"-- ok":res);if(cljs.core.truth_(error_output))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),error_output,loc);
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.result","editor.result",4030217008),res__$1,loc);
}
});
});

lt.objs.langs.haskell.prepare_code = (function prepare_code(code){return clojure.string.replace.call(null,code,/^(\w+)(\s+)?=/,"let $1 =");
});

lt.objs.langs.haskell.get_ghci = (function get_ghci(editor){var ghci = new cljs.core.Keyword(null,"haskell.client","haskell.client",4292563063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor));var ghci__$1 = ((cljs.core.not.call(null,ghci))?(function (){var ghci__$1 = lt.objs.langs.haskell.ghci_process.call(null,((function (ghci){
return (function (p1__8263_SHARP_,p2__8264_SHARP_){return cljs.core.get_in.call(null,cljs.core.deref.call(null,editor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.result-fn","haskell.result-fn",3772146800)], null)).call(null,p1__8263_SHARP_,p2__8264_SHARP_);
});})(ghci))
);lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.client","haskell.client",4292563063)], null),((function (ghci__$1,ghci){
return (function (_,n){return n;
});})(ghci__$1,ghci))
,ghci__$1);
return ghci__$1;
})():ghci);return ghci__$1;
});

lt.objs.langs.haskell.__BEH__eval_BANG_ = (function __BEH__eval_BANG_(this$,event){var map__8266 = event;var map__8266__$1 = ((cljs.core.seq_QMARK_.call(null,map__8266))?cljs.core.apply.call(null,cljs.core.hash_map,map__8266):map__8266);var origin = cljs.core.get.call(null,map__8266__$1,new cljs.core.Keyword(null,"origin","origin",4300251800));var info = cljs.core.get.call(null,map__8266__$1,new cljs.core.Keyword(null,"info","info",1017141280));var loc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(function (){var or__6741__auto__ = cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"end","end",1014004813)], null));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"line","line",1017226086)], null));
}
})()], null);var ghci = lt.objs.langs.haskell.get_ghci.call(null,origin);lt.object.update_BANG_.call(null,origin,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.result-fn","haskell.result-fn",3772146800)], null),(function (_,n){return n;
}),lt.objs.langs.haskell.show_result.call(null,origin,loc));
return lt.objs.langs.haskell.ghci_command.call(null,ghci,lt.objs.langs.haskell.prepare_code.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","eval!","lt.objs.langs.haskell/eval!",3675368899),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__eval_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval!","eval!",1110791799),null], null), null));

lt.objs.langs.haskell.__BEH__on_eval__DOT__type = (function __BEH__on_eval__DOT__type(editor){var info = lt.objs.langs.haskell.selection_info.call(null,editor);var loc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",1017226086),(function (){var or__6741__auto__ = cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"end","end",1014004813)], null));if(cljs.core.truth_(or__6741__auto__))
{return or__6741__auto__;
} else
{return cljs.core.get_in.call(null,info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pos","pos",1014015430),new cljs.core.Keyword(null,"line","line",1017226086)], null));
}
})()], null);var ghci = lt.objs.langs.haskell.get_ghci.call(null,editor);if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info))))
{return null;
} else
{lt.object.update_BANG_.call(null,editor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"haskell.result-fn","haskell.result-fn",3772146800)], null),(function (_,n){return n;
}),lt.objs.langs.haskell.show_result.call(null,editor,loc));
return lt.objs.langs.haskell.ghci_command.call(null,ghci,[cljs.core.str(":type "),cljs.core.str(lt.objs.langs.haskell.prepare_code.call(null,new cljs.core.Keyword(null,"code","code",1016963423).cljs$core$IFn$_invoke$arity$1(info)))].join(''));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","on-eval.type","lt.objs.langs.haskell/on-eval.type",2089978410),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__on_eval__DOT__type,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"eval.type","eval.type",1669336254),null], null), null));

lt.objs.sidebar.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"editor-type-form","editor-type-form",3170690697),new cljs.core.Keyword(null,"desc","desc",1016984067),"Eval: Get the type of a form in editor",new cljs.core.Keyword(null,"exec","exec",1017031683),(function (){var temp__4092__auto__ = lt.objs.editor.pool.last_active.call(null);if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"eval.type","eval.type",1669336254));
} else
{return null;
}
})], null));

lt.objs.langs.haskell.__BEH__doc = (function __BEH__doc(editor){if(cljs.core.truth_(lt.objs.editor.selection_QMARK_.call(null,editor)))
{var loc = lt.objs.editor.__GT_cursor.call(null,editor,"end");var token = lt.objs.editor.selection.call(null,editor);var cmd = [cljs.core.str("hoogle search -i "),cljs.core.str(token)].join('');return lt.objs.langs.haskell.exec.call(null,cmd,(function (return_code,output){if(cljs.core._EQ_.call(null,return_code,0))
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.doc.show!","editor.doc.show!",1417900223),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1017277949),token,new cljs.core.Keyword(null,"ns","ns",1013907767),"",new cljs.core.Keyword(null,"doc","doc",1014003882),output,new cljs.core.Keyword(null,"loc","loc",1014011570),loc], null));
} else
{return lt.object.raise.call(null,editor,new cljs.core.Keyword(null,"editor.exception","editor.exception",3983021184),output,loc);
}
}));
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","doc","lt.objs.langs.haskell/doc",3301893264),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.objs.langs.haskell.__BEH__doc,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.doc","editor.doc",3751347369),null], null), null));

lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","haskell-lang","lt.objs.langs.haskell/haskell-lang",2628060897),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"haskell.lang","haskell.lang",2228745498),null], null), null));

lt.objs.langs.haskell.haskell = lt.object.create.call(null,new cljs.core.Keyword("lt.objs.langs.haskell","haskell-lang","lt.objs.langs.haskell/haskell-lang",2628060897));

}

//# sourceMappingURL=