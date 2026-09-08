import { renderToString } from 'react-dom/server'
import { createStaticHandler, createStaticRouter, StaticRouterProvider } from 'react-router'

import { routes } from './app/routes'

export async function renderPage(pathname: string): Promise<string> {
  const basePath = import.meta.env.BASE_URL
  const { dataRoutes, query } = createStaticHandler(routes, { basename: basePath })
  const context = await query(new Request(`https://sanki-web.example${basePath}${pathname}`))

  if (context instanceof Response) {
    throw new Error(`Unable to render ${pathname}: ${context.status} ${context.statusText}`)
  }

  const router = createStaticRouter(dataRoutes, context)

  return renderToString(<StaticRouterProvider context={context} hydrate={false} router={router} />)
}
