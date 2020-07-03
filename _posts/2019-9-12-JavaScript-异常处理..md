---
layout:     post
title:      JavaScript 异常处理
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

| 语法           | 作用                 |
| -------------- | -------------------- |
| try {}         | 正常执行             |
| throw "error"  | 自定义错误           |
| catch (err) {} | 异常后捕获异常并执行 |
| finally {}     | 是否异常都要执行     |

``` javascript
try {
    age = 233; delete age; document.write(age);
}
catch(err) {
    document.write(err);
}
finally {
    document.write(233);
}
```

```javascript
try { 
    if (666 > 233) throw "error";
}
catch(err) {
    document.write(err);
}
```
