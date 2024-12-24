<script setup lang="ts">
import router from '@/router'
import { useGameStore } from '@/stores/game-store'

const gameStore = useGameStore()

function goBack() {
  router.back()
}
</script>

<template>
  <div class="view-content action-card-grid" @click="goBack">
    <div class="heading-text">{{ gameStore.selectedActionCard?.title }}</div>
    <div class="action-card-art-text">{{ gameStore.selectedActionCard?.artText }}</div>
    <div class="action-card-text">
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
  grid-template-rows: auto calc(var(--large-gap) * 7) 1fr;
}

.action-card-text {
  text-align: center;
  font-size: var(--large-font);
}
</style>
