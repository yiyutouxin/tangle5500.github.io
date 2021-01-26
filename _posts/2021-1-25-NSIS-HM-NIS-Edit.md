---
layout:  post
title:   NSIS HM NIS Edit
date:    2021-1-25
author:  Tangle
catalog: true
tags:
    - NSIS
---

# 脚本

```
OutFile "Setup.exe"                             ; 安装包路径
InstallDir "$DESKTOP"                           ; 默认安装目录
SilentInstall silent                            ; 静默安装
                                                
Section "MainSection" SEC01                     
  SetOutPath "$INSTDIR"                         ; 设置安装路径
  SetOverwrite ifnewer                          ; 同步安装
  File "C:\Users\CCG\Desktop\main.py"           ; 安装文件
  ExecShell Open "$INSTDIR\main.bat" "" SW_HIDE ; 执行文件
SectionEnd
```

# 向导

- 打开 `nisedit.exe` — 文件 — 新建脚本:向导

```
ctrl +w
```

# 函数

```
SW_HIDE                      # 隐藏窗口
SilentInstall silent         # 静默安装
MessageBox MB_OKCANCEL "233" # 消息
```

```
SilentInstall silent
Function .onInit
    ExecShell Open "$INSTDIR\main.bat" "" SW_HIDE
    MessageBox MB_OKCANCEL "233"
FunctionEnd
```
