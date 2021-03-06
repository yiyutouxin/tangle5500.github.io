---
layout:  post
title:   JavaScript 常用
date:    2019-9-26
author:  Tangle
catalog: true
tags:
    - JavaScript
---

```
// 注释                                         # 单行注释
/* 注释 */                                      # 多行注释
typeof 变量                                     # 查看变量类型
document.write(Date());                         # 写标签
window.alert(233+666)                           # 警告弹窗
console.log();                                  # 控制台
debugger;                                       # 断点
"use strict";                                   # 严格模式.
document.getElementById("id").innerHTML=Date(); # 修改元素
```

# 验证浏览器是否支持 javascript 脚本

如果不支持将不输出 233

```
// --> # 避免 javascript 执行 --> 标签
```

```
<script>
<!--
document.write(233);
//-->
</script>
```

# 延时

```
setTimeout("函数名()",600); // 延时执行函数

或

setTimeout(function (){ // 延时执行函数
    href()
}, 3000);
```

# 随机数

随机打开一个网站

```
function href() {
    num = Math.floor(Math.random()*2);
    var dict = {
        0 : "http://www.4399.com/",
        1 : "http://www.7k7k.com/",
    };
    window.location.href = dict[num];
}
```

# 注意

- javascript 区分大小写

- javascript 使用 unicode 字符集

- javascript 会忽略空格
