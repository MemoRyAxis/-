// JavaScript Document
/*********����һϵ����Ŀ��ʾ������********/
function itemShow(itemName,showId,num,bgItemName,clsName)       //(itemName+num)ϵ����Ŀ���ƣ�showID��Ҫ��ʾ�ı��
{
	var clsNameArr=new Array(2)
	if(clsName.indexOf("|")<=0){
		clsNameArr[0]=clsName
		clsNameArr[1]=""
	}else{
		clsNameArr[0]=clsName.split("|")[0]
		clsNameArr[1]=clsName.split("|")[1]
	}
	
	for(i=1;i<=num;i++)
	{
		if(document.getElementById(itemName+i)!=null)
			document.getElementById(itemName+i).style.display="none"
		if(document.getElementById(bgItemName+i)!=null)
			document.getElementById(bgItemName+i).className=clsNameArr[1]
		if(i==showId)
		{
			if(document.getElementById(itemName+i)!=null)
				document.getElementById(itemName+i).style.display=""
			else
				alert("δ�ҵ������������!")
			if(document.getElementById(bgItemName+i)!=null)
				document.getElementById(bgItemName+i).className=clsNameArr[0]
		}
	}
}
/*******************************************/


/*********����ҳ�ж������********/
document.domain = "cctime.com";
var browser={    
versions:function(){            
	var u = navigator.userAgent, app = navigator.appVersion;            
	return {
		mobile: u.indexOf('Mobile') > -1,
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
		android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
		iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
		iPad: u.indexOf('iPad') > -1
	};
}()
} 
function browserCheck(t){
	if(browser.versions.mobile){
		window.location = 'http://www.cctime.com/weixin/index.asp?tid='+t;
	}
} 
function MbrowserCheck(t){
	if(browser.versions.mobile){
		if(t.indexOf("/htm")>0){
			var a=t.indexOf("/htm");
			var b=t.indexOf(".htm");
			var m=t.substring(a,b+4);
			window.location = 'http://bbs.cctime.com/comment/index.php?tid='+m;
		}
		
	}
} 
/*******************************************/