---
layout:     post
title:      Python CEFPython3
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

# 常用

```
pip install cefpython3
```

```python
# coding=gbk
from cefpython3 import cefpython as cef
from flask import Flask
import ctypes
import tkinter as tk
import threading
import os

class Application(tk.Frame):
    navigation_bar = None
    def __init__(self, root):
        root.geometry("900x640")
        tk.Frame.__init__(self, root)
        self.master.title("")
        self.bind("<Configure>", self.on_configure)

        self.browser_frame = BrowserFrame(self, self.navigation_bar) # 浏览器框架
        self.browser_frame.grid(row=1, column=0,sticky=(tk.N + tk.S + tk.E + tk.W))
        tk.Grid.rowconfigure(self, 1, weight=1)
        tk.Grid.columnconfigure(self, 0, weight=1)
        self.pack(fill=tk.BOTH, expand=tk.YES) # 包装 Application

    def on_configure(self, event):
        if self.browser_frame:
            width = event.width
            height = event.height
            if self.navigation_bar:
                height = height - self.navigation_bar.winfo_height()
            self.browser_frame.on_Application_configure(width, height)

class BrowserFrame(tk.Frame):
    closing = False
    browser = None
    def __init__(self, master, navigation_bar=None):
        self.navigation_bar = navigation_bar
        tk.Frame.__init__(self, master)
        self.bind("<Configure>", self.on_configure)

    def embed_browser(self):
        window_info = cef.WindowInfo()
        rect = [0, 0, self.winfo_width(), self.winfo_height()]
        window_info.SetAsChild(self.get_window_handle(), rect)

        self.browser = cef.CreateBrowserSync(
            window_info,
            url="file://{}".format(os.path.join(os.getcwd(), 'handsontable.html'))
        )
        self.message_loop_work()

    def get_window_handle(self): # 获取窗口句柄
        if self.winfo_id() > 0:
            return self.winfo_id()

    def message_loop_work(self): # 消息循环工作
        cef.MessageLoopWork()
        self.after(10, self.message_loop_work)

    def on_configure(self, _): # 判断是否有 cef 对象
        if not self.browser:
            self.embed_browser()

    def on_Application_configure(self, width, height): # cef 窗口大小
        if self.browser:
            pass
            ctypes.windll.user32.SetWindowPos(self.browser.GetWindowHandle(),
                                              0,0, 0, width, height, 0x0002)
def runserver():
    app = Flask(__name__)
    @app.route('/')
    def index():
        return '<h1>233</h1>'
    app.run()

if __name__ == '__main__':
    threading.Thread(target=runserver).start()
    root = tk.Tk()
    app = Application(root)
    cef.Initialize()
    app.mainloop()
    cef.Shutdown()
    os._exit(0)
```

# 检查更新

| 语法                                                         | 返回值                   | 作用                             |
| ------------------------------------------------------------ | ------------------------ | -------------------------------- |
| ver["version"]                                               | 66.0                     | CEF Python 版本                  |
| ver["chrome_version"]                                        | 66.0.3359.181            | Chromium 版本                    |
| ver["cef_version"]                                           | CEF 3.3359.1774.gd49d25f | CEF 版本                         |
| ver=platform.python_version()<br>arch=platform.architecture()[0] | Python 3.6.5<br>64bit    | python 版本<br>位数              |
| assert cef.\__version__ >= "57.0", "CEF Python v57.0+ required to run this" |                          | CEF 版本是否大于 57 不大于抛异常 |

```python
from cefpython3 import cefpython as cef
import platform

ver = cef.GetVersion()
print("[hello_world.py] CEF Python {ver}".format(ver=ver["version"]))
print("[hello_world.py] Chromium {ver}".format(ver=ver["chrome_version"]))
print("[hello_world.py] CEF {ver}".format(ver=ver["cef_version"]))
print("[hello_world.py] Python {ver} {arch}".format(ver=platform.python_version(),arch=platform.architecture()[0]))
assert cef.__version__ >= "57.0", "CEF Python v57.0+ required to run this"
```

# 打包

```python
pip install pyinstaller
pip install pycrypto
python pyinstaller.py
```

1、安装 Microsoft Visual C++ 14.0 选择 Windows 8.1 SDK 功能

2、复制 C:\Program Files (x86)\Microsoft Visual Studio 14.0\VC\include\stdint.h

3、粘贴 C:\Program Files (x86)\Windows Kits\10\Include\10.0.10240.0\ucrt

4、修改 C:\Program Files (x86)\Windows Kits\10\Include\10.0.10240.0\ucrt\inttypes.h

```
#include <stdint.h>
#include "stdint.h"
```

5、卸载 Micrsoft Visual C++ 14.0
