<template>
  <div class="app">
    <div class="box" @click="test"></div>
  </div>
</template>

<script>
// 导出当前组件的配置项
// 里面可以提供data methods computed watch 生命周期八钩子
export default {
  methods: {
    test() {
      alert('success')
    }
  }
}
</script>

<style>
.app {
  width: 400px;
  height: 400px;
  background: linear-gradient(to right, #ecf, #6cf);
  border: 1px solid #ecf;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 50px;
  height: 50px;
  background: #3cf;
  border-radius: 10px;
}
</style>