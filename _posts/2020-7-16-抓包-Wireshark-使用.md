---
layout:     post
title:      抓包 Wireshark 使用
subtitle:   
date:       2020-7-16
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - 抓包
---

# 过滤器

```
http
dns
http.request.method==POST
```

# http

0. 打开**Wireshark**
0. 打开**http://www.4399.com/**
0. 查看**HTML Form URL Encoded: application/x-www-form-urlencoded**
