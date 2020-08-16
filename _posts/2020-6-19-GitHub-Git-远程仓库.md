---
layout:     post
title:      GitHub Git 远程仓库
subtitle:
date:       2020-6-19
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - GitHub
---

# 用户

## 初始化用户

0. **修改用户：**git config --global user.name "username"
0. **修改邮箱：**git config --global user.email "useremail"
0. git config --list
0. ssh-keygen -t rsa -C "useremail"
0. 把 **id_rsa.pub** 中的文本全部复制到 github 上
0. 在操作中出现 **CredentialHelperSelector** 弹窗选择 **store**
    ```
    git config --global credential.helper store
    ```
    
## 修改用户

```
# C:\Users\Tangle
.bash_history    # 历史命令
.gitconfig       # 用户存储
.git-credentials # 资格证书
```

0. **修改用户：**git config --global user.name "username"
0. **修改邮箱：**git config --global user.email "useremail"
0. 修改**资格证书**中的账号密码

# 修改文件

0. git clone git@github.com:username/username.github.io.git
0. 修改文件
0. git status
0. git add "*"
0. git commit -m init
0. git push origin master

# 克隆标签

0. git clone git@github.com:username/username.github.io.git
0. git checkout v1.0
