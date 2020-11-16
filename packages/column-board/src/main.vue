
<template>
  <div>
    <el-container style="border:1px solid #ccc; padding: 5px;">
      <el-table
        ref="eltable"
        v-if="showTable"
        :data="defColumnData"
        :max-height="maxHeight"
        border
        style="width: 100%">
        <el-table-column
          align="center"
          prop="sort"
          width="76"
          label="排序">
          <template slot-scope="scope">
            <div class="el-input el-input--mini">
              <input class="el-input__inner" :value="scope.$index + 1" placeholder="输入正整数" @keydown.enter="onSortBlur($event, scope.$index)" @blur="onSortBlur($event, scope.$index)" />
            </div>
          </template>          
        </el-table-column>
        <el-table-column
          prop="label"
          align="center"
          label="字段名称">
        </el-table-column>
        <el-table-column
          prop="showAble"
          align="center"
          width="80"
          label="是否显示">
          <template slot-scope="scope">
            <el-switch v-model="defColumnData[scope.$index].showAble"></el-switch>
          </template>          
        </el-table-column>
        <el-table-column
          prop="width"
          align="center"
          label="列宽">
          <template slot-scope="scope">
            <el-input v-model="defColumnData[scope.$index].width" placeholder="输入正数"></el-input>
          </template>
        </el-table-column>
        <el-table-column
          prop="width"
          align="center"
          label="固定位置">
          <template slot-scope="scope">
            <el-select v-model="defColumnData[scope.$index].fixed" placeholder="固定位置">
              <el-option label="不固定" value="0"></el-option>
              <el-option label="固定左侧" value="left"></el-option>
              <el-option label="固定右侧" value="right"></el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column
          prop="handle"
          align="center"
          width="80"
          label="操作">
          <template slot-scope="scope">
              <el-button type="text" icon="el-icon-thumb" @mousedown.native="onSortMouseDown($event, scope.$index)">拖动</el-button>
          </template>          
        </el-table-column>
      </el-table>
    </el-container>
    <div class="lay-bottom">
      <div class="btn-bar">
        <el-button
          type="primary"
          class="inner-btn"
          icon="el-icon-refresh-right"
          @click="onReset">恢复默认</el-button>          
        <el-button type="primary" @click="onSubmit" icon="el-icon-check">确认</el-button>
        <el-button @click="onClose" icon="el-icon-close">取消</el-button>
      </div>
    </div>     
  </div>
</template>

<script>
import { debounce } from '../../util/decorator'
import { getClientInfo } from '../../util/client.js'
import { toNumber } from '../../util/util.js'
export default {
  name: 'sp-column-board',
  props: {
    columnData: {
      type: Array,
      default: function() { return [] }
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showTable: false,
      defColumnData: [],
      rowTrs: null, // 本体表格的tr标签
      haveSetTbMaxHeight: false,
      maxHeight: 400,
      drag: {
        tableBody: null,
        rect: {},
        target: null,
        targetTrCount: 0,
        cellHeight: 0,
        startMouseY: 0,
        moveMouseY: 0,
        formIndex: 0,
        spaceTr: null,
        spaceTrIndex: -1,
        toIndex: 0
      }
    }
  },
  watch: {
    columnData: function(newData) {
      this.defColumnData = this.markDefColumnData(newData)
    },
    visible: function(newValue) {
      this.showTable = newValue
      if (newValue) {
        this.$nextTick(() => {
          this.setTableSize()
        })
      }
    }
  },
  created() {
    this.defColumnData = this.markDefColumnData(this.columnData)
  },
  mounted() {
    this.setTableSize(true)
  },
  methods: {
    markDefColumnData(columnData = []) {
      const data = Array.isArray(columnData) ? columnData : []
      return data.map((item, index) => {
        let width = toNumber(item.width)
        width = !width || width <= 0 ? null : width
        return {
          id: item.id ? item.id : index + 1,
          width,
          label: item.label,
          prop: item.prop,
          showAble: item.hide === true ? false : true,
          sort: index + 1,
          fixed: item.fixed !== 'left' && item.fixed !== 'right' ? '0' : item.fixed,
          defSort: isNaN(item.defSort) ? index + 1 : item.defSort
        }
      })
    },
    onClose() {
      this.$emit('update:visible', false)
    },
    //确认
    onSubmit() {
      const column = this.defColumnData.map((item, index) => {
        return {
          prop: item.prop,
          hide: !item.showAble,
          fixed: item.fixed === '0' ? null : item.fixed,
          width: isNaN(item.width) || Number(item.width) <= 0 ? null : Number(item.width),
          sort: index
        }
      })
      this.$emit('submit', column)
    },
    //移动
    rowMove(scope, num) {
      const row = scope.row
      const formIndex = scope.$index
      const toIndex = num ? formIndex + num : row.defSort
      this.move(formIndex, toIndex)
    },
    move(formIndex, toIndex) {
      if (toIndex === formIndex) { return }
      if (toIndex < 0) {
        this.$message({
          message: '已经是列表中第一行,不可上移！',
          type: 'warning'
        })
      } else if (toIndex >= this.defColumnData.length) {
        this.$message({
          message: '已经是列表中最后一行,不可下移！',
          type: 'warning'
        })
      } else {
        const targetRow = this.defColumnData[formIndex]
        if (targetRow) {
          this.defColumnData.splice(formIndex, 1)
          this.defColumnData.splice(toIndex, 0, targetRow)
        }
      }       
    },
    onReset() {
      this.defColumnData = this.markDefColumnData(this.columnData)
    },
    onSortBlur(event, formIndex) {
      const value = event.target.value
      if (isNaN(value)) { return }
      const toIndex = value - 1
      // const formIndex = row.sort - 1
      this.move(formIndex, toIndex)
    },
    handleEvent(event) {
      switch(event.type) {
        case 'mousemove':
          this.onSortMouseMove(event)
          break
        case 'mouseup':
          this.onSortMouseUp()
          break
      }
    },
    onSortMouseMove(event) {
      this.drag.moveMouseY = event.clientY
      const distY = this.drag.moveMouseY - this.drag.startMouseY // 偏移量
      const top = this.drag.targetY + distY // 现在的位置
      let toIndex = Math.round((top - this.drag.rect.top) / this.drag.cellHeight)
      // if (toIndex < 0 || toIndex > this.drag.targetTrCount) { return }
      toIndex = toIndex < 0 ? 0 : toIndex > this.drag.targetTrCount - 1 ? this.drag.targetTrCount - 1 : toIndex
      if (toIndex !== this.drag.toIndex) {
        this.setSpaceTr(toIndex)
        this.drag.toIndex = toIndex
      }
      this.drag.target.style.top = top + 'px'
    },
    onSortMouseUp() {
      document.removeEventListener('mousemove', this, false)
      document.removeEventListener('mouseup', this, false)
      if (this.drag.target) {
        this.drag.target.remove()
        this.drag.target = null
      }
      // 把影子标签扶正
      if (this.drag.spaceTr) {
        this.drag.spaceTr.style.opacity = '1'
      }
      this.showTable = false
      this.move(this.drag.formIndex, this.drag.toIndex)
      this.$nextTick(() => {
        this.showTable = true
      })
    },
    // 为保持拖动的tr标签样式一致，所以复制整个表格而不是一个tr标签
    getMoveTarget() {
        const parent = this.drag.tableBody.parentElement
        const gparent = parent.parentElement
        const rect = this.drag.tableBody.getBoundingClientRect()
        const cloneTableBody = this.drag.tableBody.cloneNode(true)
        const target = document.createElement('div');
        const tableBodyWrap = document.createElement('div')
        tableBodyWrap.className = gparent.className
        const tableBodyParent = document.createElement('div')
        tableBodyParent.className = parent.className
        target.style.opacity = '0.6'
        target.style.position = 'fixed'
        target.style.zIndex = '3000'
        target.style.backgroundColor = '#fff'
        target.style.width = rect.width + 'px'
        target.style.top = rect.top + 'px'
        target.style.left = rect.left + 'px'
        tableBodyParent.append(cloneTableBody)
        tableBodyWrap.append(tableBodyParent)
        target.append(tableBodyWrap)
        this.drag.rect = rect
        return target
        // document.body.append(tableBodyWrap)
    },
    // 设置影子标签的位置
    setSpaceTr: debounce(function (toIndex) {
      if (this.rowTrs) {
        if (toIndex === 0) {
          this.rowTrs[0].before(this.drag.spaceTr)
        } if (toIndex === this.rowTrs.length - 1) {
          this.rowTrs[this.rowTrs.length - 1].after(this.drag.spaceTr)
        } else if (this.rowTrs[toIndex - 1])  {
          if (toIndex - 1 === this.drag.spaceTrIndex) {
            this.rowTrs[toIndex].after(this.drag.spaceTr)
          } else {
            this.rowTrs[toIndex - 1].after(this.drag.spaceTr)
          }
        } else if (this.rowTrs[toIndex + 1]) {
          if (toIndex + 1 === this.drag.spaceTrIndex) {
            this.rowTrs[toIndex].before(this.drag.spaceTr)
          } else {
            this.rowTrs[toIndex + 1].before(this.drag.spaceTr)
          }
        }
        this.drag.spaceTrIndex = toIndex
      }
    }),
    onSortMouseDown($event, index) {
      this.drag.formIndex = index
      this.drag.startMouseY = $event.clientY
      const el = this.$refs.eltable.$el
      const tableBodys = el.getElementsByClassName('el-table__body')
      
      if (tableBodys.length > 0) {
        this.drag.tableBody = tableBodys[0]
      }      
      if (this.drag.tableBody) {
        // 复制整个表格
        this.drag.target = this.getMoveTarget()
        this.rowTrs = this.drag.tableBody.getElementsByClassName('el-table__row') // 本体表格里面的所有tr标签元素
        document.body.append(this.drag.target)
      }
      if (this.drag.target) {
        const rowTrs = this.drag.target.getElementsByClassName('el-table__row')
        // 障眼法，隐藏其他不可拖动的tr标签
        if (rowTrs && rowTrs.length > 0) {
          for(let i = 0; i < rowTrs.length; i++) {
            if (i !== index) {
              rowTrs[i].style.display = 'none'
            }
          }
        }
        this.drag.targetTrCount = rowTrs.length
        this.drag.cellHeight = this.drag.rect.height / rowTrs.length // 每个tr标签元素的高度
        this.drag.targetY = this.drag.rect.top + this.drag.cellHeight * index // 当前拖动的tr标签位置
        this.drag.target.style.top = this.drag.targetY + 'px'
        this.drag.target.style.display = 'block'
        this.drag.formIndex = index
        this.drag.toIndex = null
        // 在本体表格里变化出当前拖动的tr标签的影子标签
        this.drag.spaceTr = this.rowTrs[index]
        this.drag.spaceTr.style.opacity = '0.4'
        this.setSpaceTr(index)
      }
      document.addEventListener('mousemove', this, false)
      document.addEventListener('mouseup', this, false)
     },
    // 计算表格高度 isDoLayout为true,强制重新计算高度
    setTableSize(isDoLayout) {
      let maxHeight
      if (isDoLayout || !this.haveSetTbMaxHeight) {
        const minHeight = 300
        const { clientHeight } = getClientInfo()
        const $table = this.$el
        const $tableBody = $table.querySelector('.el-container')
        const { top } = $tableBody.getBoundingClientRect()
        const bodyMaxHeight = clientHeight - top - 160 // 分页栏高度(52)
        this.maxHeight = bodyMaxHeight < minHeight ? minHeight : bodyMaxHeight
        this.haveSetTbMaxHeight = true
      } else if (maxHeight) {
        this.maxHeight = maxHeight
      }
      if (isDoLayout) {
        this.showTable = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.mtip {
  /deep/ [class^="el-icon-"] {
    color: #f60;
  }
}
.lay-bottom {
  text-align: right;
  padding-top: 10px;
}
</style>.
