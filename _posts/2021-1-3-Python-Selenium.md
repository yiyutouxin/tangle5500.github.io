---
layout:  post
title:   Python Selenium
date:    2021-1-3
author:  Tangle
catalog: true
tags:
    - Python
---

# 安装

- 浏览 <http://npm.taobao.org/mirrors/chromedriver/83.0.4103.14/>

```
3.6.5        # Python
83.0.4103.14 # Google Chrome
83.0.4103.14 # chromedriver
```

- 目录

```
Python
    python.exe
    chromedriver.exe
Chrome
    chrome.exe
```

# 基础

```
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.baidu.com/')
```

# 常用

```
from selenium import webdriver

chrome_options = webdriver.ChromeOptions()                                                              # 选项
chrome_options.add_argument(r'--user-data-dir=D:\Tangle\A_TT\Tools\no_install\Chrome\Tangle\User Data') # 个人资料选项
driver = webdriver.Chrome(chrome_options=chrome_options)                                                # 加载选项
driver.get('https://member.bilibili.com/platform/upload-manager/article')                               # 浏览网页
```
