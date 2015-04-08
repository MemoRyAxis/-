
/*iframe*/
var E = function(element) {
	if(typeof element == "string")
	element = document.getElementById(element);
	return element;
	}
//事件注册兼容
var addEvent = function(ele,name,fun) {
	if(document.attachEvent)  ele.attachEvent("on"+name,fun);
	if(document.addEventListener)  ele.addEventListener(name,fun,false);
	}

//样式增删
var Css = {};
Css.isCss = function(e,c) {
if(typeof e=="string") e = document.getElementById(e);
var classes = e.className;
if(!classes) return false;
if(classes == c) return true;
};
Css.addCss = function(e,c) {
if(typeof e == "string") e = document.getElementById(e);
if(Css.isCss(e,c)) return ;
if(e.className) c = " " + c;
e.className +=c;
};
Css.removeCss = function(e,c) {
if(typeof e == "string") e = document.getElementById(e);
e.className = e.className.replace(new RegExp("\\b"+c+"\\b\\s*","g"),"");
};

//标签事件绑定
function bindEvent(eventObj,dataObj,titleObj,arr) {
	var lilist = E(eventObj).getElementsByTagName("li");
	E(titleObj).innerHTML = lilist[0].innerHTML;
	E(dataObj).src = arr[0];
	for(var i=0;i<lilist.length;i++) {
		addEvent(lilist[i],"click",readData);
		lilist[i].par = i;
		}
	//事件执行
	function readData(e) {
		var e = e?e:event;
		var obj = e.srcElement||e.target;
		for(var i=0;i<lilist.length;i++) {
			if(i==obj.par) {
				Css.addCss(lilist[i],"checked");
				E(dataObj).src = arr[i];
				var sp = arr[i].split('/');
				var str = sp[sp.length-1].split('.')[0];
				var srcObj = new Image();
	            srcObj.src = 'http://sfocus.tool.hexun.com/vote/stockficount.jsp?code='+str;
				E(titleObj).innerHTML = lilist[i].innerHTML;
			 }
		    else {
				Css.removeCss(lilist[i],"checked");
			 }
			}
		}

	}
//  --------------------------------------- 
function changeSize(size,sizeObj) {
	var obj = E(sizeObj);
	obj.style.fontSize = parseInt(size)+"px";
	obj.style.lineHeight = parseInt(size)+10+"px";
	}

//========================= 设置字体大中小 start =============
	function doZoom(size){
		var artibody = document.getElementById('artibody');
		if(!artibody){
			return;
		}
		var artibodyChild = artibody.childNodes;
		artibody.style.fontSize = size + 'px';
		//再对artibody div内的直接html节点设置fontSize属性
		for(var i = 0; i < artibodyChild.length; i++){
			if(artibodyChild[i].nodeType == 1){
				artibodyChild[i].style.fontSize = size + 'px';
			}
		}		
	}
//========================= 设置字体大中小 end =============
function T(size)
{document.getElementById('ArticleCnt').style.fontSize=size+'px';}

function GoUrl(Newsid)
{

window.open("http://www.hi.toptour.cn/NewsList/?Typeid=" + Newsid,'_blank',''); 
}
function trim(inputString) {

  if (typeof inputString != "string") { return inputString; }
  var retValue = inputString;
  var ch = retValue.substring(0, 1);
  while (ch == " ") { 
  //检查字符串开始部分的空格
	  retValue = retValue.substring(1, retValue.length);
	  ch = retValue.substring(0, 1);
  }
  ch = retValue.substring(retValue.length-1, retValue.length);
  while (ch == " ") {
	 //检查字符串结束部分的空格
	 retValue = retValue.substring(0, retValue.length-1);
	 ch = retValue.substring(retValue.length-1, retValue.length);
  }
  while (retValue.indexOf("  ") != -1) { 
 //将文字中间多个相连的空格变为一个空格
	 retValue = retValue.substring(0, retValue.indexOf("  ")) + retValue.substring(retValue.indexOf("  ")+1, retValue.length); 
  }
  return retValue;
}

function getCookie(name){var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));if(arr != null) return unescape(arr[2]); return null;}




function chkForm(objForm)
{
	var objForm;
	var username = objForm.username.value;
	var password = objForm.password.value;

	if( trim(username)==''|| trim(username).length < 4)
	{
      		alert("用户名不能为空或不符合要求");
		objForm.username.focus();
		return false;
	}
	if( trim(password)=='' || trim(password).length < 6 )
	{
      		alert("密码不能为空或不符合要求");
		objForm.password.focus();
		return false;
	}
	window.location.href="http://login.toptour.cn/loginget.aspx?email="+encodeURIComponent(objForm.username.value)+"&password="+objForm.password.value+"&url="+location.href+"";
	return false;

}
function chkserForm(objForm)
{
	var objForm;
	var key = objForm.key.value;

	if( trim(key)==''|| trim(key)=='请输入关键字')
	{
      		alert("关键字不能为空");
		objForm.key.focus();
		return false;
	}
	window.location.href="http://www.hi.toptour.cn/search/?key="+encodeURIComponent(form1.key.value)+"";
	 return false;

}

function chkpingForm(objForm)
{
	var objForm;
	var tb_Brief = objForm.tb_Brief.value;
	var newsid = objForm.newsid.value;
	var title = objForm.title.value;
	var userid = objForm.userid.value;

    	if (userid==null || userid==''|| userid<='0' || userid=='null')
	{

      		alert("未登录，请登录后再评论");
		objForm.tb_Brief.focus();
		return false;
	}
	if( trim(tb_Brief)==''|| trim(tb_Brief).length < 6)
	{
      		alert("评论内容为空或不符合要求");
		objForm.tb_Brief.focus();
		return false;
	}

document.charset="utf-8";
document.objForm.submit();
return false;
	//window.location.href="http://www.toptour.cn/Comments/Comments_Save.aspx?action=send&content="+objForm.tb_Brief.value+"&newsid="+objForm.newsid.value+"&newsfname="+objForm.fname.value+"&userid="+getCookie('userid')+"&title="+title+"";
	//return false;

}

function copyToClipBoard()
{
    var clipBoardContent="";
    clipBoardContent+=document.URL
    window.clipboardData.setData("Text",clipBoardContent);
    alert("复制成功，你可以在MSN、QQ、或论坛中按Ctrl+V将地址推荐给您的好友");
  }

function ope(Fname,title)
{

window.open("http://www.hi.toptour.cn/Comments/Comments_list.aspx?newsid=" + Fname + "&T="+ title,'_blank',''); 
}


function Gosearch(Fname)
{

window.open("http://www.hi.toptour.cn/search/?key=" + Fname,'_blank',''); 
}

var xmlHttp = false;
try {
  xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
} catch (e) {
  try {
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  } catch (e2) {
    xmlHttp = false;
  }
}
if (!xmlHttp && typeof XMLHttpRequest != 'undefined') {
  xmlHttp = new XMLHttpRequest();
}


//用户昵称
var nickname;

//为JavaScript的字符串添加过滤空格的对象函数
String.prototype.Trim = function() {
    return this.replace(/(^\s*)|(\s*$)/g, '');
}

//根据不同的浏览器初始化一个 XmlHttp 对象
function initAjax() {
    var http_request = null;
    try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (oc) {
            http_request = null;
        }
    }
    if (!http_request && typeof XMLHttpRequest != "undefined") {
        http_request = new XMLHttpRequest();
    }
    return http_request;
}
//添加OnLoad事件
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
function getNickName(userId) {
    var ajax = initAjax();
    var url = "http://login.toptour.cn/ajax/ajaxlogin.aspx?action=get&userId=" + escape(userId);
    ajax.open("POST", url, false);
    ajax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    ajax.onreadystatechange = function() {
        if (ajax.readyState == 4) {
            if (ajax.status == 200) {
                nickname = ajax.responseText;
            }
        }
    }
    ajax.send(null);
}
function loginPanel() {
    var userId = getCookie('UserId');
    getNickName(userId);
    var obj = document.getElementById("loginPanel");
    var userPanel = "您好：<a href=\"http://login.toptour.cn/user.aspx\" target=\"_blank\">" + nickname + "</a>,欢迎你！ <a href=\"http://login.toptour.cn/logout.aspx?url="+document.URL+"\">注销</a>";
    var loginPanel = "<a href=\"http://login.toptour.cn/login.aspx?url="+document.URL+"\"><img src=\"/images/top_1.gif\"></a> <a href=\"http://login.toptour.cn/register.aspx\"><img src=\"/images/top_2.gif\"></a>";
if (userId > 0) {
       document.getElementById("loginPanel").innerHTML += "";
        
document.getElementById('userid').value=userId;
    } else {
        document.getElementById("loginPanel").innerHTML += "";
        
document.getElementById('userid').value=userId;
    }
}


//执行添加OnLoad事件
addLoadEvent(loginPanel);