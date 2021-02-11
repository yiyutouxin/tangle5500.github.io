---
layout:  post
title:   Office Excel Python
date:    2021-1-29
author:  Tangle
catalog: true
tags:
    - Office
---

# xlrd

| 语法                                                         | 返回值       | 作用                |
| ------------------------------------------------------------ | ------------ | ------------------- |
| `xlrd_book = xlrd.open_workbook(r'C:\test.xls')`               |              |                     |
| `xlrd_book.sheet_names()`                                      | `list`         | 查看所有 sheet 名称 |
| `xlrd_sheet = xlrd_book.sheet_by_index(0)`                     |              | 通过索引获取 Sheet  |
| `xlrd_sheet = xlrd_book.sheets()[0]`                           |              | 通过索引获取 Sheet  |
| `xlrd_sheet = xlrd_book.sheet_by_name('sheet')`                |              | 通过名称获取 Sheet  |
| `cell_11 = xlrd_sheet.cell_value(0,0)`                         | `float | str` | 读取单元格数据      |
| `self.xlrd_sheet.cell(0, 1).value`                             |              | 可以读取空单元格    |
| `row = xlrd_sheet.row_values(3)`                               | `list`         | 读取第 2 行数据     |
| `cols = xlrd_sheet.col_values(3)`                              | `list`         | 读取第 2 列数据     |
| `[xlrd_sheet.cell(i,ord('B')-ord('A')).value for i in range(0,3)]` | `list`         | 读取 B 列的 1-3 行  |
| `xlrd_sheet.nrows`                                              | `int`          | 获取有效行数        |
| `xlrd_sheet.ncols`                                              |              | 获取有效列数        |

```
import xlrd
xlrd_book = xlrd.open_workbook('test.xls')
xlrd_sheet = xlrd_book.sheet_by_index(0)
nr = xlrd_sheet.nrows
nc = xlrd_sheet.ncols
for i in range(nr):
    row = xlrd_sheet.row_values(i)
    print(row)
```

## 单元格的类型

| 语法                       | 返回值 |         |        |
| -------------------------- | ------ | ------- | ------ |
| `xlrd_sheet.cell(2,2).ctype` | 0      | empty   | 空值   |
|                            | 1      | string  | 字符串 |
|                            | 2      | number  | 数字   |
|                            | 3      | date    | 日期   |
|                            | 4      | boolean | 布尔   |
|                            | 5      | error   | 错误   |

## 时间戳

```
from xlrd import xldate_as_tuple
xldate_as_tuple(44225.0, 0) # 返回元祖日期
```

# xlwt

打开一个 Excel 后再写数据直接保存就可以了，不用再重新打开

```
xlwt_book = xlwt.Workbook(encoding='utf-8') # 新建工作薄
xlwt_sheet = xlwt_book.add_sheet('sheet1')  # 新建 Sheet
xlwt_sheet.write(0,0,'文本')                # 通过行列索引写入数据
xlwt_book.save(r'C:\test.xls')              # 保存
```

```
from xlwt import *

xlwt_book = Workbook()
xlwt_sheet = xlwt_book.add_sheet('sheet1')

for i in range(1,10):
    style = XFStyle()
    style.num_format_str = 'mm:ss'
    xlwt_sheet.write(i, 0, '文本', style)
    xlwt_sheet.write(0, i, '文本', style)

xlwt_book.save('test.xls')
```

## 类别

```
style = XFStyle()                     # 实例化类别
style.num_format_str = 'mm:ss'        # 设置类别
xlwt_sheet.write(1, 1, '文本', style) # 根据索引写入单元格
```

```
'general'
'0'
'0.00'
'##0'
'##0.00'
'"$"##0_);("$"##'
'"$"##0_);[Red]("$"##'
'"$"##0.00_);("$"##'
'"$"##0.00_);[Red]("$"##'
'0%'
'0.00%'
'0.00E+00'
'# ?/?'
'# ??/??'
'M/D/YY'
'D-MMM-YY'
'D-MMM'
'MMM-YY'
'h:mm AM/PM'
'h:mm:ss AM/PM'
'h:mm'
'h:mm:ss'
'M/D/YY h:mm'
'_(##0_);(##0)'
'_(##0_);[Red](##0)'
'_(##0.00_);(##0.00)'
'_(##0.00_);[Red](##0.00)'
'_("$"* ##0_);_("$"* (##0);_("$"* "-"_);_(@_)'
'_(* ##0_);_(* (##0);_(* "-"_);_(@_)'
'_("$"* ##0.00_);_("$"* (##0.00);_("$"* "-"??_);_(@_)'
'_(* ##0.00_);_(* (##0.00);_(* "-"??_);_(@_)'
'mm:ss'
'[h]:mm:ss'
'mm:ss.0'
'#0.0E+0'
'@'
```

## 居中

```
style = XFStyle()             # 实例化类别
al.horz = 0x02                # 设置水平居中
al.vert = 0x01                # 设置垂直居中
style.alignment = al          # 设置好的参数导入style
ws.write(1, 1, '文本', style) # 根据索引写入单元格
```

## 框线与合并

```
borders = Borders()                          # 样式实例化
borders.left = 2                             # 2号左框线
borders.right = 2                            # 2号右框线
borders.top = 2                              # 2号上框线
borders.bottom = 2                           # 2号下框线
style.borders = borders                      # 设置好的参数导入 Style
sheet.write_merge(2, 2, 3, 3, 'text', style) # 为第 4 行，第 5 列添加样式
sheet.write_merge(3, 3, 4, 5, 'text', style) # 合并第 3 行，4 和 5 列
```

```
# 为 1-10 行添加样式
for i in range(0, 10):
    borders = Borders()
    borders.left = 2
    borders.right = 2
    borders.top = 2
    borders.bottom = 2
    style.borders = borders
    sheet.write_merge(i,i,1,1,'',style)
```

## 单元格背景色

```
style = XFStyle()                            # 赋值 style 为 XFStyle()，初始化样式
pattern = Pattern()                          # 创建一个模式
pattern.pattern = Pattern.SOLID_PATTERN      # 设置其模式为实型
pattern.pattern_fore_colour = 1              # 设置单元格背景色
style.pattern = pattern                      # 将赋值好的模式参数导入 Style
sheet.write_merge(1, 1, 1, 1, 'text', style) # 写入单元格
```

## 字体样式

```
style = XFStyle()                            # 赋值 style 为 XFStyle()，实例化样式
fnt = Font()                                 # 创建一个文本格式，包括字体，字号和颜色样式特性
fnt.name = u'微软雅黑'                       # 设置字体为微软雅黑
fnt.colour_index = 1                         # 设置其字体颜色
fnt.bold = True                              # 粗体
style.font = fnt                             # 将赋值好的模式参数导入 Style
sheet.write_merge(1, 1, 1, 1, 'text', style) # 写入单元格
```

## 列宽与行高

```
sheet.col(2).width = 500 # 设置第 3 列列宽
```

```
# 设置行高与字体大小

tall_style = xlwt.easyxf('font:height 720;')
first_row = sheet.row(0)
first_row.set_style(tall_style)
```

```
# 设置所有单元格行高

tall_style = xlwt.easyxf('font:height 400;')
for i in range(65536):
    first_row = sheet.row(i)
    first_row.set_style(tall_style)
```

## 写入公式

```
xlwt_sheet.write(1,1xlwt.Formula('A1*B1')) # 单元格写入公式
```

## 颜色参考

```
from xlwt import *

xlwt_book = Workbook()
xlwt_sheet = xlwt_book.add_sheet('sheet1')
style = XFStyle()

a = 0
for i in range(1000):
    pattern = Pattern()
    pattern.pattern = Pattern.SOLID_PATTERN
    pattern.pattern_fore_colour = i
    style.pattern = pattern
    xlwt_sheet.write(i, 1, None, style)

for i in range(1000):
    xlwt_sheet.write(i, 0, a, style)
    a += 1

xlwt_book.save('demo.xls')
```

# xlutils

## 保存原始格式追加内容

```
xlrd_book = xlrd.open_workbook("C:\\\test.xls",formatting_info=True) # 读取文件，并保留 Excel 的原格式
xlrd_sheet = xlrd_book.sheets()[0]                                   # 获取 sheet 工作表
row = xlrd_sheet.nrows                                               # 获取有效行数
xlwt_book = copy(xlrd_book)                                          # 将文件复制到内存，并改为写模式
xlwt_sheet = xlwt_book.get_sheet(0)                                  # 获取 sheet 工作表
xlwt_sheet.write(row + 1,2,'text')                                   # 写入数据
xlwt_book.save("C:\\text.xls")                                       # 保存写入数据后的文件到源文件路径
```

```
import xlrd
from xlutils.copy import copy
xlrd_book = xlrd.open_workbook("C:\\test.xls",formatting_info=True)
xlrd_sheet = xlrd_book.sheets()[0]
row = xlrd_sheet.nrows
xlwt_book = copy(xlrd_book)
xlwt_sheet = xlwt_book.get_sheet(0)
xlwt_sheet.write(row + 1,2,'text')
xlwt_book.save("C:\\test.xls")
```

# pywin32

```
excel = win32com.client.Dispatch('Excel.Application') # 获取 excel 对象
excel.Visible = -1                                    # -1 显示。0 隐藏，菜单显示。2 隐藏，VBA 显示
win32_book = excel.Workbooks.Open("C:/test.xls")      # 打开 excel
win32_sheet = win32_book.Worksheets("sheet1")         # sheet，序号，名称
win32_book.save                                       # 保存
win32_book.close                                      # 退出
LastRow = win32_sheet.usedrange.rows.count            # 获取当前 sheet 页有效行数
```

```
from win32com.client import Dispatch
import win32com.client

excel = win32com.client.Dispatch('Excel.Application')
excel.Visible = -1
win32_book = excel.Workbooks.Open(r'C:/test.xls')
win32_sheet = win32_book.Worksheets('sheet1')
win32_book.save
win32_book.close
```

## ERROR

```
# 绝对路径
win32_book = excel.Workbooks.Open("C:/test.xls")
```

## write

```
win32_sheet.Rows("2:500").delete                                                             # 删除行 2-500（包含 2 和 500）
win32_sheet.Cells(2, 2).Value = "233"                                                        # 写入单元格（2行，2列）
win32_sheet.Cells(2, 2).Font.Color = -16776961                                               # 设置单元格字体颜色
win32_sheet.Cells(2, 2).Font.Bold =  True                                                    # 设置单元格字体为粗体
win32_sheet.Cells(2, 2).Font.Name = "微软雅黑"                                               # 设置单元格字体
win32_sheet.Range(win32_sheet.Cells(6, 1), win32_sheet.Cells(10, 10)).Font.Color = -11489280 # 改变一个范围的属性值
win32_sheet.Rows(12).Value = (1,2,3)                                                         # 赋值一整行
```

```
# 行
win32_sheet.Range(win32_sheet.Cells(3, 4), win32_sheet.Cells(3, 6)).Value = (1, 2, 3) # 3行，4-6列（包含 4 和 6列）
123

# 范围
win32_sheet.Range(win32_sheet.Cells(1, 4), win32_sheet.Cells(3, 6)).Value = (1, 2, 3) # 1-3行，4-6列
123
123
123

# 范围
win32_sheet.Range(win32_sheet.Cells(1, 4), win32_sheet.Cells(3, 6)).Value = ((1,2,3),(4,5,6),(7,8,9))
123
456
789
```

## read

```
aCellValue = win32_sheet.Cells(2, 3).Value                                           # 获取一个单元格的值
嵌套元组 = win32_sheet.Range(win32_sheet.Cells(1, 1), win32_sheet.Cells(5, 5)).Value # 获取一个范围的值，类型为嵌套的元组
```

## 类别

```
win32_sheet.Cells(1, 2).NumberFormatLocal = 'h:mm:ss' # 设置类别
```

## 框线

```
win32_sheet.Cells(4, 4).BorderAround(1,3)        # 框线，1 为框线样式 3 为框线粗细
win32_sheet.Range('B2').Borders(1).LineStyle = 7 # 框线，1 设置上下左右 7 为框线样式
```

## 居中

```
win32_sheet.Cells(5, 5).HorizontalAlignment = 3 # 水平居中
win32_sheet.Cells(6, 6).VerticalAlignment = 2   # 垂直居中
```

## 单元格背景色

```
win32_sheet.Cells(1, 2).Interior.ColorIndex = 28 # 单元格颜色
```

## 合并单元格

```
win32_sheet.Range(win32_sheet.Cells(1, 1), win32_sheet.Cells(3, 3)) .MergeCells = True # 合并单元格
```

## 列宽

```
win32_sheet.Columns.AutoFit() # 适应列宽
```
