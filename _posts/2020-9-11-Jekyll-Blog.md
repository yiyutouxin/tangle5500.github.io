---
layout:     post
title:      Jekyll Blog
subtitle:   
date:       2020-9-11
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Jekyll
---

# Jekyll

0. **官网：**https://www.jekyll.com.cn/
0. **模版：**https://github.com/jekyll/jekyll/wiki/Sites

## _config.yml

### 基础设置

```
# Site settings
title: You Blog                     # 博客的标题
SEOTitle: 你的博客 | You Blog        # 浏览器标题
header-img: img/post-bg-rwd.jpg     # 显示在首页的背景图片
email: You@gmail.com    
description: "You Blog"             # 网站介绍
keyword: "关键词"                    # 关键词
url: "https://qiubaiying.github.io" # 这个就是填写你的博客地址
baseurl: ""                         # 这个我们不用填写
```

### 侧边栏

```
# Sidebar settings
sidebar: true                     # 是否开启侧边栏
sidebar-about-description: "描述"  # 关于
sidebar-avatar:/img/avatar-by.JPG # 你的个人头像
```

### 首页标签

```
# Featured Tags
featured-tags: true        # 是否使用首页标签
featured-condition-size: 1 # 相同标签数量大于这个数才会出现在首页
```

## 写文章

### 文件命名

```
2019-9-16-My-First-Post.md
```

### 格式

```
---
layout:     post                    # 布局
title:      My First Post           # 标题
subtitle:   Hello World             # 副标题
date:       2017-02-06              # 日期
author:     Tangle                  # 作者
header-img: img/post-bg-2015.jpg    # 文章标题背景图片
catalog: true                       # 目录
mathjax: true                       # 数学公式
tags:                               # 标签
    - 生活
    - 日常
---
```

## jekyll 使用 Mathjax

路径：_includes/head.html

# 域名

## 注册免费域名

http://www.freenom.com/zh/index.html

## 域名解析

https://www.dnspod.cn

1、添加域名

2、进入 Freenom — servrces — My Domains — Manage Domain — Management Tools — Nameservers

3、把 dnspod 两个记录值添加进去

4、然后在 dnspod 中添加 3个纪录

| 主机纪录 | 纪录类型 | 线路类型 | 记录值                  | TTL  |
| -------- | -------- | -------- | ----------------------- | ---- |
| *        | A        | 默认     | ping username.github.io | 600  |
| @        | A        | 默认     | ping username.github.io | 600  |
| www      | CNAME    |          | username.github.io      | 600  |

5、把注册好的域名添加到 github 的 CNAME文件中
