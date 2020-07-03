---
layout:     post
title:      Python Django
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

# 创建第一个项目

```
$ django-admin startproject HelloWorld
$ tree /f
```

目录说明

|                         |                                                              |
| ----------------------- | ------------------------------------------------------------ |
| HelloWorld              | 项目的容器                                                   |
| manage.py               | 一个实用的命令行工具，可让你以各种方式与该 Django 项目进行交互 |
| HelloWorld/\__init__.py | 一个空文件，告诉 Python 该目录是一个 Python 包               |
| HelloWorld/settings.py  | 该 Django 项目的设置与配置                                   |
| HelloWorld/urls.py      | 该 Django 项目的 URL 声明， 一份由 Django 驱动的网站目录     |
| HelloWorld/wsgi.py      | 一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目。        |

# 启动服务器

```
$ python manage.py runserver 0.0.0.0:8000
```

# 访问服务器

浏览器中输入本机 IP 地址 127.0.0.1:8000

# 视图和 URL 配置

在先前创建的 HelloWorld 目录下的 HelloWorld 目录新建一个 view.py 文件并输入下面代码

```python
from django.http import HttpResponse
 
def hello(request):
    return HttpResponse("Hello world ! ")
```

接着绑定 URL 与视图函数。打开 urls.py 文件，删除原来代码，将下面代码复制粘贴到 urls.py 文件中

```python
from django.conf.urls import url
 
from . import view
 
urlpatterns = [
    url(r'^$', view.hello),
]
```

# path() 函数

path() 可以接收四个参数，分别是两个必选参数和两个可选参数 

| 参数   | 类型 | 作用                                                      |
| ------ | ---- | --------------------------------------------------------- |
| route  | str  | 表示 URL 规则，与之匹配的 URL 会执行对应的第二个参数 view |
| view   |      | 用于执行与正则表达式匹配的 URL 请求                       |
| kwargs |      | 视图使用的字典类型的参数                                  |
| name   |      | 用来反向获取 URL                                          |

```python
path(route, view, kwargs=None, name=None)
```

Django2.0 中可以使用 re_path() 方法来兼容 1.x 版本中的 url() 方法，一些正则表达式的规则也可以通过 re_path() 来实现 

```python
from django.urls import include, re_path

urlpatterns = [
    re_path(r'^index/$', views.index, name='index'),
    re_path(r'^bio/(?P<username>\w+)/$', views.bio, name='bio'),
    re_path(r'^weblog/', include('blog.urls')),
    ...
]
```

# 注意

项目中如果代码有改动，服务器会自动监测代码的改动并自动重新载入，所以如果你已经启动了服务器则不需手动重启。 

# 参考

<https://www.runoob.com/django/django-first-app.html>
