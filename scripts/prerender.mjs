import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const DIST_DIRECTORY = resolve('dist')
const SERVER_DIRECTORY = resolve('.ssr')
const ROOT_TEMPLATE = await readFile(resolve(DIST_DIRECTORY, 'index.html'), 'utf8')
const { prerenderedPages, renderPage } = await import(resolve(SERVER_DIRECTORY, 'entry-server.js'))

for (const prerenderedPage of prerenderedPages) {
  const { html: page, title } = await renderPage(prerenderedPage)
  const { pathname } = prerenderedPage
  const html = ROOT_TEMPLATE.replace('<title>三気建設株式会社</title>', `<title>${title}</title>`).replace(
    '<div id="root"></div>',
    `<div id="root">${page}</div>`,
  )
  const destination = resolve(
    DIST_DIRECTORY,
    pathname === '/' ? 'index.html' : `${pathname.slice(1)}index.html`,
  )

  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(destination, html)
}

await rm(SERVER_DIRECTORY, { force: true, recursive: true })
