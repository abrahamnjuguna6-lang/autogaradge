import type { FooterContent, RequestContent } from '../../data/content'
import { useCarRequest } from '../../hooks/useCarRequest'
import { RoadSection } from '../layout/RoadSection'
import { SiteFooter } from '../layout/SiteFooter'
import { RequestConfirmation } from '../request/RequestConfirmation'
import { RequestForm } from '../request/RequestForm'
import { SectionIntro } from '../ui/SectionIntro'

interface RequestSectionProps {
  readonly content: RequestContent
  readonly footer: FooterContent
  readonly whatsappNumber: string
}

/** The destination: the car request form, its confirmation, and the footer. */
export function RequestSection({ content, footer, whatsappNumber }: RequestSectionProps) {
  const { request, isRepeat, submit, reset } = useCarRequest(whatsappNumber, content.message)

  return (
    <RoadSection
      id={content.id}
      roadSide="left"
      className="pt-25 pb-10"
      contentClassName="max-w-135 gap-7"
      trailing={<SiteFooter content={footer} />}
    >
      <SectionIntro eyebrow={content.eyebrow} title={content.title} size="lg">
        <p className="text-[1.0625rem] leading-normal text-pretty text-ink dark:text-mist">{content.lead}</p>
      </SectionIntro>
      {request ? (
        <RequestConfirmation content={content.confirmation} request={request} onReset={reset} />
      ) : (
        <RequestForm content={content.form} onSubmit={submit} focusOnMount={isRepeat} />
      )}
    </RoadSection>
  )
}
