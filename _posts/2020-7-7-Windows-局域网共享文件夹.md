---
layout:     post
title:      Windows 局域网共享文件夹
subtitle:   
date:       2020-7-7
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Windows
---

# 局域网共享文件夹

1、打开控制面板 — 网络和共享中心 — 更改高级共享设置 — 家庭或工作/公用 — 密码保护的共享 — 关闭密码保护共享

2、打开控制面板 — 网络和共享中心 — 更改高级共享设置 — 家庭或工作/公用 — 文件和打印机共享 — 启用文件和打印机共享

2、选择需要共享的文件夹右键 — 属性 — 共享

3、在此选项卡选择共享并添加 Everyone 用户然后共享

4、在另一台电脑上通过 IP 访问

5、映射网络驱动器

```
\\192.168.1.233\demo
```
6、或者使用命令拷贝

```
net use \\192.168.1.11 "密码" /user:"用户名"
copy \\192.168.1.11\demo\demo.xls F:\
```
