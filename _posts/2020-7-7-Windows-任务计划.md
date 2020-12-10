---
layout:  post
title:   Windows 任务计划
date:    2020-7-7
author:  Tangle
catalog: true
tags:
    - Windows
---

# 锁屏

0. 首先创建一个 bat 锁屏脚本
    ```
    rundll32.exe user32.dll,LockWorkStation
    ```
0. 打开控制面板切换大图标选择管理工具 — 任务计划程序 — 创建任务
0. 填写好名称后切换操作 — 新建
0. 填写要执行的脚本，可以浏览选择
0. 切换到触发器设置启动时间
