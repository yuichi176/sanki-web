import type { RouteObject } from 'react-router'

import { AppLayout } from './app-layout'
import { CareersPage } from '../pages/careers/careers-page'
import { ChipMaterialSprayingPage } from '../pages/chip-material-spraying/chip-material-spraying-page'
import { CompanyPage } from '../pages/company/company-page'
import { HomePage } from '../pages/home/home-page'
import { NorimenCraftsmanPage } from '../pages/norimen-craftsman/norimen-craftsman-page'
import { NotFoundPage } from '../pages/not-found/not-found-page'
import { RockfallPreventionPage } from '../pages/rockfall-prevention/rockfall-prevention-page'
import { ServicesPage } from '../pages/services/services-page'
import { SoilcretePage } from '../pages/soilcrete/soilcrete-page'
import { SlopeRepairPage } from '../pages/slope-repair/slope-repair-page'
import { StructuralWorkPage } from '../pages/structural-work/structural-work-page'
import { VegetationSubstrateInjectionPage } from '../pages/vegetation-substrate-injection/vegetation-substrate-injection-page'
import { VegetationWorkPage } from '../pages/vegetation-work/vegetation-work-page'

export interface PrerenderedPage {
  readonly pathname: string
  readonly title: string
}

export const prerenderedPages: readonly PrerenderedPage[] = [
  { pathname: '/', title: '三気建設株式会社' },
  { pathname: '/services/', title: '事業内容 | 三気建設株式会社' },
  { pathname: '/rockfall-prevention/', title: '落石対策工 | 三気建設株式会社' },
  { pathname: '/soilcrete/', title: 'ソイルクリート工法 | 三気建設株式会社' },
  { pathname: '/slope-repair/', title: '既設法面補修工 | 三気建設株式会社' },
  { pathname: '/structural-work/', title: '構造物工 | 三気建設株式会社' },
  { pathname: '/vegetation-work/', title: '植生工 | 三気建設株式会社' },
  { pathname: '/chip-material-spraying/', title: 'チップ材吹付工 | 三気建設株式会社' },
  { pathname: '/vegetation-substrate-injection/', title: '植生基材注入工法 | 三気建設株式会社' },
  { pathname: '/norimen-craftsman/', title: '職人の仕事 | 三気建設株式会社' },
  { pathname: '/careers/', title: '採用情報 | 三気建設株式会社' },
  { pathname: '/company/', title: '会社概要 | 三気建設株式会社' },
]

export const routes: RouteObject[] = [
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'services', Component: ServicesPage },
      { path: 'rockfall-prevention', Component: RockfallPreventionPage },
      { path: 'soilcrete', Component: SoilcretePage },
      { path: 'slope-repair', Component: SlopeRepairPage },
      { path: 'structural-work', Component: StructuralWorkPage },
      { path: 'vegetation-work', Component: VegetationWorkPage },
      { path: 'chip-material-spraying', Component: ChipMaterialSprayingPage },
      { path: 'vegetation-substrate-injection', Component: VegetationSubstrateInjectionPage },
      { path: 'norimen-craftsman', Component: NorimenCraftsmanPage },
      { path: 'careers', Component: CareersPage },
      { path: 'company', Component: CompanyPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
]
