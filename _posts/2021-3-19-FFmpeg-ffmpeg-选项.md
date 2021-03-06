---
layout:  post
title:   FFmpeg ffmpeg 选项
date:    2021-3-19
author:  Tangle
catalog: true
tags:
    - FFmpeg
---

# 常用

```
-r 23.976    # 帧率
-s 1920x1080 # 分辨率
```

# 选择流

## map

```
-map 0             # 所有流
-map 0:a           # 所有音频流
-map 0 -map -0:a:1 # 除第二个音频流
```

```
ffmpeg -i INPUT -map 0 -map -0:a:1 OUPUT
```

# 编码

## 图像

```
-vframes 1 # 取帧
-f image2  # 格式
%3d        # 3 位数
```

```
ffmpeg -i INPUT -vframes 1 output.png
ffmpeg -i INPUT -ss 00:00:10 -vframes 10 output.gif

ffmpeg -i INPUT -t 5 -r 60 output%03d.jpg
ffmpeg -i INPUT -ss 10.55 -vframes 10 output%3d.jpg
ffmpeg -i output%3d.jpg -r 60  output.mp4
```

## 视频

```
-vn              # 禁用视频
-c:v h264_nvenc  # 视频编码 GPU
-c:v libx264     # 视频编码 CPU
-c:v copy        # 视频编码复制
-f mkv           # 指定视频格式
-pix_fmt yuv420p # 像素格式
```

## 音频

```
-c:a acc  # 音频编码（acc）
-c:v copy # 音频编码复制
-an       # 禁用音频
-ab 128k  # 音频比特率（128k）
-ac 2     # 音频声道
-ar 44100 # 音频采样率
```

## 编码器预设

```
-preset ultrafast
        superfast
        veryfast
        faster
        fast
        medium # 默认
        slow
        slower
        veryslow
        placebo
```

## 码率模式

### 恒定量化器模式

```
-qp 0
```

```
ffmpeg -i INPUT -vcodec libx264 -preset ultrafast -qp 0 output.mkv # 无损压缩快速编码
```

### 恒定速率因子模式（23）

```
-crf <0-51>
```

### 固定目标码率模式

```
-b:v 4000k     # 固定目标码率模式
-minrate 4000k # 最小
-maxrate 4000k # 最大
-bufsize 2000k # 缓冲区大小
```

```
ffmpeg -i INPUT -vcodec libx264 -preset veryslow -b:v 4000k -minrate 4000k -maxrate 4000k -bufsize 2000k OUTPUT
```

# 剪辑

```
-ss 00:10:00               # 00:10:00 - end
-to 00:00:10               # 00:00:00 - 00:00:10
-ss 00:01:00 -to 010:01:10 # 00:01:00 - 00:01:10
-t 10                      # 00:00:00 - 00:00:10
-ss 00:01:00 -t 20         # 00:01:00 - 00:01:20
```

```
ffmpeg -i INPUT -ss 00:01:00 -t 20 OUTPUT
```

# 滤镜

```
overlay=x='W':y='H'      # 覆盖
colorchannelmixer=aa=0.3 # 透明度
```

```
ffmpeg -i INPUT -i INPUT -filter_complex [0:v][1:v]overlay=x='W':y='H' OUTPUT
```

# 表达式

<https://www.bookstack.cn/read/other-doc-cn-ffmpeg/ffmpeg-doc-cn-08.md>

## 常用

```
print(t)  # 打印
random(x) # 随机数
time(0)   # 时间
```

```
ffmpeg -i INPUT -i INPUT -filter_complex "overlay='print(random(time(0)));W'" OUTPUT
```

## 变量

```
W # 主输入宽
H # 主输入高
w # 副输入宽
h # 副输入高
```

```
ld(var)       # 设置变量（0）
st(var, expr) # 变量赋值
```

## 判断

```
if(x, y)
if(x, y, z)
ifnot(x, y)
ifnot(x, y, z)
```

## 运算

```
eq(x, y)  # 等于
gt(x, y)  # 大于
gte(x, y) # 大于等于
eq(x, y)  # 小于
lte(x, y) # 小于等于
mod(x, y) # 取余
max(x, y) # 最大值
min(x, y) # 最小值
pow(x, y) # 幂
```
