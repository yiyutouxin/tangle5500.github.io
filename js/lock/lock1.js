checkCookie()

// 获取 cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}

// 检验 cookie
function checkCookie() {
    var user=getCookie("username"); 
    if (user != "00163f539e873d17654dbb9a182ac8ed") {
        // 阻塞
        while(true){}
    }
}
