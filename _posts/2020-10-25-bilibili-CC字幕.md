---
layout:  post
title:   bilibili CC字幕
date:    2020-10-25
author:  Tangle
catalog: true
tags:
    - bilibili
---

# 工具

## 下载 LRC字幕

酷我：<https://tangle.lanzoui.com/ikNdfhqsz1c>

## 歌词编辑器

<https://github.com/BYJRK/LyricEditor/releases/tag/2.0>

# 上传 CC字幕

0. **酷我：**下载 LRC字幕
0. 修改 lrc 文件为 utf-8 编码
0. **歌词编辑器：**时间整体平移 9.133s
0. 英文在上
0. **notepad++：**替换
    ```
    (\[.*\])([^\r]*)(\r\r\n)(\[.*\])([^\r]*)(\r\r\n) # 查找目标
    \1\2\\n\5\6                                      # 替换为
    ```
0. 上传 CC字幕
