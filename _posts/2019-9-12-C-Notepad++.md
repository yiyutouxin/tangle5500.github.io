---
layout:     post
title:      C Notepad++
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - C
---

# 下载编译器

https://sourceforge.net/projects/mingw-w64/files/?source=navbar

# 无需设置环境变量编译运行

F5 然后输入如下代码即可

```
cmd /k cd "$(NPP_DIRECTORY)" & cd ../ & "./x86_64-8.1.0-release-win32-seh-rt_v6-rev0/mingw64/bin/gcc.exe" -std=c11 -O2 -s "$(FULL_CURRENT_PATH)" -o "$(CURRENT_DIRECTORY)\$(NAME_PART).exe" && "$(CURRENT_DIRECTORY)\$(NAME_PART).exe" & PAUSE & EXIT
```

如下替换成自己编译器的路径，放在 notepad++ 文件夹外面即可

```
./x86_64-8.1.0-release-win32-seh-rt_v6-rev0/mingw64/bin/gcc.exe
```

# 命令说明

| 命令                       | 作用               |
| -------------------------- | ------------------ |
| $(CURRENT_DIRECTORY)       | 当前文件路径       |
| $(FULL_CURRENT_PATH)       | 当前文件的绝对路径 |
| $(NAME_PART)               | 当前文件名         |
| $(EXT_PART)                | 当前文件扩展名     |
| $(NPP_DIRECTORY) Notepad++ | 所在路径           |
| $(CURRENT_WORD)            | 当前选中的文字     |
