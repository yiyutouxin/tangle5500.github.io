---
layout:  post
title:   Office Excel 宏
date:    2020-7-6
author:  Tangle
catalog: true
tags:
    - Office
---

# python 执行宏

```
import win32com.client
xls = win32com.client.Dispatch("Excel.Application")
xls.Workbooks.Open(r"C:\Users\Easy Love\Desktop\1.xlsm")
xls.Application.Run("www")
# xls.Application.Quit()
```
