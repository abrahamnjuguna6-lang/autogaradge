interface SegmentedOption<T extends string> {
  readonly value: T
  readonly label: string
}

interface SegmentedTabsProps<T extends string> {
  /** Accessible name for the group, e.g. "Show the steps for". */
  readonly label: string
  readonly options: readonly SegmentedOption<T>[]
  readonly value: T
  readonly onChange: (value: T) => void
}

/** Pill-shaped toggle between a few options; the active one is a solid pill. */
export function SegmentedTabs<T extends string>({ label, options, value, onChange }: SegmentedTabsProps<T>) {
  return (
    <fieldset className="m-0 mt-2 flex min-w-0 gap-1 self-start rounded-full border-0 bg-navy/6 p-1 dark:bg-paper/10">
      <legend className="sr-only">{label}</legend>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
          className="cursor-pointer rounded-full px-4 py-2.5 text-sm font-semibold text-navy transition-colors duration-200 not-aria-pressed:hover:bg-navy/8 aria-pressed:bg-navy aria-pressed:text-paper xs:px-4.5 dark:text-paper dark:not-aria-pressed:hover:bg-paper/10 dark:aria-pressed:bg-paper dark:aria-pressed:text-navy"
        >
          {option.label}
        </button>
      ))}
    </fieldset>
  )
}
