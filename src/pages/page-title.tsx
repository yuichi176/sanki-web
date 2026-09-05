interface PageTitleProps {
  readonly children: string
}

export function PageTitle({ children }: PageTitleProps) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{children}</h1>
    </main>
  )
}
