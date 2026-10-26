import type { RoadPoint } from '../../hooks/useRoadRoute'

interface RoutePinProps {
  readonly label: string
  readonly at: RoadPoint
  /** The seller pin sits above the start of the road; the buyer pin hangs below its end. */
  readonly variant: 'seller' | 'buyer'
}

const tagColors = {
  seller: 'bg-navy text-paper dark:bg-paper dark:text-navy',
  buyer: 'bg-gold text-navy dark:bg-gold dark:text-navy',
}
const tickColors = {
  seller: 'bg-navy dark:bg-paper',
  buyer: 'bg-gold dark:bg-gold',
}

/** Start/end marker on the road. On phones the tag runs vertically so it stays inside the lane. */
export function RoutePin({ label, at, variant }: RoutePinProps) {
  const tag = (
    <span className={`rounded-sm px-2.5 py-1.5 type-label tracking-[0.12em] max-road:px-1 max-road:py-2 max-road:[writing-mode:vertical-rl] ${tagColors[variant]}`}>
      {label}
    </span>
  )
  const tick = <span className={`h-3 w-0.5 ${tickColors[variant]}`} />

  return (
    <div
      data-road-pin={variant}
      aria-hidden="true"
      style={{ left: at.x, top: at.y }}
      className={`pointer-events-none absolute z-1 flex -translate-x-1/2 flex-col items-center gap-1.5 ${
        variant === 'seller' ? '-mt-5.5 -translate-y-full' : 'mt-5.5'
      }`}
    >
      {variant === 'seller' ? (
        <>
          {tag}
          {tick}
        </>
      ) : (
        <>
          {tick}
          {tag}
        </>
      )}
    </div>
  )
}
