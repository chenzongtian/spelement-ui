# SpTable 表格

集成表格(ElTable)以及分页(ElPagination)组件

## Attributes

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| option | ```Object``` | 组件配置属性， 详情见下面Option属性 | - | ```{}```
| data | ```Array|Function(params, resolve)``` | 表格数据，[示例说明](#props.data) | - | ```[]```
| query | ```Object``` | 传入远程接口的固定参数 | - | ```{}```
| dynamic | ```Boolean``` | 动态配置option，根据数据动态创建表格 | - | ```false```
| autoLoad | ```Boolean``` | 自动加载远程数据 | - | ```true```
| permission | ```Object``` | 按钮权限```{ delBtn, viewBtn, editBtn }```，会覆盖option | - | null

<a id="props.data">Attributes data</a>

| 类型 | 说明 |
| -- | -- |
| ```Array``` | []
| ```Function(params, resolve)``` | 获取远程数据，params是一个分页参数、固定参数合并的对象; resolve是一个回调函数接收一个对象，此对象包含属性```data```(表格数据数组)，```total```(总条数), ```option```(组件配置，适用动态创建表格的场景)

```vue
<template>
  <!-- 常规数据 -->
  <sp-table :option="tableOption" :data="list"></sp-table>
  <!-- 远程数据 -->
  <sp-table :option="tableOption" :data="getTbData"></sp-table>
  <!-- 远程数据 动态表格 -->
  <sp-table dynamic :option="tableOption" :data="getDynTbData"></sp-table>
</template>

<script>
export default {
  data() {
    return {
      tableOption: {},
      list: []
    }
  },
  method: {
    getTbData(params, resolve) {
      // 调用回调函数resolve传入表格数据
      resolve({
        data: [], // 表格数据
        total: 1 // 如果为0则不显示分页栏
      })
    },
    // 依据远程数据动态创建表格列等场景
    getDynTbData(params, resolve) {
      // 调用回调函数resolve传入表格数据
      resolve({
        data: [], // 表格数据
        total: 1, // 如果为0则不显示分页栏
        option: {} // 会替换tableOption
      })
    }
  }
}
</script>
```

## Attributes.Option

ElTable该有的都有

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| column | ```Array``` | 列配置项，详情见下面Option.Column属性 | - | ```[]```
| showRowAction | ```Boolean``` | 显示操作列 | ```false|true``` | ```false```
| rowActionWidth | ```Boolean``` | 显示操作列 | ```false|true``` | ```false```
| delBtn | ```Boolean``` | 行删除按钮 | ```false|true``` | ```false```
| editBtn | ```Boolean``` | 行编辑 | ```false|true``` | ```false```
| viewBtn | ```Boolean``` | 行查看 | ```false|true``` | ```false```
| rowEditDisabled | ```Function``` | 行编辑按钮禁用校验方法，方法接收唯一参数行数据，返回boolean值 | - | -
| rowDelDisabled | ```Function``` | 行删除按钮禁用校验方法，方法接收唯一参数行数据，返回boolean值 | - | -
| rowViewDisabled | ```Function``` | 行查看按钮禁用校验方法，方法接收唯一参数行数据，返回boolean值 | - | -

## Option.Column

ElTableColumn该有的都有

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| label | ```String``` | 列名 | - | null
| prop | ```String``` | 数据字段 | - | null
| type | ```String``` | 类型 | 见Column.type | null
| options | ```[Array, Function, Object]``` | 数据选项配置 | 同表单[数据选项](/spelement-ui/form/#options) | null
| format | ```Function(value){}``` | 返回格式化后的数据 | - | null
| hide | ```Boolean``` | 为true则不显示该列 | - | null

## Column.type
> 可归为三类，1、需要显示源数据的，2、需要依据options翻译的，3、需要自定义的

| 取值 | 说明
| -- | -- |
| input | 输入框 
| select、checkbox、checkbox| 下拉框，会依据options匹配value值相同项，显示其label
| slot |  自定义 

```vue
<template>
  <sp-table :option="tableOption">
    <template v-slot:channel="scope">
      <el-tag type="success">{{ scope.row.channel }}</el-tag>
    </template>
  </sp-table>
</template>

<script>
export default {
  data() {
    return {
      tableOption: {
        column: [
          {
            label: '自定义',
            prop: 'channel',
            type: 'slot'
          }         
        ]
      }
    }
  }
}
</script>
```

## Events

| 事件名 | 说明  | 参数
| -- | -- | -- |
| row-view | 点击行"查看" | ```(row, index)```
| row-edit | 点击行"编辑" | ```(row, index)```
| row-del | 点击行"删除" | ```(row, index)```
| selection-changel | 同ElTable | 同ElTable
| row-click | 同ElTable | 同ElTable
| row-dblclick | 同ElTable | 同ElTable

## Methods

| 方法名 | 说明 | 参数
| -- | -- | -- |
| resetTableData | 传入params重置固定参数请求远程数据；<br> 通常用于改变固定参数或者重新请求第一页的数据 | params
| refreshTableData | 刷新当前数据；<br>如果是删除数据之后刷新，为了重新计算分页，isDelRow为true | isDelRow
| toggleRowSelection | 同ElTable | 同ElTable


