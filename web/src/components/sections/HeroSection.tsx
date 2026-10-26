import type { HeroContent } from '../../data/content'
import { RoadSection } from '../layout/RoadSection'
import { ButtonLink } from '../ui/ButtonLink'
import { Eyebrow } from '../ui/Eyebrow'

interface HeroSectionProps {
  readonly content: HeroContent
  /** "I'm selling" jumps to How it works and switches it to the seller steps. */
  readonly onSellerClick: () => void
}

export function HeroSection({ content, onSellerClick }: HeroSectionProps) {
  return (
    <RoadSection id={content.id} roadSide="right" className="pt-30 pb-20" contentClassName="max-w-155 gap-7">
      <Eyebrow withRule>{content.eyebrow}</Eyebrow>
      <h1 className="type-display">
        {content.titleLead} <span className="text-gold">{content.titleAccent}</span>
      </h1>
      <p className="type-lead max-w-125 text-ink dark:text-mist">{content.lead}</p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href={content.primaryCta.href}>{content.primaryCta.label}</ButtonLink>
        <ButtonLink href={content.sellerCta.href} variant="outline" onClick={onSellerClick}>
          {content.sellerCta.label}
        </ButtonLink>
      </div>
      <span className="font-mono text-xs tracking-[0.06em] text-fog dark:text-steel">{content.scrollHint}</span>
    </RoadSection>
  )
}
