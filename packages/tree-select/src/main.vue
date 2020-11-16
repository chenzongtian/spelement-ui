<template>
  <div class="sp-tree-select">
    <el-input
      ref="input"
      placeholder="输入关键字进行过滤"
      @focus="onTaggleTree(true)"
      v-model="filterText">
    </el-input>
    <div ref="treeDrown" class="sp-tree-select-drown">
      <el-tree
        :data="options"
        :props="defaultProps"
        default-expand-all
        :filter-node-method="filterNode"
        ref="tree"
        @node-click="onNodeClick">
      </el-tree>    
    </div>
  </div>
</template>
<script>
import { isNull, getLabelWithOptions } from '../../util/util';
export default {
  name: 'sp-tree-select',
  props: {
    value: {
      type: [String, Number],
      default: '',     
    },
    options: {
      type: Array,
      default: function(){ return [] }
    },
    placeholder: {
      type: String,
      default: '输入关键字进行过滤'
    },
    defaultProps: {
      type: Object,
      default: function(){ return {label: 'label', value: 'value'} }
    }
  },
  data() {
    return {
      inputDom: null,
      drownDom: null,
      filterText: '',
      oldValue: '',
      selectedData: null,
      filterEnble: true,
      hadShowSelectDrown: false
    }
  },
  watch: {
    filterText(val) {
      if (this.filterEnble) {
        this.$refs.tree.filter(val)
      } else {
        this.filterEnble = true
      }
    },
    value(val) {
      this.hadShowSelectDrown = false
      this.filterEnble = false
      this.setData(this.options, val)
    },
    options(newOptions) {
      this.hadShowSelectDrown = false
      this.filterEnble = false
      this.setData(newOptions, this.value)
    }
  },
  created() {
    this.setData(this.options, this.value)
  },
  methods: {
    setData(options, value) {
      this.filterText = getLabelWithOptions(options, value)
      this.oldValue = value
      this.selectedData = {
        label: this.filterText,
        value: value
      }
    },
    onTaggleTree(show) {
      if (!show) {
        setTimeout(() => {
          if (!isNull(this.selectedData) && this.filterText !== this.selectedData.label) {
            this.filterEnble = false
            this.filterText = this.selectedData.label
            this.$refs.tree.filter('')
          } else if (isNull(this.selectedData) && this.filterText) {
            this.filterText = ''
          }
          this.showSelectDrown(false)
        }, 320)
      } else {
        this.hadShowSelectDrown = true
        this.showSelectDrown(true)
        document.addEventListener('click', this, false)
      }
    },
    showSelectDrown(show) {
      if (isNull(this.drownDom)) {
        const treeDrownDom = this.$refs.treeDrown
        this.inputDom = this.$refs.input.$el
        const rect = this.inputDom.getBoundingClientRect()
        treeDrownDom.style.top = rect.y + rect.height + 5 + 'px'
        treeDrownDom.style.left = rect.x + 'px'
        treeDrownDom.style.width = rect.width + 'px'
        this.drownDom = treeDrownDom
        document.body.append(this.drownDom)        
      }
      this.drownDom.style.display = show ? 'block' : 'none'
    },
    filterNode(value, data) {
      if (!value || !this.hadShowSelectDrown) return true;
      return data.label.indexOf(value) !== -1;
    },
    onNodeClick(data) {
      this.onTaggleTree(false)
      document.removeEventListener('click', this, false)
      this.selectedData = data
      this.filterEnble = false
      this.filterText = data.label
      if (data.value !== this.oldValue) {
        this.$emit('change', data.value)
      }
      this.$emit('input', data.value)
    },
    handleEvent(event) {
      
      switch(event.type) {
        case 'click':
          this.onClick(event)
          break
        default: break
      }
    },
    onClick(event) {
      
      if (this.drownDom && !this.drownDom.contains(event.target) && !this.inputDom.contains(event.target)) {
        this.onTaggleTree(false)
        document.removeEventListener('click', this, false)
      }
    }  
  },
  destroyed() {
    if (!isNull(this.drownDom)) {
      this.drownDom.remove()
    }
    document.removeEventListener('click', this, false)
  }
}
</script>
<style lang="scss" scoped>
</style>

