---
layout:  post
title:   Ubuntu shell
date:    2019-9-12
author:  Tangle
catalog: true
tags:
    - Ubuntu
---

# zsh

0. 浏览 <https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH>
    ```
    apt install zsh # 安装 zsh
    ```
0. 浏览 <https://github.com/ohmyzsh/ohmyzsh>
    ```
    git clone https://github.com/ohmyzsh/ohmyzsh.git # 克隆配置文件
    cp ohmyzsh/templates/zshrc.zsh-template ~/.zshrc # 拷贝到用户目录
    source ~/.zshrc                                  # 声明配置文件来源
    ```
0. 切换
    ```
    cat /etc/shells  # 查看 shell
    chsh -s /bin/zsh # 切换 shell
    ```
