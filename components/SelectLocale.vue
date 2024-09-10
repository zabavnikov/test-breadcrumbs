<script setup lang="ts">
import Select from '~/components/_form/Select.vue'
import type { AvailableLocales } from '~/types'

const model = defineModel<AvailableLocales>({
  default: 'ru'
})
</script>

<template>
  <Select v-model="model">
    <option value="ru">RU</option>
    <option value="en">EN</option>
  </Select>
</template>