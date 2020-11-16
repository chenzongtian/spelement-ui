<template>
  <div class="sp-tree">
    <el-input
      ref="elInput"
      class="sp-filter-bar"
      placeholder="输入关键字进行过滤"
      v-model="filterText">
    </el-input>
    <div ref="treeDrown" class="sp-tree-content">
      <el-tree
        ref="elTree"
        :data="data"
        :load="load"
        :lazy="lazy"
        :props="props"
        :node-key="nodeKey"
        :default-expand-all="defaultExpandAll"
        :expand-on-click-node="expandOnClickNode"
        :default-expanded-keys="defaultExpandedKeys"
        :filter-node-method="filterNode"
        :current-node-key="currentNodeKey"
        highlight-current
        @node-click="onNodeClick">
        <template v-if="slotAble" v-slot="scope">
          <slot v-bind="scope"></slot>
        </template>
      </el-tree>    
    </div>
  </div>
</template>
<script>
export default {
  name: 'sp-tree',
  props: {
    data: {
      type: Array,
      default: function(){ return [] }
    },
    placeholder: {
      type: String,
      default: '输入关键字进行过滤'
    },
    props: {
      type: Object,
      default: function() { return {} }
    },
    load: {
      type: Function,
      default: null
    },
    lazy: {
      type: Boolean,
      default: false
    },
    // 是否可以自定义项
    slotAble: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: true
    },
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    defaultExpandedKeys: {
      type: Array,
      default: function() { return [-1] }
    },
    currentNodeKey: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
      filterText: '',
    }
  },
  computed: {
    nodeKey: function() {
      return this.props.value || 'value'
    }
  },
  watch: {
    filterText(val) {
      this.$refs.elTree.filter(val)
    }
  },
  created() {
    // this.setData(this.options, this.value)
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      let labelAlias = 'label'
      if (this.props && this.props.label) {
        labelAlias = this.props.label
      }
      return data[labelAlias].indexOf(value) !== -1;
    },
    onNodeClick(data, node, el) {
      this.$emit('node-click', data, node, el)
    },
    updateKeyChildren(nodeCode, children) {
      this.$refs.elTree.updateKeyChildren(nodeCode, children)
    }
  }
}
</script>
<style lang="scss" scoped>
$filterBarHeight: 38px;
.sp-tree {
  position: relative;
  height: 100%;
  width: 100%;
  .sp-filter-bar {
    position:absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: $filterBarHeight;
    background: #fff;
  }
  .sp-tree-content {
    padding-top: $filterBarHeight;
    overflow: auto;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
}
</style>

