---
layout:  post
title:   Windows Terminal
date:    2020-12-6
author:  Tangle
catalog: true
tags:
    - Windows
---

<https://github.com/microsoft/terminal>

# 默认

## cmd

```
{
    // Make changes here to the cmd.exe profile.
    "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
    "name": "Command Prompt",
    "commandline": "cmd.exe",
    "hidden": false
},
{
    // Make changes here to the powershell.exe profile.
    "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "name": "Windows PowerShell",
    "commandline": "powershell.exe",
    "hidden": false
},
{
    "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
    "hidden": false,
    "name": "Azure Cloud Shell",
    "source": "Windows.Terminal.Azure"
}
```
