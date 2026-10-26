import type { ReactNode } from 'react'

interface EyebrowProps {
  readonly children: ReactNode
  /** 'auto' follows the page (dark gold on cream, pale gold at night); 'onNavy' is for the navy band. */
  readonly tone?: 'auto' | 'onNavy'
  /** Short gold rule before the text, used once in the hero. */
  readonly withRule?: boolean
}

/** Small mono label above a heading, e.g. "02 — How it works". */
export function Eyebrow({ children, tone = 'auto', withRule = false }: EyebrowProps) {
  const color = tone === 'onNavy' ? 'text-gold-pale dark:text-gold-pale' : 'text-gold-ink dark:text-gold-pale'
  const rule = withRule ? "flex items-center gap-3 before:h-0.5 before:w-7 before:shrink-0 before:bg-gold before:content-['']" : ''
  return <span className={`type-eyebrow ${color} ${rule}`}>{children}</span>
}
