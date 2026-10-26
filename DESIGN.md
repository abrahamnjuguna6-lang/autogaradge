# Design System: AutoBridge Kenya — Landing Page
**Project ID:** Implemented in `web/` (React + Vite), from the v3 prototype in Claude Design project `3e645cfe-dd3a-41b7-af56-7df8eaf014b9`. Related Stitch project: `4766392291755580821`.

## 1. Visual Theme & Atmosphere

Calm, editorial and quietly confident: a warm cream page with generous whitespace, set in heavy, wide headlines and small monospaced labels. It should feel like a well-run brokerage, not a busy classifieds site, because the brand promise is trust ("Connecting Cars. Creating Trust.").

The signature idea is **a journey**. A soft grey road winds down the page from a SELLER pin at the top to a BUYER pin at the end. A small top-down gold car drives along it as the visitor scrolls, leaving a thin gold trail behind it. Content sits on the side of the page opposite the road, so the road and the reading never compete. One full-bleed deep-navy band ("Crossing the bridge") interrupts the cream, like crossing a bridge, before the page arrives at the request form.

The density is airy and the colours are restrained: two-tone navy and cream, with gold used sparingly as the accent that marks progress and action.

## 2. Color Palette & Roles

- **Bridge Navy (#0B2147):** The anchor colour. Headlines, body text on cream, primary buttons, the full-bleed verification band, the confirmation card and the car's windscreen.
- **Warm Cream Paper (#F6F4EF):** The page background, and the fill for form inputs. It gives a soft, printed-paper warmth instead of stark white.
- **Cable Gold (#C8962E):** The single brand accent, used sparingly:
  - the second half of the hero headline;
  - the road trail the car leaves behind;
  - the car body and the BUYER pin;
  - the 3px top edge of the navy band;
  - the step numerals, and the lit verification bars;
  - the form's submit button, and hover fills on navy buttons.
- **Deep Gold Ink (#8A6A22):** The readable gold for small text on cream: section eyebrows ("02 — HOW IT WORKS") and link hover. Cable Gold is too light for small type on cream.
- **Pale Lantern Gold (#E0B45A):** Gold text on navy, such as eyebrows in the dark band, level labels and the request reference number.
- **Slate Ink (#3A4A66):** Lead paragraphs and step descriptions on cream. Softer than navy, so the headlines dominate.
- **Fog Grey-Blue (#6B7890):** Quiet metadata: form labels, row labels (SELLERS / BUYERS / PAPERWORK), the scroll hint and the footer.
- **Mist Blue (#B9C4D8):** Body text on the navy band.
- **Faded Steel (#8E9BB5):** Fine print on navy (the "Verified is not a promise" note).
- **Hairline Navy (rgba 11,33,71 at 15%):** 1px dividers between rows and steps, and input borders.
- **Clean White (#FFFFFF):** The request form card only, so it lifts off the cream.
- **Car lighting colours:**
  - headlight cream (#FFF3D1), with a warm glow;
  - brake red (#FF5A47), with a red glow;
  - reverse white (#FFF7E6);
  - unlit tail lights (#8A2A20).
- **Selection Gold (#E9C477):** Text selection highlight.

## 3. Typography Rules

- **Display & body font: Archivo**, a variable font using its width axis.
  - **Hero headline:** Extra-bold (800), widened (112%), 44–88px, very tight line height (0.95) and negative tracking (−0.035em), so it reads as one solid block.
  - **Section headlines:** Extra-bold (800), widened (110%), 34–54px, line height 1.0, tracking −0.03em, with balanced line breaks.
  - **Wordmark:** "AUTO" in navy and "BRIDGE" in gold, black weight (900), widened 118%, 20px.
  - **Lead paragraphs:** Regular weight at 17–20px, with comfortable 1.5 line height.
  - **Step titles:** 20px bold.
  - **Step numerals:** Large 28px widened gold digits.
- **Label font: JetBrains Mono**, semibold (600), 10–12px, uppercase, with wide tracking (0.1–0.16em). Used for eyebrows, form labels, pins and the footer. It gives a documented, ledger-like feel that suits verification and reference numbers.
- **Hierarchy:** Contrast between the huge wide sans and the tiny spaced mono carries the hierarchy, rather than colour.

## 4. Component Stylings

- **Buttons:**
  - **Primary:** Pill-shaped, solid Bridge Navy, cream text, 600 weight, 16px. On hover it flips to Cable Gold with navy text.
  - **Secondary:** Pill-shaped outline (1.5px navy) on transparent. On hover the border turns gold and the text turns Deep Gold Ink.
  - **Form submit:** Full-width pill in Cable Gold with navy text, flipping to navy on hover. This is the page's main conversion action.
- **Segmented tabs:** "I'm selling" / "I'm buying" sit inside a faint navy-tinted pill track. The active tab is a solid navy pill with cream text. Switching tabs swaps the four steps below.
- **Step and problem rows:** Borderless list rows separated by 1px hairlines. The left column holds the numeral or mono label, the right the content. There are no cards, and the rhythm comes from the dividers.
- **Verification levels:** Four columns on the navy band. Each starts with a 4px rounded progress bar that lights up gold in sequence as the visitor scrolls into the section. Then come a mono "LEVEL N", a bold title and a mist description, with an honest fine-print note below.
- **Request form card:** Clean white, generously rounded corners (16px), a whisper-thin border and a soft, wide, low shadow (0 20px 40px, pulled in by 24px, at 25% navy). Two-column grid, collapsing to one column on very small phones.
- **Inputs:** Cream-filled fields with subtly rounded corners (10px) and a hairline navy border. Labels are small mono capitals above. The focus ring is gold.
- **Confirmation card:** Navy, 16px rounded, with a gold mono reference number, a bold "Got it. We're on the road." line, and a ghost pill button to send another request.
- **Pins:** Small mono tags with slightly rounded corners (4px). SELLER is navy, BUYER is gold, each tied to the road by a 2px tick. On phones they run vertically along the road so they never cover text.
- **Navigation bar:** Fixed and frosted. Cream at 86% opacity with a 10px background blur and a hairline bottom border. The wordmark sits on the left, text links and a navy pill CTA on the right. On phones only the CTA remains.
- **The car:** A small top-down coupe (30 × 54px) with a Cable Gold body, navy windscreen, darker navy rear window, four dark tyres and a soft drop shadow.
  - It glides along the road with eased motion.
  - At speed it wobbles slightly and trails gold speed streaks, and its headlight beams brighten.
  - Brake lights glow red as it stops, and reverse lights glow white when the visitor scrolls back up.

## 5. Layout Principles

- **Canvas:** Content is capped at 1200px and centred. Side padding scales smoothly from 20px to 64px.
- **Full-height sections:** Each section is roughly one screen tall, with vertically centred content, so the journey has a steady, chapter-like pace.
- **Alternating sides:** Content alternates left and right, and the road runs down the opposite side at about a third of the page width from centre. S-curves join the lanes between sections.
- **The bridge band:** The verification section is full-bleed navy and sits above the road, so the car passes underneath it.
- **Phones (under 820px wide):** The road straightens into a single lane 26px from the left edge, and all content shifts right to a 60px gutter so it never overlaps the road. Everything stacks into one column.
- **Whitespace:** Generous. Sections breathe with 80–120px of vertical padding, and spacing inside groups stays tight (12–36px), so related items read as units.
- **Motion:**
  - Smooth scrolling for in-page links.
  - Every animation (car glide, wobble, streaks, beams) is switched off for visitors who ask their device to reduce motion; the car then sits exactly where the scroll puts it.

## 6. Content Rules

- Plain, factual, confident copy that never overpromises.
- "Verified" always states what was and wasn't checked, and is never "guaranteed".
- No escrow, no "premier" or "registered" claims, no invented statistics, ratings or testimonials.
- Prices are in KSh. Every request goes to WhatsApp.
- Keep the page to five sections at most: Hero, The problem, How it works, Verification, Request.
