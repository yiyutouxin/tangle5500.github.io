---
layout:     post
title:      JavaScript Cookie
subtitle:   
date:       2019-11-11
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

# 设置 cookie

```javascript
<script>
	// 设置 cookie
	function setCookie(cname,cvalue,exdays){
		var d = new Date();
		d.setTime(d.getTime()+(exdays*24*60*60*1000));
		var expires = "expires="+d.toGMTString();
		document.cookie = cname+"="+cvalue+"; "+expires;
	}
	setCookie("username","00163f539e873d17654dbb9a182ac8ed",30);
	window.location.href = "https://jiujie.gq/";
</script>
```

## 指定

```js
<script>
    function SetCookie(name, value) {
        var str = name + "=" + escape(value) + ";domain=www.runoob.com;path=/"; // Domain
        var date = new Date();
        date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); // 设置 date 为当前时间加一年
        str += ";expires=" + date.toGMTString();
        document.cookie = str;
    }
	SetCookie("username","tangle")
</script>
```

# 获取 cookie

```js
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
    }
    return "";
}
```

# 检验 cookie

```js
function checkCookie() {
    var user=getCookie("username"); 
    if (user != "00163f539e873d17654dbb9a182ac8ed") {
        // 跳转到百度
        window.location.href = "http://www.4399.com/";
    }
}
```
