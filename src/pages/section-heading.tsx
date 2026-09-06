interface SectionHeadingProps {
  readonly children: string
  readonly size?: 'page' | 'section'
}

export function SectionHeading({ children, size = 'page' }: SectionHeadingProps) {
  const isSectionHeading = size === 'section'

  return (
    <h2
      className={`flex items-center gap-4 font-bold text-gray-800 ${isSectionHeading ? 'text-xl leading-8' : 'text-2xl leading-9'}`}
    >
      <span aria-hidden="true" className={`${isSectionHeading ? 'h-6' : 'h-7'} w-1 bg-brand`} />
      {children}
    </h2>
  )
}
