import lathInstallationImage from './assets/lath-installation.webp'
import repairOverviewImage from './assets/repair-overview.webp'
import rockBoltInstallationImage from './assets/rock-bolt-installation.webp'
import voidFillingImage from './assets/void-filling.webp'

interface RepairStep {
  readonly description?: string
  readonly image?: string
  readonly title: string
}

const repairSteps: readonly RepairStep[] = [
  {
    title: '水洗い工',
    description: '既設モルタル・コンクリート面を水洗いする。',
  },
  {
    title: '打音・コア抜き調査',
    description:
      '既設モルタル・コンクリート面をハンマーで叩き音を調べる。コア抜きを行い、背面空隙を調べる。',
  },
  {
    title: 'ラス張り工',
    description: 'ラス網を張る',
    image: lathInstallationImage,
  },
  {
    title: 'ロックボルト工',
    description: 'ロックボルトを挿入する',
    image: rockBoltInstallationImage,
  },
  {
    title: '空隙充填工',
    description: '既設吹付モルタル背面に空隙や空洞が存在する場合、セメント系固化材を充填する。',
    image: voidFillingImage,
  },
  { title: 'モルタル・コンクリート吹付' },
]

function SectionHeading({ children }: Readonly<{ children: string }>) {
  return (
    <h2 className="flex items-center gap-4 text-xl leading-[30px] font-bold text-gray-800">
      <span aria-hidden="true" className="h-6 w-1 bg-brand" />
      {children}
    </h2>
  )
}

function RepairStepItem({ index, step }: Readonly<{ index: number; step: RepairStep }>) {
  const isLast = index === repairSteps.length - 1

  return (
    <li className="relative flex gap-6 pb-10 last:pb-0">
      <div className="flex w-8 shrink-0 flex-col items-center">
        <span className="flex size-8 items-center justify-center rounded-full bg-brand text-[13px] leading-[13px] font-bold text-white">
          {String(index + 1).padStart(2, '0')}
        </span>
        {!isLast ? <span aria-hidden="true" className="mt-2 w-px grow bg-green-100" /> : null}
      </div>
      <div className="min-w-0 pb-1">
        <h3 className="text-[15px] leading-6 font-bold text-green-800">{step.title}</h3>
        {step.description ? (
          <p className="mt-2 text-sm leading-7 text-gray-800">{step.description}</p>
        ) : null}
        {step.image ? (
          <img
            alt={`${step.title}の施工例`}
            className="mt-5 aspect-[8/5] w-full max-w-120 rounded object-cover"
            src={step.image}
          />
        ) : null}
      </div>
    </li>
  )
}

export function SlopeRepairPage() {
  return (
    <main>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <p className="text-xs leading-[18px] text-gray-600">
            事業内容 &gt; 構造物工 &gt; 既設法面補修工
          </p>
          <h1 className="mt-4 flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            既設法面補修工
          </h1>
          <p className="mt-3 pl-5 text-[13px] leading-5 text-gray-600">
            経年劣化した既設モルタル・コンクリート法面を補強・補修する工法です。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <SectionHeading>既設法面補修工とは</SectionHeading>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,732px)_420px] lg:gap-12">
          <div>
            <p className="text-sm leading-7 text-gray-800">
              モルタル・コンクリート吹付工は昭和３０年代から施工され始め、現在に至るまで有効に機能しているものや、途中、老朽化によって別の工法に更新されたものがあります。
            </p>
            <p className="mt-4 text-sm leading-7 text-gray-800">
              老朽化の原因は大きくモルタル・コンクリート自体の老朽化と、地山表層の風化あるいは変位がある。老朽化したままの状態では危険なため、補修、補強を行います。
            </p>
            <dl className="mt-7 space-y-2 text-[13px] leading-[22px]">
              <div className="grid gap-1 sm:grid-cols-[68px_1fr] sm:gap-4">
                <dt className="font-bold text-green-800">適用箇所</dt>
                <dd className="text-neutral-950">
                  既設法面の経年の劣化、老朽化、背面空洞化により補強、補修が必要とされるのり面に用いられる。
                </dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[68px_1fr] sm:gap-4">
                <dt className="font-bold text-green-800">適用目的</dt>
                <dd className="text-neutral-950">既設法面の補強、補修</dd>
              </div>
            </dl>
          </div>
          <figure>
            <img
              alt="既設法面補修工の施工例"
              className="aspect-[14/9] w-full rounded object-cover"
              src={repairOverviewImage}
            />
            <figcaption className="mt-2 text-center text-xs text-gray-700">施工例</figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading>既設法面補修工 手順</SectionHeading>
          <ol className="mt-10 max-w-300">
            {repairSteps.map((step, index) => (
              <RepairStepItem index={index} key={step.title} step={step} />
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}
