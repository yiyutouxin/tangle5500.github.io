---
layout:  post
title:   Python Requests
date:    2021-3-4
author:  Tangle
catalog: true
tags:
    - Python
---

# 爬虫

## requests

```
pip install requests
```

```
import requests

response = requests.get('https://www.baidu.com/')
response.encoding = "utf-8"
print(response.status_code) # 打印状态码
print(response.url)         # 打印请求url
print(response.headers)     # 打印头信息
print(response.cookies)     # 打印cookie信息
print(response.text)        # 以文本形式打印网页源码
print(response.content)     # 以字节流形式打印网页源码
```

## xpath

```
pip install xlml
```

```
from lxml import etree
import requests

_requests = requests.get('https://pixivic.com/popSearch')
html_data = etree.HTML(_requests.content)           # 获取 html 源码
ima = html_data.xpath('/html/body/div[5]/img/@src') # 匹配数据
```

## 下载图片

```
from multiprocessing import Pool
import requests

def req(url):
    req_obj = requests.get(url)
    return req_obj

def img_download(img):
    im = req(img)
    with open(img[-15:], 'wb+') as f:
        f.write(im.content)

if __name__ == '__main__':
    images = []
    img = 'http://img.netbian.com/file/2019/0423/f18e61ee804bfee503bc42913883a1a3.jpg'
    images.append(img)
    pool = Pool(1) # 多线程
    pool.map(img_download, images)
    pool.close()
    pool.join()
```

# session

```
import requests

test_url = 'https://space.bilibili.com/122566598'
ua = {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:71.0) Gecko/20100101 Firefox/71.0',
}

def read_cookies():
    with open("mycookies.txt", 'r', encoding='utf-8') as f:
        cookies_txt = f.read()
        cookies_txt = dict([i.split("=", 1) for i in cookies_txt.split(";")])
        cookiesJar = requests.utils.cookiejar_from_dict(cookies_txt, cookiejar=None,overwrite=True)
        print(cookiesJar)
        return cookiesJar
session = requests.session()
session.headers = ua
session.cookies = read_cookies()
response = session.get(test_url)
print(session.cookies)
print(response.text)
```
