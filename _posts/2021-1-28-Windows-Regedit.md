---
layout:  post
title:   Windows Regedit
date:    2021-1-28
author:  Tangle
catalog: true
tags:
    - Regedit
---

# reg

```
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\StorageDevicePolicies]
"WriteProtect"=dword:00000000
```

# bat

```
/v # 子项名称
/t # 子项类型
/d # 子项数据
/f # 确认
```

```
reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\StorageDevicePolicies" /v WriteProtect /t reg_dword /d 0 /f
```
