---
layout:     post
title:      Flask-Flask 简介
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Flask
---

现在在 Python shell 中输入下面脚本

| 语法                      | 作用            |
| ------------------------- | --------------- |
| user = request.form['nm'] | post 获取表单值 |
| request.args.get('nm')    | get 获取表单值  |

```python
from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/success/<name>')
def success(name):
   return 'welcome %s' % name

@app.route('/login',methods = ['POST', 'GET'])
def login():
   if request.method == 'POST':
      user = request.form['nm']
      return redirect(url_for('success',name = user))
   else:
      user = request.args.get('nm')
      return redirect(url_for('success',name = user))

if __name__ == '__main__':
   app.run(debug = True)
```

然后在浏览器中打开 login.html，在文本字段中输入 name 然后提交

# Request 对象

|         |                                                       |
| ------- | ----------------------------------------------------- |
| Form    | 它是一个字典对象，包含表单参数及其值的键和值对        |
| args    | 解析查询字符串的内容，它是问号（？）之后的URL的一部分 |
| Cookies | 保存Cookie名称和值的字典对象                          |
| files   | 与上传文件有关的数据                                  |
| method  | 当前请求方法                                          |

# 将表单数据发送到模版

```
127.0.0.1:5000
```

hello.py

``` python
from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/')
def student():
   return render_template('student.html')

@app.route('/result',methods = ['POST', 'GET'])
def result():
   if request.method == 'POST':
      result = request.form
      return render_template("result.html",result = result)

if __name__ == '__main__':
   app.run(debug = True)
```

templates\student.html

```html
<html>
    <body>
        <form action = "http://localhost:5000/result" method = "POST">
            <p>Name <input type = "text" name = "Name" /></p>
            <p>Physics <input type = "text" name = "Physics" /></p>
            <p>Chemistry <input type = "text" name = "chemistry" /></p>
            <p>Maths <input type ="text" name = "Mathematics" /></p>
            <p><input type = "submit" value = "submit" /></p>
        </form>
    </body>
</html>
```

emplates\result.html

```html
<!doctype html>
<html>
    <body>
        <table border = 1>
            {% for key, value in result.items() %}
            <tr>
                <th> {{ key }} </th>
                <td> {{ value }} </td>
            </tr>
            {% endfor %}
        </table>
    </body>
</html>
```

# Cookies

```python
# coding:utf-8

from flask import Flask, make_response, request

app = Flask(__name__)

# 设置cookie
@app.route("/")
def set_cookie():
    resp = make_response("success")  # "success"是响应体
    # 设置cookie, 默认有效期是临时cookie，浏览器关闭就失效
    resp.set_cookie("Name", "Python")
    # max_age设置有效期，单位：秒
    resp.set_cookie("Name2", "Python1", max_age=3600)
    # 设置cookie其实就是通过设置响应头实现的。
    # resp.headers["Set-Cookie"] = "Name3=Python3; Expires=Sat, 18-Nov-2017 04:36:04 GMT; Max-Age=3600; Path=/"
    return resp

# 获取cookie
@app.route("/get_cookie")
def get_cookie():
    c = request.cookies.get("Name")
    return c

# 删除cookie
@app.route("/delete_cookie")
def delete_cookie():
    resp = make_response("del success")
    # 删除cookie
    resp.delete_cookie("Name1")
    return resp

if __name__ == '__main__':
    app.run(debug=True)
```

## 设置 cookie

```
127.0.0.1:5000
```

```python
# coding:utf-8
from flask import Flask,make_response
import datetime
app = Flask(__name__)
@app.route('/')
def set_cookie():
   response=make_response('Hello World')
   response.set_cookie('Name','Hyman')
   '''设置 cookie 有效时长'''
   # outdate = datetime.datetime.today() + datetime.timedelta(days=30)
   # response.set_cookie('Name', 'Hyman', expires=outdate)
   return response

if __name__ == '__main__':
    app.run(debug=True)
```

## 获取cookie

```
127.0.0.1:5000/get_cookie
```

``` python
# coding:utf-8
from flask import Flask,make_response,request
import datetime
app = Flask(__name__)
'''设置 cookie'''
@app.route('/')
def set_cookie():
   response=make_response('Hello World')
   response.set_cookie('Name','Hyman')
   '''设置 cookie 有效时长'''
   # outdate = datetime.datetime.today() + datetime.timedelta(days=30)
   # response.set_cookie('Name', 'Hyman', expires=outdate)
   return response

'''获取 cookie'''
@app.route('/get_cookie')
def get_cookie():
    name=request.cookies.get('Name')
    return name

if __name__ == '__main__':
    app.run(debug=True)
```

我们还可以在模版中获取 cookie，然后渲染模版

hello.py

```python
# coding:utf-8
from flask import Flask,render_template
import datetime
app = Flask(__name__)
@app.route('/get_template')
def get_template():
    return render_template('test.html')

if __name__ == '__main__':
    app.run(debug=True)
```

test.html

```html
<h1>My name is {{request.cookies.get('Name')}}</h1>
```

## 删除 cookie

共有三种方法可以删除一个 cookie

1、可以通过浏览器中的设置来清除 cookie

2、使用 Response 的 set_cookie 进行清除

```python
# coding:utf-8
from flask import Flask,make_response

app = Flask(__name__)
@app.route('/del_cookie')
def del_cookie():
    response=make_response('delete cookie')
    response.set_cookie('Name','',expires=0)
    return response

if __name__ == '__main__':
    app.run(debug=True)
```

3、使用 Response 的 delete_cookie 方法

```python
# coding:utf-8
from flask import Flask,make_response

app = Flask(__name__)

@app.route('/del_cookie2')
def del_cookie2():
    response=make_response('delete cookie')
    response.delete_cookie('Name')
    return response

if __name__ == '__main__':
    app.run(debug=True)
```

# 消息闪现

| 参数     | 作用                                           |
| -------- | ---------------------------------------------- |
| message  | 参数是要闪现的实际消息                         |
| category | 参数是可选的。它可以是 error ，info 或 warning |

```python
flash(message, category)
```

为了从会话中删除消息，模板调用 get_flashed_messages()，两个参数都是可选的。如果接收到的消息具有类别，则第一个参数是元组。第二个参数仅用于显示特定消息

```
get_flashed_messages(with_categories, category_filter)
```

## 简单闪现

```python
from flask import Flask, flash, redirect, render_template, request, url_for

app = Flask(__name__)
app.secret_key = 'some_secret'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    error = None
    if request.method == 'POST':
        if request.form['username'] != 'admin' or \
                request.form['password'] != 'secret':
            error = 'Invalid credentials'
        else:
            flash('You were successfully logged in')
            return redirect(url_for('index'))
    return render_template('login.html', error=error)

if __name__ == "__main__":
    app.run(debug=True)
```

layout.html 

```html
<!doctype html>
<title>My Application</title>
{% with messages = get_flashed_messages() %}
  {% if messages %}
    <ul class=flashes>
    {% for message in messages %}
      <li>{{ message }}</li>
    {% endfor %}
    </ul>
  {% endif %}
{% endwith %}
{% block body %}{% endblock %}
```

index.html

```html
{% extends "layout.html" %}
{% block body %}
  <h1>Overview</h1>
  <p>Do you want to <a href="{{ url_for('login') }}">log in?</a>
{% endblock %}
```

login.html

```html
{% extends "layout.html" %}
{% block body %}
    <h1>Login</h1>
    {% if error %}
    <p class=error><strong>Error:</strong> {{ error }}
    {% endif %}
    <form action="" method=post>
    <dl>
        <dt>Username:
        <dd><input type=text name=username value="{{
            request.form.username }}">
        <dt>Password:
        <dd><input type=password name=password>
    </dl>
    <p><input type=submit value=Login>
    </form>
{% endblock %}
```

## 分类闪现

```python
flash(u'Invalid password provided', 'error')
```

## 过滤闪现消息

# 文件上传

|                                |                                            |
| ------------------------------ | ------------------------------------------ |
| app.config['UPLOAD_FOLDER']    | 定义上传文件夹的路径                       |
| app.config['MAX_CONTENT_PATH'] | 指定要上传的文件的最大大小（以字节为单位） |

```python
from flask import Flask, render_template, request
from werkzeug import secure_filename

app = Flask(__name__)

@app.route('/upload')
def upload_file_one():
    return render_template('upload.html')

@app.route('/uploader', methods=['GET', 'POST'])
def upload_file_two():
    if request.method == 'POST':
        f = request.files['file']
        f.save(secure_filename(f.filename))
        return 'file uploaded successfully'

if __name__ == '__main__':
    app.run(debug=True)
```

upload.html

```html
<html>
    <body>
        <form action = "http://localhost:5000/uploader" method = "POST" 
            enctype = "multipart/form-data">
            <input type = "file" name = "file" />
            <input type = "submit"/>
        </form>
    </body>
</html>
```

# Sijax

# 部署

# FastCGI
