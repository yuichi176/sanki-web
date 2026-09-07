import gattenderUnitImage from './assets/gattender-unit.webp'
import { SectionHeading } from '../section-heading'

const features: readonly string[] = [
  '複雑な型枠に代えて簡易な組立枠（ガッテンダー）を使用するため、地山のならし作業をほとんど必要とせず、地山の凹凸に沿った施工ができます。',
  '直接、地山にモルタルを吹付けるので、地山との密着性に優れ、基礎コンクリートを必要としません。',
  '地山にのり枠が密着し、断面形状が欠円形であるため、表面水の排水性に優れ、枠内の滞水を防ぎます。',
  '枠は縦横に連続しているため、地山表層の剥落に対して抵抗力を持っています。',
  '組立枠（ガッテンダー）を用いることにより、鉄筋が適正な位置に保持され、かつ正確な断面形状が確保できるため、安定した品質ののり枠が形成できます。',
  '優れた生育基盤材料と強固な緑化基礎工とにより、長期間安定した緑化をはかることができます。',
  '資材が軽量で設置が容易なため、施工性、経済性に優れています。',
  '標準以外の枠スパンへの対応が容易です。',
]

export function SoilcretePage() {
  return (
    <main>
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10 lg:py-14">
          <h1 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
            <span aria-hidden="true" className="h-7 w-1 bg-brand" />
            ソイルクリート工法
          </h1>
          <p className="mt-3 pl-5 text-sm leading-5 text-gray-600 lg:text-base">
            型枠を使用しない現場打ち法枠工法で、コスト・工期・品質に優れた効果を発揮します。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <SectionHeading size="section">ソイルクリート工法とは</SectionHeading>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,732px)_420px] lg:gap-12">
          <div>
            <p className="leading-7 text-gray-800">
              「ソイルクリート工法」は、吹付法枠工法の中でも複雑な型枠を使用しない簡易吹付法枠工法です。しかも、従来の工法に比べ、コスト・工期・景観保全等において優れた効果を発揮します。
            </p>
            <p className="mt-4 leading-7 text-gray-800">
              ソイルクリート（Aタイプ・Mタイプ）は、組立枠「ガッテンダー」により、鉄筋位置が適切な位置に保持でき、かつ正確な断面形状が確保され、品質の高い法枠が形成できます。
            </p>
            <dl className="mt-10 space-y-2 text-sm leading-[22px] lg:mt-12">
              <div className="grid gap-1 sm:grid-cols-[68px_1fr] sm:gap-4">
                <dt className="font-bold text-green-800">適用箇所</dt>
                <dd className="text-neutral-950">
                  亀裂の多い岩盤法面や、早期に保護する必要がある法面等に用いる。
                </dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[68px_1fr] sm:gap-4">
                <dt className="font-bold text-green-800">適用目的</dt>
                <dd className="text-neutral-950">
                  法面表層部の崩落防止、多少の土圧を受けるおそれのある箇所の土留め、岩盤はく落防止
                </dd>
              </div>
            </dl>
          </div>
          <figure>
            <img
              alt="ガッテンダーユニット設置状況"
              className="aspect-[14/9] w-full rounded object-cover"
              src={gattenderUnitImage}
            />
            <figcaption className="mt-2 text-center text-xs text-gray-700">
              ガッテンダーユニット設置状況
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <SectionHeading size="section">ソイルクリート工法 特長</SectionHeading>
          <ul className="mt-8 border-t border-gray-200">
            {features.map((feature) => (
              <li
                className="flex gap-4 border-b border-gray-200 py-[18px]  leading-[26px] text-gray-800"
                key={feature}
              >
                <span aria-hidden="true" className="pt-1 text-base leading-6 text-brand">
                  ●
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
