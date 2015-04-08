function doZoom(size){
	var obj=$("#content");
	obj.style.fontSize=size+"px";
}

var isReady = true;
function doSaveAs(){
	if (document.execCommand){
		if (isReady){document.execCommand("SaveAs");}
	}else{
		alert('Feature available only in Internet Exlorer 4.0 and later.');
	}
}

//document.body.oncopy = function () {
//   setTimeout( function () {
//     var text = clipboardData.getData("text");
//     if (text) {
//       text = text + "\r\n ---★ 本文转摘自『欣欣旅游网』→ "+location.href; 
//       clipboardData.setData("text", text);
//    }
//   }, 100 ) 
//}


function ResizeImage(){     
    var imageArray = $("show2 img");    
    var totalimage = imageArray.length;
    for(var i=0;i<totalimage;i++)    
    {   
       if (imageArray[i].width>580) {   
          var srcWidth  = imageArray[i].width;   
          var srcHeight = imageArray[i].height;   
          imageArray[i].style.width="580px";    
          imageArray[i].style.height=(srcHeight*imageArray[i].width)/srcWidth;    
       }     
        
    }  
    
    var popArray = $("show2 span");
    var totalpop = popArray.length;
    
    for(var i=0;i<totalpop;i++){
        if(popArray[i].className == 'gPopN'){
            s = popArray[i];
            s.onmouseenter=function(){this.className='gPopB';};
            s.onmouseleave=function(){this.className='gPopN';};               
        }
    }     
}

