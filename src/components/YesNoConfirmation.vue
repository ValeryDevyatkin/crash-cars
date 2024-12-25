<script setup lang="ts">
const props = defineProps({
  isConfirmation: {
    type: Boolean,
  },
  noClick: {
    type: Function,
    required: true,
  },
  yesClick: {
    type: Function,
    required: true,
  },
})
</script>

<template>
  <div v-if="props.isConfirmation" class="confirmation-grid">
    <button class="no-button" @click="() => props.noClick()">Отмена</button>
    <button class="yes-button" @click="() => props.yesClick()">ОК</button>
  </div>
  <slot v-else></slot>
</template>

<style scoped>
.confirmation-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: var(--small-gap);
}

.no-button {
  background: var(--alert-background-color);
}

.yes-button {
  background: var(--ok-background-color);
}
</style>
