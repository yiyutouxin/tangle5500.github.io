---
layout:     post
title:      Web Handsontable
subtitle:   
date:       2019-9-12
author:     Tangle
header-img: img/post-bg-ios9-web.jpg
catalog: true
tags:
    - Web
---

# 常用

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- <meta charset="UTF-8"> -->
        <title>Handsontable</title>
        <script src="dist/jquery-1.11.1.min.js"></script>
        <script src="dist/handsontable.full.js"></script>
        <link rel="stylesheet" href="dist/handsontable.full.css" />
        <link rel="stylesheet" type="text/css" href="dist/main.css">
    </head>
    <body>
        <div id="example"></div>
        <script>
            $(document).ready(function () {
                var data = [
                    {riqi:'2019-06-07', goods:'冰箱',price: '3399'},
                    {riqi:'2019-06-07', goods: '空调', price:'4299'},
                    {riqi:'2019-06-07', goods: '洗衣机',price: '1299'},
                ];
                function negativeValueRenderer(instance, td, row, col, prop, value, cellProperties) {
                    Handsontable.renderers.TextRenderer.apply(this, arguments);
                    if (prop == 'riqi') {
                        td.style.color = '#32CD32';
                    }
                    else if (prop == 'goods') {
                        td.style.textAlign = 'right';
                    }
                    else if (prop == 'price') {
                        td.innerText = value != null ? numbro(value).format('0.00') : "";
                    }
                }
                Handsontable.renderers.registerRenderer('negativeValueRenderer', negativeValueRenderer);
                var hot = new Handsontable(document.getElementById('example'),{
                    data: data,
                    colHeaders: ['日期', '商品', '单价'],
                    columns: [{
                        data: 'riqi',
                        type: 'date',
                        dateFormat: 'YYYY-MM-DD'
                    },{
                        data: 'goods',
                        type: 'text'
                    },{
                        data: 'price',
                        type: 'numeric'
                    }],
                    autoColumnSize: true,
                    cell: [
                        {row: 999, col: 999, readOnly: true}
                    ],
                    contextMenu: {
                        items: {
                        "copy": { name: '复制', },
                        "hsep1": "---------",
                        "undo": { name: '撤销' },
                        "redo": { name: '重做' },
                        }
                    },
                    cells: function (row, col, prop) {
                        var cellProperties = {};
                        cellProperties.renderer = "negativeValueRenderer";
                        return cellProperties;
                    },

                });
                function callBack(changes,source){ 
                }
                Handsontable.hooks.add('afterChange',callBack);
            });
        </script>
    </body>
</html>
```



# 属性

| 属性                              | 作用           |
| --------------------------------- | -------------- |
| columnSorting: true               | 列排序         |
| mergeCells: true                  | 合并单元格     |
| comments: true                    | 启用批注       |
| search: true                      | 查询           |
| currentRowClassName: 'currentRow' | 当前行的类名   |
| currentColClassName: 'currentCol' | 当前列的类名   |
| customBorders: true               | 自定义边框设置 |
| headerTooltips:true               | 工具栏启用     |
| dropdownMenu: true                | 下拉菜单       |
| filters:true                      | 筛选条件       |

## 表格数据

```javascript
data: [
    ['日期','销售地点','销售商品','单价','销量'],
    ['2017-01', '北京', '冰箱', '3399', 530],
    ['2017-01', '天津', '空调', '4299', 522],
];
```

```javascript
data: [
	{'date': '2017-01', 'place':'北京', 'goods':'冰箱', 'price':3399, '销量':530},
	{'date': '2017-01', 'place':'天津', 'goods':'空调', 'price':4299, '销量':522},
	{'date': '2017-01', 'place':'上海', 'goods':'洗衣机', 'price':1299, '销量':544},
];
```

```javascript
 data: Handsontable.helper.createEmptySpreadsheetData(100, 100),
 data: Handsontable.helper.createSpreadsheetData(50, 50),
```

## 固定行列位置

| 属性               | 作用                       |
| ------------------ | -------------------------- |
| fixedRowsTop:1     | 固定顶部多少行不能垂直滚动 |
| fixedColumnsLeft:1 | 固定左侧多少列不能水平滚动 |

## 拖拽行头或列头改变行或列的大小

| 属性                             | 作用                     |
| -------------------------------- | ------------------------ |
| manualColumnResize:true \| false | 当值为 true 时，允许拖动 |
| manualRowResize:true \| false    | 当值为 false 时禁止拖动  |

## 延伸列的宽度

| 属性                          | 作用                                  |
| ----------------------------- | ------------------------------------- |
| stretchH：last \| all \| none | 延伸最后一列; 延伸所有列 ; 默认不延伸 |

## 拖动行或列到某一行或列之后

| 属性                            | 作用                               |
| ------------------------------- | ---------------------------------- |
| manualColumnMove：true \| false | 值为 true 时，列可拖拽移动到指定列 |
| manualRowMove:true \| false     | 值为 true 时，行可拖拽至指定行     |

## 设置当前行或列的样式

## 行分组或列分组

## 允许排序

## 显示行头列头

| 属性                             | 作用 |
| -------------------------------- | ---- |
| colHeaders:true \| fals \| array | 列头 |
| rowHeaders:true \| fals \| array | 行头 |

## 右键菜单展示

| 属性                              | 作用                         |
| --------------------------------- | ---------------------------- |
| contextMenu:true \| fals \| array | 当值为 true 时，启用右键菜单 |

## 自适应列大小

| 属性                          | 作用         |
| ----------------------------- | ------------ |
| autoColumnSize：true \| false | 自适应列大小 |

## 最小列数

| 属性           | 作用                       |
| -------------- | -------------------------- |
| minRows:1      | 最小行数                   |
| minCols: 1     | 最小列数                   |
| minSpareCols:1 | 最小列空间，不足则添加空列 |
| maxCols:1      | 最大列数                   |
| maxRows:1      | 最大行数                   |
| minSpareRows:1 | 最小行空间，不足则添加空行 |

## observeChanges

| 属性                          | 作用                                     |
| ----------------------------- | ---------------------------------------- |
| observeChanges：true \| false | 当值为 true 时，启用 observeChanges 插件 |

## 列宽

| 属性                                                  | 作用 |
| ----------------------------------------------------- | ---- |
| colWidths:1<br> colWidths : [100, 200, 300, 200, 100] | 列宽 |

## 自定义边框

| 属性               | 作用             |
| ------------------ | ---------------- |
| customBorders:true | 自定义单元格边框 |

### 一个单元格

```javascript
customBorders: [  
{ 
    row: 2,  
    col: 2,  
    left: {  
        width: 2,  
        color: 'red' 
    },  
    right: {  
        width: 1,  
        color: 'green' 
    }  
}],
```

### 多个单元格

```javascript
customBorders: [{  
    range: {
        from: { // 起始位置  
            row: 1,  
            col: 1  
        },
        to: { // 结束位置 
            row: 3,  
            col: 4  
        }  
    },  
    top: {
        width: 2,  
        color: '#5292F7' 
    },  
    left: {
        width: 2,  
        color: 'orange' 
    },  
    bottom: {
        width: 2,  
        color: 'red' 
    },  
    right: {
        width: 2,  
        color: 'magenta' 
    }  
}],
```

```javascript
customBorders: [{  
    range: {
        from: {row: 1, col:1},
        to: {row: 3, col:3}},
        top: {width: 2, color: '#25e825'},
        right: {width: 2, color: '#25e825'},
        bottom: {width: 2, color: '#25e825'},
        left: {width: 2, color: '#25e825'}
    },{
        row: 2,
        col: 2,
        top: {width: 2, color: '#7687c5'},
        right: {width: 2, color: '#7687c5'},
        bottom: {width: 2, color: '#7687c5'},
        left: {width: 2, color: '#7687c5'}
    }
],
```

## 单元格合并

| 属性            | 作用       |
| --------------- | ---------- |
| mergeCells:true | 单元格合并 |

## className

| className 属性 | 作用     |
| -------------- | -------- |
| htCenter       |          |
| htLeft         | 左对齐   |
| htRight        | 右对齐   |
| htJustify      |          |
| htTop          |          |
| htMiddle       | 垂直居中 |
| htBottom       |          |

```javascript
className:'htRight htMiddle'
```

## 指定单元格的某些属性

| 参数          | 作用 |
| ------------- | ---- |
| editor: false | 只读 |

```javascript
cell: [
    {row:0, col:0, className: 'htRight htMiddle', editor: false},
    {row:1, col:1, className: 'htLeft'}
],
```

## 初始行数

## 初始列数

## 自动换行

| 属性          | 作用     |
| ------------- | -------- |
| wordWrap:true | 自动换行 |

## 是否允许复制

### 允许键盘复制

| 属性          | 作用         |
| ------------- | ------------ |
| copyable:true | 允许键盘复制 |

### 允许拖动复制

如果设置为 false，则选中单元格后，在右下方不会出现可以拖动的点 

| 属性                   | 作用               |
| ---------------------- | ------------------ |
| fillHandle:true        | 允许拖动复制       |
| fillHandle: 'vertical' | 只可以垂直拖动复制 |

## 是否呈现所有行

如果是 true，则当你用键盘上下移动数据时，数据不会随着焦点的下移或上移同步移动 

如果是 false，则当你用键盘上下移动数据时，滚动条也会随着焦点上下移动 

| 属性               | 作用                               |
| ------------------ | ---------------------------------- |
| renderAllRows:true | 将禁用 handsontable 的虚拟呈现机制 |

# 操作单元格

| 语法                                        | 作用                 |
| ------------------------------------------- | -------------------- |
| hot.getData(1,1,2,2);                       | 获取单元格范围值     |
| hot.getDataAtCell(row,col);                 | 获取单元格值         |
| hot.getSelected();                          | 获取选中的单元格     |
| hot.setDataAtCell(row, col, value, source); | 设置单元格值         |
| hot.alter('remove_row',0);                  | 删除行               |
| hot.clear();                                | 清空数据             |
| hot.selectCell(1,1,2,2);                    | 设置单元格为选中状态 |

# 样式

|                                                              |              |
| ------------------------------------------------------------ | ------------ |
| td.style.color = '#32CD32';                                  | 修改字体颜色 |
| td.style = 'font-weight: bold;';                             | 字体加粗     |
| td.innerText = value != null ? numbro(value).format('0.000') : ""; | 格式化数据   |
| td.style.textAlign = 'right';                                | 右对齐       |

```javascript
function negativeValueRenderer(instance, td, row, col, prop, value, cellProperties) {
    Handsontable.renderers.TextRenderer.apply(this, arguments);
    if (prop == 'address') {
        td.style.color = '#32CD32';
    }
    else if (prop == 'price') {
        td.innerText = value != null ? numbro(value).format('0.000') : "";
    }
    else if (prop == 'sales') {
        td.style.textAlign = 'right';
        td.innerText = value != null ? numbro(value).format('0,0.00') : "";
    }
}
Handsontable.renderers.registerRenderer('negativeValueRenderer', negativeValueRenderer);


cells: function (row, col, prop) {
    var cellProperties = {};
    cellProperties.renderer = "negativeValueRenderer";
    return cellProperties;
},
```

# 事件

## 鼠标点击

```javascript
$(document).ready(function () {
    function callBack(event,coords,td){
        var row = coords.row;
        var col = coords.col;
    }
    Handsontable.hooks.add('afterOnCellMouseDown',callBack,hot);
)};
```

## 修改单元格

```javascript
afterChange (
    changes:[row,prop,oldVal,newVal],
    source: "alter","empty","populateFromArray","loadData","autofill","paste"
)
```

```javascript
$(document).ready(function () {
    function callBack(changes,source){ 
    }
    Handsontable.hooks.add('afterChange',callBack);
)};
```

# 单元格只读

## 指定单元格

```javascript
cell: [
    {row: 1, col: 0, readOnly: true}
],
```

## 指定列

```javascript
columns: [{
    readOnly: true
}],
```

## 所有单元格

```javascript
cells: function (row, col, prop) {
    var cellProperties = {};
    cellProperties.readOnly = true
    return cellProperties;
},
```
