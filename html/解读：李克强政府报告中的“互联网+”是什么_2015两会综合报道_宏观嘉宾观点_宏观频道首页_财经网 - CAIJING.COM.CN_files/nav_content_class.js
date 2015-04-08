function NavContentclass(parentUrl){  
	//var thref = window.location.href;/* 获取页面的href */
	//var thref = "http://www.caijing.com.cn/";
	var aLink = document.getElementById("oNav").getElementsByTagName("a");
	var aLi = document.getElementById("oNav").getElementsByTagName("li");
	var Index=null;
	var arr=new Array;  
	for (var i=0;i<aLink.length;i++ )
	{	
		arr.push(aLink[i].href);
		
		aLi[i].className="";		
		if ( parentUrl.indexOf(arr[i]) > -1)  /*判断arr[i].toString()与当前页面的href值相等*/
		{
			
			Index=i; 
			break;
		}else{
			Index=0;
		};
	}
		aLi[Index].className="mnav_lith";
	  return Index;/* 当调用这个函数是 就会返回当前页面的 索引值 */
}
