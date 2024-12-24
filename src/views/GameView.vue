<script setup lang="ts">
import router from '@/router'
import { useGameStore } from '@/stores/game-store'
import { onMounted } from 'vue'

const gameStore = useGameStore()

onMounted(() => {
  gameStore.generatePlayerOrders()
})

function goToActionCard() {
  gameStore.selectActionCard()
  router.push('/action')
}
</script>

<template>
  <div class="view-content game-view-grid">
    <button @click="gameStore.generatePlayerOrders">Порядок хода:</button>
    <div class="player-order-grid">
      <div class="plate" v-for="(order, index) in gameStore.playerOrders" :key="index">
        {{ order }}
      </div>
    </div>
    <button @click="goToActionCard" :class="{ disabled: gameStore.actionCardCount === 0 }">
      CRASH: {{ gameStore.actionCardCount }}
    </button>
  </div>
</template>

<style scoped>
.game-view-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr auto;
  row-gap: var(--large-gap);
}

.player-order-grid {
  display: grid;
  grid-template-columns: auto;
  row-gap: var(--large-gap);
}

.player-order-grid div {
  place-self: center;
}
</style>
