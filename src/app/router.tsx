import { createBrowserRouter } from 'react-router'

import { AppLayout } from './app-layout'
import { CareersPage } from '../pages/careers/careers-page'
import { ChipMaterialSprayingPage } from '../pages/chip-material-spraying/chip-material-spraying-page'
import { CompanyPage } from '../pages/company/company-page'
import { HomePage } from '../pages/home/home-page'
import { NewsPage } from '../pages/news/news-page'
import { NorimenCraftsmanPage } from '../pages/norimen-craftsman/norimen-craftsman-page'
import { NotFoundPage } from '../pages/not-found/not-found-page'
import { ServicesPage } from '../pages/services/services-page'
import { SlopeRepairPage } from '../pages/slope-repair/slope-repair-page'
import { StructuralWorkPage } from '../pages/structural-work/structural-work-page'
import { VegetationWorkPage } from '../pages/vegetation-work/vegetation-work-page'
import { VegetationSubstrateInjectionPage } from '../pages/vegetation-substrate-injection/vegetation-substrate-injection-page'

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'news', Component: NewsPage },
      { path: 'services', Component: ServicesPage },
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
])
