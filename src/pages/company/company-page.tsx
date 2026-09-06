import historyImage from './assets/company-history.webp'
import { SectionHeading } from '../section-heading'

interface MvvItem {
  readonly label: string
  readonly title?: string
  readonly values?: readonly string[]
}

interface Office {
  readonly address: string
  readonly name: string
}

const mvvItems: readonly MvvItem[] = [
  { label: 'Mission', title: '当たり前の生活は我々が守る' },
  { label: 'Vision', title: '自分の大切な人に勧めたくなる会社' },
  {
    label: 'Value',
    values: [
      'より良い仕事、より早く、より安全に',
      '声を掛け合い、切磋琢磨した仕事環境',
      'お客様と地域に誠実であること',
      '人材育成、技術発展',
      'やる気、創意、元気',
    ],
  },
]

const offices: readonly Office[] = [
  {
    name: '本社',
    address: '〒501-0552 岐阜県揖斐郡大野町大字大衣斐264番地',
  },
  {
    name: '飯田営業所',
    address: '〒395-2566 長野県飯田市嶋86番地',
  },
]

function createGoogleMapEmbedUrl(address: string): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
}

function MvvSection({ item }: Readonly<{ item: MvvItem }>) {
  return (
    <section className="grid border-b border-green-100 last:border-b-0 md:grid-cols-[224px_1fr]">
      <div className="relative border-l-[3px] border-brand px-6 py-8 md:p-16">
        <p className="text-xs tracking-[0.27em] text-brand">{item.label}</p>
      </div>
      <div className="border-l border-green-100 px-6 py-8 md:p-12">
        {item.title ? (
          <h3 className="text-2xl leading-[44.4px] font-bold text-green-700">{item.title}</h3>
        ) : null}
        {item.values ? (
          <ol className="grid md:grid-cols-2 md:gap-x-16">
            {item.values.map((value, index) => (
              <li
                className="flex items-center gap-5 border-b border-green-100 py-5 text-sm leading-6 text-gray-800"
                key={value}
              >
                <span className="flex size-8 shrink-0 items-center justify-center border border-green-200 text-xs font-bold text-green-700">
                  {index + 1}
                </span>
                {value}
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </section>
  )
}

export function CompanyPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading>会社概要</SectionHeading>
          <p className="mt-3 pl-5 text-[13px] leading-5 text-gray-600">
            三気建設株式会社の理念・概要・事業所をご紹介します。
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {mvvItems.map((item) => (
          <MvvSection item={item} key={item.label} />
        ))}
      </div>

      <section className="bg-green-100">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[160px_1fr] lg:gap-16 lg:px-10">
          <div>
            <p className="text-sm tracking-[0.2em] text-brand">Philosophy</p>
            <span aria-hidden="true" className="mt-4 block h-24 w-px bg-brand" />
          </div>
          <div className="space-y-8 text-sm leading-9 text-gray-800">
            <p>
              日々の生活に欠かせない電気や水道、道路や鉄道とも密接に関わり、自然災害から人々を守る社会基盤。
              <br />
              我々三気建設が支えているのは、こういった「当たり前」です。
            </p>
            <p>
              テクノロジーの進化によって、かつてないスピードで世界は変わり続けていますが、「残り続けるもの」を作る使命は変わりません。
            </p>
            <p>
              我々三気建設一同は、自分の家族や友人、パートナーなど大切な人に「三気建設への入社を心からおすすめしたい」。
              <br />
              そう心から思える会社にしていく。
            </p>
            <p>全ての言動、行動、決定は、この未来を目指し、実行していきます。</p>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto grid max-w-7xl px-6 lg:grid-cols-[2fr_1fr] lg:px-10">
          <img
            alt="創業当時の様子"
            className="h-80 w-full object-cover lg:h-[465px]"
            src={historyImage}
          />
          <div className="px-6 py-10 lg:h-[465px] lg:px-12 lg:pt-[46px] lg:pb-0">
            <p className="text-xs tracking-[0.2em] text-brand">History</p>
            <h2 className="mt-6 text-2xl leading-9 font-bold text-gray-800">沿革</h2>
            <span aria-hidden="true" className="mt-7 block h-0.5 w-8 bg-brand" />
            <ul className="mt-8 space-y-4 text-sm leading-6 text-gray-700">
              <li className="flex gap-3">
                <span aria-hidden="true">■</span>
                <span>昭和五十二年四月八日創業</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">■</span>
                <span>発電所（ダム）建設工事の作業員らによって土木一式工事会社としてスタート</span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">■</span>
                <span>
                  昭和五十五年当時には難しかった「岩盤への緑化工事」にいち早く成功し、のり面工事に特化
                </span>
              </li>
              <li className="flex gap-3">
                <span aria-hidden="true">■</span>
                <span>平成十三年、本社を岐阜県大野町へ移転</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading>事業所案内</SectionHeading>
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-12">
          {offices.map((office) => (
            <article key={office.name}>
              <h3 className="text-sm font-bold text-gray-800">【{office.name}】</h3>
              <iframe
                className="mt-5 h-90 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={createGoogleMapEmbedUrl(office.address)}
                title={`${office.name}の地図`}
              />
              <address className="mt-4 text-sm leading-6 text-gray-700 not-italic">
                {office.address}
              </address>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
