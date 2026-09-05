import { NavLink } from 'react-router'

import companyMark from '../assets/company-mark.png'

interface FooterNavigationItem {
  readonly label: string
  readonly to: string
}

const footerNavigationItems: readonly FooterNavigationItem[] = [
  { label: 'お知らせ', to: '/news' },
  { label: '事業内容', to: '/services' },
  { label: '職人の仕事', to: '/norimen-craftsman' },
  { label: '採用情報', to: '/careers' },
  { label: '会社概要', to: '/company' },
]

export function SiteFooter() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-15 md:grid-cols-[280px_1fr]">
          <div>
            <NavLink className="flex items-center gap-3" end to="/">
              <img alt="" className="h-9 w-[38px]" height={36} src={companyMark} width={38} />
              <span className="text-xl font-bold tracking-wide text-brand">三気建設株式会社</span>
            </NavLink>
            <div className="mt-8 space-y-5 text-xs leading-7 text-gray-600">
              <address className="not-italic">
                <p className="font-bold text-green-700">[本社]</p>
                <p>〒501-0552 岐阜県揖斐郡大野町大字大衣斐264</p>
                <p>TEL: 0585-34-1420 / FAX: 0585-32-4955</p>
              </address>
              <address className="not-italic">
                <p className="font-bold text-green-700">[飯田営業所]</p>
                <p>〒395-2566 長野県飯田市嶋86番地</p>
                <p>TEL: 0265-48-0553 / FAX: 0265-48-5663</p>
              </address>
            </div>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="space-y-3 text-sm text-gray-600">
              {footerNavigationItems.map(({ label, to }) => (
                <li key={to}>
                  <NavLink className="transition-colors hover:text-brand" to={to}>
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-12 border-t border-gray-200 pt-6 text-xs text-gray-600">
          © 2026 三気建設株式会社 All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
