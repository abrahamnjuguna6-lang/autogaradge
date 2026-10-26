import type { ComponentPropsWithoutRef } from 'react'
import { buttonClasses, type ButtonSize, type ButtonVariant } from '../../lib/buttonStyles'

interface ButtonProps extends Readonly<ComponentPropsWithoutRef<'button'>> {
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
}

export function Button({ variant = 'primary', size = 'md', className = '', type = 'button', ...props }: ButtonProps) {
  return <button type={type} className={buttonClasses(variant, size, className)} {...props} />
}
