//判断当前用户是否登录
function iflogin(suid,url) {
    if (suid == '') {
        loginPopup(url);
        return false;
    } else if (url != '') {
        if (url.substr(0,4) == 'form') {
            var formname = url.substr(4);
            document.getElementById(formname).submit();
        }else {
            window.location.href = url;
        }
        return true;
    } else {
        return true;
    }
}

function loginPopup(url) {
    if (url == 'self') {
        url = '';
    }
    xlt.box.open({
        title:'登录欣欣',
        width: 600,
        _content_:function(fn){
            var _html='';
            com.post({
                type:"get",
                url:"/homepage/showlogin",
                data:{
                    url:url
                },
                success:function(msg){
                    _html+=msg;
                    fn(_html);
                }
            })
        }
    })
}

function dologin_pop(data) {
    var url = jQuery('#url').val();
    if (data == 1) {
        if (url != '' && url) {
            if (url.substr(0,4) == 'form') {
                var formname = url.substr(5);
                document.getElementById(formname).submit();
            } else {
                window.location.href = url;
            }
        } else {
            window.location.href = window.location.href;
        }
    } else {
        if (data == -1 || data == -2) {
            var error = '用户名或密码错误，请重新输入';
        } else if (data == -3) {
            error = '您还不是同业交易网的会员';
        } else if (data == -4) {
            error = '该账号还未激活，请登录邮箱激活';
        } else if (data == -5) {
            error = '该邮箱还未激活，请登录邮箱激活';
        } else {
            window.location.href = 'http://www.cncn.net/reg/?step=2&uid='+data;
        } 
        jQuery('#errors').html(error);
        jQuery('#errors').show();
    }

}


//页面跳转
function gotopage1(url) {
    if (url.indexOf('/') == -1) {
        var urls = url.split('_');
        if (urls[1] == '3') {
            sure_do3(urls[0]);
        } else if (urls[1] == '4') {
            if (urls[2] == '')
                sure_do4(urls[0]); else
                sure_do4(urls[0],urls[2]);
        } else if(url) {
            sure_do(url);
        }
    } else {
        if(window.event) window.event.returnValue = false;
        window.location.href = url;
    }
}

$(function(){
    var uid = $('#uid').val();
    $("a.cncn_login").live('click',function() {
        if (uid) {
            return true;
        }

        if ($(this).attr("data") != undefined) {
            var href = $(this).attr("data");
        } else {
            if ( $(this).attr("href").substring(0,10) == 'javascript' ) {
                href = '';
            } else {
                href = $(this).attr("href");
            }
        }

        xlt.box.open({
            title:'登录欣欣帐号，享受活动优惠',
            width: 600,
            _content_:function(fn){
                var _html='';
                com.post({
                    type:"get",
                    url:"/login/showlogin",
                    data:{
                        url:href
                    },
                    success:function(msg){
                        _html+=msg;
                        fn(_html);
                    }
                })
            }
        })
        return false;
    })
    //顶部链接下拉
    var myCncn = $("#js_myCncn");
    var myMsg = $("#js_myMsg");
    var boxMsg = $("#box");
    $(function(){
        var indexPeo = $("#index_peo");
        if(indexPeo.find('a').eq(0).attr('class')!='visited_89'){
            indexPeo.hover(
                function(){
                    $(this).addClass("current");
                    $(this).find('a').eq(0).addClass('visited_89')
                },
                function(){
                    $(this).removeClass("current");
                    $(this).find('a').eq(0).removeClass('visited_89')
                }
                )
        }
        else{
            indexPeo.hover(
                function(){
                    $(this).addClass("current");
                    $(this).find('a').eq(0).addClass('visited_89')
                },
                function(){
                    $(this).removeClass("current");
                }
                )
        }
    })
    myCncn.hover(
        function(){
            $(this).addClass("current");
        },
        function(){
            $(this).removeClass("current");
        }
        )
    var twinkTime;
    myMsg.hover(
        function(){
            $(this).addClass("current");
            $('#notice_msg').parent().removeClass("noticing").addClass("notice");
            boxMsg.hide();
        },
        function(){
            $(this).removeClass("current");
            $('#notice_msg').parent().removeClass("notice").addClass("noticing");
            if ( $('#notice_msg').parent().attr('data') != 'yes'  && com.oldMsg != '' ) {
                boxMsg.show();
            }
        }
        )
})

/*
 *  tab切换
 *  @control 控制层id
 *  @show 显示层id
 *  @_class 控制层样式
 *  @调用:$.myPlugin.tab();
 */
$.myPlugin = {
    tab : function(control,show,_class){
        $(control + "> a").each(function(){
            $(this).mouseover(function(){
                var c = $(control + "> a").index($(this));
                $(this).addClass(_class).siblings().removeClass(_class);
                $(show + "> div").eq(c).show().siblings().hide();
            })
        })
    }
}


$(document).ready(function(){
    function dologin(suid) {
        if (suid == '') {
            loginPopup();
            return false;
        } else {
            return true;
        }
    }
})
//退出
function doexit() {
    xlt.box.callback({
        type     : "why",
        isType   : 1,
        title    :  "系统提示",
        _con_: "您确定要退出欣旅通？",
        width    : 400,
        isBox    : 1
    },gotopage1,"/login/doexit");
}

function auth_notice(content) {
    if (content == '抱歉，请先登录') {
        loginPopup('');
    } else {
        xlt.box.callback({
            title:"系统提示",
            type:"error",
            isType: 1,
            _con_:content,
            time: 0,
            width:"450"
        });
    }
}
