import chipMaterial03 from './assets/chip-material-03.webp'
import chipMaterial04 from './assets/chip-material-04.webp'
import chipMaterial06 from './assets/chip-material-06.webp'
import chipMaterial07 from './assets/chip-material-07.webp'
import chipMaterial09 from './assets/chip-material-09.webp'
import chipMaterial13 from './assets/chip-material-13.webp'
import chipMaterial14 from './assets/chip-material-14.webp'
import chipMaterial17 from './assets/chip-material-17.webp'
import { SectionHeading } from '../section-heading'

interface Feature {
  readonly description: string
  readonly title: string
}

interface ProcessStep {
  readonly image: string
  readonly title: string
}

const features: readonly Feature[] = [
  {
    title: '伐採木をゴミではなく、リサイクル資源として活用',
    description:
      'チップ材は伐採木材を粉砕したものを使用するため、有機物が豊富で土壌微生物の活性化を促します。化学資材の使用を抑え、環境への負荷軽減にもつながります。',
  },
  {
    title: 'チップ材の腐食により表土を肥沃化',
    description:
      'チップ材が法面に厚い有機物層を形成し、雨水や養分を長期間保持します。植物の定着に必要な水分・栄養分を供給します。',
  },
  {
    title: '草本の繁茂を抑制し、木本類の生長が良好',
    description:
      '厚い有機物層は木本類の根系発達に適しており、草本類のみならず樹木の自然侵入・定着が期待できます。周辺植生に配慮した緑化にも適しています。',
  },
  {
    title: '法面被覆効果により、保温性・保湿性が向上',
    description:
      '吹付機による圧送施工のため、足場確保が困難な急勾配法面や、軟質岩・硬質岩を含む多様な地質にも適用できます。',
  },
]

const processSteps: readonly ProcessStep[] = [
  { title: '伐採木を粉砕', image: chipMaterial03 },
  { title: '施工場所まで運搬', image: chipMaterial14 },
  { title: '吹付プラント設置', image: chipMaterial07 },
  { title: 'チップ材吹付け', image: chipMaterial17 },
]

export function ChipMaterialSprayingPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <h1 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            チップ材吹付工
          </h1>
          <p className="mt-3 pl-5 text-sm leading-5 text-gray-600 lg:text-base">
            伐採木材を粉砕したチップ材を主体とした植生基材を吹き付ける工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <SectionHeading size="section">チップ材吹付工とは</SectionHeading>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.74fr)_minmax(340px,1fr)] lg:gap-12">
          <div className="space-y-4 leading-7 text-gray-800">
            <p>
              道路やダムを建設するにあたっては、多くの木が伐採されることとなります。これまでは伐採木の必要とされない部分を処分してきましたが、環境問題が重要視される現在では、資源として活用することが求められています。
            </p>
            <p>
              伐採した木を粉砕してチップ化し、緑化のリサイクル資源として用いる工法がチップ材吹付工です。山から出た伐採材をまたもとの山へ還し、自然のサイクルに組み込むことができます。
            </p>
            <p>
              チップ材が豊富な有機物を法面に供給することで、土壌微生物の活性化と植物の安定した生育環境をつくります。
            </p>
            <dl className="grid gap-3 pt-6 text-sm leading-[22px] sm:grid-cols-[auto_1fr] sm:gap-x-5">
              <dt className="font-bold text-green-800">適用地質条件</dt>
              <dd>
                土壌硬度23㎜以下の粘性土、27㎜以下の砂質土、礫質土、軟・硬岩、1：0.5より緩勾配
              </dd>
              <dt className="font-bold text-green-800">導入植物</dt>
              <dd>草本植物、木本植物</dd>
            </dl>
          </div>
          <figure>
            <img
              alt="チップ材吹付工の施工例"
              className="aspect-[14/9] w-full rounded object-cover"
              src={chipMaterial06}
            />
            <figcaption className="mt-2 text-center text-xs text-gray-700">施工例</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading size="section">チップ材吹付工 特長</SectionHeading>
          <ol className="mt-8 border-t border-gray-200">
            {features.map((feature, index) => (
              <li
                className="grid gap-4 border-b border-gray-200 py-6 sm:grid-cols-[28px_1fr] sm:gap-5"
                key={feature.title}
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="leading-[22px] font-bold text-gray-800">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-700">{feature.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <SectionHeading size="section">チップ材吹付工 工程</SectionHeading>
        <ol className="mx-auto mt-16 grid max-w-220 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
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
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:pt-0">
        <SectionHeading size="section">チップ材吹付工 施工例</SectionHeading>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {[
            { image: chipMaterial04, label: '施工前' },
            { image: chipMaterial09, label: '施工後 5ヶ月' },
            { image: chipMaterial13, label: '施工後 1年5ヶ月' },
          ].map((example) => (
            <figure key={example.label}>
              <img
                alt={`チップ材吹付工 ${example.label}`}
                className="aspect-[39/20] w-full rounded object-cover"
                src={example.image}
              />
              <figcaption className="mt-2 text-center text-sm text-gray-700">
                {example.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}
