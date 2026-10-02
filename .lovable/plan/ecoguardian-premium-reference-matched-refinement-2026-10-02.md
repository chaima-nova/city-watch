# EcoGuardian Premium Reference-Matched Refinement

## Outcome
Refine the current EcoGuardian application to closely match the supplied reference while preserving all existing routes, data models, and core components. The Overview will become the primary visual experience and remain explicit whenever imagery is conceptual or data is not connected.

## What will change
- Rework the Overview composition to match the reference: deep spatial hero, city-system domain rail, layered intelligence model, Watch/Discover/Warn cards, City Memory timeline, compact epistemic pipeline, and Book a Demo banner.
- Apply the supplied deep navy, glass, cyan, green, purple, secondary-text, and border colors as reusable design tokens across the existing interface.
- Create the hero's city-at-night and spatial imagery as cohesive, app-owned visual assets, with map labels and system overlays built in the interface.
- Refine the existing sidebar and compact mobile navigation without changing the seven current product destinations.
- Add `/contact` with the requested fields and Area of Interest options. Submitting will show a clear delivery-unavailable state because no email service is connected; it will never claim the request was sent.
- Connect every Book a Demo action to `/contact` and preserve Connect Data / Enter City Watch navigation.

## Data integrity
- No statistics, observations, alerts, confidence scores, performance claims, or live-city values will be invented.
- Timeline years and visual traces will be explicitly marked `ILLUSTRATIVE SYSTEM VIEW · NOT LIVE DATA` and presented as structural examples, not historical observations.
- Existing screens continue to read only through the established typed data layer and retain honest empty states.

## Responsive and motion behavior
- Desktop preserves the reference's wide spatial composition and fixed left navigation.
- Tablet and mobile collapse the system model into legible layered groups, use a compact navigation treatment, and avoid horizontal overflow.
- Motion stays restrained: atmospheric drift, line tracing, node pulse, and gentle glass elevation, with reduced-motion support.

## Technical details
- Preserve TanStack routing and add one leaf route for `/contact` with unique metadata.
- Keep all color and visual roles in global semantic tokens; no backend is introduced.
- Use existing shared controls where applicable and extend them only for the requested visual states.
- Validate the complete Overview and Contact flow in the live preview at desktop and mobile widths.
