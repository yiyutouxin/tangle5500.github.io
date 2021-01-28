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

```
usbdeview-x64
    USBDeview.exe
    usbdeview_lng.ini
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
USBDeview.exe /disable_enable "USB DISK"
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
