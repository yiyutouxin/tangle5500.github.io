---
layout:     post
title:      Jekyll Gitee
subtitle:
date:       2020-7-27
author:     Tangle
catalog: true
mathjax: false
tags:
    - Jekyll
---

0. 导入已有仓库
    ```
    https://github.com/tangle5500/tangle5500.github.io.git
    ```
0. 管理 — 基本设置 — 仓库名称 — 改成 **username.gitee.io**
0. _config.yml — baseurl — 改成 **/username.gitee.io**
0. _includes — head.html — 注释 lock
0. 服务 — Gitee Pages
0. **部署分支**选择 **master**
0. 勾选**强制使用 HPPTS**
0. 启动
