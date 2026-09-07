import { Link, useLocation } from 'react-router'

import { breadcrumbsByPath } from '../app/navigation'

export function Breadcrumbs() {
  const { pathname } = useLocation()
  const breadcrumbs = breadcrumbsByPath[pathname]

  if (!breadcrumbs) {
    return null
  }

  return (
    <nav aria-label="パンくずリスト" className="border-b border-gray-200">
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 text-sm leading-5 text-gray-600 lg:px-10">
        {breadcrumbs.map((breadcrumb, index) => {
          const isCurrentPage = index === breadcrumbs.length - 1

          return (
            <li className="flex items-center gap-x-2" key={breadcrumb.to}>
              {index > 0 ? <span aria-hidden="true">›</span> : null}
              {isCurrentPage ? (
                <span aria-current="page" className="text-gray-800">
                  {breadcrumb.label}
                </span>
              ) : (
                <Link
                  className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  to={breadcrumb.to}
                >
                  {breadcrumb.label}
                </Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
