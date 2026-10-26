# AutoBridge Kenya — website

React 19 + Vite + Tailwind CSS 4 landing page for AutoBridge Kenya, following the design system in `../DESIGN.md`.

## Run it

```bash
npm install
npm run dev        # local dev server with hot reload
npm run build      # type-check and build to dist/
npm run preview    # serve the production build
npm run check      # type-check, lint, and the Stitch component validator
```

## Configure

Copy `.env.example` to `.env` and set the WhatsApp number that every chat link and car request goes to:

```
VITE_WHATSAPP_NUMBER=2547XXXXXXXX
```

Until it is set, the site uses the placeholder `254700000000`.

## Where things live

| Path | What it holds |
|---|---|
| `src/data/content.ts` | All page copy. Change wording here, not in components. |
| `src/index.css` | Design tokens (colours, fonts, breakpoints, shadows) and type roles (`type-display`, `type-headline`, `type-eyebrow`…). |
| `src/pages/LandingPage.tsx` | Puts the five sections and the road together. |
| `src/components/sections/` | Hero, The problem, How it works, Verification, Request. |
| `src/components/road/` | The road, the SELLER/BUYER pins and the car. |
| `src/components/ui/`, `layout/`, `request/` | Buttons, labels, tabs, fields, nav, footer, form and confirmation. |
| `src/hooks/useRoadRoute.ts` | Draws the road through the sections and drives the car as you scroll. |
| `src/hooks/useCarRequest.ts` | Turns the form into a prefilled WhatsApp message. |
| `scripts/validate.js` | Google Stitch's component validator (Props interface present, no raw hex colours). |

## Notes

- The page follows the visitor's light/dark setting.
- With "reduce motion" switched on in the device settings, the car moves without gliding, wobble or streaks.
- Below 820px wide the road becomes a single lane on the left; the `road` breakpoint in `src/index.css` and `ROAD_MEDIA` in `useRoadRoute.ts` must stay in sync.
