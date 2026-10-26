interface Step {
  readonly title: string
  readonly body: string
}

interface StepListProps {
  readonly steps: readonly Step[]
}

/** Numbered steps separated by hairlines. Fades in when its content changes (remount with a new key). */
export function StepList({ steps }: StepListProps) {
  return (
    <ol className="motion-safe:animate-fade-in">
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 border-t border-navy/15 py-5.5 xs:grid-cols-[3.5rem_minmax(0,1fr)] xs:gap-4 dark:border-paper/15"
        >
          <span aria-hidden="true" className="text-[1.75rem] leading-none font-semibold text-gold font-stretch-115%">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className="mb-1.5 text-xl font-bold tracking-[-0.01em]">{step.title}</h3>
            <p className="text-base leading-normal text-pretty text-ink dark:text-mist">{step.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
