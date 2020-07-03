---
layout:     post
title:      Android Termux
subtitle:   
date:       2019-10-6
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Android
---

# 设置软键盘

编辑下面文件，如果没有创建一个

```shell
cd ~
mkdir .termux
vim .termux/termux.properties
```

写入如下内容

```text
extra-keys = [['TAB','ESC','CTRL','ALT','|','[',']','HOME','UP','END'],['=','/','-',':','"','(',')','LEFT','DOWN','RIGHT'],['%','!','#','^','@','{','}','<','*','>']]
```
