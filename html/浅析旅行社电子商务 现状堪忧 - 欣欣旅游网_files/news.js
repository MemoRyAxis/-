function gt(o){return document.getElementById(o);}
function nav_on(num){if(curtype=gt("nav_"+num)){curtype.className='on';if(num!='home'){if(gt("nav_home")) gt("nav_home").className='';}}}
function sel_tag(obj,num,no){if(!no)no=2;var endi=1+no;for(i=1;i<endi;i++){if(i==num){gt(obj+'_'+i).className='on';gt(obj+'_content_'+i).style.display='block';}else{gt(obj+'_'+i).className='off';gt(obj+'_content_'+i).style.display='none';}}}
