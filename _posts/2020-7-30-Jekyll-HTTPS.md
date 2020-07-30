---
layout:     post
title:      Jekyll HTTPS
subtitle:   
date:       2020-7-30
author:     Tangle
catalog: true
mathjax: false
tags:
    - Jekyll
---

# 设置域名

```
# hosts
127.0.0.1 work
127.0.0.1 work.com
127.0.0.1 www.work.com
```

浏览器输入 **work:4000**

# 生成证书

1. 官网：<http://slproweb.com/products/Win32OpenSSL.html>
1. 下载 **Win64 OpenSSL v1.1.1g Light**
1. 环境变量添加 **bin** 目录
1. 生成证书 **Common Name (e.g. server FQDN or YOUR name) []:** 输入域名 **work**
    ```
    openssl genrsa -out name.key 1024                                        # 生成 key 密钥
    openssl req -new -x509 -key name.key -out cert.pem -days 365             # 生成 pem 证书
    openssl req -new -key name.key -out name.csr                             # 生成 ssr 证书
    openssl x509 -req -days 365 -in name.csr -signkey name.key -out name.crt # 生成 crt 证书
    ```

# nginx

1. 官网：<http://nginx.org/en/download.html>
1. 下载 **nginx/Windows-1.12.2**
1. 添加配置
    ```
    # nginx.conf

    #HTTPS server
    server {
        listen       443 ssl;
        # 域名
        server_name    work;
        # 重定向
        rewrite ^(.*) https://$server_name$1 permanent;
        # 证书
        ssl_certificate      /name.crt;
        # 密钥
        ssl_certificate_key  /name.key;
        # 会话缓存
        ssl_session_cache    shared:SSL:1m;
        # 会话超时
        ssl_session_timeout  5m;
        # 密码
        ssl_ciphers  HIGH:!aNULL:!MD5;
        # 首选服务器密码
        ssl_prefer_server_ciphers  on;
        location / {
            # 代理通行证
            proxy_pass http://localhost:4000;
        }
    }
    ```
1. cmd
1. nginx.exe
