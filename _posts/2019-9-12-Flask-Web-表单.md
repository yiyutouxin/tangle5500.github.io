---
layout:     post
title:      Flask-Web 表单
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Flask
---

<!-- {% raw %} -->

# 常用

| 语法                                              | 作用                |
| ------------------------------------------------- | ------------------- |
| form.validate_on_submit()                         | 表单不为空返回 True |
| app.config['SECRET_KEY'] = 'hard to guess string' | 表单密钥            |
| name = form.name.data                             | 获取表单值          |
| form.name.data = ''                               | 设置表单值          |

# 跨站请求伪造保护

| 语法                     | 作用  |
| ------------------------ | ----- |
| app.config['SECRET_KEY'] | -密钥 |

```python
app.config['SECRET_KEY'] = 'hard to guess string'
```

# 表单类

| 字段类型            | 作用                                                         |
| ------------------- | ------------------------------------------------------------ |
| StringField         | 表示属性为 type="text" 的 \<input> 元素，文本字段            |
| DateField           | 文本字段，值为 datetime.date 格式                            |
| DateTimeField       | 文本字段，值为 datetime.datetime 格式                        |
| TextField           | 表示 \<input type ='text'> HTML 表单元素                     |
| BooleanField        | 表示 \<input type ='checkbox'> HTML 表单元素，复选框，值为 True 和 False |
| DecimalField        | 用于显示带小数的数字的文本字段，值为 decimal.Decimal         |
| FloatField          | 文本字段，值为浮点数                                         |
| IntegerField        | 用于显示整数的文本字段                                       |
| RadioField          | 表示 \<input type = 'radio'> HTML 表单元素，一组单选框       |
| SelectField         | 表示选择表单元素，下拉列表                                   |
| SelectMultipleField | 下拉列表，可选择多个值                                       |
| FileField           | 文件上传字段                                                 |
| TextAreaField       | 表示 \<testarea> HTML 表单元素，多行文本字段                 |
| PasswordField       | 表示 \<input type = 'password'> HTML 表单元素，密码文本字段  |
| HiddenField         | 隐藏文本字段                                                 |
| SubmitField         | 表示属性为 type="submit" 的 \<input>元素，提交按钮           |
| FormField           | 把表单作为字段嵌入另一个表单                                 |
| FieldList           | 一组指定类型的字段                                           |

| 验证函数     | 作用                                                   |
| ------------ | ------------------------------------------------------ |
| DataRequired | 检查输入字段是否为空                                   |
| Email        | 检查字段中的文本是否遵循电子邮件 ID 约定               |
| EqualTo      | 比较两个字段的值；常用于要求输入两次密码进行确认的情况 |
| IPAddress    | 在输入字段中验证 IPv4 网络地址                         |
| Length       | 验证输入字段中的字符串的长度是否在给定范围内           |
| NumberRange  | 验证给定范围内输入字段中的数字                         |
| Optional     | 无输入值时跳过其他验证函数                             |
| Required     | 确保字段中有数据                                       |
| Regexp       | 使用正则表达式验证输入值                               |
| URL          | 验证在输入字段中输入的 URL                             |
| AnyOf        | 确保输入值在可选值列表中                               |
| NoneOf       | 确保输入值不在可选值列表中                             |

## 定义表单类

类变量的值是相应字段类型的对象

| 参数                    | 作用                 |
| ----------------------- | -------------------- |
| validators=[Required()] | 确保提交的字段不为空 |

```python
from flask_wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import Required

class NameForm(Form):
    name = StringField('What is your name?', validators=[Required()])
    submit = SubmitField('Submit')
```

# 把表单渲染成 HTML

## 使用 Flask-WTF 和 Flask-Bootstrap 渲染表单

```html
{%extends "base.html" %}
{%import "bootstrap/wtf.html" as wtf %}
{%block title %}Flasky{%endblock %}
{%block page_content %}
<div class="page-header">
<h1>Hello, {%if name %}{{ name }}{%else %}Stranger{%endif %}!</h1>
</div>
{{ wtf.quick_form(form) }}
{%endblock %}
```

# 在视图函数中处理表单

```python
from flask import Flask, render_template
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

bootstrap = Bootstrap(app)
moment = Moment(app)

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    name = None
    form = NameForm()
    if form.validate_on_submit():
        name = form.name.data
        form.name.data = ''
    return render_template('index.html', form=form, name=name)

app.run(debug=True)
```

```html
<!-- base.html -->
{% extends "bootstrap/base.html" %}

{% block title %}Flasky{% endblock %}

{% block head %}
{{ super() }}
<link rel="shortcut icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
<link rel="icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
{% endblock %}

{% block navbar %}
<div class="navbar navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Flasky</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    </div>
</div>
{% endblock %}

{% block content %}
<div class="container">
    {% block page_content %}{% endblock %}
</div>
{% endblock %}

{% block scripts %}
{{ super() }}
{{ moment.include_moment() }}
{% endblock %}
```

```html
<!-- index.html -->
{% extends "base.html" %}
{% import "bootstrap/wtf.html" as wtf %}

{% block title %}Flasky{% endblock %}

{% block page_content %}
<div class="page-header">
    <h1>Hello, {% if name %}{{ name }}{% else %}Stranger{% endif %}!</h1>
</div>
{{ wtf.quick_form(form) }}
{% endblock %}
```

# 重定向和用户会话

```python
from flask import Flask, render_template, session, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

bootstrap = Bootstrap(app)
moment = Moment(app)


class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        session['name'] = form.name.data
        return redirect(url_for('index'))
    return render_template('index.html', form=form, name=session.get('name'))
app.run()
```

```html
<!-- base.html -->
{% extends "bootstrap/base.html" %}

{% block title %}Flasky{% endblock %}

{% block head %}
{{ super() }}
<link rel="shortcut icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
<link rel="icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
{% endblock %}

{% block navbar %}
<div class="navbar navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Flasky</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    </div>
</div>
{% endblock %}

{% block content %}
<div class="container">
    {% block page_content %}{% endblock %}
</div>
{% endblock %}

{% block scripts %}
{{ super() }}
{{ moment.include_moment() }}
{% endblock %}
```

```html
<!-- index.html -->
{% extends "base.html" %}
{% import "bootstrap/wtf.html" as wtf %}

{% block title %}Flasky{% endblock %}

{% block page_content %}
<div class="page-header">
    <h1>Hello, {% if name %}{{ name }}{% else %}Stranger{% endif %}!</h1>
</div>
{{ wtf.quick_form(form) }}
{% endblock %}
```

# Flash 消息

```python
from flask import Flask, render_template, session, redirect, url_for, flash
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'

bootstrap = Bootstrap(app)
moment = Moment(app)

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        old_name = session.get('name')
        if old_name is not None and old_name != form.name.data:
            flash('Looks like you have changed your name!')
        session['name'] = form.name.data
        return redirect(url_for('index'))
    return render_template('index.html', form=form, name=session.get('name'))
app.run(debug=True)
```

```html
<!-- base.html -->
{% extends "bootstrap/base.html" %}

{% block title %}Flasky{% endblock %}

{% block head %}
{{ super() }}
<link rel="shortcut icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
<link rel="icon" href="{{ url_for('static', filename='favicon.ico') }}" type="image/x-icon">
{% endblock %}

{% block navbar %}
<div class="navbar navbar-inverse" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="/">Flasky</a>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="/">Home</a></li>
            </ul>
        </div>
    </div>
</div>
{% endblock %}

{% block content %}
<div class="container">
    {% for message in get_flashed_messages() %}
    <div class="alert alert-warning">
        <button type="button" class="close" data-dismiss="alert">&times;</button>
        {{ message }}
    </div>
    {% endfor %}

    {% block page_content %}{% endblock %}
</div>
{% endblock %}

{% block scripts %}
{{ super() }}
{{ moment.include_moment() }}
{% endblock %}
```

```html
<!-- index.html -->
{% extends "base.html" %}
{% import "bootstrap/wtf.html" as wtf %}

{% block title %}Flasky{% endblock %}

{% block page_content %}
<div class="page-header">
    <h1>Hello, {% if name %}{{ name }}{% else %}Stranger{% endif %}!</h1>
</div>
{{ wtf.quick_form(form) }}
{% endblock %}
```

<!-- {% endraw %} -->
