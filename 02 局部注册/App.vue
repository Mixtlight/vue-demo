<template>
  <div class="app">
    <TopContent></TopContent>
    <CenterContent></CenterContent>
    <BottomContent></BottomContent>
  </div>
</template>

<script>
import TopContent from './components/TopContent.vue'
import CenterContent from './components/CenterContent.vue';
import BottomContent from './components/BottomContent.vue';
export default {
    components: {
        //  '组件名': 组件对象
        TopContent: TopContent,
        CenterContent,
        BottomContent
    }
}
</script>

<style>
.app{
    width: 600px;
    height: 700px;
    background: #6cf;
    margin: 0 auto;
    padding: 20px;
}
</style>