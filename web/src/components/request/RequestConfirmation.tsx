import { useEffect, useRef } from 'react'
import type { ConfirmationContent } from '../../data/content'
import type { SubmittedRequest } from '../../hooks/useCarRequest'
import { Button } from '../ui/Button'

interface RequestConfirmationProps {
  readonly content: ConfirmationContent
  readonly request: SubmittedRequest
  readonly onReset: () => void
}

/** Replaces the form after submitting. Takes focus so screen readers announce it. */
export function RequestConfirmation({ content, request, onReset }: RequestConfirmationProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    cardRef.current?.focus()
  }, [])

  return (
    <div
      ref={cardRef}
      tabIndex={-1}
      aria-live="polite"
      className="flex flex-col gap-3 rounded-2xl bg-navy p-6 text-paper outline-none motion-safe:animate-fade-in xs:p-7 dark:bg-navy-2 dark:text-paper"
    >
      <span className="type-label text-xs tracking-[0.12em] text-gold-pale dark:text-gold-pale">
        {content.referencePrefix} {request.reference}
      </span>
      <strong className="text-2xl font-bold tracking-[-0.01em]">{content.title}</strong>
      <p className="text-base leading-normal text-mist dark:text-mist">{content.followUp(request.phone, request.car)}</p>
      <p className="text-base leading-normal text-mist dark:text-mist">
        {content.whatsappNote}{' '}
        <a
          href={request.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold-pale underline underline-offset-2 hover:text-paper dark:text-gold-pale dark:hover:text-paper"
        >
          {content.reopen}
        </a>
      </p>
      <Button variant="ghost" size="sm" onClick={onReset} className="mt-2 self-start">
        {content.again}
      </Button>
    </div>
  )
}
