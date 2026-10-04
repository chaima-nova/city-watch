# Frosted Sidebar and Supporter Logo Carousel

## What will change
- Replace the desktop sidebar’s opaque slate surface with a translucent frosted-glass treatment, a subtle right divider, and the requested silver-blue inactive, cyan active, and soft glass hover states.
- Keep the existing seven routes and current mobile navigation behavior unchanged.
- Add a full-width “RECOGNIZED & SUPPORTED BY” strip immediately after the main city image section.
- Use the three uploaded GCoM, Tech To The Rescue, and Hack for Earth logos as project assets in a seamless right-to-left ticker.
- Render logos at a uniform height with transparent containers, bright silver-gray filtering, full-color cyan-glow hover treatment, and pause the ticker while hovered.
- Duplicate the logo sequence only for visual continuity; preserve meaningful accessible names and hide the duplicate sequence from assistive technology.
- Disable ticker movement when reduced motion is requested, while keeping all logos visible.

## Technical details
- Extend the existing semantic color tokens and custom utilities in the global stylesheet rather than hard-coding colors in page markup.
- Store uploaded logos through the project asset flow and import their asset pointers into the Overview route.
- Verify desktop and mobile layout, hover/active navigation states, ticker pause behavior, reduced-motion behavior, and preview health.
