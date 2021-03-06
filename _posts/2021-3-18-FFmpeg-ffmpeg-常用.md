---
layout:  post
title:   FFmpeg ffmpeg 常用
date:    2020-9-27
author:  Tangle
catalog: true
tags:
    - FFmpeg
---

# 编码

```
ffmpeg -i input.avs -c:v h264_nvenc -pix_fmt yuv420p -s 1920x1080 -r 23.976 -b:v 5.9M -bufsize 2.95M -minrate 5.9M -maxrate 5.9M -ar 44100 -ab 320k output.mp4
```

# 格式转换

```
for /r %i in ("*.mkv") do ffmpeg -i "%i" -c:v h264_nvenc -s 1920x1080 -r 23.976 -b:v 5.9M -bufsize 2.95M -minrate 5.9M -maxrate 5.9M "%~pna.mp4"
```

# 全屏随机水印

```
colorchannelmixer=aa=0.3 # 透明度
```

```
ffmpeg -y -i input.mp4 -i watermark.png -filter_complex [1:v]colorchannelmixer=aa=0.3[valpha];[0:v][valpha]"overlay='if(ld(0), if(lte(mod(t/5,1),0.05),st(0,0);NAN,ld(1)), st(0,1);ld(1);st(1,random(time(0))*(W-w));NAN)':'if(ld(0), if(lte(mod(t/5,1),0.05),st(0,0);NAN,ld(1)), st(0,1);ld(1);st(1,random(time(0))*(H-h));NAN)'" -c:v h264_nvenc -s 1920x1080 -r 23.976 -b:v 5.9M -bufsize 2.95M -minrate 5.9M -maxrate 5.9M temp.mp4
```

# 串联视频

```
[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0][3:v:0][3:a:0] # 获取输入视频发送到 concat 过滤器
n=4                         # 三个输入段
v=1                         # 每段一个视频流
a=1                         # 每段一个音频流
[outv][outa]                # 过滤器输出流名称
-map "[outv]" -map "[outa]" # 按顺序映射到输出文件
```

```
ffmpeg -y -i input.mp4 -i input1.mp4 -i input2.mp4 -i input3.mp4 -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0][3:v:0][3:a:0]concat=n=4:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]" -c:v h264_nvenc -s 1920x1080 -r 23.976 -b:v 5.9M -bufsize 2.95M -minrate 5.9M -maxrate 5.9M output.mp4
```
