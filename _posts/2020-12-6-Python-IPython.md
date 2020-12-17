---
layout:  post
title:   Python IPython
date:    2020-12-6
author:  Tangle
catalog: true
tags:
    - Python
---

# 安装

## Windows

```
pip install ipython
```

## Ubunut

0. 下载 <https://github.com/ipython/ipython/tree/7.19.0>
0. 拷贝文件
    ```
    /home/install/ipython
    ```
0. 执行命令
    ```
    cd /home/install/ipython
    sudo python3 setup.py install
    ```

# 常用

```
tab    # 补全
_      # 最近的一个输出结果
__     # 最近的两个输出结果
___    # 最近的三个输出结果
_行号  # 查看指定行的那个变量的结果
_!行号 # 查看指定行号输入的变量名称
!      # 调用系统命令
```

# 帮助

```
%run main.py # 运行
dir(str)
help(str.find)
?             # 显示对象签名、文档字符串、代码位置
??            # 显示源代码
numpy.*load*? # 这会显示所有的包含有 load 的函数
numpy.*sort?  # 这会显示所有以 sort 结尾的函数
```

# 开发环境切换

```
ipython
!cmd
```

# 快捷键

```
Ctrl-P    # 或上箭头键 后向搜索命令历史中以当前输入的文本开头的命令
Ctrl-N       # 或下箭头键 前向搜索命令历史中以当前输入的文本开头的命令
Ctrl-R       # 按行读取的反向历史搜索（部分匹配）
Ctrl-Shift-v # 从剪贴板粘贴文本
Ctrl-C       # 中止当前正在执行的代码
Ctrl-A       # 将光标移动到行首
Ctrl-E       # 将光标移动到行尾
Ctrl-K       # 删除从光标开始至行尾的文本
Ctrl-U       # 清除当前行的所有文本译注12
Ctrl-F       # 将光标向前移动一个字符
Ctrl-b       # 将光标向后移动一个字符 
Ctrl-L       # 清屏
```
