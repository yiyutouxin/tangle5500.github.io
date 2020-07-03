---
layout:     post
title:      Java StringBuffer 和 StringBuilder 类
subtitle:   
date:       2019-12-5
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Java
---

```java
public class Test{
    public static void main(String args[]){
        StringBuffer sBuffer = new StringBuffer("T");
        sBuffer.append("a");
        sBuffer.append("n");
        sBuffer.append("g");
        sBuffer.append("l");
        sBuffer.append("e");
        System.out.println(sBuffer);  
    }
}
```

上面运行结果

```java
Tangle
```

# StringBuffer 方法
