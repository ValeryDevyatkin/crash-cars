<script setup lang="ts">
import router from '@/router'
import { useGameStore } from '@/stores/game-store'
import { onMounted } from 'vue'

const gameStore = useGameStore()
const playerCountList = [2, 3, 4, 5]

onMounted(() => {
  gameStore.resetGame()
})

function setPlayerCountAndStartGame(count: number) {
  gameStore.setPlayerCount(count)
  router.push('/game')
}
</script>

<template>
  <div class="view-content game-settings-grid">
    <div class="heading-text">Число игроков:</div>
    <div class="count-button-grid">
      <button
        v-for="(count, index) in playerCountList"
        :key="index"
        class="extra-large"
        @click="() => setPlayerCountAndStartGame(count)"
      >
        {{ count }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.game-settings-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  row-gap: var(--large-gap);
}

.count-button-grid {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: var(--large-gap);
  row-gap: var(--large-gap);
}
</style>
