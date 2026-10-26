import { useEffect, useRef, type ComponentProps } from 'react'
import type { RequestFormContent } from '../../data/content'
import { Button } from '../ui/Button'
import { SelectField } from '../ui/SelectField'
import { TextField } from '../ui/TextField'

interface RequestFormProps {
  readonly content: RequestFormContent
  readonly onSubmit: (data: FormData) => void
  /** Focus the first field, used when the visitor comes back to send another request. */
  readonly focusOnMount?: boolean
}

export function RequestForm({ content, onSubmit, focusOnMount = false }: RequestFormProps) {
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!focusOnMount) return
    const first = formRef.current?.elements.namedItem('car')
    if (first instanceof HTMLInputElement) first.focus()
  }, [focusOnMount])

  const handleSubmit: ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()
    onSubmit(new FormData(event.currentTarget))
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-3.5 rounded-2xl border border-navy/10 bg-card p-5 shadow-card xs:grid-cols-2 xs:p-6 dark:border-paper/10 dark:bg-night-2 dark:shadow-none"
    >
      <TextField wide name="car" required autoComplete="off" label={content.car.label} placeholder={content.car.placeholder} />
      <SelectField name="budget" label={content.budget.label} options={content.budget.options} />
      <TextField name="location" autoComplete="address-level2" label={content.location.label} placeholder={content.location.placeholder} />
      <TextField
        wide
        name="phone"
        type="tel"
        required
        autoComplete="tel"
        inputMode="tel"
        label={content.phone.label}
        placeholder={content.phone.placeholder}
      />
      <Button type="submit" variant="accent" size="block" className="mt-1.5 xs:col-span-2">
        {content.submit}
      </Button>
    </form>
  )
}
