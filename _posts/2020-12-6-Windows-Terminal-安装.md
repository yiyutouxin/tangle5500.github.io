---
layout:  post
title:   Windows Terminal 安装
date:    2020-12-6
author:  Tangle
catalog: true
tags:
    - Windows Terminal
---

<https://github.com/microsoft/terminal>

# 安装

0. 控制面板 — 程序和功能 — 启用或关闭 Windows 功能 — 勾选**适用于 Linux 的 Windows 子系统**
0. Microsoft Store
0. 安装 `Windows Terminal`
0. 安装 `Ubuntu`
0. 用户名不能有大写
0. 映射驱动器
    ```
    cd /home
    explorer.exe .

    \\wsl$\Ubuntu\home # 映色驱动器文件夹
    ```

## 更换源

```
cd /etc/apt
sudo cp sources.list sources.list_233
sudo vim sources.list
```

```
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
deb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
```

# 默认启动

```
"defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}", # 修改前
"defaultProfile": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}", # 修改后
```
