interface PageTitleProps {
  readonly children: string
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{children}</h1>
    </div>
  )
}
