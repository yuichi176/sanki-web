import { useEffect, useState } from 'react'
import { NavLink } from 'react-router'

import { navigationItems } from '../app/navigation'
import companyMark from '../assets/company-mark.png'
import instagramIcon from '../assets/icons/Instagram_Glyph_Black.png'
import tiktokIcon from '../assets/icons/TikTok-logo-RGB-Stacked-black-simplified.png'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (!isMenuOpen) {
      return
    }

    const originalBodyOverflow = document.body.style.overflow
    const originalDocumentOverflow = document.documentElement.style.overflow

    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.documentElement.style.overflow = originalDocumentOverflow
    }
  }, [isMenuOpen])

  return (
    <header className="relative z-10 border-b border-gray-200 bg-white">
      <div className="relative z-40 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-4 xl:px-0">
        <NavLink className="flex items-center gap-3" end to="/">
          <img alt="" className="h-9 w-[38px]" height={36} src={companyMark} width={38} />
          <span className="text-xl font-bold tracking-wide text-brand">三気建設株式会社</span>
        </NavLink>
        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          className="inline-flex size-11 items-center justify-center text-gray-800 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand md:hidden"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <svg
            aria-hidden="true"
            className="size-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="m6 6 12 12M18 6 6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
        <div className="hidden md:flex md:items-center md:gap-10">
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
              <li>
                <a
                  className="border-b-2 border-transparent pb-1 text-gray-800 transition-colors hover:border-brand hover:text-brand"
                  href="https://shushushu.jp/"
                  rel="noreferrer"
                  target="_blank"
                >
                  主守手
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a
              aria-label="Instagramを開く"
              className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              href="https://www.instagram.com/sanki.kensetsu/"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" className="size-6" height={24} src={instagramIcon} width={24} />
            </a>
            <a
              aria-label="TikTokを開く"
              className="transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              href="https://www.tiktok.com/@sanki.kensetsu_"
              rel="noreferrer"
              target="_blank"
            >
              <img alt="" className="size-8" height={32} src={tiktokIcon} width={32} />
            </a>
          </div>
        </div>
      </div>
      <nav
        aria-hidden={!isMenuOpen}
        aria-label="モバイルメインナビゲーション"
        className={
          isMenuOpen
            ? 'pointer-events-auto visible fixed inset-0 z-30 translate-y-0 overflow-y-auto bg-white px-6 pt-24 opacity-100 transition-[opacity,transform,visibility] duration-300 ease-out md:hidden'
            : 'pointer-events-none invisible fixed inset-0 z-30 -translate-y-4 overflow-y-auto bg-white px-6 pt-24 opacity-0 transition-[opacity,transform,visibility] duration-300 ease-out md:hidden'
        }
        id="mobile-navigation"
        inert={!isMenuOpen}
      >
        <ul className="mx-auto max-w-7xl border-t border-gray-200 text-lg font-bold">
          <li className="border-b border-gray-200">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'block bg-green-50 px-4 py-5 text-brand'
                  : 'block px-4 py-5 text-gray-800 transition-colors hover:bg-green-50 hover:text-brand'
              }
              end
              onClick={() => setIsMenuOpen(false)}
              to="/"
            >
              ホーム
            </NavLink>
          </li>
          {navigationItems.map(({ label, to }) => (
            <li key={to} className="border-b border-gray-200">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'block bg-green-50 px-4 py-5 text-brand'
                    : 'block px-4 py-5 text-gray-800 transition-colors hover:bg-green-50 hover:text-brand'
                }
                onClick={() => setIsMenuOpen(false)}
                to={to}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li className="border-b border-gray-200">
            <a
              className="block px-4 py-5 text-gray-800 transition-colors hover:bg-green-50 hover:text-brand"
              href="https://shushushu.jp/"
              rel="noreferrer"
              target="_blank"
            >
              主守手
            </a>
          </li>
        </ul>
        <div className="mx-auto mt-8 flex max-w-7xl items-center gap-6 px-4">
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
      </nav>
    </header>
  )
}
