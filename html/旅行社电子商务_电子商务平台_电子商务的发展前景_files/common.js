var votetype, rlogin = 0, voteobj, votea = ['citydxq', 'citydqg', 'cityxq', 'cityqg', 'travelstj', 'travelstj2', 'travels', 'travels2', 'visa'];
var editor = new Array();
//添加编辑器
function AddEditor(id, tool, RanNum) {
    //$.include([webpath + 'sys/webedit/ueditor.config.js', webpath + 'sys/webedit/ueditor.all.js']);
    var config = {
        imageUrl: webpath + "sys/ajax/editorImageUp.ashx?r=" + RanNum,     //图片上传地址
        imagePath: upfolder,                                   //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
        scrawlUrl: webpath + "sys/ajax/editorScrawlImgUp.ashx?r=" + RanNum, //涂鸦上传地址
        scrawlPath: upfolder,                                          //图片修正地址，同imagePath
        catcherUrl: webpath + "sys/ajax/editorGetRemoteImage.ashx?r=" + RanNum, //处理远程图片抓取的地址
        catcherPath: upfolder,                         //图片修正地址，同imagePath
        snapscreenHost: 'ueditor.baidu.com',                            //屏幕截图的server端文件所在的网站地址或者ip，请不要加http://
        snapscreenServerUrl: webpath + "sys/ajax/editorImageUp.ashx?r=" + RanNum, //屏幕截图的server端保存程序，UEditor的范例代码为“URL +"server/upload/net/snapImgUp.ashx"”
        snapscreenPath: upfolder,

        wordImageUrl: webpath + "sys/ajax/editorImageUp.ashx?r=" + RanNum, //word转存提交地址
        wordImagePath: upfolder, //
        getMovieUrl: webpath + "sys/ajax/editorGetMovie.ashx",    //视频数据获取地址
        initialFrameWidth: '100%',
        focus: false,
        toolbars: [
                ['fullscreen', 'source', '|', 'undo', 'redo', '|',
                    'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
                    'rowspacingtop', 'rowspacingbottom', 'lineheight', '|',
                    'customstyle', 'paragraph', 'fontfamily', 'fontsize', '|',
                    'directionalityltr', 'directionalityrtl', 'indent', '|',
                    'justifyleft', 'justifycenter', 'justifyright', 'justifyjustify', '|', 'touppercase', 'tolowercase', '|',
                    'link', 'unlink', 'anchor', '|', 'imagenone', 'imageleft', 'imageright', 'imagecenter', '|',
                    'insertimage', 'emotion', 'scrawl', 'insertvideo', 'music', 'attachment', 'insertframe', 'insertcode', 'webapp', 'pagebreak', 'template', 'background', '|',
                    'horizontal', 'date', 'time', 'spechars', 'snapscreen', 'wordimage', '|',
                    'inserttable', 'deletetable', 'insertparagraphbeforetable', 'insertrow', 'deleterow', 'insertcol', 'deletecol', 'mergecells', 'mergeright', 'mergedown', 'splittocells', 'splittorows', 'splittocols', '|',
                    'print', 'preview', 'searchreplace', 'help']
            ]
    };
    if (!tool) tool = 'full';
    if (tool == 'simple') {
        config.toolbars[0] = [ 'source', '|', 'undo', 'redo', '|',
            'bold', 'italic', 'underline', 'fontborder', 'strikethrough', 'superscript', 'subscript', 'removeformat', 'formatmatch', 'autotypeset', 'blockquote', 'pasteplain', '|', 'forecolor', 'backcolor', 'insertorderedlist', 'insertunorderedlist', 'selectall', 'cleardoc', '|',
            'rowspacingtop', 'rowspacingbottom', 'lineheight'];
    } else if (tool != 'full') {
        config.toolbars[0] = $.map(config.toolbars[0], function (n) {
            return n != 'pagebreak' ? n : null;
        });
    }
    editor[id] = UE.getEditor(id, config);
}

$(document).ready(function () {

    $(".downNav").each(function () {
        if ($(this).find("dd").length > 0) {
            $(this).prev().addClass('downcur');
            $(this).prev().find("i").addClass('downicon');
        }
    });

   

    $('.navList li').hover( //二级导航
		function () {
		    var top = $(this).position().top + $(this).height();
		    var left = $(this).position().left;
		    $(this).find('.downNav').show().css({ "top": top, "left": "0" });
		    $('.navBg').css('height', '44px').show();
		    $(this).find('.downNav').prev().addClass('current');

		    if ($(this).find('.downNav').find("dd").length > 0) {
		        $(this).find('.downNav').prev().find("i").removeClass('downicon');
		        $(this).find('.downNav').prev().find("i").addClass('upicon');
		    }

		    if ($(this).prev().find('a').hasClass('cur')) {
		        $(this).prev().find('a').addClass('curs');
		    }
		    if ($(this).next().find('a').hasClass('cur')) {
		        $(this).find('a').addClass('curs');
		    }

		    if ($("#down" + $(this).find('a').attr("id")).find("dd").length == 0) {
		        $("#down" + $(this).find('a').attr("id")).hide();
		        $(".navBg").hide();
		    }
		}, function () {
		    $(this).find('.downNav').prev().removeClass('current');
		    $(this).find('.downNav').hide();
		    $('.navBg').css('height', '0');
		    $(this).prev().find('a').removeClass('curs');
		    $(this).find('a').removeClass('curs')
		    if ($(this).find('.downNav').find("dd").length > 0) {
		        $(this).find('.downNav').prev().find("i").addClass('downicon');
		        $(this).find('.downNav').prev().find("i").removeClass('upicon');
		    }
		}
	);

    $(".userNavTit1").click(function () { //会员中心左侧
        if ($(this).find('div').hasClass("mores")) {
            $(".curUNav").addClass("mores");
            $(".more").removeClass("curUNav");
            $(this).find('div').removeClass('mores').addClass("curUNav");
        } else {
            if ($(this).find('div').hasClass("curUNav")) {
                return;
            }

            $(this).find('div').addClass('mores');
        }
        $('.userNavText').hide();
        $(this).next('.userNavText').slideToggle("slow");
    });
    $('.headSearch .sInput').focus(function () {//头部搜索框光标
        $('.headSearch .defaultKey').hide();
    }).blur(function () {
        if (!$.trim($(this).val())) {
            $('.headSearch .defaultKey').show();
            $(this).val('');
        }
    });
    myCity();
    menuToggle();
    qrCode();
    goToTop();
    menuDropDown();
    onlineService();
    mySearch();


    $('a').bind('focus', function () { if (this.blur) { this.blur() }; }); // 去除a标签点击时的外部虚线

    $('#loginout').click(function () {
        $.get(webpath + 'sys/ajax/login.ashx', { act: "out" }, function () {
            checklogin(); getvote();
        });
    });
    $('#login').click(function () {
        rlogin = 2;
        ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx');
    });
    checklogin();
    voteobj = $('[id^="citydxq_"],[id^="citydqg_"],[id^="cityxq_"],[id^="cityqg_"],[id^="travelstj_"],[id^="travels_"],[id^="travelstj2_"],[id^="travels2_"],[id^="visa_"]');
    if (voteobj.length > 0) {
        voteobj.click(function () {
            rlogin = 1;
            var id = $(this).attr('id').split('_');
            if ($(this).attr('status') == 1) {
                if (id[0] == 'visa') {
                    alert('您已经收藏过!');
                }
                return;
            }
            if ((id[0] != 'travelstj' && id[0] != 'travelstj2') && GetCookie('username') == '') {
                votetype = $(this);
                rlogin = 0;
                ShowWindow('', 'alertlogin', webpath + 'alertlogin.aspx'); return;
            }
            favorites(
				id[0],
				id[1],
				function () {
				    if (arguments[0] == 'true') {
				        if (id[0] == "citydxq" || id[0] == "citydqg") {
				            $('#' + id[0] + '_' + id[1]).find("a").removeClass('cur').addClass('cur');
				        } else {
				            $('#' + id[0] + '_' + id[1]).removeClass('voteyes').addClass('voteno');
				        }
				        $('#' + id[0] + 'text_' + id[1]).text((parseInt($('#' + id[0] + 'text_' + id[1]).text()) + 1));
				        if (id[0] == 'visa') {
				            alert('恭喜您收藏成功!');
				        }
				    }
				});
        });
        getvote();
    }

    $("#collection,#btnCollection").click(function () {

    });
});


//头部下拉菜单
function menuDropDown() {

		$('#header .drop').hover(function () {
		    $(this).find('.drop_box').show();
		},function () {
		    $(this).find('.drop_box').hide();
		});
		$('#guides-city-change-new').click(function(){
			if($('#guides-city-change-new').hasClass('unfold')){
				$("#guides-city-change-new").removeClass().addClass("change");
			}else{
				$("#guides-city-change-new").removeClass().addClass("unfold");
			}
			return !$('#guides-city-list').toggle();
		});
		$("div:not(#guides-city-change-new)").click(function(){
			$('#guides-city-list').css('display', 'none');
			$("#guides-city-change-new").removeClass().addClass("change");
		});

		$('.main_ad_close').click(function() { //top_ad广告
			$('.main_ad').slideUp();
		});
		$(window).scroll(function(){ 
			headInfoScroll();
		});
}
/*var topAdVar=setInterval(function(){topAdTimer()},5000);//top_ad广告定时5秒关闭
function topAdTimer(){
	$(".top_ad").slideUp();
	clearInterval(topAdVar);
}*/
function headInfoScroll(){ 
	var scrollTop = $(window).scrollTop();
	if (scrollTop > $('#headInfoFixed').offset().top) { //菜单跟随选中
		$('.headInfo').addClass('fixed');
	} else {
		$('.headInfo').removeClass('fixed');
	}
	$('div#fixedService').stop().animate({ top: scrollTop + 236 });//QQ客服刷新跟随
}
//头部城市切换
function myCity() {
    $('#cityChange').hover(
		function () {
		    $(this).find('.cityList').show();
		    $(this).addClass('hover');
		},
		function () {
		    $(this).find('.cityList').hide();
		    $(this).removeClass('hover');
		}
	);
}

//左侧菜单
function menuToggle() {
    var arrayli = $('#allClass li');
    arrayli.each(function (i) {
        $(this).hover(
			function () { $(this).addClass('this'); },
			function () { $(this).removeClass('this'); }
		);
        $(this).find('em').click(function () { arrayli.removeClass('this'); });
    });
}

//头部搜索切换
function mySearch() {
    $('#optChange').hover(
		function () {
		    $(this).find('dl').show();
		    $(this).addClass('hover');
		},function () {
		    $(this).find('dl').hide();
		    $(this).removeClass('hover');
		}
	);

    $('#optChange dd').hover(
		function () { $(this).addClass('cur'); },function () { $(this).removeClass('cur'); }
	).click(
		function () {
		    $('.optionCur').html($(this).attr('text'));
		    $('#defaultKey').text($(this).attr('defaultkey'));
		    $('#optChange').removeClass('hover').find('dl').hide();
		    $('#searchform').attr('action', $(this).attr('url'));
		    if (!$.trim($('#s_input').val())) {
		        $('#defaultKey').show();
		        $('#s_input').val('');
		    }
		}
	);
}

function qrCode() { //微信二维码
    webconfig('qrcode');
    var html = '<div id="qrCode" class="qrCode clearfix"><a class="kefu_open" href="javascript:;" title="打开QQ客服列表"></a><a class="weixin" href="javascript:;" rel="nofollow">&nbsp;<div class="item"><img src="' + webpath + webconfig('qrcode') + '" width="210" height="210"></div></a></div>';
    $(html).appendTo('body');
    $('#qrCode a.kefu_open').click(function() {
    	$('#fixedService').show();
    	var scrollTop = $(window).scrollTop();
        $('div#fixedService').stop().animate({ top: scrollTop + 236 });//QQ客服，点击打开
    });

    $('#qrCode a.weixin').hover(
		function () { $(this).find('.item').show(); },
		function () { $(this).find('.item').hide(); }
	);
}

function goToTop() { //返回顶部
    var html = '<div id="backTop" class="backTop clearfix"><a title="返回顶部" href="javascript:;" rel="nofollow">返回顶部</a></div>';
    $(html).appendTo('body');
    $('#backTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow'); //慢慢回到页面顶部
        return false;
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() < 300) {//当window的垂直滚动条距顶部距离小于300时
            $('#backTop').fadeOut('slow'); //goToTop按钮淡出
        } else {
            $('#backTop').fadeIn('slow'); //反之按钮淡入
        }
    });
}

/*在线客服开始*/
function onlineService() {
    if (webconfig('onlineswitch') == 0) return;
    var onlineqqs = webconfig('onlineqq');
    var qq = onlineqqs.split('|');
    var qqone;
    var html = '<div id="fixedService" class="fixedService clearfix" style="z-index:999;">';
    html += '	<div class="outer">';
    html += '		<div class="box">';
    html += '			<div class="hide"><a href="javascript:;" title="关闭在线客服">&nbsp;</a>QQ在线客服</div>';
    html += '			<dl class="clearfix">';
    if (qq.length > 0) {
        for (var i = 0; i < qq.length; i++) {
            qqone = qq[i].split(',');
            html += '				<dd><span>' + qqone[0] + '：</span><a rel="nofollow" target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=' + qqone[1] + '&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:' + qqone[1] + ':41" alt="在线客服" title="' + qqone[0] + '"/></a></dd>';
        }
    }
    //html += '				<dd><a href="' + webpath + 'feedback.aspx" class="tool">意见反馈</a></dd>';
    html += '			</dl>';
    html += '			<div class="tel"><span>服务时间 9:00-17:30</span><br><span>非服务时间请直接留言</span><br><span>' + webconfig('sitetel') + '</span></div>';
    html += '		</div>';
    html += '	</div>';
    html += '</div>';
    $(html).appendTo('body');

    $(window).scroll(function () { //在线客服跟随滚动
        var scrollTop = $(window).scrollTop();
        $('div#fixedService').stop().animate({ top: scrollTop + 236 });
    });

    $('.fixedService .box .hide a').click(function () { //在线客服左侧隐藏
        $('#fixedService').hide();
    });
}
/*在线客服结束*/

/*弹出登陆回调*/
function AlertLoginReturn() {
    checklogin();
    HideWindow();
    if (rlogin == 0) {
        votetype.click();
    } else if (rlogin == 1) {
        getvote();
    }
}
/*检测登陆*/
function checklogin() {
    if (GetCookie('username') == '') {
        $('#logined').hide();
        $('#unlogin').show();
    } else {
        $('#unlogin').hide();
        $('#logined_name').text(GetCookie('realname') == '' ? GetCookie('username') : GetCookie('realname'));
        $('#logined').show();
        $.ajax({
            type: "GET",
            url: webpath + 'sys/Ajax/GetUserInfoCount.ashx',
            cache: false,
            dataType: "json",
            success: function (json) {
                if (json.CountSMS > 0) {
                    if ($(".sitemsg").length > 0) {
                        $('.sitemsg').html('站内信:<a href="' + json.url + '" >未读(' + json.CountSMS + ')</a>');
                    } else {
                        $('#logined').append('<span class="sitemsg">站内信:<a href="' + json.url + '" >未读(' + json.CountSMS + ')</a></span>');
                    }
                }
            }
        });
    }
}
//投票与收藏
function getvote() {
    if (voteobj.length == 0) return;
    var url = webpath + 'sys/ajax/getvote.ashx?t=', adid = '', f, f1 = '';
    for (var i = 0; i < votea.length; i++) {
        f = voteobj.filter('[id^="' + votea[i] + '_"]');
        if (f.length != 0) {
            url += votea[i] + ',';
            f1 += '&' + votea[i] + 'id=';
            f.each(function () {
                f1 += $(this).attr('id').replace(votea[i] + '_', '') + ',';
            });
            f1 = f1.substring(0, f1.length - 1);
        }
    }
    url = url.substring(0, url.length - 1) + f1 + '&callback=?';
    $.getJSON(url,
		 function (json) {
		     for (var i = 0; i < json.length; i++) {
		         for (var j = 0; j < json[i].item.length; j++) {
		             var t = json[i].item[j];
		             //$('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		             $('#' + json[i].type + '_' + t.adid).attr('status', t.status);
		             if (t.status == 1) {
		                 if (json[i].type == "citydxq" || json[i].type == "citydqg") {
		                     $('#' + json[i].type + '_' + t.adid).find('a').removeClass('cur').addClass('cur');
		                 } else {
		                     $('#' + json[i].type + '_' + t.adid).removeClass('voteyes').addClass('voteno');
		                     if ($('#' + json[i].type + 'text_' + t.adid).length > 0) {
		                         $('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		                     }
		                 }
		             } else {
		                 if (json[i].type == "citydxq" || json[i].type == "citydqg") {
		                     $('#' + json[i].type + '_' + t.adid).find('a').removeClass('cur');

		                     
		                 } else {
		                     $('#' + json[i].type + '_' + t.adid).removeClass('voteno').addClass('voteyes');

		                     if ($('#' + json[i].type + 'text_' + t.adid).length > 0) {
		                         $('#' + json[i].type + 'text_' + t.adid).text(t.votes);
		                     }
		                 }
		             }
		         }
		     }
		     $('[id^="cityxq_"]').each(function () {
		         var adid = $(this).attr('id').split('_')[1];
		         if (parseInt($('#cityxqtext_' + adid).text()) + parseInt($('#cityxqtext_' + adid).text()) < 10) {
		             $('#cityvotelevel_' + adid).removeClass().addClass('s3');
		         }
		     });
		 }
	);
};