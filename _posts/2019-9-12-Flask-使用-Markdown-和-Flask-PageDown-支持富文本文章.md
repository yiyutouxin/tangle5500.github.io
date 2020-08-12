---
layout:     post
title:      Flask 使用 Markdown 和 Flask PageDown 支持富文本文章
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Flask
---

<!-- {% raw %} -->

```
pip install flask-pagedown markdown bleach
```

# 预览

```python
# static\doc\main.md
# main.py
from flask import Flask
from flask import render_template
from flask import Markup
import markdown

app=Flask(__name__)

@app.route('/')
def index():
	content = md2html('static/doc/main.md')
	return render_template('index.html',**locals())

def md2html(filename):
	
	exts = ['markdown.extensions.extra', 'markdown.extensions.codehilite','markdown.extensions.tables','markdown.extensions.toc']
	mdcontent = ""
	with open(filename,'r',encoding='utf-8') as f:
		mdcontent = f.read()
		pass	
	html = markdown.markdown(mdcontent,extensions=exts)
	content = Markup(html)
	return content

if __name__ == '__main__':
	app.debug = True
	app.run(host='127.0.0.1',port = 5000)
```

```html
<!-- templates\index.html -->
<html lang="zh-cn">
    <head>
        <meta content="text/html; charset=utf-8" http-equiv="content-type" />
        <link href="/static/default.css" rel="stylesheet">
        <link href="/static/github.css" rel="stylesheet" type="text/css" />
        <style>
        .abc {margin:0 auto;width:720px; solid;text-align:left;}
        </style>
    </head>
    <body>
        <div class="abc"> {{ content }} </div>
    </body>
</html>
```

# 编辑器

```html
<!-- static/editormd -->
<!-- templates/index.html -->
<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8"/>
    <title>Simple example</title>
    <link rel="stylesheet" href="{{ url_for('static',filename='editormd/css/editormd.css') }}"/>
</head>
<body>
    <div id="test-editormd">
    </div>
    <script src="{{ url_for('static',filename='js/jquery.min.js') }}"></script>
    <script src="{{ url_for('static',filename='editormd/editormd.min.js') }}"></script>
    <script type="text/javascript">
        var testEditor;
        $(function () {
            testEditor = editormd("test-editormd", {
                width: "90%",
                height: 640,
                syncScrolling: "single",
                path: "{{ url_for('static',filename='editormd/lib/') }}"
            });
        });
    </script>
</body>
</html>
```

```python
# main.py
from flask import Flask
from flask import render_template
from flask import Markup
import markdown

app=Flask(__name__)
    
@app.route('/')
def index():
    mkd = '''
    # header
    ## header2
    [picture](http://www.example.com)
    * 1
    * 2
    * 3
    **bold**
    '''
    return render_template('index.html', mkd=mkd)

if __name__ == '__main__':
	app.debug = True
	app.run(host='127.0.0.1',port = 5000)
```

<!-- {% endraw %} -->
