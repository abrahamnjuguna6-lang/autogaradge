import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, type RefObject } from 'react'

/** Wide screens split the road into two lanes. Keep in sync with --breakpoint-road in index.css. */
const ROAD_MEDIA = '(min-width: 51.25rem)'
const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'
/** On phones the road is a single lane this far from the left edge (content starts at 3.75rem). */
const NARROW_LANE_X = 26
/** Lane distance from the page centre, as a share of the page width (capped at MAX_WIDTH). */
const LANE_OFFSET = 0.32
const MAX_WIDTH = 1200
/** Share of the remaining distance the car covers each frame: lower is smoother and lazier. */
const EASE = 0.12

/** Which side of a section the road runs down; 'bridge' sections cover the road. */
export type RoadSide = 'left' | 'right' | 'bridge'

export interface RoadPoint {
  readonly x: number
  readonly y: number
}

export interface RoadGeometry {
  readonly d: string
  readonly width: number
  readonly height: number
  readonly seller: RoadPoint
  readonly buyer: RoadPoint
}

export interface CarRefs {
  readonly root: RefObject<HTMLDivElement | null>
  readonly body: RefObject<HTMLDivElement | null>
  readonly beam: RefObject<HTMLDivElement | null>
  readonly streaks: RefObject<HTMLDivElement | null>
}

interface Lane {
  readonly x: number
  readonly y0: number
  readonly y1: number
}

interface Motion {
  len: number
  range: readonly [number, number]
  bridge: readonly [number, number] | null
  cur: number
  goal: number
  frame: number
}

/** Joins vertical lanes into one path, with an S-curve between consecutive lanes. */
export function buildRoadPath(lanes: readonly Lane[]): string {
  let d = ''
  lanes.forEach((lane, i) => {
    const prev = lanes[i - 1]
    if (!prev) d += `M${lane.x},${lane.y0}`
    else {
      const mid = (prev.y1 + lane.y0) / 2
      d += ` C${prev.x},${mid} ${lane.x},${mid} ${lane.x},${lane.y0}`
    }
    d += ` L${lane.x},${lane.y1}`
  })
  return d
}

/**
 * Draws a road through every `[data-road-side]` section inside `rootRef` and drives a car along it
 * as the page scrolls. Also reports how many verification levels to light in the 'bridge' section.
 */
export function useRoadRoute(rootRef: RefObject<HTMLElement | null>, levelCount: number) {
  const trailRef = useRef<SVGPathElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const beamRef = useRef<HTMLDivElement>(null)
  const streaksRef = useRef<HTMLDivElement>(null)
  const motion = useRef<Motion>({ len: 0, range: [0, 0], bridge: null, cur: -1, goal: 0, frame: 0 })
  const [geometry, setGeometry] = useState<RoadGeometry | null>(null)
  const [litLevels, setLitLevels] = useState(0)

  // One animation frame: ease the car towards its goal and let speed drive the effects.
  const drive = useCallback(function step() {
    const m = motion.current
    const path = trailRef.current
    const car = carRef.current
    m.frame = 0
    if (!path || !car || !m.len) return

    const calm = window.matchMedia(REDUCED_MOTION).matches
    const prev = m.cur
    m.cur = calm ? m.goal : m.cur + (m.goal - m.cur) * EASE
    if (Math.abs(m.goal - m.cur) < 0.4) m.cur = m.goal
    const v = m.cur - prev
    const speed = calm ? 0 : Math.min(1, Math.abs(v) / 14)
    const moving = m.cur !== m.goal

    const a = Math.max(0, Math.min(m.cur, m.len - 2))
    const p1 = path.getPointAtLength(a)
    const p2 = path.getPointAtLength(a + 2)
    const pt = path.getPointAtLength(m.cur)
    const angle = (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI + 90
    car.style.transform = `translate(${pt.x}px, ${pt.y}px) rotate(${angle}deg)`
    car.dataset.light = !moving ? '' : v < -0.3 ? 'reverse' : v > 0.3 && m.goal - m.cur < 60 ? 'brake' : ''
    if (bodyRef.current) bodyRef.current.style.transform = `rotate(${Math.sin(performance.now() / 90) * speed * 2.5}deg)`
    if (streaksRef.current) streaksRef.current.style.opacity = String(v > 0 ? speed : 0)
    if (beamRef.current) beamRef.current.style.opacity = String(0.3 + speed * 0.5)
    path.style.strokeDasharray = String(m.len)
    path.style.strokeDashoffset = String(m.len - m.cur)

    if (moving) m.frame = requestAnimationFrame(step)
  }, [])

  // Scroll sets the goal: the point on the road level with the middle of the screen.
  const follow = useCallback(() => {
    const root = rootRef.current
    const path = trailRef.current
    const m = motion.current
    if (!root || !path || !m.len) return
    const ty = window.innerHeight / 2 - root.getBoundingClientRect().top

    if (m.bridge) {
      const [top, height] = m.bridge
      const lit = Math.ceil(((ty - top) / height) * (levelCount + 0.5) - 0.3)
      setLitLevels(Math.max(0, Math.min(levelCount, lit)))
    }

    // The road only ever runs downwards, so y increases with length: binary-search the length at y.
    const y = Math.min(m.range[1], Math.max(m.range[0], ty))
    let lo = 0
    let hi = m.len
    for (let i = 0; i < 22; i++) {
      const mid = (lo + hi) / 2
      if (path.getPointAtLength(mid).y < y) lo = mid
      else hi = mid
    }
    m.goal = lo
    if (m.cur < 0) m.cur = lo
    if (!m.frame) m.frame = requestAnimationFrame(drive)
  }, [rootRef, levelCount, drive])

  // Lay out one lane per section, alternating sides on wide screens and hugging the left edge on phones.
  const measure = useCallback(() => {
    const root = rootRef.current
    if (!root) return
    const width = root.offsetWidth
    const wide = window.matchMedia(ROAD_MEDIA).matches
    const centre = width / 2
    const offset = Math.min(width, MAX_WIDTH) * LANE_OFFSET
    const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-road-side]'))
    const lanes: Lane[] = []
    let bridge: readonly [number, number] | null = null

    sections.forEach((el, i) => {
      const side = el.dataset.roadSide as RoadSide
      const top = el.offsetTop
      const h = el.offsetHeight
      if (side === 'bridge') {
        bridge = [top, h]
        return
      }
      lanes.push({
        x: !wide ? NARROW_LANE_X : side === 'right' ? centre + offset : centre - offset,
        y0: i === 0 ? top + h * 0.34 : top + 90,
        y1: i === sections.length - 1 ? top + h * 0.42 : top + h - 90,
      })
    })

    const first = lanes[0]
    const last = lanes[lanes.length - 1]
    if (!first || !last) return
    motion.current.range = [first.y0, last.y1]
    motion.current.bridge = bridge
    setGeometry({
      d: buildRoadPath(lanes),
      width,
      height: root.offsetHeight,
      seller: { x: first.x, y: first.y0 },
      buyer: { x: last.x, y: last.y1 },
    })
  }, [rootRef])

  // A new road means a new length; place the car directly instead of driving from the old layout.
  useLayoutEffect(() => {
    const path = trailRef.current
    if (!geometry || !path) return
    motion.current.len = path.getTotalLength()
    motion.current.cur = -1
    follow()
  }, [geometry, follow])

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    const m = motion.current
    let alive = true
    const resize = new ResizeObserver(measure)
    const wideQuery = window.matchMedia(ROAD_MEDIA)
    resize.observe(root)
    wideQuery.addEventListener('change', measure)
    window.addEventListener('scroll', follow, { passive: true })
    // Web fonts change text heights, which moves the sections.
    void document.fonts.ready.then(() => {
      if (alive) measure()
    })
    return () => {
      alive = false
      resize.disconnect()
      wideQuery.removeEventListener('change', measure)
      window.removeEventListener('scroll', follow)
      cancelAnimationFrame(m.frame)
      m.frame = 0
    }
  }, [rootRef, measure, follow])

  const carRefs = useMemo<CarRefs>(() => ({ root: carRef, body: bodyRef, beam: beamRef, streaks: streaksRef }), [])

  return { geometry, trailRef, carRefs, litLevels }
}
