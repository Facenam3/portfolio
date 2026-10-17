import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  className?: string
  children: ReactNode
}

export function Section({ id, className = '', children }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-28 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-5xl px-6">{children}</div>
    </section>
  )
}
