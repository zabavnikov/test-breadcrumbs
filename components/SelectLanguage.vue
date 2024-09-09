<script setup lang="ts">
import Select from '~/components/_form/Select.vue'
import type { AvailableLanguages } from '~/types'

const model = defineModel<AvailableLanguages>({
  default: 'ru'
})
</script>

<template>
  <Select v-model="model">
    <option value="ru">RU</option>
    <option value="en">EN</option>
  </Select>
</template>