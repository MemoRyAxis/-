/*---------------------------------------- 
 *  (c) 2012-08-03 By wangshu Modify
/*---------------------------------------*/
/*****************[tracklog]*****************/
//count news pv uv

/*Date.prototype.format = function(format){ 
	var o = { 
	"M+" : this.getMonth()+1, //month 
	"d+" : this.getDate(), //day 
	"h+" : this.getHours(), //hour 
	"m+" : this.getMinutes(), //minute 
	"s+" : this.getSeconds(), //second 
	"q+" : Math.floor((this.getMonth()+3)/3), //quarter 
	"S" : this.getMilliseconds() //millisecond 
	} 

	if(/(y+)/.test(format)) { 
		format = format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
	} 
	
	for(var k in o) { 
		if(new RegExp("("+ k +")").test(format)) { 
			format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
		} 
	} 
	return format; 
}*/ 
function _urlFilterQueryStr(_ourplusCountUrl) {
	_ourplusCountUrl = _ourplusCountUrl;
	var _urlsplitflag = _ourplusCountUrl.indexOf("?");
	if (_urlsplitflag != -1) {
		_ourplusCountUrl = _ourplusCountUrl.substring(0, _urlsplitflag);
	}
	return _ourplusCountUrl;
}
function _urlFilter(_ourplusCountUrl) {
	if(_ourplusCountUrl.charAt(_ourplusCountUrl.indexOf('http:/')+6)!='/'){
		_ourplusCountUrl = _ourplusCountUrl.replace('http:/','http://');
	}
	var _urlsplitflag = _ourplusCountUrl.lastIndexOf("/") + 1;
	var _urlFirstHalf = _ourplusCountUrl.substring(0, _urlsplitflag);
	var _urlSecontHalf = _ourplusCountUrl.substring(_urlsplitflag);
	if (_urlSecontHalf == "" || _urlSecontHalf.indexOf("scroll") != -1 || _urlSecontHalf.indexOf("index-") != -1 || _urlSecontHalf.indexOf("#") != -1) {
		_ourplusCountUrl = _urlFirstHalf + "index.html";
		return _ourplusCountUrl;
	}
	var reg = /(\d+)(\_\d+)\.html/ig;
	if (reg.test(_urlSecontHalf)) {
		_urlSecontHalf = _urlSecontHalf.replace(/(\d+)(\_\d+)\.html/ig, "$1") + ".html";
		_ourplusCountUrl = _urlFirstHalf + _urlSecontHalf;
	}
	return _ourplusCountUrl;
}
function getCookie2(objName){
	var arrStr = document.cookie.split("; ");  
	for(var i = 0;i < arrStr.length;i ++){    
		var temp = arrStr[i].split("=");  
		if(temp[0] == objName) {
			return unescape(temp[1]);   
		}		
	} 
}
var cookie = getCookie2("cj_cms_iploc");
var referrer = document.referrer.replace("#pic_bt","");
//referrer=encodeURIComponent(encodeURIComponent(referrer));
var _ourplusCountPage = "http://tracklog.caijing.com.cn/count.jsp";
try{
	var _ourplusPageurl = top.location.href.replace("#pic_bt","");
}catch(e){
	var _ourplusPageurl = location.href.replace("#pic_bt","");
}
var _resoursePageurl = escape(_ourplusPageurl.replace(new RegExp("&","gm"),"@"));
_ourplusPageurl = escape(_urlFilter(_urlFilterQueryStr(_ourplusPageurl)));
 
var _ourplusCountUrl = _ourplusCountPage + "?pageurl=" + _ourplusPageurl +"&rePageurl="+_resoursePageurl+"&cookie="+cookie+"&referrer="+referrer+"&timemark="+(new Date()).getTime();
try{
	if(_outplusTrackFlag != 1){
		document.write("<script src='" + _ourplusCountUrl + "'></"+"script>");
	}
}catch(e){
	//alert("exception:"+e);
	document.write("<script src='" + _ourplusCountUrl + "'></"+"script>");
}
var _outplusTrackFlag = 1;
//single news info
var _newsUrlStatusPage = "http://track.cms.caijing.com.cn/count/entitychartxml.action";
function _urlStatu(_ourplusCountUrl){
	if(_ourplusCountUrl.indexOf("info")==-1)return;
	var _urlSuffixHalf = _ourplusCountUrl.substring(_ourplusCountUrl.length-4);	
	if(_urlSuffixHalf=='info'){
		top.location=_newsUrlStatusPage+"?newsurl="+_ourplusCountUrl.substring(0,_ourplusCountUrl.length-5);
	}
}
try{var _ourplusPageurl = top.location.href;}catch(e){var _ourplusPageurl = location.href;}
_urlStatu(_ourplusPageurl);
