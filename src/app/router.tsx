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
import { VegetationWorkPage } from '../pages/vegetation-work/vegetation-work-page'

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'news', Component: NewsPage },
      { path: 'services', Component: ServicesPage },
      { path: 'vegetation-work', Component: VegetationWorkPage },
      { path: 'chip-material-spraying', Component: ChipMaterialSprayingPage },
      { path: 'norimen-craftsman', Component: NorimenCraftsmanPage },
      { path: 'careers', Component: CareersPage },
      { path: 'company', Component: CompanyPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
