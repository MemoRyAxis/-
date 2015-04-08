String.prototype.startWith=function(str){
if(str==null||str==""||this.length==0||str.length>this.length)
  return false;
if(this.substr(0,str.length)==str)
  return true;
else
  return false;
return true;
}
var browser=function(){
	var u = navigator.userAgent, app = navigator.appVersion;
	var shell=function(){return {//浏览器版本信息
		trident: u.indexOf('Trident/') > -1, //IE内核
		presto: u.indexOf('Presto/') > -1, //opera内核
		webKit: u.indexOf('AppleWebKit/') > -1 || u.indexOf('UCWEB') > -1, //苹果、谷歌内核（UC急速浏览器也支持webkit）
		gecko: u.indexOf('Gecko/') > -1 && u.indexOf('KHTML') == -1, //火狐内核
		mobile: !!u.match(/AppleWebKit.*Mobile.*|UCWEB/), //是否为移动终端
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X|iOS/), //ios终端
		android: /Android|Linux.*UCWEB/i.test(u), //android终端
		iPhone: u.indexOf('iPhone') > -1, //是否为iPhone
		iPad: u.indexOf('iPad') > -1, //是否iPad
		webApp: u.indexOf('Safari/') == -1, //是否web应该程序，没有头部与底部
		UC: u.indexOf('UC') > -1
	};
	}();
	if(shell.android || shell.iPhone || shell.UC){return true;}else{return false;}
}
function JumpLink(){
	var s=browser();
	var str = window.location.href;// 获取页面的href 
	var re=/\/\/(.+)\.caijing.+\/(.+\-.+\-.+\/.+)\.html/; //列表页匹配
	var obj=str.match(re);
	var re2 =/\/\/(.+)\.caijing/; //频道首页和
	var obj2 =str.match(re2); 
	var mob_topic = document.getElementById("mobTopic");
	function delete_confirm(){
		if(confirm("本页面没有手机版，点击确认继续访问，取消则返回手机版财经网首页！")){
			 return true;
		  }else{
			 window.location="http://m.caijing.com.cn/";
			// return false;
		 }
	};
	//alert("第一个："+obj[1]+"\n第二个："+obj[2]);
	if(s){
        //根据设置到手机版的cookies 跳转
        if(getCookie("returnToMobile")!=null && getCookie("returnToMobile")!="" ){
          if(mob_topic){
					delete_confirm();
		  }else if (obj==null){
					if (obj2[1]=='mobile' || obj2[1]=='corp' || obj2[1]=='conference' || obj2[1]=='auto' || obj2[1]=='photos' || obj2[1]=='t'){
						//return;
						delete_confirm();
					}else{
						window.location="http://m.caijing.com.cn/channel/"+obj2[1]+".html";
					}
		 }else{
			var startstr = str.lastIndexOf("-");
			if(str.startWith("http://blog.caijing.com.cn")){
			  var itemid = str.substring(startstr+1,str.length-9);
			  window.location="http://t.caijing.com.cn/cjapi/mjblog?itemid="+itemid;
			}
		 	window.location="http://m.caijing.com.cn/"+obj[1]+"/"+obj[2]+".html";
		 };

		        return;
		}

		//客户端是手机,是否设置过cookie
		if(getCookie("returnToCaijing")==null || getCookie("returnToCaijing")==""){
		   if(confirm("点击“好”访问手机版页面，点击“取消”访问pc版")){
			    //过期时间7天
			    setCookie("returnToMobile",7);
			    if(mob_topic){
					delete_confirm();
				}else if (obj==null){
					if (obj2[1]=='mobile' || obj2[1]=='corp' || obj2[1]=='conference' || obj2[1]=='auto' || obj2[1]=='photos' || obj2[1]=='t'){
						//return;
						delete_confirm();
					}else{
						window.location="http://m.caijing.com.cn/channel/"+obj2[1]+".html";
					}
				}else{
					    var startstr = str.lastIndexOf("-");
					 if(str.startWith("http://blog.caijing.com.cn")){
						var itemid = str.substring(startstr+1,str.length-9);
						window.location="http://t.caijing.com.cn/cjapi/mjblog?itemid="+itemid;
			         }
						window.location="http://m.caijing.com.cn/"+obj[1]+"/"+obj[2]+".html";
				};

				
		   }else{
			    //过期时间7天
				setCookie("returnToCaijing",7);
			    return ;
				   
		   }
		} 
	}
}
JumpLink();urnToCaijing",7);
			    return ;
				   
		   }
		} 
	}
}
JumpLink();