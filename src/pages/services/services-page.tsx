import arrowRight from './assets/arrow-right.svg'
import norimenAfterImage from './assets/norimen-after.jpg'
import norimenBeforeImage from './assets/norimen-before.jpg'
import service1Image from './assets/service_1.jpg'
import service2Image from './assets/service_2.jpg'
import service3Image from './assets/service_3.jpg'
import service4Image from './assets/service_4.jpg'
import service5Image from './assets/service_5.jpg'

interface WorkType {
  readonly description: string
  readonly image: string
  readonly name: string
  readonly hasDetails: boolean
}

const workTypes: readonly WorkType[] = [
  {
    name: '植生工',
    description: '緑化工法により法面を植物で覆い、侵食・風化を防止します。',
    image: service1Image,
    hasDetails: true,
  },
  {
    name: '構造物工',
    description: 'コンクリートや鋼材などの構造物で法面を安定させます。',
    image: service2Image,
    hasDetails: true,
  },
  {
    name: '落石対策工',
    description: '落石・崩落の危険がある斜面に防護工を施し、安全を確保します。',
    image: service3Image,
    hasDetails: true,
  },
  {
    name: 'トンネル吹付工',
    description: 'トンネル内壁にモルタルや吹付材を施工し、支保・防水を行います。',
    image: service4Image,
    hasDetails: false,
  },
  {
    name: '獣害対策工',
    description: '野生動物の侵入を防ぐフェンスや防護ネットを設置します。',
    image: service5Image,
    hasDetails: false,
  },
]

function SectionHeading({ children }: Readonly<{ children: string }>) {
  return (
    <h2 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
      <span aria-hidden="true" className="h-7 w-1 bg-brand" />
      {children}
    </h2>
  )
}

function WorkCard({ workType }: Readonly<{ workType: WorkType }>) {
  return (
    <article className="overflow-hidden rounded bg-white shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
      <img alt={workType.name} className="h-55 w-full object-cover" src={workType.image} />
      <div className="flex min-h-48 flex-col p-6">
        <h3 className="text-xl leading-7 font-bold text-gray-800">{workType.name}</h3>
        <p className="mt-3 text-sm leading-[22px] text-gray-600">{workType.description}</p>
        {workType.hasDetails ? (
          <button
            className="mt-auto bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-green-700"
            type="button"
          >
            詳しく見る
          </button>
        ) : null}
      </div>
    </article>
  )
}

export function ServicesPage() {
  return (
    <main>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading>事業内容</SectionHeading>
          <p className="mt-3 pl-5 text-sm text-gray-600">
            三気建設が手がける工事の種類・内容をご紹介します。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:pb-16">
        <h1 className="text-2xl leading-9 font-bold text-gray-800">法面保護工とは</h1>
        <div className="mt-8 space-y-4 text-sm leading-7 text-gray-900">
          <p>
            人工的または自然発生的に形成された傾斜面を「法面（のりめん）」といいます。その「法面」を構造物や植物を利用し、保護する「法面保護工」を中心とした土木工事を行っています。
          </p>
          <p>
            盛土工または切土工によって人工的に形成された土または岩の斜面をそれぞれ盛土法面および切土法面といい、これらを総称して法面といいます。「法面を造成するための土工」と「法面を保護するための種々の保護工」とを合わせて「法面工」といい、法面の浸食や風化、崩壊を防止するためにおこなう植生や構造物による法面被覆等を「法面保護工」といいます。
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-268 items-center gap-6 md:grid-cols-[1fr_auto_1fr] md:gap-8">
          <figure>
            <img
              alt="法面保護工の施工前"
              className="h-70 w-full rounded object-cover"
              src={norimenBeforeImage}
            />
            <figcaption className="pt-2 text-center text-xs leading-[18px] text-gray-700">
              施工前
            </figcaption>
          </figure>
          <img
            alt=""
            aria-hidden="true"
            className="mx-auto h-6 w-12 rotate-90 md:rotate-0"
            src={arrowRight}
          />
          <figure>
            <img
              alt="法面保護工の施工後"
              className="h-70 w-full rounded object-cover"
              src={norimenAfterImage}
            />
            <figcaption className="pt-2 text-center text-xs leading-[18px] text-gray-700">
              施工後
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:pb-20">
          <SectionHeading>工種一覧</SectionHeading>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {workTypes.slice(0, 3).map((workType) => (
              <WorkCard key={workType.name} workType={workType} />
            ))}
          </div>
          <div className="mx-auto mt-9 grid max-w-200 gap-6 md:grid-cols-2">
            {workTypes.slice(3).map((workType) => (
              <WorkCard key={workType.name} workType={workType} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
