---
layout:     post
title:      Windows 任务计划
date:       2019-7-7
author:     Tangle
catalog: true
tags:
    - Windows
---

# 计划任务

## 锁屏

1、首先创建一个 bat 锁屏脚本

```
rundll32.exe user32.dll,LockWorkStation
```

2、打开控制面板切换大图标选择管理工具 — 任务计划程序 — 创建任务

3、填写好名称后切换操作 — 新建

5、填写要执行的脚本，可以浏览选择

6、切换到触发器设置启动时间
