<template>
  <div class="upload-wrap" :class="{'uploaded': fileUrl.length > 0}" style="display:inline-block">
    <el-image
      v-if="fileUrl"
      ref="elImage"
      style="width: 160px; height: 160px"
      class="el-image"
      :src="fileUrl" 
      fit="contain"
      :preview-src-list="[fileUrl]">
    </el-image>
    <div class="mask">
      <!-- <i v-if="fileUrl" class="el-icon-delete" @click="onDelete"></i>
      <i v-if="fileUrl" class="el-icon-view" @click="onView"></i> -->
      <el-button type="text" v-if="fileUrl" icon="el-icon-delete" @click="onDelete">删除</el-button>
      <el-button class="mask-btn" type="text" v-if="fileUrl" icon="el-icon-view" @click="onView">预览</el-button>      
      <el-upload
        ref="upload"
        class="el-upload"
        :show-file-list="showFileList"
        :action="action"
        :headers="headers"
        :limit="limit"
        :disabled="disabled"
        :accept="accept"
        :on-success="onSuccess"
        :on-error="onError"
        :on-remove="onRemove"
        :before-upload="onBeforeUpload"
        :auto-upload="autoUpload">
        <el-button type="text" icon="el-icon-upload">上传</el-button>
        <!-- <i class="el-icon-upload"></i> -->
      </el-upload>
    </div>
    <!--<el-button type="primary" class="tips" v-if="uploading || disabledText" icon="el-icon-loading">{{disabledText || loadingText}}</el-button>-->
  </div>
</template>
<script>
export default {
  name: 'sp-upload',
  props: {
    action: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: 1
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      // default: '.csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel'
      default: 'image/png, image/jpeg'  
    },
    showFileList: {
      type: Boolean,
      default: false
    },
    maxSize: {
      type: [String, Number],
      default: '3M'
    },
    loadingText: {
      type: String,
      default: '上传中...'
    },
    disabledText: {
      type: String,
      default: ''      
    }
  },
  data() {
    return {
      uploading: false,
      fileList: [],
      fileUrl: ''
    }
  },
  computed: {
    disabled: function() {
      return this.fileList.length >= this.limit || this.uploading
    },    
    maxSizeByte: function() {
      const need = this.maxSize
      if (typeof need === 'number') {
        return need
      }
      const needB = parseFloat(need)
      if (isNaN(needB)) {
        // 默认 最大3M
        return 3 * 1024 * 1024
      }
      if (/\d+(\.\d+)?[G,g]/.test(need)) {
        return needB * 1024 * 1024 * 1024
      } else if (/\d+(\.\d+)?[M,m]/.test(need)) {
        return needB * 1024 * 1024
      } else if (/\d+(\.\d+)?[K,KB,kb]/.test(need)) {
        return needB * 1024
      } else {
        return needB
      }
    }
  },
  watch: {
    value: function(newValue) {
      this.fileUrl = newValue     
    }
  },
  created() {
    this.headers = {
      Authorization: 'Bearer ' + this.$store.getters.access_token
    }
    this.fileUrl = this.value
  },
  methods: {
    onRemove(file, fileList) {
      
      this.fileList = fileList
      this.$emit('on-remove', { file, fileList })
    },
    clear() {
      this.$refs.upload.clearFiles()
      this.fileList = []
      this.uploading = false
    },
    onSuccess(response, file, fileList) {
      
      this.uploading = false
      if (response.code !== 200) {
        this.$message.error(response.msg || '系统错误，请联系管理员')
        return
      }
      if (fileList.length > 1) {
        this.$refs.upload.handleRemove(fileList[0])
      }
      this.fileList = fileList
      if (response.code === 200) {
        this.fileUrl = response.data.url
      }
      this.$emit('input', this.fileUrl)    
    },
    onError(err, file, fileList) {
      console.log({ file, fileList })
      this.uploading = false
      let message = {}
      try {
        message = JSON.parse(err.message)
      } catch (e) { console.log(e) }
      this.$message.error(message.msg || '导入失败，请联系管理员')
    },
    onBeforeUpload(file) {
      if (file.size > this.maxSizeByte) {
        this.$message({
          message: `文件大小不能超过${this.maxSize}`,
          type: 'error'
        })
        return false     
      }
      this.uploading = true
      return true
    },
    onDelete() {
      this.fileUrl = ''
      this.$emit('input', this.fileUrl)
    },
    onView() {
      this.$refs.elImage.clickHandler()
    }
  }
}
</script>
<style lang="scss" scoped>
.upload-wrap {
  position: relative;
  display: inline-block;
  min-width: 64px;
  min-height: 64px;
  background-color: #f0f2f5;
  .tips {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    cursor: wait;
  }
  .mask {
    position: absolute;
    top: 50%;
    background: rgba(240, 242, 245, 0.5);
    width: 100%;
    text-align: center;  
    transform: translateY(-50%);
    .mask-btn {
      margin: 0 5px;
    }
  }
  .el-upload {
    display: inline-block;
  }
  &.uploaded {
    .mask {
      top: 100%;
      transform: translateY(-100%);
      display: none;
    }
    &:hover {
      .mask {
        display: block;
      }      
    }
  }
}
// .el-image {
//   /deep/ .el-image__inner {
//     max-width: 64px;
//     max-height: 64px;
//   }
// }
</style>
