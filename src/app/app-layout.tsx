import { Outlet } from 'react-router'

import { SiteFooter } from '../components/site-footer'
import { Breadcrumbs } from '../components/breadcrumbs'
import { SiteHeader } from '../components/site-header'

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <SiteHeader />
      <main id="main-content">
        <Breadcrumbs />
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
