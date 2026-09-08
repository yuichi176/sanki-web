import { mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const ROUTES = [
  '/',
  '/services/',
  '/rockfall-prevention/',
  '/soilcrete/',
  '/slope-repair/',
  '/structural-work/',
  '/vegetation-work/',
  '/chip-material-spraying/',
  '/vegetation-substrate-injection/',
  '/norimen-craftsman/',
  '/careers/',
  '/company/',
]
const DIST_DIRECTORY = resolve('dist')
const SERVER_DIRECTORY = resolve('.ssr')
const ROOT_TEMPLATE = await readFile(resolve(DIST_DIRECTORY, 'index.html'), 'utf8')
const { renderPage } = await import(resolve(SERVER_DIRECTORY, 'entry-server.js'))

for (const route of ROUTES) {
  const page = await renderPage(route.slice(1))
  const html = ROOT_TEMPLATE.replace('<div id="root"></div>', `<div id="root">${page}</div>`)
  const destination = resolve(DIST_DIRECTORY, route === '/' ? 'index.html' : `${route.slice(1)}index.html`)

  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(destination, html)
}

await rm(SERVER_DIRECTORY, { force: true, recursive: true })
