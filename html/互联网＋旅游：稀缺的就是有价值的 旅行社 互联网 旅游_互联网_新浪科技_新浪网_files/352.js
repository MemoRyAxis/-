//coding by lingchen on Oct 27th 2012
var hzh = {};
hzh.flag = 0;
hzh.divid = "ad_42124";
hzh.pdps = "PDPS000000042124";
hzh.surround_num = 800;
hzh.str_sum = 0;
hzh.str_temp = 0; 
hzh.p_num = 0;
hzh.nodes = [];
hzh.p_node = [];
hzh.img_num = null;
//hzh.$ = function(id){return document.getElementById(id);}
hzh.$ = function(vArg){
    this.elements = [];
    switch(typeof vArg){
        case 'function': //window.onload = vArg
            hzh.addEvent(window,'load',vArg);
            break;
        case 'string':
            switch(vArg.charAt(0)){
                case '#': //id
                    var obj = document.getElementById(vArg.substring(1));
                    return obj;
                    break;
                case '.': //class
                    this.elements = hzh.getClass(document,vArg.substring(1));
                    return this.elements;   
                    break;
                default: //tagName  
                    this.elements = document.getElementsByTagName(vArg);
                    return this.elements;   
            }
            break;
        case 'object':
            this.elements.push(vArg);
            return this.elements;   
    }
}
hzh.getClass = function(oParent,sClass){
    var parent = oParent || document;
    var re = new RegExp('\b'+sClass+'\b');
    var aEles = parent.getElementsByTagName('*');
    var arr = [];
    for(var i=0; i<aEles.length; i++){
        if(re.test(aEles[i].className)){arr.push(aEles[i]);}
    }
    return arr;
}

hzh.addEvent = function(obj, sEv, fn){
    if(obj.attachEvent){
        obj.attachEvent('on'+sEv,function(){
            fn.call(obj);   
        }); 
    }
    else{
        obj.addEventListener(sEv, fn, false);   
    }
}
hzh.main_container = hzh.$("#artibody");
hzh.p = hzh.main_container.getElementsByTagName("p");
hzh.div = hzh.main_container.getElementsByTagName("div");
hzh.className = 'otherContent_01';
hzh.cssText = 'display:none;width:200px; height:300px; margin:10px 20px 10px 0px; float:left; overflow:hidden; clear:both; padding:4px; border:1px solid #CDCDCD; display:none;';
hzh.zhengwen_div = hzh.main_container.getElementsByTagName("div");
hzh.noAD = hzh.$("#noAD");
hzh.ua = navigator.userAgent.toLowerCase();
hzh.isIE6 = /msie 6/.test(hzh.ua);
hzh.isIE7 = /msie 7/.test(hzh.ua);
hzh.iOS = /\((iPhone|iPad|iPod)/i.test(hzh.ua);
hzh.iOS_tag = 1;

//cookie
hzh.getAdCookie = function(N){
    var c=document.cookie.split("; ");
    for(var i=0;i<c.length;i++){var d=c[i].split("=");if(d[0]==N)return unescape(d[1]);}
    return "";
};

hzh.removeHTMLTag = function(str) {
    str = str.replace(/<\/?[^>]*>/g,'');
    str = str.replace(/[ | ]*\n/g,'\n');
    //str = str.replace(/\n[\s| | ]*\r/g,'\n');
    str=str.replace(/&nbsp;/ig,'');
    return str;
}
hzh.Len = function(str){
     var i,sum;
     sum=0;
     for(i=0;i<str.length;i++){
         if ((str.charCodeAt(i)>=0) && (str.charCodeAt(i)<=255))
             sum=sum+1;
         else
             sum=sum+2;
     }
     return sum;
}
hzh.insertAfter = function(newElement,targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    }else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

hzh.createHzh = function(){
    var oDiv = document.createElement("div");
	oDiv.id = hzh.divid;
    oDiv.className = hzh.className;
    oDiv.style.cssText = hzh.cssText;
	oDiv.innerHTML = '<ins id="SinaAdsArtical" class="sinaads" data-ad-pdps="'+hzh.pdps+'"></ins>';
    return oDiv;    
}

hzh.createSpanHzh = function(){
    var oDiv = document.createElement("span");
	oDiv.id = hzh.divid;
    oDiv.className = hzh.className;
    oDiv.style.cssText = hzh.cssText;
	oDiv.innerHTML = '<ins id="SinaAdsArtical" class="sinaads" data-ad-pdps="'+hzh.pdps+'"></ins>';
    return oDiv;    
}

hzh.insertAd_after = function(insert_p){
    var cur_p = insert_p;
    hzh.insertAfter(hzh.createHzh(),cur_p);
}
hzh.insertSpanAd_after = function(insert_p){
    var cur_p = insert_p;
    hzh.insertAfter(hzh.createSpanHzh(),cur_p);
}
hzh.insertAd_before = function(thisDiv){
    var parent = thisDiv.parentNode;
    parent.insertBefore(hzh.createHzh(),thisDiv);
}
hzh.insertClear =function(insert_p){
    var oDivClear = document.createElement("div");
    oDivClear.style.fontSize = "0px";
    oDivClear.style.height = "0px";
    oDivClear.style.clear = "both";
    var last_p = insert_p;
    hzh.insertAfter(oDivClear,last_p);
}

hzh.nodePage = hzh.$(".page")[0];
hzh.nodeShare = hzh.$("#sinashareto");
hzh.hasPage = function(){
    if(hzh.nodePage){
        return true;
    }else{
        return false;
    }
}();
hzh.hasShare = function(){
    var shareFlag = false;
    for(var i=0;i<hzh.div.length;i++){
        if(hzh.div[i].id=="sinashareto"){
            shareFlag = true;
            break;  
        }
    }
    return shareFlag;
}();

hzh.yule_node = null;
for(var i=0;i<hzh.div.length;i++){
    if(hzh.div[i].innerHTML.indexOf('\u67e5\u770b\u66f4\u591a\u7f8e\u56fe\u8bf7\u8fdb\u5165\u5a31\u4e50\u5e7b\u706f\u56fe\u96c6')!=-1){
        hzh.yule_node = hzh.div[i].parentNode;
    }
}

for(var i=0;i<hzh.main_container.childNodes.length;i++){
    if(hzh.main_container.childNodes[i].nodeType==1){
        var sel_childNodes = hzh.main_container.childNodes[i];

        var yule_txt = '\u67e5\u770b\u66f4\u591a\u7f8e\u56fe\u8bf7\u8fdb\u5165\u5a31\u4e50\u5e7b\u706f\u56fe\u96c6';
        if(sel_childNodes.id=="sinashareto" || sel_childNodes.innerHTML.indexOf(yule_txt)!=-1 || sel_childNodes.className=="page"){
            break;
        }else{
            hzh.nodes.push(hzh.main_container.childNodes[i]);
        }
    }
}

//step2:
for(var i=hzh.nodes.length-1;i>=0;i--){
    var zhengwen_img_arr = hzh.nodes[i].getElementsByTagName("img");
    var zhengwen_p_script_arr = [];
    var zhengwen_p_align = false;
    if(hzh.nodes[i].nodeName.toLowerCase() == 'p'){
        zhengwen_p_script_arr = hzh.nodes[i].getElementsByTagName("script");
        if(hzh.nodes[i].getAttribute("align")=='center'){
            zhengwen_p_align = true;
        }
    }
    var zhengwen_table_node = hzh.nodes[i].nodeName.toLowerCase();
    var zhengwen_child_table_node = hzh.nodes[i].getElementsByTagName("table");
    var zhengwen_node_class = hzh.nodes[i].className;
    var nodeClassTag = false;

    var classList = ['weiboListBox otherContent_01','contentPlayer','blk_video_news','hdFigureWrap','artical-player-wrap','sdFigureWrap','img_wrapper'];
    for(var k=0;k<classList.length;k++){
        if(zhengwen_node_class==classList[k]){
            nodeClassTag = true;
            break;  
        }
    }

    if((zhengwen_img_arr[0] && (zhengwen_img_arr[0].src.indexOf(".jpg")!=-1 || zhengwen_img_arr[0].src.indexOf(".png")!=-1)) || zhengwen_table_node=="table" || zhengwen_child_table_node[0] || zhengwen_p_script_arr[0] || zhengwen_p_align==true || nodeClassTag == true){
        hzh.img_num = i+1;
        break;
    }
    else{
        hzh.img_num = i;
    }
}
//step3:
for(var i=hzh.img_num;i<hzh.nodes.length;i++){
    if(hzh.nodes[i].nodeName.toLowerCase() == 'p'){
        hzh.p_node.push(hzh.nodes[i]);
    }
}

if(hzh.p_node.length>0){
    for(i=0;i<hzh.p_node.length;i++){ 
        var html = hzh.p_node[i].innerHTML; 
        var txt = hzh.removeHTMLTag(html);
        var p_str_num = hzh.Len(txt);
        hzh.str_sum += p_str_num;
        hzh.p_num++;
    }
}

if(!hzh.noAD){

    var lFloatArr = hzh.$('.blk_ntchack1');
    var lFloatTarget = null;
    if(lFloatArr.length==1){
        lFloatTarget = lFloatArr[0];    
    }else if(lFloatArr.length>1){
        lFloatTarget = lFloatArr[lFloatArr.length-1];   
    }

    if((hzh.isIE6||hzh.isIE7) && lFloatTarget||( hzh.$("#p_player")||(hzh.$("#J_Article_Player")&&hzh.$("#J_Article_Player").parentNode.className.indexOf('blk_video_news')!=-1))){
        if(hzh.$("#p_player")){
            var oSpan = hzh.$("#p_player").parentNode;
            hzh.insertSpanAd_after(oSpan);
        }else if(lFloatTarget){
            hzh.insertSpanAd_after(lFloatTarget);
        }
        else{
            var oSpan = hzh.$("#J_Article_Player").parentNode;
            hzh.insertSpanAd_after(oSpan);
        }
    }
    else{
        if(hzh.p_node.length<1){
            if(hzh.hasPage == true){
                hzh.insertAd_before(hzh.nodePage);
                hzh.insertClear(hzh.$("#"+hzh.divid));
            }else if(hzh.yule_node){
                hzh.insertAd_before(hzh.yule_node);
                hzh.insertClear(hzh.$("#"+hzh.divid));
            }else if(hzh.hasShare == true){
                hzh.insertAd_before(hzh.nodeShare);
                hzh.insertClear(hzh.$("#"+hzh.divid));
            }else{
                hzh.main_container.appendChild(hzh.createHzh());
                hzh.insertClear(hzh.$("#"+hzh.divid)); 
            }
        }
        else if(hzh.p_node.length==1){
            hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);
            hzh.insertAd_before(hzh.p_node[hzh.p_node.length-1]);
        }

        else if(hzh.p_node.length>1){

            if(hzh.str_sum<=hzh.surround_num){
                hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);
                hzh.insertAd_before(hzh.p_node[0]);
            }else{
                for(var i=hzh.p_num-1; i>=0; i--)
                {
                    var txt_last = hzh.removeHTMLTag(hzh.p_node[i].innerHTML);
                    var txt_last_num = hzh.Len(txt_last);
                    hzh.str_temp += (parseInt(txt_last_num/30) + 1)*30;
                    if(hzh.str_temp < hzh.surround_num){
                        hzh.p_num--;
                    }
                    else{
                        hzh.insertClear(hzh.p_node[hzh.p_node.length-1]);
                        hzh.insertAd_before(hzh.p_node[hzh.p_num-1]);
                        break;
                    }
                }
            }
        }
    }
}
hzh.hzh_div = hzh.$("#"+hzh.divid);

(function(){
	var adScript = document.createElement('script');
	adScript.src = 'http://d9.sina.com.cn/litong/zhitou/sinaads/release/sinaads.js';
	document.getElementsByTagName('head')[0].appendChild(adScript);
})();
(sinaads = window.sinaads || []).push({
        element:document.getElementById("SinaAdsArtical"),
	params : {
      sinaads_success_handler : function () { 
	  		if(hzh.iOS&&(hzh.hzh_div.innerHTML.toLowerCase().indexOf('.swf')!=-1||hzh_div.innerHTML.toLowerCase().indexOf('<iframe')!=-1)){
				hzh.hzh_div.style.display = 'none'; 
			}else{
				hzh.hzh_div.style.display = 'block'; 
			}
			/*try{
				_ssp_ad.load(hzh.divid,function(){
					hzh.hzh_div.style.display = 'none';
				});
			}catch(e){
				hzh.hzh_div.style.display = 'none';
			}*/
	  },
      sinaads_fail_handler : function () {
           hzh.hzh_div.style.display = 'none'; 
	  }
    }	
});