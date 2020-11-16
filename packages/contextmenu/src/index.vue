<template>
  <div class="sp-contextmenu">
    <div @contextmenu="onContextmenu">
      <slot></slot>
    </div>
    <ul class="sp-contextmenu-menu" :style="contextmenuStyle">
      <li 
        v-for="(menu, index) in menus"
        :key="index"
        class="sp-contextmenu-item"
        @click="onSelectMenu(menu.name)">
        <i v-if="menu.iconClass" :class="menu.iconClass"></i>
        <span class="sp-contextmenu-name">{{menu.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sp-contextmenu',
  props: {
    menus: {
      type: Array,
      default: function() {
        return [
          {
            iconClass: 'el-icon-delete',
            name: '删除'
          }
        ]
      }
    },
    taregtSelectors: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      contextmenuStyle: {},
      triggerClassName: 'sp-contextmenu-trigger',
      selectTarget: null
    }
  },
  destroyed() {
    this.hideContextmenu()
  },
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'click':
          this.onClick(event)
          break
        default: break
      }
    },       
    onContextmenu(event) {
      event.preventDefault()
      event.stopPropagation()
      this.selectTarget =  this.getSelectorTarget(event)
      if (this.selectTarget) {
        this.selectTarget.className = this.selectTarget.className + ' ' + this.triggerClassName
        this.contextmenuStyle = {
          display: 'block',
          top: event.clientY - 20 + 'px',
          left: event.clientX - 5 + 'px'
        }
        document.addEventListener('click', this)
      }
    },
    onClick(event) {
      const contextmenu = this.$el.querySelector('.sp-contextmenu-menu')
      if (!contextmenu.contains(event.target)) {
        this.hideContextmenu()
      }
    },
    hideContextmenu() {
      this.contextmenuStyle = {
        display: 'none'
      }
      if (this.selectTarget) {
        this.selectTarget.className = this.selectTarget.className.replace(' ' + this.triggerClassName, '')
      }
      document.removeEventListener('click', this)
    },
    onSelectMenu(name) {
      this.hideContextmenu()
      this.$emit('select', name, this.selectTarget)
    },
    getSelectorTarget(event) {
      if (!this.taregtSelectors) { return event.target }
      const selectors = this.$el.querySelectorAll(this.taregtSelectors)
      if (selectors) {
        for(let i = 0; i < selectors.length; i ++) {
          if (selectors[i].contains(event.target)) {
            return selectors[i]
          }
        }
      }
      return null
    }
  }
}
</script>

<style lang="scss" scope>
.sp-contextmenu-menu {
  display: none;
  position: fixed;
  min-width: 120px;
  z-index: 99;
  border-radius: 5px;
  background:whitesmoke;
  list-style: none;
  padding: 5px 0;
  box-shadow: 2px 2px 10px 1px rgba(0,0,0,0.2);
  .sp-contextmenu-item {
    cursor: pointer;
    font-size: 12px;
    height: 32px;
    line-height: 32px;
    padding: 0 20px;
    &:hover {
      background: #18274B;
      color: #fff;
    }
  }
}
</style>