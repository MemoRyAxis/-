/*
*   @使用说明
*   @统一方法调用xlt.box.callback()
*   @用于提示验证 isType : 1 
*   isBox, isSubmit, isCallback 产品需求而做的样式，实际功能一致
*/
var xlt = {};
function Ace(id){ 
    return typeof id === "string" ? document.getElementById(id) : id;
};
Object.extend = function(destination, source){
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};
isFunction = function( fn ) {  
    return typeof fn == "function" ;
};
xlt.box = function(){
    var box,mask,content,_height,_width,ck,isPreload,isMask,_con_,warpDiv,sub,abox,isType,isBox,isSubmit,isCallback;
    return {
        open:function(options,con){
            //配置参数
            var defaultOptions = {
                    type :"",  //提示类型
                    width:454, //默认宽度
                    time:0,    //是否开启延迟关闭,默认不开启
                    title:"", //标题
                    _content_:"", //内容,支持ajax
                    _con_: "",  //用于提示验证 其他勿用
                    isShut: 1, //显示右上角关闭,默认显示
                    isMask: 1, //遮罩层,默认开启
                    isType: 0,
                    isSubmit : 0,   //提交
                    isBox : 0,  //保存
                    isCallback : 0 //确定
            };
            options = options?options:{};
            options = Object.extend(defaultOptions,options);
            //创建层
            box = document.createElement('div');
            box.className = "cncnNetBox";
            box.id = "xltbox"
            mask = document.createElement('div');
            mask.id = "xltboxmc";
            mask.style.cssText = "position:absolute;filter:alpha(opacity=50 ); opacity:0.5; top:0; left:0; height:100%; width:100%; background:#000; z-index:20";
            content = document.createElement('div');
            content.className = "cnbContent";
            bar = document.createElement('div'); 
            bar.className = "cnbTop";
            wrapTit = document.createElement('h3'); 
            shut = document.createElement('a');
            ck = document.createElement('div');
            ck.className = "cnbSubmit fn-clear";
            ck.innerHTML = '<a href="javascript:void(0)" class="cnbSubmitbox" id="cnbSubmit"></a><a href="javascript:void(0)" class="cnbCancelbox" id="cnbCancel"></a>';
            //fuck warm type!
            warpDiv = document.createElement('div');
            warpDiv.className = "cnbSubmit fn-clear";
            warpDiv.innerHTML = '<a href="javascript:void(0)" class="boxSubmit" id="boxSubmit"></a><a href="javascript:void(0)" class="boxCancle" id="boxCancle"></a>';
            sub = document.createElement('div');
            sub.className = "cnbSubmit fn-clear";
            sub.innerHTML = '<a href="javascript:void(0)" class="subSubmit" id="subSubmit"></a>';
            abox = document.createElement('div');
            abox.className = 'card_succeed fn-clear';
            abox.innerHTML = '<table><tr><td valign="top" width="21"><s class="alert_'+options.type+'"></s></td><td>'+options._con_+'</td></tr></table>';
            
            box.appendChild(bar); 
            box.appendChild(content);
            document.body.appendChild(mask); 
            document.body.appendChild(box); 
            bar.appendChild(wrapTit); 
            bar.appendChild(shut);
            for(var i = 0;i<document.getElementsByTagName("select").length;i++){
                document.getElementsByTagName("select")[i].style.display = "none";
            }
            shut.onclick = xlt.box.hide;
            window.onresize = xlt.box.resize;
            wrapTit.innerHTML = options.title;
            
            if(options.isShut){
                shut.style.display = ''
            }
            else{
                shut.style.display = 'none';
                //mask.onclick=xlt.box.hide;
            }
            // if(options.isCallback){
            //     box.appendChild(ck);
            // }
            // if(options.isSubmit){
            //      box.appendChild(sub);
            // }
             if(options.isType){
                 content.appendChild(abox);
             }
            // if(options.isBox){
            //     box.appendChild(warpDiv);
            // }
            
            box.style.width = options.width?options.width+'px':'auto'; 
            box.style.height = options.height?options.height+'px':'auto';
            box.style.backgroundImage = 'none';
            if(options._content_){
                getData(options._content_);
            }
            //获取数据
            function getData(str){
                var _result=Object.prototype.toString.call(str);
                switch(_result){
                        case "[object Function]":
                                getObject(options._content_);
                                break;
                        case "[object String]":
                                //fuck!
                                 content.innerHTML = options._content_;
                                 xlt.box.pos();
                                break;
                }	
            }
            //获取字符串
            function doData(str){
                    content.innerHTML = str;
                     xlt.box.pos();
            }
            //获取对象数据
            function getObject(fn){
                if(typeof fn == "function"){
                        fn(doData);
                        
                }	
            }
            //遮罩判断
            this.mask();
            _height = options.height;_width = options.width;isPreload = options.isPre;
            //延迟关闭
            if(options.time){
                setTimeout(function(){xlt.box.hide()},1000*options.time);
            }
        },
        //移除弹出框
        hide:function(){
               document.body.removeChild(box);
               document.body.removeChild(mask);
               for(var i = 0;i<document.getElementsByTagName("select").length;i++){
                document.getElementsByTagName("select")[i].style.display = "";
            }
        },
        //大小
        resize:function(){
                xlt.box.pos();
                xlt.box.mask();
        },
        //遮罩
        mask:function(){
            if(isMask){
                mask.style.display = "none";
            }
                mask.style.height = xlt.page.total(1)+'px';
                mask.style.width='';mask.style.width = xlt.page.total(0)+'px';
        },
        //位置
        pos:function(){
                var minTop = (xlt.page.height()/2)-(box.offsetHeight/2);minTop = minTop<10?10:minTop;
                box.style.top=(minTop+xlt.page.top())+'px';
                box.style.left=(xlt.page.width()/2)-(box.offsetWidth/2)+'px';
        },
        callback : function(options,sureCall){
                var arg = arguments;
                if(options._content_){
                    xlt.box.open(options,options._content_);
                }
                else{
                    xlt.box.open(options,options._con_);
                    xlt.box.pos();
                }
             
                function delay(){
                // must fuck and fuck !
                if(options.isCallback){
                    box.appendChild(ck);
                    Ace('cnbSubmit').onclick = function(){
                            if(isFunction(sureCall)){
                                sureCall.apply(this,Array.prototype.slice.call(arg,2));
                                xlt.box.hide();
                            }
                    }
                    Ace('cnbCancel').onclick = function(){
                            if(isFunction(sureCall)){
                                xlt.box.hide()
                            }
                    }
                }
                if(options.isBox){
                    box.appendChild(warpDiv);
                    Ace('boxSubmit').onclick = function(){
                            if(isFunction(sureCall)){
                                var test = true;
                                test = sureCall.apply(this,Array.prototype.slice.call(arg,2));
                                
                                if (test != false) {
                                    xlt.box.hide()
                                }
                                
                        }
                    }
                    Ace('boxCancle').onclick = function(){
                            if(isFunction(sureCall)){
                                xlt.box.hide()
                            }
                    }
                }
                if(options.isSubmit){
                    box.appendChild(sub);
                    Ace('subSubmit').onclick = function(){
                            if(isFunction(sureCall)){
                                sureCall.apply(this,Array.prototype.slice.call(arg,2));
                                xlt.box.hide()
                            }
                    }
                }
                
            }
         delay();
        }
    }
}();
xlt.page=function(){
	return{
		top:function(){return document.documentElement.scrollTop||document.body.scrollTop},
		width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},
		height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},
		total:function(Boolean){
                    var b=document.body;
                    var e=document.documentElement;
                    return Boolean?Math.max(Math.max(b.scrollHeight,e.scrollHeight),Math.max(b.clientHeight,e.clientHeight)):
                    Math.max(Math.max(b.scrollWidth,e.scrollWidth),Math.max(b.clientWidth,e.clientWidth))
		}
	}
}();