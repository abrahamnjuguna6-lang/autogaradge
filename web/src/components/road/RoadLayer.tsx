import type { RefObject } from 'react'
import type { RoadContent } from '../../data/content'
import type { CarRefs, RoadGeometry } from '../../hooks/useRoadRoute'
import { RoadCar } from './RoadCar'
import { RoutePin } from './RoutePin'

interface RoadLayerProps {
  readonly geometry: RoadGeometry | null
  readonly trailRef: RefObject<SVGPathElement | null>
  readonly carRefs: CarRefs
  readonly labels: RoadContent
}

/** The road behind the page: soft surface, dashed centre line, gold trail, pins and the car. */
export function RoadLayer({ geometry, trailRef, carRefs, labels }: RoadLayerProps) {
  if (!geometry) return null
  return (
    <>
      <svg
        aria-hidden="true"
        width={geometry.width}
        height={geometry.height}
        className="pointer-events-none absolute top-0 left-0 z-0 overflow-visible"
      >
        <path d={geometry.d} className="fill-none stroke-navy/10 dark:stroke-paper/10" strokeWidth={22} strokeLinecap="round" />
        <path
          d={geometry.d}
          className="fill-none stroke-navy/35 dark:stroke-paper/30"
          strokeWidth={1.5}
          strokeDasharray="2 10"
          strokeLinecap="round"
        />
        <path ref={trailRef} d={geometry.d} className="fill-none stroke-gold dark:stroke-gold" strokeWidth={3} strokeLinecap="round" />
      </svg>
      <RoutePin label={labels.seller} at={geometry.seller} variant="seller" />
      <RoutePin label={labels.buyer} at={geometry.buyer} variant="buyer" />
      <RoadCar refs={carRefs} />
    </>
  )
}
