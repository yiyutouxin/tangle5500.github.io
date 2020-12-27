---
layout:  post
title:   GitHub Git 安装
date:    2020-6-19
author:  Tangle
catalog: true
tags:
    - GitHub
---

# 安装

- 官网 <http://git-scm.com/>

- 下载 `64-bit Git for Windows Portable.`

- 环境变量

```
Git
Git\bin
```

# 初始化

## 配置用户

```
git config --global user.name "username"   # 修改用户
git config --global user.email "useremail" # 修改邮箱
git config --list                          # 查看配置
ssh-keygen -t rsa -C "useremail"           # 生成 SSH
```

- 把 `id_rsa.pub` 中的文本全部复制到 github 上

- 在操作中出现 `CredentialHelperSelector` 弹窗选择 `store` 或者执行下方命令

```
git config --global credential.helper store
```

## 修改用户

- **目录**：$HOME

```
.bash_history                              # 历史命令
.gitconfig                                 # 用户存储
.git-credentials                           # 资格证书
git config --global user.name "username"   # 修改用户
git config --global user.email "useremail" # 修改邮箱
```

- 修改**资格证书**中的账号密码
