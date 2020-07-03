---
layout:     post
title:      Datebase 安装
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Database
---

#  SQL server 2008 安装

1、运行根目录下的 setup.exe ，如果没有 Microsoft.net framework 和 windows installer 组件会提示安装。

2、安装好 Microsoft.net framework 和 windows installer 组件后重新启动计算机。

3、重启电脑后运行 setup.exe 点击左侧的安装，然后选择全新 SQL server 独立安装或向现有安装添加功能

4、输入产品密钥 R88PF-GMCFT-KM2KR-4R7GB-43K4B

```
开发版 PTTFM-X467G-P7RH2-3Q6CG-4DMYB
企业版 JD8Y6-HQG69-P9H84-XDTPG-34MBB
标准版 FXHQY-JQF42-68VVV-PYVVR-RY3BB
```

5、选择 SQL server 功能安装，全选

6、选择默认实例

7、服务器配置，点击对所有 SQL server 服务使用相同账户，在账户名的下拉菜单中选择 NT AUTHORITY\SYSTEM ，密码为空。

8、选择混合模式，设置管理员密码，点击添加当前用户。

9、Analysis Services 配置点击添加当前用户

10、选择安装本机模式默认配置

11、安装，等待安装完成后，开始菜单中会出现 SQL server 2008 的可执行文件

# mysql 安装

1、打开 https://dev.mysql.com/downloads/mysql/

2、选择好系统和版本下载，有安装版和压缩版，下载压缩版

3、翻译页面会有寻找之前的GA版本？可以下载到 32位系统的

4、压缩包解压到自己要安装的目录
