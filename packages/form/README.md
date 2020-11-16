# SpForm 表单

集成表格(ElForm)

## Attributes

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| option | ```Object``` | 组件配置属性， 详情见下面Option属性 | - | ```{}```
| data | ```Object``` | 表单数据 | - | ```{}```
| type | ```String``` | 表单的形式；<br>form（正常的提交表单）;<br>search（搜索表单）;<br>view（查看表单，表单项全部禁用）;<br>unhandle（不显示操作按钮） | ```form|search|view|unhandle``` | ```form```


## Attributes.Option

ElForm组件有的都有

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| column | ```Array``` | 表单项配置，详情见下面Option.Column属性 | - | ```[]```


## Option.Column

> 绝大多数属性跟spForm和spTable组件的一样，这里只列出不一样的

| 参数 | 类型 | 说明 | 可选值 | 默认
| -- | -- | -- | -- | -- |
| label | ```String``` | 列名 | - | null
| prop | ```String``` | 数据字段 | - | null
| type | ```String``` | 类型 | 见Column.type | null
| options | ```[Array, Function, Object]``` | 数据选项配置, 详见[数据选项](#options) | - | null
| asyncValue | ```[Function, Object]``` | 动态值, 详见[同步动态监听](#watchObj) | - | null
| disabled | ```[Boolean, Function, Object]``` | 是否禁用, 详见[同步动态监听](#watchObj) | - | false
| display | ```[Boolean, Function, Object]``` | 是否隐藏, 详见[同步动态监听](#watchObj) | - | true
| rules | ```[Array, Object]``` | 表单验证, 详见[表单验证](#rules) | - | null
| defaultValue | ```[String, Number]``` | 默认值| - | null
| defaultSelectIndex | ```Number``` | 下拉框、复选框、单选框等默认选项下标 | - | null
| startValueProp | ```String``` | 开始值的字段，当日期范围需要拆分两个字段时有用 | - | null
| endValueProp | ```String``` | 结束值的字段，当日期范围需要拆分两个字段时有用 | - | null

## Column.type

同ElementUi各种表单项该有的都有

| 取值 | 说明
| -- | -- |
| upload | 上传 
| uploadimg | 上传图片 
| sptextarea | 多行输入，转成逗号隔开的值
| treeselect | 下拉树形
| slot |  自定义 

```vue
<template>
  <sp-form :option="tableOption" :data="form">
    <template v-slot:channel="scope">
      <el-tag type="success">{{ scope.row.channel }}</el-tag>
    </template>
  </sp-form>
</template>

<script>
export default {
  data() {
    return {
      form: {},
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
| submit | 提交或搜索 | ```(data)```
| change | 表单值改变 | ```(prop, value, option)```
| cancel | 取消 | ```(data)```

## Methods

| 方法名 | 说明 | 参数
| -- | -- | -- |
| getFormData | 获取表单值，isSubmit为true，则获取等同提交表单的数据，否则获取的是初始化传入的数据 | isSubmit
| setFormData | 获取表单值，isAssign为true，则会合并当前表单值，否则data没有的字段值为空 | (data, isAssign)
| validate | 校验表单；同ElForm的validate | callback

## 同步动态监听
<a id="watchObj"></a>

* 当某个字段的值根据其他一个或多个字段值变化而变化
* 当某个字段的值根据整个表单的初始化数据计算而得
* 当某个字段的禁用状态根据其他一个或多个字段值变化而变化
* 当某个字段的禁用状态根据整个表单的初始化数据计算而得
* 当某个字段的显隐状态根据其他一个或多个字段值变化而变化
* 当某个字段的显隐状态值根据整个表单的初始化数据计算而得

```js

export const option = {
  column: [
    {
      lalel: '唯一标示',
      prop: 'id',
      type: 'input'
    },
    // 初始化调用一次
    {
      label: '名称',
      prop: 'name',
      type: 'input',
      asyncValue: function(form) {
        return form.id === 1 ? '1' : '2'
      },
      display: function(form) {
        return !form.id === true
      },
      disabled: function(form) {
        return !form.id === false
      }
    },
    // 监听id字段，当该id的值变化都会调用method
    {
      label: '名称',
      prop: 'name',
      type: 'input',
      asyncValue: {
        watch: ['id'],
        method: function(form, prop, watchValue) {
          // prop为null是在初始化的时候
          return form.id === 1 ? '1' : '2'
        }
      },
      display: {
        watch: ['id'],
        method: function(form, prop, watchValue) {
          return !form.id === true
        }
      },
      disabled: {
        watch: ['id'],
        method: function(form, prop, watchValue) {
          // prop为null是在初始化的时候
          return !form.id === false
        }
      }
    }
  ]
}

```

## 数据选项
<a id="options"></a>
 select、radio、checkbox的选项数据, 除了远程搜索，一律是通过配置options;
 <br>options可以是数组或返回Promise对象的方法或一个监听对象；
 <br>不管哪一种，最终通过计算得到的数组元素结构为```{ value, label }```

### 基本示例

```js
export const option = {
  column: [
    {
      label: '是否',
      prop: 'yesnoe',
      type: 'select',
      options: [
        {
          label: '是',
          value: '1'
        },
        {
          label: '否',
          value: '0'
        }
      ]
    }
  ]
}
```

### 远程数据示例

* 数据项需要通过服务接口获取
* 数据项需要结合其他表单值来获取

```js
export const option = {
  column: [
    {
      label: '是否',
      prop: 'yesnoe',
      type: 'select',
      options: function(form) {
        return new Promise(resolve => {
          let options = []
          //执行获取选项数据的代码
          resolve(options)
        }).catch(e => {
          resolve([])
        })
      }
    }
  ]
}
```

### 远程搜索数据示例

* 结合其他数据值搜索数据选项

```js
export const option = {
  column: [
    {
      label: '组合品商家编码',
      prop: 'businessCode',
      type: 'select',
      // 以下两个字段可以不用
      //remote: true,
      //filterable: true
      remoteMethod: function(value, form) {
        /**
         * 这里对比Element的配置多了个form参数
         * form是整个表单的数据或表格行数据
         */        
        if (!form || !form.shopCode) { return Promise.resolve([]) }
        return new Promise(resolve => {
          let options = []
          //执行获取选项数据的代码
          resolve(options)
        }).catch(e => {
          resolve([])
        })
      }
    }
  ]
}
```

### 联动数据示例

* 省、市、区等级联
* 数据选项依据某个数据值的不同而不同

```js
export const option = {
  column: [
    {
      label: '省',
      prop: 'province',
      type: 'select',
      options: function() {
        return new Promise(resolve => {
          let options = []
          //执行获取选项数据的代码
          resolve(options)
        }).catch(e => {
          resolve([])
        })
      }
    },
    {
      label: '市',
      prop: 'city',
      type: 'select',
      options: {
        watch: ['province'],
        // watch里的字段值变化，则会执行method
        method: function(form, prop, watchValue) {
          /**
           * 如果在表单中，form是整个表单的数据，
           * 如果在表格中，form是prop所属行的数据
           * prop是值变化的字段名
           * watchValue 监听的字段所包含的数据
           */
          return new Promise(resolve => {
            let options = []
            //执行获取选项数据的代码
            resolve(options)
          }).catch(e => {
            resolve([])
          })
        }
      }
    },
    {
      label: '区',
      prop: 'area',
      type: 'select',
      options: {
        watch: ['province', 'city'],
        // watch里的字段值变化，则会执行method
        method: function(form, prop, watchValue) {
          /**
           * 如果在表单中，form是整个表单的数据，
           * 如果在表格中，form是prop所属行的数据
           * prop是值变化的字段名
           * watchValue 监听的字段所包含的数据
           */
          if (prop === 'province' || !form.city) {
            return Promise.resolve([])
          } else {
            return new Promise(resolve => {
              let options = []
              //执行获取选项数据的代码
              resolve(options)
            }).catch(e => {
              resolve([])
            })
          }
        }
      }
    }
  ]
}
```

## 表单验证
<a id="rules"></a>
同Element文档中描述的一样，不同的是对自定义函数进行了扩展

### 自定义验证函数封装

很多时候，验证会依赖其他值，所以对自定义验证函数封装，使其能获取整个表单的数据值，自定义验证函数多了两个参数```data```、```sourceData```；其中```data```是修改之后的表单数据，```sourceData```是修改之前的表单源数据

```js
const validatorStartNum = (rule, value, callback, data, sourceData) => {
  if (Number(value) < Number(data.useNum)) {
    callback(new Error('起始数量不能小于已使用数量'))
  } else {
    callback()
  }  
}
export const option = {
  column: [
    {
      label: '起始数量',
      prop: 'startNum',
      type: 'input'
      rules: [
        { required: true, message: '请输入起始数量', trigger: 'blur' },
        { validator: validatorStartNum, trigger: 'blur' }
      ]
    }
  ]
}
```

* 动态增减项中的自定义验证函数

```js
import { isEmpty, isMoneyNum } from '@/util/validate'
const validateStrikePrice = (rule, value, callback, data, sourceData) => {
  const index = rule.field.split('.')[1] // 获取表格中的行号
  const rowData = data[Number(index)]
  if (isEmpty(value) && !isEmpty(rowData.businessCode)) {
    callback(new Error('请输入到手价'))
  } else if (!isMoneyNum(value) && !isEmpty(rowData.businessCode)) {
    callback(new Error('请输入最多保留两位小数的数字'))
  } else {
    callback()
  }
}
export const option = {
  column: [
    {
      label: '到手价',
      prop: 'strikePrice',
      type: 'input',
      rules: [
        { validator: validateStrikePrice, trigger: 'blur' }
      ]        
    }
  ]
}
```



