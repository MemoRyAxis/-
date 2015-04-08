/*联想搜索*/
var so_url="http://www.cncn.com/ajax_so.php";
var img_xinghao="/images/icon_xinghao.gif";
var arrLx;
/*document.write('<style>#smart_pop{display:block;overflow:hidden;border:1px solid #44B414;z-index:9999;border-top:0;position:absolute;background-color:#fff;}#smart_arrow{position:absolute;top:70px;left:50px;width:12x;padding:0 12px 0 0}#smart_arrow .hide{position: absolute;padding:0 12px 0 0;width: 12x;}#smart_arrow .show {position:absolute;padding:0 12px 0 0;width:12x;}#smart_pop div{height:22px;overflow:hidden;}#smart_pop div.mouseover {background:#f1f1f1;}#smart_pop div.mouseout {background:#ffffff;}#smart_pop div.left1{width:150px;height:17px;padding:5px 0 0 5px;float:left;line-height:14px;color:#666;text-align:left;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}#smart_pop div.left1 span.pic {width:12px;padding-left:10px;background:url("'+img_xinghao+'") 3px 1px no-repeat;}#smart_pop div.right1{height:17px;padding:5px 3px 0 0;line-height:14px;text-align:right;float:right;color:#666;}#smart_pop div.font_blue {color:#0066ff;cursor:hand;}#smart_pop div.close {color:#004bca;line-height:14px;text-decoration:underline;background:#ecf7e7;height:17px;text-align:right;padding:5px 4px 0 0;cursor:pointer;}</style>');*/
function GetDate(){
	var dtmToday = new Date();
	return dtmToday.getMonth()+"-"+dtmToday.getDate();
}
function SoSmart(id,w,x,y){   
	var f=this;
	var _w = w;
	var _x = x;
	var _y = y;
	var g=function(a){return document.getElementById(a)};
	var h=function(a){return document.createElement(a)};
	var j=function(s){return s.replace(/^\s+/,"").replace(/\s+$/,"")};
	var k=g(id);

	var tn = g('tn');
	var l={};
	var m=false;
	var n=-1;
	var o=[];
	var p=[];
	var q="";
	var r=function(){for(pos in o){o[pos].className="mouseout"}};
	var C=function(){var a=k;for(i=0;i<5;i++){a=a.parentNode;if(a.tagName=="FORM"){return a;break}}};
	var D=function(a){var b=document.getElementsByName(a);for(var i=0;i<b.length;i++){if(b[i].checked){return b[i].value;break}}};

	var u=function(){
		n=-1;
		o=[];
		p=[];
		q="";
		var a=g('smart_pop');
		if(a&&a!=null){a.parentNode.removeChild(a)}if(g('smart_arrow').firstChild.className!='hide')g('smart_arrow').firstChild.className='hide'
	};
	var v=function(){
		var b=h('div');b.id='smart_pop';
		for(i in p){
			var c=h('div');
			c.seq=parseInt(i);
			(function(){var a=c;f.Event.add(c,'mouseover',function(){r();a.className="mouseover";n=a.seq})})();
			(function(){f.Event.add(c,'mouseout',function(){r();n=-1})})();
			(function(){f.Event.add(c,'mousedown',function(){k.value=p[n].word;u();_gaq.push(['_trackEvent', 'so_smart', 'click', i, 1]);C().submit()})})();
			var d=h('div');

			d.className='left1';

			d.innerHTML=p[i].word.replace(/k.value/i,'<strong>'+k.value+'</strong>');

			if(p[i].flag!=0){d.className+=' font_blue'}
			if(p[i].flag<0){
				tipPic=h('span');tipPic.className='pic';
				tipPic.appendChild(document.createTextNode(' '));
				d.appendChild(tipPic);
				d.title = "直接进入专题";
			}
			if(p[i].flag>0){
				//正常搜索提示
			}
			c.appendChild(d);
			b.appendChild(c);o.push(c)
		}
		closeDiv=h('div');closeDiv.className='close';linkBtn=h('span');
		linkBtn.appendChild(document.createTextNode("关闭"));
		f.Event.add(linkBtn,'click',function(){u()});closeDiv.appendChild(linkBtn);b.appendChild(closeDiv);g('smart_arrow').firstChild.className='show';return b
	};
	var w=function(e){
		if(o.length==0){
			return
		}
		if(e.keyCode==13&&n!=-1){
			k.value=p[n].word;
		}
		else
			if(e.keyCode==38){
				r();n=(n<=0)?(o.length-1):(n-1);o[n].className="mouseover";q=k.value=p[n].word
			}
			else
				if(e.keyCode==40){
					r();n=(n>=o.length-1)?0:(n+1);o[n].className="mouseover";q=k.value=p[n].word
				}
	};
	var x=function(a){
		l={top:f.Locator.getY(k),left:f.Locator.getX(k),width:f.Locator.getW(k),height:f.Locator.getH(k)};
		locator=f.Locator;
		//locator.setX(a,l.left);
		//locator.setY(a,l.top+l.height);
		locator.setX(a,_x);
		locator.setY(a,_y);
		locator.setW(a,_w);
		k.parentNode.appendChild(a)
	};
	var y=function(){
		m=false;
		var b=k.value;
        //if(tn.value == 'lxs') return;
		new f.Ajax({type:"GET",url:so_url+"?c="+g('city_en').value+"&t="+tn.value+"&q="+(j(k.value)),timeout:1000,onSuccess:function(){m=true;u();q=b;if(p=z()){c=v(p);x(c)}}})
	};
	var z=function(){
		res=[];
		if(arrLx.length==0)return false;
		for(var i=0;i<arrLx.length;i++){
			res.push({word:arrLx[i][0],flag:arrLx[i][1]})
		}

		return res
	};
	var A=function(){
		f.Event.add(k,'focus',function(){m=true});
		f.Event.add(k,'blur',function(){m=false});
		f.Event.add(k,'keydown',function(e){m=true;m&&w(e)});
		f.Event.add(window,'resize',function(){m&&y();B()});
		//mysi=setInterval(function(){if(!m||j(k.value).length==0){u()}else{if(q!=k.value){y()}}},300)
		mysi=setInterval(function(){if(!m||j(k.value).length==0||j(k.value)==""){u()}else{if(q!=k.value){y()}}},300)
	};
	var B=function(){
		locator=f.Locator;
		lo={top:locator.getY(k),left:locator.getX(k),width:locator.getW(k),height:locator.getH(k)};
		if(arrowDiv=g('smart_arrow')){
		}
		else{
			arrowDiv=h('div');arrowDiv.id='smart_arrow';picDiv=h('div');
			locator.setH(picDiv,lo.height);
			f.Event.add(arrowDiv,'click',function(a){a=a||window.event;f.Event.stop(a);k.focus();});
			arrowDiv.appendChild(picDiv);
			k.parentNode.appendChild(arrowDiv)
		}
		locator.setH(arrowDiv,lo.height);locator.setX(arrowDiv,lo.left+lo.width-16);locator.setY(arrowDiv,lo.top)
	};
	B();
	A()
};
var ua=window.navigator.userAgent.toLowerCase();

SoSmart.prototype.Ajax=function(d){
	d={type:d.type||"POST",url:d.url||"",timeout:d.timeout||5000,onComplete:d.onComplete||function(){},onError:d.onerror||function(){},onSuccess:d.onSuccess||function(){},data:d.data||""};

	var objLxJs;
	var g=function(a){return document.getElementById(a)};
	if (!g("LxJs")){
		objLxJs = document.createElement("script");
		objLxJs.id = "LxJs";
		document.body.appendChild(objLxJs);
	}
	else{
		if (document.all){
			objLxJs = g("LxJs");
		}
		else{
			document.body.removeChild(g("LxJs"));
			objLxJs = document.createElement("script");
			objLxJs.id = "LxJs";
			document.body.appendChild(objLxJs);
		}
	}
	objLxJs.src=d.url;

	if (document.all){
		objLxJs.onreadystatechange = function(){
			if (objLxJs.readyState=="loaded"){
				d.onSuccess();
			}
		}
	}
	else{
		objLxJs["onload"] = function(){
			d.onSuccess()
		}
	}

};

SoSmart.prototype.Locator={
	getX:function(a){return a.offsetParent?a.offsetLeft+this.getX(a.offsetParent):a.offsetLeft},
	getY:function(a){return a.offsetParent?a.offsetTop+this.getY(a.offsetParent):a.offsetTop},
	getW:function(a){return a.offsetWidth},
	getH:function(a){return a.offsetHeight},
	setX:function(a,b){a.style.left=b+"px"},
	setY:function(a,b){a.style.top=b+"px"},
	setW:function(a,b){a.style.width=b+"px";},
	setH:function(a,b){a.style.height=b+"px"}
};
SoSmart.prototype.Event={add:function(a,b,c){if(a.addEventListener){a.addEventListener(b,c,false)}else{a.attachEvent("on"+b,c)}},remove:function(a,b,c){if(a.removeEventListener){a.removeEventListener(b,c,false)}else{a.detachEvent("on"+b,c)}},stop:function(a){if(a.preventDefault){a.preventDefault();a.stopPropagation()}else{a.cancelBubble=true;a.returnValue=false}}};
