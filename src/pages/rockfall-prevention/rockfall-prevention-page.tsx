import rockfallNet1 from './assets/rockfall-net-1.webp'
import rockfallNet2 from './assets/rockfall-net-2.webp'
import wireRope1 from './assets/wire-rope-1.webp'
import wireRope2 from './assets/wire-rope-2.webp'

interface RockfallPreventionMethod {
  readonly application?: string
  readonly images?: readonly [string, string]
  readonly purpose: string
  readonly title: string
}

const rockfallPreventionMethods: readonly RockfallPreventionMethod[] = [
  {
    title: 'ワイヤーロープ本掛工',
    application:
      '浮石や転石が巨大な場合や土地の制約条件等で応急的に斜面上に固定しなければならない時によく用いられる。',
    purpose: '浮石や転石が滑動や転落しないよう防止',
    images: [wireRope1, wireRope2],
  },
  {
    title: '根固工',
    application:
      '斜面上の浮石・転石は除去することが望ましいが、簡単に除去できない大きさの浮石・転石の場合に用いられる。',
    purpose: '浮石や転石が滑動や転落しないよう防止',
  },
  {
    title: '落石防護網工',
    purpose: '斜面から落下してくる落石を斜面の途中か道路際に設置した施設で防護',
    images: [rockfallNet1, rockfallNet2],
  },
]

function MethodDetail({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <dt className="text-sm font-bold text-green-800">{label}</dt>
      <dd className="mt-2 leading-6 text-gray-900">{value}</dd>
    </div>
  )
}

function RockfallPreventionMethodSection({
  index,
  method,
}: Readonly<{ index: number; method: RockfallPreventionMethod }>) {
  return (
    <article
      className={`grid items-center gap-10 border-b border-gray-200 py-12 first:pt-0 last:border-b-0 lg:gap-12 lg:py-12 ${method.images ? 'lg:grid-cols-[minmax(0,7fr)_minmax(330px,4.5fr)]' : ''}`}
    >
      <div>
        <h2 className="flex items-baseline gap-4">
          <span className="text-sm font-bold tracking-[0.2em] text-green-400">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[22px] leading-8 font-bold text-gray-800">{method.title}</span>
        </h2>
        <dl className="mt-8 space-y-6">
          {method.application ? <MethodDetail label="適用箇所" value={method.application} /> : null}
          <MethodDetail label="適用目的" value={method.purpose} />
        </dl>
      </div>
      {method.images ? (
        <div className="grid gap-3 sm:grid-cols-2">
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

export function RockfallPreventionPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <h1 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            落石対策工
          </h1>
          <p className="mt-3 pl-5 text-sm leading-5 text-gray-600 lg:text-base">
            法面上の浮石・転石による落石を防止・防護する工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-16">
        {rockfallPreventionMethods.map((method, index) => (
          <RockfallPreventionMethodSection index={index} key={method.title} method={method} />
        ))}
      </section>
    </>
  )
}
