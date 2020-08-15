---
layout:     post
title:      Markdown mermaid
subtitle:   
date:       2019-10-11
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Markdown
---

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>
  
<div class="mermaid">
    graph LR
        A(text)--text-->B(text)
        C(text)--text-->B(text)
</div>
```

# 流程图

## 图形

### 布局方向

```text
graph TD # 从上到下
graph TB # 从上到下
graph BT # 从下到上
graph RL # 从右到左
graph LR # 从左到右
```

## 节点和形状

```
graph TD
    A         # 默认节点
    A[text]   # 文本节点
    A(text)   # 圆边节点
    A((text)) # 圆形节点
    A>text]   # 非对称节点
    A{text}   # 菱形节点
```

### 节点之间的链接

```text
graph TD
    A-->B                   # 箭头链接
    A---B                   # 开放链接
    A---|text|B             # 链接上的文字
    A--text---B             # 链接上的文字
    A-->|text|B             # 箭头文字链接
    A--text-->B             # 箭头文字链接
    A-.->B                  # 虚线链接
    A-.text.->B             # 文字虚线链接
    A==>B                   # 粗链接
    A["text"]               # 破环语法的特殊字符
    A["text"]-->B["#9829;"] # 实体代码以转义字符
```

# 参考

<https://mermaidjs.github.io/#/> 
