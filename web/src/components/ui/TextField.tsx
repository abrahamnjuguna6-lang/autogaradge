import type { ComponentPropsWithoutRef } from 'react'
import { fieldControlClass, fieldLabelClass } from './fieldStyles'

interface TextFieldProps extends Readonly<Omit<ComponentPropsWithoutRef<'input'>, 'className'>> {
  readonly label: string
  /** Spans both columns of the form grid. */
  readonly wide?: boolean
}

export function TextField({ label, wide = false, ...input }: TextFieldProps) {
  return (
    <label className={`${fieldLabelClass} ${wide ? 'xs:col-span-2' : ''}`}>
      {label}
      <input className={fieldControlClass} {...input} />
    </label>
  )
}
