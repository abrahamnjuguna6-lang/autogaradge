import type { ProblemContent } from '../../data/content'
import { RoadSection } from '../layout/RoadSection'
import { SectionIntro } from '../ui/SectionIntro'

interface ProblemSectionProps {
  readonly content: ProblemContent
}

export function ProblemSection({ content }: ProblemSectionProps) {
  return (
    <RoadSection roadSide="left" className="min-h-[90svh]" contentClassName="max-w-140 gap-9">
      <SectionIntro eyebrow={content.eyebrow} title={content.title} />
      <ul>
        {content.rows.map((row) => (
          <li
            key={row.label}
            className="grid gap-2 border-t border-navy/15 py-5 last:border-b xs:grid-cols-[6.875rem_minmax(0,1fr)] xs:gap-4 dark:border-paper/15"
          >
            <span className="type-label pt-1 text-xs tracking-[0.08em] text-fog dark:text-steel">{row.label}</span>
            <p className="text-lg leading-snug text-pretty">{row.text}</p>
          </li>
        ))}
      </ul>
    </RoadSection>
  )
}
