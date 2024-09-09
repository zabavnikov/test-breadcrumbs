<script setup lang="ts">
import Breadcrumbs from '~/components/Breadcrumbs.vue'
import SelectLanguage from '~/components/SelectLanguage.vue'
import type { AvailableLanguages } from '~/types'
import { shallowRef, useFetch } from '#imports'

const { data } = await useFetch('/api/tree')

const selectedLanguage = shallowRef<AvailableLanguages>(
  data.value.locale
)

const currentUrl = shallowRef('')
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center text-sm">
    <div>
      <SelectLanguage
        v-model="selectedLanguage"
        @update:model-value="currentUrl = ''"
      />

      <div class="mt-4 text-white">
        <Breadcrumbs
          :tree="data.page_data.tree[0].childs"
          :selected-locale="selectedLanguage"
          v-model="currentUrl"
        />
<!--    <Breadcrumbs
          :tree="data.page_data.tree"
          :selected-locale="selectedLanguage"
          v-model="activeLink"
        />-->
      </div>

      <div class="mt-4 text-white underline">
        {{ currentUrl }}
      </div>
    </div>
  </div>
</template>