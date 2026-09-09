import craftsman1Image from './assets/norimen_craftsman_1.webp'
import craftsman2Image from './assets/norimen_craftsman_2.webp'
import craftsman3Image from './assets/norimen_craftsman_3.webp'
import craftsman4Image from './assets/norimen_craftsman_4.webp'
import craftsman5Image from './assets/norimen_craftsman_5.webp'
import craftsman6Image from './assets/norimen_craftsman_6.webp'
import craftsman7Image from './assets/norimen_craftsman_7.webp'
import craftsman8Image from './assets/norimen_craftsman_8.webp'
import workshopImage from './assets/workshop.webp'
import { SectionHeading } from '../section-heading'

interface WorkItem {
  readonly description: readonly string[]
  readonly images: readonly [string, string]
  readonly imageColumns: readonly [number, number]
  readonly title: string
}

interface CareerStage {
  readonly period: string
  readonly skills: readonly string[]
  readonly title: string
}

const workItems: readonly WorkItem[] = [
  {
    title: '現場調査・管理',
    images: [craftsman1Image, craftsman2Image],
    imageColumns: [2, 3],
    description: [
      '工法に問題がないか、事前に現場調査。',
      '工事が設計通りに行われているかを撮影して管理します。',
    ],
  },
  {
    title: '現場作業',
    images: [craftsman3Image, craftsman4Image],
    imageColumns: [1, 1],
    description: [
      'のり面にぶら下がり、工法に合わせて吹き付けや打ち付けを行います。',
      '機械の操作などを行うこともあります。',
    ],
  },
  {
    title: '現場資料作成',
    images: [craftsman5Image, craftsman6Image],
    imageColumns: [1, 1],
    description: ['工事が終わると、工事についての内容などを報告書にまとめます。'],
  },
  {
    title: '機械整備',
    images: [craftsman7Image, craftsman8Image],
    imageColumns: [3, 2],
    description: ['工事後や、天候不良時で現場作業が出来ない時は倉庫で機械の整備を行います。'],
  },
]

const careerStages: readonly CareerStage[] = [
  {
    period: '入社〜3年目',
    title: '新入社員',
    skills: ['教えてもらいながら作業ができる', '基本的な知識が身に付く'],
  },
  {
    period: '3年目〜5年目',
    title: '若手職人',
    skills: [
      '指示を受けて作業ができる',
      '応用技術が少しずつ身に付く',
      '後輩に基礎的なことを教えることができる',
    ],
  },
  {
    period: '5年目〜10年目',
    title: '中堅職人',
    skills: ['指示を受けなくても一人で考えて動ける', '管理者を目指し、後輩の指導・管理ができる'],
  },
  {
    period: '10年目〜',
    title: 'ベテラン職人',
    skills: [
      '管理者として現場を管理できる',
      '部下のマネジメントを統括でき、後輩の育成にも注力する',
    ],
  },
]

function PageIntroduction({ children }: Readonly<{ children: string }>) {
  return <p className="mt-3 pl-5 text-sm leading-5 text-gray-600 lg:text-base">{children}</p>
}

function WorkSection({ index, workItem }: Readonly<{ index: number; workItem: WorkItem }>) {
  const number = String(index + 1).padStart(2, '0')
  const isEqualWidth = workItem.imageColumns[0] === workItem.imageColumns[1]

  return (
    <article className="border-b border-[#2e2e2e] py-12 first:pt-0 last:border-b-0 last:pb-0 lg:py-15">
      <h3 className="flex items-baseline gap-4">
        <span className="text-xs font-bold tracking-[0.2em] text-green-400">{number}</span>
        <span className="text-xl leading-7 font-bold text-white">{workItem.title}</span>
      </h3>
      <div className={`mt-7 grid gap-2 ${isEqualWidth ? 'sm:grid-cols-2' : 'sm:grid-cols-5'}`}>
        {workItem.images.map((image, imageIndex) => (
          <img
            alt={`${workItem.title}の様子`}
            className="h-64 w-full object-cover sm:h-90"
            key={image}
            src={image}
            style={
              isEqualWidth ? undefined : { gridColumn: `span ${workItem.imageColumns[imageIndex]}` }
            }
          />
        ))}
      </div>
      <p className="mt-6 text-center text-sm leading-7 text-gray-400 sm:text-base sm:leading-[28.8px]">
        {workItem.description.map((line) => (
          <span className="block" key={line}>
            {line}
          </span>
        ))}
      </p>
    </article>
  )
}

export function NorimenCraftsmanPage() {
  return (
    <>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <SectionHeading>法面職人の仕事</SectionHeading>
          <PageIntroduction>
            三気建設の職人が日々取り組む仕事の内容とキャリアをご紹介します。
          </PageIntroduction>
        </div>
      </section>

      <section className="bg-green-950">
        <div className="mx-auto max-w-6xl px-6 py-15 lg:px-10">
          {workItems.map((workItem, index) => (
            <WorkSection index={index} key={workItem.title} workItem={workItem} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <SectionHeading>キャリアプラン</SectionHeading>
        <PageIntroduction>
          三気建設は、職人とただ働くだけではなく、彼らのキャリアをともに考え、ともに成長していくプランを考えています。
        </PageIntroduction>

        <div className="mt-6 grid gap-2 md:mt-8 md:grid-cols-2 md:gap-4 lg:mt-12 xl:grid-cols-4 xl:gap-4">
          {careerStages.map((stage, index) => (
            <article className="relative flex flex-col pt-7 xl:pt-0" key={stage.period}>
              {index < careerStages.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-0 hidden h-px w-4 translate-x-4 bg-brand xl:block"
                />
              ) : null}
              <p className="mb-3 text-center text-sm font-bold text-brand">{stage.period}</p>
              <div className="min-h-50 border-t-4 border-brand bg-gray-100 p-4">
                <h3 className="text-base font-bold text-gray-800">{stage.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-[23.1px] text-gray-700">
                  {stage.skills.map((skill) => (
                    <li className="flex gap-2" key={skill}>
                      <span aria-hidden="true" className="pt-0.5 text-brand">
                        ●
                      </span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-2 text-center text-sm font-bold text-gray-700 sm:grid-cols-2">
          <p className="border-y border-gray-200 py-3">土木施工管理技士２級</p>
          <p className="border-y border-gray-200 py-3">土木施工管理技士１級</p>
        </div>
        <p className="mt-16 text-center leading-7 text-gray-700">
          業務に必要な資格、スキル向上のための講習会費用など
          <br />
          必要な費用を会社が全額負担します。（条件あり）
        </p>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <SectionHeading>法面職人を体験してみませんか？</SectionHeading>
          <PageIntroduction>
            三気建設では、土木のこと、法面のことを より多くの方に知っていただきたく、
            見学や体験を随時行っています。
          </PageIntroduction>
          <div className="mx-auto mt-12 max-w-126">
            <img
              alt="法面職人の体験・見学会の様子"
              className="h-auto w-full object-cover"
              src={workshopImage}
            />
            <a
              className="mt-6 flex w-full items-center justify-center bg-brand px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-green-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
              href="https://docs.google.com/forms/d/e/1FAIpQLSes1qoynGsxrXOJspwUcN7Mu7CuL7zyIZB88DeEEDXUBTzwig/viewform"
              rel="noreferrer"
              target="_blank"
            >
              体験・見学に関するお問い合わせはこちら
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
