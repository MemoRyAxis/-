function kai_fengji(a, b) {
    $('#listhqq0').hide();
    $('#listhqq1').hide();
    $('#listhqq2').hide();
    $('#listhqq3').hide();
    $('#listhqq' + a).show();
    $('#hq1ul li').removeClass("over");
    $('#' + b).addClass("over")
}
function jj_gp(a, b) {
    $('#' + a).addClass("over");
    $('#' + a + 'ul').show();
    $('#' + b).removeClass("over");
    $('#' + b + 'ul').hide();
    $('#listhqq0').show();
    $('#listhqq1').hide();
    $('#hq0ul li').removeClass("over");
    $('#hq1ul li').removeClass("over");
    if (a == 'hq0') {
        switch_kline(1);
        $('#search_ingp').show();
        $('#search_injj').hide()
    } else {
        $('#search_injj').show();
        $('#search_ingp').hide();
        switch_kline2(4)
    }
}
function getMovie(a) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[a]
    } else {
        if (document[a].length != undefined) {
            return document[a][0]
        }
        return document[a]
    }
}
function switch_kline(a) {
    $('#listhqq2').hide();
    $('#listhqq3').hide();
    var b = new Array('', '1A0001', '399001', 'HSI', '', '399006');
    for (var i = 1; i < 6; i++) {
        if (i == a) {
            document.getElementById('hqq' + i).className = "over";
            getMovie('indexflash').sendCode(b[i])
        } else {
            document.getElementById('hqq' + i).className = ""
        }
    }
}
function switch_kline2(a) {
    $('#listhqq2').hide();
    $('#listhqq3').hide();
    $('#hq1ul li').removeClass("over");
    var b = new Array('', '1A0001', '399001', 'HSI', '1B0008', '399305');
    for (var i = 4; i < 6; i++) {
        if (i == a) {
            document.getElementById('jj' + i).className = "over";
            getMovie('indexflash').sendCode(b[i])
        } else {
            document.getElementById('jj' + i).className = ""
        }
    }
}
function changehqcode(a) {
    getMovie("indexflash").sendCode(a)
}
function changestocks(a) {
    window.open('http://stock.caijing.com.cn/stockdata/html/' + a + '.html')
}
function changehqcode() {
    var a = $('#hqstock').val().split(" ");
    changestocks(a[0]);
    return false
}
function changehqcode1() {
    var a = $('#hqstock1').val().split(" ");
    changestocks(a[0]);
    return false
}
function changejjcode() {
    var a = $('#hqjij').val().split(" ")
}
function stock_hidden(a, b, c) {
    if (a == 0) {
        document.getElementById("listhqq0").style.display = "block";
        document.getElementById("listhqq1").style.display = "none";
        document.getElementById("hqq4").className = c
    }
    if (a == 1) {
        document.getElementById("listhqq0").style.display = "none";
        document.getElementById("listhqq1").style.display = "block";
        for (var i = 1; i < 4; i++) {
            if (document.getElementById("hqq" + i)) document.getElementById("hqq" + i).className = c
        }
        document.getElementById("hqq4").className = b
    }
}
function mk_hidden(a, b, c, d, e) {
    for (var i = 0; i <= c; i++) {
        if (document.getElementById(a + i)) document.getElementById(a + i).className = e;
        if (document.getElementById("list" + a + i)) document.getElementById("list" + a + i).style.display = "none"
    }
    if (b >= 0 && b <= c) {
        if (document.getElementById(a + b)) document.getElementById(a + b).className = d;
        if (document.getElementById("list" + a + b)) document.getElementById("list" + a + b).style.display = "block"
    }
}