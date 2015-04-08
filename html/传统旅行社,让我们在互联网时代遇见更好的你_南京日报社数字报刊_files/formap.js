// JavaScript Document

function addPicMap(x,y){
	 var mapObj = $gn('PagePicMap')[0];
	 var rangeX = x;
	 var rangeY = y;
	 mapObj.onmouseover = function(ev){
		 ev = ev || window.event;
		 var evElement = ev.srcElement || ev.target;
		 drawMapLine(evElement,rangeX,rangeY,"hotMapArea","titlePanel",ev);
	 };
	 mapObj.onmouseout=function(){
		cancelMap("hotMapArea");
		cancelMap("titlePanel");
	 };
}


//版面图画红框
function drawMapLine(obj,rX,rY,id1,id2,ev){ 
	 var str = obj.coords;
	 var slink = obj.href;
	 var arrCo = str.split(',');
	 var minX,minY,maxX,maxY,n;
	 minX = minY = 999999;
	 maxX = maxY = -1;

	 for(var i=0; i<arrCo.length; i=i+2){
		 n = parseInt(arrCo[i]);
		 if(n<minX){
			minX = n;
		 }
		 if(n>maxX){
			maxX = n;
		 } 
	 }
	 for(var i=1; i<arrCo.length; i=i+2){
		 n = parseInt(arrCo[i]);
		 if(n<minY){
			minY = n;
		 }
		 if(n>maxY){
			maxY = n;
		 }
	 }
	 var w1 = maxX-minX;
	 var h1 = maxY-minY;
	 
	 //创建div边框层
	 var oBox = $d("picMap");
	 if(oBox == null){
		 alert("请检查版面图id")
		 return;
	 }
	 //alert(oBox.offsetLeft);
	 if($d(id1) == null){
		 var oDiv = document.createElement("div");
		 oDiv.id = id1;
		 oDiv.onmouseover = function(){
			this.style.display = "block";
			if($d(id2)){
				$d(id2).style.display = "block";
			}
		 }
		 oDiv.onmouseout = function(){
			this.style.display = "none"; 
			if($d(id2)){
				$d(id2).style.display = "none";
			}
		 }
		 var oDiv2 = document.createElement("div");
		 oDiv.appendChild(oDiv2);
		 obj.parentNode.parentNode.appendChild(oDiv);
		 
	 }	 

	 var oDiv = $d(id1);
	 var oDiv2 = oDiv.getElementsByTagName("div")[0];
	 oDiv2.onclick = function(){
		 window.location.href =slink ;
	 }
	 var t1 = minY + oBox.offsetTop + rY;
	 var l1 = minX + oBox.offsetLeft + rX;
	 oDiv.style.top = t1 +"px";
	 oDiv.style.left =  l1 +"px";
	 oDiv.style.width = w1 +"px";
	 oDiv.style.height = h1 +"px";
	 oDiv.style.display = "block";
	 
	 var sName = $d("paperName").innerHTML; 
	 var aLi = $d("artPList1").getElementsByTagName("li");
	 var sTitle = "";
	 for(var i=0;i<aLi.length; i++){
		 if(slink == aLi[i].getElementsByTagName("a")[0].href){
			 sTitle = aLi[i].getElementsByTagName("a")[0].innerHTML;
		 }
	 }
	 showTitlePanel(w1,h1,id2,ev,sName,sTitle);
}


function showTitlePanel(w1,h1,id2,ev,sName,sTitle){
	var oScrY = document.documentElement.scrollTop || document.body.scrollTop;
	var t2 = ev.clientY + oScrY + 10;
	var l2 = ev.clientX + 10;
	
	if($d(id2) == null){
		 var oDiv = document.createElement("div");
		 oDiv.id = id2;
		 document.body.appendChild(oDiv);
	 }
	 
	 var oDiv = $d(id2);
	 var str1 = '<p class="hd">'+sName+'</p>'+
				'<p class="title">'+sTitle+'</p><p class="btm"></p>';
	 oDiv.innerHTML = str1;
	 oDiv.style.top = t2 +"px";
	 oDiv.style.left =  l2 +"px";
}

function cancelMap(id){
	if($d(id)){
		$d(id).style.display = "none";
	}
}