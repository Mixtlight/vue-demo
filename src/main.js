import Vue from 'vue'
import App from './App.vue'
import TestButton from './components/TestButton.vue';

Vue.config.productionTip = false
// 全局注册，所有的组件范围内都可以使用
Vue.component('TestButton', TestButton);

new Vue({
  render: h => h(App),// 简写
}).$mount('#app')
