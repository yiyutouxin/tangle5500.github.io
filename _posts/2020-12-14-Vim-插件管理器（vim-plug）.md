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
