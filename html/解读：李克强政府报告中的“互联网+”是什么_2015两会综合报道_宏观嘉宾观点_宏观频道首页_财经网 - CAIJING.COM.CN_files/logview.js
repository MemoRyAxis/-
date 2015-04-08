/*---------------------------------------- 
 *  (c) 2008-08-12 By TJL Modify
/*---------------------------------------*/

/*****************[logview]*****************/
//count news pv
function _urlFilterQueryStr(_ourplusCountUrl){
	_ourplusCountUrl = unescape(_ourplusCountUrl);
	var _urlsplitflag = _ourplusCountUrl.indexOf("?");
	if(_urlsplitflag!=-1){
		_ourplusCountUrl = _ourplusCountUrl.substring(0,_urlsplitflag);
	}
	return escape(_ourplusCountUrl);
}
function _urlFilter(_ourplusCountUrl){
	var _urlsplitflag = _ourplusCountUrl.lastIndexOf("/")+1; 
	var _urlFirstHalf = _ourplusCountUrl.substring(0,_urlsplitflag);
	var _urlSecontHalf = _ourplusCountUrl.substring(_urlsplitflag);
	if(_urlSecontHalf=="" || _urlSecontHalf.indexOf("scroll")!=-1 
	   || _urlSecontHalf.indexOf("index-")!=-1 || _urlSecontHalf.indexOf("#")!=-1){
		_ourplusCountUrl = _urlFirstHalf+"index.html";
		return _ourplusCountUrl;
	}
	var reg = /(\d+)(\_\d+)\.html/ig;
	if(reg.test(_urlSecontHalf)){
		_urlSecontHalf = _urlSecontHalf.replace(/(\d+)(\_\d+)\.html/ig,"$1")+".html"
		_ourplusCountUrl = _urlFirstHalf+_urlSecontHalf;
	}
	return _ourplusCountUrl;
}
var _ourplusCountPage = "http://log.caijing.com.cn/count.jsp";
try{var _ourplusPageurl = escape(top.location.href);}catch(e){var _ourplusPageurl = escape(location.href);}
_ourplusPageurl = _urlFilter(_urlFilterQueryStr(_ourplusPageurl));
var _ourplusCountUrl = _ourplusCountPage + "?pageurl=" + _ourplusPageurl + "&timemark=" + (new Date()).getTime();
try{if(_outplusFlag != 1){document.write("<script src='" + _ourplusCountUrl + "'></"+"script>");}
}catch(e){document.write("<script src='" + _ourplusCountUrl + "'></"+"script>");}
var _outplusFlag = 1;

//single news status
var _newsUrlStatusPage = "http://logview.cms.caijing.com.cn/status.jsp";
function _urlStatus(_ourplusCountUrl){
	if(_ourplusCountUrl.indexOf("status")==-1)return;
	var _urlSuffixHalf = _ourplusCountUrl.substring(_ourplusCountUrl.length-6);	
	if(_urlSuffixHalf=='status'){
		top.location=_newsUrlStatusPage+"?newsurl="+_ourplusCountUrl.substring(0,_ourplusCountUrl.length-7);
	}
}
try{var _ourplusPageurl = top.location.href;}catch(e){var _ourplusPageurl = location.href;}
_urlStatus(_ourplusPageurl);

//analytics iploc
var pagestat_cookie = document.createElement("img");
pagestat_cookie.src= "http://analytics.caijing.com.cn/iploc.js";