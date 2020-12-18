---
layout:  post
title:   Vim 插件管理器（vim-plug）
date:    2020-12-16
author:  Tangle
catalog: true
tags:
    - Vim
---

# 插件管理器（vim-plug）

项目 <https://github.com/junegunn/vim-plug/>

```
:PlugInstall
```

## Ubuntu

0. Windows git
```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
0. 安装
```
~/.vim/autoload/plug.vim
```
0. `.vimrc`

```
" 插件管理器（vim-plug）
    call plug#begin('~/.vim/bundle')
    Plug 'VundleVim/Vundle.vim'                           " 插件管理器自身
    Plug 'https://github.com/preservim/nerdcommenter.git' " 代码注释
    Plug 'https://github.com/sickill/vim-monokai.git'     " 代码高亮
    Plug 'https://github.com/rkulla/pydiction.git'        " 代码补全
    Plug 'preservim/nerdtree'                             " 目录结构
    Plug 'https://github.com/vim-scripts/VisIncr.git'     " 序列
    Plug 'jiangmiao/auto-pairs'                           " 自动配对
    Plug 'Lokaltog/vim-powerline'                         " 状态线
    Plug 'https://github.com/Yggdroot/indentLine.git'     " 缩进线
    Plug 'neoclide/coc.nvim', {'branch': 'release'}       " coc.nvim
    call plug#end()
```

## Windows

0. Windows git
```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```
0. 环境变量
```
Git\bin
```
0. 安装
```
$VIM/vimfiles/autoload/plug.vim
```
0. `_vimrc`
```
" 插件管理器（vim-plug）
    call plug#begin('$VIM\vimfiles\bundle')
    Plug 'neoclide/coc.nvim', {'branch': 'release'}
    call plug#end()
```
