(function(){
	document.domain = 'sina.com.cn';
	document.write('<div id="ad_top" style="width:950px; height:90px; overflow:hidden; margin:0 auto;"></div>');
	var rad = new Array();
	var nad = new Array();
	rad.width = 950; //广告宽度
	rad.height = 90; //广告高度
	var normal_data = function(){
		rad.num = 1; //轮播数量

		var url = window.location.href;
		if(url.indexOf('slide.tech.sina.com.cn')==-1){
			<!--4239C4AD80CF-->//商业广告(flash)
			rad.push(["http://d2.sina.com.cn/cg/tech/950-90-30k.swf", "", "<startdate>2013-1-6</startdate>", "<enddate>2013-1-14</enddate>", "3331109"]);<!--$$ chenguang/2013-1-6 ~ 2013-1-14/B $-->

			<!--4239C4AD80CF-->//商业广告(flash)
			rad.push(["http://d5.sina.com.cn/cg/0104/tech.swf", "", "<startdate>2013-1-30</startdate>", "<enddate>2013-2-15</enddate>", "3331109"]);<!--$$ chenguang/2013-1-6 ~ 2013-2-15/B $-->
		}

		//垫底广告

	}
	var data_tag = 1;
	var unique_data = function(){
		rad.num = 1; //轮播数量
rad.push(["http://d1.sina.com.cn/201211/24/465520_95090tech_jiannanchun.swf","http://sina.allyes.com/main/adfclick?db=sina&bid=470056,540755,546029&cid=0,0,0&sid=547204&advid=18263&camid=85615&show=ignore&url=http://c.admaster.com.cn/c/a11498,b200110122,c1304,i0,m101,h", "<startdate>2012-11-07</startdate>", "<enddate>2013-2-11</enddate>", ""]);
		var date = new Date();
		var adArr = [];

		for(var k=0; k<rad.length; k++){
			var start = strToDate(rad[k][2].replace('<startdate>','').replace('</startdate>',''));
			var end = strToDate(rad[k][3].replace('<enddate>','').replace('</enddate>',''),true);
			if(date>start && date<end){
				adArr.push([rad[k][0], rad[k][1], rad[k][4], rad[k][5]?rad[k][5]:'0']);
			}
		}
		if(adArr.length==0){
			data_tag = 0;
		}
	}

	function strToDate(str,ext){
		var arys = new Array();
		arys = str.split('-');
		var newDate = new Date(arys[0],arys[1]-1,arys[2],9,0,0);
		if(ext){
			newDate = new Date(newDate.getTime()+1000*60*60*24);
		}
		return newDate;
	}

	//获取cookie
	function getAdCookie(N){
		var c=document.cookie.split("; ");
		for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}
		return "";
	};

	//设置cookie
	var writeCookie = function(O, o, l, I, p) {
		var i = "",
		c = "",
		path = "";
		if (l != null) {
			if(l == "NaN"){
				i = ";";
			}else{
				i = new Date((new Date).getTime() + l * 3600000);
				i = "; expires=" + i.toGMTString();
			}
		};
		if (I != null) {
			c = ";domain=" + I
		};
		if(p != null){
			path = ";path=" + p;
		};
		document.cookie = O + "=" + escape(o) + i + c + path;
	};

	//删除cookie
	function deleteCookie(name){ 
		writeCookie(name,"",-1,".sina.com.cn","/");
	}

	//121103 begin
	if(getAdCookie("directAd") != ""){
		unique_data();
		if(data_tag==0){
			normal_data();
		}else{
			unique_data();
			//曝光监测
			var exposure = new Image();
			exposure.src = "http://1199.adsina.allyes.com/main/adfshow?user=AFP6_for_SINA|jiannanchun|jiannanchun_keji_dt&db=sina&border=0&local=yes&js=ie&_=" + new Date().getTime();	
		}
	}else{
		normal_data();
	}
	//121103 end
	setTimeout(function(){
		new RotatorAD(rad,nad,'ad_top');
		var div_ad_950_90 = document.getElementById("ad_top");
		div_ad_950_90.style.display = 'none';
		if(div_ad_950_90.getElementsByTagName("iframe")[0]){
			var div_ad_iframe = document.getElementById("ifm_ad_top");
			div_ad_iframe.onload = function(){ 
				setTimeout(function(){
					var iframe_body_content = div_ad_iframe.contentWindow.document.body.innerHTML.toLowerCase();
					if(iframe_body_content){

						if(iframe_body_content.indexOf("<div")==-1){
							div_ad_950_90.style.display = "none";
						}else{
							div_ad_950_90.style.display = 'block';	
						}
					} 
				},500); 
			};
		}else if(div_ad_950_90.innerHTML==""){
			div_ad_950_90.style.display = 'none';
		}else{
			div_ad_950_90.style.display = 'block';
		}
	},1000);

})();