---
layout:  post
title:   Python OpenCV
date:    2019-10-13
author:  Tangle
catalog: true
tags:
    - Vim
---
      
# 视频时长
      
```
import cv2
def get_video_duration(filename):
    cap = cv2.VideoCapture(filename)
    if cap.isOpened():
        rate = cap.get(5)     # 帧速率
        print(rate)
        frame_num =cap.get(7) # 总帧数
        print(frame_num)
        duration = frame_num/rate
        return duration       # 视频长度
    return -1
t=get_video_duration("test.mp4")
print(t)
```
