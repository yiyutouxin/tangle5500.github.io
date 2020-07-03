---
layout:     post
title:      Python Class
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

# 类的创建

| 语法        | 作用     |
| ----------- | -------- |
| class 类名: | 类定义   |
| x = 类名()  | 实例化类 |

```python
class foo:
    def __init__(self):
        self.fun()
    def fun(self):
        print('demo')
foo()
```

## 特殊方法

``` python
def func(self):
    print('hello world')
foo = type('foo',(object,),{'func':func})
```

# 类的方法

| 语法                 | 作用         |
| -------------------- | ------------ |
| def 函数名(self):    | 定义方法     |
| def \__init__(self): | 定义构造方法 |
| 类名().函数名()      | 访问类的方法 |

## 类的私有方法

| 语法                | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| def __函数名(self): | 两个下划线开头，声明该方法为私有方法，只能在类的内部调用 ，不能在类的外部调用。 |
| self.__函数名()     | 在类内部中使用时。                                           |

## 类的专有方法

| 语法           | 作用                       | 外部调用         |
| -------------- | -------------------------- | ---------------- |
| \__init__:     | 构造函数，在生成对象时调用 | 类名()           |
| \__call__:     | 函数调用                   | 类名()()         |
| \__int__       |                            | int(类名())      |
| \__str__       |                            | str(类名())      |
| \__del__ :     | 析构函数，释放对象时使用   |                  |
| \__repr__ :    | 打印，转换                 |                  |
| \__setitem__ : | 按照索引赋值               | 类名()[0] = 666  |
| \__getitem__:  | 按照索引获取值             | 类名()[1]        |
| \__delitem__:  |                            | del 类名()[2]    |
| \__dict__      | 类成员通过字典形式返回     | 类名().\__dict__ |
| \__len__:      | 获得长度                   |                  |
| \__cmp__:      | 比较运算                   |                  |
| \__add__:      | 加运算                     |                  |
| \__sub__:      | 减运算                     |                  |
| \__mul__:      | 乘运算                     |                  |
| \__truediv__:  | 除运算                     |                  |
| \__mod__:      | 求余运算                   |                  |
| \__pow__:      | 乘方                       |                  |

## 运算符重载

Python 同样支持运算符重载，我们可以对类的专有方法进行重载。

```python
class Vector:
   def __init__(self, a, b):
      self.a = a
      self.b = b
 
   def __str__(self):
      return 'Vector (%d, %d)' % (self.a, self.b)
   
   def __add__(self,other):
      return Vector(self.a + other.a, self.b + other.b)
 
v1 = Vector(2,10)
v2 = Vector(5,-2)
print (v1 + v2)
```

# 类的属性

| 语法      | 作用         |
| --------- | ------------ |
| 变量 = 0  | 类的属性     |
| 类名.变量 | 访问类的属性 |

## 类的私有属性

| 语法        | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| __变量 = 0  | 两个下划线开头，声明该属性为私有，不能在类的外部被使用或直接访问。 |
| self.__变量 | 在类内部的方法中使用时。                                     |

# 继承

| 语法                       | 作用               |
| -------------------------- | ------------------ |
| class 子类名(父类名):      | 继承               |
| 父类名.\__init__(self,n,a) | 调用父类的构造函数 |

继承后可以使用父类的方法

```python
class people:
    age = 0
    def __init__(self, a):
        self.age = a
    def speak(self):
        print(self.name,self.age)
        
class student(people):
    name = ''
    def __init__(self, n, a):
        people.__init__(self, a)
        self.name = n

s = student('linux',1970)
s.speak()
```

## 多继承

括号内左侧优先调用，一侧走到黑。

如果有同一个根，根最后执行。

| 语法                   | 作用     |
| ---------------------- | -------- |
| class 子类(父类,父类): | 多重继承 |

## 方法重写

| 语法                             | 作用                             |
| -------------------------------- | -------------------------------- |
| super(子类名, 子类实例).函数名() | 用子类对象调用父类已覆盖的方法。 |

方法重写后如果还想执行父类的方法用 super

```python
class Parent:
    def myMethod(self):
        print('调用父类方法')

class Child(Parent):
    def myMethod(self):
        print('调用子类方法')
        
c = Child()
c.myMethod()
super(Child, c).myMethod()
```
