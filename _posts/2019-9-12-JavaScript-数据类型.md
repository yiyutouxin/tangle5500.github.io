---
layout:     post
title:      JavaScript 数据类型
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - JavaScript
---

| 语法                    | 类              | 作用         |
| ----------------------- | --------------- | ------------ |
| var age;                | Undefined       | 未定义       |
| var length =  x * 10 ;  | Number          | 数字         |
| var name = "easy";      | String          | 字符串       |
| var list = [1,2,3];     | Array \| object | 数组         |
| var x = true,y = false; | Boolean         | 布尔         |
| var age = null;         | Null            | 对空         |
| var age = new String;   |                 | 声明变量类型 |

# 对象

| 语法                                 | 类              | 作用 |
| ------------------------------------ | --------------- | ---- |
| var person = {name:"easy", age:233}; | [object Object] | 对象 |

## 对象属性有两种寻址方式

```javascript
var dict={
    name : "easy",
    age : 233
};

value = dict.name;
value= dict["name"];
```

## 调用对象中的方法

```javascript
<script>
var obj =
{
    age : 233,
    func : function()
    {
        return obj.age;
    }
};

alert(obj.func());
</script>
```

## 判断类型

| 语法                                                  | 返回值  | 作用           |
| ----------------------------------------------------- | ------- | -------------- |
| myArray.constructor.toString().indexOf("Array") > -1; | Boolean | 判断是否为数组 |
| myDate.constructor.toString().indexOf("Date") > -1;   | Boolean | 判断是否为日期 |

# 类型转换

## 转换成字符串

| 语法            | 作用         |
| --------------- | ------------ |
| String(变量)    | 转换成字符串 |
| 变量.toString() | 转换成字符串 |

## 转换成数字

| 语法               | 运算符 | 作用                                 |
| ------------------ | ------ | ------------------------------------ |
| Number(变量)       |        | 转换成数字，空字符串为 0。           |
| 变量.toFixed()     |        | 转换指定长度的小数点                 |
| 变量.toPrecision() |        | 转换数字为指定长度，小数点四舍五入。 |
| parseInt(变量)     |        | 转换为整数                           |
| parseFloat(变量)   |        | 转换为浮点数                         |
| var num = + "233"; | +      | 转换成数字                           |
