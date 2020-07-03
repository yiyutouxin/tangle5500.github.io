---
layout:     post
title:      Python Access
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

# pywin32

| 语法                                                         | 作用           |
| ------------------------------------------------------------ | -------------- |
| conn = win32com.client.Dispatch(r"ADODB.Connection")<br>DSN = 'PROVIDER = Microsoft.Jet.OLEDB.4.0;DATA SOURCE = test.mdb'<br>conn.Open(DSN) | 连接数据库     |
| rs = win32com.client.Dispatch(r'ADODB.Recordset')<br>rs_name = '表名'<br>rs.Open('[' + rs_name + ']', conn, 1, 3) | 打开一个记录集 |
| conn.Close()                                                 | 关闭数据库     |

```
import win32com.client

conn = win32com.client.Dispatch(r"ADODB.Connection")
DSN = 'PROVIDER = Microsoft.Jet.OLEDB.4.0;DATA SOURCE = C:\\Users\\Easy Love\\Desktop\\test.mdb'
conn.Open(DSN)

rs = win32com.client.Dispatch(r'ADODB.Recordset')
rs_name = 'test'
rs.Open('[' + rs_name + ']', conn, 1, 3)

conn.Close()
```

## 增

通过索引增加纪录

| 语法                             | 作用                                |
| -------------------------------- | ----------------------------------- |
| rs.AddNew()                      | 添加一条新纪录                      |
| rs.Fields.Item(0).Value = "data" | 设置新记录的第一个值，0 代表第 1 列 |
| rs.Update()                      | 更新                                |

SQL 语言

| 语法                                                         |
| ------------------------------------------------------------ |
| sql_statement = "Insert INTO [表名] ([列名],[列名]) VALUES ('data1', 'data2')" |
| conn.Execute(sql_statement)                                  |

## 删

SQL 语言

## 改

SQL 语言

## 查

| 语法              | 返回值 | 作用             |
| ----------------- | ------ | ---------------- |
| rs.Fields.Count   | int    | 返回一共有多少列 |
| rs.EOF            | 布尔值 |                  |
| rs.MoveFirst()    |        | 光标移到首条记录 |
| rs.Fields[0].Name |        | 根据索引查列名   |

```python
rs.MoveFirst()  #光标移到首条记录
count = 0
while True:
    if rs.EOF:
        break
    else:
        for i in range(rs.Fields.Count):
            #字段名：字段内容
            print(rs.Fields[i].Name, "：", rs.Fields[i].Value)
        count += 1
    rs.MoveNext()
```

根据索引察看数据

```python
# 第 1 列第 1 个值
print(rs.Fields[0].Value)
rs.MoveNext()
# 第 1 列第 2 个值
print(rs.Fields[0].Value)
rs.MoveNext()
```


## 详解

| 语法                    | 返回值 | 作用                                 |
| ----------------------- | ------ | ------------------------------------ |
| rs.MoveFirst()          |        | 第一个                               |
| rs.MoveLast()           |        | 最后一个                             |
| rs.MoveNext()           |        | 下一个                               |
| rs.MovePrevious()       |        | 上一个                               |
| rs.absoluteposition = N |        | 将记录指针移到数据表第 N 行          |
| rs.absolutepage = N     |        | 将记录指针移到第 N 页的第一行        |
| rs.pagesize = N         |        | 设置每页为 N 条记录                  |
| rs.pagecount            |        | 根据 pagesize 的设置返回总页数       |
| rs.recordcount          |        | 返回记录总数                         |
| rs.bof                  | 布尔   | 返回记录指针是否超出数据表首端       |
| rs.eof                  | 布尔   | 返回记录指针是否超出数据表末端       |
| rs.delete               |        | 删除当前记录，但记录指针不会向下移动 |
| rs.addnew               |        | 添加记录到数据表末端                 |
| rs.update               |        | 更新数据表记录                       |

# pypyodbc

| 语法                                                         | 作用           |
| ------------------------------------------------------------ | -------------- |
| str = 'Driver={Microsoft Access Driver (*.mdb)};PWD' + '密码' + ";DBQ=" + 'C:\\test.mdb'<br/>数据链接 = pypyodbc.win_connect_mdb(str) | 建立数据库链接 |
| cur = conn.cursor()                                          | 创建游标       |
| cur.execute(sql 语句)                                        | 执行 sql 语句  |
