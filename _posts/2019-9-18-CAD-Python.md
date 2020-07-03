---
layout:     post
title:      CAD Python
subtitle:   
date:       2019-9-18
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - CAD
---

# 常用

```python
# coding:utf-8
from pyautocad import Autocad, APoint

acad = Autocad(create_if_not_exists = True)
acad.prompt("hello pyautocad")
print(acad.doc.Name)

p1 = APoint(0, 0) # 点的位置坐标
p2 = APoint(50, 25)
for i in range(5):
    text = acad.model.AddText('text %s!' % i, p1, 1.5) # 添加文本
    acad.model.AddLine(p1, p2) # 添加线
    acad.model.AddCircle(p1, 10) # 添加圆
    p1.y += 10

dp = APoint(10, 0)
for text in acad.iter_objects('Text'): # 打印点信息
    print('text: %s at: %s' % (text.TextString, text.InsertionPoint))
    text.InsertionPoint = APoint(text.InsertionPoint) + dp

for obj in acad.iter_objects(['Circle', 'Line']): # 打印圆，线名称
    print(obj.ObjectName)
```

#  AutoCAD 对象模型

```text
Application
    参数设置（Preferences）
    文件
        块、模型空间、图纸空间
            点、直线、多段线、样条曲线
            圆、圆弧、椭圆、椭圆弧
            实体填充、图案填充
            线性标注、角度标注、多重引线
            文字等
        图层
        其他（文本样式、标注样式等）
    其他
```

# CAD 连接

```python
#coding=gbk
'''若 cad 未运行则自动启动'''
from pyautocad import Autocad
acad = Autocad(create_if_not_exists = True) # 连接 cAD
acad.prompt("hello pyautocad")
print(acad.doc.Name)
```

```python
#coding=gbk
import comtypes.client
acad = comtypes.client.GetActiveObject("AutoCAD.Application") # 获取正在运行的 autocad 应用对象
doc = acad.ActiveDocument # 获取当前文件
ms = doc.ModelSpace # 获取当前文件的模型空间
doc.Utility.Prompt("Hello comtypes.client")
print(doc.Name)
```

```python
#coding=gbk
import win32com.client as win32
acad = win32.Dispatch("AutoCAD.Application")
doc = acad.ActiveDocument
ms = doc.ModelSpace
doc.Utility.Prompt("hello! win32com.client")
print(doc.Name)
```

# 系统设置

```
acad.ActiveDocument.Application.preferences.Display.GraphicsWinModelBackgrndColor = 0 # 空间背景色
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/96587211

# 图层

## 新建图层

```python
LayerObj = acad.ActiveDocument.Layers.Add("HIT_Layer") # 添加新图层，图层名称为 "HIT_Layer"
acad.ActiveDocument.ActiveLayer = LayerObj # 将 "HIT_Layer" 图层设置为当前图层
```

## 颜色设置

```
ClrNum = 1 # 颜色索引
LayerObj.color = ClrNum
```

## 线型设置

```python
acad.ActiveDocument.Linetypes.Load("ACAD_ISO08W100", "acadiso.lin")
     # 加载线型，"ACAD_ISO05W100"为线型名称，详细信息见CAD帮助文档；
     # "acadiso.lin"为用于公制单位的线型定义文件，详细信息见CAD帮助文档；
     # 为图层指定线型前，需先加载相关线型；
     # 注意：不能重复加载，否则报错——'记录名重复'；
     # 可利用try...except...finally...机制，处理此类报错。
LayerObj.Linetype = "ACAD_ISO08W100"
     # 设置图层线型；
     # 指定线型前，若不想以Load方式加载线型，也可在CAD程序中点击线型>其他>加载，加载全部所用线型；
     # 若既没采用Load方式也没有在CAD程序中手动加载线型，则程序会报错——'未找到主键'。
```

## 批量创建

```python
clr_num = [1, 2, 3]  
     # 图层颜色列表
layers_name = ["HIT_图层_1", "HIT_图层_2", "HIT_图层_3"] 
     # 图层名称列表

try:
    len(clr_num) == len(layers_name)
except:
    print("图层颜色号个数与图层个数不匹配")

layers_obj = [acad.ActiveDocument.Layers.Add(i) for i in layers_name]  
     # 批量创建图层

for j in range(len(layers_obj)):
    layers_obj[j].color = clr_num[j]
     # 批量指定图层颜色
```

## 图层读取

```python
layers_nums = acad.ActiveDocument.Layers.count  
     # 当前文件模型空间中所包含的图层总数
layers_names = [acad.ActiveDocument.Layers.Item(i).Name for i in range(layers_num)]
	 # 当前文件模型空间中所包含的所有图层名称
index = layers_name.index("HIT_图层_3") 
	 # 获取指定图层索引号
acad.ActiveDocument.ActiveLayer = acad.ActiveDocument.Layers.Item(index)
	 # 将指定图层设定当前
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/96588654

# 绘图

采用下面方式可以实现以 CAD 命令方式绘图

## 创建点及直线

```python
pnt = APoint(50, 50)
acad.model.AddPoint(pnt)

或

pnt = np.array([50, 50, 0], dtype = np.float)
acad.model.AddPoint(pnt)
```

## 添加多段线及样条曲线

添加多段线

```python
pnts = [APoint(0, 0), APoint(40, 35), APoint(43, 32),  APoint(50, 32), APoint(55, 35)]
pnts = np.array([j for i in pnts for j in i], dtype = np.float)
pline_obj = acad.model.AddPolyLine(pnts)
```

添加含圆弧的多段线

```python
[L, B, R] = [400, 200, 50]
          # L、B、R分别为矩形的长度、矩形的宽度及圆角半径。

x = [0.5*(L-2*R), 0.5*L]  # 倒角矩形各关键点横坐标的绝对值；
y = [0.5*(B-2*R), 0.5*B]  # 倒角矩形各关键点纵坐标的绝对值；

pnts = [APoint(x[0], -y[1]), APoint(x[1], -y[0]), APoint(x[1], y[0]),
        APoint(x[0], y[1]), APoint(-x[0], y[1]), APoint(-x[1], y[0]),
        APoint(-x[1], -y[0]), APoint(-x[0], -y[1])]
        
pnts = np.array([j for i in pnts for j in i], dtype = np.float)
pline_obj = acad.model.AddPolyLine(pnts)

pline_obj.Closed = True                # 闭合多段线
bulgevalue = math.tan(math.pi/8)       # 凸度，为四分之一倍圆弧所对圆心角的正切值。
[pline_obj.SetBulge(2*i, bulgevalue) for i in range(4)]
          # 将多段线的第1、3、5、7部分设置为凸度为bulgevalue的圆弧。
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/96589272

# 图案填充

```python
import pythoncom
import win32com.client

acad = win32com.client.Dispatch("AutoCAD.Application")
doc = acad.ActiveDocument
doc.Utility.Prompt("hello world\n")
mp = doc.ModelSpace

def vtpt(x,y,z=0):
   return win32com.client.VARIANT(pythoncom.VT_ARRAY | pythoncom.VT_R8, (x,y,z))

def vtobj(obj):
    return win32com.client.VARIANT(pythoncom.VT_ARRAY | pythoncom.VT_DISPATCH, obj)

[ptnName, ptnType, bAss, center, radius ] = ["ANSI31", 0, True, vtpt(0, 0, 0), 10]

outerLoop = []
outerLoop.append (mp.AddCircle(center, radius))
outerLoop = vtobj(outerLoop)
hatchObj = mp.AddHatch(ptnType, ptnName, bAss)
hatchObj.AppendOuterLoop(outerLoop)
hatchObj.Evaluate()
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/96589272

# 修改

复制及删除

```python
copyObj = EllObj.Copy()
     # 原位置复制，复制的图元与原图元重合。
copyObj.Delete()
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/97393167

# 块组

```
#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
=============================
Author = Hulunbuir & DalaiNur
Email: liyang@alu.hit.edu.cn
Last Update: 2019.08.14 15:38
=============================
'''
" # *********************************************** 1、块 ************************************************ # "

# 1、块

## （3）、插入块

### ①、从当前文件中插入块
insertionPnt = APoint(0, 0)
RetVal = acad.model.InsertBlock(insertionPnt, "HIT_Block", 1, 1, 1, 0 )
          # acad.model.InsertBlock(InsertionPoint, Name, Xscale, Yscale, ZScale, Rotation)；
          # insertionPnt为块的插入点，即块的定位夹点与图纸空间中的该点对齐。
          
### ②、从外部文件中插入块
insertionPnt = APoint(10, 0)
RetVal = acad.model.InsertBlock(insertionPnt, "D:\AutoCAD\Harbin.dwg", 1, 1, 1, 0 )
          # 外部文件名尽量与当前文件中的各块名称不同；
          # 插入后外部文件名将作为其在当前文件中的块名；
          # 外部文件的坐标原点为其作为块的定位夹点。

## （4）、添加属性到块

[height, mode, prompt, insertionPoint, tag, value] \
    = [1, 2, "Attribute_Prompt", APoint(0, 0), "Attribute_Tag", "Attribute_Value"]
         # 各变量的含义依次为：字高、模式、提示、插入点、标记、默认。
attributeObj = blockObj.AddAttribute(height, mode, prompt, insertionPoint, tag, value)

## （5）、已有块属性的读取
'''
# RetVal = object.GetAttributes() 此方法在不借助其他库的情况下如何使用暂时未知；
# 采用把块炸开将属性部分暴露出来，然后提取其相关信息的方式获取属性信息；
# 此方式虽然曲折，但至少可行，如有更高效的方法还请评论区附上代码，造福大众。
'''

# 不采用如下方式，直接炸开块会报错；
# 删除过多的块属性时，可能报错；
# 原因可能是程序运行过快，一次性删除不掉，此时要反复多删几次。

try:
    RetVal.Explode()  # 炸开块
except:
    RetVal.Delete()   # 删除重复    

for obj in acad.iter_objects("AttributeDefinition"):
    # 以下获取块的属性信息
    # 如果想获取某一特定块的属性信息可以用ObjectID识别特定块
    print(obj.ObjectName)
    print(obj.TagString)
    print(obj.TextString)
    print(obj.PromptString)
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/97393463

# 注释

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
=============================
Author = Hulunbuir & DalaiNur
Email: liyang@alu.hit.edu.cn
Last Update: 2019.08.14 15:38
=============================
'''

" # ********************************************** 1、文字 *********************************************** # "

# 1、文字

## （1）、创建新文本
textString = "Harbin Institute of Technology"
insertPnt = APoint(0, 0)
height = 2.5
textObj = acad.model.AddText(textString, insertPnt, height)
          # textString：文本内容；height：字高；
          # 系统默认对齐夹点位于文字基线左侧；
          # 采用系统默认对齐方式时，insertPnt为对齐夹点的位置坐标；
          # 当用户自定义对齐方式时，insertPnt以对齐方式中的为准。

## （2）、对齐方式
AlignNum = 7
textObj.Alignment = AlignNum
          # AlignNum为对齐夹点位置标识号，其取值范围为[0,14]；
          # 0 基线左对齐、1 基线居中对齐、2 基线右对齐；
          # 7 表示对齐夹点位于top cennter；
insertPnt = APoint(0, 10)
textObj.TextAlignmentPoint = insertPnt
          # 设置对齐夹点在图纸空间中的绝对位置，可为任意一已知点；
          # 若用户自定义对齐方式，则需设置此项。

" # ******************************************** 2、文本样式 ********************************************* # "

# 2、文本样式

## （1）、创建文字样式
txtStyleObj = acad.ActiveDocument.TextStyles.Add("HIT_TxtStyle")

## （3）、设置字体

### ①、为当前文本样式设置字体
acad.ActiveDocument.ActiveTextStyle.SetFont("楷体", False, False, 1, 0 or 0)
          # acad.ActiveDocument.ActiveTextStyle.SetFont(Typeface, Bold, Italic, charSet, PitchandFamily)
          # Typeface 字体名称；
          # Bold 加粗，布尔值，False为不加粗字体；
          # Italic 倾斜，布尔值，False为倾斜字体；
          # CharSet 字体字符集，1为默认字符集；
          # PitchAndFamily 字节及笔画形式。

" # ******************************************** 3、尺寸标注 ********************************************* # "

# 3、尺寸标注

## （1）、线性及旋转线性标注
import math
XLine1Point = APoint(5, 25)
XLine2Point = APoint(25, 35)
DimLineLocation = APoint(10, 20)
RotationAngle = math.radians(0)
dimRotObj = acad.model.AddDimRotated(XLine1Point, XLine2Point, DimLineLocation, RotationAngle)
          # XLine1Point 第一尺寸界线的起点；
          # XLine2Point 第二尺寸界线的起点；
          # DimLineLocation 尺寸线定位点，尺寸线或其延长线过该点；
          # RotationAngle 尺寸线与水平方向的夹角，去弧度制；
          # RotationAngle=0 水平标注，RotationAngle=90 竖直标注。

" # ******************************************** 4、标注样式 ********************************************* # "

# 4、标注样式

## （1）、创建新标注样式
DimStyleObj = acad.ActiveDocument.DimStyles.Add("HIT_DimStyle")
print(dimAliObj.StyleName) 
          # 打印标注对象的标准样式名称
          # 系统自带标注样式 ISO-25

## （2）、将特定标注样式设为当前
acad.ActiveDocument.ActiveDimStyle = acad.ActiveDocument.DimStyles.Item("HIT_DimStyle")
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/97394254

# 文件

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
=============================
Author = Hulunbuir & DalaiNur
Email: liyang@alu.hit.edu.cn
Last Update: 2019.08.14 15:38
=============================
'''

"  以下代码请不要在一个文件中同时运行，否则会报错，原因是逻辑冲突。"
"  在D盘创建新文件夹并命名为AutoCAD "

" # ******************************************** 1、打开文件 ********************************************* # "

# 1、打开文件

acad.ActiveDocument.Application.Documents.Open("D:\AutoCAD\PyAutoCAD.dwg")
     # CAD程序中至少存在一个打开的图形空间，否则报错，报错内容为：无法获取Document对象。

" # ******************************************** 2、新建文件 ********************************************* # "

# 2、新建文件

DrawingObj = acad.ActiveDocument.Application.Documents.Add("")
     # 无法直接命名，新建的文件为系统默认名称，即Drawing1、Drawing2等；
     # 若更改名称，在关闭时定义。

" # ******************************************** 5、另存为 *********************************************** # "

# 5、另存为

## （1）、当前文件另存为
acad.ActiveDocument.SaveAs("D:\AutoCAD\PyAutoCAD_SaveAs", 61)
          # 将当前文件另存为PyAutoCAD_SaveAs.dxf；
          # 此时，程序关闭当前文件，将PyAutoCAD_SaveAs.dxf切换为当前文件。
          # 61表示另存为文件的类型是AutoCAD 2013 DXF，常用类型如下：
          # 12 AutoCAD 2000 DWG (*.dwg)，13 AutoCAD 2000 DXF (*.dxf)；
          # 24 AutoCAD 2004 DWG (*.dwg)，25 AutoCAD 2004 DXF (*.dxf)；
          # 36 AutoCAD 2007 DWG (*.dwg)，37 AutoCAD 2007 DXF (*.dxf)；
          # 48 AutoCAD 2010 DWG (*.dwg)，49 AutoCAD 2010 DXF (*.dxf)；
          # 60 AutoCAD 2013 DWG (*.dwg)，61 AutoCAD 2013 DXF (*.dxf)；
          # 系统默认为AutoCAD 2013 DWG (*.dwg)。

## （2）、指定文件另存为
acad.ActiveDocument.Application.Documents("PyAutoCAD.dwg").SaveAs("D:\AutoCAD\PyAutoCAD_SaveAs", 61)
          # 将特定文件PyAutoCAD.dwg另存为PyAutoCAD_SaveAs.dxf。
```

## 参考

https://blog.csdn.net/Hulunbuir/article/details/97395152

# 选择集

## 参考

https://blog.csdn.net/Hulunbuir/article/details/95446723

# API

官网

https://pyautocad.readthedocs.io

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-

'''
=============================
Author = Hulunbuir & DalaiNur
Email: liyang@alu.hit.edu.cn
Last Update: 2019.08.14 15:38
=============================
'''

" # *********************************************** 1、api ********************************************** # "

# 1、api - Main Autocad interface

## （1）、get_selection(text='Select objects')

# 从屏幕中选择图元，并获取其特性；
# 以直线为例，其余图元类似，代码如下：

select_lineobj = acad.get_selection(text="请选择直线，按Enter键确认")
lineobj = select_lineobj[0]
          # lineobj为从屏幕中选择的直线对象；
          # 0为对象索引号，若选择的直线个数为n，对象索引号应不大于n-1.

print(lineobj.StartPoint)  # 所选直线起点坐标
print(lineobj.EndPoint)    # 所选直线终点坐标
print(lineobj.Length)      # 所选直线长度
print(lineobj.ObjectID)    # 所选直线的ID号

" # ********************************************** 2、types ********************************************* # "

# 2、types - 3D Point and other AutoCAD data types

" # ********************************************** 3、utils ********************************************* # "

# 3、utils - Utility functions

" # ***************************************** 4、contrib.tables ***************************************** # "

# 4、contrib.tables - Import and export tabular data from popular formats

" # ********************************************** 5、cache ********************************************* # "

# 5、cache - Cache all object’s attributes
```

# 参考

https://blog.csdn.net/Hulunbuir/article/details/83715279
