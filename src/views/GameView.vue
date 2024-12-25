<script setup lang="ts">
import YesNoConfirmation from '@/components/YesNoConfirmation.vue'
import router from '@/router'
import { useGameStore } from '@/stores/game-store'
import { ref } from 'vue'

const gameStore = useGameStore()
const isPlayerOrderConfirmation = ref(false)
const isCrashConfirmation = ref(false)

function switchPLayerOrderConfirmation(isConfirmation: boolean) {
  isPlayerOrderConfirmation.value = isConfirmation
}

function switchCrashConfirmation(isConfirmation: boolean) {
  isCrashConfirmation.value = isConfirmation
}

function resetPlayerOrder() {
  switchPLayerOrderConfirmation(false)
  gameStore.generatePlayerOrders()
}

function goToActionCard() {
  switchCrashConfirmation(false)
  gameStore.selectActionCard()
  router.push('/action')
}
</script>

<template>
  <div class="view-content game-view-grid">
    <YesNoConfirmation
      :is-confirmation="isPlayerOrderConfirmation"
      :no-click="() => switchPLayerOrderConfirmation(false)"
      :yes-click="resetPlayerOrder"
    >
      <button @click="() => switchPLayerOrderConfirmation(true)">Порядок хода</button>
    </YesNoConfirmation>
    <div class="player-order-grid">
      <div class="plate" v-for="(order, index) in gameStore.playerOrders" :key="index">
        {{ order }}
      </div>
    </div>
    <YesNoConfirmation
      :is-confirmation="isCrashConfirmation"
      :no-click="() => switchCrashConfirmation(false)"
      :yes-click="goToActionCard"
    >
      <button
        @click="() => switchCrashConfirmation(true)"
        :class="{ disabled: gameStore.actionCardCount === 0 }"
      >
        CRASH: {{ gameStore.actionCardCount }}
      </button>
    </YesNoConfirmation>
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
