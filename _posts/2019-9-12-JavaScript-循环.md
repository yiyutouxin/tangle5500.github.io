---
layout:     post
title:      JavaScript 循环
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

# for 循环

| 语法                    |
| ----------------------- |
| for (开始;条件;结束) {} |

```javascript
var list = [1,2,3,4];
for (var i=0;i<list.length;i++){
    document.write(list[i] + "<br>");
}
```

```javascript
var list = [1,2,3]
for (i in list){
    document.write(list[i] + "<br>");
}
```
# while 循环

```javascript
while (1)
{
    document.write(Date());
}
```

```javascript
do
{
    document.write(Date());
}
while (1);
```
