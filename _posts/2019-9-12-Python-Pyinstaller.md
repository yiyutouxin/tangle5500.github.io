---
layout:  post
title:   Python Pyinstaller
date:    2019-9-12
author:  Tangle
catalog: true
tags:
    - Python
---

# 参考

<https://sourceforge.net/projects/pyinstallerextractor/>

使用这个 PyinstallerExtractor 可以解开，具体过程可以参考教程

# pyinstaller

## 安装

- 直接用 pip 安装

```
pip install pyinstaller
```

- 或者安装 github 上的 develop 版

```
pip install setuptools
pip install https://github.com/pyinstaller/pyinstaller/tarball/develop
```

执行上面命令会安装下面几个扩展

````
setuptools (41.0.1)
altgraph (0.16.1)
future (0.17.1)
macholib (1.11)
pefile (2019.4.18)
Pyinstaller (3.5.dev0+b54a15d72e)
pywin32-ctypes (0.2.0)
````

## 使用

```
-F           # 打包成单独文件
-d           # debug 模式，可以得到运行时的跟踪
-p           # 指定 Python 安装包路径
-i | --icon # 指定图标，我的图标放在同目录下
-w           # 无 dos 窗口
```

想在 32位系统上使用可执行文件，要用低版本 32位的 Python 版本打包

### pip 安装版

- 打包首先 pyinstaller.exe main.py 图标放在同一目录下

- 然后执行以下命令即可

```
python pyinstaller.exe -F main.py
```

### develop 版打包

```
pyinstaller -Fw code.py
```

# ERROR

- 打包时路径不能有中文

- 递归超过最大深度

- 打包出现 `*.spec` 文件，在 `*.spec` 文件中写入下面代码

```
import sys
sys.setrecursionlimit(10000)
```
    
- 然后执行打包 *.spec 文件
