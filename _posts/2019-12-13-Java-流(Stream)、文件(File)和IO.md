---
layout:     post
title:      Java 流(Stream)、文件(File)和IO
subtitle:   
date:       2019-12-13
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Java
---

# 从控制台读取多字符输入

```java
//使用 BufferedReader 在控制台读取字符

import java.io.*;

public class BRRead {
    public static void main(String args[]) throws IOException {
        char c;
        // 使用 System.in 创建 BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        System.out.println("输入字符, 按下 'q' 键退出。");
        // 读取字符
        do {
            c = (char) br.read();
            System.out.println(c);
        } while (c != 'q');
    }
}
```

# 从控制台读取字符串

```java
//使用 BufferedReader 在控制台读取字符
import java.io.*;

public class Test {
    public static void main(String args[]) throws IOException {
        // 使用 System.in 创建 BufferedReader
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String str;
        System.out.println("Enter lines of text.");
        System.out.println("Enter 'end' to quit.");
        do {
            str = br.readLine();
            System.out.println(str);
        } while (!str.equals("end"));
    }
}
```

# 控制台输出

```java
import java.io.*;
 
//演示 System.out.write().
public class Test {
    public static void main(String args[]) {
        int b;
        b = 'A';
        System.out.write(b);
        System.out.write('\n');
    }
}
```

上面运行结果

```java
A
```

# 读写文件

# 目录

## 创建目录

```java
import java.io.File;
 
public class Test {
    public static void main(String args[]) {
        String dirname = "./tmp/test";
        File d = new File(dirname);
        // 现在创建目录
        d.mkdirs();
    }
}
```

## 读取目录

```java
import java.io.File;
 
public class Test {
    public static void main(String args[]) {
        String dirname = "./tmp";
        File f1 = new File(dirname);
        if (f1.isDirectory()) {
            System.out.println("目录 " + dirname);
            String s[] = f1.list();
            for (int i = 0; i < s.length; i++) {
                File f = new File(dirname + "/" + s[i]);
                if (f.isDirectory()) {
                    System.out.println(s[i] + " 是一个目录");
                } else {
                    System.out.println(s[i] + " 是一个文件");
                }
            }
        } else {
            System.out.println(dirname + " 不是一个目录");
        }
    }
}
```

上面运行结果

```java
目录 tmp
test 是一个目录
```
## 删除目录或文件

```java
import java.io.File;

public class Test {
    public static void main(String args[]) {
        // 这里修改为自己的测试目录
        File folder = new File("./tmp/test/");
        deleteFolder(folder);
    }

    // 删除文件及目录
    public static void deleteFolder(File folder) {
        File[] files = folder.listFiles();
        if (files != null) {
            for (File f : files) {
                if (f.isDirectory()) {
                    deleteFolder(f);
                } else {
                    f.delete();
                }
            }
        }
        folder.delete();
    }
}
```
