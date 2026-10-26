import type { ReactNode } from 'react'

interface RoadSectionProps {
  readonly id?: string
  /** The side the road runs down. Content sits on the other side so the two never overlap. */
  readonly roadSide: 'left' | 'right'
  /** Max width (and any extra layout) for the content column. */
  readonly contentClassName: string
  /** Section-level spacing overrides, e.g. extra top padding under the nav. */
  readonly className?: string
  readonly children: ReactNode
  /** Rendered after the content column at full width, e.g. the footer. */
  readonly trailing?: ReactNode
}

/** A full-height chapter of the journey. The road hook finds it through `data-road-side`. */
export function RoadSection({ id, roadSide, contentClassName, className = '', children, trailing }: RoadSectionProps) {
  return (
    <section
      id={id}
      data-road-side={roadSide}
      className={`relative z-1 flex min-h-svh flex-col justify-center py-20 ${className}`}
    >
      <div className="road-gutter mx-auto flex w-full max-w-300">
        <div className={`flex w-full flex-col ${roadSide === 'left' ? 'road:ml-auto' : ''} ${contentClassName}`}>{children}</div>
      </div>
      {trailing}
    </section>
  )
}
