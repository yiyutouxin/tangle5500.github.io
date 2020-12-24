---
layout:  post
title:   Office Excel 函数
date:    2020-7-6
author:  Tangle
catalog: true
tags:
    - Office
---

# 函数

## 随机数

- 随机：0.85 至 0.9

- 小数位数：2

```
=ROUND(0.85+(0.05)*RAND(),4)
```

## 判断

公式错误显示 None 否则正常显示

```
=IF(A1-B1>=2,TRUE,FALSE)
```

## 绝对值

```
=ABS(A1+B1)
```

# 自定义函数

- 进入 vba 编辑器

- 插入模块

- 在模块中写入如下代码

```vb
Function demo(x, y As Integer)
demo = x * y
End Function
```

## 数值型数据

| 数值型   | 作用         |
| -------- | ------------ |
| Integer  | 整型         |
| Long     | 长整型       |
| Single   | 单精度浮点型 |
| Double   | 双精度浮点型 |
| Currency | 货币型       |
| Byte     | 字节型       |
