<template>
  <div class="sp-upload-img">
    <el-input v-model="placeValue" style="margin-bottom: 10px;" placeholder="点击此处粘贴上传" @focus="addListener" @blur="removeListener"></el-input>
    <el-upload
      ref="elUpload"
      v-bind="elProps"
      :file-list="fileList"
      :disabled="disabled"
      :on-error="onUploadError"
      :on-exceed="onUploadExceed"
      :on-remove="onUploadRemove"
      :on-success="onUploadSuccess">
      <i class="el-icon-plus"></i>
    </el-upload>
    <p v-if="uploadError" class="el-form-item__error">{{ uploadError }}</p>
  </div>
</template>

<script>
export default {
  name: 'sp-upload-img',
  props: {
    value: {
      type: [String, Array],
      default: ''
    },
    elProps: {
      type: Object,
      default: function() { return {} }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadError: '',
      fileList: [],
      placeValue: '',
      lockValueWach: false
    }
  },
  watch: {
    value: function(newValue) {
      if (!this.lockValueWach) {
        this.fileList = this.getUploadFileList(newValue)
      } else {
        this.lockValueWach = false
      }
    }
  },
  created() {
    this.fileList = this.getUploadFileList(this.value)
  },
  methods: {
    onUploadSuccess(response, file) {
      const url = file.response.data.url
      let value = Array.isArray(this.value) ? this.value.join(',') : this.value
      if (value) {
        value += ',' + url
      } else {
        value = url
      }
      this.lockValueWach = true
      this.$emit('input', value)
      this.$emit('change', value)
    },
    onUploadRemove(file) {
      this.uploadError = null
      let url = file.url
      if (file.response && file.response.data) {
        // url = location.origin + file.response.data.url
        url = file.response.data.url
      }
      const rxp = new RegExp(',?' + url + ',?', 'g')
      const oldValue = Array.isArray(this.value) ? this.value.join(',') : this.value
      let value = oldValue.replace(rxp, ',')
      value = value[0] === ',' ? value.slice(1) : value[value.length - 1] === ',' ? value.substring(0, value.length - 1) : value
      this.lockValueWach = true
      
      this.$emit('input', value)
      this.$emit('change', value)
    },
    onUploadError(err, file, fileList) {
      console.log({ err, file, fileList })
      // this.uploadError = `最多上传${this.elProps.limit}张图片`
      // return function(err, file, fileList) {
      
      // }
    },
    onUploadExceed(file, fileList) {
      console.log({ file, fileList })
      this.uploadError = `最多上传${this.elProps.limit}张图片`
      // return function(file, fileList) {
      
      // }
    },
    getUploadFileList(itemValue) {
      if (typeof itemValue === 'string' && itemValue.length > 0) {
        itemValue = itemValue.split(',')
      } else if (!Array.isArray(itemValue)) {
        itemValue = []
      }
      return itemValue.filter(url => typeof url === 'string' && url.length > 0).map((url, index) => {
        return {
          name: 'img' + index,
          url
        }
      })      
    },     
    handleEvent(event) {
      switch(event.type) {
        case 'paste':
          this.onPaste(event)
          break
      }
    },
    onPaste(event) {
      const clipboardData = event.clipboardData || window.clipboardData
      // const selection = window.getSelection()
      
      const items = clipboardData.items
      const files = []
      if (items && items.length) {
        // 搜索剪切板items
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf('image') !== -1) {
            files.push(items[i].getAsFile())
          }
        }
        if (files.length > 0) {
          try {
            this.$refs.elUpload.$refs['upload-inner'].uploadFiles(files)
          } catch(e) {
            console.log(e)
          }
        } else {
          this.$message.error('粘贴内容非图片')            
        }
      } else {
        this.$message.error('当前浏览器不支持')
      }
    },
    addListener() {
      document.addEventListener('paste', this, false)        
    },
    removeListener() {
      if (this.placeValue) {
        this.placeValue = ''
      }
      document.removeEventListener('paste', this, false)
    }    
  }
}
</script>

<style>

</style>