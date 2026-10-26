import type { CarRefs } from '../../hooks/useRoadRoute'

interface RoadCarProps {
  /** The road hook moves and lights the car through these refs, outside React renders. */
  readonly refs: CarRefs
}

const tyres = [
  { x: -3, y: 8 },
  { x: 27, y: 8 },
  { x: -3, y: 35 },
  { x: 27, y: 35 },
]

// The hook sets data-light="brake" | "reverse" on the car; tail lights react through the group.
const tailLight =
  'absolute bottom-px h-[3px] w-1.5 rounded-[1px] bg-tail transition-[background-color,box-shadow] duration-150 group-data-[light=brake]:bg-brake group-data-[light=brake]:shadow-[0_0_10px_3px_var(--color-brake)] group-data-[light=reverse]:bg-reverse group-data-[light=reverse]:shadow-[0_0_10px_3px_var(--color-reverse)]'
const headLight = 'absolute top-px h-1 w-[7px] rounded-sm bg-headlight shadow-[0_0_8px_2px_var(--color-headlight)]'

/** Top-down car, front at the top. Beams, speed streaks and lights react to how fast it drives. */
export function RoadCar({ refs }: RoadCarProps) {
  const { root, beam, streaks, body } = refs
  return (
    <div
      ref={root}
      data-road-car
      aria-hidden="true"
      className="group pointer-events-none absolute top-0 left-0 z-2 -mt-[27px] -ml-[15px] h-[54px] w-[30px] will-change-transform"
    >
      <div
        ref={beam}
        className="absolute -inset-x-2 bottom-full h-12 bg-linear-to-t from-headlight/60 to-headlight/0 opacity-30 [clip-path:polygon(24%_100%,76%_100%,100%_0,0_0)]"
      />
      <div
        ref={streaks}
        className="absolute inset-x-[3px] top-full h-9 bg-[repeating-linear-gradient(90deg,var(--color-gold)_0_2px,transparent_2px_6px)] opacity-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"
      />
      <div ref={body} className="absolute inset-0 drop-shadow-[0_6px_8px_rgb(11_33_71/0.28)]">
        <svg viewBox="0 0 30 54" className="absolute inset-0 size-full overflow-visible">
          {tyres.map((t) => (
            <rect key={`${t.x}-${t.y}`} x={t.x} y={t.y} width={6} height={11} rx={2} className="fill-tyre" />
          ))}
          <rect width={30} height={54} rx={10} className="fill-gold" />
          <rect x={5} y={12} width={20} height={9} rx={3} className="fill-navy" />
          <rect x={5} y={40} width={20} height={6} rx={2} className="fill-navy-2" />
          <rect x={13} y={22} width={4} height={17} rx={2} className="fill-navy opacity-35" />
        </svg>
        <span className={`${headLight} left-[3px]`} />
        <span className={`${headLight} right-[3px]`} />
        <span className={`${tailLight} left-1`} />
        <span className={`${tailLight} right-1`} />
      </div>
    </div>
  )
}
