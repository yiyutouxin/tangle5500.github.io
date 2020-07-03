---
layout:     post
title:      Python Matplotlib
subtitle:   
date:       2019-9-29
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
mathjax: false
tags:
    - Python
---

# 图例位置

```
import matplotlib.pyplot as plt
import numpy as np

x = np.arange(10)
fig = plt.figure()
ax = plt.subplot(111)

for i in range(5):
    ax.plot(x, i * x, label='$y = %ix$'%i)

box = ax.get_position()
ax.set_position([box.x0, box.y0, box.width * 0.8, box.height])
ax.legend(loc='upper left', bbox_to_anchor=(1, 1))

plt.show()
```
