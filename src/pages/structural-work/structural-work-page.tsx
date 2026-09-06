import { Link } from 'react-router'

import arrowWhite from '../../assets/icons/arrow-white.svg'
import groundAnchor1 from './assets/ground-anchor-1.webp'
import groundAnchor2 from './assets/ground-anchor-2.webp'
import groundReinforcement1 from './assets/ground-reinforcement-1.webp'
import groundReinforcement2 from './assets/ground-reinforcement-2.webp'
import mortarConcreteSpraying1 from './assets/mortar-concrete-spraying-1.webp'
import mortarConcreteSpraying2 from './assets/mortar-concrete-spraying-2.webp'
import slopeRepair1 from './assets/slope-repair-1.webp'
import slopeRepair2 from './assets/slope-repair-2.webp'
import soilcrete1 from './assets/soilcrete-1.webp'
import soilcrete2 from './assets/soilcrete-2.webp'
import sprayedFrame1 from './assets/sprayed-frame-1.webp'
import sprayedFrame2 from './assets/sprayed-frame-2.webp'

interface StructuralWorkMethod {
  readonly application: string
  readonly detailsTo?: string
  readonly hasDetails?: boolean
  readonly images?: readonly [string, string]
  readonly note?: string
  readonly purpose: string
  readonly title: string
  readonly construction?: string
}

const structuralWorkMethods: readonly StructuralWorkMethod[] = [
  {
    title: 'プレキャスト枠工',
    application:
      '浸食されやすい切土法面や標準法面勾配でも状況によって植生が適さない箇所、あるいは植生を行なっても表面が崩落するおそれのある場合に用いられ、1：1.0よりゆるやかな勾配の法面に適用される。',
    purpose: '中詰が土砂やぐり石の空詰めの場合は浸食防止',
  },
  {
    title: 'モルタル・コンクリート吹付工',
    construction:
      '金網張り工を基礎工としたうえで、モルタル吹付工はセメントと砂、コンクリート吹付工はセメントと砂と骨材を混合し、水を加えて練り、地山に吹付ける。',
    application:
      '法面にさしあたりの危険は少ないが、風化しやすい岩、風化してはげ落ちるおそれのある岩、切土した直後は固くてしっかりしていても、表面からの浸透水により不安定になりやすい土質ならびに固結シルトなどで植生工が適用できない箇所に用いる。',
    purpose: '風化、浸食、表面水の浸透防止',
    images: [mortarConcreteSpraying1, mortarConcreteSpraying2],
  },
  {
    title: '既設法面補修工',
    application:
      '既設法面の経年の劣化、老朽化、背面空洞化により補強、補修が必要とされるのり面に用いられる。',
    purpose: '既設法面の補強、補修',
    detailsTo: '/slope-repair',
    images: [slopeRepair1, slopeRepair2],
  },
  {
    title: '吹付枠工',
    application: '亀裂の多い岩盤法面や、早期に保護する必要がある法面等に用いる。',
    purpose: '法面表層部の崩落防止、多少の土圧を受けるおそれのある箇所の土留め、岩盤はく落防止',
    note: '植生基材吹付工と組み合わせることで緑化も可能',
    images: [sprayedFrame1, sprayedFrame2],
  },
  {
    title: 'ソイルクリート工法',
    construction:
      '金網を全面に張り付けた後、鉄筋を配筋して各枠の中心にガッテンダーユニットを設置し、配筋に沿ってモルタル吹付を行う。',
    application: '亀裂の多い岩盤法面や、早期に保護する必要がある法面等に用いる。',
    purpose: '法面表層部の崩落防止、多少の土圧を受けるおそれのある箇所の土留め、岩盤はく落防止',
    hasDetails: true,
    images: [soilcrete1, soilcrete2],
  },
  {
    title: '地山補強土工',
    application:
      '比較的小規模な崩壊防止、急勾配のり面の補強対策、構造物掘削等に伴う仮設のり面の補強対策などで、地山の不安定部や安定地盤まで補強材を挿入することで安定性を高める。',
    purpose: '滑り土塊の滑動力に対抗して崩壊を防止',
    images: [groundReinforcement1, groundReinforcement2],
  },
  {
    title: 'ふとんかご工',
    construction: '鉄線で編んだかごに石を詰めたものを法面に覆う。',
    application:
      '法面に湧水があって土砂の流出するおそれのある場合、または崩落した箇所を復旧する場合、あるいは凍上により法面が剥落するおそれのある場合に用いる。',
    purpose: 'ある程度の土圧に対抗',
  },
  {
    title: 'グラウンドアンカー工',
    application:
      '不安定土塊や岩盤に節理・亀裂等があり崩落、崩壊の危険性のある場合や地すべり地の抑止対策、構造物の浮き上がりや転倒対策、山留め対策等として適用される。',
    purpose: '滑り土塊の滑動力に対抗して崩壊を防止',
    images: [groundAnchor1, groundAnchor2],
  },
]

function MethodDetail({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <dt className="text-xs font-bold text-green-800">{label}</dt>
      <dd className="mt-1 text-[13px] leading-[22px] text-neutral-950">{value}</dd>
    </div>
  )
}

function StructuralWorkMethodSection({
  index,
  method,
}: Readonly<{ index: number; method: StructuralWorkMethod }>) {
  return (
    <article className="grid gap-8 border-b border-gray-200 py-12 first:pt-0 last:border-b-0 last:pb-0 lg:grid-cols-[minmax(0,7fr)_452px] lg:gap-12 lg:py-12">
      <div>
        <h2 className="flex items-baseline gap-4">
          <span className="text-[11px] font-bold tracking-[0.2em] text-green-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[22px] leading-8 font-bold text-gray-800">{method.title}</span>
        </h2>
        <dl className="mt-5 space-y-3">
          {method.construction ? (
            <MethodDetail label="施工方法" value={method.construction} />
          ) : null}
          <MethodDetail label="適用箇所" value={method.application} />
          <MethodDetail label="適用目的" value={method.purpose} />
        </dl>
        {method.note ? (
          <p className="mt-3 text-[13px] leading-[22px] text-gray-500">※ {method.note}</p>
        ) : null}
        {method.detailsTo ? (
          <Link
            className="mt-4 inline-flex items-center gap-2 bg-brand px-5 py-2.5 text-sm font-bold text-white"
            to={method.detailsTo}
          >
            詳しく見る
            <img alt="" className="size-4" height={16} src={arrowWhite} width={16} />
          </Link>
        ) : method.hasDetails ? (
          <button
            className="mt-4 inline-flex items-center gap-2 bg-brand px-5 py-2.5 text-sm font-bold text-white"
            type="button"
          >
            詳しく見る
            <img alt="" className="size-4" height={16} src={arrowWhite} width={16} />
          </button>
        ) : null}
      </div>
      {method.images ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:self-start">
          {method.images.map((image, imageIndex) => (
            <figure key={image}>
              <img
                alt={`${method.title}の施工例${imageIndex + 1}`}
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

export function StructuralWorkPage() {
  return (
    <main>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <h1 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            構造物工
          </h1>
          <p className="mt-3 pl-5 text-[13px] leading-5 text-gray-600">
            構造物を利用して法面の安定・保護を図る工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 lg:px-10 lg:py-16">
        {structuralWorkMethods.map((method, index) => (
          <StructuralWorkMethodSection index={index} key={method.title} method={method} />
        ))}
      </section>
    </main>
  )
}
