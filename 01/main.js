// 核心作用：导入App.vue,基于App.vue创建结构渲染index.html

import Vue from 'vue' // 导入vue核心包
import App from './App.vue' // 导入App.vue根组件

Vue.config.productionTip = false // 提示:当前处于什么环境(生产/开发)

// vue实例化,提供render方法, 基于App.vue创建结构渲染index.html
new Vue({
  // el: '#app',
  render: h => h(App),// 简写
  
  // 完整写法
  // render: (createElement) => {
  //   return createElement(App)
  // }
}).$mount('#app') // 和el效果一致
