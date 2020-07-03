---
layout:     post
title:      iFIX 连接 SQL Server 2008
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - iFIX
---

# 连接服务器

首先启动 windows 的 SQL server (MSSQLSERVER)

然后打开软件连接数据库下面有两种连接方式

1、windows 身份验证，服务器名称为本机用户名下拉可选择。

2、SQL server 身份验证，输入登录名和密码，登录名为 sa。

# 新建数据库

1、在对象管理器中右键数据库菜单中点击新建数据库

2、填写数据库名称，设置初始值大小，也就是数据库初始大小

# 创建表

在自己创建的数据库中右键表新建表

设置好后 Ctrl + s 保存

创建好的表编辑前 200 行为添加数据，选择前 1000 行为查看数据。

# 转移数据库

1、复制数据库

用户数据库 — 任务 — 分离 — 删除连接

然后到数据库目录中复制数据库的两个文件即可(数据库文件和日志文件)

2、附加数据库

数据库 — 附加 — 添加

# 其他数据库名称

oracle

mysql

access

db2
