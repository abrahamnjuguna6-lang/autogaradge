import type { BrandContent, NavContent } from '../../data/content'
import { ButtonLink } from '../ui/ButtonLink'

interface NavBarProps {
  readonly brand: BrandContent
  readonly nav: NavContent
}

/** Fixed, frosted top bar. Phones keep only the wordmark and the call to action. */
export function NavBar({ brand, nav }: NavBarProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-20 border-b border-navy/8 bg-paper/86 backdrop-blur-md dark:border-paper/10 dark:bg-night/85">
      <nav aria-label={nav.label} className="flex items-center justify-between gap-4 px-4 py-3.5 xs:page-gutter">
        <a href={brand.href} aria-label={brand.label} className="flex items-baseline gap-2 text-navy hover:text-navy dark:text-paper">
          <span className="type-wordmark">
            {brand.name}
            <span className="text-gold">{brand.accent}</span>
          </span>
          <span aria-hidden="true" className="hidden font-mono text-[0.625rem] font-semibold tracking-[0.3em] opacity-70 xs:inline">
            {brand.region}
          </span>
        </a>
        <div className="flex items-center gap-[clamp(0.875rem,3vw,2rem)] text-sm font-medium">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hidden text-navy transition-colors duration-200 hover:text-gold-ink sm:inline dark:text-paper dark:hover:text-gold-pale"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href={nav.cta.href} size="sm">
            {nav.cta.label}
          </ButtonLink>
        </div>
      </nav>
    </header>
  )
}
