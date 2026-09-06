import vegetationSubstrate01 from './assets/vegetation-substrate-01.webp'
import vegetationSubstrate02 from './assets/vegetation-substrate-02.webp'
import vegetationSubstrate03 from './assets/vegetation-substrate-03.webp'
import vegetationSubstrate04 from './assets/vegetation-substrate-04.webp'
import vegetationSubstrate08 from './assets/vegetation-substrate-08.webp'

interface ProcessStep {
  readonly image: string
  readonly title: string
}

const processSteps: readonly ProcessStep[] = [
  { title: '施工前', image: vegetationSubstrate03 },
  { title: '植生袋布設', image: vegetationSubstrate04 },
  { title: '植生基材注入', image: vegetationSubstrate02 },
  { title: '完成', image: vegetationSubstrate08 },
]

function SectionHeading({ children }: Readonly<{ children: string }>) {
  return (
    <h2 className="flex items-center gap-4 text-xl leading-8 font-bold text-gray-800">
      <span aria-hidden="true" className="h-6 w-1 bg-brand" />
      {children}
    </h2>
  )
}

export function VegetationSubstrateInjectionPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-xs text-gray-600">事業内容 &gt; 植生工 &gt; 植生基材注入工法</p>
          <h1 className="mt-4 flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            植生基材注入工法
          </h1>
          <p className="mt-3 pl-5 text-[13px] leading-5 text-gray-600">
            粗目の植生袋を布設、その中に泥状化した客土、種子および肥料を注入し、法面上に生育基盤を固定する緑化工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <SectionHeading>植生基材注入工法とは</SectionHeading>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.74fr)_minmax(340px,1fr)] lg:gap-12">
          <div className="space-y-4 text-sm leading-7 text-gray-800">
            <p>
              粗い目の植生袋（植生土嚢）を法面全体に展張した後、液状化した客土・種子・特殊有機材を専用ポンプで注入します。法面上に生育基盤をしっかりと固定できる工法です。
            </p>
            <p>
              植生袋が法面を覆う形となるため、在来の植生工が適用困難な極めて急勾配な法面にも対応できます。吹付材や種子の流失を抑え、安定した緑化を支えます。
            </p>
            <p>法勾配は1：0.3まで対応可能で、雨天時の施工も可能です。</p>
            <dl className="grid gap-3 pt-3 text-[13px] leading-[22px] sm:grid-cols-[auto_1fr] sm:gap-x-5">
              <dt className="font-bold text-green-800">適用地質条件</dt>
              <dd>
                土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、軟・硬岩、1：0.3より緩勾配
              </dd>
              <dt className="font-bold text-green-800">導入植物</dt>
              <dd>草本植物、一部の木本植物</dd>
            </dl>
          </div>
          <figure>
            <img
              alt="植生基材注入工法の施工例"
              className="aspect-[14/9] w-full rounded object-cover"
              src={vegetationSubstrate01}
            />
            <figcaption className="mt-2 text-center text-xs text-gray-700">施工例</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading>植生基材注入工法 工程</SectionHeading>
          <ol className="mx-auto mt-10 grid max-w-220 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <li className="text-center" key={step.title}>
                <img
                  alt={step.title}
                  className="aspect-[13/9] w-full rounded object-cover"
                  src={step.image}
                />
                <p className="mt-3 text-xs font-bold tracking-[0.2em] text-green-400">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-1 text-[15px] font-bold text-gray-800">{step.title}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
