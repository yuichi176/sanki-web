import { Link } from 'react-router'

import arrowGreen from '../../assets/icons/arrow-green.svg'
import arrowWhite from '../../assets/icons/arrow-white.svg'
import heroImage1368 from './assets/hero-1368.webp'
import heroImage2048 from './assets/hero-2048.webp'
import heroImage768 from './assets/hero-768.webp'

interface ServiceItem {
  readonly description: string
  readonly href: string
  readonly title: string
}

const featuredNoteUrls: readonly string[] = [
  'https://note.com/embed/notes/nf3d6092d8528',
  'https://note.com/embed/notes/ncda7325b840b',
  'https://note.com/embed/notes/nf6e82d7aadda',
]

const serviceItems: readonly ServiceItem[] = [
  {
    title: '植生工',
    description: '植物を利用して法面を緑化・保護する工法',
    href: '/vegetation-work',
  },
  {
    title: '構造物工',
    description: '構造物を利用して法面の安定・保護を図る工法',
    href: '/structural-work',
  },
  {
    title: '落石対策工',
    description: '法面上の浮石・転石による落石を防止・防護する工法',
    href: '/rockfall-prevention',
  },
]

interface SectionHeadingProps {
  readonly children: string
  readonly moreHref?: string
  readonly moreTo?: string
}

function SectionHeading({ children, moreHref, moreTo }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <h2 className="border-l-4 border-brand pl-4 text-2xl font-bold text-gray-800">{children}</h2>
      {moreHref ? (
        <a
          className="flex items-center gap-1.5 text-sm text-brand hover:underline"
          href={moreHref}
          rel="noreferrer"
          target="_blank"
        >
          noteのお知らせ一覧を見る
          <img alt="" className="size-3.5" height={14} src={arrowGreen} width={14} />
        </a>
      ) : (
        <Link className="flex items-center gap-1.5 text-sm text-brand hover:underline" to={moreTo!}>
          もっと見る
          <img alt="" className="size-3.5" height={14} src={arrowGreen} width={14} />
        </Link>
      )}
    </div>
  )
}

export function HomePage() {
  return (
    <>
      <section className="relative isolate flex min-h-155 items-center justify-center overflow-hidden bg-gray-900 lg:min-h-190">
        <img
          alt="法面の施工現場"
          className="absolute inset-0 -z-20 size-full object-cover"
          fetchPriority="high"
          sizes="100vw"
          src={heroImage1368}
          srcSet={`${heroImage768} 768w, ${heroImage1368} 1368w, ${heroImage2048} 2048w`}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.35)_52%,rgba(0,0,0,0.7)_100%)]" />
        <div className="mx-auto w-full max-w-2xl px-8 text-center text-white">
          <p className="text-[11px] font-medium tracking-[0.45em] text-green-400">
            SANKI CONSTRUCTION
          </p>
          <h1 className="mt-10 text-4xl leading-tight font-bold drop-shadow-md sm:text-5xl lg:text-6xl">
            当たり前の生活は
            <br />
            我々が守る。
          </h1>
          <p className="mt-7 text-base text-white/80">自分の大切な人に勧めたくなる会社</p>
          <Link
            className="mt-8 inline-flex items-center gap-3 bg-brand px-8 py-4 text-sm font-bold shadow-lg transition-colors hover:bg-green-600"
            to="/services"
          >
            事業内容を見る
            <img alt="" className="size-4" height={16} src={arrowWhite} width={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading moreHref="https://note.com/sanki_kensetsu">お知らせ</SectionHeading>
        <p className="mt-5 text-sm leading-7 text-gray-600">
          三気建設の取り組みや施工に関する情報をnoteで発信しています。
        </p>
        <div className="mt-8 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {featuredNoteUrls.map((url, index) => (
            <iframe
              // eslint-disable-next-line tailwindcss/no-custom-classname -- Required by note's embed script.
              className="note-embed block w-full max-w-full"
              height="220"
              key={url}
              loading="lazy"
              src={url}
              title={`注目のお知らせ ${index + 1}`}
            />
          ))}
        </div>
        <script async charSet="utf-8" src="https://note.com/scripts/embed.js" />
      </section>

      <section className="bg-green-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading moreTo="/services">事業内容</SectionHeading>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {serviceItems.map(({ description, href, title }) => (
              <article className="bg-white p-8" key={title}>
                <h3 className="text-lg font-bold text-green-700">{title}</h3>
                <p className="mt-4  leading-7 text-gray-600">{description}</p>
                <Link
                  className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-green-700 hover:underline"
                  to={href}
                >
                  詳しく見る
                  <img alt="" className="size-3.5" height={14} src={arrowGreen} width={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
