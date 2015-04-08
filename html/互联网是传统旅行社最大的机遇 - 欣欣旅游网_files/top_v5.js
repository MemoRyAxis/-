
$.CNCN = {
	hover_tag : function(control, show, class1, i) {
		$(control + "> a").hover(function() {
			var c = $(control + "> a").index($(this));
			if (c == i || $(this).hasClass("more")) {
				return false;
			}
			$(this).addClass(class1).siblings().removeClass(class1);
			$(show + "> div").eq(c).show().siblings().hide();
		})
	},
	hover_show : function(control, hideBox){
		$(control).hover(function(){ 
			$(this).find(hideBox).show();
		},function(){ 
			$(this).find(hideBox).hide();
		}) 
	},
	hover_class : function(control, class1) {
		$(control).hover(function() {
			$(this).addClass(class1)
		},function(){
			$(this).removeClass(class1)
		})
	},
	hover_class_show : function(control, hoverBox, class1, hideBox){ 
		$(control).hover(function(){ 
			$(this).find(hoverBox).addClass(class1);
			$(this).find(hideBox).show();
		},function(){ 
			$(this).find(hoverBox).removelass(class1);
			$(this).find(hideBox).hide();
		})
	},
	hover_load : function(control, hover, class1) {
		$(control).on("mouseover",hover,function(){
			$(this).addClass(class1);
		})
		$(control).on("mouseout",hover,function(){
			$(this).removeClass(class1);
		})
	}
}
// $.CNCN.hover_tag("#tag_top", "#tag_con", "on", 4);
// $.CNCN.hover_show("#box", ".show");
// $.CNCN.hover_class("#box", "hov");
// $.CNCN.hover_class(".quick_menu li", "hov");
// $.CNCN.hover_class_show(".quick_menu li","b","more_bg",".more")
// $.CNCN.hover_load("#box", ".tag_top", "hov");

if($("#mycncn")) {
	$.CNCN.hover_show("#change_city", "#citymore");
	$.CNCN.hover_class(".quick_menu li", "hov");
	$.CNCN.hover_class(".menu_con li", "hov");
}

//add by jeffy.woo
function nav_on(num){
	$('#nav_'+num).addClass('on');
}
var arr_txt = ['请输入目的地名称或线路关键词','请输入景点名称','请输入旅行社名称','请输入关键词'];
//头部搜索框
$(document).ready(function(){

	var $curtInput=$('#curtInput');
	var m;
	var $curtlist=$('#curtlist');
	$curtInput.mouseover(function(){
		clearInterval(m);$curtlist.show()
	})
	$curtInput.mouseout(function(){
		clearInterval(m);
		m=setInterval(function(){
			$curtlist.hide()},100);
		})
	$curtlist.find('li').hover(function(){
		$(this).css({background:'#f0f0f0'}
	)},
	function(){
		$(this).css({background:'#fff'})
	});
	$curtlist.find('li').click(function(){
		$curtlist.hide();
		var t=$.trim($(this).text());
		$curtInput.find('.onName').text(t);
		var ts=$('#so_input');
		var ts_val = ts.val();
		if(t == '景点') {
			$('#tn').val('jd');
            if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
                ts.val(arr_txt[1]);
                ts[0].defaultValue=arr_txt[1];
                ts.css({color:'#aaa'})
            }
        } else if(t == '旅行社') {
			$('#tn').val('lxs');
			if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
		        ts.val(arr_txt[2]);
		        ts[0].defaultValue=arr_txt[2];
		        ts.css({color:'#aaa'})
		    }
        } else if(t == '综合') {
			$('#tn').val('all');
			if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
		        ts.val(arr_txt[3]);
		        ts[0].defaultValue=arr_txt[3];
		        ts.css({color:'#aaa'})
		        document.soform.target="blank";
		    }
		} else {
			$('#tn').val('line');
			if(ts_val && $.inArray(ts_val,arr_txt)>-1) {
    		    ts.val(arr_txt[0]);
    		    ts[0].defaultValue=arr_txt[0];
    		    ts.css({color:'#aaa'})
		    }
		}
	})
	$("#xianlu_so").bind("submit",function(){
		if($("#so_input").val()=='请输入目的地名称或线路关键词' || $("#so_input").val()=='请输入景点名称' || $("#so_input").val()=='请输入旅行社名称' || $("#so_input").val()=='请输入关键词'){
			$("#so_input").parent(".search_top");
			return false;
		}
	})

	$('#so_input').focusEffect();
})
//输入框焦点事件
$.fn.focusEffect=function(){
	var $input=this;
	$input.focus(function() {
    if ($input.val() == '' || $input.val() == this.defaultValue) {
        $input.val('');
        $input.css({
            color: '#333'
        })
    }
});
	$input.blur(function() {
    if ($input.val() == '') {
        $input.val(this.defaultValue);
        $input.css({
            color: '#aaa'
        })
    }
})
}

function xx_event(n) {
    var xx = document.createElement('script');xx.async = true;
    xx.src = 'http://stat.cncn.com/event.php?n='+n;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(xx, s);
}