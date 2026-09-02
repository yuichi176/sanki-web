import { createBrowserRouter } from 'react-router'

import { AppLayout } from './app-layout'
import { CareersPage } from '../pages/careers-page'
import { CompanyPage } from '../pages/company-page'
import { HomePage } from '../pages/home-page'
import { NewsPage } from '../pages/news-page'
import { NorimenCraftsmanPage } from '../pages/norimen-craftsman-page'
import { NotFoundPage } from '../pages/not-found-page'
import { ServicesPage } from '../pages/services-page'

export const router = createBrowserRouter([
  {
    Component: AppLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'news', Component: NewsPage },
      { path: 'services', Component: ServicesPage },
      { path: 'norimen-craftsman', Component: NorimenCraftsmanPage },
      { path: 'careers', Component: CareersPage },
      { path: 'company', Component: CompanyPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
