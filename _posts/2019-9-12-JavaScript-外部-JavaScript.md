---
layout:     post
title:      JavaScript 外部 javascript
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

| 语法                                | 作用         |
| ----------------------------------- | ------------ |
| \<script src="script.js">\</script> | 引用外部文件 |

```javascript
<script src="script.js"></script>
```

# script.js

1、外部脚本不能包含 script 标签

2、在函数内部执行 decument.write() 会覆盖文档

```javascript
function myFunction()
{
    document.getElementById("id").innerHTML="文本";
}
```
