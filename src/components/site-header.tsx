import { NavLink } from 'react-router'

import companyMark from '../assets/company-mark.png'

interface NavigationItem {
  readonly label: string
  readonly to: string
}

const navigationItems: readonly NavigationItem[] = [
  { label: 'お知らせ', to: '/news' },
  { label: '事業内容', to: '/services' },
  { label: '職人の仕事', to: '/norimen-craftsman' },
  { label: '採用情報', to: '/careers' },
  { label: '会社概要', to: '/company' },
]

export function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-4 lg:px-0">
        <NavLink className="flex items-center gap-3" end to="/">
          <img alt="" className="h-9 w-[38px]" height={36} src={companyMark} width={38} />
          <span className="text-xl font-bold tracking-wide text-brand">三気建設株式会社</span>
        </NavLink>
        <nav aria-label="メインナビゲーション">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-3 text-sm font-bold lg:gap-x-8">
            {navigationItems.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? 'border-b-2 border-brand pb-1 text-gray-800'
                      : 'border-b-2 border-transparent pb-1 text-gray-800 transition-colors hover:border-brand hover:text-brand'
                  }
                  to={to}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
