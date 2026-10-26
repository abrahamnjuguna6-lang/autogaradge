interface LevelCardProps {
  readonly label: string
  readonly title: string
  readonly body: string
  /** The bar turns gold once the visitor has scrolled this far into the section. */
  readonly lit: boolean
}

/** One verification level on the navy band. */
export function LevelCard({ label, title, body, lit }: LevelCardProps) {
  return (
    <li data-lit={lit || undefined} className="flex flex-col gap-3.5">
      <span
        aria-hidden="true"
        className={`h-1 rounded-sm transition-colors duration-500 ${lit ? 'bg-gold dark:bg-gold' : 'bg-paper/15 dark:bg-paper/15'}`}
      />
      <span className="type-label text-xs text-gold-pale dark:text-gold-pale">{label}</span>
      <h3 className="text-[1.375rem] leading-tight font-bold">{title}</h3>
      <p className="text-[0.9375rem] leading-normal text-pretty text-mist dark:text-mist">{body}</p>
    </li>
  )
}
