<script setup lang="ts">
import { computed } from '#imports'
import type { AvailableLanguages, TreeItem, TreeItemLocaleMap, Breadcrumb } from '~/types'

const props = defineProps<{
  tree: TreeItem[],
  selectedLocale: AvailableLanguages
}>()

const currentUrl = defineModel({
  default: ''
})

const items = computed<Breadcrumb[][]>(() => {
  let result = []

  for (let i = 0; i < props.tree.length; i++) {
    const item: TreeItem = props.tree[i]

    // Если корень, то сразу его возвращаем.
    if (item.depth === 1) {
      const { name, slug } = getLocaleData(item.locale)

      result.push([
        {
          id: item.id,
          name,
          slug,
          url: `/${slug}`
        }
      ])

      break
    }
    // Если есть вложенность.
    else if (item.depth > 1) {
      let url = ''

      const items = item.path_to_top
        // Сортируем по глубине вложенности.
        // Чем меньше вложенность, тем выше в массиве.
        .toSorted((a, b) => a.depth - b.depth)
        .map((nestedItem: TreeItem, index: number) => {
          let { name, slug } = getLocaleData(nestedItem.locale)

          // Последняя ссылка хлебных крошек,
          // должна иметь префикс в виде идентификатора категории.
          if (index === item.path_to_top.length - 1) {
            name = `${nestedItem.id}_${name}`
            slug = `${nestedItem.id}_${slug}`
          }

          url += `/${slug}`

          return {
            id: nestedItem.id,
            name,
            slug,
            url
          }
        })

      result.push(items)
    }
  }

  return result
})

/**
 * Получаем имя и слаг из локали.
 * @param itemLocale
 */
function getLocaleData(itemLocale: TreeItemLocaleMap) {
  let name, slug, locale = props.selectedLocale

  // Проверяем, существует ли локаль.
  if (Object.keys(itemLocale[locale]).length === 0) {
    locale = locale === 'ru'
      ? 'en'
      : 'ru'
  }

  name = itemLocale[locale].cg_name
  slug = itemLocale[locale].cg_slug

  return {
    name,
    slug
  }
}
</script>

<template>
  <template v-for="(nested, index) in items" :key="index">
    <ul class="flex gap-2">
      <template v-for="(child, childIndex) in nested" :key="child.id">
        <li v-if="childIndex > 0 && nested.length - 1">&raquo;</li>
        <li @click="currentUrl = child.url" class="cursor-pointer hover:underline">
          {{ child.name }}
        </li>
      </template>
    </ul>
  </template>
</template>