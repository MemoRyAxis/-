// netdev/uilib/trunk/apps/weibo/weibocard.js
(function(Z,af){var U=af.Event,Q=af.DOM,ae=af.extend,T=af.isNumber,L=af.isFunction,H=af.isString,X=af.isElement,M=af.isObject,P=af.arrayify,aa=af.trim,I=Q.addClass,V=function(){},N=Z.document,D=af.query,S=function(b,c){var a=D(b,c);if(a&&a.length){return a[0]}return null},Y=function(a){var b=a.cloneNode(true);if(ie<8){b.innerHTML=a.innerHTML}return b},E=function(b,c){var a=c.createElement("div");a.innerHTML=b;return a},ah=function(e,b){if(e&&e.length){var a=null,d=0,c=e.length;b=b||e[0].ownerDocument;a=b.createDocumentFragment();if(e.item){e=P(e)}for(d=0,len=e.length;d<len;d++){a.appendChild(e[d])}return a}return null},ac=function(b,c){if(typeof b==="string"&&(b=aa(b))){var e=null,a,d=E;c=c||N;a=d(b,c).childNodes;if(a.length===1){e=a[0].parentNode.removeChild(a[0])}else{e=ah(a,c)}return e}return null},aj=Object.create?function(b,a){return Object.create(b,{constructor:{value:a}})}:function(c,a){function d(){}d.prototype=c;var b=new d();b.constructor=a;return b},K=function(c,a,d,h){if(!a||!c){return c}var f=a.prototype,g,e,b;g=aj(f,c);c.prototype=ae(g,c.prototype,true);c.superclass=aj(f,a);if(d){ae(g,d,true)}if(h){ae(c,h,true)}return c},J="_sinaguid_"+(new Date()).getTime(),W={},ad=function(a){if(!H(a)){a=""}var b="counter"+a;if(!W[b]){W[b]=0}W[b]++;return a+W[b]},ag=function(a,d){var c=null;if(a){c=(typeof a==="string")?a:a[J];if(!c&&!d){try{a[J]=c=ad()}catch(b){}}c=c||null}return c},R={},ab={INIT:"init",INIT_END:"initend",RENDER:"render",RENDER_END:"renderend",DESTROY:"destroy",DESTROY_END:"destroyend"},O={render:null,source:null,width:"",height:""};function ai(b){this.init.apply(this,arguments);var a=b&&b.render;if(a){if(a!==true){this.render(a)}else{this.render()}}}ae(ai.prototype,{WRAPPER_TAG:"div",CONTENT_TAG:"div",CSS_PREFIX:"sina-",_initialized:false,_destroyed:false,_rendered:false,init:function(a){a=a||{};this.trigger(ab.INIT,{config:a});this._initAll(a);this._initialized=true;this.trigger(ab.INIT_END)},destroy:function(){this.trigger(ab.DESTROY);this._destroyAll();this.removeListener();this._destroyed=true;this.trigger(ab.DESTROY_END)},_initAll:function(){if(!this._initialized){var a,b,c=this._inheritanceChain(),d;for(d=c.length-1;d>=0;d--){a=c[d];b=a.prototype;if(b.hasOwnProperty("initializer")){b.initializer.apply(this,arguments)}}}},_destroyAll:function(){if(!this._destroyed){var a,b,c=this._inheritanceChain(),d,e;for(d=0,e=c.length;d<e;d++){a=c[d];b=a.prototype;if(b.hasOwnProperty("destructor")){b.destructor.apply(this,arguments)}}}},initializer:function(b){var a=b.source;if(X(a)){this.contentBox=a}else{if(H(a)){this.contentBox=S(a)}else{this.contentBox=null}}this._width=b.width||"";this._height=b.height||""},destructor:function(){},render:function(i){this.trigger(ab.RENDER,{container:i});if(H(i)){i=S(i)}else{if(!X(i)){i=null}}var d=i,a,e=this.contentBox,g=!e,c=N,b=this.constructor,f=this.WRAPPER_TAG,h=this.CONTENT_TAG;if(ag(e,true)){return}ag(e);this.elements={};this.wrapperBox=a=c.createElement(f);if(g){this.contentBox=e=c.createElement(h);a.appendChild(e)}else{e.parentNode.insertBefore(a,e);a.appendChild(e);this.queryElements()}if(d){if(d!==a.parentNode){d.insertBefore(a,d.firstChild)}}else{if(g){d=N.body;d.insertBefore(a,d.firstChild)}}this._renderAll();this._rendered=true;this.trigger(ab.RENDER_END)},_renderAll:function(){if(this._initialized&&!this._rendered){var b,c,f=this._inheritanceChain(),g,a=this.CSS_PREFIX||"",e="",h=this.wrapperBox,d=this.contentBox;for(g=f.length-1;g>=0;g--){b=f[g];e=a+b.NAME;c=b.prototype;if(c.hasOwnProperty("renderer")){c.renderer.apply(this,arguments)}I(h,e)}I(d,e+"-content")}},renderer:function(){var a=this.wrapperBox,b=this.contentBox,c=this._width,d=this._height;if(!a||!b){return}if(T(c)){a.style.width=c+"px"}else{if(H(c)){a.style.width=c}}if(T(d)){a.style.height=d+"px"}else{if(H(d)){a.style.height=d}}},queryElements:function(){var e=this._getQueries(),d,b,c=this.contentBox,a=this.elements;for(d in e){b=S(e[d],c);if(b){a[d]=b}}},_getQueries:function(){var d={},b=this._inheritanceChain(),c,a;for(c=b.length-1;c>=0;c--){a=b[c]._queries;if(a){ae(d,a,true)}}return d},_inheritanceChain:function(){if(!this.__chain){var b=[],a=this.constructor;while(a){b.push(a);a=a.superclass&&a.superclass.constructor}this.__chain=b}return this.__chain}});af.makeTarget(ai);ae(ai,{NAME:"widget",guid:ad,stamp:ag});af.Widget=ai;af.createWidget=function(a,d,b){if(!L(a)){b=d;d=a;a=ai}b=b||{};d=d||{};var c=function(){c.superclass.constructor.apply(this,arguments)};K(c,a,d,b);return c}})(window,SINA);(function(i,g){if(i.WeiboMod&&i.WeiboMod.VERSION){return}var j=g.Widget,f=g.createWidget,h={VERSION:"0.1",guid:j.guid,stamp:j.stamp,createWidget:f};i.WeiboMod=h})(window,SINA);(function(L,Q){var z=L.WeiboMod,x=Q.arrayify,M=Q.trim,C=Q.isNumber,N=Q.isArray,y=Q.DOM,P=y.next,E=L.document,K=function(b){var a=b.cloneNode(true);if(ie<8){a.innerHTML=b.innerHTML}return a},D=function(c,a){var b=a.createElement("div");b.innerHTML=c;return b},R=function(b,a){if(b&&b.length){var e=null,d=0,c=b.length;a=a||b[0].ownerDocument;e=a.createDocumentFragment();if(b.item){b=x(b)}for(d=0,len=b.length;d<len;d++){e.appendChild(b[d])}return e}return null},O=function(b,c){if(typeof b==="string"&&(b=M(b))){var a=null,e,d=D;c=c||E;e=d(b,c).childNodes;if(e.length===1){a=e[0].parentNode.removeChild(e[0])}else{a=R(e,c)}return a}return null},F=function(c){var b=c.offsetParent,e=c.offsetLeft,d=0,a=E.body;while(b){e+=b.offsetLeft;b=b.offsetParent}b=c.parentNode;while(b!==a){d+=b.scrollLeft;b=b.parentNode}return e-d},G=function(b){var d=b.offsetParent,e=b.offsetTop,a=0,c=E.body;while(d){e+=d.offsetTop;d=d.offsetParent}d=b.parentNode;while(d!==c){a+=d.scrollTop;d=d.parentNode}return e-a},H=(function(){var e=!!E.selection,b,a,c,d;if(e){b=function(j){j.focus();var i={text:"",start:0,end:0},h=0,g=E.selection.createRange(),f=E.body.createTextRange();f.moveToElementText(j);i.text=g.text;i.bookmark=g.getBookmark();for(;f.compareEndPoints("StartToStart",g)<0&&g.moveStart("character",-1)!==0;h++){if(j.value.charAt(h)=="\n"){h++}}i.start=h;i.end=i.text.length+i.start;return i};a=function(h,g){if(!g){this.toHead()}var f=h.createTextRange();if(h.value.length===g.start){f.collapse(false);f.select()}else{f.moveToBookmark(g.bookmark);f.select()}};c=function(i,h,f){var g;this.setPosition(i,h);g=E.selection.createRange();g.text=f;g.setEndPoint("StartToEnd",g);g.select()};d=function(h,f){var g=h.createTextRange();g.collapse(true);g.moveEnd("character",f);g.moveStart("character",f);g.select()}}else{b=function(g){g.focus();var f={text:"",start:0,end:0};f.start=g.selectionStart;f.end=g.selectionEnd;f.text=(f.start!==f.end)?g.value.substring(f.start,f.end):"";return f};a=function(g,f){if(!f){this.toHead(g);return}g.focus();g.setSelectionRange(f.start,f.end)};c=function(m,l,f){var j,i,h,g,k;this.setPosition(m,l);j=m.value;i=j.substring(0,l.start)+f+j.substring(l.end);h=g=l.start+f.length;k=m.scrollTop;m.value=i;if(m.scrollTop!=k){m.scrollTop=k}m.setSelectionRange(h,g)};d=function(g,f){g.focus();g.setSelectionRange(f,f)}}return{getPosition:b,setPosition:a,setText:c,moveTo:d,toHead:function(f){this.moveTo(f,0)},toTail:function(f){this.moveTo(f,f.value.length)}}})(),J=(function(){var g=(function(){var j=E.createElement("canvas");return"getContext" in j})(),f=1,e=2,b=440,i=Math.PI/2,h=[{M11:1,M12:0,M21:0,M22:1},{M11:0,M12:-1,M21:1,M22:0},{M11:-1,M12:0,M21:0,M22:-1},{M11:0,M12:1,M21:-1,M22:0}],a=function(n,q){if(!n){return}var l=n._angle||0,p=0,k=n.width,m=n.height,o=1,r=P(n),j,s;if(!r){r=O('<canvas class="'+(n.className||"")+'" style="display:none;"></canvas>');n.parentNode.insertBefore(r,null)}switch(q){case f:p=(l+3)%4;break;case e:p=(l+1)%4;break;default:if(l===0){return}break}j=r.getContext("2d");if(p===1||p===3){if(m>b){r.width=b;s=r.height=b/m*k;j.save();j.rotate(p*i);if(p===3){j.drawImage(n,-s,0,s,b)}else{j.drawImage(n,0,-b,s,b)}j.restore()}else{r.width=m;r.height=k;j.save();j.rotate(p*i);if(p===3){j.drawImage(n,-k,0)}else{j.drawImage(n,0,-m)}j.restore()}}else{r.width=k;r.height=m;j.save();j.rotate(p*i);if(p===2){j.drawImage(n,-k,-m)}else{j.drawImage(n,0,0)}j.restore()}n.style.display="none";r.style.display="inline";n._angle=p},c="DXImageTransform.Microsoft.Matrix",d=function(o,s){if(!o){return}var m=o._angle||0,p=0,j=o.width,n=o.height,t,k,q=1,r="auto";switch(s){case f:p=(m+3)%4;break;case e:p=(m+1)%4;break;default:if(m===0){return}break}try{t=o.filters.item(c)}catch(l){o.style.filter="progid:"+c+'(SizingMethod="auto expand")';t=o.filters.item(c)}k=h[p];if(p===1||p===3){if(n>b){q=b/n}o.parentNode.style.height=(q*j)+"px"}else{o.parentNode.style.height=n+"px"}t.M11=q*k.M11;t.M12=q*k.M12;t.M21=q*k.M21;t.M22=q*k.M22;o._angle=p};return{TURN_LEFT:f,TURN_RIGHT:e,MAX_IMG_WIDTH:b,DEG_90:i,ROTATE_MATRIX:h,mode:g?"canvas":"filter",rotateCanvas:a,rotateFilter:d,rotate90:g?a:d}})(),T=(function(){function b(h){if(!h){return -1}var g=h.slice(0,10)+h.slice(25)+h.slice(10,25);return Date.parse(g)||-1}function a(){var i=new Date(),g=i.getFullYear(),l=i.getMonth(),h=i.getDate(),k=new Date(g,l,h),j=new Date(g,0,1);return{now:i.getTime(),today:k.getTime(),thisYear:j.getTime()}}var f=a(),d=f.now,c=f.today,e=f.thisYear;return{getCurrent:a,timestamp:b,update:function(){var g=a();d=g.now;c=g.today;e=g.thisYear},displayString:function(g){g=parseInt(g,10)||0;if(!g){return"\u672a\u77e5\u65f6\u95f4"}var h=Math.floor((d-g)/1000),j="",i;if(h<=10){j="10\u79d2\u524d"}else{if(h<=50){j=Math.ceil(h/10)*10+"\u79d2\u524d"}else{if(h<=3600){j=Math.round(h/60)+"\u5206\u949f\u524d"}else{if(g>c&&d-3600000>c){j="\u4eca\u5929\u0020"+(new Date(g)).toTimeString().substr(0,5)}else{if(g>e){i=new Date(g);j=(i.getMonth()+1)+"\u6708"+i.getDate()+"\u65e5\u0020"+i.toTimeString().substr(0,5)}else{i=new Date(g);j=i.getFullYear()+"-"+(i.getMonth()+1)+"-"+i.getDate()+" "+i.toTimeString().substr(0,5)}}}}}return j}}})(),I=function(a){var b=a.charAt(0);if(b=="#"){return'<a href="http://weibo.com/k/'+encodeURIComponent(a.slice(1,-1))+'" target="_blank">'+a+"</a>"}else{if(b=="@"){b=a.slice(5,7);if(b==":/"||b=="s:"){a=a.slice(1);return'@<a href="'+a+'" target="_blank">'+a+"</a>"}else{return'<a href="http://weibo.com/n/'+encodeURIComponent(a.slice(1))+'" target="_blank">'+a+"</a>"}}else{return'<a href="'+a+'"  target="_blank">'+a+"</a>"}}},A=/(?:#[^#]*#|@?http\s?\:\/\/[\w\.\/\-\%\?&\+]{4,}|\@[\w\-\u4e00-\u9fa5]+)/ig,B=function(a){return a.replace(A,I)},S={Textarea:H,Image:J,Time:T,cloneNode:K,createFromString:O,pageX:F,pageY:G,updateWordCount:function(f,h,c){if(!f||!h){return}c=c||0;var d=f.value||"",b=/[^x00-xff]/g,g=Math.round(d.replace(b,"aa").length/2),a=140,e;if((g+c)<=a){e=a-g-c;h.innerHTML="\u4f60\u8fd8\u53ef\u4ee5\u8f93\u5165<em>"+e+"</em>\u5b57"}else{e=g-a+c;h.innerHTML='<span style="color:red">\u5df2\u7ecf\u8d85\u51fa<em>'+e+"</em>\u5b57</span>"}},replaceStatusText:B};z.Utils=S})(window,SINA);(function(V,au){var aw=V.document,ay=aw.documentElement,aj=V.WeiboMod,Y=aj.Utils,av=au.Widget,ao=au.Event,af=au.createWidget,ad=au.extend,E=au.query,ag=au.isNumber,R=au.DOM.style,az=ao.addListener,Z=ao.removeListener,ar=Y.cloneNode,ai=Y.createFromString,O="weibomod-",an="dialog",ae=".",al=O+an+"-",ah=al+"hd",am=al+"bd",at=al+"title",X=al+"close",ab='<div class="',T='"></div>',S=ab+ah+T,U=ab+am+T,P=ab+at+T,Q='<a title="\u5173\u95ed" class="'+X+'" href="javascript:void(0);">x</a>',aA=al+"overlay-b",aa=al+"overlay-p",ax=ab+aA+T,ap=ab+aa+T,ac="show",W="hide",aq="move",ak=aj.createWidget({CSS_PREFIX:O,initializer:function(e){var b,c={},f=true,d=false,a=false;if(e){f=e.borderWidth||"";if(ag(f)){f=f+"px"}d=!!e.overlay;display=e.display||"none";b=e.children;if(b){c.title=b.title||"";c.body=b.body||""}}this._borderWidth=f;this._hasOverlay=d;this._display=display;this._children=c},destructor:function(){},renderer:function(){var k=this.wrapperBox,f=this.contentBox,b=this.constructor,m=this.elements,h=m.header,g=m.body,c=m.title,a=m.close,l,j,d=this._borderWidth,i=this._children,e=this;k.style.position="absolute";f.style.position="relative";if(!h&&!g){h=ai(S);g=ai(U);c=ai(P);a=ai(Q);c.innerHTML=i.title||"";g.innerHTML=i.body||"";h.appendChild(c);h.appendChild(a);f.appendChild(h);f.appendChild(g);m.header=h;m.title=c;m.close=a;m.body=g}if(d){this.borderBox=l=ai(ax);l.style.position="absolute";l.style.left="-"+d;l.style.top="-"+d;k.insertBefore(l,f)}if(this._hasOverlay){this.overlayBox=j=ai(ap);j.style.position="absolute";j.style.left=0;j.style.top=0;k.parentNode.insertBefore(j,k)}k.style.display=this._display;if(j){j.style.display=this._display}az(a,"click",function(n){e.hide();return false})},move:function(b,a){if(!this._rendered||this._destroyed){return}this.trigger(aq,{x:b,y:a});var c=this.wrapperBox;if(ag(b)){c.style.left=b+"px"}else{c.style.left=b}if(ag(a)){c.style.top=a+"px"}else{c.style.top=a}},show:function(){if(!this._rendered||this._destroyed){return}this.trigger(ac);var b=this.wrapperBox,c=this.overlayBox,a=this.borderBox;this._adjustSize();b.style.display="block";if(c){c.style.display="block"}},_adjustSize:function(){if(!this._rendered||this._destroyed){return}var a=this.wrapperBox,e=this.overlayBox,f=this.borderBox,b=parseInt(this._borderWidth)||0,d=parseInt(R(a,"width"))||0,c=parseInt(R(a,"height"))||0;if(e){e.style.width=((ay&&ay.scrollWidth)||2000)+"px";e.style.height=((ay&&ay.scrollHeight)||2000)+"px"}if(f){f.style.width=(d+b*2)+"px";f.style.height=(c+b*2)+"px"}},hide:function(){if(!this._rendered||this._destroyed){return}this.trigger(W);var b=this.wrapperBox,a=this.overlayBox;b.style.display="none";if(a){a.style.display="none"}},moveToPageCenter:function(){var k=this.wrapperBox,a=V.self,i=aw.body,c,f,d,e,g,j,b,h;d=a.pageXOffset||(ay&&ay.scrollLeft)||i.scrollLeft||0;e=a.pageYOffset||(ay&&ay.scrollTop)||i.scrollTop||0;g=a.innerWidth||(ay&&ay.clientWidth)||i.clientWidth||0;j=a.innerHeight||(ay&&ay.clientHeight)||i.clientHeight||0;b=parseInt(R(k,"width"))||0;h=parseInt(R(k,"height"))||0;c=d+g/2-b/2;f=e+j/2-h/2;if(c<0){c=0}if(f<0){f=0}this.move(c,f)}},{NAME:an,HEADER_TEMPLATE:S,BODY_TEMPLATE:U,CLOSE_TEMPLATE:Q,TITLE_TEMPLATE:P,_queries:{header:ae+ah,body:ae+am,title:ae+at,close:ae+X},_classNames:{header:ah,body:am,title:at,close:X}});aj.Dialog=ak})(window,SINA);(function(ae,aJ){var aK=ae.document,ay=ae.WeiboMod,ah=ay.Utils,al=ah.Time,aF=al.update,X=al.timestamp,aA=al.displayString,aE=ah.cloneNode,aw=ah.createFromString,ar=aJ.extend,S=aJ.query,aC=aJ.DOM,aD=aJ.Event,aL=aD.addListener,ai=aD.removeListener,W="weibomod-",aB="usercard",av=".",az=W+aB+"-",an=az+"portrait",au=az+"info",ap=az+"description",ax=az+"post",at=az+"name",ag=az+"v",am=az+"counts",aH=az+"followBtn",af=az+"notfollowed",aM=az+"followed",aG='<div class="',aI='">',ad="</div>",ao=aG+an+aI+ad,aj=aG+au+aI+ad,aq=aG+ap+aI+ad,ak=aG+ax+aI+ad,D='<p class="'+at+'"></p>',E='<p class="'+am+'"></p>',Y='<a class="'+aH+" "+af+'" href="javascript:void(0)"><em>+</em>\u52a0\u5173\u6ce8</a>',Z='<span class="'+aH+" "+aM+'">\u5df2\u5173\u6ce8</span>',ab="follow",ac="unfollow",aa=ay.createWidget({CSS_PREFIX:W,initializer:function(d){var c={},a=null,b="",e={head:true,followers:true,info:true,followButton:true};if(d){a=d.data||null;b=d.channel||"";ar(e,d.display,true);ar(c,d.children)}this._display=e;this._children=c;this._channel=b;this._userData=a},destructor:function(){},renderer:function(){var k=this,i=k.constructor,g=k.wrapperBox,l=k.contentBox,b=k.elements,j,f,o,h,n,a,e,d,c=k._userData,m=k._channel;j=aw(aa.PORTRAIT_TEMPLATE);f=aw(aa.INFO_TEMPLATE);o=aw(aa.DESC_TEMPLATE);h=aw(aa.POST_TEMPLATE);n=aw(aa.NAME_TEMPLATE);a=aw(aa.COUNT_TEMPLATE);e=aw(aa.FOLLOW_TEMPLATE);d=aw(aa.FOLLOWED_TEMPLATE);f.appendChild(n);f.appendChild(a);f.appendChild(e);f.appendChild(d);l.appendChild(j);l.appendChild(f);l.appendChild(o);l.appendChild(h);b.portrait=j;b.info=f;b.desc=o;b.post=h;b.name=n;b.count=a;b.followBtn=e;b.unfollowBtn=d;e.style.display="none";d.style.display="none";k.setUserData(c,m);aL(e,"click",function(q){var p=k._userData,s=(p&&p.id)||null,r=k._channel;k.trigger(ab,{uid:s,channel:r});return false})},changeStatus:function(d){if(!this._rendered||this._destroyed){return}var b=this.elements,a=b.followBtn,c=b.unfollowBtn;if(d){a.style.display="none";c.style.display="block"}else{a.style.display="block";c.style.display="none"}},setUserData:function(g,f,j){if(!g||!this._rendered||this._destroyed){return}this._userData=g;this._channel=f;var C=this.elements,u=C.portrait,l=C.info,o=C.desc,s=C.post,r=C.name,a=C.count,n=C.followBtn,t=C.unfollowBtn,A,e=(j?"?"+j+"=":"?zw="),I=(f?e+f:""),F=g.maxChar||40,c=g.idstr,G=g.screen_name,p=g.profile_image_url,v=g.profile_url||g.domain||"u/"+c,d=g.verified,m="http://weibo.com/",H=m+v+I,q=m+c+"/fans"+I,h=g.following,z=g.followers_count,b=g.verified_reason||g.description,w=g.status,k,i,y,x,B;u.innerHTML='<a href="'+H+'" target="_blank"><img src="'+p+'" alt="" /></a>';A='<a href="'+H+'" target="_blank">'+G;if(d){A+='<img alt="" title="\u65b0\u6d6a\u8ba4\u8bc1" class="'+ag+'" src="http://timg.sjs.sinajs.cn/t3/style/images/common/transparent.gif" />'}A+="</a>";r.innerHTML=A;a.innerHTML='<a href="'+q+'" target="_blank">\u7c89\u4e1d</a> <em>'+z+"</em>";if(h){n.style.display="none";t.style.display="block"}else{n.style.display="block";t.style.display="none"}o.innerHTML="\u7b80\u4ecb\uff1a"+b;aF();if(w){k=w.proxy_mid_base62||0;i=w.text||"\u65e0";y=w.created_at;x=w.thumbnail_pic;B="http://weibo.com/"+c+"/"+k+I;if(i.length>F){i=i.slice(0,F)+"...";s.innerHTML='<a target="_blank" href="'+B+'">'+aA(X(y))+"</a> "+ah.replaceStatusText(i)+'&nbsp;&nbsp;&nbsp;<a href="'+B+'" target="_blank">\u8be6\u7ec6\u0020&raquo;</a>'}else{s.innerHTML='<a target="_blank" href="'+B+'">'+aA(X(y))+"</a> "+ah.replaceStatusText(i)}s.style.display="block"}else{s.innerHTML="";s.style.display="none"}}},{NAME:aB,PORTRAIT_TEMPLATE:ao,INFO_TEMPLATE:aj,DESC_TEMPLATE:aq,POST_TEMPLATE:ak,NAME_TEMPLATE:D,COUNT_TEMPLATE:E,FOLLOW_TEMPLATE:Y,FOLLOWED_TEMPLATE:Z,_queries:{},_classNames:{},EVENTS:{FOLLOW:ab,UNFOLLOW:ac}});ay.UserCard=aa})(window,SINA);(function(aa,ah){var M=aa.document,R=aa.WeiboMod,aj=R.Utils,S=R.UserCard,af=R.Dialog,L=aj.createFromString,ag=ah.extend,V=ah.later,ae=ah.Array.forEach,Q=ah.DOM,W=ah.Event,ab=Q.style,D=W.addListener,ak="weibomod-",O="usercardpopup",E=".",Z=" ",ai=ak+O+"-",al=ai+"loading",U="http://img.t.sinajs.cn/t3/style/images/common/loading.gif",T='<div class="',X='">',ac="</div>",ad=T+al+X+'<img src="'+U+'" />'+ac,K=ak+"arrow",N=T+K+X,P=["changeStatus"],J=S.EVENTS,Y=[J.FOLLOW,J.UNFOLLOW],I=R.createWidget(R.Dialog,{CSS_PREFIX:ak,initializer:function(d){var c={},a=null,b=null;if(d){a=d.data||null;b=d.channel||null;ag(c,d.children)}this._children=c;this._userCard=new S({data:a,channel:b})},destructor:function(){},renderer:function(){var e=this,m=e.wrapperBox,f=e.contentBox,b=e.constructor,a=e.elements,d=a.title,i=a.header,h=a.body,j,g=P.length,n,k,c,l=e._userCard;k=L(I.LOADING_TEMPLATE);h.appendChild(k);a.loading=k;l.render(h);e._userCard=l;i.style.display="none";c=L(N);f.appendChild(c);a.arrow=c;ae(P,function(o){e[o]=function(){l[o].apply(l,arguments)}});ae(Y,function(o){D(l,o,function(p){e.trigger(o,p)})});D(m,"mouseenter",function(o){if(e._showTimer){e._showTimer.cancel();e._showTimer=null}e.show();return false});D(m,"mouseleave",function(o){if(e._showTimer){e._showTimer.cancel();e._showTimer=null}e._showTimer=V(function(){e.hide();e._showTimer=null},200);return false})},setLoading:function(b){if(!this._rendered||this._destroyed){return}var a=this.elements.loading,c=this._userCard.wrapperBox;if(b){c.style.display="none";a.style.display="block"}else{c.style.display="block";a.style.display="none"}this._adjustSize()},setUserData:function(a,c,b){this._userCard.setUserData(a,c,b);this._adjustSize()}},{NAME:O,LOADING_TEMPLATE:ad,_queries:{},_classNames:{},EVENTS:{SHOW:"show",HIDE:"hide",MOVE:"move",FOLLOW:"follow",UNFOLLOW:"unfollow"}});R.UserCardPopup=I})(window,SINA);(function(u,w){var B=w.extend,t=w.arrayify,p=w.trim,C=!!u.postMessage,r=function(a){a=a||"";var b=(Math.random()+"").slice(2),c=(new Date()).getTime();return""+a+c+b},s=u.document,x=function(a){var b=a.cloneNode(true);if(ie<8){b.innerHTML=a.innerHTML}return b},A=function(b,c){var a=c.createElement("div");a.innerHTML=b;return a},v=function(e,b){if(e&&e.length){var a=null,d=0,c=e.length;b=b||e[0].ownerDocument;a=b.createDocumentFragment();if(e.item){e=t(e)}for(d=0,len=e.length;d<len;d++){a.appendChild(e[d])}return a}return null},y=function(b,c){if(typeof b==="string"&&(b=p(b))){var e=null,a,d=A;c=c||s;a=d(b,c).childNodes;if(a.length===1){e=a[0].parentNode.removeChild(a[0])}else{e=v(a,c)}return e}return null},q="http://api.sina.com.cn/script/javascript/postmsg.html",D="sina.com.cn",z={createNode:y,cloneNode:x,generateId:r,mode:C?"html5":"iframe",config:{proxyUrl:q,domain:D,form:null},setConfig:function(a){B(z.config,a,true)},send:C?function(c){var a=z.sender,b=z.config;if(!a){a=new z.Html5MsgSender({proxyUrl:b.proxyUrl});this.sender=a}a.send(c);return a}:function(c){var a,b=z.config;a=new z.IframeMsgSender({domain:b.domain,form:b.form});a.send(c);return a}};u.XDPost=z})(window,SINA);(function(p,q){var s=p.XDPost,w=q.extend,u=q.isFunction,v=document.addEventListener?function(b,c,a){if(b&&b.addEventListener){b.addEventListener(c,a,false)}}:function(b,c,a){if(b&&b.attachEvent){b.attachEvent("on"+c,a)}},m=document.removeEventListener?function(b,c,a){if(b&&b.removeEventListener){b.removeEventListener(c,a,false)}}:function(b,c,a){if(b&&b.detachEvent){b.detachEvent("on"+c,a)}},n=function(){},x=/^http\s?\:\/\/[a-z\d\-\.]+/i,r="sina-xdpost-iframe-",o=s.generateId,t=function(a){if(!(this instanceof t)){return new t(a)}a=a||{};this.init(a)};w(t.prototype,{ready:false,init:function(a){if(this.ready){return}var f=this,b,c,g,h,e,d=a.proxyUrl;f.onsuccess=a.onsuccess||n;f.onfailure=a.onfailure||n;if(!d){return}e=function(i){if(!f.ready||i.origin!==f.target){return}var j=i.data;if(!j||j==="failure"){f.onfailure&&f.onfailure()}else{f.onsuccess&&f.onsuccess(i.data)}};v(p,"message",e);b=o(r);c='<iframe id="'+b+'" name="'+b+'" src="'+d+'" frameborder="0" style="width:0;height:0;display:none;"></iframe>';g=s.createNode(c);h=function(){f.ready=true;var i=g.src,j=i.match(x);f.target=(j&&j[0])||"*"};v(g,"load",h);q.ready(function(){document.body.appendChild(g)});f._iframe=g;f._iframeLoaded=h;f._receiver=e},send:function(f){f=f||{};var d=this,e=f.url,b=f.data,a=f.onsuccess,c=f.onfailure;if(!e||typeof e!=="string"){return}if(a){d.onsuccess=a}if(c){d.onfailure=c}if(!d.ready){q.later(function(){d.send(f)},50);return}if(b){b+="&_url="+p.encodeURIComponent(e)}else{b="_url="+p.encodeURIComponent(e)}d._iframe.contentWindow.postMessage(b,d.target)},destroy:function(){var a=this._iframe;m(a,"load",this._iframeLoaded);a.parentNode.removeChild(a);m(p,"message",this._receiver);this._iframe=null;this._iframeLoaded=null;this._receiver=null}});s.Html5MsgSender=t})(window,SINA);(function(r,v){var w=r.XDPost,z=v.extend,n=v.ready,s=v.later,x=v.QueryString,t=x.parse,o=function(){},p="sina-xdpost-form-",u="sina-xdpost-iframe-",q=w.generateId,y=function(a){if(!(this instanceof y)){return new y(a)}a=a||{};this.init(a)};y.defaultDomain="sina.com.cn";z(y.prototype,{ready:false,init:function(h){if(this.ready){return}var f=this,c,d,a,b,g=h.form,e=h.domain||y.defaultDomain;f.onsuccess=h.onsuccess||o;f.onfailure=h.onfailure||o;if(!g){c=q(p);g=document.createElement("form");g.id=c;g.method="POST";n(function(){document.body.appendChild(g);f.ready=true})}b=function(i){f._clear();f.onsuccess&&f.onsuccess(i)};a=q("callback");r[a]=b;f.ready=v.isReady;f._callbackName=a;f._form=g;document.domain=e},send:function(l){l=l||{};var j=this,k,h,b,i,e,g,m=[],c=j._callbackName,f=l.url,a=l.data,d=l.onsuccess,B=l.onfailure;if(!f||typeof f!=="string"){return}if(d){j.onsuccess=d}if(B){j.onfailure=B}if(!j.ready){s(function(){j.send(l)},50);return}if(!(i=j._placeholder)){i=document.createElement("div");i.style.display="none";i.style.visibility="hidden";document.body.appendChild(i);j._placeholder=i}e=this._form;k=q(u);h='<iframe id="'+k+'" name="'+k+'" src="about:blank" frameborder="0" style="width:0;height:0;display:none;"></iframe>';this._iframeId=k;i.innerHTML=h;if(f.indexOf("?")===-1){e.action=f+"?callback="+c}else{e.action=f+"&callback="+c}e.target=k;if(a){if(typeof a==="string"){a=t(a)||{}}for(g in a){m.push('<input type="hidden" name="');m.push(g);m.push('" value="');m.push(a[g]);m.push('" />')}e.innerHTML=m.join("")}e.submit()},inProgress:function(){return !!(me._iframeId&&document.getElementById(me._iframeId))},_clear:function(){var a=this._iframeId&&document.getElementById(this._iframeId);if(a){a.parentNode.removeChild(a)}this._iframeId=null},cancel:function(){this._clear()},destroy:function(){var b=this._form,a=this._placeholder;b.parentNode.removeChild(b);a.parentNode.removeChild(a);this._form=null;this._placeholder=null;delete r[this._callbackName];this._iframeId=null}});w.IframeMsgSender=y})(window,SINA);(function(aa,ah){if(!aa.WeiboCard){aa.WeiboCard={}}var ad=aa.WeiboCard,Q=aa.WeiboMod,D=Q.UserCardPopup,K=aa.XDPost,al=Q.Utils,M=al.pageX,O=al.pageY,Y=al.cloneNode,J=al.createFromString,N=ah.QueryString,aj=ah.JSON,R=ah.DOM,S=ah.Event,ag=ah.extend,ab=R.style,ae=R.hasClass,E=R.addClass,Z=R.removeClass,am=R.cache,X=S.addListener,ac=S.removeListener,an=S.trigger,P=ah.IO.getJSONP,af=ah.UA.ie,W=ah.isElement,U=function(){},V=function(b){b=b||{};var c=b.url,a=b.data||{},f=b.onsuccess||U,d=b.onfailure||U,e;if(!c||typeof c!=="string"){d({code:-10000003,msg:"\u63a5\u53e3\u0020\u0055\u0052\u004c\u0020\u672a\u6307\u5b9a"});return}if(K.mode==="html5"){a=N.stringify(a);e=function(g){g=aj.parse(g);var h=g&&g.result&&g.result.status;if(h&&h.code===0){f(g.result.data)}else{if(h){d(h)}else{d({code:-10000001,msg:"\u672a\u77e5\u9519\u8bef"})}}}}else{e=function(g){var h=g&&g.result&&g.result.status;if(h&&h.code===0){f(g.result.data)}else{if(h){d(h)}else{d({code:-10000001,msg:"\u672a\u77e5\u9519\u8bef"})}}}}K.send({url:c,data:a,onsuccess:e,onfailure:U})},T=function(b){b=b||{};if(!b.url||typeof b.url!=="string"){d({code:-10000003,msg:"\u63a5\u53e3\u0020\u0055\u0052\u004c\u0020\u672a\u6307\u5b9a"});return}var c=b.url,a=b.data||{},e=N.stringify(a),f=b.onsuccess||U,d=b.onfailure||U;P(c,e,function(g){var h=g&&g.result&&g.result.status;if(h&&h.code===0){f(g.result.data)}else{if(h){d(h)}else{d({code:-10000001,msg:"\u672a\u77e5\u9519\u8bef"})}}})},ai="http://api.sina.com.cn/weibo/",ak=function(a){an(ad._popupCard.wrapperBox,"mouseleave");an(ad._dropdownCard.wrapperBox,"mouseleave");ac(this,"mouseleave",ak);return false},L={};ag(ad,{_get:T,_post:V,cache:{},apis:{getUser:ai+"2/users/show.json",isFollowing:ai+"2/friendships/show.json",follow:ai+"2/friendships/create.json",appKey:"2835469272"},config:function(a){ag(this.apis,a,true)},setCache:function(a,b){if(a&&b){this.cache[a]=b}},getCache:function(a){var b=this.cache[a]||"";return b},changeCacheFollowing:function(a,b){this.cache[a].following=b},getUser:function(a){a=a||{};var c=a.url,b=this.apis;if(!c){c=b.getUser}if(c.indexOf("?")>=0){c+="&source="+b.appKey}else{c+="?source="+b.appKey}a.url=c;T(a)},isFollowing:function(a){a=a||{};var c=a.url,b=this.apis;if(!c){c=b.isFollowing}if(c.indexOf("?")>=0){c+="&source="+b.appKey}else{c+="?source="+b.appKey}a.url=c;T(a)},follow:function(a){a=a||{};var c=a.url,b=this.apis;if(!c){c=b.follow}if(c.indexOf("?")>=0){c+="&source="+b.appKey}else{c+="?source="+b.appKey}a.url=c;V(a)},_popupCard:null,_setPosition:function(n,i,g){var j=n.wrapperBox,m=n.elements.arrow,k=m.parentNode,e=0,f=0,h,c,l,d=document.documentElement,b=document.body,a=aa.pageYOffset||(d&&d.scrollTop)||b.scrollTop;if(i){h=parseInt(ab(i,"height"))||0;e=M(i);f=O(i);if(e<0){e=0}if(f<0){f=0}}l=parseInt(ab(j,"height"))||0;e=e-12;if(e<0){e=0}if(g===1){e=e+12;f=f+h+2;E(m,"weibomod-arrow-top")}else{if(f-l-5<a){f=f+h+8;E(m,"weibomod-arrow-top")}else{f=f-l-5;Z(m,"weibomod-arrow-top")}}if(f<0){f=0}k.removeChild(m);k.appendChild(m);n.move(e,f)},show:function(g,f,l){ttt=this.cache;var k=this;if(W(f)){l=f;f=""}if(!this.ready||!this._popupCard){var a=D.EVENTS.FOLLOW,i=D.EVENTS.UNFOLLOW,j=new D({width:260,borderWidth:4}),d=new D({width:220,borderWidth:1});j.addListener(a,function(n){var q=n.uid,o=n.channel,s=aa.sinaSSOManager,t,u="http://weibo.com/login.php",m="\u60a8\u8fd8\u6ca1\u6709\u767b\u5f55\uff0c\u65e0\u6cd5\u6dfb\u52a0\u5173\u6ce8\u3002\u662f\u5426\u73b0\u5728\u767b\u5f55\uff1f";if(!q){return}var r=aa.GB_SUDA&&aa.GB_SUDA._S_uaTrack;if(o&&r){var p=q+"_"+o;r("tblog_attention_click_zw",p)}t=s&&s.getSinaCookie();if(!(t&&t.name&&t.bt)){if(confirm(m)===true){aa.open(u)}return}ad.follow({data:{uid:q},onsuccess:function(v){j.changeStatus(true);k.changeCacheFollowing(q,true)},onfailure:function(x){var w=(x&&x.code)||-1,v=(x&&x.msg)||"";if(w==20506){j.changeStatus(true);k.changeCacheFollowing(q,true)}else{alert("\u5173\u6ce8\u5931\u8d25\uff1a"+v)}}})});d.addListener(a,function(n){var q=n.uid,o=n.channel,s=aa.sinaSSOManager,t,u="http://weibo.com/login.php",m="\u60a8\u8fd8\u6ca1\u6709\u767b\u5f55\uff0c\u65e0\u6cd5\u6dfb\u52a0\u5173\u6ce8\u3002\u662f\u5426\u73b0\u5728\u767b\u5f55\uff1f";if(!q){return}var r=aa.GB_SUDA&&aa.GB_SUDA._S_uaTrack;if(o&&r){var p=q+"_"+o;r("tblog_attention_click_zwm",p)}t=s&&s.getSinaCookie();if(!(t&&t.name&&t.bt)){if(confirm(m)===true){aa.open(u)}return}ad.follow({data:{uid:q},onsuccess:function(v){d.changeStatus(true);k.changeCacheFollowing(q,true)},onfailure:function(x){var w=(x&&x.code)||-1,v=(x&&x.msg)||"";if(w==20506){d.changeStatus(true);k.changeCacheFollowing(q,true)}else{alert("\u5173\u6ce8\u5931\u8d25\uff1a"+v)}}})});j.render(document.body);d.render(document.body);E(d.wrapperBox,"weibomod-dropdown");ad._popupCard=j;ad._dropdownCard=d;ad.ready=true}X(l,"mouseleave",ak);var e=this,j=e._popupCard,d=e._dropdownCard,h;h=k.getCache(g);var c=function(){var n=window.sinaSSOController,m;if(!n){alert("\u672a\u8f7d\u5165\u0020\u0053\u0053\u004f\u0020\u767b\u5f55\u6a21\u5757");return}m=n.getSinaCookie();if(m&&m.uid){return m}return null};var b=function(o,r,m){var q=c();if(!q){o.following=false;m(o)}var p={source_id:q.uid,target_screen_name:r};e.isFollowing({data:p,onsuccess:function(n){o.following=n.source.following;m(o,f,"zwm")},onfailure:function(n){o.following=false;m(datam,f,"zwm")}})};if(ae(l,"weibo-card-dropdown")){d.setLoading(true);e._setPosition(d,l,1);an(d.wrapperBox,"mouseenter");if(h){d.setUserData(h,f,"zwm");d.setLoading(false);e._setPosition(d,l,1)}else{e.getUser({data:{uid:g},onsuccess:function(m){b(m,m.screen_name,function(){d.setUserData(m,f,"zwm");d.setLoading(false);e._setPosition(d,l,1);k.setCache(g,m)})}})}}else{j.setLoading(true);e._setPosition(j,l);an(j.wrapperBox,"mouseenter");if(h){j.setUserData(h,f,"zw");j.setLoading(false);e._setPosition(j,l)}else{e.getUser({data:{uid:g},onsuccess:function(m){b(m,m.screen_name,function(){m.maxChar=47;j.setUserData(m,f,"zw");j.setLoading(false);e._setPosition(j,l);k.setCache(g,m)})}})}}}});if(af){ad.apis.follow=ai+"2/friendships/create.xml"}})(window,SINA);