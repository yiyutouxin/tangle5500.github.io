---
layout:     post
title:      Flask HTTP 方法
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Flask
---

| 方法   | 作用                                                         |
| ------ | ------------------------------------------------------------ |
| GET    | 以未加密的形式将数据发送到服务器。最常见的方法               |
| HEAD   | 和GET方法相同，但没有响应体                                  |
| POST   | 用于将HTML表单数据发送到服务器。POST方法接收的数据不由服务器缓存 |
| PUT    | 用上传的内容替换目标资源的所有当前表示                       |
| DELETE | 删除由URL给出的目标资源的所有当前表示                        |

``` html
<!-- login.html -->
<html>
    <body>
        <form action = "http://localhost:5000/login" method = "post">
            <p>Enter Name:</p>
            <p><input type = "text" name = "nm" /></p>
            <p><input type = "submit" value = "submit" /></p>
        </form>
    </body>
</html>
```
