interface SectionHeadingProps {
  readonly children: string
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="flex items-center gap-4 text-2xl leading-9 font-bold text-gray-800">
      <span aria-hidden="true" className="h-7 w-1 bg-brand" />
      {children}
    </h2>
  )
}
