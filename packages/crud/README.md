# SpCrud 集成表格

以表格(SpTable)为主，集成表单(SpForm)搜索表单、新增表单、编辑表单、查看表单，自定义列等组件

## Attributes

* 同[表格(SpTable)](/spelement-ui/table/#attributes)

## Attributes.Option

* [表格(SpTable)](/spelement-ui/table/#attributes-option)该有的都有

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| addBtn | ```Boolean``` | 新增按钮 | ```false|true``` | ```false```
| searchBtn | ```Boolean``` | 搜索按钮 | ```false|true``` | ```true```
| columnBtn | ```Boolean``` | 自定义列按钮 | ```false|true``` | ```true```
| refreshBtn | ```Boolean``` | 刷新按钮 | ```false|true``` | ```true```

## Option.Column

* [表格(SpTable)](/spelement-ui/table/#option-column)该有的都有

* [表单(SpForm)](/spelement-ui/form/#option-column)该有的都有

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| type | ```String``` | 表单类型 | 同表单 | 24
| span | ```Number``` | 全部表单栅格 | 1~24 | 24
| display | ```Boolean``` | 为false时新增、编辑表单隐藏，数据依然存在 | ```true/false``` | true
| search | ```Boolean``` | 是否用于搜索表单 | ```true/false``` | null
| searchSpan| ```Number``` | 搜索表单栅格 | 1~24 | 24
| searchType| ```String``` | 搜索表单的类型 | 同表单 | null
| searchIndex | ```Number``` | 搜索表单排序 | - | null
| addAble | ```Boolean``` | 是否用于新增表单 | ```true/false``` | true
| addDisplay| ```Boolean``` | 为false时新增表单隐藏，数据依然存在 | ```true/false``` | null
| addDisabled | ```Boolean``` | 新增表单禁用 | ```true/false``` | null
| addSpan| ```Number``` | 新增表单栅格 | `1~24 | 24
| addType| ```String``` | 新增表单的类型 | 同表单 | null
| editAble | ```Boolean``` | 是否用于编辑表单 | ```true/false``` | true
| editDisabled | ```Boolean``` | 编辑表单禁用 | ```true/false``` | false
| editDisplay | ```Boolean``` | 为false时编辑表单隐藏，数据依然存在 | ```true/false``` | true
| editSpan| ```Number``` | 编辑表单栅格 | `1~24 | 24
| editType| ```String``` | 编辑表单的类型 | 同表单 | null
| cellLabel | ```String``` | 表格列名, 当列名跟表单字段名不一样时，用于覆盖label | - | null

## Events

* [表格(SpTable)](/spelement-ui/table/#events)该有的都有

| 事件名 | 说明  | 参数
| -- | -- | -- |
| add-submit | 新增行数据提交；<br> 执行回调函数```done(true)```则关闭弹窗并刷新表格 | ```data, done```
| edit-submit | 编辑行数据提交；<br> 执行回调函数```done(true)```则关闭弹窗并刷新表格 | ```data, done```
| row-del | 删除行数据；<br>执行回调函数```done(true)```则刷新表格 | ```row, done```

## Methods

* 同[表格(SpTable)](/spelement-ui/table/#methods)



