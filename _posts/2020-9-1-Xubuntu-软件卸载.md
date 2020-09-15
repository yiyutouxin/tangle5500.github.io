---
layout:     post
title:      Xubuntu 软件卸载
date:       2020-9-1
author:     Tangle
catalog: true
tags:
    - Xubuntu
---

```
apt-get remove vim         # 卸载程序保留配置文件和依赖包
apt-get purge vim          # 卸载程序和配置文件
apt-get remove --purge vim # 卸载程序和配置文件
apt-get autoremove vim     # 智能卸载无用的依赖包
apt-get -s remove vim      # 模拟卸载防止卸错
```
