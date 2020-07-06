---
layout:     post
title:      Excel VBA
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Excel
---

# VBA

## 设置保护

1、工具 — VBAproject — 保护

2、勾选查看时锁定工程并设置密码

## 保存与退出

| 语法                | 作用           |
| ------------------- | -------------- |
| Activeworkbook.Save | 保存活动工作薄 |

保存所有打开的工作薄并关闭 excel

```vb 
For Each W in Application.Workbooks
W.Save
Next W
Application.Quit
```

不保存工作薄关闭 excel

```vb
Application.DisplayAlerts = False
Application.Quit
```

## 字符串

在字符串中写字符串两个双引号代表一个双引号，和 python 代码比较

```vb
python 代码
demo = '0.00"g"'

vba 代码
demo = "0.00""g"""
```

## 判断

```vb
If [A1] >= 0 Then
[A1] = 1
ElseIf <= 0 Then
[A1] = 2
Else
[A1] = 3
End If
```

## 单元格类型

| 语法                            | 作用     |
| ------------------------------- | -------- |
| [A1].NumberFormatLocal = "0.00" | 设置类型 |

## 删除

| 语法                                            | 作用                     |
| ----------------------------------------------- | ------------------------ |
| sheets("sheet1").Range("2:65536").ClearContents | 请空 2-65536 的数据      |
| sheets("sheet1").Range("2:65536").Delete        | 删除 2-65535 单元格      |
| sheets("sheet1").Range("2:65536").Clear         | 格式化 2-65535 单元格    |
| Rows(2).Delete                                  | 删除第 2 行              |
| Range(rows(2),rows(5)).delete                   | 删除 2-5 行，包括 2 和 5 |

## 符号

| 语法 | 作用 |
| ---- | ---- |
| &    | 加   |

## 按钮

| 语法                           | 作用           |
| ------------------------------ | -------------- |
| CommandButton1.Enabled = False | 按钮不可用状态 |
| Sheets("Sheet1").Select        | 跳转工作表     |

```vb
Private Sub CommandButton1_Click()
End Sub
```

## 循环

```vb
For i = 1 To 100
    CommandButton1_Click
Next
```

## 行高列宽

| 语法                            | 作用            |
| ------------------------------- | --------------- |
| Cells.RowHeight = 30            | 设置所有行的高  |
| Rows("1:3").RowHeight = 50      | 设置 1-3 行的高 |
| Columns("A:C").ColumnWidth = 40 | 设置列宽        |

## 获取数据

| 语法              | 作用     |
| ----------------- | -------- |
| Range("A3").Value | 获取数据 |

## 框线

| 语法                                              | 作用     |
| ------------------------------------------------- | -------- |
| Range("A1:L100").Borders.LineStyle = xlContinuous | 添加框线 |
| Range("A1:L100").Borders.LineStyle = xlNone       | 取消框线 |

## 居中

| 语法                             | 作用               |
| -------------------------------- | ------------------ |
| Set c = Range("A1:Z65536")       | 设置要居中的单元格 |
| c.HorizontalAlignment = xlLeft   | 左对齐             |
| c.HorizontalAlignment = xlCenter | 居中               |
| c.HorizontalAlignment = xlRight  | 右对齐             |

```vb
Set c = Range("A1:Z65536")
c.HorizontalAlignment = xlCenter
```

## 合并单元格

| 语法                 | 作用       |
| -------------------- | ---------- |
| Range("A1:B3").Merge | 合并单元格 |

取消合并的单元格，包含 A3 的合并单元格就可以取消

```vb
    With Range("A3:A" & [a65536].End(3).MergeArea.Offset(1).Row - 1)
        .UnMerge
    End With
```

## 网格线

| 语法                                  | 作用               |
| ------------------------------------- | ------------------ |
| ActiveWindow.DisplayGridlines = False | 隐藏网格线         |
| ActiveWindow.GridlineColorIndex = 5   | 将网格线设置为蓝色 |

## 其他

| 语法                                  | 作用                       |
| ------------------------------------- | -------------------------- |
| ActiveWorkbook.Name                   | 获取当前文件包含后缀的名称 |
| Sheet1.Visible = xlSheetVeryHidden    | 将工作表 Sheet1 隐藏       |
| Sheet1.Visible = xlSheetVisible       | 将工作表 Sheet1 显示       |
| Application.WindowState = xlMinimized | 最小化                     |
| Application.WindowState = xlMaximized | 最大化                     |

# 生成目录

1、在当前工作薄输入下面代码并执行生成目录

```vb
Sub createmulu()
    For i = 1 To Sheets.Count
        Cells(i, 1) = Sheets(i).Name
    Next
End Sub
```

2、在 B1 单元格中定义超链接函数并向下填充目录

``` vb 
=HYPERLINK("#"&A2&"!A1",A2)
```

3、按 shift 键选中所有 sheet 表，在 A1 单元格中写入

```vb
=HYPERLINK("#sheet1!A1","返回目录")
```
