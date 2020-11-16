export default {
  props: {
    // 全局监听键盘事件的按键码
    keyupCode: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      keyupAbleFullPath: ''
    }
  },
  watch: {
    $route: function(to, form) {
      if (to.fullPath === this.keyupAbleFullPath && typeof this.keyupCode === 'number') {
        this.addKeyupEvent()
      } else if (typeof this.keyupCode === 'number') {
        this.removeKeyupEvent()
      }
    }
  },
  mounted() {
    if (typeof this.keyupCode === 'number') {
      this.addKeyupEvent()
    }
  },  
  methods: {
    handleEvent(event) {
      switch(event.type) {
        case 'keyup':
            if (event.keyCode === this.keyupCode) {
              this.onkeyUpEvent(event.keyCode)
            }
          break
        default: break
      }
    },    
    addKeyupEvent() {
      this.keyupAbleFullPath = this.$route.fullPath
      document.addEventListener('keyup', this, false)
    },
    removeKeyupEvent() {
      document.removeEventListener('keyup', this, false)
    } 
  },
  destroyed() {
    this.removeKeyupEvent()
  }    
}