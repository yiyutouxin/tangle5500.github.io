---
layout:     post
title:      Database 安装
date:       2019-9-12
author:     Tangle
catalog: true
tags:
    - Database
---

#  SQL server 2008 安装

0. 运行根目录下的 setup.exe ，如果没有 Microsoft.net framework 和 windows installer 组件会提示安装。
0. 安装好 Microsoft.net framework 和 windows installer 组件后重新启动计算机。
0. 重启电脑后运行 setup.exe 点击左侧的安装，然后选择全新 SQL server 独立安装或向现有安装添加功能
0. 输入产品密钥 R88PF-GMCFT-KM2KR-4R7GB-43K4B
    ```
    开发版 PTTFM-X467G-P7RH2-3Q6CG-4DMYB
    企业版 JD8Y6-HQG69-P9H84-XDTPG-34MBB
    标准版 FXHQY-JQF42-68VVV-PYVVR-RY3BB
    ```
0. 选择 SQL server 功能安装，全选
0. 选择默认实例
0. 服务器配置，点击对所有 SQL server 服务使用相同账户，在账户名的下拉菜单中选择 NT AUTHORITY\SYSTEM ，密码为空。
0. 选择混合模式，设置管理员密码，点击添加当前用户。
0. Analysis Services 配置点击添加当前用户
0. 选择安装本机模式默认配置
0. 安装，等待安装完成后，开始菜单中会出现 SQL server 2008 的可执行文件

# mysql 安装

0. <http://c.biancheng.net/view/2391.html>
0. <https://dev.mysql.com/downloads/mysql/>
0. 点击 **Looking for previous GA versions?**
    ```
    5.7.32               # Select Version:
    Microsoft Windows    # Select Operating System:
    Windows (x86,64-bit) # Select OS Version:
    ZIP Archive          # Other Downloads:
    ```
## 配置

0. 将 bin 添加到环境变量
0. 在根目录创建配置文件 `my.ini`
    ```
    [mysql]
    # 设置mysql客户端默认字符集
    default-character-set=utf8
    [mysqld]
    # 设置3306端口
    port=3306
    # 设置mysql的安装目录
    basedir=D:\mysql-5.7.20-winx64
    # 设置mysql数据库的数据的存放目录
    datadir=D:\mysq1-5.7.20-winx64\data
    # 允许最大连接数
    max_connections=200
    # 服务端使用的字符集默认为8比特编码的latin1字符集
    character-set-server=utf8
    # 创建新表时将使用的默认存储引擎
    default-storage-engine=INNODB
    ```
0. 安装服务
    ```
    cd /d C:\mysql-5.7.32-winx64\bin          # 必须切换到 bin 目录安装服务
    mysqld -remove                            # 删除服务
    mysqld -install                           # 安装服务
    mysqld --initialize-insecure --user=mysql # 初始化
    net start mysql                           # 启动服务
    net stop mysql                            # 关闭服务
    ```
0. 初始化后会在目录下生成 data 文件夹
0. 设置登陆密码
    ```
    mysqladmin -u root -p password
    ```
0. 登陆后测试
    ```
    show databases; # 查看所有数据库
    ```

## ERROR

0. 浏览 <https://www.microsoft.com/zh-CN/download/details.aspx?id=40784>
0. 下载
0. `vcredist_x64.exe`
0. Next
