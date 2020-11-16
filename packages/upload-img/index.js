import UploadImg from './src/index'
UploadImg.install = function(Vue) {
  Vue.component(UploadImg.name, UploadImg)
}
export default UploadImg