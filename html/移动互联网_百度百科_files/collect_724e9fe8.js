F.module("/static/lemma/ui/view/collect/collect.js",function(d,b){var c=d("/static/common/lib/tangram/base/base.js");var a=d("/static/common/ui/nslog/nslog.js");d("/static/common/ui/userlogin/userlogin.js");c("#collectBtn").click(function(){if(!window.curUser){userlogin()}else{if(!c(this).hasClass("collectflag")){c.get("/user/submit/addfavolemma?lemmaid="+baikeViewInfo.id+"&sublemmaid="+baikeViewInfo.subLemmaId,function(e){var e=c.json.decode(e);if(e.errno==0){c("#collectBtn").addClass("collectflag");c("#collectBtn .collect_txt").text("\u5df2\u6536\u85cf");c("#topToolbar .topshoucangbtn").removeClass("topshoucang").addClass("topshoucangset").addClass("topshoucangflag")}});a(location.href,9122)}else{if(c(this).hasClass("collectflag")){c("#collectBtn .collect_icon, #collectBtn .collect_txt").click(function(){c.get("/user/submit/delfavolemma?lemmaid="+baikeViewInfo.id+"&sublemmaid="+baikeViewInfo.subLemmaId,function(e){var e=c.json.decode(e);if(e.errno==0){c("#collectBtn .collect-tip").hide();c("#collectBtn").removeClass("collectflag");c("#collectBtn .collect_txt").text("\u6536\u85cf");c("#topToolbar .topshoucangbtn").addClass("topshoucang").removeClass("topshoucangset-hover").removeClass("topshoucangset").removeClass("topshoucangflag")}})})}}}});c("#collectBtn").mouseover(function(){if(c(this).hasClass("collectflag")){c(".collect-tip",this).show()}});c("#collectBtn").mouseout(function(){if(c(this).hasClass("collectflag")){c(this).removeClass("collectover");c(".collect-tip",this).hide()}});return b},["/static/common/lib/tangram/base/base.js","/static/common/ui/nslog/nslog.js","/static/common/ui/userlogin/userlogin.js"]);