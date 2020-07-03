---
layout:     post
title:      Android apk 安装目录
subtitle:   
date:       2020-6-22
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Android
---

# apk 安装目录

```
system/app        # 系统应用
data/app          # 用户应用
data/data         # 用户数据
data/dalvik-cache # 用户应用虚拟机文件
```

# 查找应用对应的虚拟机文件

0. 进入 data/dalvik-cache/arm64 文件夹按日期排序方式
0. 比对 data/app 目录下对应的日期
