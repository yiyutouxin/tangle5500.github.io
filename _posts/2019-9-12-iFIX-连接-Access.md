---
layout:     post
title:      iFIX 连接 Access
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - iFIX
---

# 创建 Access 数据库

控制面板 — 管理工具 — ODBC 数据源 — 系统 DSN — 添加 — Microsoft Access Driver (*.mdb) — 完成  — 创建(C) — 自定义数据库名 — 选择路径

如果 ODBC数据源管理器没有 Access 打开 C:\Windows\sysWOW64\odbcad32.exe

## 创建表

新建 — 设计视图

| 字段名称 | 数据类型  |
| -------- | --------- |
| id       | 日期/时间 |
| datatime | 日期/时间 |
| value    | 数字      |

datatime 下面有默认值填写 Now()

# 调度

启动 ifix 新建 调度 test

进入 VB 编辑器复制下面代码，然后点击上方的工具引用 ADO2.7。

```vb
Private Sub FixTimer3_OnTimeOut(ByVal lTimerId As Long)
    Dim conODBC As ADODB.Connection
    Set conODBC = New ADODB.Connection
    conODBC.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\test.mdb;Persist Security Info=False"
    conODBC.Open
    conODBC.Execute "insert into form([value]) values('" + CStr(Fix32.Fix.AR_1.F_CV) + "') "
    conODBC.Close
End Sub
```

## 代码换行

1、在需要换行的 + 号后面 + 双引号 + 空格 +下划线

2、在下一行首 + & 符号

```vb
Private Sub FixTimer3_OnTimeOut(ByVal lTimerId As Long)
    Dim conODBC As ADODB.Connection
    Set conODBC = New ADODB.Connection
    conODBC.ConnectionString = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source=C:\test.mdb;Persist Security Info=False"
    conODBC.Open
    conODBC.Execute "insert into form([value]) values('" + "" _
    & CStr(Fix32.Fix.AR_1.F_CV) + "') "
    conODBC.Close
End Sub
```
