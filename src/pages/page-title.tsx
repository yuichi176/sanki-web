interface PageTitleProps {
  readonly children: string
}

export function PageTitle({ children }: PageTitleProps) {
  return <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{children}</h1>
}
