---
layout:  post
title:   NSIS HM NIS Edit
date:    2021-1-25
author:  Tangle
catalog: true
tags:
    - NSIS
---

# 向导

- 打开 `nisedit.exe` — 文件 — 新建脚本:向导

```
ctrl +w
```

# 函数

```
```

```
Function .onInit
    ExecShell Open "$INSTDIR\1.bat" "" SW_HIDE
FunctionEnd
```
