jsLoader(ARTICLE_JSS.jq,function(){
        var coverLayer={divObj:null,_coverTime:null,_coverRe:function(){if(document.body.offsetHeight<document.documentElement.clientHeight){this.divObj.style.width=document.body.clientWidth+"px";this.divObj.style.height=document.documentElement.clientHeight+"px";}else{this.divObj.style.width=document.body.clientWidth+"px";this.divObj.style.height=document.body.clientHeight+"px";}},isIE:navigator.appVersion.indexOf("MSIE")!=-1?true:false,on:function(noSave){if(this.divObj==null){this.divObj=document.createElement("div");this.divObj.style.zIndex=10000;this.divObj.style.left='0px';;this.divObj.style.top='0px';;this.divObj.style.position="absolute";this.divObj.style.backgroundColor="#000";if(this.isIE){var tempFrame=document.createElement("iframe");tempFrame.style.filter="Alpha(Opacity=0)";tempFrame.frameBorder=0;tempFrame.scrolling="no";tempFrame.style.width="100%";tempFrame.style.height="100%";this.divObj.appendChild(tempFrame);this.divObj.style.filter="Alpha(Opacity=70)";}else{this.divObj.style.opacity=0.7};document.body.appendChild(this.divObj);};if(document.body.offsetHeight<document.documentElement.clientHeight){this.divObj.style.width=document.body.clientWidth+"px";this.divObj.style.height=document.documentElement.clientHeight+"px";}else{this.divObj.style.width=document.body.clientWidth+"px";this.divObj.style.height=document.body.clientHeight+"px";};this.divObj.style.display="block";clearInterval(this._coverTime);this._coverTime=setInterval("coverLayer._coverRe()",50);},off:function(noSave){if(this.divObj){this.divObj.style.display="none"};clearInterval(this._coverTime);}};  
        (function(w,doc){w.jsonp=function(obj){var cbName=obj.jsonp||'callback';var cbFunc=obj.jsonpcallback||ranTime('jsonpcallback');var params=cbName+'='+cbFunc;var isEncode=obj.encode===undefined?true:obj.encode;var timer;window.clearTimeout(timer);timer=window.setTimeout(function(){if(isFunction(obj.ontimeout)){obj.ontimeout();}},5000);window[cbFunc]=function(data){window.clearTimeout(timer);if(isFunction(obj.onsuccess)){obj.onsuccess(data);}};var tag=obj.url.indexOf('?')>0?'&':'?';if(obj.data){var dataURL=isEncode?encodeFormData(obj.data):changeToURL(obj.data);getScript(obj.url+tag+dataURL+'&'+params,obj.charset);}else{getScript(obj.url+tag+params,obj.charset);}};var READY_STATE_RE=/^(?:loaded|complete|undefined)/;var head=doc.getElementsByTagName('head')[0]||doc.documentElement;var baseElement=head.getElementsByTagName('base')[0];var scriptOnLoad=function(node,callback){node.onload=node.onreadystatechange=function(){if(READY_STATE_RE.test(node.readyState)){node.onload=node.onreadystatechange=null;head.removeChild(node);node=null;}};};function getScript(url,charset){var node=doc.createElement('script');node.src=url;if(charset){node.charset=charset;};node.async=true;scriptOnLoad(node);baseElement?head.insertBefore(node,baseElement):head.appendChild(node);return node;};function encodeFormData(data){var pairs=[],regexp=/%20/g,value;for(var key in data){value=data[key].toString();pairs.push(w.encodeURIComponent(key).replace(regexp,'+')+'='+w.encodeURIComponent(value).replace(regexp,'+'));};return pairs.join('&');};function changeToURL(data){var pairs=[];for(var key in data){pairs.push(key+'='+data[key]);};return pairs.join('&');};function getType(data){var t=Object.prototype.toString.call(data).slice(8,-1).toLowerCase();return(t==='number'&&isNaN(t))?'NaN':t;};function isFunction(obj){return getType(obj)==='function';};function isNumber(obj){return getType(obj)==='number';};function ranTime(str){var ran=(new Date()).getTime()+Math.floor(Math.random()*100000);return str?str+''+ran:ran;};})(window,document);
        (function($){var a=$("body");var c=navigator.appVersion.indexOf("MSIE 6")!=-1?true:false;a.delegate(".sd_share","click",function(i){var g=window.location.href;var f=$(this).attr("s_img");var j=$(this).attr("s_name");j+="";var h="1618051664";var d="http://service.t.sina.com.cn/share/share.php?url="+encodeURIComponent(g)+"&title="+encodeURIComponent(j)+"&ralateUid="+h;if(typeof f!="undefined"){d+="&pic="+encodeURIComponent(f)};window.open(d,"_blank","width=615,height=505")});a.delegate(".sd_toTop","click",function(d){try{document.documentElement.scrollTop=0}catch(e){};$("html, body").animate({scrollTop:0},500)});window.onscroll=window.onload=function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;var d=document.documentElement.clientHeight;var $o=$(".sc_success_alert");if(c){$o.css("top",e+d/2-$o.height()/4);}}})(jQuery);
        //alert($('#sc_txt,#sc_txt2').length);

        var login_flag = false; //\u6B21\u72B6\u6001\uFF0C\u7528\u6765\u8FDE\u8D2F\u767B\u5F55\u548C\u6536\u85CF\u64CD\u4F5C\u4F7F\u7528
        var sc_click_btn = null;

        //\u6B63\u5E38\u767B\u9646
        $('#J_Login_Btn_A').click(function(){
          //set_login_tit(true);
        })

        //\u70B9\u51FB\u6536\u85CF\u64CD\u4F5C
        $('#sc_txt,#sc_txt2').click(function(){

          sc_click_btn = $(this).attr('id');
          var loginLayer = window.SINA_OUTLOGIN_LAYER;
          var cookie = loginLayer && loginLayer.getSinaCookie();
          if(cookie){             //1.1 \u767B\u5F55
            var str = $(this).html(); 
            if(str.indexOf('\u5DF2\u6536\u85CF')!=-1){ //1.1.1 \u5DF2\u6536\u85CF
              //fn_sc_ch_del();
              //\u63D0\u793A\u5E03\u7801
              SUDA._S_uaTrack('content_collect','title_myfav_click');
            }else{              //1.1.2 \u672A\u6536\u85CF
              //\u5DF2\u767B\u5F55\u5E03\u7801
              if(sc_click_btn == 'sc_txt'){
                SUDA._S_uaTrack('content_collect','click_islogin');
                SUDA._S_uaTrack('content_collect','click_total');
              }else{
                SUDA._S_uaTrack('content_collect','below_click_islogin');
                SUDA._S_uaTrack('content_collect','below_click_total');
              }

              //fn_sc_ch_check(2);
              fn_sc_ch_add();

            }
          }else{                //1.2 \u672A\u767B\u5F55
            //\u603B\u70B9\u51FB\u5E03\u7801
            if(this.id == 'sc_txt'){
              SUDA._S_uaTrack('content_collect','click_total');
            }else{
              SUDA._S_uaTrack('content_collect','below_click_total');
            }

            login_flag = true;  //\u662F\u672A\u767B\u5F55\u65F6\u70B9\u51FB\u7684\u6536\u85CF
            if (loginLayer) {
              loginLayer.STK.core.dom.position
              loginLayer.set("plugin",{
                position:"center"
              });
              loginLayer.show();
              //set_login_tit(false);
              setTimeout(function(){
                loginLayer.set('styles', {
                  'marginTop' : '30px',
                  'marginLeft' : '7px',
                  'zIndex':'10001'
                }).set('plugin', {
                  position : 'top,right',                
                  relatedNode : document.getElementById('J_Login_Btn_A')  //\u8BBE\u7F6E\u5B9A\u4F4D\u5143\u7D20
                });
              }, 0);
            }
          }
        });

        // var  sc_i = 2;
        // if(window.SINA_OUTLOGIN_LAYER.getSinaCookie()){
          // sc_i = 0;
        // }

        //\u76D1\u63A7\u767B\u5F55\u72B6\u6001
        if(window.SINA_OUTLOGIN_LAYER){
          window.SINA_OUTLOGIN_LAYER.register('login_success', function(){
            if(login_flag){
              fn_sc_ch_check(3);  //\u672A\u767B\u5F55\u65F6\u70B9\u51FB\u6536\u85CF \u5219\u68C0\u6D4B\u540E
              login_flag = false;
            }else{
              fn_sc_ch_check(); //\u6B63\u5E38\u767B\u5F55\u6210\u529F \u68C0\u6D4B
            }
            fn_sc_ch_bindLongout();
            set_login_toolTip(true);
          });
        }

        function fn_sc_ch_bindLongout(){
          var sabs = SAB;
          var cusEvt = sabs.evt.custEvent;
          cusEvt.add(sabs,'ce_logout',sc_logout);
          function sc_logout(){
            //alert(sc_i);
            //if(sc_i > 1){
              fn_sc_ch_status(false);
              //console.log('logout');
              set_login_toolTip(false);
              cusEvt.remove($,'ce_logout',sc_logout);
            //}else{
            //  sc_i++
            //}
          }
        }

        //\u5904\u7406\u6536\u85CF\u72B6\u6001
        function fn_sc_ch_status(flag){
          var os = $('#sc_txt,#sc_txt2');
          if(flag){
            os.html('\u5DF2\u6536\u85CF');
            os.attr('href','http://my.sina.com.cn/#location=fav');
            os.attr('target','_blank');
            //os.addClass('sc_txt_bc');
          }else{
            $('#sc_txt').html('\u6536\u85CF\u672C\u6587');
            $('#sc_txt2').html('\u6536\u85CF');
            //os.removeClass('sc_txt_bc');
            os.attr('href','javascript:;');
            os.attr('target','_self');
          }
        }

        //\u68C0\u67E5\u662F\u5426\u6536\u85CF
        function fn_sc_ch_check(f){
          var action = 'http://fav.mix.sina.com.cn/api/fav/check?callback=';
          if(f == '2'){
            action += 'scCheckCallback2';
          }else if(f == '3'){
            action += 'scCheckCallback3';
          }else{
            action += 'scCheckCallback';
          }
          var scDocid = $('#sc_txt').attr('data-docid');
          fn_sc_ch_createForm(action,scDocid);
        }

        //\u6DFB\u52A0\u6536\u85CF
        function fn_sc_ch_add(){
          var action = 'http://fav.mix.sina.com.cn/api/fav/add?callback=scAddCallback';
          var scDocid = $('#sc_txt').attr('data-docid');
          fn_sc_ch_createForm(action,scDocid);
        }

        //\u53D6\u5F97\u6570\u636E
        function fn_sc_ch_query(fn){
          jsonp({
            url:'http://fav.mix.sina.com.cn/api/fav/get_user_list', 
            onsuccess: function(ret){
              fn(ret);
            }
          });
        }

        //window.sc_ch_total = 0;

        //\u6DFB\u52A0\u6536\u85CF \u56DE\u8C03
        window.scAddCallback = function(ret){
          //console.log(ret);
          var flag = false;
          var rs = ret.result;
          if(rs.status.code=='0'){
            $('#sc_ch_form_id').val(ret.result.data.id);
            //cookie
            var is_first = getCookie('sina_sc_is_first');
            if(!is_first){
              setCookie('sina_sc_is_first','1');
              fn_sc_ch_tit();
            }else{
              sc_success_tit(sc_click_btn);
            }
            flag = true;
          }else{
            if(rs.status.msg=='be saved'){
              $('#sc_ch_form_id').val(ret.result.data.id);
              sc_success_tit(sc_click_btn);
              flag = true;
            }else{
              alert('\u6536\u85CF\u5931\u8D25\uFF01');
            }
          }
          fn_sc_ch_status(flag);
        }

        //\u68C0\u6D4B\u662F\u5426\u5DF2\u6536\u85CF \u56DE\u8C03
        window.scCheckCallback = function(ret){
          //console.log(ret);
          var flag = false;
          if(ret.result.status.code=='12'){
            $('#sc_ch_form_id').val(ret.result.data.id);
            flag = true;
          }
          fn_sc_ch_status(flag);
          set_login_toolTip(true);
        }

        //\u68C0\u6D4B\u540E\u6DFB\u52A0\u6536\u85CF \u56DE\u8C03
        window.scCheckCallback2 = function(ret){
          //console.log(ret);
          var flag = false;
          var code = ret.result.status.code;
          if(code=='12'){
            flag = true;
            $('#sc_ch_form_id').val(ret.result.data.id);
            sc_success_tit(sc_click_btn);
          }else if(code=='13'){
            fn_sc_ch_add(); 
          }else{
            alert('\u6536\u85CF\u5931\u8D25\uFF01');
          }
          fn_sc_ch_status(flag);
        }

        //\u672A\u767B\u5F55\u70B9\u51FB\u6536\u85CF \u767B\u5F55\u6210\u529F\u540E \u56DE\u8C03
        window.scCheckCallback3 = function(ret){
          //console.log(ret);
          var flag = false;
          var code = ret.result.status.code;
          if(code=='12'){
            flag = true;
            $('#sc_ch_form_id').val(ret.result.data.id);
            sc_success_tit(sc_click_btn);
          }else if(code=='13'){
            fn_sc_ch_add(); 
          }else{
            alert('\u6536\u85CF\u5931\u8D25\uFF01');
          }
          fn_sc_ch_status(flag);
        }

        //\u64CD\u4F5C\u52A8\u6001FORM\u4F20\u9012POST\u6570\u636E
        function fn_sc_ch_createForm(action,scDocid){
          if(action && scDocid){
            $('#sc_ch_form').attr('action',action);
            $('#scdocid').val(scDocid);
            //console.log(action);
            $('#sc_ch_form').submit();
            //console.log($('#scdocid').val());
          }
        }

        //\u7B2C\u4E00\u6B21\u6536\u85CF\u63D0\u793A\u6253\u5F00
        function fn_sc_ch_tit(){
          coverLayer.on();
          $('.sc_success_alert').css('display','block');
        }

        //\u7B2C\u4E00\u6B21\u6536\u85CF\u906E\u7F69\u63D0\u793A\u5173\u95ED
        $('.sc_success_alert .close,.sc_success_alert .sure').click(function(){
          $('.sc_success_alert').css('display','none');
          coverLayer.off();
        });

        //\u8BBE\u7F6Ecookie
        function getCookie(key) {
          var arrTemp = document.cookie.split('; ');
          for (var i=0; i<arrTemp.length; i++) {
            var arr = arrTemp[i].split('=');
            if (arr[0] == encodeURI(key)) {
              return decodeURI(arr[1]);
            }
          }
        }

        function setCookie(key, value, day) {
          var oDate = new Date();
          var day = day || 3650;
          oDate.setDate(oDate.getDate() + day);
          document.cookie = encodeURI(key) + '=' + encodeURI(value) + ';expires=' + oDate.toUTCString() + ';path=/;domain=sina.com.cn';
        }

        function removeCookie(name){
          setCookie(name, '1', -1);
        }

        //\u6536\u85CF\u6210\u529F\u63D0\u793A
        function sc_success_tit(id){
          //\u63D0\u793A\u5E03\u7801
          SUDA._S_uaTrack('content_collect','title_myfav_show');

          var top = 27;
          var left = -46;

          left = (id == 'sc_txt2' ? (left-10) : left);
          top = (id == 'sc_txt2' ? (top-5) : top);
          var offs = $('#'+id).offset(); 
          var otit = $('.sc_success_tit');
          var otitd = otit[0];
          otit.css({
            'top': ((offs && offs.top) || 0) + top + 'px',
            'left': ((offs && offs.left) || 0) + left + 'px',
            'display':'block'
          });
          clearTimeout(otitd.timmer);
          otitd.timmer = setTimeout(function(){
            otit.css('display','none');
          },10000);
        }

        //\u53D6\u6D88\u6536\u85CF \u5220\u9664\u6536\u85CF\u64CD\u4F5C
        function fn_sc_ch_del(){
          var action = 'http://fav.mix.sina.com.cn/api/fav/delete?callback=scDelCallback';
          fn_sc_ch_createForm(action,'0');
        }

        //\u5220\u9664\u6536\u85CF\u64CD\u4F5C \u56DE\u8C03
        window.scDelCallback = function(ret){
          if(ret.result.status.code == '0'){
            fn_sc_ch_status(false);
          }else{
            alert('\u53D6\u6D88\u6536\u85CF\u5931\u8D25\uFF01');
          }
        }

        //\u767B\u9646\u7A97\u5185\u6587\u5B57\u63D0\u793A
        function set_login_tit(f){
          if(f){//\u6B63\u5E38\u767B\u9646
            $('.layerbox_left .titletips').html('\u65B0\u6D6A\u5FAE\u535A\u3001\u535A\u5BA2\u3001\u90AE\u7BB1\u5E10\u53F7\uFF0C\u8BF7\u76F4\u63A5\u767B\u5F55\uFF01')
            $('.layerbox_left .titletips').css('color','#434242');
          }else{
            $('.layerbox_left .titletips').html('\u767B\u9646\u6210\u529F\u540E\u65B9\u53EF\u6536\u85CF\uFF01')
            $('.layerbox_left .titletips').css('color','#e66100');
          }

        }

        //\u767B\u5F55\u6210\u529F\u540EtoolTip\u5904\u7406
        function set_login_toolTip(f){
          var os = $('#sc_txt,#sc_txt2');
          f ? os.attr('title','') : os.attr('title','\u767B\u5F55\u540E\u6536\u85CF \u7A0D\u540E\u9605\u8BFB');
        }

      });