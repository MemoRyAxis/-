/*****/
var rangeX = -20;
var rangeY = -10;
var firstNodePage = "";
myAddEvent(window, 'load', initMp);
function initMp(){
	addPicMap(rangeX,rangeY);
	loadPeriod();
	//addCalendar();
}
/*文章页文章列表*/
function showAtHover(id){
	var oUl = $d(id);
	var aLi = oUl.getElementsByTagName("li");
	for(var i=0; i<aLi.length; i++){
		aLi[i].onmouseover = function(){
			this.className = "active";
		}
		aLi[i].onmouseout = function(){
			this.className = "";
		}
	}
}
/*文章页关闭*/
function closeArti(){
	var oDiv = $d("articleBox");
	if(oDiv){
		startMove(oDiv,{"opacity":0},function(){oDiv.style.display = "none";});
	}
	hideRtList();
}

var hflag = 1;
function hideBtm(obj){
	var oDiv = $d("downBtnFld");
	var aIcon = oDiv.getElementsByTagName("a");
	
	if(oDiv){
		if(hflag){
			for(var i=0; i<aIcon.length; i++){
				aIcon[i].style.height = 0;
			}
			startMove(oDiv,{"height":0},function(){oDiv.style.display = "none"; obj.className = "uparrow"; hflag =0});
		}
			
		else{
			oDiv.style.display = "block";
			startMove(oDiv,{"height":33},function(){ obj.className = ""; hflag =1;for(var i=0; i<aIcon.length; i++){
				aIcon[i].style.height = "33px";}
			});
		}
	}
}

function addOptions(id1,id2){
	var oBtn = $d(id1);
	var oUl = $d(id2);
	var aLi = oUl.getElementsByTagName("li");
	for(var i=0; i<aLi.length; i++){
		if(oBtn.getAttribute("idx") == aLi[i].getAttribute("idx")){
			oBtn.innerHTML = aLi[i].getElementsByTagName("a")[0].innerHTML;
		}
	}
	oBtn.onmouseover = oUl.onmouseover = function(){
		oUl.style.display = "block";
	}
	oBtn.onmouseout = oUl.onmouseout = function(){
		oUl.style.display = "none";
	}
}
/*头部报纸导航列表*/
var timer1 = null;
function addPaperNav(id){
	var oBtn = $d(id);
	var timer = null;
	oBtn.onmouseover = function(ev){
		ev = ev || window.event;
		clearTimeout(timer1);
		addShowAtList(oBtn,"hdPageList");
		ev.cancelBubble = true;
	}
	oBtn.onmouseout = function(){
		var obj = $d("hdPageList");
		if(obj){
			var oBox = $d("hdPageList").parentNode;
			timer1 = setTimeout(function(){	
				oBox.style.display = "none";				
			},300)
		}
	}
}
/*头部导航列表控制*/
function addShowAtList(obj,id){
	var oUl1 = $d(id);
	aEm = oUl1.getElementsByTagName("em");
	var aUl = oUl1.getElementsByTagName("ul");
	var timer = null;

	oUl1.onmouseover = function(){
		clearTimeout(timer1);
		this.style.display = "block";
	}
	oUl1.onmouseout = function(){
		for(var i=0; i<aUl.length; i++){
			if(getStyle(aUl[i],"display")!= "none"){
				this.style.display = "block";
			}
			else{
				this.style.display = "none";
			}	
		}	
	}
	
	for(var i=0; i<aEm.length; i++){
		if(aUl[i].getElementsByTagName("li").length==0){
			aEm[i].style.display = "none";
		}
		aEm[i].onmouseover = function(){
			clearTimeout(timer);
			for(var i=0; i<aUl.length; i++){
				aUl[i].style.display = "none";
			}
			var oUlme = this.parentNode.getElementsByTagName("ul")[0];
			oUlme.style.display = "block";
		}
		aEm[i].onmouseout = function(){
			var oUlme = this.parentNode.getElementsByTagName("ul")[0];
			timer = setTimeout(function(){	
				oUlme.style.display = "none";				
			},300)
		}
		aUl[i].onmouseover = function(){
			clearTimeout(timer);
			this.style.display = "block";
		}
		aUl[i].onmouseout = function(){
			this.style.display = "none";
		}
		
	}
	var oBox = oUl1.parentNode;
	var l = obj.offsetLeft;
	oBox.style.left = l +"px";
	oBox.style.top = 100 +"px";
	oUl1.style.display = "block";
	oBox.style.display = "block";
}

/*头部日历*/
var isSelect = false;
function addCalendar(){
	var oBtn = $d('calendarBtn');
	var oCalBox = $d('calendarBox');
	if(oBtn){
		oBtn.onmouseover = function(){		
			oCalBox.style.left = oBtn.offsetLeft-110+"px";
			oCalBox.style.top = oBtn.offsetTop+28+"px";
			showDate();
		}
		oBtn.onmouseout = function(){
			hiddenDate();
		}
		oCalBox.onmouseover = function(){
			showDate();
		};
		oCalBox.onmouseout = function(){
			hiddenDate();
		}	
	}
	
	var timer2 = null;
	function showDate(){
		clearTimeout(timer2);
		oCalBox.style.display = "block";
	}
	function hiddenDate(){
		timer2 = setTimeout(function(){
			if(!isSelect){
			  oCalBox.style.display = "none";
		  }
		  isSelect = false;		
	  },300)
		
	}
}
function SetSelectValue(values){	
	isSelect = values;
}

/*收缩右侧导航*/
function hideRtList(obj){
	var oDiv = $d("articleBox");
	if(oDiv.style.display == "none"){
		return false;
	}
	else{
		var oBox = $d("rtLayer");
		var oBox1 = $d("rtLayer1");
		var oBox2 = $d("rtLayer2");
		var oAtr1 = $d("scrolPanel");
		var oAtr2 = getByClass(oAtr1,"art_left")[0];
		var oAtr3 = getByClass(oAtr1,"art_rt")[0];
		var oABox1 = oAtr1.parentNode;
		var oABox2 = $d("articleBox");
		
		var w1 = oBox.offsetWidth;
		if(w1>5 && arguments.length>0){
			oBox.className = "textfld change1";
			oBox1.className = oBox2.className = "pl_txtlist change2";
			oABox2.style.width = "930px";
			oABox1.style.width = oAtr1.style.width = "927px";
			oAtr2.style.width = "607px";
			oAtr3.style.width = "230px";
			
		}
		else{
			oBox.className = "textfld";
			oBox1.className = oBox2.className = "pl_txtlist";		
			oABox2.style.width = "789px";
			oABox1.style.width = oAtr1.style.width = "787px";
			oAtr2.style.width = "533px";
			oAtr3.style.width = "176px";
		}
		if(arguments.length==0){
			obj = $d("hideBtn");
			obj.style.left = "1px";
		}
		else{
			obj.style.left = w1-2+"px";
		}
	}
}

var iNow = 0;
function toUpPage(){
	var oBox = $d("scrollLayer");
	var oUl = oBox.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	if(oUl.offsetTop > oBox.offsetHeight - oUl.offsetHeight){
		iNow++;
		startMove(oUl,{"top":-iNow*200});
	}
	
}
function toDownPage(){
	var oBox = $d("scrollLayer");
	var oUl = oBox.getElementsByTagName("ul")[0];
	var aLi = oUl.getElementsByTagName("li");
	if(oUl.offsetTop < 0){
		iNow--;
		startMove(oUl,{"top":-iNow*200});
	}
}
/////////////////////////////

////////////////////////////////
function myAddEvent(obj, sEvent, fn){
	if(obj.attachEvent){
		obj.attachEvent('on'+sEvent, function (){
			fn.call(obj);
		});
	}
	else{
		obj.addEventListener(sEvent, fn, false);
	}
}
function getByClass(oParent, sClass){
	var aResult=[];
	var aEle=oParent.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b', 'i');
	for(var i=0;i<aEle.length;i++){
		if(re.test(aEle[i].className)){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}
function getStyle(obj, attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj, false)[attr];
}
function $d(id){ 
	  return document.getElementById(id)? document.getElementById(id): null;
}

function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		doMove(obj,json,fnEnd);
	},30);
}
function doMove(obj,json,fnEnd){
	var iCur = 0;
	var attr = null;
	var bStop = true;
	for(attr in json){
		if(attr=='opacity'){
			if(typeof obj.opacity=='undefined')
			{
				obj.opacity=parseInt(100*getStyle(obj,attr)) || 0
			}
			iCur = obj.opacity;
		}
		else{
			iCur = parseInt(getStyle(obj,attr)) || 0;
		}
		var iSpeed = (json[attr] - iCur)/8;
		iSpeed = (iSpeed>0) ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		if(iCur!=json[attr]){
			bStop = false;
		}
		if(attr=='opacity'){
			obj.opacity=iCur + iSpeed;
			obj.style.filter = 'alpha(opacity='+ obj.opacity +')';
			obj.style.opacity = obj.opacity/100;
		}
		else{
			obj.style[attr] = iCur + iSpeed + 'px';
		}
		
	}
	if(bStop){
		clearInterval(obj.timer);
		if(fnEnd){
			fnEnd.call(obj);
		}
	}
}
function $gn(name){
	return document.getElementsByName(name);
}
function backup1(){
	document.write('');
}
function backup2(){
	document.write('<a href="http://news.yunnan.cn/">新闻</a> &nbsp;&nbsp;<a href="http://yn.yunnan.cn/">云南</a> &nbsp;&nbsp;<a href="http://travel.yunnan.cn/">旅游</a> &nbsp;&nbsp;<a href="http://m.yunnan.cn/">民声</a> &nbsp;&nbsp;<a href="http://society.yunnan.cn/">社会</a> &nbsp;&nbsp;<a href="http://finance.yunnan.cn/">财经</a> &nbsp;&nbsp;<a href="http://picture.yunnan.cn/">读图</a> &nbsp;&nbsp;<a href="http://special.yunnan.cn/feature/index.html">专题</a> &nbsp;&nbsp;<a href="http://health.yunnan.cn/">健康</a> &nbsp;&nbsp;<a href="http://www.yncunguan.com/">村官</a> &nbsp;&nbsp;<a href="http://food.yunnan.cn/">美食</a> &nbsp;&nbsp;<a href="http://ent.yunnan.cn/">娱乐</a> &nbsp;&nbsp;<a href="http://house.yunnan.cn/">地产</a> &nbsp;&nbsp;<a href="http://lx.yunnan.cn/">两性</a> &nbsp;&nbsp;<a href="http://www.jinbifun.com/">金碧坊</a> &nbsp;&nbsp;<a href="http://video.yunnan.cn/">全媒体</a>');
}