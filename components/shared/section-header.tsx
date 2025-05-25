import React from "react"

interface SectionHeaderProps {
  title: string
  description: string
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  const headingId = `${title.replace(/\s+/g, '-').toLowerCase()}-heading`
  return (
    <div
      className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
      role="region"
      aria-labelledby={headingId}
    >
      <h2
        id={headingId}
        className="text-3xl font-bold tracking-tight sm:text-4xl"
      >
        {title}
      </h2>
      <p className="max-w-prose text-muted-foreground text-lg">
        {description}
      </p>
    </div>
  )
}