import { NavLink, Outlet } from 'react-router'

interface NavigationItem {
  readonly label: string
  readonly to: string
}

const navigationItems: readonly NavigationItem[] = [
  { label: 'トップページ', to: '/' },
  { label: 'お知らせ', to: '/news' },
  { label: '事業内容', to: '/services' },
  { label: '法面職人の仕事', to: '/norimen-craftsman' },
  { label: '採用情報', to: '/careers' },
  { label: '会社概要', to: '/company' },
]

export function AppLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-5">
          <NavLink className="text-xl font-bold tracking-wide" end to="/">
            SANKI
          </NavLink>
          <nav aria-label="メインナビゲーション">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              {navigationItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'font-bold text-brand'
                        : 'text-gray-700 transition-colors hover:text-brand'
                    }
                    end={to === '/'}
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
      <main className="mx-auto max-w-6xl px-6 py-16">
        <Outlet />
      </main>
    </div>
  )
}
