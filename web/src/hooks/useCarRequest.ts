import { useCallback, useState } from 'react'
import type { CarRequest } from '../data/content'
import { buildWhatsAppUrl, createReference } from '../lib/whatsapp'

export interface SubmittedRequest extends CarRequest {
  readonly whatsappUrl: string
}

function text(data: FormData, name: string): string {
  const value = data.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

/**
 * Turns the request form into a prefilled WhatsApp message, opens it, and remembers the request
 * so the page can show a confirmation.
 */
export function useCarRequest(whatsappNumber: string, formatMessage: (request: CarRequest) => string) {
  const [request, setRequest] = useState<SubmittedRequest | null>(null)
  const [isRepeat, setIsRepeat] = useState(false)

  const submit = useCallback(
    (data: FormData) => {
      const details: CarRequest = {
        reference: createReference(),
        car: text(data, 'car'),
        budget: text(data, 'budget'),
        location: text(data, 'location'),
        phone: text(data, 'phone'),
      }
      const whatsappUrl = buildWhatsAppUrl(whatsappNumber, formatMessage(details))
      window.open(whatsappUrl, '_blank', 'noopener')
      setRequest({ ...details, whatsappUrl })
    },
    [whatsappNumber, formatMessage],
  )

  const reset = useCallback(() => {
    setRequest(null)
    setIsRepeat(true)
  }, [])

  return { request, isRepeat, submit, reset }
}
