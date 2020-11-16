<template>
  <div class="sp-textarea">
    <div class="sp-fouce sp-copy-el-input el-input--mini" @click="showTextarea">
      <p class="el-input__inner" v-if="value && value.length > 0">{{ value }}</p>
      <p class="el-input__inner placeholder" v-else>{{ placeholder }}</p>
    </div>
    <div ref="textareaPanel" class="sp-textarea-layout">
      <el-input
        type="textarea"
        :placeholder="placeholder"
        @blur="onBlur"
        :rows="10"
        v-model="content">
      </el-input>
    </div>
  </div>
</template>

<script>
import { isNull } from '../../util/util';
export default {
  name: 'sp-textarea',
  props: {
    value: {
      type: [String, Number],
      default: '',     
    }, 
    placeholder: {
      type: [String, Number],
      default: '',       
    }  
  },
  data() {
    return {
      content: '',
      oldValue: '',
      blur: true,
      inputDom: null,
      textareaPanel: null
    }
  },
  watch: {
    value: function(newValue) {
      this.setValue(newValue)
    }
  },
  created() {
    this.setValue(this.value)
  },
  methods: {
    setValue(value) {
      if (value !== this.oldValue) {
        this.content = value.replace(/,/g, '\n')
        this.oldValue = value  
      }
    },
    onBlur(e) {
      // this.blur = true
      let { value } = e.target
      if (value) {
        value = value.split(/\n/).filter(item => item.length > 0).join(',')
      }
      if (value !== this.oldValue) {
        this.oldValue = value
        this.$emit('change', value)
      }      
      this.$emit('input', value)
      this.toggleTextarea(false)
    },
    showTextarea() {
      this.toggleTextarea(true)
    },
    hideTextarea() {
      this.toggleTextarea(false)
    },    
    toggleTextarea(show) {
      if (isNull(this.textareaPanel)) {
        const textareaPanel = this.$refs.textareaPanel
        this.inputDom = this.$el.querySelector('.sp-fouce')
        const rect = this.inputDom.getBoundingClientRect()
        textareaPanel.style.top = rect.y + 'px'
        textareaPanel.style.left = rect.x + 'px'
        textareaPanel.style.width = rect.width + 'px'
        this.textareaPanel = textareaPanel
        document.body.append(this.textareaPanel)
      }
      this.textareaPanel.style.display = show ? 'block' : 'none'
      if(show) {
        this.textareaPanel.querySelector('textarea').focus()
      }
    }, 
    destroyed() {
      if (!isNull(this.textareaPanel)) {
        this.textareaPanel.remove()
      }
    }           
  }
}
</script>

<style>

</style>