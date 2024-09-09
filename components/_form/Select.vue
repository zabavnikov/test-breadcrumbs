<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <select v-model="model" class="px-4 py-2 bg-neutral-800 rounded-xl text-white">
    <slot />
  </select>
</template>