String.prototype.startWith=function(str){
if(str==null||str==""||this.length==0||str.length>this.length)
  return false;
if(this.substr(0,str.length)==str)
  return true;
else
  return false;
return true;
}
var browser=function(){
	var u = navigator.userAgent, app = navigator.appVersion;
	var shell=function(){return {//������汾��Ϣ
		trident: u.indexOf('Trident/') > -1, //IE�ں�
		presto: u.indexOf('Presto/') > -1, //opera�ں�
		webKit: u.indexOf('AppleWebKit/') > -1 || u.indexOf('UCWEB') > -1, //ƻ�����ȸ��ںˣ�UC���������Ҳ֧��webkit��
		gecko: u.indexOf('Gecko/') > -1 && u.indexOf('KHTML') == -1, //����ں�
		mobile: !!u.match(/AppleWebKit.*Mobile.*|UCWEB/), //�Ƿ�Ϊ�ƶ��ն�
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X|iOS/), //ios�ն�
		android: /Android|Linux.*UCWEB/i.test(u), //android�ն�
		iPhone: u.indexOf('iPhone') > -1, //�Ƿ�ΪiPhone
		iPad: u.indexOf('iPad') > -1, //�Ƿ�iPad
		webApp: u.indexOf('Safari/') == -1, //�Ƿ�webӦ�ó���û��ͷ����ײ�
		UC: u.indexOf('UC') > -1
	};
	}();
	if(shell.android || shell.iPhone || shell.UC){return true;}else{return false;}
}
function JumpLink(){
	var s=browser();
	var str = window.location.href;// ��ȡҳ���href 
	var re=/\/\/(.+)\.caijing.+\/(.+\-.+\-.+\/.+)\.html/; //�б�ҳƥ��
	var obj=str.match(re);
	var re2 =/\/\/(.+)\.caijing/; //Ƶ����ҳ��
	var obj2 =str.match(re2); 
	var mob_topic = document.getElementById("mobTopic");
	function delete_confirm(){
		if(confirm("��ҳ��û���ֻ��棬���ȷ�ϼ������ʣ�ȡ���򷵻��ֻ���ƾ�����ҳ��")){
			 return true;
		  }else{
			 window.location="http://m.caijing.com.cn/";
			// return false;
		 }
	};
	//alert("��һ����"+obj[1]+"\n�ڶ�����"+obj[2]);
	if(s){
        //�������õ��ֻ����cookies ��ת
        if(getCookie("returnToMobile")!=null && getCookie("returnToMobile")!="" ){
          if(mob_topic){
					delete_confirm();
		  }else if (obj==null){
					if (obj2[1]=='mobile' || obj2[1]=='corp' || obj2[1]=='conference' || obj2[1]=='auto' || obj2[1]=='photos' || obj2[1]=='t'){
						//return;
						delete_confirm();
					}else{
						window.location="http://m.caijing.com.cn/channel/"+obj2[1]+".html";
					}
		 }else{
			var startstr = str.lastIndexOf("-");
			if(str.startWith("http://blog.caijing.com.cn")){
			  var itemid = str.substring(startstr+1,str.length-9);
			  window.location="http://t.caijing.com.cn/cjapi/mjblog?itemid="+itemid;
			}
		 	window.location="http://m.caijing.com.cn/"+obj[1]+"/"+obj[2]+".html";
		 };

		        return;
		}

		//�ͻ������ֻ�,�Ƿ����ù�cookie
		if(getCookie("returnToCaijing")==null || getCookie("returnToCaijing")==""){
		   if(confirm("������á������ֻ���ҳ�棬�����ȡ��������pc��")){
			    //����ʱ��7��
			    setCookie("returnToMobile",7);
			    if(mob_topic){
					delete_confirm();
				}else if (obj==null){
					if (obj2[1]=='mobile' || obj2[1]=='corp' || obj2[1]=='conference' || obj2[1]=='auto' || obj2[1]=='photos' || obj2[1]=='t'){
						//return;
						delete_confirm();
					}else{
						window.location="http://m.caijing.com.cn/channel/"+obj2[1]+".html";
					}
				}else{
					    var startstr = str.lastIndexOf("-");
					 if(str.startWith("http://blog.caijing.com.cn")){
						var itemid = str.substring(startstr+1,str.length-9);
						window.location="http://t.caijing.com.cn/cjapi/mjblog?itemid="+itemid;
			         }
						window.location="http://m.caijing.com.cn/"+obj[1]+"/"+obj[2]+".html";
				};

				
		   }else{
			    //����ʱ��7��
				setCookie("returnToCaijing",7);
			    return ;
				   
		   }
		} 
	}
}
JumpLink();urnToCaijing",7);
			    return ;
				   
		   }
		} 
	}
}
JumpLink();