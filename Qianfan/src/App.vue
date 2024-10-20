<template>
  <div class="app">
    <StartpagesView></StartpagesView>
    <router-view name="home"></router-view>
  </div>
</template>

<script setup lang="ts">
import StartpagesView from './views/StartpagesView.vue'
</script>

<style scoped lang="less">
  .app{
    width: 100dvw;
    height: 100dvh;
  }
</style>