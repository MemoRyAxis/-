(function(){function k(){this.c="30076719";this.R="q";this.N="";this.K="";this.M="";this.r="1428165585";this.P="hqs7.cnzz.com";this.L="";this.u="CNZZDATA"+this.c;this.t="_CNZZDbridge_"+this.c;this.F="_cnzz_CV"+this.c;this.G="CZ_UUID"+this.c;this.v="1";this.A={};this.a={};this.la()}function g(a,b){try{var c=
[];c.push("siteid=30076719");c.push("name="+f(a.name));c.push("msg="+f(a.message));c.push("r="+f(h.referrer));c.push("page="+f(e.location.href));c.push("agent="+f(e.navigator.userAgent));c.push("ex="+f(b));c.push("rnd="+Math.floor(2147483648*Math.random()));(new Image).src="http://jserr.cnzz.com/log.php?"+c.join("&")}catch(d){}}var h=document,e=window,f=encodeURIComponent,l=decodeURIComponent,n=unescape,p=escape;k.prototype={la:function(){try{this.U(),this.J(),this.ia(),this.H(),this.o(),
this.ga(),this.fa(),this.ja(),this.j(),this.ea(),this.ha(),this.ka(),this.ca(),this.aa(),this.da(),this.qa(),e[this.t]=e[this.t]||{},this.ba("_cnzz_CV")}catch(a){g(a,"i failed")}},oa:function(){try{var a=this;e._czc={push:function(){return a.B.apply(a,arguments)}}}catch(b){g(b,"oP failed")}},aa:function(){try{var a=e._czc;if("[object Array]"==={}.toString.call(a))for(var b=0;b<a.length;b++){var c=a[b];switch(c[0]){case "_setAccount":e._cz_account="[object String]"==={}.toString.call(c[1])?c[1]:String(c[1]);
break;case "_setAutoPageview":"boolean"===typeof c[1]&&(e._cz_autoPageview=c[1])}}}catch(d){g(d,"cS failed")}},qa:function(){try{if("undefined"===typeof e._cz_account||e._cz_account===this.c){e._cz_account=this.c;if("[object Array]"==={}.toString.call(e._czc))for(var a=e._czc,b=0,c=a.length;b<c;b++)this.B(a[b]);this.oa()}}catch(d){g(d,"pP failed")}},B:function(a){try{if("[object Array]"==={}.toString.call(a))switch(a[0]){case "_trackPageview":if(a[1]){this.a.d="http://"+e.location.host;
"/"!==a[1].charAt(0)&&(this.a.d+="/");this.a.d+=a[1];if(""===a[2])this.a.e="";else if(a[2]){var b=a[2];"http"!==b.substr(0,4)&&(b="http://"+e.location.host,"/"!==a[2].charAt(0)&&(b+="/"),b+=a[2]);this.a.e=b}this.k();"undefined"!==typeof this.a.e&&delete this.a.e;"undefined"!==typeof this.a.d&&delete this.a.d}break;case "_trackEvent":var c=[];a[1]&&a[2]&&(c.push(f(a[1])),c.push(f(a[2])),c.push(a[3]?f(a[3]):""),a[4]=parseFloat(a[4]),c.push(isNaN(a[4])?0:a[4]),c.push(a[5]?f(a[5]):""),
this.m=c.join("|"),this.k(),delete this.m);break;case "_setCustomVar":if(3<=a.length){if(!a[1]||!a[2])return!1;var d=a[1],q=a[2],h=a[3]||0;a=0;for(var l in this.a.b)a++;if(5<=a)return!1;var k;k=0==h?"p":-1==h||-2==h?h:(new Date).getTime()+1E3*h;this.a.b[d]={};this.a.b[d].S=q;this.a.b[d].f=k;this.w()}break;case "_deleteCustomVar":2<=a.length&&(d=a[1],this.a.b[d]&&(delete this.a.b[d],this.w()));break;case "_trackPageContent":a[1]&&(this.s=a[1],this.k(),delete this.s);case "_trackPageAction":c=[];a[1]&&
a[2]&&(c.push(f(a[1])),c.push(f(a[2])),this.l=c.join("|"),this.k(),delete this.l);break;case "_setUUid":var m=a[1];if(128<m.length)return!1;var n=new Date;n.setTime(n.getTime()+157248E5);this.ta(this.G,m,n)}}catch(p){g(p,"aC failed")}},da:function(){try{var a=this.n(this.F),b,c;this.a.b={};if(a)for(var d=a.split("&"),a=0;a<d.length;a++)c=l(d[a]),b=c.split("|"),this.a.b[l(b[0])]={},this.a.b[l(b[0])].S=l(b[1]),this.a.b[l(b[0])].f=l(b[2])}catch(f){g(f,"gCV failed")}},V:function(){try{var a=(new Date).getTime(),
b;for(b in this.a.b)"p"===this.a.b[b].f?this.a.b[b].f=0:"-1"!==this.a.b[b].f&&a>this.a.b[b].f&&delete this.a.b[b];this.w()}catch(c){g(c,"cCV failed")}},w:function(){try{var a=[],b,c,d;for(d in this.a.b){var e=[];e.push(d);e.push(this.a.b[d].S);e.push(this.a.b[d].f);b=e.join("|");a.push(b)}if(0===a.length)return!0;var k=new Date;k.setTime(k.getTime()+157248E5);c=this.F+"=";this.b=f(a.join("&"));c+=this.b;c+="; expires="+k.toUTCString();h.cookie=c+"; path=/"}catch(l){g(l,"sCV failed")}},ca:function(){try{if(""!==
e.location.hash)return this.D=e.location.href}catch(a){g(a,"gCP failed")}},j:function(){try{return this.a.ra=h.referrer||""}catch(a){g(a,"gR failed")}},ea:function(){try{return this.a.p=e.navigator.systemLanguage||e.navigator.language,this.a.p=this.a.p.toLowerCase(),this.a.p}catch(a){g(a,"gL failed")}},ha:function(){try{return this.a.Q=e.screen.width&&e.screen.height?e.screen.width+"x"+e.screen.height:"0x0",this.a.Q}catch(a){g(a,"gS failed")}},o:function(){try{return this.a.na=this.g("ntime")||"none"}catch(a){g(a,
"gLVST failed")}},I:function(){try{return this.a.T=this.g("ltime")||(new Date).getTime()}catch(a){g(a,"gFVBT failed")}},ga:function(){try{var a=this.g("cnzz_a");if(null===a)a=0;else{var b=1E3*this.o(),c=new Date;c.setTime(b);(new Date).getDate()===c.getDate()?a++:a=0}return this.a.wa=a}catch(d){g(d,"gRT failed")}},fa:function(){try{return this.a.q=this.g("rtime"),null===this.a.q&&(this.a.q=0),0<this.I()&&432E5<(new Date).getTime()-this.I()&&(this.a.q++,this.a.T=(new Date).getTime()),this.a.q}catch(a){g(a,
"gRVT failed")}},ja:function(){try{return"none"===this.o()?this.a.va=0:this.a.va=parseInt(((new Date).getTime()-1E3*this.o())/1E3)}catch(a){g(a,"gST failed")}},ia:function(){try{var a=this.g("sin")||"none";if(!h.domain)return this.a.ua="none";this.j().split("/")[2]!==h.domain&&(a=this.j());return this.a.ua=a}catch(b){g(b,"gS failed")}},H:function(){try{return this.a.i=this.g("cnzz_eid")||"none"}catch(a){g(a,"gC failed")}},sa:function(){try{var a="http://c.cnzz.com/core.php?",b=[];b.push("web_id="+
f(this.c));this.N&&b.push("show="+f(this.N));this.M&&b.push("online="+f(this.M));this.K&&b.push("l="+f(this.K));this.R&&b.push("t="+this.R);a+=b.join("&");this.Y(a,"utf-8")}catch(c){g(c,"rN failed")}},U:function(){try{return!1===e.navigator.cookieEnabled?this.a.X=!1:this.a.X=!0}catch(a){g(a,"cCE failed")}},ta:function(a,b,c,d,e,g){a=f(a)+"="+f(b);c instanceof Date&&(a+="; expires="+c.toGMTString());d&&(a+="; path="+d);e&&(a+="; domain="+e);g&&(a+="; secure");h.cookie=a},n:function(a){try{a+="=";var b=
h.cookie.indexOf(a),c="";if(-1<b){var d=h.cookie.indexOf(";",b);-1===d&&(d=h.cookie.length);c=l(h.cookie.substring(b+a.length,d))}return c?c:""}catch(e){g(e,"gAC failed")}},ba:function(a){try{h.cookie=a+"=; expires="+(new Date(0)).toUTCString()+"; path=/"}catch(b){g(b,"dAC failed")}},ka:function(){try{for(var a=h.title,b=a.length,c=0,d="",e=0;e<b;e++){var f=a[e];this.ma(f)?c++:c+=2;d+=f;if(20<=c){d+="...";break}}this.a.pa=d}catch(k){g(k,"gT failed")}},C:function(a){try{return"http"!==a.substr(0,4)?
"":/http:\/\/.*?\//i.exec(a)}catch(b){g(b,"cH failed")}},J:function(){try{var a=this.u,b={},c=this.n(this.u);if(0<c.length)if(1E8<this.c){var d=c.split("|");b.cnzz_eid=l(d[0]);b.ntime=l(d[1])}else for(var d=c.split("&"),e=0,f=d.length;e<f;e++){var h=d[e].split("=");b[l(h[0])]=l(h[1])}this.A=b}catch(k){g(k,"iC failed:"+a+":"+c)}},O:function(){try{var a=this.u+"=",b=[],c=new Date;c.setTime(c.getTime()+157248E5);if(1E8<this.c){if("none"!==this.a.i)b.push(f(this.a.i));else{var d=Math.floor(2147483648*
Math.random())+"-"+this.r+"-"+this.C(this.j());b.push(f(d))}b.push(this.r);0<b.length?(a+=f(b.join("|")),a+="; expires="+c.toUTCString(),a+="; path=/"):a+="; expires="+(new Date(0)).toUTCString()}else"none"!==this.a.i?b.push("cnzz_eid="+f(this.a.i)):(d=Math.floor(2147483648*Math.random())+"-"+this.r+"-"+this.C(this.j()),b.push("cnzz_eid="+f(d))),b.push("ntime="+this.r),0<b.length?(a+=f(b.join("&")),a+="; expires="+c.toUTCString(),a+="; path=/"):a+="; expires="+(new Date(0)).toUTCString();h.cookie=
a}catch(e){g(e,"sS failed")}},g:function(a){try{return"undefined"!==typeof this.A[a]?this.A[a]:null}catch(b){g(b,"gCPa failed")}},Y:function(a,b){try{if(b=b||"utf-8","1"===this.v){var c=h.createElement("script");c.type="text/javascript";c.async=!0;c.charset=b;c.src=a;var d=h.getElementsByTagName("script")[0];d.parentNode&&d.parentNode.insertBefore(c,d)}else h.write(n("%3Cscript src='"+a+"' charset='"+b+"' type='text/javascript'%3E%3C/script%3E"))}catch(e){g(e,"cAS failed")}},$:function(a,b){try{var c=
h.getElementById("cnzz_stat_icon_"+this.c);if(c){var d=h.createElement("script");d.type="text/javascript";d.async=!0;d.charset=b;d.src=a;c.appendChild(d)}else"0"===this.v&&h.write(n("%3Cscript src='"+a+"' charset='"+b+"' type='text/javascript'%3E%3C/script%3E"))}catch(e){g(e,"cSI failed")}},Z:function(a){try{for(var b=a.length,c="",d=0;d<b;d++)a[d]&&(c+=n(a[d]));var e=h.getElementById("cnzz_stat_icon_"+this.c);e?e.innerHTML=c:"0"===this.v&&h.write(c)}catch(f){g(f,"cI failed")}},k:function(){try{this.O();
this.J();this.H();this.V();var a=this.n(this.G),b=[];b.push("id="+f(this.c));this.a.e||""===this.a.e?b.push("r="+f(this.a.e)):b.push("r="+f(this.a.ra));b.push("lg="+f(this.a.p));b.push("ntime="+f(this.a.na));b.push("cnzz_eid="+f(this.a.i));b.push("showp="+f(this.a.Q));this.a.d?b.push("p="+f(this.a.d)):"[object String]"==={}.toString.call(this.D)&&b.push("p="+f(this.D));"[object String]"==={}.toString.call(this.m)&&b.push("ei="+f(this.m));"[object String]"==={}.toString.call(this.b)&&b.push("cv="+
this.b);"[object String]"==={}.toString.call(this.s)&&b.push("pc="+f(this.s));"[object String]"==={}.toString.call(this.l)&&b.push("ai="+this.l);a&&b.push("uuid="+f(a));b.push("t="+f(this.a.pa));b.push("h=1");var c=b.join("&");"[object String]"==={}.toString.call(this.m)?this.h(["http://ei.cnzz.com/stat.htm?"+c]):this.s||this.l?this.h(["http://ca.cnzz.com/stat.htm?"+c]):(this.L&&this.h(["http://"+this.L+"/stat.htm?"+c]),this.P&&this.h(["http://"+
this.P+"/stat.htm?"+c]))}catch(d){g(d,"sD failed")}},ma:function(a){return 0>p(a).indexOf("%u")?!1:!0},h:function(a){try{for(var b=a.length,c=null,d=0;d<b;d++)a[d]&&(c="cnzz_image_"+Math.floor(2147483648*Math.random()),e[c]=new Image,e[c].W=c,e[c].onload=e[c].onerror=e[c].onabort=function(){try{this.onload=this.onerror=this.onabort=null,e[this.W]=null}catch(a){}},e[c].src=a[d]+"&rnd="+Math.floor(2147483648*Math.random()))}catch(f){g(f,"cR failed")}}};try{var m=new k;e[m.t].bobject=m;!1!==e._cz_autoPageview?
m.k():m.O();k.prototype.getACookie=k.prototype.n;k.prototype.callRequest=k.prototype.h;k.prototype.createScriptIcon=k.prototype.$;k.prototype.createIcon=k.prototype.Z;m.sa()}catch(r){g(r,"main failed")}})();