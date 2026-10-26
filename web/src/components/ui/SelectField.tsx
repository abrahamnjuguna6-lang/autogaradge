import type { ComponentPropsWithoutRef } from 'react'
import { fieldControlClass, fieldLabelClass } from './fieldStyles'

interface SelectFieldProps extends Readonly<Omit<ComponentPropsWithoutRef<'select'>, 'className' | 'children'>> {
  readonly label: string
  readonly options: readonly string[]
}

export function SelectField({ label, options, ...select }: SelectFieldProps) {
  return (
    <label className={fieldLabelClass}>
      {label}
      <select className={`${fieldControlClass} pr-2.5`} {...select}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  )
}
