---
layout:     post
title:      Python Python 调用 C
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

```c
#include <stdio.h> 

int add_int(int num1, int num2);  // 定义函数

int main ()
{ 
    int a = 100; 
    int b = 400; 
    int ret; 
    ret = add_int(a, b); 
    printf( "%d",ret); 
    return 0;
} 

int add_int(int num1, int num2)
{ 
    return num1+num2; 
}
```

# python 调用 c

test.c

``` c
#include <stdio.h>

int add_int(int, int); // 定义函数
float add_float(float, float);

int add_int(int num1, int num2){
    return num1 + num2;
}

float add_float(float num1, float num2){
    return num1 + num2;
}
```

| 系统    | 命令                                                         | 作用     |
| ------- | ------------------------------------------------------------ | -------- |
| Linux   | gcc -shared -Wl,-soname,adder -o adder.so -fPIC test.c       | 编译 dll |
| Mac     | gcc -shared -Wl,-install_name,adder.so -o adder.so -fPIC test.c | 编译 dll |
| Windows | gcc -shared -Wl,-soname,adder -o adder.dll -fPIC test.c      | 编译 dll |

```
gcc -shared -Wl,-soname,adder -o adder.dll -fPIC test.c
```

test.py

```python
# -*- coding=utf-8 -*-
from ctypes import *

adder = CDLL('./adder.dll')

res_int = adder.add_int(4,5)
print(res_int)

a = c_float(5.5)
b = c_float(4.1)

add_float = adder.add_float # 添加函数
add_float.restype = c_float # 添加类型
print(add_float(a, b))
```
