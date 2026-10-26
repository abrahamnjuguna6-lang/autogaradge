import { useState } from 'react'
import type { JourneySide } from '../data/content'

/** Which side of the deal "How it works" shows. Shared so the hero's "I'm selling" can set it. */
export function useJourneySide(initial: JourneySide = 'seller') {
  const [side, setSide] = useState<JourneySide>(initial)
  return { side, setSide }
}
