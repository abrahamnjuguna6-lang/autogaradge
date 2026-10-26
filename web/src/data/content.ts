/** All page copy. Components receive their slice through props and hold no text of their own. */

export type JourneySide = 'seller' | 'buyer'

export interface CarRequest {
  readonly reference: string
  readonly car: string
  readonly budget: string
  readonly location: string
  readonly phone: string
}

export const siteContent = {
  brand: { name: 'AUTO', accent: 'BRIDGE', region: 'KENYA', href: '#top', label: 'AutoBridge Kenya, back to top' },

  nav: {
    label: 'Main',
    links: [
      { label: 'How it works', href: '#how' },
      { label: 'Verification', href: '#verified' },
    ],
    cta: { label: 'Find me a car', href: '#request' },
  },

  road: { seller: 'Seller', buyer: 'Buyer' },

  hero: {
    id: 'top',
    eyebrow: 'Connecting cars · Creating trust',
    titleLead: 'Every car has a buyer.',
    titleAccent: 'We build the road between them.',
    lead: 'AutoBridge connects people selling cars with people looking for one. We check the documents, line up the inspection and walk both sides through to handover.',
    primaryCta: { label: 'Find me a car', href: '#request' },
    sellerCta: { label: "I'm selling", href: '#how' },
    scrollHint: '↓ Scroll to follow the car from seller to buyer',
  },

  problem: {
    eyebrow: '01 — The problem',
    title: "Buying or selling a car shouldn't feel like a gamble.",
    rows: [
      { label: 'Sellers', text: 'You post the ad, then field calls from people who were never going to buy.' },
      { label: 'Buyers', text: 'Every listing looks good online. You only find out the truth after a long drive across town.' },
      { label: 'Paperwork', text: 'Ownership, payment and transfer are where deals go wrong, and nobody is there to keep it straight.' },
    ],
  },

  howItWorks: {
    id: 'how',
    eyebrow: '02 — How it works',
    title: 'One journey, two sides of the deal.',
    tabsLabel: 'Show the steps for',
    tabs: [
      { value: 'seller', label: "I'm selling" },
      { value: 'buyer', label: "I'm buying" },
    ],
    steps: {
      seller: [
        { title: 'List your car', body: 'Send us the registration, mileage, asking price and anything a buyer should know. We take the photos.' },
        { title: 'We check it', body: 'We confirm the documents and arrange an inspection, so buyers trust what they see.' },
        { title: 'We bring serious buyers', body: 'We match your car against buyers who have already told us their budget and what they want.' },
        { title: 'Handover, done properly', body: 'We coordinate viewings, the offer, the paperwork and the transfer until the keys change hands.' },
      ],
      buyer: [
        { title: 'Tell us what you want', body: 'Make, model, year, budget, location. Let us know if you need financing or a trade-in.' },
        { title: 'Get a shortlist', body: 'We send cars that fit, and each one shows how far it has been checked.' },
        { title: 'View and inspect', body: 'We set up viewings and an independent inspection if you want one, then help you negotiate.' },
        { title: 'Drive away', body: 'We handle the documents and ownership transfer, and can connect you with insurance and transport.' },
      ],
    },
  },

  verification: {
    id: 'verified',
    eyebrow: '03 — Verification',
    title: 'Crossing the bridge: four levels of checked.',
    intro: "Every listing shows its level. You always know what we've checked and what we haven't.",
    levelLabel: 'Level',
    levels: [
      { title: 'Listed', body: "Details come from the seller and haven't been checked yet." },
      { title: 'Document Verified', body: "We've checked the ownership and vehicle documents against the seller." },
      { title: 'Mechanically Inspected', body: 'An inspector has looked the car over. You get the report and the date.' },
      { title: 'AutoBridge Verified', body: 'Documents, seller and inspection all checked, with a certificate listing exactly what was covered.' },
    ],
    disclaimer:
      "Verified tells you which checks we did. It is not a promise that the car has no faults, so we always list what was and wasn't covered.",
  },

  request: {
    id: 'request',
    eyebrow: "04 — You've arrived",
    title: "Tell us the car. We'll find it.",
    lead: "Share what you're after. We'll come back with a shortlist and tell you how far each car has been checked.",
    form: {
      car: { label: 'Make & model', placeholder: 'e.g. Toyota Prado, 2016 or newer' },
      budget: { label: 'Budget', options: ['Under KSh 1M', 'KSh 1M – 3M', 'KSh 3M – 5M', 'Above KSh 5M'] },
      location: { label: 'Location', placeholder: 'Nairobi' },
      phone: { label: 'Phone / WhatsApp', placeholder: '+254 7XX XXX XXX' },
      submit: 'Find me a car',
    },
    message: (r: CarRequest) =>
      `Hi AutoBridge, car request ${r.reference}.\nCar: ${r.car}\nBudget: ${r.budget}\nLocation: ${r.location || '-'}\nPhone: ${r.phone}`,
    confirmation: {
      referencePrefix: 'Request',
      title: "Got it. We're on the road.",
      followUp: (phone: string, car: string) => `We'll reach out on ${phone} with your shortlist for ${car}.`,
      whatsappNote: 'Your request opened in WhatsApp. Press send there so it reaches us.',
      reopen: 'Open it again',
      again: 'Send another request',
    },
  },

  footer: { copyright: '© 2026 AutoBridge Kenya · Nairobi', tagline: 'Connecting Cars. Creating Trust.' },
} as const

export type SiteContent = typeof siteContent
export type BrandContent = SiteContent['brand']
export type NavContent = SiteContent['nav']
export type RoadContent = SiteContent['road']
export type HeroContent = SiteContent['hero']
export type ProblemContent = SiteContent['problem']
export type HowItWorksContent = SiteContent['howItWorks']
export type VerificationContent = SiteContent['verification']
export type RequestContent = SiteContent['request']
export type RequestFormContent = RequestContent['form']
export type ConfirmationContent = RequestContent['confirmation']
export type FooterContent = SiteContent['footer']
