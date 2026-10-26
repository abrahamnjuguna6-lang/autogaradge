import type { ReactNode } from 'react'
import { Eyebrow } from './Eyebrow'

interface SectionIntroProps {
  readonly eyebrow: string
  readonly title: string
  readonly tone?: 'auto' | 'onNavy'
  readonly size?: 'md' | 'lg'
  /** Anything that belongs to the heading block, such as a lead paragraph or tabs. */
  readonly children?: ReactNode
}

/** Eyebrow + section heading, the opening of every section after the hero. */
export function SectionIntro({ eyebrow, title, tone = 'auto', size = 'md', children }: SectionIntroProps) {
  return (
    <div className="flex flex-col gap-4">
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2 className={size === 'lg' ? 'type-headline-lg' : 'type-headline'}>{title}</h2>
      {children}
    </div>
  )
}
