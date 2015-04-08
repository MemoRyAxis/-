
function loadPeriod(){
	loadPeriodXml();
}
function loadPeriodXml(y,m,flg){
	var oAjax=null;
	if(window.XMLHttpRequest){
		oAjax=new XMLHttpRequest();
	}
	else{
		oAjax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	var nLen = arguments.length;
	if(nLen == 0){
		oAjax.open('POST', '../period.xml', true);
	}
	else{
		oAjax.open('POST', '../../'+ y + '-' + appendZero(m-0+1) +'/period.xml', true);
	}
	oAjax.send();
	oAjax.onreadystatechange = function (){
		if(oAjax.readyState==4){
			if(oAjax.status==200){
				switch(nLen){
					case 0:
						loadSucess(oAjax);
						break;
					case 2:
						loadSucess(oAjax,y,m);
						break;
					case 3:
						loadSucess(oAjax,y,m,flg);
						break;
				}
			}
			else{
				switch(nLen){
					case 2:
						loadFail(y,m);
						break;
					case 3:
						loadFail(y,m,flg);
						break;
				}
			}
		}
	}
}

var aPaperDate = [];
var aFstPage = [];
var thisDate = "";
function loadSucess(obj,y,m,flg){
	var xmlData = obj.responseXML;
	var dateNodes = xmlData.getElementsByTagName("period_date");  //期次
	var fstPageNodes = xmlData.getElementsByTagName("front_page");  //第一个版
	var data = "";
	aPaperDate = [];
	aFstPage = [];
	for(var i=0; i<dateNodes.length; i++){
		date = dateNodes[i].childNodes[0].nodeValue;
		/*if(fstPageNodes.length){
			page = fstPageNodes[i].childNodes[0].nodeValue;
		}
		else{
			page = firstNodePage;
		}*/
		page = firstNodePage;
		aPaperDate.push(date);
		aFstPage.push(page);
	}
	var sUrl = cancelHash(location.href);
	
	if(arguments.length==1){
		var r = dateToStr(sUrl,2);
		thisDate = r[1]+"-"+r[2]+"-"+r[3];
		$gn("SY")[0].selectedIndex=r[1]-2006;
		$gn("SM")[0].selectedIndex=r[2]-1;
		drawCld(r[1],r[2]-1);
	}
	else if(arguments.length==3){
		drawCld(y,m);
	}
	else{
		if(flg=="pre"){
			sUrl = getPeriodUrl(aPaperDate[aPaperDate.length-1],aPaperDate.length-1);
			
		}
		else if(flg == "nxt"){
			sUrl = getPeriodUrl(aPaperDate[0],0);
		}
		window.location.href = sUrl;
	}
}


var maxSpace = 3;//最大间隔月份
var ldNum = 0;
function loadFail(y,m,flg){
	if(arguments.length==2){
		drawCld(y,m);
		return;
	}
	else{
		ldNum++;
		if(ldNum < maxSpace){/*0=<m<=11*/
			if(flg == "pre" ){
				m==0? loadPeriodXml(y-1,11,flg):loadPeriodXml(y,m-1,flg);
			}
			else{
				m==11? loadPeriodXml(y-0+1,0,flg):loadPeriodXml(y,m-0+1,flg);
			}
		}
		else{
			flg == "pre" ? alert("已经是最前一期") : alert("已经是最后一期");
		}
	}
}

function getThisNum(arrs,dt){
    var n = -1;
	for(var i=0; i< arrs.length; i++){
		if(arrs[i] == dt){
			n=i;
			break;
		}
	}
	return n;
}

function cancelHash(url){
	var s = url.split("#");
	s = s[0].split("?");
	return s[0];
}
function getPeriodUrl(sDate,flg){
	var r = dateToStr(sDate,1);
	var sUrl = cancelHash(location.href);
	sUrl = sUrl.replace(/\d{4}-\d{2}\/\d{2}/g,r[1] + "-"+ r[2] + "/" + r[3]);
	sUrl = getFirstUrl(sUrl,flg);
	return sUrl;
}
function getFirstUrl(sUrl,flg){
	var nodeRe = /node_\d+\.htm/i;
	var contRe = /content_\d+\.htm/i;
	var r1 = sUrl.match(nodeRe);
	var r2 = sUrl.match(contRe);
	var nFst = aFstPage[flg];
	
	if(r1){
		sUrl = sUrl.replace(nodeRe,nFst);
	}
	else if(r2){
		sUrl = sUrl.replace(contRe,nFst);
	}
	return sUrl;
}

function goPrePeriod(){
	var n = getThisNum(aPaperDate,thisDate);
	if(n>0){
		var url1 = getPeriodUrl(aPaperDate[n-1],getThisNum(aPaperDate,thisDate)-1);
		window.location.href = url1;
	}
	else if(n==0){
		var r = dateToStr(thisDate,1);
		r[2]==1?r[1]--:r[1];
		loadPeriodXml(r[1],((r[2]-2)%12+12)%12,"pre");
	}
}

function goNxtPeriod(){
	var n = getThisNum(aPaperDate,thisDate);
	if(n<aPaperDate.length-1){
		var url1 = getPeriodUrl(aPaperDate[n+1],getThisNum(aPaperDate,thisDate)+1);
		window.location.href = url1;
	}
	else{
		var r = dateToStr(thisDate,1);
		r[2]==12 ? r[1]++:r[1];
		loadPeriodXml(r[1],r[2]%12,"nxt");
	}
}

////转化日期为 yyyy，mm，dd
function dateToStr(sDt,par){
	if(par ==1){
		var re = /(\d{4})-(\d{2})-(\d{2})/im;
	    return sDt.match(re);
	}
	else if(par ==2){
		var re = /(\d{4})-(\d{2})\/(\d{2})/im;
	    return sDt.match(re);
	}
}


//////////////////////////////
var Today = new Date();
var tY = Today.getFullYear();
var tM = Today.getMonth();
var tD = Today.getDate();
var cld;
function drawCld(SY,SM) {
   cld = new calendar(SY,SM);
   for(var i=0;i<42;i++) {   
      gObj=$d('GD'+ i);
      cObj=$d('CD'+ i);

      var sD = i - cld.firstWeek;
      if(sD>-1 && sD<cld.length) { //日期内
         var testDate = "";
         if((sD+1)<10)
         	testDate += "0";
         testDate += (sD+1);
	 
		 var verifyDate = SY + "-" + appendZero(SM+1) + "-" + testDate;
		 var t1 = getThisNum(aPaperDate,verifyDate);
		 
		 if(t1>-1){
			cObj.href = getPeriodUrl(verifyDate,t1);
			cObj.className = "paperdate";
			
		 }
		 else{
				cObj.innerHTML = sD+1;
				cObj.className = "blankdate";	
		 } 

         cObj.innerHTML = sD+1;
         if(cld[sD].isToday) cObj.className = 'todaycolor'; //今日颜色

      }
      else { //非日期
         cObj.innerHTML = '';
      }
   }
   if($d("prePeriod") && $d("nxtPeriod")){
	   $d("prePeriod").style.display = $d("nxtPeriod").style.display = "inline-block";
   }
}
function turnpage(src,mode){
  var oSrc = $gn(src)[0]
  currPos = oSrc.selectedIndex;
  if(mode==0){//前翻
  	if(currPos==0) return;
	else {
	  oSrc.selectedIndex = currPos -1;
	  oSrc.onchange();
	}  
  }else{
     if(currPos == oSrc.length-1)
	 return;
	 else {
	   oSrc.selectedIndex = currPos +1;
	   oSrc.onchange();
	 }
  }
}
function changeMPCld(){
   var y,m;
   y=$gn("SY")[0].selectedIndex+2006;
   m=$gn("SM")[0].selectedIndex;
   loadPeriodXml(y,m)
}

function appendZero(n){return(("00"+ n).substr(("00"+ n).length-2));}