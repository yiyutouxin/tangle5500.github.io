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
SW_HIDE # 隐藏窗口
```

```
OutFile "main.exe"                                ; 安装包输出文件
InstallDir "$DESKTOP"                             ; 默认安装目录
Icon "${NSISDIR}\Contrib\Graphics\Icons\main.ico" ; 图标
SilentInstall silent                              ; 静默安装

Section "MainSection" SEC01                       
  SetOutPath "$INSTDIR"                           ; 设置安装路径
  SetOverwrite ifnewer                            ; 同步安装
  File "C:\Users\CCG\Desktop\main.py"             ; 安装文件
  ExecShell Open "$INSTDIR\main.bat" "" SW_HIDE   ; 执行文件
  ; MessageBox MB_OKCANCEL "233"                  ; 消息
SectionEnd
```

# 向导

- 打开 `nisedit.exe` — 文件 — `新建脚本:向导`

```
ctrl + w
```

# 变量

```
$DESKTOP # C:\Users\User\Desktop
$TEMP    # C:\Users\User\AppData\Local\Temp
$EXEDIR  # 当前文件目录
$EXEFILE # 当前文件名称
```

# 函数

```
Function .onInit
    MessageBox MB_OKCANCEL "233"
FunctionEnd
```

# 文件操作

```
$\r$\n # 换行
```

```
FileOpen $0 "$INSTDIR\1.bat" w
FileWrite $0 'cd /d $EXEDIR$\r$\n'
FileWrite $0 'del $EXEFILE'
FileClose $0
```
