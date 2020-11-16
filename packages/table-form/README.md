# SpTableForm和SpFormDynamic

## Attributes

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| option | ```Object``` | 组件配置属性， 详情见下面Option属性 | - | ```{}```
| data | ```Array``` | 源数据 | - | ```[]```
| rowKey | ```Number|String``` | 行的唯一标示;<br>通常用于判断删除的数据是源数据还是新增的数据 | - | id
| removeMethod | ```Funciton(row, done){}``` | 删除方法，```row```为准备删除的行数据, ```done(true)```确认删除 | - | ```Funciton(row, done){}```
| saveMethod | ```Funciton(row){}``` | 保存方法，```row```为保存的行数据 | - | ```Funciton(row){}```

## Option Attributes

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| column | ```Array``` | 列配置项，详情见下面[Column Attributes](#column) | - | ```[{...}]```
| removeBtn | ```Boolean``` | 是否可移除行，如果传入removeMethod，则默认为```true``` | ```false|true``` | ```true```
| addBtn | ```Boolean``` | 是否可添加行 | ```false|true``` | ```true```
| cloneBtn | ```Boolean``` | 是否可复制行 | ```false|true``` | ```false```
| saveBtn | ```Boolean``` | 是否可保存行，如果传入saveMethod，则必为```true``` | ```false|true``` | ```false```

## Column Attributes

绝大多数属性跟spForm和spTable组件的一样，这里只列出不一样的

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| type | ```String``` | 类型，跟spForm和spTable组件不太一样，目前其可选值比较少，后续扩展 | ```input|select|trigger``` | input
| tableEdit | ```Boolean``` | 是否可编辑 | ```true/false``` | ```true```
| valueClone | ```Boolean``` | 添加和复制操作时，值是否可复制，展现正常文本 | ```true/false``` | ```false```
| required | ```Boolean``` | 是否必填(不涉及表单验证)，getData方法只会返回满足必填项的行数据 | ```true/false``` | ```false```
| disabled | ```Boolean|Function(row，tableData){}``` | 可以是个函数，动态设置表单项是否禁用，只会在初始化之后调用一次 | ```true/false``` | ```false```

## Events

| 事件名 | 说明  | 参数
| -- | -- | -- |
| on-trigger | type为trigger触发的事件 | ```row, column, index```

## Methods

| 方法名 | 说明 | 参数 | 返回值
| -- | -- | -- | -- |
| getData | 获取全部行数据；<br>如果存在一个required为true的字段且该字段没有值，则忽略该行;<br>isValidate为true则校验每行数据 | ```isValidate``` | ```[]```
| setData | 设置全部行数据 | ```data``` | -
| addData | 添加一行数据 | ```row``` | -
| resetRowData | 覆盖行数据 | ```row,index``` | -
| getRemoveRows | 获取删除的源数据，源数据是有rowKey这个字段 | - | ```[]```


