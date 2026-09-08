import { NavLink } from 'react-router'

import { navigationItems } from '../app/navigation'
import companyMark from '../assets/company-mark.png'
import instagramIcon from '../assets/icons/Instagram_Glyph_Black.png'
import tiktokIcon from '../assets/icons/TikTok-logo-RGB-Stacked-black-simplified.png'

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[350px_1fr] lg:gap-15">
          <div>
            <NavLink className="flex items-center gap-3" end to="/">
              <img alt="" className="h-9 w-[38px]" height={36} src={companyMark} width={38} />
              <span className="text-xl font-bold tracking-wide text-brand">三気建設株式会社</span>
            </NavLink>
            <div className="mt-8 space-y-5 text-sm leading-7 text-gray-600">
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
            <div className="mt-6 flex items-center gap-5">
              <a
                aria-label="Instagramを開く"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                href="https://www.instagram.com/sanki.kensetsu/"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" className="size-7" height={28} src={instagramIcon} width={28} />
              </a>
              <a
                aria-label="TikTokを開く"
                className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                href="https://www.tiktok.com/@sanki.kensetsu_"
                rel="noreferrer"
                target="_blank"
              >
                <img alt="" className="size-9" height={36} src={tiktokIcon} width={36} />
              </a>
            </div>
          </div>
          <nav aria-label="フッターナビゲーション">
            <ul className="space-y-3 text-sm text-gray-600">
              {navigationItems.map((item) => (
                <li key={item.label}>
                  {'href' in item ? (
                    <a
                      className="transition-colors hover:text-brand"
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink className="transition-colors hover:text-brand" to={item.to}>
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
              <li>
                <a
                  className="transition-colors hover:text-brand"
                  href="https://shushushu.jp/"
                  rel="noreferrer"
                  target="_blank"
                >
                  主守手
                </a>
              </li>
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
