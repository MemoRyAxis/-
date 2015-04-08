
//光标焦点位置插入
function InsertString(tbid, str){
    var tb = document.getElementById(tbid);
    tb.focus();
    if (document.all){
        var r = document.selection.createRange();
        document.selection.empty();
        r.text = str;
        r.collapse();
        r.select();
    }
    else{
        var newstart = tb.selectionStart+str.length;
        tb.value=tb.value.substr(0,tb.selectionStart)+str+tb.value.substring(tb.selectionEnd);
        tb.selectionStart = newstart;
        tb.selectionEnd = newstart;
    }
}
//表情插入
function face_insert(facename,insert){
	//alert(facename);return false;
    var values= '['+facename+']';
	InsertString(insert, values);
	$("#showface").hide();
}
function topic_face(event,eid,insert,getname,bqid,plasce,ev)
{  
	//insert = 将表情插入的发布框ID    getname = 引用的表情文件
	var oEvent=ev || event;
	oEvent.cancelBubble=true;
   $("#"+eid).show();	
	
	var arr_sina=[];
	for(var i in sina_face_date){
		arr_sina.push([i,sina_face_date[i]]);
	}
	
	function inntdata(){
			var _html='';
			for (var i=0,len=arr_sina.length;i<len;i++ )
			{
				//if(i>=len){break;}
				_html+="<ul class='faces_list'>"
				_html+="<li onclick=face_insert('"+arr_sina[i][0]+"','"+insert+"'); ><img class='showfaceBb' src='"+arr_sina[i][1]+"' title='"+arr_sina[i][0]+"'/></li>"
				_html+="</ul>"
			}	
			return _html;
	}
	var arr_qq=[];
	for(var i in qq_face_date){
		arr_qq.push([i,qq_face_date[i]]);
	}
	function inntdata2(){
			var _html2='';
			for (var i=0,len=arr_qq.length;i<len;i++ )
			{
				//if(i>=len){break;}
				_html2+="<ul class='faces_list'>"
				_html2+="<li onclick=face_insert('"+arr_qq[i][0]+"','"+insert+"'); ><img class='showfaceBb' src='"+arr_qq[i][1]+"' title='"+arr_qq[i][0]+"' /></li>"
				_html2+="</ul>"
			}	
			return _html2;
	}
	if (getname == 'sina_face')
	{	
		$(".sina_face").addClass("bq_break");
		$(".topic_face").removeClass("bq_break");
		document.getElementById(bqid).innerHTML = inntdata();
		//alert(fList_1);
	}else if (getname == 'topic_face')
	{
		  $(".sina_face").removeClass("bq_break");
		  $(".topic_face").addClass("bq_break");
		document.getElementById(bqid).innerHTML = inntdata2();
	};

	$(document).ready(function(){
		$(".showfaceBb").click(function(){$(eid).hide();});
		$(".menu_bqb_c1").click(function(){$(this).parents(eid).hide();});
		$(document).bind('click',function(){
			$("#"+eid).hide();
			//return false;
		});
	});
}
/* 中英文字符计算 */
String.prototype.len=function(){return this.replace(/[^u4e00-u9fa5]/g,"aa");} 

/* 回复框字数判断 */
function subText(len,id,id2){
	var oTextarea =document.getElementById(id);
	var oNum =document.getElementById(id2);
	var timer;
	oTextarea.onfocus = function Fallback(){
		timer=setInterval(function(){
			if(WordLength(oTextarea) > 280){
				sum = 0;
				for(i=0;i<oTextarea.value.length;i++){
					sum += LimitLength(oTextarea.value.substr(i,1));
					//if(sum > 280)oTextarea.value = oTextarea.value.substr(0,i);
				}
			}
			Limit(oTextarea,280,oNum);
		},100);
	};
	oTextarea.onblur=function(){
        clearInterval(timer);
    }
}
function LimitLength(obj){
    var iLen = obj;
    var iLimitLength = 0;
	var iLimitLength = iLen.match(/[^ -~]/g) == null ? iLen.length : iLen.length + iLen.match(/[^ -~]/g).length;
    return iLimitLength;
}
function WordLength(obj){
	var oVal = obj.value;
	var oValLength = 0;
	oVal.replace(/\n*\s*/,'')=='' ? oValLength = 0 : oValLength = oVal.match(/[^ -~]/g) == null ? oVal.length : oVal.length + oVal.match(/[^ -~]/g).length;
	return oValLength
}
function Limit(obj,iNow,tit){
	var oValLength = WordLength(obj);
	font_count = 140-Math.floor((oValLength)/2);	
	if(font_count>=0){
		tit.innerHTML = "还可以输入"+font_count+"字";
		tit.style.color = "#878787";
		return true;
	}else{
		tit.innerHTML = "已经超出"+font_count*-1+"字";
		tit.style.color = "red";
		return false;
	}
	return font_count
}
/* 全部评论列表 */
function inntdata_list(){
	var oPtit = document.getElementById("pinglun_tit");
	var aPall = oPtit.getElementsByTagName("li");
	aPall[1].className='';
	aPall[2].className='';
	aPall[0].className='on';
	
	var array=null;
	var str=[];
	array=date.commentlist;
	if (array == null || array == ''){ 
		document.getElementById("oPingl").innerHTML = "<p class='pinglun_null'>暂时还没有用户评论噢，<a href='javascript:void(0);' class='sofa'>我来抢沙发</a></p>";
		document.getElementById("pinglun_more").style.display = 'none';
		getSofa();
		//return ;
	}else{
		var _ruiArr=[];
		var _ruiArr2=[];
		for (var i=0;i<array.length ;i++ )
		{	
			var share_title = escape(array[i].NOTAGCONTENTS);
			str[i]="<div class='pinglun'>"
			str[i]+="<dl class='userleft' ><dt><a href='"+array[i].homeurl+"' target='_blank'><img width='50' height='50' src='"+array[i].IMG+"'/></a></dt>"
			str[i]+="<dd class='userleft_add'><p>&nbsp;</p><a href='"+array[i].homeurl+"'>"+array[i].buddys_data2+"</a></dd></dl>"
			str[i]+="<div class='coomm_r'>"
			str[i]+="<h4 class='coomm_rH4'><a href='"+array[i].homeurl+"'>"+array[i].NAME+"</a><span id='plFrom_"+array[i].tid+"' class='plFrom'></span></h4><p>"+array[i].CONTENTS+"</p>"
			str[i]+="<h5><span class='time-from'>"+array[i].TIME+"</span><span class='feed-set'><a id='comm_zan_"+array[i].tid+"' href=javascript:rreply_list_list_zan('"+array[i].tid+"','"+array[i].from+"');>赞</a> | <a id='comm_hf_"+array[i].tid+"' href=javascript:rreply_list_list_huifu('"+array[i].NAME+"','"+array[i].tid+"','"+array[i].from+"');>回复(<em>"+array[i].reply_count+"</em>)</a></span></h5>"
			str[i]+="<div style='display:none;' id='comm_floor_replays_"+array[i].tid+"' class='comm-floor-replay'><div class='second_reply'><em class='corner'></em>"
			str[i]+="<div class='second_user'><a href='"+face_image.url+"'><img width='35px' height='35px' src='"+face_image.face+"'></a></div><form name='newsComm"+array[i].tid+"' id='newsComm"+array[i].tid+"' action='http://t.caijing.com.cn/cjapi/cjpost?tid="+array[i].tid+"&postid="+articleId+"'><div class='second_text'>"				
			str[i]+="<div class='reCom'><textarea maxlength='1000' id='content_"+array[i].tid+"' class='comBord'></textarea></div><div class='faceBtn'><div class='menu_bq'>"
			str[i]+="<a href='javascript:void(0)' onclick=topic_face(event,'showface_"+array[i].tid+"','content_"+array[i].tid+"','sina_face','faceBG_"+array[i].tid+"')><b class='menu_bqb_c'>表情</b></a>"					
			str[i]+="<div id='showface_"+array[i].tid+"' class='showface' style='display:none;'><div class='menu_bqb_cb'><div style='float:left; '>"
			str[i]+="<a onclick=topic_face(event,'showface_"+array[i].tid+"','content_"+array[i].tid+"','sina_face','faceBG_"+array[i].tid+"'); class='sina_face bq_break' href='javascript:void(0);'>SINA表情</a> "								
			str[i]+="<a onclick=topic_face(event,'showface_"+array[i].tid+"','content_"+array[i].tid+"','topic_face','faceBG_"+array[i].tid+"');return false; class='topic_face' href='javascript:void(0);'>QQ表情</a> "								
			str[i]+="</div><div class='menu_bqb_c1'></div></div><div class='faceBG' id='faceBG_"+array[i].tid+"'></div></div></div>"	
			str[i]+="<input type='button' class='button_issue2' onclick=submitComm('"+array[i].tid+"','content_"+array[i].tid+"','"+array[i].tid+"','"+array[i].from+"') ><div id='button_num_"+array[i].tid+"' class='button_issue2_num'>还可以输入140字</div><div class='clear'></div></div></div></form><div class='clear'></div></div>"
			str[i]+="<div id='topic_view_comment_area_"+array[i].tid+"'class='second_pllist'><div id='comment_area_more_"+array[i].tid+"' class='comment_area_more'><a href='"+array[i].url+"'>查看全部"+array[i].reply_count+"条回复&gt;&gt;</a></div></div>"	
			str[i]+="</div></div><div class='clear'>&nbsp;</div>"
			str[i]+="</div>";
			_ruiArr.push("content_"+array[i].tid);
			_ruiArr2.push("button_num_"+array[i].tid);
		}
		
		document.getElementById("oPingl").innerHTML = str.join("");
		for(var k=0;k<_ruiArr.length;k++){
			subText(140,_ruiArr[k],_ruiArr2[k]);
		}

		for (var i=0;i<array.length ;i++ )
		{	
			
			if (array[i].from =='backpushqq'){	
				document.getElementById("plFrom_"+array[i].tid).innerHTML = "<em class='plFrom_qq'></em>";
				document.getElementById("newsComm"+array[i].tid).action = "http://t.caijing.com.cn/cjapi/cjpost?cjcmsid="+articleId;
				//document.getElementById("content_"+array[i].tid).value = "@"+array[i].NAME;
				//add_rply(array[i].NAME,"content_"+array[i].tid);
				//document.getElementById("comm_hf_"+array[i].tid).style.display = "none";
				//userHead_dd.style.display = "none";
			}else if (array[i].from =='backpushsina'){
				document.getElementById("plFrom_"+array[i].tid).innerHTML = "<em class='plFrom_sina'></em>";
				document.getElementById("newsComm"+array[i].tid).action = "http://t.caijing.com.cn/cjapi/cjpost?cjcmsid="+articleId;
				//document.getElementById("content_"+array[i].tid).value = "@"+array[i].NAME;
				//add_rply(array[i].NAME,"content_"+array[i].tid);
				//document.getElementById("comm_hf_"+array[i].tid).style.display = "none";
				//userHead_dd.style.display = "none";
			};
			if (array[i].reply_count > 5)
			{
				document.getElementById("comment_area_more_"+array[i].tid).style.display = "block";
			}
			if (array[i].zan != '0')
			{
				document.getElementById("comm_zan_"+array[i].tid).innerHTML = "赞(<em>"+array[i].zan+"</em>)";
			}
		}
		
		for(var i=0;i<array.length;i++)
		{	
			if (array[i].loginname == '4')
			{
				$('.userleft')[i].innerHTML="<dt><img width='50' height='50' src='"+array[i].IMG+"'/></dt><dd class='userleft_add'><p>&nbsp;</p><a href='"+array[i].homeurl+"'>"+array[i].buddys_data2+"</a></dd>";
				$('.coomm_rH4')[i].innerHTML="<a style='cursor:default' href='javascript:void(0)'>"+array[i].NAME+"</a>";
			}
			$('.userleft')[i].index=i;
			$('.userleft')[i].onmouseover = function(){
				for( i=0;i<array.length;i++){
					if (array[this.index].from =='backpushqq' || array[this.index].from =='backpushsina' || array[this.index].loginname == '4'){
						$('.userleft_add')[this.index].style.display = "none";
					}else{
						$('.userleft_add')[this.index].style.display='block';
					}
				}
			}
			$('.userleft')[i].onmouseout = function(){
				$('.userleft_add')[this.index].style.display = "none";
			}
			
		}
			
	}
	if (typeof sTxt != 'undefined')
	{
		var oSpre = document.getElementById("cont_num");
		if (oSpre){
			var oSpre_span = oSpre.getElementsByTagName("span")[0];
			oSpre_span.innerHTML = sTxt;
		};
		var oSpre_1 = document.getElementById("cont_num1");
		var oSpre_2 = document.getElementById("cont_num2");
		var oSpre_3 = document.getElementById("cont_num3");
		var oSpre_all = document.getElementById("pingl_all").getElementsByTagName("span")[0];
		var oSpre_sina = document.getElementById("pingl_sina").getElementsByTagName("span")[0];
		var oSpre_qq = document.getElementById("pingl_qq").getElementsByTagName("span")[0];
		if (oSpre_1){oSpre_1.innerHTML = sTxt;}
		if (oSpre_3){oSpre_3.innerHTML = sTxt;}
		if (oSpre_all){oSpre_all.innerHTML = sTxt;}
		if (oSpre_sina){oSpre_sina.innerHTML = sina_sTxt;}
		if (oSpre_qq){oSpre_qq.innerHTML = qq_sTxt;}
		function milliFormat(s){//添加千位符  
			var as = new String(s); 
			var _len=as.length;
			var _m=Math.ceil(_len/3);
			var _l=_len%3;
			var arr=[];
			arr.push(as.substring(0,_l));
			for(var i=0;i<_m;i++){
			arr.push(as.substring(_l+i*3,_l+i*3+3));
			}
			var ss=arr.join(",");
			var re=/^\,|\,$/ig;
			var sss=ss.replace(re,"");
			if (oSpre_2){oSpre_2.innerHTML = sss;}
		} milliFormat(sTxt);
	}
};

/* 新浪&腾讯分类列表 */
function oPall(qsId,artId){
	var oPtit = document.getElementById("pinglun_tit");
	var aPall = oPtit.getElementsByTagName("li");
	for(i=0;i<aPall.length;i++)
	{
		aPall[i].className='';
	}
	this.className='on';

	if (this.getElementsByTagName("span")[0].innerHTML == '0'){ 
			document.getElementById("oPingl").innerHTML = "<p class='pinglun_null'>暂时还没有用户评论噢，<a href='javascript:void(0);' class='sofa'>我来抢沙发</a></p>";
			document.getElementById("pinglun_more").style.display = 'none';
			getSofa();
			return ;
		}else{
			var classify ="http://t.caijing.com.cn/cjapi/json?act="+qsId+"&cjcmsid="+artId;
		
			$.getJSON(classify+"&jsoncallback=?", function(data){
				//alert(data);
				var aClass = null;
				var aList=[];
				aClass = data.commentlist;
				var _Arr=[];
				var _Arr2=[];
				for( var i in aClass)
				{
					var share_title = escape(aClass[i].NOTAGCONTENTS);
					aList[i]="<div class='pinglun'>"
					aList[i]+="<dl class='userleft' ><dt><a href='"+aClass[i].homeurl+"' target='_blank'><img width='50' height='50' src='"+aClass[i].IMG+"'/></a></dt>"
					aList[i]+="<dd class='userleft_add'><p>&nbsp;</p><a href='"+aClass[i].homeurl+"'>"+aClass[i].buddys_data2+"</a></dd></dl>"
					aList[i]+="<div class='coomm_r'>"
					aList[i]+="<h4 class='coomm_rH4'><a href='"+aClass[i].homeurl+"'>"+aClass[i].NAME+"</a><span id='plFrom_"+aClass[i].tid+"' class='plFrom'></span></h4><p>"+aClass[i].CONTENTS+"</p>"
					aList[i]+="<h5><span class='time-from'>"+aClass[i].TIME+"</span><span class='feed-set'><a id='comm_zan_"+aClass[i].tid+"' href=javascript:rreply_list_list_zan('"+aClass[i].tid+"','"+aClass[i].from+"');>赞</a> | <a id='comm_hf_"+aClass[i].tid+"' href=javascript:rreply_list_list_huifu('"+aClass[i].NAME+"','"+aClass[i].tid+"','"+aClass[i].from+"');>回复(<em>"+aClass[i].reply_count+"</em>)</a></span></h5>"
					aList[i]+="<div style='display:none;' id='comm_floor_replays_"+aClass[i].tid+"' class='comm-floor-replay'><div class='second_reply'><em class='corner'></em>"
					aList[i]+="<div class='second_user'><a href='"+face_image.url+"'><img width='35px' height='35px' src='"+face_image.face+"'></a></div><form name='newsComm"+aClass[i].tid+"' action='http://t.caijing.com.cn/cjapi/cjpost?cjcmsid="+articleId+"'><div class='second_text'>"				
					aList[i]+="<div class='reCom'><textarea maxlength='1000' id='content_"+aClass[i].tid+"' class='comBord'></textarea></div><div class='faceBtn'><div class='menu_bq'>"
					aList[i]+="<a href='javascript:void(0)' onclick=topic_face(event,'showface_"+aClass[i].tid+"','content_"+aClass[i].tid+"','sina_face','faceBG_"+aClass[i].tid+"')><b class='menu_bqb_c'>表情</b></a>"					
					aList[i]+="<div id='showface_"+aClass[i].tid+"' class='showface' style='display:none;'><div class='menu_bqb_cb'><div style='float:left; '>"
					aList[i]+="<a onclick=topic_face(event,'showface_"+aClass[i].tid+"','content_"+aClass[i].tid+"','sina_face','faceBG_"+aClass[i].tid+"'); class='sina_face bq_break' href='javascript:void(0);'>SINA表情</a> "								
					aList[i]+="<a onclick=topic_face(event,'showface_"+aClass[i].tid+"','content_"+aClass[i].tid+"','topic_face','faceBG_"+aClass[i].tid+"');return false; class='topic_face' href='javascript:void(0);'>QQ表情</a> "								
					aList[i]+="</div><div class='menu_bqb_c1'></div></div><div class='faceBG' id='faceBG_"+aClass[i].tid+"'></div></div></div>"	
					aList[i]+="<input type='button' class='button_issue2' onclick=submitComm('"+aClass[i].tid+"','content_"+aClass[i].tid+"','"+aClass[i].tid+"','"+aClass[i].from+"') ><div id='button_num_"+aClass[i].tid+"' class='button_issue2_num'>还可以输入140字</div><div class='clear'></div></div></div></form><div class='clear'></div></div>"
					aList[i]+="<div id='topic_view_comment_area_"+aClass[i].tid+"'class='second_pllist'><div id='comment_area_more_"+aClass[i].tid+"' class='comment_area_more'><a href='"+aClass[i].url+"'>查看全部"+aClass[i].reply_count+"条回复&gt;&gt;</a></div></div>"	
					aList[i]+="</div></div><div class='clear'>&nbsp;</div>"
					aList[i]+="</div>";
					_Arr.push("content_"+aClass[i].tid);
					_Arr2.push("button_num_"+aClass[i].tid);
				}
				document.getElementById("oPingl").innerHTML = aList.join("");
				for(var k=0;k<_Arr.length;k++){
					subText(140,_Arr[k],_Arr2[k]);
				}
				for ( var i in aClass)
				{
					if (qsId =='backpushqq'){	
						document.getElementById("plFrom_"+aClass[i].tid).innerHTML = "<em class='plFrom_qq'></em>";
					}else if (qsId =='backpushsina'){
						document.getElementById("plFrom_"+aClass[i].tid).innerHTML = "<em class='plFrom_sina'></em>";
					};
				}
			});
	}
}

/* 我来抢沙发锚点 */
function getSofa(){
	$('.sofa').click(function(){
		$("html,body").animate({scrollTop:$(".mini_com").offset().top},500);
		$("#content").focus();
	});
}

/* 赞功能 */
function rreply_list_list_zan(tid,from){
	var vid = vid;
	var cmt_type ;
	if (from == 'cj'){
		cmt_type = 'cj';
	}else if (from == 'backpushqq'){
		cmt_type == 'qq';
	}else if (from == 'backpushsina'){
		cmt_type == 'sina';
	}
	var tab_type = $('.changetabs li[class="on"]').attr("ctype");
	var zan_tid = $("#comm_zan_"+tid);
	var tid_num = parseInt(zan_tid.children("em").html());
	var zan_url = "http://t.caijing.com.cn/cjapi/ajax?act=zan&cjcmsid="+articleId+"&tid="+tid+"&tab_type="+tab_type+"&cmt_type="+cmt_type;
	$.getJSON(zan_url+"&jsoncallback=?", function(d){
		var dzan =d.toString();
		if (dzan == 'true'){
			oPopup('赞成功！','message_fbcg',2);
			if (tid_num)
			{
				$("#comm_zan_"+tid).children("em").html(tid_num+1);
			}else{
				$("#comm_zan_"+tid).html("赞(<em>1</em>)");
			}

			zan_tid.css("color","#878787");
			zan_tid.children("em").css("color","#878787");
		}else if (dzan == 'false'){
			oPopup('由于网络繁忙发送失败，请稍后！','message_zansb',2);	
		}
	});
	document.getElementById("comm_zan_"+tid).href="javascript:void(0);";
}

/* 回复框的光标位置 */
 function add_rply(nikname,area_id){
    var obj = document.getElementById(area_id);
    $("#"+area_id).val("回复:@"+nikname+" :").focus();
	//obj.focus();
    var len = obj.value.length;
    if (document.selection) {
        var sel = obj.createTextRange();
        sel.moveStart('character',len);
        sel.collapse();
        sel.select();
    } else if (typeof obj.selectionStart == 'number' && typeof obj.selectionEnd == 'number') {
        obj.selectionStart = obj.selectionEnd = len;
	}
}
/* 二级回复框 */
function rreply_list_huifu(vtid,tid,name){
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	if (!cookieStr_pl){
		 judgeLog('登录后才可以对用户进行回复哦!');
		 return ;
	}
	//$('.comm-floor-replay').not("#comm_floor_replays_"+vtid).hide();
	$("#comm_floor_replays_"+vtid+'_'+tid).toggle();	
	add_rply(name,"content_"+vtid+'_'+tid);
}

/* 一级回复框和回复列表展示 */
function rreply_list_list_huifu(name,vtid,fromid){
	
	$('.comm-floor-replay').not("#comm_floor_replays_"+vtid).hide();
	$('#comm_floor_replays_'+vtid).toggle();	
	if(!$('#comm_floor_replays_'+vtid).attr("open")){
		var huifu_url ="http://t.caijing.com.cn/cjapi/json?act=reply&tid="+vtid;
		$.getJSON(huifu_url+"&jsoncallback=?", function(data){
			//alert(data);
			if (data == null || data == ''){ 
				return ;
			}else{
				var array_2 = null;
				var huifu=[];
				array_2 = data.commentlist;
				var _ruiArr=[];
				var _ruiArr2=[];
				for( var i in array_2)
				{
					//if (i>5){return;};
					huifu[i]="<dl id='topic_list_dl_"+array_2[i].tid+"'>"
					huifu[i]+="<dt id='top"+array_2[i].tid+"'><a href='http://t.caijing.com.cn/index.php?mod="+array_2[i].NAME+"' target='_blank'><img width='35px' height='35px' src='"+array_2[i].IMG+"'></a></dt>"
					huifu[i]+="<dd><a href='http://t.caijing.com.cn/index.php?mod="+array_2[i].loginname+"' class='name-tip'>"+array_2[i].NAME+"</a>："+array_2[i].CONTENTS+"</dd>"
					huifu[i]+="<dd class='comingFrom'>"
					huifu[i]+="<div class='comingFrom_cont'><span class='comingFrom_laiy'>"+array_2[i].from_data+"</span><a href=javascript:rreply_list_huifu('"+vtid+"','"+array_2[i].tid+"','"+array_2[i].NAME+"'); class='comingFrom_shuifu'>回复</a><span class='comingFrom_date'>"+array_2[i].TIME+"</span></div>"
					huifu[i]+="<form name='newsComm"+vtid+"_"+array_2[i].tid+"' action='http://t.caijing.com.cn/cjapi/cjpost?tid="+array_2[i].tid+"&postid="+articleId+"'><div style='display:none;' id='comm_floor_replays_"+vtid+"_"+array_2[i].tid+"'><div class='reCom'><textarea maxlength='1000' id='content_"+vtid+"_"+array_2[i].tid+"' class='comBord'>@"+array_2[i].NAME+" </textarea></div>"
					huifu[i]+="<div class='faceBtn'><div class='menu_bq'>"
					huifu[i]+="<a href='javascript:void(0)' onclick=topic_face(event,'showface_"+vtid+"_"+array_2[i].tid+"','content_"+vtid+"_"+array_2[i].tid+"','sina_face','faceBG_"+vtid+"_"+array_2[i].tid+"');><b class='menu_bqb_c'>表情</b></a>"
					huifu[i]+="<div id='showface_"+vtid+"_"+array_2[i].tid+"' class='showface' style='display:none;'><div class='menu_bqb_cb'><div style='float:left; '>"
					huifu[i]+="<a onclick=topic_face(event,'showface_"+vtid+"_"+array_2[i].tid+"','content_"+vtid+"_"+array_2[i].tid+"','sina_face','faceBG_"+vtid+"_"+array_2[i].tid+"');return false; class='sina_face bq_break' href='javascript:void(0);'>SINA表情</a> "								
					huifu[i]+="<a onclick=topic_face(event,'showface_"+vtid+"_"+array_2[i].tid+"','content_"+vtid+"_"+array_2[i].tid+"','topic_face','faceBG_"+vtid+"_"+array_2[i].tid+"');return false; class='topic_face' href='javascript:void(0);'>QQ表情</a> "								
					huifu[i]+="</div><div class='menu_bqb_c1'></div></div><div class='faceBG' id='faceBG_"+vtid+"_"+array_2[i].tid+"'></div></div></div>"	
					huifu[i]+="<input type='button' class='button_issue2' onclick=submitComm('"+vtid+"_"+array_2[i].tid+"','content_"+vtid+"_"+array_2[i].tid+"','"+vtid+"','') ><div id='button_num_"+vtid+"_"+array_2[i].tid+"' class='button_issue2_num'>还可以输入140字</div><div class='clear'></div></div></div>"	
					huifu[i]+="</form></dd><div class='clear'></div>"
					huifu[i]+="</dl>"
					_ruiArr.push("content_"+vtid+"_"+array_2[i].tid);
					_ruiArr2.push("button_num_"+vtid+"_"+array_2[i].tid);
				}
				document.getElementById("topic_view_comment_area_"+vtid).innerHTML = huifu.join("")+document.getElementById("topic_view_comment_area_"+vtid).innerHTML;
				for(var k=0;k<_ruiArr.length;k++){
					subText(140,_ruiArr[k],_ruiArr2[k]);
				}
			}
		});
	};
	if (fromid == 'backpushqq' || fromid == 'backpushsina'){
		add_rply(name,'content_'+vtid);
	};
	$('#comm_floor_replays_'+vtid).attr("open","open");
}

/* 头像 */
function face_pic(){
	var face_pic = document.getElementById("mini_com_l");
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	//alert(cookieStr_pl);
	if (cookieStr_pl){
		face_pic.innerHTML = "<dt><a href='"+face_image.url+"'><img src='"+face_image.face+"' width='75' height='75' /></a></dt><dd><a href='"+face_image.set_url+"'>修改头像</a></dd>";
	}else{
		face_pic.innerHTML = "<dt><img src='http://ucenter.caijing.com.cn/images/noavatar_middle.gif' width='75' height='75' /></dt>";
	};
};

/* 登录&注册判断 */
function loginPl(url){
	//var backUrl = 'YUhSMGNEb3ZMM2QzZHk1allXbHFhVzVuTG1OdmJTNWpiaTlwYm1SbGVDNW9kRzFz';
	var backurl_pl;
	if(url==null || url=='undefined'){
		backurl_pl = 'YUhSMGNEb3ZMM2QzZHk1allXbHFhVzVuTG1OdmJTNWpiaTlwYm1SbGVDNW9kRzFz';
	}else{
		backurl_pl = url ;
	}
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	if (cookieStr_pl){
		document.write("<div class='mini_rt_top fl'><div id='allogin'><a href='"+face_image.url+"' id='usertext' class='nickname'>"+cookieStr_pl+"</a></div></div><a href='http://t.caijing.com.cn/comment' class='miniplaza'>微评论广场&gt;&gt;</a>");
	}else{
		document.write("<div class='mini_rt_top fl'><div id='unlogin' class=''><a href='javascript:oAnony();' rel=\"nofollow\">登录</a><em>/</em><a href='http://service.caijing.com.cn/auth/register' target='_self'>注册</a><span> 发表你的精彩评论</span></div></div><div class='hz_login'><span>合作登录：</span><input onclick='loginSohu();' class='comm_sohu' type='button' value=''/><input onclick='loginWangyi();' class='comm_163' type='button' value=''/><input onclick='loginQQ();' class='comm_qq' type='button' value=''/><input onclick='loginSina();' class='comm_sina' type='button' value=''/></div>");
	}
};

/* 合作登录 */
function loginSohu(){
	var _souhuUrl = "http://service.caijing.com.cn/auth/connect/type/soho/nurl/"+backurl_pl;
	window.location.href = _souhuUrl;
	}
function loginWangyi(){
	var _wangyiUrl = "http://service.caijing.com.cn/auth/connect/type/wangyi/nurl"+backurl_pl;
	window.location.href = _wangyiUrl;
	}
function loginSina(){
	var _sinaUrl = "http://service.caijing.com.cn/auth/connect/type/xwb/nurl/"+backurl_pl;
	window.location.href = _sinaUrl;
	}
function loginQQ(){
	var _qqUrl = "http://service.caijing.com.cn/auth/connect/type/qwb/nurl/"+backurl_pl;
	window.location.href = _qqUrl;
	}

/* 绑定同步判断 */
function synchro(){
	var translip = document.getElementById("translip");
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	if (cookieStr_pl){
		translip.style.display="block";
		document.getElementById("anonymous").checked = "";
	}else{
		translip.style.display="none";
		document.getElementById("anonymous").checked = "";
	}
};
function bdJudge(tId,text){
	var binding_url ="http://t.caijing.com.cn/cjapi/json?act=if"+tId;
	//console.log(binding_url);
	$.getJSON(binding_url+"&jsoncallback=?", function(data){
		//alert(data.toString());
		//1绑定 0未绑定
		var bdVal = data.toString();
		if ( bdVal == 0 ){	
			binding(tId,text);
			document.getElementById("syn_to_"+tId).checked = "";
		}else if ( bdVal == 1 ){
			return;
		}
	});
};
function bdJudge2(tId){
	var binding_url ="http://t.caijing.com.cn/cjapi/json?act=if"+tId;
	$.getJSON(binding_url+"&jsoncallback=?", function(data){
		//1绑定 0未绑定
		var bdVal = data.toString();
		if ( bdVal == 0 ){	
			document.getElementById("syn_to_"+tId).checked = "";
		}else if ( bdVal == 1 ){
			document.getElementById("syn_to_"+tId).checked = "checked";
		}
	});
};

/* 登录提示层 */
function judgeLog(bdtext){
	var binding = document.getElementById("show_message_area");
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	binding.innerHTML = "<div class='binding' id='judgeLog'><div class='binding_tit'><h4>提示</h4><span id='binding_x'>×</span></div><div class='binding_cont'><p>"+bdtext+"</p><a class='judgeLog_but' target='_self' href='http://service.caijing.com.cn/usermanage/login/url/"+backurl_pl+"'></a><span id='binding_x2' class='judgeLog_close'></span></div></div></div>";
	document.getElementById("binding_x").onclick=function (){binding.innerHTML=''};
	document.getElementById("binding_x2").onclick=function (){binding.innerHTML=''};
}
/* 绑定提示层 */
function binding(bdId,bdtext){
	var binding = document.getElementById("show_message_area");
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	binding.innerHTML = "<div class='binding' id='bDrag'><div class='binding_tit'><h4>提示</h4><span id='binding_x'>×</span></div><div class='binding_cont'><p>您的账号'"+cookieStr_pl+"'未绑定"+bdtext+"微博</p><a class='binding_"+bdId+"' target='_blank' href='http://t.caijing.com.cn/settings/syn'></a></div></div>";
	document.getElementById("binding_x").onclick=function (){binding.innerHTML=''};
}
/* 发布成功提示层 */
function oPopup(text,tClass,show_time){
		var oPopup = document.getElementById("show_message_area");
		oPopup.innerHTML = "<div id='message_area' class='message_area "+tClass+"' ><p>"+text+"</p></div>" ;
		setTimeout(function(){oPopup.innerHTML='';},(show_time * 1000));
	}
/* 判断重复提示层 */
function oPopup_2(text,tClass,show_time){
		var oPopup = document.getElementById("show_message_area");
		oPopup.innerHTML = "<div id='message_area' class='message_area "+tClass+"' ><p>"+text+"<span class='button affirm' id='confirm_yes'>确认</span></p></div>" ;
		//setTimeout(function(){oPopup.innerHTML='';},(show_time * 1000));
		document.getElementById("confirm_yes").onclick=function (){oPopup.innerHTML=''};
	}

/* 数据报错处理 */
function get_at_user_choose(){};
function clear_user_choose(){};

/**
字数限制扩展,直接将文本截断
* @param {Number} limit    字数限制
* @param {String} selector 提示文本
* @param {Object} options  参数设置  isAutoLimit {Boolean} :是否自动截断默认截断  num {Number}：预警提示分界线
*/
$.fn.extend({
    limit: function (limit, selector, options) {
        var interval,
        limit = limit * 1,
        options = $.extend({ isAutoLimit: true, num: 0 }, options || {}),
        self = $(this);
        if (!this.focused) {
            this.focused = true;
            self.focus(function () {
                interval = window.setInterval(substring, 100);
            }).blur(function () {
                clearInterval(interval);  
                substring();
            });
        }
        substring();
        function substring() {
			var str = self.val();
			var lengthE = escape(self.val().len()).length;
			var length = 0;
			if (lengthE%2 == 0)
			{
				 length = parseInt(lengthE/2);
			}else{
				length = parseInt(lengthE/2)+1;
			};
			//alert(lengthE.length);
            // 判断是否需要截断文本
            if (length > limit && options.isAutoLimit) {
                self.val(self.val().substring(0, limit));
                length = limit;
                if (typeof selector === "function") {
                    selector.caller(self.get(0));
                }
            }
            if (typeof selector === "string") {
                var elem = $(selector), count = limit - length;
				//alert(count);
				var textCont = document.getElementById("content");
				
                // 预警显示
				if ((count < 0))
				{
					elem.html("已经超过<em style='color:#DA0000'>" + count * -1 + "</em>字");
					document.getElementById("button_issue").style.display='none';
					document.getElementById("button_hover").style.display='block';
				}else if (textCont.value=='说说你的看法：' || textCont.value==''){
					elem.html("还可以输入<em>" + count + "</em>字");
					document.getElementById("button_issue").style.display='none';
					document.getElementById("button_hover").style.display='block';
				}else{
					elem.html("还可以输入<em>" + count + "</em>字");
					document.getElementById("button_issue").style.display='block';
					document.getElementById("button_hover").style.display='none';
				};
            }
        };
        return this;
    }
});
function textBlur(){
	var textCont = document.getElementById("content");
	if(textCont.value==''){textCont.value='说说你的看法：'};
	if (textCont.value=='说说你的看法：' || textCont.value=='')
	{
		document.getElementById("button_hover").style.display='block';
		document.getElementById("button_issue").style.display='none';
		document.getElementById("mini_number").style.display='none';
	}else{
		document.getElementById("mini_number").style.display='block';
		document.getElementById("button_issue").style.display='block';
		document.getElementById("button_hover").style.display='none';
	}
}
function oAnony(){     
	/* 未登录且未勾选匿名的判断 */
	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	var anonyCh = document.getElementById("anonymous");
	if (!cookieStr_pl && anonyCh.checked=='')
	{
		if(!cookieStr_pl && anonyCh.checked==''){
			var div = document.createElement('div');
		div.id = "overDiv"; //设置显示的数据，可以是标签．
		div.className = "overDiv";//设置css样式,s设置背景颜色\
		var bo = document.body;//获取body对象.
		bo.insertBefore(div,bo.lastChild);
			$("#loginbox").show();
		}
	}
};
function textFocus(){
	oAnony();
	var textCont = document.getElementById("content");
	if(textCont.value=='说说你的看法：'){textCont.value=''};
	document.getElementById("mini_number").style.display='block';
}
function normal(id,times){
	var obj=$("#"+id);
	obj.css("background-color","#FFFFFF");
	if(times<0){return;}
	times=times-1;
	setTimeout("error('"+id+"',"+times+")",150);
}
function error(id,times){
	var obj=$("#"+id);
	obj.css("background-color","#F6CECE");
	times=times-1;
	setTimeout("normal('"+id+"',"+times+")",150);
}

/* 提交表单 */
/* totid:评论id，contentid：评论框id，showid：回复评论id，fromid：评论来源 */
var cjcmsSubmitContent ='';
function submitComm(totid,contentid,showid,fromid){
	var totid = totid;
	var fromid = fromid;
	var content = document.getElementById(contentid).value;
	var oValLength2 = WordLength(document.getElementById(contentid));
	var font_count2 = 140-Math.floor((oValLength2)/2);
	if (font_count2<0){
		error(contentid,2);
		document.getElementById(content).focus();
		return;
	}

	var cookieStr_pl = getCookie('SA_USER_NICK_NAME');
	/*if (!cookieStr_pl && contentid!='content'){
		 judgeLog('登录后才可以对用户进行回复哦!');
		 return ;
	}*/
	if(content=='' || content == '说说你的看法：' || content == '#插入自定义话题#'){
		//oPopup('请输入内容','message_sr',2);
		error(contentid,2);
		document.getElementById(content).focus();
		return;
	}
	if(cjcmsSubmitContent == content)  {
       oPopup_2('不要贪心哦，相同的微博发一次就够啦。','message_chf',2);
        return false;
    }  else  {
        cjcmsSubmitContent = content;
    }   
	//oAnony();
	/* 匿名&同步新浪腾讯的判断 */
	//1:anonymous  0 login 
	var anonymous = 0;
	var anonyChecked = document.getElementById("anonymous").checked;
	if(anonyChecked){anonymous=1;}
	var syn_to_qqwb = 0;
	var qqwbCh = document.getElementById("syn_to_qq");
	if (qqwbCh){
		var qqwbChecked= qqwbCh.checked;
		if(qqwbChecked){syn_to_qqwb=1;}
	};
	var syn_to_sina = 0;
	var sinaCh = document.getElementById("syn_to_sina");
	if (sinaCh){
		var sinaChecked= sinaCh.checked;
		if(sinaChecked){syn_to_sina=1;}
	};
	/* 提交的url */
	var  url ;
	var type_both ;
	if (contentid  == "content" || fromid == "backpushqq" || fromid=="backpushsina"){
		type_both = 1;
		url= document["newsComm"+totid].action+"&content="+content+"&anonymous="+anonymous+"&type_both="+type_both+"&syn_to_qqwb="+syn_to_qqwb+"&syn_to_sina="+syn_to_sina;
	}else{
		//type_both = 0;
		url= document["newsComm"+totid].action+"&content="+content+"&anonymous="+anonymous;
	};
	//var  url =  "http://vote.cms.caijing.com.cn/jsonptest.jsp"
	oPopup('发布中...','message_fbz',2);	
	//console.log(url);
	$.getJSON(url+"&jsoncallback=?", function(data){
		
		$.each(data['commentlist'], function(i,val){ 
		//alert(val.NAME);
		if(val.NAME==undefined || val.NAME == ''){
		   data.NAME = "财经网友";
		}
		if(val.CONTENTS==undefined || val.CONTENTS == ''){
			return;
		}
		oPopup('发布成功！','message_fbcg',2);
		if (contentid  == "content" || fromid == "backpushqq" || fromid=="backpushsina")
		{
			var share_title = escape(val.NOTAGCONTENTS);
			document.getElementById("oPingl").innerHTML= "<div class='pinglun'><dl class='userleft'><dt><a href='http://t.caijing.com.cn/index.php?mod="+val.NAME+"' target='_blank'><img width='43' height='43' src='"+val.IMG+"'/></a></dt><dd class='userleft_add'><p>&nbsp;</p><a href='"+val.homeurl+"'>"+val.buddys_data2+"</a></dd></dl><div class='coomm_r'><h4><a href='"+val.homeurl+"'>"+val.NAME+"</a></h4><p>"+val.CONTENTS+"</p><h5><span class='time-from'>"+val.TIME+"</span><span class='feed-set'><a id='comm_zan_"+val.tid+"' href=javascript:rreply_list_list_zan('"+val.tid+"','"+val.from+"');>赞</a> | <a id='comm_hf_"+val.tid+"' href=javascript:rreply_list_list_huifu('"+val.NAME+"','"+val.tid+"','"+val.from+"');>回复(<em>0</em>)</a></span></h5><div style='display:none;' id='comm_floor_replays_"+val.tid+"' class='comm-floor-replay'><div class='second_reply'><em class='corner'></em><div class='second_user'><a href='"+face_image.url+"'><img width='35px' height='35px' src='"+face_image.face+"'></a></div><form name='newsComm"+val.tid+"' action='http://t.caijing.com.cn/cjapi/cjpost?tid="+val.tid+"&postid="+articleId+"'><div class='second_text'><div class='reCom'><textarea maxlength='1000' id='content_"+val.tid+"' class='comBord'></textarea></div><div class='faceBtn'><div class='menu_bq'><a href='javascript:void(0)' onclick=topic_face(event,'showface_"+val.tid+"','content_"+val.tid+"','sina_face','faceBG_"+val.tid+"')><b class='menu_bqb_c'>表情</b></a><div id='showface_"+val.tid+"' class='showface' style='display:none;'><div class='menu_bqb_cb'><div style='float:left; '><a onclick=topic_face(event,'showface_"+val.tid+"','content_"+val.tid+"','sina_face','faceBG_"+val.tid+"');return false; class='sina_face bq_break' href='javascript:void(0);'>SINA表情</a> <a onclick=topic_face(event,'showface_"+val.tid+"','content_"+val.tid+"','topic_face','faceBG_"+val.tid+"');return false; class='topic_face' href='javascript:void(0);'>QQ表情</a> </div><div class='menu_bqb_c1'></div></div><div class='faceBG' id='faceBG_"+val.tid+"'></div></div></div><input type='button' class='button_issue2' onclick=submitComm('"+val.tid+"','content_"+val.tid+"','"+val.tid+"','') ><div id='button_num_"+val.tid+"' class='button_issue2_num'>还可以输入140字</div><div class='clear'></div></div></div></form><div class='clear'></div></div><div id='topic_view_comment_area_"+val.tid+"'class='second_pllist'></div></div></div><div class='clear'>&nbsp;</div></div>"+document.getElementById("oPingl").innerHTML;
			subText(140,'content_'+val.tid,'button_num_'+val.tid);
		}else{
			document.getElementById("topic_view_comment_area_"+showid).innerHTML ="<dl id='topic_list_dl_"+val.tid+"'><dt id='top"+val.tid+"'><a href='http://t.caijing.com.cn/index.php?mod="+val.NAME+"' target='_blank'><img width='35px' height='35px' src='"+val.IMG+"'></a></dt><dd><a href='"+val.homeurl+"' class='name-tip'>"+val.NAME+"</a>："+val.CONTENTS+"</dd><dd class='comingFrom'><div class='comingFrom_cont'><span class='comingFrom_laiy'>"+val.from_data+"</span><a href=javascript:rreply_list_huifu('"+showid+"','"+val.tid+"','"+val.NAME+"'); class='comingFrom_shuifu'>回复</a><span class='comingFrom_date'>"+val.TIME+"</span></div><form name='newsComm"+showid+"_"+val.tid+"' action='http://t.caijing.com.cn/cjapi/cjpost?tid="+val.tid+"&postid="+articleId+"'><div style='display:none;' id='comm_floor_replays_"+showid+"_"+val.tid+"'><div class='reCom'><textarea maxlength='1000' id='content_"+showid+"_"+val.tid+"' class='comBord'>@"+val.NAME+" </textarea></div><div class='faceBtn'><div class='menu_bq'><a href='javascript:void(0)' onclick=topic_face(event,'showface_"+showid+"_"+val.tid+"','content_"+showid+"_"+val.tid+"','sina_face','faceBG_"+showid+"_"+val.tid+"');><b class='menu_bqb_c'>表情</b></a><div id='showface_"+showid+"_"+val.tid+"' class='showface' style='display:none;'><div class='menu_bqb_cb'><div style='float:left; '><a onclick=topic_face(event,'showface_"+showid+"_"+val.tid+"','content_"+showid+"_"+val.tid+"','sina_face','faceBG_"+showid+"_"+val.tid+"');return false; class='sina_face bq_break' href='javascript:void(0);'>SINA表情</a> <a onclick=topic_face(event,'showface_"+showid+"_"+val.tid+"','content_"+showid+"_"+val.tid+"','topic_face','faceBG_"+showid+"_"+val.tid+"');return false; class='topic_face' href='javascript:void(0);'>QQ表情</a> </div><div class='menu_bqb_c1'></div></div><div class='faceBG' id='faceBG_"+showid+"_"+val.tid+"'></div></div></div><input type='button' class='button_issue2' onclick=submitComm('"+showid+"_"+val.tid+"','content_"+showid+"_"+val.tid+"','"+showid+"','') ><div id='button_num_"+showid+"_"+val.tid+"' class='button_issue2_num'>还可以输入140字</div><div class='clear'></div></div></div></form></dd><div class='clear'></div></dl>"+document.getElementById("topic_view_comment_area_"+showid).innerHTML;
			subText(140,'content_'+showid+"_"+val.tid,'button_num_'+showid+"_"+val.tid);
		}
		document.getElementById("content").value="说说你的看法：";
		});
	});
}

//---------------------快速登录框 Start--------------------------

function dlClose(wCloseId){
						
	var wClose = document.getElementById(wCloseId);
	wClose.onclick = function (){
		var removeDiv = document.getElementById("overDiv");
		if (removeDiv){document.body.removeChild(removeDiv);}
		$("#loginbox").hide();
		var anonyCh = document.getElementById("anonymous");
		anonyCh.checked = 'checked';
		$("#content").focus();
	}
}
function CheckLoginForm() {
	var userName = document.getElementById("username");
	var userPwd = document.getElementById("password");
	if(userName.value == ''|| userName.value == "请输入注册邮箱")
	{
		alert('请输入注册邮箱');
		userName.focus();
	}else if(userPwd != null && userPwd.value == ''){
		alert('密码不能为空');
	}else{
		var url= "http://t.caijing.com.cn/cjapi/checklogin?username="+$("#username").val()+"&password="+$("#password").val();
		$.getJSON(url+"&jsoncallback=?", function(data){
				var login = data.toString();
				if(login==1){
					mainLoginForm.submit();
					//window.location.reload();
				}else{
					$("#loginbox_title").html('<p>帐号或密码有误，请重新输入</p>');
				}
		});
	}
}
//---------------------快速登录框 End--------------------------

/* 新浪分享新版 */
function cjSina_share(){
var p_title = $("#cont_title").html();
var p_desc = $(".summary").html();
var con = cutstr('《'+p_title+'》-'+p_desc,240);
var share_content = con+'-@财经网';
var share_url = window.location.href;
var share_pic = $("meta[property='og:image']").attr("content");
var cjcmsid = $("meta[name='weibo:article:id']").attr("content");
if(share_pic==''){
		share_pic='http://tx2.cdn.caijing.com.cn/upload/article_share.jpg';
}
window.open("http://t.caijing.com.cn/cjshare/sina/?cjcmsid="+cjcmsid+"&share_content="+encodeURIComponent(share_content)+"&share_url="+encodeURIComponent(share_url)+"&share_pic="+encodeURIComponent(share_pic),"newwindow","height=416,width=724,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"); 

};

function cutstr(str,len)  
{
	var str_length = 0;
	var str_len = 0;
	str_cut = new String();
	str_len = str.length;
	for(var i = 0;i<str_len;i++)
	{
		a = str.charAt(i);
		str_length++;
		if(escape(a).length > 4)
		{//中文字符的长度经编码之后大于4
			str_length++;
		}
		str_cut = str_cut.concat(a);
		if(str_length>=len)
		{
			str_cut = str_cut.concat("...");
			return str_cut;
    }
  } 
	//如果给定字符串小于指定长度，则返回源字符串；  
  if(str_length<len)
  {
  	return  str;
  }
}

/* 新浪分享新版_图片 */
function cjSina_share_pic(){
var p_title = $("meta[property='og:title']").attr("content");
var p_desc = $("meta[property='og:description']").attr("content");
var con = cutstr('《'+p_title+'》-'+p_desc,240);
var share_content = con+'-@财经网';
var share_url = window.location.href;
var share_pic = $("meta[property='og:image']").attr("content");
var cjcmsid = $("meta[name='weibo:article:id']").attr("content");
if(share_pic==''){
		share_pic='http://tx2.cdn.caijing.com.cn/upload/article_share.jpg';
}
window.open("http://t.caijing.com.cn/cjshare/sina/?cjcmsid="+cjcmsid+"&share_content="+encodeURIComponent(share_content)+"&share_url="+encodeURIComponent(share_url)+"&share_pic="+encodeURIComponent(share_pic),"newwindow","height=416,width=724,toolbar =no,menubar=no,scrollbars=no,resizable=no,location=no,status=no"); 

};
function cutstr(str,len)  
{
	var str_length = 0;
	var str_len = 0;
	str_cut = new String();
	str_len = str.length;
	for(var i = 0;i<str_len;i++)
	{
		a = str.charAt(i);
		str_length++;
		if(escape(a).length > 4)
		{//中文字符的长度经编码之后大于4
			str_length++;
		}
		str_cut = str_cut.concat(a);
		if(str_length>=len)
		{
			str_cut = str_cut.concat("...");
			return str_cut;
    }
  } 

	//如果给定字符串小于指定长度，则返回源字符串；  
  if(str_length<len)
  {
  	return  str;
  }
}

