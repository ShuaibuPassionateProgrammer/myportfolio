export function SectionHeader({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-prose text-muted-foreground text-lg">
        {description}
      </p>
    </div>
  )
}