---
layout:     post
title:      SVG animate 动画
subtitle:   
date:       2019-11-23
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - SVG
---

```html
<svg>
    <circle id="path5240" cx="84.288696" cy="92.51487" r="43.350426" >
        <animate
            attributeName="r"
            from="0"
            to="90"
            dur="1s"
            repeatCount="indefinite"
        />
    </circle>
</svg>
```	

```html
<svg>
    <rect
        id="ant"
        x="10"
        y="10"
        width="50"
        height="50"
        fill="blue">
    </rect>
    <animate
        xlink:href="#ant"
        attributeName="x" 
        to="100"
        dur="3s"
        begin="0s"
    />
</svg>
```

# 点击开始动画

| 参数                   | 作用                                |
| ---------------------- | ----------------------------------- |
| values="10;200;20;200" | 类似 from 和 to ，会忽略 from 和 to |

```html
<svg>
    <rect
        id="ant"
        x="10"
        y="10"
        width="50"
        height="50"
        fill="blue">
    </rect>
    <animate
        xlink:href="#ant"
        attributeName="x" 
        values="10;200;10;200"
        dur="1s"
        begin="ant.click + 1s"/>
</svg>
```

# begin 时间偏移

 ```html
<svg>
    <rect id="one" x="0" y="10" width="50" height="50" fill="blue"></rect>
    <rect id="two" x="0" y="70" width="50" height="50" fill="blue"></rect>
    <animate
        xlink:href="#one"
        attributeName="x"
        values="0;200"
        dur="5s"
        fill="freeze"
        id="rect-anim"/>
    <animate
        xlink:href="#two"
        attributeName="x" 
        values="0;200"
        fill="freeze"
        dur="5s"
        begin="rect-anim.begin + 1s"/>
</svg>

 ```

第一个矩形重复两次 2秒之后第二个矩形开始动画

```html
<svg>
    <rect id="one" x="0" y="10" width="50" height="50" fill="blue"></rect>
    <rect id="two" x="0" y="70" width="50" height="50" fill="blue"></rect>
    <animate
        xlink:href="#one"
        attributeName="x"
        values="0;200"
        dur="5s"
        repeatCount="4"
        fill="freeze"
        id="rect-anim"/>
    <animate
        xlink:href="#two"
        attributeName="x" 
        values="0;200"
        fill="freeze"
        dur="5s"
        begin="rect-anim.repeat(2)+2s"/>
</svg>
```
