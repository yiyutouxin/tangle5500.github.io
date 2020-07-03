---
layout:     post
title:      Datebase SQL Server 2008
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Database
---

1、SQL 语言，识别的指令，执行相应的操作并且给程序提供数据

2、结构化查询语言 T-SQL

3、SQL 的组成部分，数据操作语言，数据定义语言，数据查询语言，数据控制语言。

| 语法                                                         | 作用                            |
| ------------------------------------------------------------ | ------------------------------- |
| insert into 表名(列名,列名,列名)<br>values('数据','数据','数据') | 为列添加数据                    |
| use 数据库名<br>update 表名<br>set 列名 = 列名 + 2           | 整列数据都 + 2                  |
| use 数据库名<br>delete from 表名<br>where 列名 = 87          | 删除列中的 87 值                |
| use 数据库名<br>go<br>select * from 表名                     | 查询指定表中的数据              |
| use 数据库名<br>go<br>select 列名,列名,列名<br>from 表名<br>where 列名 = '数据' | 利用某列中的数据查询行的数据    |
| use 数据库名<br>go<br>select * from 表名 where 列名 like = '数据%' | 查询所有带有数据中的数据        |
| use 数据库名<br/>go<br>select * from 表名 where 列名 between 70 and 90 | 查询列中 70-90 的数据           |
| select AVG(表名) AS 平均值,select MAX(表名) AS 最大值 from 表名 where 列名 >= 60 | 列出某列 >= 60 的平均值和最大值 |
| select 列名,AVG(表名) AS 平均值 from 表名 group by 列名1,列名2 |                                 |
# 删

Access

| 语法               | 作用             |
| ------------------ | ---------------- |
| "delete from 表名" | 清空表内所有数据 |

# 变量

保留字函数内使用变量

```
demo = 233
Values(' " + demo + " ')
```
