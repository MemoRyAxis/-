// JavaScript Document
$.extend(Array.prototype,{
    each:function(fn){
        for(var i=0,l=this.length;i<l;i++)fn.call(this[i],i)
            },
    has:function(e){
        for(var i in this){
            if(this[i]===e)return true;
        }
        return false
        }
});
$.extend(String.prototype,{
    ltrim:function(){
        return this.replace(/^\s+/,'')
        },
    rtrim:function(){
        return this.replace(/\s+$/,'')
        },
    trim:function(){
        return this.ltrim().rtrim()
        }
    });
function new_scode(){$('#codeimg').attr('src',"/scode/index/"+Math.random());}
function G(o){
    return typeof o==='string'?document.getElementById(o):o
    };
var loads=[];
window.onload=function(){
    loads.each(function(){
        this()
        });
}//加载完成时执行
var com=function(){
    var t=this;
    t.tipType={
        1:'ok',
        2:'warming',
        3:'error'
    };
    t.msgBoxTimer=null;
    t.oldMsg='';
    t.isIE=document.all?true:false;
    t.isIE6=t.isIE && ([/MSIE (\d)\.0/i.exec(navigator.userAgent)][0][1]==6);
};
var twinkTime;
com.prototype={
    //初始化基本事件
    init:function(){
        var t=this;
        $('#overlay').click(function(){
            t.hide()
            })
        document.onkeydown=function(e){
            e=e||window.event;
            var keyCode=e.keyCode||e.which;
            if(keyCode==27){
                t.hide();
            }
        }
    },
    //ajax带转码
    post:function(o){
        var t=this;
        (o.type.toLowerCase()!='get')&&(o.data['ajax']='1');
        var _func=o.success;
        o.success=function(x){
            _func(x);
        };

        $.ajax(o)
        },
    //加载js
    loadJs:function(src,callback){
        var z=$('script');
        for(var i=z.length-1;i>-1;i--){
            if(z[i].src==src){
                typeof callback==='function' && callback();
                return;
            }
        }
    var e=document.createElement('script');
    e.src=src;
    e.type='text/javascript';
    if(typeof callback==='function'){
        e.onload=e.onreadystatechange=function(){
            if(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')callback()
                }
            }
document.getElementsByTagName('head')[0].appendChild(e);
},
gotopage:function(){
    var cpg=parseInt(G('cpage').value),pct=parseInt(G('pcount').innerHTML);
    return cpg>pct?pct:cpg
    },
	stopBubble:function(e){if(com.isIE){e.cancelBubble=true;}else{e.stopPropagation()}}
};

var com=new com;
loads.push(function(){
    com.init();
    //com.loadJs('/css/js/com_init.js?a='+Math.random());
});