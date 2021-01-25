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
SW_HIDE              # 隐藏窗口
SilentInstall silent # 静默安装
```

```
SilentInstall silent
Function .onInit
    ExecShell Open "$INSTDIR\main.bat" "" SW_HIDE
FunctionEnd
```
