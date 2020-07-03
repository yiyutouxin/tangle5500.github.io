---
layout:     post
title:      Java Number & Math 类
subtitle:   
date:       2019-12-5
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Java
---

# Math 类

```java
public class Test {  
    public static void main (String []args)  
    {  
        System.out.println("90 度的正弦值：" + Math.sin(Math.PI/2));  
        System.out.println("0度的余弦值：" + Math.cos(0));  
        System.out.println("60度的正切值：" + Math.tan(Math.PI/3));  
        System.out.println("1的反正切值： " + Math.atan(1));  
        System.out.println("π/2的角度值：" + Math.toDegrees(Math.PI/2));  
        System.out.println(Math.PI);  
    }  
}
```

上面运行结果

````java
90 度的正弦值：1.0
0度的余弦值：1.0
60度的正切值：1.732
1的反正切值： 0.785
π/2的角度值：90.0
3.141592653589793
````

# Number & Math 类方法

# Math 的 floor、round 和 ceil 方法比较

```java
public class Main {   
    public static void main(String[] args) {   
        double[] nums = { 1.4, 1.5, 1.6, -1.4, -1.5, -1.6 };   
        for (double num : nums) {   
            test(num);   
        }   
    }   

    private static void test(double num) {   
        System.out.println("Math.floor(" + num + ")=" + Math.floor(num));   
        System.out.println("Math.round(" + num + ")=" + Math.round(num));   
        System.out.println("Math.ceil(" + num + ")=" + Math.ceil(num));   
    }
}
```

上面运行结果

```java
Math.floor(1.4)=1.0
Math.round(1.4)=1
Math.ceil(1.4)=2.0
Math.floor(1.5)=1.0
Math.round(1.5)=2
Math.ceil(1.5)=2.0
Math.floor(1.6)=1.0
Math.round(1.6)=2
Math.ceil(1.6)=2.0
Math.floor(-1.4)=-2.0
Math.round(-1.4)=-1
Math.ceil(-1.4)=-1.0
Math.floor(-1.5)=-2.0
Math.round(-1.5)=-1
Math.ceil(-1.5)=-1.0
Math.floor(-1.6)=-2.0
Math.round(-1.6)=-2
Math.ceil(-1.6)=-1.0
```
