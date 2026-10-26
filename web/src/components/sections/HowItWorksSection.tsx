import type { HowItWorksContent, JourneySide } from '../../data/content'
import { RoadSection } from '../layout/RoadSection'
import { SectionIntro } from '../ui/SectionIntro'
import { SegmentedTabs } from '../ui/SegmentedTabs'
import { StepList } from '../ui/StepList'

interface HowItWorksSectionProps {
  readonly content: HowItWorksContent
  readonly side: JourneySide
  readonly onSideChange: (side: JourneySide) => void
}

export function HowItWorksSection({ content, side, onSideChange }: HowItWorksSectionProps) {
  return (
    <RoadSection id={content.id} roadSide="right" contentClassName="max-w-160 gap-9">
      <SectionIntro eyebrow={content.eyebrow} title={content.title}>
        <SegmentedTabs label={content.tabsLabel} options={content.tabs} value={side} onChange={onSideChange} />
      </SectionIntro>
      {/* A new key remounts the list so the swapped steps fade in. */}
      <StepList key={side} steps={content.steps[side]} />
    </RoadSection>
  )
}
