export type AvailableLanguages = 'ru' | 'en'

export type TreeItemLocale = {
  id: number
  cg_name: string
  cg_slug: string
}

export type TreeItemLocaleMap = Record<AvailableLanguages, TreeItemLocale>

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
  locale: AvailableLanguages
}

export type Breadcrumb = {
  id: number
  name: string
  slug: string
  url: string
}