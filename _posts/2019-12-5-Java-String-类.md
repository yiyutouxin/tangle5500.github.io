---
layout:     post
title:      Java String 类
subtitle:   
date:       2019-12-5
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Java
---

# 创建字符串

```java
String name = "Tangle";
```

# 字符串长度

```java
public class Test {
    public static void main(String args[]) {
        String site = "tangle";
        int len = site.length();
        System.out.println( "name : " + len );
    }
}
```

上面运行结果

```java
name : 6
```

# 连接字符串

```java
public class Test {
    public static void main(String args[]) {     
        String string1 = "Tangle";     
        System.out.println("name: " + string1);  
    }
}
```

上面运行结果

```java
name: Tangle
```

# 创建格式化字符串

# String 方法
