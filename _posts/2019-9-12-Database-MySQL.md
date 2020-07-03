---
layout:     post
title:      Database MySQL
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Database
---

# mysql 准备工作

bin 目录加入环境变量就可以不用切换目录了

## 初始化

初始化后会在根目录出现一个 data 文件夹初始化一些文件

```
cd /D "D:\Easy Love\mysql-8.0.16-winx64\bin"
mysqld --initialize-insecure
```

## 将 mysql 服务制作成 windows 服务

| 命令                                                    | 作用                       |
| ------------------------------------------------------- | -------------------------- |
| "D:\Easy Love\mysql-8.0.16-winx64\bin\mysqld" --install | 制作 mysql 的 windows 服务 |
| "D:\Easy Love\mysql-8.0.16-winx64\bin\mysqld" --remove  | 移除 mysql 的 windows 服务 |
| net start mysql                                         | 启动 mysql 服务            |
| net stop mysql                                          | 关闭 mysql 服务            |

## 服务端启动 mysql 服务

```
cd /D "D:\Easy Love\mysql-8.0.16-winx64\bin"
mysqld
```

## 客户端启动 mysql 连接 mysql 服务

密码为空直接回车即可

```
cd /D "D:\Easy Love\mysql-8.0.16-winx64\bin"
mysql -u root -p
```

# 数据库与数据表与字段的创建与删除

## 数据库

| 命令                      | 作用             |
| ------------------------- | ---------------- |
| create database 数据库名; | 创建数据库       |
| show databases;           | 查看有哪些数据库 |
| use 数据库名;             | 进入数据库       |

## 数据表

| 命令                                                      | 作用                   |
| --------------------------------------------------------- | ---------------------- |
| create table 表名(列名 类型 是否可空,列名 类型 是否可空); | 创建表，可以设置默认值 |
| show tables;                                              | 显示表                 |
| drop table 表名                                           | 删除表                 |

```
create table form(demo int not null default 233);
```

## 字段

| 命令                                      | 作用         |
| ----------------------------------------- | ------------ |
| alter table 表名 add 列名 类型;           | 添加字段     |
| alter table 表名 drop column 列名;        | 删除字段     |
| alter table 表名 modify column 列名 类型; | 修改字段类型 |
| desc 表名                                 | 查看字段     |

# 数据操作

## 增

| 命令                                                      | 作用                         |
| --------------------------------------------------------- | ---------------------------- |
| insert into 表名(列名,列名,) values(值,值);               | 插入一个或多个值             |
| insert into 表名(列名,列名,) select(列名,列名) from 表名; | 复制表中所有数据插入另一个表 |

## 删

| 命令                                       | 作用             |
| ------------------------------------------ | ---------------- |
| delete from 表名                           | 清空表           |
| delete from 表名 where 列名=值 and 列名=值 | 清空所有指定的值 |

## 改

## 查

| 命令               | 作用             |
| ------------------ | ---------------- |
| select * from 表名 | 查看表中所有内容 |

# 数据类型

# 参考

https://www.cnblogs.com/wupeiqi/articles/5713315.html
