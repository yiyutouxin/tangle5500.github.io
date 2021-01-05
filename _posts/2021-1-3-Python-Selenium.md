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

# 常用

```
from selenium import webdriver

driver = webdriver.Chrome()
driver.get('https://www.baidu.com/')
```

```
from selenium import webdriver

chrome_options = webdriver.ChromeOptions()                                                              # 选项
chrome_options.add_experimental_option("excludeSwitches", ['enable-automation']);                       # Chrome 正受到自动测试软件的控制
chrome_options.add_argument(r'--user-data-dir=D:\Tangle\A_TT\Tools\no_install\Chrome\Tangle\User Data') # 个人资料选项
driver = webdriver.Chrome(chrome_options=chrome_options)                                                # 加载选项
driver.get('https://www.baidu.com/')                                                                    # 浏览网页
```

# 查找元素

| 查找一个元素                      | 查找多个元素                       | 作用                    |
| --------------------------------- | ---------------------------------- | ----------------------- |
| find_element_by_id                | find_elements_by_id                | 通过元素 id 查找        |
| find_element_by_name              | find_elements_by_name              | 通过元素 name 查找      |
| find_element_by_xpath             | find_elements_by_xpath             | 通过 xpath 表达式查找   |
| find_element_by_link_text         | find_elements_by_link_tex          | 通过完整超链接查找      |
| find_element_by_partial_link_text | find_elements_by_partial_link_text | 通过部分链接查找        |
| find_element_by_tag_name          | find_elements_by_tag_name          | 通过标签查找            |
| find_element_by_class_name        | find_elements_by_class_name        | 通过类名进行查找        |
| find_elements_by_css_selector     | find_elements_by_css_selector      | 通过 css 选择器进行查找 |

```
driver.find_element_by_id("id")
driver.find_elements_by_id("id")[0]
```

# 等待

```
def wait(css, for_num=10, wait_time=0.1, css_if=False):
    for i in range(for_num):
        try:
            if driver.find_element_by_css_selector(css): # 查找元素
                return True
        except:
            if css_if:
                break
        time.sleep(wait_time)
    return False
    
wait("#id")
```

# 浏览器操作

# 鼠标

# 键盘

# javascript

# 截图

# cookie

# 文件上传
