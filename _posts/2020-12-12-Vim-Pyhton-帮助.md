---
layout:  post
title:   Vim Python 帮助
date:    2020-12-12
author:  Tangle
catalog: true
tags:
    - Vim
---

# jedi-vim

项目 <https://github.com/davidhalter/jedi-vim>

```
<C-Space>    # 代码补全
<leader>g    # goto 函数
<leader>d    # 转到定义
<leader>s    # 转到存根
K            # 显示文档
<leader>r    # 重命名
<leader>n    # 显示名称的所有用法
:Pyimport os # 打开模块
```

## Ubuntu

0. Vundle 安装
    ```
    Plugin 'davidhalter/jedi-vim'
    ```
0. 执行命令
    ```
    vim +PluginInstall +qall
    ```

## Windows

