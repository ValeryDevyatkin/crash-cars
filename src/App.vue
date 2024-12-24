<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Main</RouterLink>
    <RouterLink to="/game">Game</RouterLink>
    <RouterLink to="/initiative">Initiative</RouterLink>
    <RouterLink to="/action">Action</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped></style>
