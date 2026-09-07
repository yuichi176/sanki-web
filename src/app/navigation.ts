export interface NavigationItem {
  readonly label: string
  readonly to: string
}

export interface BreadcrumbItem {
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

const homeBreadcrumb: BreadcrumbItem = { label: 'ホーム', to: '/' }
const servicesBreadcrumb: BreadcrumbItem = { label: '事業内容', to: '/services' }
const vegetationWorkBreadcrumb: BreadcrumbItem = { label: '植生工', to: '/vegetation-work' }
const structuralWorkBreadcrumb: BreadcrumbItem = { label: '構造物工', to: '/structural-work' }

export const breadcrumbsByPath: Readonly<Record<string, readonly BreadcrumbItem[]>> = {
  '/news': [homeBreadcrumb, { label: 'お知らせ', to: '/news' }],
  '/services': [homeBreadcrumb, servicesBreadcrumb],
  '/vegetation-work': [homeBreadcrumb, servicesBreadcrumb, vegetationWorkBreadcrumb],
  '/structural-work': [homeBreadcrumb, servicesBreadcrumb, structuralWorkBreadcrumb],
  '/rockfall-prevention': [
    homeBreadcrumb,
    servicesBreadcrumb,
    { label: '落石対策工', to: '/rockfall-prevention' },
  ],
  '/chip-material-spraying': [
    homeBreadcrumb,
    servicesBreadcrumb,
    vegetationWorkBreadcrumb,
    { label: 'チップ材吹付工', to: '/chip-material-spraying' },
  ],
  '/vegetation-substrate-injection': [
    homeBreadcrumb,
    servicesBreadcrumb,
    vegetationWorkBreadcrumb,
    { label: '植生基材注入工法', to: '/vegetation-substrate-injection' },
  ],
  '/soilcrete': [
    homeBreadcrumb,
    servicesBreadcrumb,
    structuralWorkBreadcrumb,
    { label: 'ソイルクリート工法', to: '/soilcrete' },
  ],
  '/slope-repair': [
    homeBreadcrumb,
    servicesBreadcrumb,
    structuralWorkBreadcrumb,
    { label: '既設法面補修工', to: '/slope-repair' },
  ],
  '/norimen-craftsman': [homeBreadcrumb, { label: '職人の仕事', to: '/norimen-craftsman' }],
  '/careers': [homeBreadcrumb, { label: '採用情報', to: '/careers' }],
  '/company': [homeBreadcrumb, { label: '会社概要', to: '/company' }],
}
