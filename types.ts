export type AvailableLocales = 'ru' | 'en'

export type TreeItemLocale = {
  id: number
  cg_name: string
  cg_slug: string
}

export type TreeItemLocaleMap = Record<AvailableLocales, TreeItemLocale>

export type TreeItem = {
  id: number
  locale: TreeItemLocaleMap,
  depth: number
  path_to_top: TreeItem[]
}

export type Tree = {
  page_data: {
    tree: TreeItem[]
  },
  locale: AvailableLocales
}

export type Breadcrumb = {
  id: number
  name: string
  slug: string
  url: string
}