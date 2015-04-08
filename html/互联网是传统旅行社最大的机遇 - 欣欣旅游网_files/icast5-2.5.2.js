/**
 * Advanced RIA framework
 * @author <cityvoice[at]hotmail.com> 
 *  @@@@                @@      @@@@
 *    @@                @@        @@
 *    @@                @@        @@
 *    @@  @@         @@@@@    @@@@@@@@@@
 *    @@@@  @@     @@   @@        @@
 *    @@@    @@   @@    @@        @@
 *    @@     @@    @@   @@  @     @@    @@
 *    @@     @@      @@@@@@@       @@@@@
 */
(function(bj,ik){var cU="2.5.2";var B=ik[cU]=ik[cU]||{ads:{}};var ai=bj.document,aU=ai.documentElement,aZ=ai.body,bS=Math,cQ=ai.compatMode&&ai.compatMode=="CSS1Compat",di,P,aA,D,I,hx,hw,dm=[],eo,hZ,gU='icast5_',af="length",bV="scrollBy",hv=(new Date).getTime().toString(32),eX=ai.getElementsByTagName('script'),eX=eX[eX[af]-1],aR="clientWidth",aB="clientHeight",bK="scrollTop",aK="scrollLeft",eq="scrollWidth",ed="scrollHeight",ep={dN:"",gk:"fi",gz:"la",gq:"af",ge:"be",fE:"re",bY:"_here"},fM={dW:"viewport",hc:"body",ey:"fixonce"},cZ={gf:"swf",gs:"pic",gi:"txt",gj:"htm",gN:"js"},G={en:'click',ej:'close',cT:'count',eb:'download',gl:'end',dM:"expand",gM:"expandend",gy:'hide',cx:'hscroll',gC:"init",fJ:'load',dK:'locate',bR:'mouseout',aS:'mouseover',bh:'moving',dP:'movend',eB:'pause',fI:'play',aP:'ready',dI:'replay',fZ:'resize',aC:'resizing',fR:'rewind',cL:"reset",dN:'scroll',gF:'show',gc:"shrink",cH:"shrinkend",ev:'start',eT:'stop',ii:"transform",cq:'vscroll',hE:'update',hY:"other",hV:"unload"},O={dH:"closed",gR:"loaded",cl:"loading",gE:"mousein",is:"mouseout",dR:"moving",ix:"movend",cy:"playing",it:"playover",fv:'ready',gg:"resizend",cI:"resizing",cM:"shown",hN:"xexpand",hP:"yexpand",hO:"xshrink",hM:"yshrink"},V={ej:"close",hi:"continue",cT:"count",gB:"execFun",dM:"expand",hd:"goto",gy:"hide",cx:"hScroll",gH:"move",hq:"moveBy",ho:"moveTo",gJ:"mute",gI:"open",eB:"pause",fI:"play",cL:"reset",fR:"rewind",dI:"replay",fZ:"resize",cu:"setShare",gc:"shrink",gF:"show",ev:"start",eT:"stop",hl:"track",ff:"trackClk",ft:"trackExt",fw:"trackImp",ii:"transform",fP:"unmute",cq:"vScroll",hS:"saveLocation",hQ:"restoreLocation",gV:"reload",hV:"unload",ie:"otherCommand"},ce={dT:"stretch",cp:"autofit"},gb=["","TL","T","TR","L","","R","BL","B","BR"];B.browser=function(){var fH=/(webkit)[ \/]([\w.]+)/,fT=/(opera)(?:.*version)?[ \/]([\w.]+)/,gw=/(msie) ([\w.]+)/,fz=/(mozilla)(?:.*? rv:([\w.]+))?/,fl=navigator.userAgent.toLowerCase(),fj=fH.exec(fl)||fT.exec(fl)||gw.exec(fl)||fl.indexOf("compatible")<0&&fz.exec(fl)||[];return{name:fj[1]||"",version:fj[2]||"0",pad:/(iPad|iPod|iPhone|Android|Mobile)/i.test(fl),mac:/Mac OS/i.test(fl)}}();B.util={$:function(eh){var K,fb;if(typeof eh=="string"){if(!(K=ai.getElementById(eh))){try{K=bj.eval("window"+"."+eh);if(!K.nodeType){K=fb}}catch(e){}}}else{K=eh}return typeof(K)=="object"?K:aZ},fa:function(gS){if(!gS)gS='';return(gS.replace(/^\s+|\s+$/g,""))},fc:function(C){return P=="msie"?ai.getElementById(C):ai[C]},bO:function(dQ){dQ--;var eS=3,gn=(dQ%eS)/2,gp=(bS.floor(dQ/eS))/2;return[gn,gp]},dC:function(cK){var ez=ai.cookie.split("; ");for(var i=0;i<ez[af];i++){var eP=ez[i].split("=");if(cK==eP[0])return unescape(eP[1])}return ''},dq:function(cK,aN,bv,dz,fy){var fB=new Date,da;if(dz)bv=bv-fB.getHours()*60-fB.getMinutes();if(fy)fy=location.host.split(".").slice(1).join(".");da=new Date(fB.getTime()+bv*6E4);ai.cookie=cK+"="+escape(aN)+";path=/;"+(fy?"domain="+fy+";":"")+"expires="+da.toGMTString()+";"},eY:function(dZ,aL){for(var bf in dZ.parts){dZ.parts[bf].aw('notify',aL)}},dr:function(au){if(au){au=au.replace(/\\r\\n/g,"\n").split("\n");for(var i=0;i<au[af];i++){au[i]=D.fa(au[i].replace(/\[SESSIONID\]/ig,hv).replace(/\[REFERRER\]/ig,escape(ai.location)).replace(/\[RND((?:_\d+)?)\]/ig,function(_$1,_$2){return(bS.random()+"").substr(2,_$2?_$2.substr(1):4)}));if(au[i]!="")(dm[dm[af]]=new Image).src=au[i]}}},dJ:function(eQ){for(var i=1;i<arguments[af];i++){var eR=arguments[i];for(var bf in eR){if(eR.hasOwnProperty(bf)){eQ[bf]=eR[bf]}}}return eQ},f:function(eG,cG){function f(){for(var bf in cG)this[bf]=cG[bf]};f.prototype=eG;return new f()},l:function(dF,A){function l(){dF.g.apply(this,A)};l.prototype=dF;return new l()},aO:function(aG,aD,gZ,gY,dh){D.Y(aG,aD);var R=aG.R;if(typeof dh=='undefined')dh=aG;R[aD]=function(){return gZ.call(dh)};var cR=function(){if(R[aD]){R[aD]()}};R[aD].el=bj.setInterval(cR,gY);R[aD].aD=aD;R[af]++},Y:function(aG,aD){var R=aG.R;if(R[aD]){bj.clearInterval(R[aD].el);R[aD].el=null;delete R[aD];R[af]--}},al:function(aG,ax,bA){var ac=aG.ac;if(!ac[ax]){ac[ax]=[bA]}else{ac[ax][ac[ax][af]]=bA}},bs:function(aG,ax,bA){var aT=aG.ac[ax];for(var bk in aT){if(aT[bk]==bA){delete aT[bk];break}}},U:function(aG,ax){var aT=aG.ac[ax];for(var bk in aT){if(aT.hasOwnProperty(bk)){aT[bk].call(aG)}}},eW:function(au){if(!au)return;var K=ai.createElement("A");aZ.insertBefore(K,aZ.firstChild);K.href=au;K.target="_blank";if(ai.createEvent){var as=ai.createEvent("MouseEvents");as.initEvent("click",true,true);K.dispatchEvent(as)}else{K.click()}aZ.removeChild(K)},open:function(au){D.eW(au)}};B.dom={av:function(K,fp,ei){if(K.insertAdjacentHTML){K.insertAdjacentHTML(fp,ei)}else{var ha=K.ownerDocument.createRange();ha.setStartBefore(K);var eK=ha.createContextualFragment(ei);var bl=eK;switch(fp){case "beforeBegin":K.parentNode.insertBefore(bl,K);break;case "afterBegin":K.insertBefore(bl,K.firstChild);break;case "beforeEnd":K.appendChild(bl);break;case "afterEnd":if(K.nextSibling){K.parentNode.insertBefore(bl,K.nextSibling)}else{K.parentNode.appendChild(bl)}}}},al:function(K,bz,bb,bZ){return K.attachEvent?K.attachEvent(bz,bb):K.addEventListener(bz.substr(2),bb,bZ)},bs:function(K,bz,bb,bZ){return K.detachEvent?K.detachEvent(bz,bb):K.removeEventListener(bz.substr(2),bb,bZ)},bind:function(K,bz,bb,bZ){this.al(K,bz,bb,bZ)},gQ:function(K,ab,aN){K.style[ab]=aN},an:function(){return bj.pageYOffset||I.aI(bK)},ap:function(){return bj.pageXOffset||I.aI(aK)},bn:function(){return I.aI(ed)},bu:function(){return I.aI(eq)},aI:function(L){return aU[L]?aU[L]:aZ[L]},H:function(L){if(di.pad){switch(L){case aR:L=bj.innerWidth;break;default:L=bj.innerHeight}}else{L=cQ?aU[L]:aZ[L]}return L},aa:function(K,dB){return K.currentStyle?K.currentStyle[dB]:ai.defaultView.getComputedStyle(K,null)[dB]},bi:function(K,dz){var fO=0,gu=0,i=0;if(K.tagName=="BODY"){return[0,0]}while(K){fO+=K.offsetLeft;gu+=K.offsetTop;if(i>0&&P=="msie"&&aA<8){if(!isNaN(parseInt(hw(K,"borderLeftWidth"))))fO+=parseInt(hw(K,"borderLeftWidth"));if(!isNaN(parseInt(hw(K,"borderTopWidth"))))gu+=parseInt(hw(K,"borderTopWidth"));}i=1;K=K.offsetParent;if(K){if(dz&&hw(K,'position')!='static')break}}return[fO,gu]}};D=B.util;I=B.dom;hx=I.H;hw=I.aa;di=B.browser;P=di.name;aA=di.version;function r(C,dy,dz,fy){var v=this;v.aQ=0;v.ac=[];function g(){if(D.dC(C)!=""){v.aQ=Number(D.dC(C))}};v.fe=function(){D.dq(C,++v.aQ,dy,dz,fy);D.U(v,G.cT)};v.ek=function(){v.aQ=0;D.dq(C,0,-1,fy);D.U(v,G.cL)};g()};function o(C){var v=this;v.aQ=0;v.C=C;v.ac=[];v.fe=function(){v.aQ++;D.U(v,G.cT)};v.ek=function(){v.aQ=0;D.U(v,G.cL)}};function t(C){var v=this,ba;v.cj= !1;v.cS= !1;v.eZ=0;v.dy=0;v.C=C;v.ac=[];v.fq=function(){if(v.cS)return;v.cS= !0;ba=setInterval(function(){if(!v.cj)v.eZ++;v.dy++},1000)};v.eA=function(){v.cj= !0};v.hj=function(){v.cj= !1};v.ek=function(){clearInterval(ba);v.eZ=0;v.dy=0;v.cS= !1;v.cj= !1;D.U(v,G.cL)}};function n(C,aQ){var v=this,ba;v.aQ=aQ;v.ac=[];v.C=C;v.fq=function(){clearTimeout(ba);ba=setTimeout(function(){D.U(v,G.gl)},v.aQ*1000)};v.eg=function(){clearTimeout(ba)};};function d(){var v=this,K=cQ?(P=="webkit")?aZ:aU:aZ;v.ac=[];v.bW=v.bU=v.cN=v.cD=0;v.ib=hx(aR);v.ia=hx(aB);v.fC=function(dO){var bW=K[aK]+dO;if(bW<0)bW=0;K[aK]=bW;v.bW=bW;v.cN=bS.ceil(bW*100/(I.bu()-hx(aR)));D.U(v,G.cx)};v.fF=function(dO){var bU=K[bK]+dO;if(bU<0)bU=0;K[bK]=bU;v.bU=bU;v.cD=bS.ceil(bU*100/(I.bn()-hx(aB)));D.U(v,G.cq)};v.ga=function(){v.ib=hx(aR);v.ia=hx(aB)};D.al(v,G.fZ,v.ga);return v};d.eu=function(){if(!d.cO)d.cO=new d();return d.cO};B.xbody=eo=d.eu();function ig(){var v=this,cr=function(){D.U(eo,G.fZ);D.U(v,G.fZ)},cg=function(){D.U(v,G.dN)};v.ib=screen.width;v.ia=screen.height;v.ac=[];I.al(bj,"on"+G.dN,cg,0);I.al(bj,"on"+G.fZ,cr,0);return v};ig.eu=function(){if(!ig.cO)ig.cO=new ig();return ig.cO};B.screen=hZ=ig.eu();function hy(C,dy){var v=this,hB,hD=(new Date).getTime();v.aQ=0;v.ac=[];function hz(){if(bj.localStorage){return hB.getItem(C)}else{hB.load(C);return hB.getAttribute(C)}};function hA(aN){if(bj.localStorage){hB.setItem(C,aN)}else{hB.setAttribute(C,aN);hB.save(C)}};function g(){if(!bj.localStorage){hB=ai.createElement('p');hB.style.display="none";hB.addBehavior('#default#userData');aZ.insertBefore(hB,aZ.firstChild)}else{hB=bj.localStorage;var hH=gU+"ads";if(hB.getItem(hH)){var hF=hB.getItem(hH).split(","),hG=[],hJ= !1;for(var i=0;i<hF[af];i++){if(hF[i]==C)hJ= !0;if(hB.getItem(hF[i])&&hB.getItem(hF[i]).split(",")[0]<hD){hB.removeItem(hF[i])}else{hG.push(hF[i])}}if(!hJ)hG.push(C);hB.setItem(hH,hG.join(","))}else{hB.setItem(hH,C)}}if(!hz()||(hz().split(",")[0]<hD)){hA(hD+dy*6E4+",0");if(!bj.localStorage)hB.expires=new Date(hD+dy*6E4).toGMTString()}else{v.aQ=Number(hz().split(",")[1])}};v.fe=function(){hA(hz().split(",")[0]+","+(++v.aQ));D.U(v,G.cT)};v.ek=function(){v.aQ=0;hA("0,0");D.U(v,G.cL)};g()};function c(hb,fh,fm){var gS=hx(hb);bj[bV](1*fh,1*fm);if(hx(hb)!=gS){bj[bV](-1*fh,-1*fm)}else{bj[bV](-1*fh,-1*fm);bj[bV](1*fh,1*fm)}};if(P=="opera"&& !c.gA){c.gA= !0;c(aK,1,0);c(bK,0,1)}var fk={g:function(A){var v=this;v.A=v.params={};v.cc={};v.co=[];v.cJ=[];v.Z=[];v.by=[];v.ac=[];v.bH=0;v.parts={};v.ca={};v.fs=0;for(var bf in A){v.A[bf]=v.params[bf]=A[bf];}if(!v.w('path'))v.F('path','');if(!v.w('poses')['extDomObjs'])v.w('poses')['extDomObjs']={};v.gr='_'+v.w('aid');B.ads[v.gr]=v;v.cC()},cC:function(){var v=this,A=v.w('params'),aq=v.w('displayLogic')['init']||[],cw=v.w('displayLogic')['adStart'];for(var bf in A){v.cJ[bf]=A[bf]};for(var i=0;i<aq[af];i++){var aH=aq[i][0];switch(aq[i][1]){case "LiveCounter":var C=aq[i][2].substr(1),ae=v.bG(aq[i][2]);v.Z[aH]=v.cz(aH,ae,aq[i][3]||0,0,aq[i][4]||0);break;case "DailyCounter":v.Z[aH]=v.cz(aH,24*60,aq[i][3]||0,1,aq[i][4]||0);break;case "DownTimer":var ae=v.bG(aq[i][2]);v.Z[aH]=v.de(aH,ae);break;case "Timer":v.Z[aH]=v.ew(aH);break;case "Counter":v.Z[aH]=v.cf(aH);break;case "LocalStorage":var ae=v.bG(aq[i][2]);v.Z[aH]=v.hC(aH,ae,aq[i][3]||0);break;case "Func":v.by[aH]=aq[i][2];break;default:v.Z[aH]=aq[i][2]}}if(cw){for(var i=0;i<cw[af];i++){v.fL(cw[i])}}},eI:function(A){var v=this;if(A.materials.main['type']==cZ.gf&& !A['third']){return D.l(eU,[A,v])}else{return D.l(fx,[A,v])}},eE:function(){var v=this,be,A=v.w('poses')['origPos'].concat(v.w('poses')['extdPos']||[]);if(v.w('displayLogic')['checkApc']){v.fs= !v.cX(v.w('displayLogic')['checkApc']);}if(v.fs)return;var gT=v.w('poses')['extDomObjs'];for(var bf in gT){if(gT.hasOwnProperty(bf)){if(typeof(gT[bf])=="string")gT[bf]=gT[bf].replace("[POS_ID]",v.w('pid'))}}for(var i=0;i<A[af];i++){var fu=A[i],bq=fu['location'];if(fu.materials.main['f']!=""||fu.materials.main['type']==cZ.gi){if(bq&&bq['rt']==ep.bY){var C=v.gr+fu['tag'];v.w('poses')['extDomObjs'][C]=v.eX;if(bq['rf']=="_current"){bq['rf']="$"+C}}be=v.eI(fu);v.co.push(be)}}v.ec();v.cb()},cb:function(){var v=this;if(v.co[af]>0){var be=v.co.shift();be.dx();v.cB(be)}else{v.cn()}},cB:function(be){var v=this;if(be.at(O.fv)){v.cb()}else{setTimeout(function(){v.cB(be)},10)}},bG:function(ae){var v=this;switch(ae.substr(0,1)){case "=":ae=ae.substr(1);break;case "*":ae=v.cJ[ae.substr(1)];break;case "~":ae=v.by[ae.substr(1)].constructor==String?new Function(v.by[ae.substr(1)])():v.by[ae.substr(1)]()}return ae},cX:function(X){var v=this,aE= !0;for(var j=0;j<X[af];j++){var C=X[j][0].substr(1),L=X[j][1],ae=X[j][af]==3?X[j][2]=="isTrue"?1:0:v.bG(X[j][3]);switch(X[j][0].substr(0,1)){case "&":switch(L){case "isLoaded":L=O.gR;break;case "isShown":L=O.cM;break;case "isMouseIn":L=O.gE;break;case "isPlaying":L=O.cy;break;case "isResizing":L=O.cI;break;case "canXExpand":L=O.hN;break;case "canYExpand":L=O.hP;break;case "canXShrink":L=O.hO;break;case "canYShrink":L=O.hM}if(v.parts[C]){aE=X[j][af]==3? ! !v.parts[C].at(L)==ae: ! !eval("'"+v.parts[C].w(L)+"'"+X[j][2]+"'"+ae+"'")}else{aE= !0}break;case "_":switch(C){case "body":cF=X[j][2];ae=v.bG(X[j][3]);switch(L){case "hPosPercent":L="cN";break;case "vPosPercent":L="cD";break;case "hPos":L="bW";break;case "vPos":L="bU";break;case "width":L="ib";break;case "height":L="ia"}aE= ! !eval(eo[L]+cF+ae);break;case "screen":cF=X[j][2];ae=v.bG(X[j][3]);switch(L){case "width":L="ib";break;case "height":L="ia"}aE= ! !eval(hZ[L]+cF+ae);break;default:switch(L){case "isEnabled":var eO=bj['iCast_Start_Enabled_'+v.w('aid')];aE=((eO== !0)||(typeof eO=='undefined'));break;case "lastArgs":cF=X[j][2];ae=v.bG(X[j][3]);aE= ! !eval(v.gO+cF+ae);break;default:aE= ! !v.at(L)==ae}}break;case "~":aE= ! !(v.by[C].constructor==String?new Function(v.by[C])():v.by[C]());break;case "=":cF=X[j][1];ae=v.bG(X[j][2]);aE= ! !eval(C+cF+ae);break;default:cF=X[j][2];ae=v.bG(X[j][3]);switch(L){case "count":L="aQ";break;case "life":L="dy";break;case "time":L="eZ";break;case "running":L="cS";break;case "paused":L="cj"}if(typeof v.Z[C][L]=="boolean")ae= ! !ae;aE= ! !eval(v.Z[C][L]+cF+ae);}if(!aE)break}return aE},cd:function(am){var v=this;for(var k=0;k<am[af];k++){var az=am[k][0].substr(0,1),C=am[k][0].substr(1),M=am[k][1],aV;switch(az){case "&":aV=v.parts[C];switch(M){case V.fI:M="gG";break;case V.hd:M="hh";break;case V.gF:M="ee";break;case V.gy:M="fK";break;case V.ej:M="gm";break;case V.eT:M="eg";break;case V.dI:M="fY";break;case V.fZ:M="ga";break;case V.dM:M="fV";break;case V.gc:M="gd";break;case V.gH:M="gL";break;case V.hq:M="hp";break;case V.ho:M="hn";break;case V.gJ:M="gK";break;case V.fP:M="fQ";break;case V.fR:M="fS";break;case V.gI:M="eW";break;case V.eB:M="eA";break;case V.hS:M="hT";break;case V.hQ:M="hR";break;case V.ie:M="ic";break;case V.ii:M="ij";break;case V.cu:M="cv";break;case V.gV:M="he"}if(aV){if(am[k][af]>2){aV[M].apply(aV,am[k].slice(2))}else{aV[M].apply(aV)}}break;case "_":switch(C){case "body":aV=eo;break;case "screen":aV=hZ;break;default:aV=v}switch(M){case V.hl:M="dr";break;case V.fw:M="fo";break;case V.ff:M="fg";break;case V.ft:M="dV";break;case V.cx:M="fC";break;case V.cq:M="fF";break;case V.gB:M="fL";break;case V.gI:M="eW";break;case V.hV:M="hU"}if(am[k][af]>2){aV[M].apply(aV,am[k].slice(2))}else{aV[M].apply(aV)}break;case "@":aV=v.Z[C];switch(M){case V.cT:M="fe";break;case V.ev:M="fq";break;case V.eT:M="eg";break;case V.cL:M="ek";break;case V.eB:M="eA";break;case V.hi:M="hj"}if(aV)aV[M]();break;default:aV=D.$(v.w('poses')['extDomObjs'][C]);if(!aV)return;switch(M){case V.gy:aV.style.display="none";break;case V.gF:aV.style.display="block";break;case V.ga:aV.style.width=am[k][2]+"px";aV.style.height=am[k][3]+"px"}}}},ec:function(){var v=this,aF=v.w("displayLogic")["interactive"];for(var m=0;m<aF[af];m++){(function(aF){var bw=aF[0],X=aF[1],am=aF[2],bM=aF[3];if(bw[af]>0){var az=bw[0].substr(0,1),C=bw[0].substr(1),as=bw[1],be;switch(as){case "onLoad":as=G.fJ;break;case "onEnd":as=G.gl;break;case "onClick":as=G.en;break;case "onReplay":as=G.dI;break;case "onExpand":as=G.dM;break;case "onShrink":as=G.gc;break;case "onExpandEnd":as=G.gM;break;case "onShrinkEnd":as=G.cH;break;case "onMouseOver":as=G.aS;break;case "onMouseOut":as=G.bR;break;case "onMovend":as=G.dP;break;case "onVScroll":as=G.cq;break;case "onHScroll":as=G.cx;break;case "onCount":as=G.cT;break;case "onReady":as=G.aP;break;case "onStart":as=G.ev;break;case "onClose":as=G.ej;break;case "onPause":as=G.eB;break;case "onPlay":as=G.fI;break;case "onStop":as=G.eT;break;case "onRewind":as=G.fR;break;case "onResize":as=G.fZ;break;case "onScroll":as=G.dN;break;case "onInit":as=G.gC;break;case "onShow":as=G.gF;break;case "onHide":as=G.gy;break;case "onOther":as=G.hY;break;case "onTransform":as=G.ii}switch(az){case "&":be=v.parts[C];break;case "@":be=v.Z[C];break;case "_":be=C=="ad"?v:C=="body"?eo:hZ;break;case "$":be=D.$(v.w('poses')['extDomObjs'][C])}if(be){var gh=function(){var aE= !0;if(X[af]>0){aE=v.cX(X)}if(aE){v.cd(am)}else{if(typeof bM!="undefined")v.cd(bM)}if(aF[af]>4){v.cd(aF[4])}};az!="$"?D.al(be,as,gh):I.al(be,"on"+as,gh,0)}}})(aF[m])}D.U(v,G.gC);},cn:function(){var v=this;v.J(O.fv,1);D.U(v,G.aP)},cf:function(C){return new o(C)},de:function(C,aQ){return new n(C,aQ)},ew:function(C){return new t(C)},cz:function(cK,bv,cR,dz,fy){return new r(cR?cK:gU+cK+"_"+this.w('aid'),bv,dz,fy)},hC:function(cK,bv,cR){return new hy(cR?cK:gU+cK+"_"+this.w('aid'),bv)},fL:function(cR){try{var v=this,aL=[];cR=v.by[cR];if(arguments.length>1)aL=Array.prototype.slice.call(arguments,1);cR.constructor==String?new Function("x,y",cR).apply(v,aL):cR.apply(v,aL)}catch(e){}},eW:function(au){if(!au)au=this.w('clkUrl');D.eW(au)},hU:function(){var v=this;for(var bf in v.parts){if(v.parts.hasOwnProperty(bf)){v.parts[bf].Q.parentNode.removeChild(v.parts[bf].Q)}}B.ads[v.gr]=null;},F:function(C,aN){this.A[C]=aN},w:function(C){return this.A[C]},J:function(C,aN){this.cc[C]=aN},at:function(C){return! !this.cc[C]},dr:function(au){D.dr(au)},fo:function(){D.dr(this.w("impTrack"))},fg:function(){D.dr(this.w("clkTrack"))},dV:function(az,aN){var v=this;if(!v.w("extTrack"))return;if(!aN)aN=1;if(aN.constructor==String&&aN.substr(0,1)=="@"){var C=aN.substr(1).split(".")[0],L=aN.substr(1).split(".")[1];switch(L){case "time":L="eZ";break;case "life":L="dy";break;default:L="aQ"}aN=v.Z[C][L]}D.dr(v.w("extTrack").replace("[EXTTYPE]",isNaN(az)?az:"ExtCount"+az).replace("[EXTVALUE]",aN))},ih:function(){var v=this,aL=1;for(var bf in v.parts){if(v.parts.hasOwnProperty(bf)){if(v.parts[bf].at(O.cM)){aL=0;break}}}if(aL){D.U(v,G.gl)}}};var fN={g:function(A,dZ){var v=this,ak=A.materials,ck=A['size']||{},cW=ak.main['w'],cV=ak.main['h'],hg=isNaN(ak.main['w2'])?cW:ak.main['w2'],hf=isNaN(ak.main['h2'])?cV:ak.main['h2'],bL=ck['size']||[hg,hf],gD=ck['expandedSize']||[cW,cV],bq=A['location']||{},ah=A['materialScale']||"stretch";v.ad=dZ;v.ad.parts[A['tag']]=v;v.ci= !1;v.aW= !0;v.A=v.params={};v.gW={};v.cc={};v.ac=[];v.R=[];v.ah=ah;v.F('type',ak.main['type']);v.F('tag',A['tag']);v.F('y_gap',A['y_gap']||0);v.F('content',A['content']);v.F('third',A['third']||0);v.F('materials',A['materials']);v.F('flashvars',A['flashvars']||'');v.F('x_fit',A['x_fit']||0);if(ck['autoFit']*1){if(cW<=gD[0]){if(cV<=gD[1]){gD[0]=cW;gD[1]=cV}else{gD[0]=cW}}else{if(cV<=gD[1]){gD[1]=cV}else{}}if(hg<=bL[0]){if(hf<=bL[1]){bL[0]=hg;bL[1]=hf}else{bL[0]=hg}}else{if(hf<=bL[1]){bL[1]=hf}else{}}}v.F('tw',gD[0]);v.F('th',gD[1]);v.F('w',gD[0]);v.F('h',gD[1]);v.F('iw',bL[0]);v.F('ih',bL[1]);v.F('cw',bL[0]);v.F('ch',bL[1]);v.F('id',A['id']||0);if(ah==ce.dT){v.F('s','exactfit');v.F('l','T')}else if(ah==ce.cp){v.F('s','exactfit');v.F('l','')}else{v.F('s','exactfit');v.F('l',gb[Number(ah||0)%10])}v.F('u',!A['clkUrl']?v.ad.w('clkUrl'):A['clkUrl']);v.F('f',ak.main['f']);v.F('rt',bq['rt']||'');v.F('rf',bq['rf']||'_'+fM.dW);v.F('rz',bq['rp']||9);v.F('rzp',bq['sp']||9);v.F('x',bq['dx']||0);v.F('y',bq['dy']||0);v.F('m',A['m']||'transparent');if(A['zi']){A['zi']>v.ad.bH&&(v.ad.bH=A['zi']);v.F('z',v.ad.bH)}else{v.F('z',Math.min(2147483647,v.ad.bH+(A['vi']||0)))}v.az=v.w('rf').substr(0,1);v.C=v.w('rf').substr(1);v.aY=D.bO(v.w('rz'));v.bd=D.bO(v.w('rzp'));v.T=null;v.fU()},fU:function(){var v=this;v.et(v.w('id'));v.es();v.eH()},eH:function(){var v=this;D.al(v,G.aP,v.cn);v.dL();v.ea()},dL:function(){var v=this,eM='',aM='',az=v.w('rf').substr(0,1),C=v.w('rf').substr(1);var bX='position:relative;margin:0;';if(!v.aW&&P!="msie"){bX='position:absolute;left:0;top:0;margin:0;'}if(v.aW){if(((cQ&&P=='msie'&&aA>6)||P!='msie')&&(C!=fM.ey&&C!=fM.hc&&az=="_")&& !di.pad){bX='position:fixed;left:0;top:0;margin:0;'}else{bX='position:absolute;left:0;top:0;margin:0;'}}if(v.w('z')!==''){eM='z-index:'+v.w('z')+';'}aM='<div id="'+v.bN+'" style="font-size:0;padding:0;border-width:0;overflow:hidden;width:0px;height:0px;visibility:hidden;'+bX+eM+'">'+aM+'</div>';var K;switch(az){case "_":K=aZ;break;case '$':K=D.$(v.ad.w('poses')['extDomObjs'][C]);break;default:var T=v.dw(az,C);if(T){K=T}else{K=aZ;v.F('rt',ep.gk)}}switch(v.w('rt')){case ep.gk:I.av(K,'afterBegin',aM);break;case ep.gz:I.av(K,'beforeEnd',aM);break;case ep.ge:I.av(K,'beforeBegin',aM);break;case ep.gq:I.av(K,'afterEnd',aM);break;case ep.fE:K.innerHTML=aM;break;case ep.bY:I.av(v.ad.eX,'beforeBegin',aM);break;default:I.av(aZ,'afterBegin',aM)}v.Q=D.$(v.bN);if(K==aZ||v.w('rt')==""){v.eL=1;}if(!v.aW&&K.tagName!="BODY"){while(K){K=K.parentNode;if(K.tagName=="BODY")break;if(K&&hw(K,'position')!='static'){v.fr=1;break}}}},dx:function(){},dk:function(){},fW:function(){var v=this,az=v.az,C=v.C,T;T=v.dw(az,C);if(!T)return;var ar,aY=v.aY,bd=v.bd,aX=0,bg=0,df=aY[0],db=aY[1],dD=bd[0],dE=bd[1],ao=0,aj=0,bQ,bC,gv="px";if(az=="&"){var dz=v.eL?0:v.ad.parts[v.w('rf').substr(1)].fr;if(!(P=="msie"&&aA<7)){if(hw(T,"position")=="fixed"&&hw(v.Q,"position")!="fixed"){v.Q.style.position="fixed"}if(hw(T,"position")!="fixed"){ar=I.bi(T,dz);aX=ar[0];bg=ar[1]}else{aX=parseInt(hw(T,"left"));bg=parseInt(hw(T,"top"))}}else{if(hw(T,"position")=="absolute"){aX=parseInt(hw(T,"left"));bg=parseInt(hw(T,"top"))}else{ar=I.bi(T,dz);aX=ar[0];bg=ar[1]}}}else if(az=="$"){ar=I.bi(T);aX=ar[0];bg=ar[1];}else{}if(T.tagName.toLowerCase()=="body"){bQ=hx(aR);bC=hx(aB);}else{bQ=T.offsetWidth;bC=T.offsetHeight}ao=aX+bQ*df;aj=bg+bC*db;ao-=(dD*v.w('cw'));aj-=(dE*v.w('ch'));ao+=v.w('x');aj+=v.w('y');if(!(P=="msie"&&aA==8)){ao=bS.round(ao);aj=bS.round(aj)}if(az=="_"){if(C==fM.dW){if((P=="msie"&&aA<7)||di.pad){ao+=I.ap();aj+=I.an()}}else if(C==fM.ey){ao+=v.dj-aX;aj+=v.du-bg}else{}}var ef=v.w('y_gap');if(ef<0){if(!(P=="msie"&&aA<7)){aj=bS.min(aj,I.bn()-I.an()-v.w('ch')+ef)}else{aj=bS.min(aj,I.bn()-v.w('ch')+ef)}}else if(ef>0){if(I.an()<ef){aj=bS.max(aj,ef)}}if(v.w('x_fit')){if(ao>hx(aR)-v.w('cw')&&v.w('x_fit')==1)ao=hx(aR)-v.w('cw');if(ao<0&&v.w('x_fit')== -1)ao=0}v.Q.style.left=ao+'px';v.Q.style.top=aj+'px';if(!v.ci){v.eD();v.ci= !0}},bc:function(bF,bE){},eD:function(){var v=this,bF=v.w('cw'),bE=v.w('ch');v.bm(bF,bE);D.U(v,G.gF)},ee:function(){var v=this,ab=v.Q.style;if(v.at(O.cM))return;v.J(O.cM,1);if(!v.at(O.gR)){v.J(O.cl,0);v.ds()}if(v.w('rf')=="_"+fM.ey){v.dj=I.ap();v.du=I.an()}if(v.aW){if(v.hL){ab.left=v.hL[0];ab.top=v.hL[1];v.eD();ab.visibility='visible'}else{ab.visibility='visible';D.aO(v,G.dK,v.fW,20,v)}}else{v.eD();ab.visibility='visible'}},show:function(){this.ee()},hide:function(){this.fK()},hT:function(){var v=this;D.al(v,G.gF,function(){v.ad.hL=[v.Q.style.left,v.Q.style.top]})},hR:function(){var v=this;v.hL=[v.ad.hL[0],v.ad.hL[1]]},ij:function(dz){var v=this,fD=hx(aR)/v.w('w'),ab=v.Q.style,hF=["","webkitT","msT","oT","mozT"];for(var i=0;i<hF[af];i++){ab[hF[i]+"ransform"]="scale("+fD+","+fD+")";ab[hF[i]+"ransformOrigin"]="top center"}D.U(v,G.ii)},gG:function(){var v=this,az=v.w('type');v.ee();v.J(O.dH,0);v.J(O.cy,1);v.aw('play')},fY:function(){var v=this;v.fS();v.gG()},fS:function(){},gm:function(){var v=this;v.J(O.dH,1);v.fK()},eW:function(au){if(!au)au=this.w('u');D.eW(au)},hh:function(i){this.aw('goto',i)},eA:function(){var v=this;v.J(O.cy,0);v.aw('pause')},eg:function(){var v=this;v.J(O.cy,0);v.aw('stop')},fK:function(){var v=this;if(v.aW)D.Y(v,G.dK);if(v.at(O.cI))D.Y(v,G.aC);if(v.at(O.dR))D.Y(v,G.bh);v.eA();var eC=v.w('type')==cZ.gf?"1px":"0px",ab=v.Q.style,eJ=v.ag.style;eJ.width=eJ.height=eC;ab.width=ab.height=eC;v.fS();if(v.fA){v.fA.style.width=v.fA.style.height=eC}if(v.hk){v.hk.style.width=v.hk.style.height=eC}if(v.aW)ab.left="-1px";v.J(O.cM,0);v.ad.ih();v.ci= !1;D.U(v,G.gy)},ga:function(cW,cV){var v=this;D.U(v,G.fZ);v.bm(cW,cV)},resize:function(cW,cV){this.ga(cW,cV)},bm:function(cW,cV){var v=this,ah=v.ah,bF=v.w('w'),bE=v.w('h');v.cs(cW,cV);if(ah==ce.dT){bF=cW;bE=cV}else if(ah==ce.cp){if(bF/bE>cW/cV){bF=cW;bE=cW*bE/bF}else{bF=cV*bF/bE;bE=cV}}else{}v.dv(bF,bE)},cs:function(cW,cV){var v=this;v.F('cw',cW);v.F('ch',cV);v.fd(cW,cV,v.Q)},dv:function(cW,cV){var v=this;v.fd(cW,cV,v.ag);v.bc(cW,cV);var bF=v.w('iw'),bE=v.w('ih'),hX=v.w('tw'),hW=v.w('th');if(v.at(O.cI)){v.J(O.hN,0);v.J(O.hP,0);v.J(O.hO,0);v.J(O.hM,0)}else{v.J(O.hN,hX>bF?1:0);v.J(O.hP,hW>bE?1:0);v.J(O.hO,bF>hX?1:0);v.J(O.hM,bE>hW?1:0)}},fV:function(){var v=this;if(v.at(O.cI))return;if(!v.at(O.cM))v.ee();v.cE=v.w('iw');v.cA=v.w('ih');v.bJ=v.w('tw');v.bx=v.w('th');v.dX= !0;if(v.ad.w('params')['exTime']>0){v.bo=1000/v.ad.w('params')['exFrame'];v.aJ=v.ad.w('params')['exTime']/v.bo;v.dS()}else{v.bm(v.bJ,v.bx);D.U(v,G.gM)}},gd:function(){var v=this;if(v.at(O.cI))return;v.cE=v.w('tw');v.cA=v.w('th');v.bJ=v.w('iw');v.bx=v.w('ih');v.dX= !1;if(v.ad.w('params')['shTime']>0){v.bo=1000/v.ad.w('params')['shFrame'];v.aJ=v.ad.w('params')['shTime']/v.bo;v.dS()}else{v.bm(v.bJ,v.bx);D.U(v,G.cH)}},dS:function(){var v=this;v.bD=(v.bJ-v.cE)/v.aJ;v.bB=(v.bx-v.cA)/v.aJ;if(v.bB!=0||v.bD!=0){D.aO(v,G.aC,v.eF,v.bo,v);v.J(O.cI,!0)}},eF:function(){var v=this;if(typeof arguments.callee.aJ=='undefined'){arguments.callee.aJ=1}else if(arguments.callee.aJ<v.aJ){arguments.callee.aJ++}else{delete arguments.callee.aJ;D.Y(v,G.aC);v.J(O.cI,!1);if(v.dX){v.J(O.gg,!0);D.U(v,G.gM)}else{v.J(O.gg,!0);D.U(v,G.cH)}return}if(arguments.callee.aJ<v.aJ){v.ga(v.w('cw')+v.bD,v.w('ch')+v.bB)}else{v.ga(v.bJ,v.bx)}},gL:function(fh,fm){var v=this;if(isNaN(fh)){var hF,C=fh.substr(1);hF=v.ad.by[C].constructor==String?new Function(v.ad.by[C])():v.ad.by[C]();fh=hF[0];fm=hF[1]}v.F("x",v.w('x')+fh);v.F("y",v.w('y')+fm)},hp:function(fh,fm){var v=this;if(v.J(O.dR))return;v.cY=v.w('x');v.dA=v.w('y');v.dU=v.cY+fh;v.er=v.dA+fm;v.fX()},hn:function(K,fh,fm){var v=this;if(v.J(O.dR))return;v.cY=v.w('x');v.dA=v.w('y');var az=K.substr(0,1),C=K.substr(1),ar=I.bi(K);if(az=="~"){ar=v.ad.by[C].constructor==String?new Function(v.ad.by[C])():v.ad.by[C]()}else{switch(az){case "$":K=D.$(v.ad.w('poses')['extDomObjs'][C]);break;case "&":be=v.parts[C];break;default:K=aZ}ar=I.bi(K)}v.dU=(v.cY+ar[0]+fh||0)-parseInt(v.Q.style.left);v.er=(v.dA+ar[1]+fm||0)-parseInt(v.Q.style.top);v.fX()},fX:function(){var v=this,bo=1000/v.ad.w('params')['frame'];v.bI=v.ad.w('params')['time']/bo;v.bP=(v.dU-v.cY)/v.bI;v.bT=(v.er-v.dA)/v.bI;if(v.bP!=0||v.bT!=0){D.aO(v,G.bh,v.fn,bo,v);v.J(O.dR,!0)}},fn:function(){var v=this;if(typeof arguments.callee.aJ=='undefined'){arguments.callee.aJ=1}else if(arguments.callee.aJ<v.bI){arguments.callee.aJ++}else{delete arguments.callee.aJ;D.Y(v,G.bh);v.J(O.dR,!1);D.U(v,G.dP);return}if(arguments.callee.aJ<v.bI){v.F("x",v.w('x')+v.bP);v.F("y",v.w('y')+v.bT)}else{v.F("x",v.dU);v.F("y",v.er)}},et:function(eh){var v=this;v.ay= !eh?gU+"p"+v.ad.w('aid')+"_"+v.w('tag'):eh;v.bN=gU+"c"+v.ad.w('aid')+"_"+v.w('tag')},aw:function(cR,aL){},dw:function(az,C){var v=this;if(!v.T){switch(az){case "&":v.T=v.ad.parts[C]?D.$(v.ad.parts[C].bN):null;break;case "$":v.T=v.ad.w('poses')['extDomObjs'][C]?D.$(v.ad.w('poses')['extDomObjs'][C]):D.$(C);break;default:v.T=aZ}}return v.T},fd:function(cW,cV,K){cW+='px',cV+='px';K.style.width=cW;K.style.height=cV},F:function(C,aN){this.A[C]=aN},w:function(C){return this.A[C]},J:function(C,aN){this.cc[C]=aN},at:function(C){return! !this.cc[C]},es:function(fi){var v=this;if(!(v.w('rf').substr(0,1)=="_"||v.w('rf').substr(0,1)=="&"||v.w('rt')=="")){v.aW= !1}},dk:function(){var v=this;if(v.at(O.fv)){D.Y(v,G.aP);D.aO(v,G.eb,v.bp,25)}},cn:function(){var v=this;D.Y(v,"preload");v.J(O.fv,1);D.bs(v,G.aP,arguments.callee)},bp:function(){var v=this,az=v.w('type');switch(az){case cZ.gf:var fD=v.ag.PercentLoaded();if(fD==100||v.w("third")){v.J(O.cl,0);v.ds()}break;default:if(!v.at(O.cl)){v.ds()}}},ds:function(){var v=this;D.Y(v,G.eb);if(!v.at(O.gR)){var ab=v.Q.style,eC="0px";if(!v.aW){if(P!="msie"){ab.position='relative';ab.top=ab.left=eC};var gx=v.w('rz');if(gx==2||gx==5||gx==8)ab.marginLeft=ab.marginRight="auto"}else{ab.left="-1px"};if(v.w('type')!=cZ.gf||v.w('third')){I.al(v.fA?v.fA:v.Q,"on"+G.en,function(){if(!v.at(O.cM))return;D.U(v,G.en)},!1)}I.al(v.Q,"on"+G.aS,function(){if(!v.at(O.cM))return;v.J(O.gE,1);D.U(v,G.aS)},!1);I.al(v.Q,"on"+G.bR,function(){if(!v.at(O.cM))return;v.J(O.gE,0);D.U(v,G.bR)},!1);v.J(O.gR,!0);D.U(v,G.fJ)}},he:function(){var v=this,eN;if(P=="msie"){for(var i=0,hm=v.ag.childNodes[af];i<hm;i++){eN=v.ag.childNodes[i];if(eN.getAttributeNode("name").nodeValue=="movie"){v.ag.removeChild(eN);eN=ai.createElement("param");eN.name="movie";eN.value=v.ag.movie;v.ag.appendChild(eN)}}}else{var ct=v.ag.cloneNode(!0);eN=v.Q;eN.style.display="none";eN.replaceChild(ct,v.ag);eN.style.display="block";v.ag=ct}},ic:function(){D.U(this,G.hY)},get:function(){var v=this;return{container:v.Q,player:v.ag}}};var dc=D.dJ({},fN,{ea:function(){var v=this,aM='',gP='width:1px;height:1px;position:relative;';var dp='Ad='+escape('iCast5["'+cU+'"].ads["'+v.ad.gr+'"].parts.'+v.w('tag'));var bt='<param name=';if(P=="msie"){aM+='<iframe style="z-index:-1;filter:alpha(opacity=0);border-width:0;display:block;left:0px;'+gP+';position:absolute;" src="about:blank" frameborder=0 scrolling=no></iframe>';aM+=''+'<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10" classid=clsid:d27cdb6e-ae6d-11cf-96b8-444553540000 id="'+v.ay+'" style="'+gP+'">'+bt+'"movie" value="about:blank" />'+bt+'"play" value="'+ !1+'" />'+bt+'"loop" value="'+ !1+'" />'+bt+'"menu" value="'+ !1+'" />'+bt+'"quality" value="high" />'+bt+'"allowScriptAccess" value="always" />'+bt+'"wmode" value="'+v.w('m')+'" />'+bt+'"scale" value="'+v.w('s')+'" />'+bt+'"salign" value="'+v.w('l')+'" />'+bt+'"allowNetworking" value="all" />'+bt+'"flashvars" value="'+dp+'" />'+'</object>'}else{aM+='<embed src="about:blank" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"  type="application/x-shockwave-flash" play="'+ !1+'" allowScriptAccess="always" swliveconnect="'+ !0+'" allowNetworking="all" menu="'+ !1+'" loop="'+ !1+'" quality="high" scale="'+v.w('s')+'" salign="'+v.w('l')+'" flashvars="'+dp+'" wmode="'+v.w('m')+'" id="'+v.ay+'" name="'+v.ay+'" style="'+gP+'"><\/embed>'}v.Q.innerHTML=aM;v.ag=D.fc(v.ay);if(P=='msie'){v.hk=v.Q.childNodes[0]}},dx:function(){var v=this;v.J(O.cl,1);var au;if(/^http:\/\//.test(v.w('f'))){au=D.fa(v.w('f'))}else{au=D.fa(v.ad.w('path'))+D.fa(v.w('f'))}var ab=v.Q.style;ab.width='1px';ab.height='1px';ab.visibility='visible';if(P=='msie'){v.ag.movie=au}else{var ct=v.ag.cloneNode(!0),eN=v.ag.parentNode;eN.removeChild(v.ag);ct.setAttribute('src',au);eN.appendChild(ct);v.ag=ct}if(P!='msie'){D.aO(v,"preload",v.fG,25)}D.aO(v,G.aP,v.dk,25)},fG:function(){var v=this,ab=v.Q.style,gv="px",dG=v.Q.getBoundingClientRect();dG=[dG.left* -1,dG.top* -1];ab.top=dG[1]+gv;ab.left=dG[0]+gv},gK:function(){this.aw('mute',1)},fQ:function(){this.aw('mute',0)},fS:function(){this.aw('rewind')},cv:function(cK,aN){this.ad.ca[cK]=aN},bc:function(bF,bE){var v=this,ah=v.ah,ab=v.ag.style;if(ah==ce.cp){}else{if(!isNaN(ah)){var dY=D.bO(ah),fh=(v.w('cw')-bF)*dY[0],fm=(v.w('ch')-bE)*dY[1];ab.left=fh+"px";ab.top=fm+"px"}}if(v.fA){v.fd(bF,bE,v.fA)}if(v.hk){v.fd(bF,bE,v.hk)}},aw:function(cR,aL){try{this.ag.run(cR,aL)}catch(e){}},run:function(cR,aL){var v=this;switch(cR){case "ext":v.ad.dV(aL,1);break;case "send":D.eY(v.ad,aL);break;case "fEvt":D.U(v,aL[0]);break;case "subscribe":switch(aL){case "resize":v.cr=function(){v.aw("notify",["resize",[hx(aR),hx(aB)]])};I.al(bj,"onresize",v.cr,!1);break;case "scroll":v.cg=function(){v.aw("notify",["scroll",[I.ap(),I.an(),I.ap()/(I.bu()-hx(aR)),I.an()/(I.bn()-hx(aB))]]);};I.al(bj,"onscroll",v.cg,!1)}break;case "unsubscribe":switch(aL){case "resize":if(v.cr)I.bs(bj,"onresize",v.cr,!1);break;case "scroll":if(v.cg)I.bs(bj,"onscroll",v.cg,!1)}break;case "query":switch(aL){case "resize":return[hx(aR),hx(aB)];break;case "scroll":return[I.ap(),I.an(),I.ap()/(I.bu()-hx(aR)),I.an()/(I.bn()-hx(aB))]}break;case "getShare":return v.ad.ca[aL];break;case "setShare":v.ad.ca[aL[0]]=aL[1];break;case "delShare":delete v.ad.ca[aL];break;case "getParam":return v.ad.w("params")[aL];break;case "getMaterial":return v.w("materials")[aL];break;case "open":v.eW(aL||"");D.U(v,G.en);v.ad.gO=aL||""}return!0}});var dn=D.dJ({},fN,{ea:function(){var v=this,au,az=v.w('type');if(!/^http:\/\//.test(v.w('f'))){v.F('f',v.ad.w('path')+v.w('f'))}au=v.w('f');switch(az){case cZ.gf:var aM="",gP="width:0px;height:0px;position:relative;",dp=v.w('flashvars');if(P=="msie"){aM+='<iframe style="z-index:-1;filter:alpha(opacity=0);border-width:0;display:block;left:0;top:0;width:0px;height:0px;position:absolute;" src="about:blank" frameborder=0 scrolling=no></iframe>';aM+='<object codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10" classid=clsid:d27cdb6e-ae6d-11cf-96b8-444553540000 id="'+v.ay+'" style="'+gP+'"><param name="movie" value="about:blank" /><param name="wmode" value="'+v.w('m')+'" /><param name="allowScriptAccess" value="always" /><param name="allowNetworking" value="all" /><param name="scale" value="'+v.w('s')+'" /><param name="salign" value="'+v.w('l')+'" /><param name="flashvars" value="'+dp+'" /></object>';v.Q.innerHTML=aM;v.hk=v.Q.childNodes[0]}else{aM+='<embed src="about:blank" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"  type="application/x-shockwave-flash" allowScriptAccess="always" swliveconnect="'+ !0+'" allowNetworking="all" wmode="'+v.w('m')+'" name="'+v.ay+'" style="'+gP+'" scale="'+v.w('s')+'" salign="'+v.w('l')+'" flashvars="'+dp+'"></embed>';v.Q.innerHTML=aM}v.ag=D.fc(v.ay);break;case cZ.gs:var dg=new Image;dg.id=v.ay;dg.src=au;dg.style.cssText="border:0;position:relative;width:0px;height:0px;cursor:pointer";v.Q.appendChild(dg);v.ag=D.$(v.ay);break;case cZ.gi:v.Q.innerHTML='<span id="'+v.ay+'" style="display:block;overflow:hidden;position:relative;cursor:pointer">'+v.w('content')+'</span>';v.ag=D.$(v.ay);break;case cZ.gN:case cZ.gj:v.Q.innerHTML='<iframe id="'+v.ay+'" name="'+v.ay+'" style="width:0px;height:0px;position:relative;" frameborder="0" scrolling="no"></iframe>';v.ag=D.$(v.ay)}D.aO(v,G.aP,v.dk,25);D.U(v,G.aP)},dx:function(){var v=this,au=v.w('f'),az=v.w('type');v.J(O.cl,1);switch(az){case cZ.gf:if(P=='msie'){v.ag.movie=au}else{var ct=v.ag.cloneNode(!0),eN=v.ag.parentNode;eN.removeChild(v.ag);ct.setAttribute('src',au);eN.appendChild(ct);v.ag=ct}v.fA=ai.createElement("DIV");v.Q.appendChild(v.fA);v.fA.style.cssText='z-index:'+v.w('z')+';position:absolute;filter:alpha(opacity=0);-moz-opacity:0;opacity:0;background:#fff; width:0px;height:0px;cursor:pointer;top:0px;left:0px;';break;case cZ.gs:var dg=new Image;dg.src=au;if(dg.complete){v.J(O.cl,0)}else{dg.onload=function(){v.J(O.cl,0);dg.onload=null;}}break;case cZ.gj:var eh=v.ad.gr;I.al(v.ag,"onload",function(){if(P!="msie"||(P=="msie"&&aA>8)){I.al(bj,"onmessage",function(e){var hs=e.data.split(":");if(hs[1]==eh&&hs[2]==v.w('tag')){D.U(v,hs[0]);}},!0);D.al(v,G.gF,function(){bj[v.ay].postMessage("show:"+eh+":"+v.w('tag'),"*")});D.al(v,G.gy,function(){bj[v.ay].postMessage("hide:"+eh+":"+v.w('tag'),"*")});D.al(v,G.hY,function(){bj[v.ay].postMessage("other:"+eh+":"+v.w('tag')+":"+v.ad.gO,"*")})}v.J(O.cl,0)});v.ag.src=au+(au.indexOf("?")== -1?"?":"&")+eh+","+v.w('tag')+","+escape(v.w('u'));break;case cZ.gN:var aM='';if(v.w('f')==""){aM=v.w('content')}var bb=function(){bj[v.ay]['document'].write('<body style="margin:0;padding:0"><script>'+(P=="msie"&&ai.domain!=location.hostname?'document.domain="'+ai.domain+'";':'')+aM+'</scr'+'ipt>'+(au?'<script src="'+au+'" charset="gb2312"></scr'+'ipt>':'')+'</body>');v.J(O.cl,0)};if(P=="msie"){if(ai.domain!=location.hostname)v.ag.src="javascript:void(function(){document.open();document.domain=\'"+ai.domain+"\';document.close()})();";try{bb()}catch(e){v.ag.attachEvent("onload",function(){bb()})}}else{bb()}break;case cZ.gi:v.J(O.cl,0)}},bc:function(bF,bE){var v=this,ah=v.ah,ab=v.ag.style;if(ah==ce.cp){}else{if(!isNaN(ah)){var dY=D.bO(ah),fh=(v.w('cw')-bF)*dY[0],fm=(v.w('ch')-bE)*dY[1];ab.left=fh+"px";ab.top=fm+"px"}}if(v.fA){v.fd(bF,bE,v.fA)}if(v.hk){v.fd(bF,bE,v.hk)}}});var gX=D.f({},fk);var eU=D.f({},dc);var fx=D.f({},dn);function g(A,cP){eX=cP||eX;var dZ=D.l(gX,[A]);dZ.eX=eX;dZ.eE();};B.load=function(A,cP){if(!B.ads["_"+A.aid])g(A,cP)};if(bj['iCast5_Mode']){bj['iCast5_Mode']= !1;g(bj['iCast5_Controller_Init'])}})(window,function(){iCast5=window.iCast5||{};return iCast5}()); 