---
layout:  post
title:   FFmpeg ffmpeg 例子
date:    2020-9-27
author:  Tangle
catalog: true
tags:
    - FFmpeg
---

# 帮助

```
ffmpeg -h
ffplay -h
ffprobe -h
ffmepg -h -ss
```

# 表达式

- 浏览 <https://www.bookstack.cn/read/other-doc-cn-ffmpeg/ffmpeg-doc-cn-08.md>

```
expr1;expr2 # 两个表达式都会被计算，但是新表达式值实为表达式 expr2 的值
```

## 变量

```
st(var, expr) # 对 var 变量在内部存储一个 expr 值，供以后使用，var 范围为 0-9，注意这些变量当前不能在表达式间共享
ld(var)       # 加载预订的内部变量 var 对应值，其中值是利用 st(var, expr) 存储的
```

# 下载

## m3u8

```
ffmpeg -i "https://videos3.jianzhuluntan.com/20201223/ovg-149/index.m3u8" -c copy out.ts
```

# 串联

```
ffmpeg -i move.mp4 -i move.mp4 -i output.ts -filter_complex "[0:v:0][0:a:0][1:v:0][1:a:0][2:v:0][2:a:0]concat=n=3:v=1:a=1[outv][outa]" -map "[outv]" -map "[outa]"  output9.mkv
```

# 截图

## 静态图

```
ffmpeg -i test.mp4 -ss 7 -vframes 1 video_image.jpg # 第7秒第1帧
```

## 动态图

```
ffmpeg -i video.mp4 -ss 7.5 -to 8.5 -s 640x320 -r 15 video_gif.gif # 7.5-8.5秒
```

# 编码

## 码率控制模式

```
-qp  # 恒定量化器模式（constant quantizer）
-crf # 恒定速率因子模式(constant rate factor)
-b   # 固定目标码率模式（bitrate）
```

```
ffmpeg -i input -vcodec libx264 -preset ultrafast -qp 0 output.mkv # 无损压缩（快速编码）
ffmpeg -i input -vcodec libx264 -preset veryslow -qp 0 output.mkv  # 无损压缩（高压缩比）
```

## 编码方式

```
-minrate 4000k   # 最小码率
-maxrate 4000k   # 最大码率
-b:v 4000k       # 码率
-bufsize 2000k   # 缓冲区大小
-preset veryslow # 编码方式非常慢
```

```
# 动态比特率 VBR（Variable Bit Rate）
ffmpeg -i input -vcodec libx264 -preset veryslow output

# 平均比特率 ABR（Average Bit Rate）
ffmpeg -i input -vcodec libx264 -preset veryslow -b:v 3000k output

# 恒定比特率 CBR（Constant Bit Rate）
ffmpeg -i input -vcodec libx264 -preset veryslow -b:v 4000k -minrate 4000k -maxrate 4000k -bufsize 2000k output
```

# 录屏

```
# windows 10

ffmpeg -f gdigrab -framerate 30 -i desktop -c:v h264_nvenc -qp 0 output.mkv
ffmpeg -f gdigrab -i desktop -pix_fmt yuv420p output.mkv
```

# 直播

```
# bilibili

ffmpeg -re -i input.mp4 -vcodec copy -acodec aac -b:a 192k -f flv "<你的rtmp地址><你的直播码>"
```

# 格式转换

```
-codec copy     # 表示所有的流都不进行再次编码
-threads 2      # 多线程
-hwaccel cuvid  # 完全通过显卡 GPU 完成
```

```
ffmpeg -i main.mkv main.mp4                                                         # 单个
for %a in ("*.mkv") do ffmpeg -threads 2 -i "%a" "%~na.mp4"                         # 多个
for /r %a in ("*.mkv") do ffmpeg -threads 2 -i "%a" "%~pna.mp4"                     # 多目录
for /r %a in ("*.mkv") do ffmpeg -hwaccel cuvid -i "%a" -c:v h264_nvenc "%~pna.mp4" # 通过 GPU 多目录
```

# 视频压制

```
-s 1920x1080     # 缩放视频新尺寸（size）
-pix_fmt yuv420p # 用来设置视频颜色空间（pixel format）
-vcodec libx264  # 视频编解码器（video Coder Decoder）
-preset medium   # 编码器预设，参数：ultrafast，superfast，veryfast，faster，fast，medium，slow，slower，veryslow，placebo
-profile:v high  # 编码器配置，与压缩比有关，实时通讯 -baseline 流，媒体 -main，超清视频 -high
-level:v 4.1     # 对编码器设置的具体规范和限制，权衡压缩比和画质
-crf 23          # 设置码率控制模式，恒定速率因子模式（constant rate factor），范围 0-51，默认 23，数值越小，画质越高，一般在 8-28 做出选择
-r 30            # 设置视频帧率
-acodec aac      # 音频编码解码器（audio Coder Decoder）
-b:a 128k        # 音频比特率，大多数网站限制音频比特率 128k，129k
```

```
ffmpeg -i video.mp4 -s 1920x1080 -pix_fmt yuv420p -vcodec libx264 -preset medium -profile:v high -level:v 4.1 -crf 23 -acodec aac -ar 44100 -ac 2 -b:a 128k video_avi.avi
```

# 音频转码

## 无损编码

```
-acodec libmp3lame # 编解码器（audio Coder Decoder），mp3 解码器
ar 44100           # 音频采样率
ab 320k            # 音频比特率（audio bit rate），默认 128K
ac 2               # 音频声道（aduio channels）
```

```
ffmpeg -i music_flac.flac -acodec libmp3lame -ar 44100 -ab 320k -ac 2 music_flac_mp3.mp3
```

# 水印

## 动态水印

```
mod(t,20) # 取余一周期 20秒
main_w, W # 主输入宽度
w         # 福输入宽度
```

```
ffmpeg -y -t 30 -i 1080p+.mp4 -i 水印.png -filter_complex [1:v]colorchannelmixer=aa=0.3[valpha];[0:v][valpha]overlay=:x='(W-w)/2':y='mod(t,20)*60-h' -c:v h264_nvenc -s 1920x1080 -r 60 -crf 23 move.mp4
```

```
# 全屏随机
ffmpeg -y -i qq.mp4 -i qq.png -filter_complex "overlay='if(ld(0), if(lte(mod(t/10,1),0.05),st(0,0);NAN,ld(1)), st(0,1);ld(1);st(1,random(time(0))*(W-w));NAN)':'if(ld(0), if(lte(mod(t/10,1),0.05),st(0,0);NAN,ld(1)), st(0,1);ld(1);st(1,random(time(0))*(H-h));NAN)'" -c:v h264_nvenc output.mp4
```

```
# 60秒四角随机
ffmpeg -i input.mp4 -i input.png -filter_complex "overlay='if(ld(0), if(lte(mod(t/60,1),0.05),st(0,0);NAN,ld(1)), st(0,1);if(lte(random(t),0.5),st(1,0),st(1,main_w-overlay_w));NAN)':'if(ld(0), if(lte(mod(t/60,1),0.05),st(0,0);NAN,ld(1)), st(0,1);if(lte(random(t),0.5),st(1,0),st(1,main_h-overlay_h));NAN)'" output.mp4

# 解析
ffmpeg -i input.mp4 -i input.png -filter_complex "overlay=x='
    if(
        ld(0), 
        if(lte(mod(t/10,1),0.05),
            st(0,0);NAN,
            ld(1)
        ),
        st(0,1);if(
            lte(random(t),0.5),
            st(1,0),
            st(1,main_w-overlay_w)
        );NAN
    )
':y='
    if(
        ld(0),
        if(lte(mod(t/10,1),0.05),
            st(0,0);NAN,
            ld(1)
        ),
        st(0,1);if(
            lte(random(t),0.5),
            st(1,0),
            st(1,main_h-overlay_h)
        );NAN
    )
'" output.mp4
```

## 静态水印

```
ffmpeg -i video.mp4 -i qt.png -filter_complex "overlay=20:80" video_watermark.mp4
```

# 参考

## 中文文档

- <https://www.bookstack.cn/read/other-doc-cn-ffmpeg/README.md>

- <https://www.mekau.com/4992.html>

## 英文文档

- <http://trac.ffmpeg.org/wiki>

## 其他

- <https://blog.csdn.net/qq_21275565/article/details/103671164>

- <https://blog.csdn.net/yu540135101/article/details/103025957?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-13.control&dist_request_id=1328627.12660.16153937976558383&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-13.control>
