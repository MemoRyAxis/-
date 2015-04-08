/* 标签切换 */
function Tabp(btnId,listId,titleStyle){
	var oBtn=document.getElementById(btnId);
	if(!oBtn){
		return false;
	}
	var aBtn=oBtn.getElementsByTagName("li");
	var oList=document.getElementById(listId);
	var aList=oList.getElementsByTagName("ul");
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			for(var j=0;j<aBtn.length;j++){
				aBtn[j].className="";
				aList[j].style.display="none";
			}
			this.className=titleStyle;
			aList[this.index].style.display="block";
		}
	}
}

/*微博分享*/
function posttoWb(url,title){
		var _appkey = 'b5e6a91f4f624db280ddec4c2177cc62';
		
		var _u = 'http://v.t.qq.com/share/share.php?title='+title+'&url='+url+'&appkey='+_appkey;
		window.open( _u,'转播到腾讯微博', 'width=700, height=580, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
	}
	function souhuWb(url,title){
		
		var _u = 'http://t.sohu.com/third/post.jsp?url='+url+'&title='+title+'&content=utf-8';
		var locset = 'width=660, height=470, top=' + (window.screen.height -470)/2 + ', left=' + (window.screen.width - 660)/2;
		window.open( _u,'分享到搜狐微博', locset);
	}
	function posttoXinlang(url,title){
		
		var _u = 'http://v.t.sina.com.cn/share/share.php?appkey=946638814&url='+url+'&title='+title;
		window.open( _u,'转播到新浪微博', 'width=700, height=580, top=180, left=320, toolbar=no, menubar=no, scrollbars=no, location=yes, resizable=no, status=no' );
	}
	function postToCJWeiSheQu(title,pouUrl){
		var f='http://t.caijing.com.cn/index.php?mod=share&code=share&url='+pouUrl+'&t='+title;
		window.open(f,'分享到财经网微社区');
	}
	function postToRenr(title,popUrl){
		var f='http://share.xiaonei.com/share/buttonshare.do?link='+ popUrl+'&title'+title;
		window.open(f,'分享到人人网');
	}
	function postToQQ(title,popUrl,description){
		var f='http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url='+ popUrl+'&summary='+description+'&title='+title;
		window.open(f,'分享到QQ空间');
	}
	function postToKaiXin(title,popUrl,description){
		var f='http://www.kaixin001.com/repaste/share.php?rtitle='+title+'&rcontent='+description+'&rurl='+popUrl;
		window.open(f,'分享到开心网');
	}
	function postToDouBan(title,popUrl){
		var f='http://www.douban.com/recommend/?url=' + popUrl + '&title=' + title;
		window.open(f,'分享到豆瓣网');
	}
	function postToWangYi(title,popUrl){
		var f='http://t.163.com/article/user/checkLogin.do?link='+popUrl+'&source='+ encodeURIComponent('财经网')+ '&info='+title+' '+popUrl+'&'+new Date().getTime();
		window.open(f,'分享到网易');
	}
	function china_mobile(s,d,url,title){
	  try{}catch(e){}
	  var f='http://go.10086.cn/ishare.do?';
	  var p=['u=',url,'&t=',title,'&sid=3b1560f22b3b5d449970b4a3f8b1fb41','&m=wt'].join('');
	  function a(){
	   if(!window.open([f,p].join(''),'mb',['toolbar=0,status=0,resizable=1,location=0,scrollbars=1,width=800,height=600,left=',(s.width-620)/2,',top=',(s.height-450)/2].join('')))d.location.href=[f,p].join('');
	   
	  };
	   if(/Firefox/.test(navigator.userAgent)){
	   setTimeout(a,0)
	   }else{
	   a()
	   }
 	}

/*搜索*/
function searchsubmit(frm){
	if(frm.key.value.trim()=="" || frm.key.value.trim()=="输入文字...")
	{
			alert("请输入关键字!");
			frm.key.value="";
			frm.key.focus();
			return false;
	}
}
/*设为首页*/
function SetHome(obj){
	try{
		obj.style.behavior='url(#default#homepage)';
		obj.setHomePage('http://www.caijing.com.cn/');
	}catch(e){
		if(window.netscape){
			try{
				netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
			}catch(e){
				alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
			};
		}else{
			alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将'http://www.caijing.com.cn/'设置为首页。");
		};
	};
}
/*微信关闭*/
function djcls(){
        var ycdiv = document.getElementById('ycfc');
        var djbtn = document.getElementById('djgb');
		if (ycdiv && djbtn)
		{
			djbtn.onclick = function click_cls()
			{
				ycdiv.style.display="none";
			};
			
		};
        
}
djcls();