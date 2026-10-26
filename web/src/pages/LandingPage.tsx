import { useRef } from 'react'
import { NavBar } from '../components/layout/NavBar'
import { RoadLayer } from '../components/road/RoadLayer'
import { HeroSection } from '../components/sections/HeroSection'
import { HowItWorksSection } from '../components/sections/HowItWorksSection'
import { ProblemSection } from '../components/sections/ProblemSection'
import { RequestSection } from '../components/sections/RequestSection'
import { VerificationSection } from '../components/sections/VerificationSection'
import type { SiteContent } from '../data/content'
import { useJourneySide } from '../hooks/useJourneySide'
import { useRoadRoute } from '../hooks/useRoadRoute'

interface LandingPageProps {
  readonly content: SiteContent
  readonly whatsappNumber: string
}

/** The one-page journey from seller to buyer. The road is drawn behind all five sections. */
export function LandingPage({ content, whatsappNumber }: LandingPageProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const { side, setSide } = useJourneySide()
  const road = useRoadRoute(rootRef, content.verification.levels.length)

  return (
    <div ref={rootRef} className="relative overflow-x-clip">
      <NavBar brand={content.brand} nav={content.nav} />
      <RoadLayer geometry={road.geometry} trailRef={road.trailRef} carRefs={road.carRefs} labels={content.road} />
      <main>
        <HeroSection content={content.hero} onSellerClick={() => setSide('seller')} />
        <ProblemSection content={content.problem} />
        <HowItWorksSection content={content.howItWorks} side={side} onSideChange={setSide} />
        <VerificationSection content={content.verification} litLevels={road.litLevels} />
        <RequestSection content={content.request} footer={content.footer} whatsappNumber={whatsappNumber} />
      </main>
    </div>
  )
}
