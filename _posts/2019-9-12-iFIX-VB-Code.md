---
layout:     post
title:      iFIX VB Code
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - iFIX
---

# 数据库写入数据

```
WriteValue 'demo', "Fix32.Fix.AA_5.F_CV"
```

# 后台调度

# 按钮

- 建立一个数据库标签，类型选择 DI 数字量输入，设置 I/O 地址，扫描时间 0.05，标注 1 和 0，勾选允许输出
- 建立一个按钮，右键 画面 — 配置 — 外观 — 勾选 Caption 动画 — 设置 数据源 — 动画属性 — 数据转换 表 — 表格设置 完全匹配 — 值设置 0 和 1 — 字符串设置 开和关
- VB 代码

```
Private Sub CommandButton1_Click()
    If Fix32.Fix.AA_4.F_CV = 0 Then
        Fix32.Fix.AA_4.F_CV = 1
        Application.Documents.Open "C:\Users\uer\Desktop\aaa.evs"
    Else
        Fix32.Fix.AA_4.F_CV = 0
        Application.Documents("aaa").Close
    End If
End Sub
```
