---
layout:  post
title:   Python OpenCV
date:    2021-3-22
author:  Tangle
catalog: true
tags:
    - Python
---
      
# 视频属性
      
```
import cv2

cap = cv2.VideoCapture("test.mp4")
if cap.isOpened():
    width = cap.get(cv2.CAP_PROP_FRAME_WIDTH)         # 1920.0  # 帧宽度
    height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)       # 1080.0  # 帧高度
    fps = cap.get(cv2.CAP_PROP_FPS)                   # 25.0    # 帧率
    frame_counter = cap.get(cv2.CAP_PROP_FRAME_COUNT) # 15150.0 # 总帧数
    duration = frame_counter/fps                      # 606.0   # 视频时长
    cap.release()           # 释放
    cv2.destroyAllWindows() # 销毁所有窗口
```

# 文档

<https://docs.opencv.org/3.0-beta/doc/py_tutorials/py_tutorials.html>
