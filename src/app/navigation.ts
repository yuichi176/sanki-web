export interface NavigationItem {
  readonly label: string
  readonly to: string
}

export const navigationItems: readonly NavigationItem[] = [
  { label: 'お知らせ', to: '/news' },
  { label: '事業内容', to: '/services' },
  { label: '職人の仕事', to: '/norimen-craftsman' },
  { label: '採用情報', to: '/careers' },
  { label: '会社概要', to: '/company' },
]
