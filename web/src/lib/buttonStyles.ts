export type ButtonVariant = 'primary' | 'outline' | 'accent' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'block'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-200 cursor-pointer'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-navy text-paper hover:bg-gold hover:text-navy dark:bg-paper dark:text-navy dark:hover:bg-gold dark:hover:text-navy',
  outline:
    'border-[1.5px] border-navy text-navy hover:border-gold hover:text-gold-ink dark:border-paper dark:text-paper dark:hover:border-gold-pale dark:hover:text-gold-pale',
  accent: 'bg-gold text-navy hover:bg-navy hover:text-paper dark:bg-gold dark:text-navy dark:hover:bg-paper dark:hover:text-navy',
  ghost:
    'border border-paper/30 text-paper hover:border-gold-pale hover:text-gold-pale dark:border-paper/30 dark:text-paper dark:hover:border-gold-pale dark:hover:text-gold-pale',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2.5 text-sm',
  md: 'px-6 py-4 text-base',
  block: 'w-full px-6 py-4 text-base',
}

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', extra = ''): string {
  return [base, variants[variant], sizes[size], extra].filter(Boolean).join(' ')
}
