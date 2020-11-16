<template>
  <div class="empty-wrap">
    <div class="empty-inner">
      <img class="circular" src="../../images/empty.png" :alt="title">
      <p class="empty-tips">{{title}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sp-empty',
  props: {
    title: {
      type: String,
      default: '没有数据～'
    }
  }
}
</script>

<style lang="scss" scoped>
.empty-wrap {
  position: relative;
  text-align: center;  
  .empty-inner {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);  
    font-size: 0;
    line-height: normal;
  }
  .circular {
    width: 72px;
    display: inline-block;    
  }
  .empty-tips {
    margin: 0;
    font-size: 12px;
    line-height: 46px;
    color: #C0C4CC;    
  }
}
</style>