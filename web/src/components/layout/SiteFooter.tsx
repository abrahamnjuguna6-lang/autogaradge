import type { FooterContent } from '../../data/content'

interface SiteFooterProps {
  readonly content: FooterContent
}

export function SiteFooter({ content }: SiteFooterProps) {
  return (
    <footer className="page-gutter mx-auto mt-24 w-full max-w-300">
      <div className="flex flex-wrap justify-between gap-3 border-t border-navy/12 pt-6 font-mono text-xs tracking-[0.04em] text-fog dark:border-paper/12 dark:text-steel">
        <span>{content.copyright}</span>
        <span>{content.tagline}</span>
      </div>
    </footer>
  )
}
