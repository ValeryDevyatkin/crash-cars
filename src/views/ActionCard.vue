<script setup lang="ts">
import router from '@/router'
import { useGameStore } from '@/stores/game-store'
import { computed } from 'vue'

const gameStore = useGameStore()

const backroundStyle = computed(() => {
  const imageUrl = gameStore.selectedActionCard?.imageUrl

  return {
    backgroundImage: imageUrl ? `url('${imageUrl}')` : 'none',
  }
})

function goBack() {
  router.back()
}
</script>

<template>
  <div class="action-card-grid" @click="goBack" :style="backroundStyle">
    <div class="action-card-heading">
      <div class="heading-text">{{ gameStore.selectedActionCard?.title }}</div>
      <div class="action-card-art-text">{{ gameStore.selectedActionCard?.artText }}</div>
    </div>
    <br />
    <div class="action-card-text-container">
      <div v-for="(text, index) in gameStore.selectedActionCard?.actionText" :key="index">
        {{ text }}
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-card-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;

  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 100%;
}

.action-card-heading {
  padding: var(--large-gap);
  border: var(--border-thickness) solid var(--border-color);
  background: var(--card-heading-background-color);
}

.action-card-text-container {
  text-align: center;
  font-size: var(--large-font);
  padding: var(--small-gap);
  border: var(--border-thickness) solid var(--border-color);
  background: var(--plate-background-color);
}
</style>
