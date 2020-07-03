---
layout:     post
title:      GitHub Git 配置
subtitle:   
date:       2020-6-26
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
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
0. 在操作中出现 **CredentialHelperSelector** 弹窗选择 **<no helper>** 即可

## 修改用户

```
# C:\Users\Tangle
.bash_history    # 历史命令
.gitconfig       # 用户存储
.git-credentials # 证书
```

0. **修改用户：**git config --global user.name "username"
0. **修改邮箱：**git config --global user.email "useremail"
0. ssh-keygen -t rsa -C "useremail"
0. 把 **id_rsa.pub** 中的文本全部复制到 github 上
0. 修改**证书**中的账号密码
