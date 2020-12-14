---
layout:  post
title:   Vim 插件管理器（vim-plug）
date:    2020-12-14
author:  Tangle
catalog: true
tags:
    - Vim
---

# 插件管理器（vim-plug）

## Ubuntu

0. Windows 7 git
    ```
    curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
        https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    ```
0. 安装
    ```
    $HOME/vimfiles/autoload/plug.vim
    ```
0. `.vimrc`
    ```
    call plug#begin('~/.vim/bunble')

    Plug 'neoclide/coc.nvim', {'branch': 'release'}

    call plug#end()
    ```
    
## Windows

# 自动补全（coc.nvim）

项目 <https://github.com/neoclide/coc.nvim/tree/release>

```
:CocInstall [插件名]   # 安装插件
:CocUninstall [插件名] # 卸载插件
:help coc-nvim         # 帮助
:CocConfig             # 语言服务器配置
:CocInstall coc-python # python 补全
```

## Ubuntu

0. 安装 `node`
0. 安装 `coc.nvim`
    ```
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    ```
