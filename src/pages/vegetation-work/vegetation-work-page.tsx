import { Link } from 'react-router'

import vegetation01 from './assets/vegetation-01.webp'
import vegetation02 from './assets/vegetation-02.webp'
import vegetation03 from './assets/vegetation-03.webp'
import vegetation04 from './assets/vegetation-04.webp'
import vegetation05 from './assets/vegetation-05.webp'
import vegetation07 from './assets/vegetation-07.webp'
import vegetation10 from './assets/vegetation-10.webp'
import vegetation12 from './assets/vegetation-12.webp'
import vegetation13 from './assets/vegetation-13.webp'
import vegetation14 from './assets/vegetation-14.webp'
import vegetation15 from './assets/vegetation-15.webp'
import vegetation16 from './assets/vegetation-16.webp'
import vegetation17 from './assets/vegetation-17.webp'
import vegetation18 from './assets/vegetation-18.webp'
import vegetation19 from './assets/vegetation-19.webp'
import vegetation20 from './assets/vegetation-20.webp'
import vegetation21 from './assets/vegetation-21.webp'

interface VegetationMethod {
  readonly detailsTo?: string
  readonly geology: string
  readonly images: readonly string[]
  readonly introduction: string
  readonly name: string
  readonly plants: string
}

const vegetationMethods: readonly VegetationMethod[] = [
  {
    name: '種子散布工',
    introduction:
      'ポンプを用いて、ファイバー、肥料、侵食防止剤、種子、水を混合し、地山に吹付ける。',
    geology: '土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、1：1.0より緩勾配',
    plants: '草本類',
    images: [vegetation01, vegetation15],
  },
  {
    name: '客土吹付工',
    introduction:
      'ポンプまたは吹付機により、客土・バーク・肥料・侵食防止剤・種子・水を混合したスラリーを1〜3cmの厚さで吹き付ける。',
    geology: '土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、1：0.8より緩勾配',
    plants: '草本植物、木本植物（先駆植物）',
    images: [],
  },
  {
    name: '植生基材吹付工',
    introduction:
      'バーク堆肥を主体とした植生基材を3〜10cmの厚さで吹き付け、法面の緑化と安定を同時に図る工法です。',
    geology: '土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、軟・硬岩、1：0.5より緩勾配',
    plants: '草本植物、木本植物',
    images: [vegetation02, vegetation10],
  },
  {
    name: 'チップ材吹付工',
    detailsTo: '/chip-material-spraying',
    introduction:
      '伐採した木材を粉砕したチップ材を主体とした植生基材に、肥料・侵食防止剤・種子を混合して吹き付ける工法です。',
    geology: '土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、軟・硬岩、1：0.5より緩勾配',
    plants: '草本植物、木本植物',
    images: [vegetation14, vegetation04],
  },
  {
    name: '植生シート工',
    introduction: '種子、肥料を装着したシート状のものを全面または帯状に張り付ける。',
    geology: '土壌硬度23㎜以下の粘性土、25㎜以下の砂質土、1：1.0より緩勾配',
    plants: '草本植物',
    images: [vegetation05],
  },
  {
    name: '植生マット工',
    introduction:
      '肥料帯・種子・生育基材を含む厚みのあるマットを全面に張り付ける工法です。保水性・保肥性に優れています。',
    geology: '土壌硬度23㎜以下の粘性土、25㎜以下の砂質土、1：1.0より緩勾配',
    plants: '草本植物、一部の木本植物',
    images: [vegetation18, vegetation03],
  },
  {
    name: '植生ネット工',
    introduction:
      '種子吹付工、客土吹付工の基礎工として、表面侵食の防止のためにネットを全面に張り付ける。',
    geology: '土壌硬度23㎜以下の粘性土、25㎜以下の砂質土、1：1.0より緩勾配',
    plants: '種子吹付工、客土吹付工を併用する。',
    images: [vegetation13, vegetation12],
  },
  {
    name: '植栽工',
    introduction:
      '法面に苗木を直接植栽する工法です。苗木植栽・成木移植・株植・挿し木など、現地条件に応じた工法を選択します。',
    geology: '苗木植栽工、成木植栽工、株植工、さし木工など、施工地に適した工法で植物を植栽する。',
    plants: '草本植物、木本植物',
    images: [vegetation19, vegetation16],
  },
  {
    name: '植生土のう工',
    introduction:
      '種子・肥料・土壌を詰めた袋を法面の水平溝または枠構造物に固定する工法です。急勾配での緑化に対応できます。',
    geology: '土砂、硬質土砂、軟岩、1：1.0より緩勾配',
    plants: '木本植物、草本植物',
    images: [vegetation20, vegetation17],
  },
  {
    name: '植生基材注入工法',
    detailsTo: '/vegetation-substrate-injection',
    introduction:
      '粗目の植生袋を展張した後、液状化した客土・種子・特殊有機材を注入して充填する工法です。極めて急勾配な法面にも対応します。',
    geology: '土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、軟・硬岩、1：0.3より緩勾配',
    plants: '草本植物、一部の木本植物',
    images: [vegetation21, vegetation07],
  },
  {
    name: '張芝工',
    introduction: '切り芝、ロール芝を全面または市松模様に張り付ける。',
    geology: '土壌硬度23㎜以下の粘性土、25㎜以下の砂質土、1：1.0より緩勾配',
    plants: '切り芝 → 野芝、ロール芝 → 外来草本',
    images: [],
  },
]

function Detail({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <dt className="text-sm font-bold text-green-800">{label}</dt>
      <dd className="mt-2 leading-6 text-gray-900">{value}</dd>
    </div>
  )
}

function VegetationMethodSection({
  index,
  method,
}: Readonly<{ index: number; method: VegetationMethod }>) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-gray-200 py-12 first:pt-0 last:border-b-0 lg:gap-12 lg:py-12 ${method.images.length > 0 ? 'lg:grid-cols-[minmax(0,7fr)_minmax(330px,4.5fr)]' : ''}`}
    >
      <div>
        <h2 className="flex items-baseline gap-4">
          <span className="text-sm font-bold tracking-[0.2em] text-green-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[22px] leading-8 font-bold text-gray-800">{method.name}</span>
        </h2>
        <dl className="mt-8 space-y-6">
          <Detail label="施工方法" value={method.introduction} />
          <Detail label="適用地質条件" value={method.geology} />
          <Detail label="導入植物" value={method.plants} />
          {method.detailsTo ? (
            <Link
              className="inline-flex rounded-sm bg-brand px-8 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              to={method.detailsTo}
            >
              詳しく見る
            </Link>
          ) : null}
        </dl>
      </div>
      {method.images.length > 0 ? (
        <div
          className={`grid gap-3 ${method.images.length > 1 ? 'sm:grid-cols-2' : 'sm:max-w-55 sm:justify-self-end'}`}
        >
          {method.images.map((image, imageIndex) => (
            <figure key={image}>
              <img
                alt={`${method.name}の施工例${imageIndex + 1}`}
                className="aspect-[22/15] w-full rounded object-cover"
                src={image}
              />
              <figcaption className="mt-1.5 text-center text-xs text-gray-700">
                施工例{imageIndex === 0 ? '①' : '②'}
              </figcaption>
            </figure>
          ))}
        </div>
      ) : null}
    </article>
  )
}

export function VegetationWorkPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <h1 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            植生工
          </h1>
          <p className="mt-3 pl-5 leading-5 text-gray-600">
            植物を利用して法面を緑化・保護する工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        {vegetationMethods.map((method, index) => (
          <VegetationMethodSection index={index} key={method.name} method={method} />
        ))}
      </section>
    </>
  )
}
