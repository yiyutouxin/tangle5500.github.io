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

# 本地域名

```
# hosts
0.0.0.0 www.work.com
```

浏览 **www.work.com**

# 生成证书

0. 官网：<http://slproweb.com/products/Win32OpenSSL.html>
0. 下载 **Win64 OpenSSL v1.1.1g Light**
0. 环境变量添加 **bin** 目录
0. 生成证书 **Common Name (e.g. server FQDN or YOUR name) []:** 输入域名 **www.work.com**
    ```
    openssl genrsa -out name.key 1024                                        # 生成 key 密钥
    openssl req -new -x509 -key name.key -out name.pem -days 365             # 生成 pem 证书
    openssl req -new -key name.key -out name.csr                             # 生成 ssr 证书
    openssl x509 -req -days 365 -in name.csr -signkey name.key -out name.crt # 生成 crt 证书
    ```

# nginx

0. 官网：<http://nginx.org/en/download.html>
0. 下载 **nginx/Windows-1.12.2**
0. 添加配置
    ```
    # nginx.conf
    
    server {
        listen                    80;
        server_name               0.0.0.0 work.com www.work.com;
        # 重定向
        return 301                https://www.work.com$request_uri;
    }
    
    # HTTPS server
    server {
        listen                    443 ssl;
        # 域名
        server_name               www.work.com;
        # 证书
        ssl_certificate           /name.pem;
        # 密钥
        ssl_certificate_key       /name.key;
        # 会话缓存
        ssl_session_cache         shared:SSL:1m;
        # 会话超时
        ssl_session_timeout       5m;
        # 会话复用
        ssl_session_tickets       off;
        # 密码
        ssl_ciphers               HIGH:!aNULL:!MD5;
        # 首选服务器密码
        ssl_prefer_server_ciphers on;
        location / {
            # 代理通行证
            proxy_pass            http://127.0.0.1:4000;
        }
    }
    ```
0. cmd
0. nginx.exe

## 参考

0. 会话复用：https://blog.sspirits.top/archives/nginx-ssl-tls-configuration-optimization
0. 配置：https://www.bookstack.cn/read/nginx-docs/%E6%A8%A1%E5%9D%97%E5%8F%82%E8%80%83-mail-ngx_mail_ssl_module.md

# 客户端

0. 导入 pem 根证书
0. 本地域名
    ```
    # hosts
    0.0.0.0 www.work.com
    ```
0. 浏览 **www.work.com**
