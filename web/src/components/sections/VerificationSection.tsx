import type { VerificationContent } from '../../data/content'
import { LevelCard } from '../ui/LevelCard'
import { SectionIntro } from '../ui/SectionIntro'

interface VerificationSectionProps {
  readonly content: VerificationContent
  /** How many level bars are lit, driven by scroll position. */
  readonly litLevels: number
}

/** The navy "bridge" band. It sits above the road, so the car passes underneath it. */
export function VerificationSection({ content, litLevels }: VerificationSectionProps) {
  return (
    <section
      id={content.id}
      data-road-side="bridge"
      className="relative z-3 border-t-[3px] border-gold bg-navy py-[clamp(5rem,12vh,8.75rem)] text-paper dark:border-gold dark:bg-navy dark:text-paper"
    >
      <div className="page-gutter mx-auto flex w-full max-w-300 flex-col gap-12 sm:gap-14">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-155">
            <SectionIntro eyebrow={content.eyebrow} title={content.title} tone="onNavy" />
          </div>
          <p className="max-w-90 text-base leading-normal text-pretty text-mist dark:text-mist">{content.intro}</p>
        </div>
        <ol className="grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {content.levels.map((level, i) => (
            <LevelCard
              key={level.title}
              label={`${content.levelLabel} ${i + 1}`}
              title={level.title}
              body={level.body}
              lit={i < litLevels}
            />
          ))}
        </ol>
        <p className="max-w-190 border-t border-paper/15 pt-6 font-mono text-[0.8125rem] leading-relaxed text-steel dark:border-paper/15 dark:text-steel">
          {content.disclaimer}
        </p>
      </div>
    </section>
  )
}
