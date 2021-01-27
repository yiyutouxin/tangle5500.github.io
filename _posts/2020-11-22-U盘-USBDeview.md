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
