import type { ComponentPropsWithoutRef } from 'react'
import { buttonClasses, type ButtonSize, type ButtonVariant } from '../../lib/buttonStyles'

interface ButtonLinkProps extends Readonly<ComponentPropsWithoutRef<'a'>> {
  readonly variant?: ButtonVariant
  readonly size?: ButtonSize
}

/** A link styled as a pill button. */
export function ButtonLink({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  )
}
