---
layout:     post
title:      Flask-database
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Flask
---

# 使用 Flask-SQLAlchemy 管理数据库

| 数据库引擎        | URL                                              |
| ----------------- | ------------------------------------------------ |
| MySQL             | mysql://username:password@hostname/database      |
| Postgres          | postgresql://username:password@hostname/database |
| SQLite（Unix）    | sqlite:////absolute/path/to/database             |
| SQLite（Windows） | sqlite:///c:/absolute/path/to/database           |

## 配置数据库

```python
from flask_sqlalchemy import SQLAlchemy
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
db = SQLAlchemy(app)
```

# 定义类型

| 类型名       | python 类型       | 作用                                                  |
| ------------ | ----------------- | ----------------------------------------------------- |
| Integer      | int               | 普通整数，一般是 32 位                                |
| SmallInteger | int               | 取值范围小的整数，一般是 16 位                        |
| BigInteger   | int 或 long       | 不限制精度的整数                                      |
| Float        | float             | 浮点数                                                |
| Numeric      | decimal.Decimal   | 定点数                                                |
| String       | str               | 变长字符串                                            |
| Text         | str               | 变长字符串，对较长或不限长度的字符串做了优化          |
| Unicode      | unicode           | 变长 Unicode 字符串                                   |
| UnicodeText  | unicode           | 变长 Unicode 字符串，对较长或不限长度的字符串做了优化 |
| Boolean      | bool              | 布尔值                                                |
| Date         | datetime.date     | 日期                                                  |
| Time         | datetime.time     | 时间                                                  |
| DateTime     | datetime.datetime | 日期和时间                                            |
| Interval     | str               | 一组字符串                                            |
| PickleType   | 任何 Python 对象  | 自动使用 Pickle 序列化                                |
| LargeBinary  | str               | 二进制文件                                            |

| 选项名      | 作用                                                         |
| ----------- | ------------------------------------------------------------ |
| primary_key | 如果设为 True ，这列就是表的主键                             |
| unique      | 如果设为 True ，这列不允许出现重复的值                       |
| index       | 如果设为 True ，为这列创建索引，提升查询效率                 |
| nullable    | 如果设为 True ，这列允许使用空值；如果设为 False ，这列不允许使用空值 |
| default     | 为这列定义默认值                                             |

| 语法                                         | 作用     |
| -------------------------------------------- | -------- |
| name = db.Column(db.String(64), unique=True) | 定义类型 |

```python
class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role')

    def __repr__(self):
        return '<Role %r>' % self.name
    
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return '<User %r>' % self.username
```

# 关系

| 选项名        | 说明                                                         |
| ------------- | ------------------------------------------------------------ |
| backref       | 在关系的另一个模型中添加反向引用                             |
| primaryjoin   | 明确指定两个模型之间使用的联结条件。只在模棱两可的关系中需要指定 |
| lazy          | 指定如何加载相关记录。可选值有 select（首次访问时按需加载）、immediate（源对象加载后就加载）、joined（加载记录，但使用联结）、subquery（立即加载，但使用子查询），noload（永不加载）和 dynamic（不加载记录，但提供加载记录的查询） |
| uselist       | 如果设为Fales，不使用列表，而使用标量值                      |
| order_by      | 指定关系中记录的排序方式                                     |
| secondary     | 指定多对多关系中关系表的名字                                 |
| secondaryjoin | SQLAlchemy无法自行决定时，指定多对多关系中的二级联结条件     |

| 语法                                                       | 作用                                       |
| ---------------------------------------------------------- | ------------------------------------------ |
| users = db.relationship('User', backref='role')            | 在 User 类中添加 role 属性从而定义反向关系 |
| role_id = db.Column(db.Integer, db.ForeignKey('roles.id')) |                                            |

```python
class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role')

    def __repr__(self):
        return '<Role %r>' % self.name
    
class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return '<User %r>' % self.username
```

# 数据库操作

## 创建表

```python
import os
from flask_script import Manager
from flask import Flask, render_template, session, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

manager = Manager(app)
bootstrap = Bootstrap(app)
moment = Moment(app)
db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic')
    def __repr__(self):
        return '<Role %r>' % self.name

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    def __repr__(self):
        return '<User %r>' % self.username

if __name__ == '__main__':
    manager.run()
```

| 命令            | 作用       | 注意     |
| --------------- | ---------- | -------- |
| db.create_all() | 创建数据库 |          |
| db.drop_all()   |            | 最好不用 |

```python
# python shell
from main import db
db.create_all()
```

## 插入行

### 插入数据

```python
from main import db,Role,User

admin_role = Role(name='Admin')
mod_role = Role(name='Moderator')
user_role = Role(name='User')
user_john = User(username='john', role=admin_role)
user_susan = User(username='susan', role=user_role)
user_david = User(username='david', role=user_role)
```

### 加入会话

```python
db.session.add(admin_role)
db.session.add(mod_role)
db.session.add(user_role)
db.session.add(user_john)
db.session.add(user_susan)
db.session.add(user_david)

或者

db.session.add_all([admin_role, mod_role, user_role,user_john, user_susan, user_david])
```

### 提交会话

```python
db.session.commit()
```

### 查看 id

```python
admin_role.id # 1
```

## 修改行

```
admin_role.name = 'Administrator'
db.session.add(admin_role)
db.session.commit()
```

## 删除行 

```
db.session.delete(mod_role)
db.session.commit()
```

## 查询行

| 命令             | 返回值                                                | 作用                 |
| ---------------- | ----------------------------------------------------- | -------------------- |
| Role.query.all() | [\<Role u'Administrator'>, \<Role u'User'>]           | 返回 Role 行所有数据 |
| User.query.all() | [\<User u'john'>, \<User u'susan'>, \<User u'david'>] | 返回 User 行所有数据 |

### 过滤器

| 过滤器      | 作用                                                 |
| ----------- | ---------------------------------------------------- |
| filter()    | 把过滤器添加到原查询上，返回一个新查询               |
| filter_by() | 把等值过滤器添加到原查询上，返回一个新查询           |
| limit()     | 使用指定的值限制原查询返回的结果数量，返回一个新查询 |
| offset()    | 偏移原查询返回的结果，返回一个新查询                 |
| order_by()  | 根据指定条件对原查询结果进行排序，返回一个新查询     |
| group_by()  | 根据指定条件对原查询结果进行分组，返回一个新查询     |

| 命令                                                  | 返回值                                                       | 作用                                       |
| ----------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------ |
| User.query.filter_by(role=user_role).all()            | [\<User u'susan'>, \<User u'david'>]                         | 查询 User 行 role=user_role 的数据         |
| str(User.query.filter_by(role=user_role))             | 'SELECT users.id AS users_id, users.username AS users_username, | 查看原生 SQL 查询语句                      |
| user_role = Role.query.filter_by(name='User').first() | \<Role 'User'>                                               | 把 query 对象转换成字符串查询 SQL 原生语句 |

### 方法

| 方法           | 作用                                                         |
| -------------- | ------------------------------------------------------------ |
| all()          | 以列表形式返回查询的所有结果                                 |
| first()        | 返回查询的第一个结果，如果没有结果，则返回None               |
| first_or_404() | 返回查询的第一个结果，如果没有结果，则终止请求，返回404错误响应 |
| get()          | 返回指定主键对应的行，如果没有对应的行，则返回None           |
| get_or_404()   | 返回指定主键对应的行，如果没找到指定的主键，则终止请求，返回404错误响应 |
| count()        | 返回查询结果的数量                                           |
| paginate()     | 返回一个Paginate对象，它包含指定范围内的结果                 |

### 查询一对

```
$ users = user_role.users # [<User u'susan'>, <User u'david'>]
$ users[0].role # <Role u'User'>
```

```
user_role.users.order_by(User.username).all() # [<User u'david'>, <User u'susan'>]
user_role.users.count() # 2
```

# 在视图函数中操作数据库

```
import os
from flask import Flask, render_template, session, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

bootstrap = Bootstrap(app)
moment = Moment(app)
db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic')

    def __repr__(self):
        return '<Role %r>' % self.name

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))

    def __repr__(self):
        return '<User %r>' % self.username

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        print(user,1)
        if user is None:
            user = User(username=form.name.data)
            print(user, 2)
            db.session.add(user)
            db.session.commit()
            session['known'] = False
        else:
            session['known'] = True
        session['name'] = form.name.data
        return redirect(url_for('index'))
    return render_template('index.html', form=form, name=session.get('name'),
                           known=session.get('known', False))

if __name__ == '__main__':
    app.run()
```

# 集成 python shell

```
import os
from flask import Flask, render_template, session, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

bootstrap = Bootstrap(app)
moment = Moment(app)
db = SQLAlchemy(app)

class Role(db.Model):
    __tablename__ = 'roles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64), unique=True)
    users = db.relationship('User', backref='role', lazy='dynamic')
    def __repr__(self):
        return '<Role %r>' % self.name

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(64), unique=True, index=True)
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    def __repr__(self):
        return '<User %r>' % self.username

class NameForm(FlaskForm):
    name = StringField('What is your name?', validators=[DataRequired()])
    submit = SubmitField('Submit')

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User, Role=Role)

@app.errorhandler(404)
def page_not_found(e):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_server_error(e):
    return render_template('500.html'), 500

@app.route('/', methods=['GET', 'POST'])
def index():
    form = NameForm()
    if form.validate_on_submit():
        user = User.query.filter_by(username=form.name.data).first()
        if user is None:
            user = User(username=form.name.data)
            db.session.add(user)
            db.session.commit()
            session['known'] = False
        else:
            session['known'] = True
        session['name'] = form.name.data
        return redirect(url_for('index'))
    return render_template('index.html', form=form, name=session.get('name'),
                           known=session.get('known', False))
if __name__ == '__main__':
    app.run()
```

# 使用 Flask-Migrate 实现数据库迁移

## 常用

1、创建迁移仓库

```python
python main.py db init
```

2、创建迁移脚本

```
python main.py db migrate -m "版本名"
```

3、观察表结构

```
python main.py db upgrade
```

4、根据需求修改模型

5、创建新迁移脚本

```
python main.py db migrate -m "版本名"
```

6、观察表结构

7、查看版本号

```
python main.py db history
```

8、升降级版本

```
python main.py db downgrade 版本号
python main.py db upgrade 版本号
```

## 创建迁移仓库

| 语法                                             | 作用                                                        |
| ------------------------------------------------ | ----------------------------------------------------------- |
| from flask_migrate import Migrate,MigrateCommand | 导入 MigrateCommand 类附加到 flask-script 的 manager 对象上 |

```python
import os
from flask import Flask, render_template, session, redirect, url_for
from flask_bootstrap import Bootstrap
from flask_moment import Moment
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate,MigrateCommand
from flask_script import Manager

basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
app.config['SQLALCHEMY_DATABASE_URI'] =\
    'sqlite:///' + os.path.join(basedir, 'data.sqlite')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

bootstrap = Bootstrap(app)
moment = Moment(app)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
manager = Manager(app)
manager.add_command('db', MigrateCommand)

@app.shell_context_processor
def make_shell_context():
    return dict(db=db, User=User, Role=Role)

manager.run()
```

```
$ python hello.py db init
```

## 创建迁移脚本

```
$ python hello.py db migrate -m "initial migration"
```

## 更新数据库

```
$ python hello.py db upgrade
```
