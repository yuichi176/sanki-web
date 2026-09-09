import arrowRight from './assets/arrow-right.svg'
import recruitHeroImage from './assets/recruit-hero.webp'
import { SectionHeading } from '../section-heading'

interface WorkEnvironment {
  readonly englishTitle: string
  readonly items: readonly string[]
  readonly title: string
}

const workEnvironments: readonly WorkEnvironment[] = [
  {
    englishTitle: 'Work Style',
    title: '働き方改革',
    items: [
      '週休二日制（天候などで土曜出社の場合、振休で対応）',
      'アプリケーションを使った勤怠管理',
      '人事部を設立し、定期的な面談・ヒアリングを実施',
    ],
  },
  {
    englishTitle: 'System',
    title: '制度',
    items: [
      '月給制',
      '昇給年１回（4月）',
      '賞与年２回（7月、12月）',
      '各種社会保険制度加入',
      'マイカー通勤可、社用車の貸し出し可',
      '社宅提供あり（費用は要相談）',
      '研修、メンター制度あり',
    ],
  },
  {
    englishTitle: 'Benefits',
    title: '福利厚生',
    items: [
      '資格支援制度 — 業務上必要な資格・免許の受験料や講座受講料を会社が負担',
      '制服の支給 — 制服や業務上必要な道具は会社がその都度支給',
      '各種手当 — 残業・職能・役職・家族・運転・通勤手当をご用意',
      'リフレッシュ休暇 — 入社後すぐ3日付与（半年後にプラス10日）',
      '奨学金返済支援 — 岐阜県の奨学金返済支援企業に登録',
    ],
  },
]

function EnvironmentCard({ environment }: Readonly<{ environment: WorkEnvironment }>) {
  return (
    <article>
      <p className="text-sm font-bold tracking-[0.2em] text-brand">{environment.englishTitle}</p>
      <h3 className="mt-4 flex items-center gap-3 text-xl font-bold text-gray-800">
        <span aria-hidden="true" className="h-0.5 w-6 bg-brand" />【{environment.title}】
      </h3>
      <ul className="mt-6 bg-gray-100 px-7 py-6 text-sm leading-[25px] text-gray-800 md:min-h-86">
        {environment.items.map((item) => (
          <li className="flex gap-3 py-1.5" key={item}>
            <span aria-hidden="true" className="pt-0.5 text-brand">
              ●
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  )
}

export function CareersPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <SectionHeading>採用情報</SectionHeading>
          <p className="mt-3 pl-5 text-sm leading-5 text-gray-600 lg:text-base">
            三気建設株式会社で働く仲間を募集しています。
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-green-950">
        <img alt="" className="absolute inset-0 size-full object-cover" src={recruitHeroImage} />
        <div aria-hidden="true" className="absolute inset-0 bg-[rgba(13,31,13,0.6)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-white lg:px-10 lg:py-30">
          <p className="text-xs font-bold tracking-[0.25em] text-green-200">Recruit</p>
          <h1 className="mt-5 text-3xl leading-[55.8px] font-bold sm:text-4xl">
            三気建設では、
            <br />
            【次世代を担う土木の現場職人】
            <br />
            を募集しています。
          </h1>
          <div className="mt-10 space-y-1 leading-[26.6px] text-green-50">
            <p>土木の仕事はハードな面もありますが、</p>
            <p>社会的に重要な役割を担い、なくてはならない仕事です。</p>
            <p>身体を動かし、働いた分知識や技術が身につきます。</p>
            <p>一緒に「土木のイメージ」を変えて、楽しく働ける現場を目指しませんか？</p>
            <p>学歴や経歴は問いません。知識と技術を持ち合わせた、職人たちが丁寧に指導します。</p>
            <p>少しでも興味を持った方はぜひ、応募フォームにご連絡ください。</p>
            <p>面接の前に、オンラインや対面で採用担当が直接説明します！</p>
          </div>
          <a
            className="mt-10 inline-flex items-center gap-3 bg-green-600 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe-sga5iFBf1bvCWsRTii8xJGaRSVw3bWSCAEt-6yibw7MC2Q/viewform"
            rel="noreferrer"
            target="_blank"
          >
            <img alt="" aria-hidden="true" className="size-4" src={arrowRight} />
            応募フォームはこちらから
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading>三気建設の働き方</SectionHeading>
        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-3 xl:gap-6">
          {workEnvironments.map((environment) => (
            <EnvironmentCard environment={environment} key={environment.englishTitle} />
          ))}
        </div>
      </section>
    </>
  )
}
