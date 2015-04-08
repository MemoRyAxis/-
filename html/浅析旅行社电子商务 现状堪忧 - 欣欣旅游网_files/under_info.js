document.write('<div id="fu"><a href="http://www.cncn.com/corp/aboutus.html" target="_blank">关于欣欣</a> | <a href="http://www.cncn.com/corp/partner.html" target="_blank">合作伙伴</a> | <a href="http://www.cncn.com/corp/declare.html" target="_blank">免责声明</a>');
if (typeof(c) == "undefined") {
    document.write(' | <a href="http://www.cncn.com/corp/contact.html">联系欣欣</a>');
    document.write(' | <a href="http://www.cncn.com/link.htm">友情链接</a>');
} else {
    document.write(' | <a href="http://www.cncn.net/zs" target="_blank">旅行社加盟</a>');    
}
document.write(' | <a href="http://weibo.com/cncncom" target="_blank"><img src="http://s.cncnimg.cn/images/shuqian/sina.png">欣欣微博</a></div>');
document.write('<div id="ft"><a href="http://www.cncn.com/">欣欣旅游网 CNCN.com</a></div>');

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-24028018-3']);
_gaq.push(['_setDomainName', '.cncn.com']);
_gaq.push(['_setAllowAnchor', true]);
_gaq.push(['_addOrganic', 'baidu', 'word']);
_gaq.push(['_addOrganic', 'sogou', 'query']);
_gaq.push(['_addOrganic', '360.cn', 'q']);
_gaq.push(['_addOrganic', 'so.com', 'q']);
_gaq.push(['_trackPageview']);

(function() {
var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

document.write('<div id="cnzz_code"><script src="http://s140.cnzz.com/stat.php?id=1089612&web_id=1089612&show=pic"></script></div>');