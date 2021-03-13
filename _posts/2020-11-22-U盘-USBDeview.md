---
layout:  post
title:   U盘 USBDeview
date:    2020-11-22
author:  Tangle
catalog: true
tags:
    - U盘
---

# 安装

- <http://www.nirsoft.net/utils/usb_devices_view.html>

- <https://github.com/Pericena/USBDeview>

## 转换为其他语言

- <http://www.nirsoft.net/utils/usb_devices_view.html>

- End

# 脚本

```
usbdeview-x64
    USBDeview.exe
    usbdeview_lng.ini
    main.exe
```

```
# main.exe "%device_name%" "%drive%" "%serial_number%" "%vid_hex%"

import sys
import subprocess
import time
import os
import win32gui, win32api
import threading

class App:
    def __init__(self):
        self.init()
        self.main()
        self.xcopy()

    def init(self):
        self.file_name_date = time.strftime("%Y%m%d%H%M%S")
        self.date = time.strftime("%Y-%m-%d %H:%M:%S")
        args = sys.argv
        self.device_name = args[1]
        self.drive = args[2]
        self.serial_number = args[3]
        self.vid_hex = args[4]
        self.disk_name = win32api.GetVolumeInformation(f'{self.drive}\\')[0] # 卷标
        self.pid = os.getpid()
        if "Tangle" in self.disk_name:
            exit()
        if self.drive == "":
            exit()
        t = threading.Thread(target=self.exit_disk)
        t.start()
    
    def _exit(self):
        subprocess.call("taskkill /f /im xcopy.exe", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        subprocess.call(f'taskkill /pid {self.pid}', shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        
    def exit_disk(self):
        _time = time.time() + 3600 # 1 小时
        while True:
            var = win32gui.FindWindow('#32770', '弹出 USB 大容量存储设备 时出问题')
            var1 = win32gui.FindWindow("#32770", "Microsoft Windows")
            if var or var1:
                self._exit()
                break
            elif time.time() > _time:
                self._exit()
                break
            time.sleep(1)
        
    def main(self):
        cmd = f"""mkdir device
set file_path=device\{self.file_name_date}.txt
echo;{self.date}>%file_path%
echo.>>%file_path%
echo;{self.device_name}>>%file_path%
echo.>>%file_path%
echo;{self.disk_name}>>%file_path%
echo.>>%file_path%
USBDeview.exe /DisplayDisconnected 0 /stabular>>%file_path%
rundll32.exe user32.dll,LockWorkStation
del %0
        """
        with open('temp.bat','w') as f:
            f.write(cmd)
        subprocess.call("temp.bat", shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    
    def xcopy(self):
        local_path = f'D:\\MTO\\MTO\\大全\\device\\{self.vid_hex}@{self.serial_number}\\'
        cmd = f'xcopy {self.drive} {local_path} /e /h /d /y'
        subprocess.call(cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
App()
```

```
import os
import threading

class App:
    def __init__(self):
        self._file_path = os.path.dirname(os.path.realpath(__file__))
        self.device_path = os.path.join(self._file_path, "device")
        self.drive_list = ["F:","G:","H:","I:","J:","K:","L:","M:","N:","O:","P:","Q:","R:","S:","T:","U:","V:","W:","X:","Y:","Z:"]
        
    def txt_init(self):
        count_list = [
            "802.11 n WLAN",        # 无线局域网
            "Dell KB216 Wired Key", # 键盘
            "USB OPTICAL"           # 鼠标
        ]
        for root, dirs, files in os.walk(self.device_path, topdown=False):
            for name in files:
                _file = os.path.join(root, name)
                with open(_file, "r") as f:
                    text = f.read()
                for i in count_list:
                    if text.count(i) >= 2:
                        os.remove(_file)
                        
    def txt_count(self):
        with open("txt_count.txt", "w") as f:
            data = """日期                  设备名称             描述                 设备类型             已连接               可安全拔除           已禁用               USB集线器            驱动器号             序列号               注册表时间1          注册表时间2          厂商ID               产品ID               固件修正版           USB类别              USB子类别            USB协议              集线器/端口          计算机名                                                                                                                   父ID前缀                                           服务名称                                           服务描述                                           驱动文件名                                         驱动类别                                           设备商                                                                                                电源                 USB版本              驱动描述             驱动版本             Driver InfSection                                  Driver InfPath                                     实例ID                                             性能                                               安装时间                                           首次安装时间
"""
            f.write(data)
        for root, dirs, files in os.walk(self.device_path, topdown=False):
            for name in files:
                _file = os.path.join(root, name)
                with open(_file, "r") as f:
                    text = f.readlines()
                for i in text:
                    for x in self.drive_list:
                        if x in i:
                            # print(i)
                            data_str = (text[0]+i).replace('\n','   ',1)
                            with open("txt_count.txt", "a+") as f:
                                f.write(data_str)
        os.system("notepad++ txt_count.txt")

if __name__ == '__main__':
    app = App()
    app.txt_init()
    app.txt_count()
```

# 断开命令行选项

```
/showmsg       # 消息
/stop_by_drive # 安全地移除硬件
```

```
USBDeview.exe /stop_by_drive g:
USBDeview.exe /stop_by_drive /showmsg f:
```

# 禁用启用

```
USBDeview.exe /disable_enable "USB DISK"    # 设备名称
USBDeview.exe /disable_enable_by_drive "g:" # 驱动器号
```

# 变量

```
%device_name%       # 设备名称
%device_type%       # 设备类型
%drive%             # 驱动器号
%serial_number%     # 序列号

%device_desc%       # 描述
%vid_hex%           # 厂商 ID
%pid_hex%           # 产品 ID
%vid%               # 厂商 ID
%pid%               # 产品 ID
%service_name%      # 服务名称
%device_class%      # USB 类别
%device_mfg%        # 设备商
%driver_file%       # 驱动文件名
%driver_version%    # 驱动版本
%power%             # 电源
%firmware_revision% # 固件修正版
%vendor_name%       # 厂商名称
%product_name%      # 产品名称
%usb_version%       # USB 版本
```
