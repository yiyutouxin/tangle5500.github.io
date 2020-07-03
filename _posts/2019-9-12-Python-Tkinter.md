---
layout:     post
title:      Python Tkinter
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Python
---

| 语法               | 作用           |
| ------------------ | -------------- |
| time = StringVar() | 声明字符串钩子 |
| time.set('1')      | 设置初始值     |

```python
import tkinter as tk
from tkinter import messagebox
from tkinter import ttk

root = tk.Tk()
root.title('My root')
root.geometry('500x300')

def demo():
    pass

b1 = tk.Button(root, text='文本', font=('Arial', 12), width=10, height=1, command=demo)
b1.pack()

root.mainloop()
```

# 主窗口参数

| 语法                                                         | 作用                                             |
| ------------------------------------------------------------ | ------------------------------------------------ |
| root = tk.TK()                                               | 创建窗口                                         |
| root['height'] = 300                                         | 设置高                                           |
| root['width'] = 500                                          | 设置宽                                           |
| root.title('魔方小站')                                       | 设置标题                                         |
| root['bg'] = '#0099ff'                                       | 设置背景色                                       |
| root.geometry("500x300+120+100")                             | 设置窗口大小                                     |
| root.option_add('*Font', 'Fira 10')                          | 设置全局字体                                     |
| root.resizable(width=False,height=True) \| root.resizable(0,1) | 禁止窗口调整大小                                 |
| root.minsize(300,600)                                        | 窗口可调整的最小值                               |
| root.maxsize(600,1200)                                       | 窗口可调整的最大值                               |
| root.attributes("-toolwindow", 1)                            | 工具栏样式                                       |
| root.attributes("-topmost", -1)                              | 置顶窗口                                         |
| root.state("zoomed")                                         | 窗口最大化                                       |
| root.iconify()                                               | 窗口最小化                                       |
| root.attributes("-alpha",1)                                  | 窗口透明化，透明度从 0-1，1 是不透明，0 是全透明 |
| root.iconbitmap('c:\\logo.ico')                              | 设置左上角图标                                   |
| root.destroy()                                               | 关闭窗口                                         |
| root.mainloop()                                              | 主窗口循环更新                                   |

# 窗口禁止关闭

``` python
def closeroot():
    messagebox.showerror(title='警告',message='没错你关不掉')
    return
root.protocol('WM_DELETE_root', closeroot)
```

正常退出

```python
def closewindow():
    quit()
root.protocol("WM_DELETE_WINDOW", closewindow)
```

#  Label 标签

| 语法                                                         | 作用     |
| ------------------------------------------------------------ | -------- |
| l = tk.label(root,text = '文本',bg = '颜色',font = ('Arial',12),width = 30,height = 2) | 创建标签 |
| l.pack()                                                     | 显示标签 |

# Button 按钮

| 语法                                                         | 作用       |
| ------------------------------------------------------------ | ---------- |
| b = tk.Button(root, text='文本', font=('Arial', 12), width=10, height=1, command=函数名) | 创建按钮。 |
| b.pack()                                                     | 显示按钮。 |

# Entry 输入框

| 语法                                               | 作用                               |
| -------------------------------------------------- | ---------------------------------- |
| e1 = tk.Entry(root, show='*', font=('Arial', 14)   | 创建输入框，密文显示。             |
| e1.pack()                                          | 放置输入框                         |
| e2 = tk.Entry(root, show=None, font=('Arial', 14)) | 创建输入框，明文显示。             |
| e2.pack()                                          | 放置输入框                         |
| e.get()                                            | 输出输入框中的内容，可以作为变量。 |

# Text 文本框

| 语法                            | 作用                        |
| ------------------------------- | --------------------------- |
| text = tk.Text(root,height = 3) | 创建文本框                  |
| text.pack()                     | 放置文本框                  |
| text.insert('insert',文本)      | 在文本框鼠标标点处插入。    |
| text.insert('end',文本)         | 在文本框末尾处插入。        |
| text.mark_set('mark',1.0)       | 1.0 或 1.1 设置标记插入位置 |
| text.insert('mark',文本)        | 在标记处插入                |
| text.mark_gravity('mark',LEFT)  | 标记在右侧插入              |

按钮改变文本

```
foo = StringVar()
foo.set("开")
def demo():
    foo.set("关")
按钮 = tk.Button(root,textvariable=foo,command=开始1)
按钮.grid(row=5, column=0, padx=10, pady=5)
```

# Listbox 窗口部件

列表框

| 语法                                | 作用                 |
| ----------------------------------- | -------------------- |
| self.lb.curselection()              | 提取点中选项的下标   |
| self.lb.get(self.lb.curselection()) | 提前点中选项下标的值 |

# Radiobutton 窗口部件

单选框

# Checkbutton 窗口部件

复选框

# Scale 窗口部件

刻度条

# Canvas 窗口部件

画布

# Menu 窗口部件

| 语法                                                         | 作用                               |
| ------------------------------------------------------------ | ---------------------------------- |
| 菜单栏 = tk.Menu(root)                                       | 创建一个菜单栏                     |
| 菜单项 = tk.Menu(菜单栏, tearoff=0)                          | 创建一个菜单项，默认不下拉。       |
| 菜单栏.add_cascade(label='菜单名', menu=菜单项)              | 空菜单命名                         |
| 菜单项.add_command(label='子菜单名', command=函数名)         | 在菜单项中加入子菜单               |
| 菜单项.add_separator()                                       | 在菜单项中加入一条分割线           |
| 菜单项2 = tk.Menu(菜单栏, tearoff=0)                         | 创建第二个菜单项,默认不下拉        |
| 菜单栏.add_cascade(label='菜单名', menu=菜单项2)             | 空菜单命名                         |
| 菜单项2.add_command(label='子菜单名', command=函数名)        | 在菜单项中加入子菜单               |
| 二级菜单 = tk.Menu(菜单项)                                   | 创建二级菜单，即菜单项里面的菜单。 |
| 菜单项.add_cascade(label='菜单名', menu=二级菜单, underline=0) | 在菜单项下面创建一个菜单项         |
| 二级菜单.add_command(label='菜单名', command=函数名)         | 创建第三级菜单命令                 |
| root.config(menu=菜单栏)                                     | 放置菜单栏                         |

# Combobox 下拉选择

| 语法                                      | 作用                 |
| ----------------------------------------- | -------------------- |
| cv = tk.stringVar()                       | 绑定变量             |
| com = ttk.Combobox(root, textvariable=cv) | 创建下拉框           |
| com.pack()                                | 放置下拉框           |
| com["value"] = ('文本',文本')             | 设置下拉数据         |
| com.current(索引)                         | 设置默认值           |
| demo = com.get()                          | 变量接受值           |
| com.bind("<<ComboboxSelected>>", 函数名)  | 下拉数据点击调用函数 |

# Frame 窗口部件

# messageBox 弹窗

| 语法                                                         | 作用         |
| ------------------------------------------------------------ | ------------ |
| tk.messagebox.showwarning(title='窗口名', message='警告信息') | 警告信息弹窗 |
| tk.messagebox.showinfo('窗口名','提示信息')                  | 提示信息弹窗 |
| tk.messagebox.showerror('窗口名','错误信息')                 | 错误信息弹窗 |

| 语法                                                   | 返回值        | 作用                 |
| ------------------------------------------------------ | ------------- | -------------------- |
| tk.messagebox.askokcancel('提示','要执行此操作吗')     | True \| False | (疑问)确定取消对话框 |
| tk.messagebox.askquestion('提示', '要执行此操作吗')    | yes \| no     | (疑问)是否对话框     |
| tk.messagebox.askyesno('提示', '要执行此操作吗')       | True \| False | (疑问)是否对话框     |
| tk.messagebox.askretrycancel('提示', '要执行此操作吗') | True \| False | (警告)重试取消对话框 |

| 语法                                 | 返回值         | 作用                         |
| ------------------------------------ | -------------- | ---------------------------- |
| tk.filedialog.asksaveasfilename()    | 含后缀文件目录 | 另存为窗口弹窗。             |
| tk.filedialog.asksaveasfile()        | 文件流对象     | 另存为窗口弹窗，会创建文件。 |
| tkinter.filedialog.askopenfilename() | 含后缀文件目录 | 打开文件弹窗。               |
| tk.filedialog.askopenfile()          | 文件流对象     | 打开文件弹窗，               |
| tk.filedialog.askdirectory()         | 目录名         | 选择文件弹窗                 |
| tk.filedialog.askopenfilenames()     | 元组           | 打开多个文件名               |
| tk.filedialog.askopenfiles()#        | 列表           | 多个文件流对象               |

# 部件放置方式

| 放置方式 | 参数      | 作用                             |
| -------- | --------- | -------------------------------- |
| grid     | row = 0   | 行                               |
|          | colum = 0 | 列                               |
|          | padx = 0  | 单元格左右间距                   |
|          | pady = 0  | 单元格上下间距                   |
|          | ipadx = 0 | 单元格内部元素与单元格的左右间距 |
|          | ipady = 0 | 单元格内部元素与单元格的上下间距 |

```
.grid(row = 0,column = 0,padx = 0,pady = 0,ipadx = 0,ipady = 0)
```

| 放置方式 | 参数            | 作用 |
| -------- | --------------- | ---- |
| pack     | side = 'top'    | 上   |
|          | side = 'bottom' | 下   |
|          | side = 'left'   | 左   |
|          | side = 'right'  | 右   |

```
.pack(side='top') 
```

| 放置方式 | 参数          | 作用   |
| -------- | ------------- | ------ |
| place    | x = 0         | 坐标 x |
|          | y = 0         | 坐标 y |
|          | anchor = 'nw' | 锚定点 |

```
.place(x = 0,y = 0, anchor = 'nw')
```

# 滚动条

滚动条位置

```python
self.slb.place(x=250, y=170,relwidth=0.05, relheight=0.3)
```

# 事件绑定

## 事件序列

- type 部分的内容是最重要的，它通常用于描述普通的事件类型，例如鼠标点击或键盘按键点击。
- modifier 部分的内容是可选的，它通常用于描述组合键，例如 Ctrl + c，Shift + 鼠标左键点击。
- detail 部分的内容是可选的，它通常用于描述具体的按键，例如 Button-1 表示鼠标左键。

| **事件序列**                | **含义**                      | 序列   |
| --------------------------- | ----------------------------- | ------ |
| \<Button-1>                 | 用户点击鼠标左键              | detail |
| \<KeyPress-H>               | 用户点击 H 按键               |        |
| \<Control-Shift-KeyPress-H> | 用户同时点击 Ctrl + Shift + H |        |

## type

| **type**      | **含义**                                                     |
| ------------- | ------------------------------------------------------------ |
| Activate      | 当组件的状态从“未激活”变为“激活”的时候触发该事件             |
| Button        | 1. 当用户点击鼠标按键的时候触发该事件 2. detail 部分指定具体哪个按键：<Button-1>鼠标左键，<Button-2>鼠标中键，<Button-3>鼠标右键，<Button-4>滚轮上滚（Linux），<Button-5>滚轮下滚（Linux） |
| ButtonRelease | 1. 当用户释放鼠标按键的时候触发该事 2. 在大多数情况下，比 Button 要更好用，因为如果当用户不小心按下鼠标，用户可以将鼠标移出组件再释放鼠标，从而避免不小心触发事件 |
| Configure     | 当组件的尺寸发生改变的时候触发该事件                         |
| Deactivate    | 当组件的状态从“激活”变为“未激活”的时候触发该事件             |
| Destroy       | 当组件被销毁的时候触发该事件                                 |
| Enter         | 1. 当鼠标指针进入组件的时候触发该事件 2. 注意：不是指用户按下回车键 |
| Expose        | 当窗口或组件的某部分不再被覆盖的时候触发该事件               |
| FocusIn       | 1. 当组件获得焦点的时候触发该事件 2. 用户可以用 Tab 键将焦点转移到该组件上（需要该组件的 takefocus 选项为 True） 3. 你也可以调用 focus_set() 方法使该组件获得焦点（见上方例子） |
| FocusOut      | 当组件失去焦点的时候触发该事件                               |
| KeyPress      | 1. 当用户按下键盘按键的时候触发该事件 2. detail 可以指定具体的按键，例如 <KeyPress-H>表示当大写字母 H 被按下的时候触发该事件 3. KeyPress 可以简写为 Key |
| KeyRelease    | 当用户释放键盘按键的时候触发该事件                           |
| Leave         | 当鼠标指针离开组件的时候触发该事件                           |
| Map           | 1. 当组件被映射的时候触发该事件 2. 意思是在应用程序中显示该组件的时候，例如调用 grid() 方法 |
| Motion        | 当鼠标在组件内移动的整个过程均触发该事件                     |
| MouseWheel    | 1. 当鼠标滚轮滚动的时候触发该事件 2. 目前该事件仅支持 Windows 和 Mac 系统，Linux 系统请参考 Button |
| Unmap         | 1. 当组件被取消映射的时候触发该事件 2. 意思是在应用程序中不再显示该组件的时候，例如调用 grid_remove() 方法 |
| Visibility    | 当应用程序至少有一部分在屏幕中是可见的时候触发该事件         |

## modifier

在事件序列中，modifier 部分的内容可以是以下这些：

| **modifier** | **含义**                                                     |
| ------------ | ------------------------------------------------------------ |
| Alt          | 当按下 Alt 按键的时候                                        |
| Any          | 1. 表示任何类型的按键被按下的时候 2. 例如 <Any-KeyPress> 表示当用户按下任何按键时触发事件 |
| Control      | 当按下 Ctrl 按键的时候                                       |
| Double       | 1. 当后续两个事件被连续触发的时候 2. 例如 <Double-Button-1> 表示当用户双击鼠标左键时触发事件 |
| Lock         | 当打开大写字母锁定键（CapsLock）的时候                       |
| Shift        | 当按下 Shift 按键的时候                                      |
| Triple       | 跟 Double 类似，当后续三个事件被连续触发的时候               |

## Event 对象

当 Tkinter 去回调你定义的函数的时候，都会带着 Event 对象（作为参数）去调用，Event 对象以下这些属性你可以使用：

| **属性**       | **含义**                                           |
| -------------- | -------------------------------------------------- |
| widget         | 产生该事件的组件                                   |
| x, y           | 当前的鼠标位置坐标（相对于窗口左上角，像素为单位） |
| x_root, y_root | 当前的鼠标位置坐标（相对于屏幕左上角，像素为单位） |
| char           | 按键对应的字符（键盘事件专属）                     |
| keysym         | 按键名，见下方 Key names（键盘事件专属）           |
| keycode        | 按键码，见下方 Key names（键盘事件专属）           |
| num            | 按钮数字（鼠标事件专属）                           |
| width, height  | 组件的新尺寸（Configure 事件专属）                 |
| type           | 该事件类型                                         |

## Key names

当事件为 <Key>，<KeyPress>，<KeyRelease> 的时候，detail 可以通过设定具体的按键名（keysym）来筛选。例如 <Key-H> 表示按下键盘上的大写字母 H 时候触发事件，<Key-Tab> 表示按下键盘上的 Tab 按键的时候触发事件。

（下边按键码是对应美国标准 101 键盘的“Latin-1”字符集，键盘标准不同对应的按键码不同，但按键名是一样的）

| **按键名（keysym）** | **按键码（keycode）** | **代表的按键**               |
| -------------------- | --------------------- | ---------------------------- |
| Alt_L                | 64                    | 左边的 Alt 按键              |
| Alt_R                | 113                   | 右边的 Alt 按键              |
| BackSpace            | 22                    | Backspace（退格）按键        |
| Cancel               | 110                   | break 按键                   |
| Caps_Lock            | 66                    | CapsLock（大写字母锁定）按键 |
| Control_L            | 37                    | 左边的 Ctrl 按键             |
| Control_R            | 109                   | 右边的 Ctrl 按键             |
| Delete               | 107                   | Delete 按键                  |
| Down                 | 104                   | ↓ 按键                       |
| End                  | 103                   | End 按键                     |
| Escape               | 9                     | Esc 按键                     |
| Execute              | 111                   | SysReq 按键                  |
| F1                   | 67                    | F1 按键                      |
| F2                   | 68                    | F2 按键                      |
| F3                   | 69                    | F3 按键                      |
| F4                   | 70                    | F4 按键                      |
| F5                   | 71                    | F5 按键                      |
| F6                   | 72                    | F6 按键                      |
| F7                   | 73                    | F7 按键                      |
| F8                   | 74                    | F8 按键                      |
| F9                   | 75                    | F9 按键                      |
| F10                  | 76                    | F10 按键                     |
| F11                  | 77                    | F11 按键                     |
| F12                  | 96                    | F12 按键                     |
| Home                 | 97                    | Home 按键                    |
| Insert               | 106                   | Insert 按键                  |
| Left                 | 100                   | ← 按键                       |
| Linefeed             | 54                    | Linefeed（Ctrl + J）         |
| KP_0                 | 90                    | 小键盘数字 0                 |
| KP_1                 | 87                    | 小键盘数字 1                 |
| KP_2                 | 88                    | 小键盘数字 2                 |
| KP_3                 | 89                    | 小键盘数字 3                 |
| KP_4                 | 83                    | 小键盘数字 4                 |
| KP_5                 | 84                    | 小键盘数字 5                 |
| KP_6                 | 85                    | 小键盘数字 6                 |
| KP_7                 | 79                    | 小键盘数字 7                 |
| KP_8                 | 80                    | 小键盘数字 8                 |
| KP_9                 | 81                    | 小键盘数字 9                 |
| KP_Add               | 86                    | 小键盘的 + 按键              |
| KP_Begin             | 84                    | 小键盘的中间按键（5）        |
| KP_Decimal           | 91                    | 小键盘的点按键（.）          |
| KP_Delete            | 91                    | 小键盘的删除键               |
| KP_Divide            | 112                   | 小键盘的 / 按键              |
| KP_Down              | 88                    | 小键盘的 ↓ 按键              |
| KP_End               | 87                    | 小键盘的 End 按键            |
| KP_Enter             | 108                   | 小键盘的 Enter 按键          |
| KP_Home              | 79                    | 小键盘的 Home 按键           |
| KP_Insert            | 90                    | 小键盘的 Insert 按键         |
| KP_Left              | 83                    | 小键盘的 ← 按键              |
| KP_Multiply          | 63                    | 小键盘的 * 按键              |
| KP_Next              | 89                    | 小键盘的 PageDown 按键       |
| KP_Prior             | 81                    | 小键盘的 PageUp 按键         |
| KP_Right             | 85                    | 小键盘的 → 按键              |
| KP_Subtract          | 82                    | 小键盘的 - 按键              |
| KP_Up                | 80                    | 小键盘的 ↑ 按键              |
| Next                 | 105                   | PageDown 按键                |
| Num_Lock             | 77                    | NumLock（数字锁定）按键      |
| Pause                | 110                   | Pause（暂停）按键            |
| Print                | 111                   | PrintScrn（打印屏幕）按键    |
| Prior                | 99                    | PageUp 按键                  |
| Return               | 36                    | Enter（回车）按键            |
| Right                | 102                   | → 按键                       |
| Scroll_Lock          | 78                    | ScrollLock 按键              |
| Shift_L              | 50                    | 左边的 Shift 按键            |
| Shift_R              | 62                    | 右边的 Shift 按键            |
| Tab                  | 23                    | Tab（制表）按键              |
| Up                   | 98                    | ↑ 按键                       |

## 捕获鼠标点击坐标

```python
import tkinter as tk
root = tk.Tk()
def callback(event):
        print("点击坐标：", event.x, event.y)
        
frame = tk.Frame(root, width = 200, height = 200)
frame.bind("<Button-1>", callback)
frame.pack()

root.mainloop()
```

## 获取键盘事件

```python
import tkinter as tk
root = tk.Tk()
def callback(event):
        print("点击的键盘字符为：", event.char)

frame = tk.Frame(root, width = 200, height = 200)
frame.bind("<Key>", callback)
frame.focus_set()
frame.pack()
 
root.mainloop()
```

## 捕获鼠标在组件上的运动轨迹

```python
# 捕获鼠标在组件上的运动轨迹
import tkinter as tk
root = tk.Tk()

def callback(event):
    print("当前坐标为：", event.x, event.y)

frame = tk.Frame(root, width=200, height=200)
frame.bind("<Motion>", callback)
frame.pack()

root.mainloop()
```

# 注意

1、控件和放置最好两行代码，不然有可能返回 None

2、控件事件函数需要两个参数

3、导入模块顺序 tkinter 要在 PIL 前
