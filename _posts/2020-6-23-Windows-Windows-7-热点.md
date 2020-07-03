---
layout:     post
title:      Windows 7 热点
subtitle:   
date:       2020-6-23
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Windows
---

# 开启

0. **以管理员身份运行：**cmd
0. 执行 **netsh wlan show drivers** 查看 **支持的承载网络**
0. netsh wlan set hostednetwork mode=allow ssid=纠结 key=password
0. 在已经连接网络的适配器属性 — 共享 — 勾选**允许其他网络用户通过次计算机的 Internet 连接来连接**
0. **家庭网络连接：**选择刚创建好的网络适配器
0. 勾选**允许其他网络用户控制或禁用共享的 Internet 连接**
0. netsh wlan start hostednetwork

# 关闭

0. **以管理员身份运行：**cmd
0. **停止：**netsh wlan stop hostednetwork 
0. **禁用：**netsh wlan set hostednetwork mode=disallow
