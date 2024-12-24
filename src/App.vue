<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-root">
    <RouterView />
  </div>
</template>

<style scoped>
.app-root {
  height: 100%;
}

.app-root div {
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
}
</style>
