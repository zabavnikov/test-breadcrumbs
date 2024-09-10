<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import SelectLocale from '~/components/SelectLocale.vue'
import type {AvailableLocales} from '~/types'
import {shallowRef, useFetch} from '#imports'

const {data} = await useFetch('/api/tree')

const selectedLocale = shallowRef<AvailableLocales>(
  data.value.locale
)

const currentUrl = shallowRef('')

console.log(data.value)
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center text-sm">
    <div>
      <SelectLocale
        v-model="selectedLocale"
        @update:model-value="currentUrl = ''"
      />

      <div class="mt-4 text-white">
        <Breadcrumbs
          :tree="data.page_data.tree[0].childs"
          :selected-locale="selectedLocale"
          v-model="currentUrl"
        />

        <hr class="my-4" />

        <Breadcrumbs
          :tree="data.page_data.tree"
          :selected-locale="selectedLocale"
          v-model="currentUrl"
        />
      </div>

      <div class="mt-4 text-white underline">
        {{ currentUrl }}
      </div>
    </div>
  </div>
</template>