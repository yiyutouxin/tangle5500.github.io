---
layout:  post
title:   Python pip
date:    2019-9-12
author:  Tangle
catalog: true
tags:
    - Python
---

| 语法                                     | 作用               |
| ---------------------------------------- | ------------------ |
| python3 pip install 安装包               | 指定 python 版本   |
| pip install --upgrade pyinstaller==3.2.1 | 更新到指定版本的包 |
| pip show pip                             | 查看 pip 版本      |
| python -m pip install --upgrade pip      | pip 更新           |
| pip list                                 | 查看以安装的模块   |
| pip install 安装包                       | 安装包             |
| pip install -r requirements.txt          | 安装包             |
| python pip uninstall 卸载包              | 卸载包             |

| 参数            | 作用                          |
| --------------- | ----------------------------- |
| `-h | --help`    | 帮助                      |
| `-v | --verbose` | 最多的输出，最多可以使用3次 |
| `-V | --verbose` | 版本                  |
| `-q | --quiet`   | 最少的输出                    |

# 镜像源

```
https://pypi.douban.com/                # 豆瓣
https://mirrors.aliyun.com/pypi/simple/ # 阿里云
```

```
REM .bat
cd %APPDATA%
mkdir pip
cd pip
(
echo [global]
echo timeout = 1000
echo index-url = https://mirrors.aliyun.com/pypi/simple/
)>pip.ini
```

## 临时

```
pip install -i https://pypi.tuna.tsinghua.edu.cn/simple gevent
```

# 扩展包作用

| 语法                                                         | 作用                 |
| ------------------------------------------------------------ | -------------------- |
| pip install selenium                                         | 浏览器调试模块       |
| pip install flask                                            | flask 框架           |
| pip install Tkinter                                          | gui 编程             |
| pip install wxpython                                         | gui 图形库           |
| pip install matplotlib                                       |                      |
| pip install wxpy                                             | 微信 python          |
| pip install pywin32                                          |                      |
| pip install pyserial                                         | 串口通讯             |
| pip install xlrd                                             | 读 excel             |
| pip install xlwt                                             | 写 excel             |
| pip install xlutils                                          | 修改 excel           |
| pip install openpyxl                                         | 实时操作 excel       |
| pip install pyinstaller                                      | 软件打包             |
| python -m pip install -U pip setuptools<br>python -m pip install matplotlib | 2D 可视化图形        |
| pip install pillow                                           | PIL 模块用于打开图片 |

# 批量在线安装

```
pip install -r requirements.txt
```

# 在线下载与离线安装

## 在线下载某一个扩展包

```
pip download pywin32 -d ./requirements
```

## 在线下载 pip 列表中的包

| 语法                                  | 作用                        |
| ------------------------------------- | --------------------------- |
| pip freeze > ./requirements.txt             | 导出 pip 列表               |
| pip download -r ./requirements.txt -d ./666 | 在线下载 pip 列表内的所有包 |

## 离线安装某一个扩展包

```
pip install ./pip-19.0.3-py2.py3-none-any.whl
```

## 离线安装 pip 列表中的包

```
pip install --no-index --find-links=./requirements -r requirements.txt
```
