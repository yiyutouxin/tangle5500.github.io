---
layout:  post
title:   GitHub Git 远程仓库
date:    2020-6-19
author:  Tangle
catalog: true
tags:
    - GitHub
---

# 用户

## 配置用户

```
git config --global user.name "username"   # 修改用户
git config --global user.email "useremail" # 修改邮箱
git config --list                          # 查看配置
ssh-keygen -t rsa -C "useremail"           # 生成 SSH
```

- 把 `id_rsa.pub` 中的文本复制到 github 上

- 提交出现 `CredentialHelperSelector` 选择 `store` 勾选 `Always use this from now on` 或者执行下方命令

```
git config --global credential.helper store
```

```
Git\etc\gitconfig
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

# 修改文件

```
git clone git@github.com:username/username.github.io.git
git status
git add "*"
git commit -m init
git push origin master
```

# 克隆分支

```
git clone -b release git@github.com:username/username.github.io.git
git clone -b v1.0 git@github.com:username/username.github.io.git
```

```
git clone -b v 1.0 git@github.com:username/username.github.io.git
git checkout master
```

# 更新

```
git pull
```

# 教程

<https://www.runoob.com/git/git-tutorial.html>
