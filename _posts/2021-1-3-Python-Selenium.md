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

| 查找一个元素                        | 查找多个元素                         | 作用                    |
| ----------------------------------- | ------------------------------------ | ----------------------- |
| `find_element_by_id`                | `find_elements_by_id`                | 通过元素 id 查找        |
| `find_element_by_name`              | `find_elements_by_name`              | 通过元素 name 查找      |
| `find_element_by_xpath`             | `find_elements_by_xpath`             | 通过 xpath 表达式查找   |
| `find_element_by_link_text`         | `find_elements_by_link_text`         | 通过 text 查找          |
| `find_element_by_partial_link_text` | `find_elements_by_partial_link_text` | 通过部分 text 查找      |
| `find_element_by_tag_name`          | `find_elements_by_tag_name`          | 通过 tag 查找           |
| `find_element_by_class_name`        | `find_elements_by_class_name`        | 通过 class 进行查找     |
| `find_element_by_css_selector`      | `find_elements_by_css_selector`      | 通过 css 选择器进行查找 |

```
driver.find_element_by_css_selector(".class #id")
driver.find_elements_by_id("id")[0]
```

# 等待

```
def wait_if(css, for_num=20, wait_time=0.1, css_if=False):
    for i in range(for_num):
        try:
            if driver.find_element_by_css_selector(css): # 查找元素
                return True
        except:
            if css_if:
                break
        time.sleep(wait_time)
    return False

if wait_if(".class"): pass
```

# 行为

```
from selenium import webdriver
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://www.baidu.com/")
elem = driver.find_element_by_id("kw")
elem.clear()                # 清空输入框
elem.send_keys("Tangle")    # 输入字符串
elem.send_keys(Keys.RETURN) # 回车
```

# 键盘

```
send_keys(Keys.ENTER)        # 回车
send_keys(Keys.F1)           # F1
send_keys(Keys.CONTROL, "c") # ctrl + c
send_keys(Keys.TAB)          # tab
```

# 鼠标

```
click()         # 左键单击
context_click() # 右键单击
double_click()  # 左键双击
```

## 悬停

```
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains

driver = webdriver.Chrome()
driver.get("https://www.baidu.com")
ele = driver.find_element_by_link_text("更多")      # 查找元素
ActionChains(driver).move_to_element(ele).perform() # 悬停
```

# 浏览器操作

```
driver.close() # 关闭当前标签
driver.quit()  # 关闭浏览器
```

# javascript

# 截图

# cookie

# 文件上传
