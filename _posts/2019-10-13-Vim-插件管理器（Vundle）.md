---
layout:  post
title:   Vim 插件管理器（Vundle）
date:    2019-10-13
author:  Tangle
catalog: true
tags:
    - Vim
---

# 插件管理器（Vundle）

- 手册 <https://github.com/VundleVim/Vundle.vim/blob/master/doc/vundle.txt>

- 命令

```
:PluginList              # 插件列表
:PluginInstall           # 安装插件
vim +PluginInstall +qall # 命令行安装插件
:PluginUpdate            # 更新插件
:PluginSearch foo        # 搜索插件
:PluginClean             # 移除插件
:h vundle                # 帮助
```

## Ubuntu

- <https://github.com/VundleVim/Vundle.vim>

- 安装

```
git clone https://github.com/VundleVim/Vundle.vim.git ~/.vim/bundle/Vundle.vim
```

- `.vimrc`

```
" 插件管理器
set nocompatible
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin('~/.vim/bundle') " 插件放在 begin 下方

Plugin 'VundleVim/Vundle.vim'                           " 插件管理器自身
Plugin 'https://github.com/preservim/nerdcommenter.git' " 代码注释
Plugin 'https://github.com/sickill/vim-monokai.git'     " 代码高亮
Plugin 'https://github.com/rkulla/pydiction.git'        " 代码补全
Plugin 'preservim/nerdtree'                             " 目录结构
Plugin 'https://github.com/vim-scripts/VisIncr.git'     " 序列
Plugin 'jiangmiao/auto-pairs'                           " 自动配对
Plugin 'Lokaltog/vim-powerline'                         " 状态线
Plugin 'https://github.com/Yggdroot/indentLine.git'     " 缩进线

call vundle#end()                  " 插件放在 end 上方
filetype plugin indent on          " 打开文件类型插件缩进
```

## Windows

- Windows 7

- <https://github.com/VundleVim/Vundle.vim/wiki/Vundle-for-Windows>

- 浏览 <https://curl.se/download.html>

- 下载 `Windows 64 bit` — `the curl project`

- 环境变量 bin

- 打开目录 `$VIM\vimfiles\bundle`

- 安装Vundle

```
git clone https://github.com/VundleVim/Vundle.vim.git
```

- `_vimrc`

```
" 插件管理器
    filetype off

    set rtp+=$VIM\vimfiles\bundle\Vundle.vim
    call vundle#begin('$VIM\vimfiles\bundle') " 插件放在 begin 下方

    Plugin 'VundleVim/Vundle.vim'             " 插件管理器自身

    call vundle#end()                         " 插件放在 end 上方
    filetype plugin indent on                 " 打开文件类型插件缩进
```

## WSH Ubuntu

```
sudo chmod -R 777 ~
```

# 代码注释（NERD Commenter）

项目 <https://github.com/preservim/nerdcommenter>

```
,cc       # 注释当前行
,c<space> # 切换注释与非注释状态
,cy       # 拷贝再注释
,cs       # 个性注释
,cu       # 取消注释
,ca       # 切换注释方式
,cA       # 在当前行尾添加注释并进入插入模式
,c$       # 从光标开始到行尾注释
2,cc      # 添加 2 行注释
2,cu      # 取消 2 行注释
2,cm:     # 添加 2 行块注释
```

## Windows

- 安装

```
$VIM\vimfiles\bundle
git clone https://github.com/preservim/nerdcommenter.git
copy nerdcommenter\plugin ..\plugin
```

- `_vimrc`

```
" 注释
    filetype plugin on
    let g:NERDSpaceDelims = 1 " 默认情况下在注释定界符后添加空格
    let mapleader=","         " \ 替换 ,
```

## Ubuntu

- 安装

```
cd ~/.vim/bundle
git clone https://github.com/preservim/nerdcommenter.git
cp -r nerdcommenter/plugin/ ~/.vim
```

- `.vimrc`

```
" 注释
    filetype plugin on
    let g:NERDSpaceDelims = 1 " 默认情况下在注释定界符后添加空格
    let mapleader=","         " \ 替换 ,
```

# 代码高亮（monokai）

## Ubuntu

- <https://github.com/sickill/vim-monokai>

- 安装

```
cd ~/.vim/bundle
git clone https://github.com/sickill/vim-monokai.git
cp -r ~/.vim/bundle/vim-monokai/colors/ ~/.vim
```

- `.vimrc`

```
" 代码高亮
    syntax enable
    colorscheme monokai
```

## Windows

- 打开目录 `$VIM\vimfiles\bundle`

- 安装

```
git clone https://github.com/sickill/vim-monokai.git
copy vim-monokai\colors ..\colors
```

- `_vimrc`

```
" 代码高亮
    syntax enable
    colorscheme monokai
```
    
# 代码补全（pydiction）

<https://github.com/rkulla/pydiction>

## Ubuntu

- 安装

```
cd ~/.vim/bundle
git clone https://github.com/rkulla/pydiction.git
cp -r ~/.vim/bundle/pydiction/after ~/.vim
```

- `.vimrc`

```
" 代码补全
    filetype plugin on                                                 " 启用
    let g:pydiction_location = '~/.vim/bundle/pydiction/complete-dict' " complete-dict 路径
    let g:pydiction_menu_height = 3                                    " 菜单的高度
```

- tab 补全

## Windows

- 打开目录 `gvim_8.2.1724_x86\vimfiles\bundle`

- 安装

```
git clone https://github.com/rkulla/pydiction.git
copy pydiction\after\ftplugin\python_pydiction.vim ..\plugin
```

- `_vimrc`

```
" 代码补全
    filetype plugin on                                                 " 启用
    let g:pydiction_location = '~/.vim/bundle/pydiction/complete-dict' " complete-dict 路径
    let g:pydiction_menu_height = 3                                    " 菜单的高度
```

- tab 补全

# 目录结构（nerdtree）

- 项目 <https://github.com/preservim/nerdtree>

- 文档 <https://github.com/preservim/nerdtree/blob/master/doc/NERDTree.txt>

```
# 打开文件
o  # 打开文件、目录、书签
i  # 纵向拆分
s  # 横向拆分

# 创建与删除
ma # 创建文件或目录
md # 删除文件或目录

# 根目录
C  # 将所选目录更改为根目录
u  # 将树根目录上移一个目录
CD # 将树根更改为 CWD
cd # 将 CWD 更改为所选节点的目录

# 刷新与隐藏
R  # 以递归方式刷新当前根
I  # 切换是否显示隐藏文件
```

## Windows

- Vundle 安装

```
Plugin 'preservim/nerdtree'
```

- `_vimrc`

```
" 目录结构
    autocmd StdinReadPre * let s:std_in=1
    autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
```

## Ubuntu

- Vundle 安装

```
Plugin 'preservim/nerdtree'
```

- `.vimrc`

```
" 目录结构
    autocmd StdinReadPre * let s:std_in=1
    autocmd VimEnter * if argc() == 0 && !exists("s:std_in") | NERDTree | endif
```

# 序列（VisIncr）

项目 <https://github.com/vim-scripts/VisIncr>

```
# 数字
:'<,'>I 2 # 向左对齐二倍递增
:'<,'>II  # 向右对齐

# 字母
:'<,'>IA
```

## Ubuntu

```
Plugin 'https://github.com/vim-scripts/VisIncr.git'
```

## Windows

```
Plugin 'https://github.com/vim-scripts/VisIncr.git'
```

# 自动配对（auto-pairs）

项目 <https://github.com/jiangmiao/auto-pairs>

## Ubuntu

```
Plugin 'jiangmiao/auto-pairs'
```

## Windwos

```
Plugin 'jiangmiao/auto-pairs'
```

# 状态线（vim-powerline）

## Ubuntu

```
Plugin 'Lokaltog/vim-powerline'
```

## Windows

```
Plugin 'Lokaltog/vim-powerline'
```

# 缩进线（indentLine）

项目 <https://github.com/Yggdroot/indentLine>

## Ubuntu

```
Plugin 'https://github.com/Yggdroot/indentLine.git'
```

## Windows

```
Plugin 'https://github.com/Yggdroot/indentLine.git'
```
