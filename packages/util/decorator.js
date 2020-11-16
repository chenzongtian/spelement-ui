// 防抖，等待一段时间再执行，等待期间再触发则重新等待
export function debounce(fn, delay) {
  let timer = null
  delay = delay || 200
  return function() {
    const args = arguments
    const that = this
    clearTimeout(timer) //每次都要清除这个定时器
    timer = setTimeout(function() { //重新开启定时器
      fn.apply(that, args)
    }, delay)
  }
}
// 节流，一段时间内多次触发只执行第一次触发
export function throttle(fn, delay) {
  let lastTime
  // let timer
  delay = delay || 1000
  return function() {
    const args = arguments
    // 记录当前函数触发的时间
    const nowTime = Date.now()
    if (!lastTime || nowTime - lastTime > delay) {
      lastTime = nowTime //更新最后时间
      fn.apply(this, args)
    }
  }
} 
