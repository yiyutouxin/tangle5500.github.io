---
layout:     post
title:      JavaScript 正则表达式
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

| 语法                                             | 返回值      | 作用                 |
| ------------------------------------------------ | ----------- | -------------------- |
| var new_str = str.search(/内容/i)                | Number      | 匹配内容的起始位置   |
| var new_str = str.search("内容")                 | Number      | 匹配内容的起始位置   |
| var new_str = str.replace(/内容/i,233);          | String      | 匹配内容并替换       |
| var new_str = str.replace("内容",233);           | String      | 匹配内容并替换       |
| var str = new ReExp("233");<br>str.test("内容")  | Boolean     | 匹配内容中是否有 233 |
| /233/.test("内容")                               | Boolean     | 匹配内容中是否有 233 |
| var str = new RegExp("233");<br>str.exec("内容") | 233 \| null | 匹配内容中是否有 233 |
| /233/.exec("内容")                               | 233 \| null | 匹配内容中是否有 233 |

| 修饰符 | 作用                     |
| ------ | ------------------------ |
| i      | 执行对大小写不敏感的匹配 |
| g      | 执行贪婪匹配             |
| m      | 执行多行匹配             |

```javascript
var str = "easy love"; 
var new_str = str.search(/love/i);
document.write(new_str)
```

# 正则表达式模式

| 表达式 | 作用                     |
| ------ | ------------------------ |
| [abc]  | 查找方括号之间的任何字符 |
| [0-9]  | 查找任何 0-9 的数字      |
| (x\|y) | 查找任何以 \| 分隔的选项 |

| 元字符 | 作用         |
| ------ | ------------ |
| \d     | 查找数字     |
| \s     | 查找空白字符 |
| \b     | 匹配单词边界 |

| 量词 | 作用                               |
| ---- | ---------------------------------- |
| n+   | 匹配任何包含至少一个 n 的字符串    |
| n*   | 匹配任何包含 0 个或多个 n 的字符串 |
| n?   | 匹配任何包含 0 个或多个 n 的字符串 |
