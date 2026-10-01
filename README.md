# City Watch

Build a high-end desktop-first web application UI/UX for EcoGuardian AI.



PRODUCT



EcoGuardian AI

City Intelligence & Early-Warning System



Core idea:



«Watch the city. Discover what is changing. Detect emerging risks before they escalate.»



EcoGuardian is an experimental city intelligence system that analyzes heterogeneous urban data, builds a historical “City Memory,” discovers unusual changes and relationships, and can surface evidence-based early-warning signals.



This is currently a research / experimental prototype, not a production prediction system.



The UI must communicate that distinction clearly.



---



CRITICAL DATA RULE — DO NOT INVENT DATA



Do NOT create fake dashboard statistics, fake measurements, fake percentages, fake confidence scores, fake historical occurrences, fake timestamps, fake lead times, fake sensor readings, fake alerts, fake geographic coordinates, fake risk levels, or fake claims of model performance.



Do not populate the interface with things like:



- “76% confidence”

- “11 historical occurrences”

- “4–9 hour lead time”

- “3 signals detected”

- “2 areas affected”

- “Updated 4 minutes ago”

- fake temperature values

- fake satellite observations

- fake anomaly counts

- fake city statistics

- fake model accuracy

- fake predictions



unless those values actually come from connected data.



For the initial UI:



Use one of these approaches:



1. Real data, when available from the repository/API.

2. Empty states explaining that data is not connected yet.

3. Clearly labeled illustrative examples when a visual example is necessary.



If illustrative data is ever used, label it prominently as:



ILLUSTRATIVE EXAMPLE — NOT LIVE DATA



Never make example data look like live production data.



The architecture must make it easy to replace illustrative content with real GitHub/API/database data later.



---



TECHNICAL DIRECTION



Build the frontend so it can later connect to my existing GitHub repository and backend/data sources.



Do not hard-code application data directly into UI components.



Create a clean separation between:



- UI components

- application state

- data models/types

- API/data access layer

- visualization components



Use typed interfaces/models for concepts such as:



- CityObservation

- CityArea

- Discovery

- EvidenceItem

- WarningSignal

- HistoricalPeriod

- DataSource

- CityMemoryEvent



If data is unavailable, return an explicit empty/loading/error state rather than inventing values.



Create reusable components so the backend can later populate the exact same screens.



---



VISUAL DIRECTION



The product should feel like:



Palantir × modern climate research lab × Apple/Stripe-level product design



NOT:



- generic AI dashboard

- SaaS template

- crypto dashboard

- “AI brain” graphics

- futuristic neon cyberpunk

- stock-photo climate website

- student hackathon project



Use:



- very dark charcoal/navy background

- emerald green as the primary accent

- subtle blue secondary accents

- restrained glass panels

- thin borders

- soft depth

- high information density without clutter

- precise typography

- subtle animations

- clean geospatial visualization

- technical but elegant interface



Suggested EcoGuardian green:



"#69FF93"



Secondary green:



"#04A56A"



Deep green:



"#013F22"



Use the colors carefully. The interface should remain mostly dark and neutral.



Avoid excessive glow.



---



GLOBAL PRODUCT STRUCTURE



Desktop navigation:



Overview

City Memory

Discoveries

Early Warnings

Evidence

Data



Top navigation should include:



ECOGUARDIAN AI



City Intelligence & Early Warning System



Status indicator:



● SYSTEM READY



Do NOT call the system “LIVE” unless a real live data connection exists.



For an unconnected installation, show:



● DEMO / DATA NOT CONNECTED



or



● RESEARCH PROTOTYPE



Location should only be displayed when it comes from actual configuration/data.



Do not automatically claim “Ouargla / Demo City” as live data.



---



SCREEN 1 — OVERVIEW



The first screen must explain the product in approximately 10 seconds.



Hero:



EcoGuardian AI



City Intelligence & Early-Warning System



Headline:



«Watch the city. Discover what is changing. Detect emerging risks before they escalate.»



Add a small status label:



RESEARCH PROTOTYPE · EXPERIMENTAL



Then three core capability cards:



01 — WATCH



Continuously organize and monitor heterogeneous city data.



02 — DISCOVER



Identify unusual changes and relationships that were not explicitly predefined.



03 — WARN



Surface emerging signals with evidence, uncertainty, and historical context.



Do not display fake numerical KPIs.



Instead, below the cards, show a clean system visualization representing:



CITY DATA → CITY MEMORY → DISCOVERY → EVIDENCE → EARLY WARNING



This can be visual and animated, but must not imply that the system has already discovered real patterns.



---



SCREEN 2 — CITY WATCH / OVERVIEW



Desktop layout:



Left sidebar:



CITY WATCH



Overview

Discoveries

Early Warnings

Evidence

Data



Main area:



Large geospatial observation canvas.



Title:



City Watch



Subtitle:



«A spatial view of observations, changes and emerging signals.»



If real geospatial data is unavailable:



Show an elegant empty map state:



NO CITY DATA CONNECTED



«Connect a city dataset to begin observing spatial and temporal patterns.»



Button:



Connect Data



Do NOT place fake anomaly dots on the map.



If real data becomes available later, render:



- observations

- detected anomalies

- affected areas

- temporal layers

- evidence-linked signals



Bottom panel:



ACTIVE SIGNALS



If there are no real signals:



«No validated signals available.»



Do not display “3 signals detected” or similar invented values.



---



SCREEN 3 — DISCOVERY ENGINE



This is the most important product screen.



Title:



DISCOVERY ENGINE



Subtitle:



«Find changes and relationships humans did not explicitly ask for.»



Create a premium discovery interface.



Example structure:



Candidate Discovery



Status:



AWAITING REAL DATA



Main visual area:



Show the conceptual relationship between:



Variable A

↓

Variable B

↓

Variable C



But do not assign fake measurements.



Use labels such as:



Observed variable



Observed variable



Observed variable



Then a relationship visualization:



SPATIAL RELATIONSHIP



TEMPORAL RELATIONSHIP



HISTORICAL SIMILARITY



All should show empty/awaiting-data states unless actual evidence exists.



Evidence panel:



Evidence



- Environmental observation — awaiting data

- Infrastructure observation — awaiting data

- Historical comparison — awaiting data



Bottom actions:



Inspect Evidence



Send for Human Review



If no discovery exists:



«No candidate discoveries yet.

Connect historical city data to begin discovery experiments.»



---



SCREEN 4 — EARLY WARNINGS



Title:



EARLY WARNING



Subtitle:



«Surface emerging signals without pretending to know the future.»



Create a high-quality warning interface.



Important:



Do NOT show a fake emergency such as:



“FLOOD INCOMING”



Instead, explain the concept.



Empty state:



NO VALIDATED EARLY-WARNING SIGNALS



«EcoGuardian will surface an early-warning signal only when supported by connected data and validated detection logic.»



If real data eventually produces a warning, the interface should support:



- signal status

- affected area

- detection time

- contributing observations

- historical comparisons

- potential lead time

- uncertainty

- missing data

- human validation



Potential warning wording:



Emerging signal detected



«An unusual combination of observed signals has been detected.»



Then show only actual evidence.



Important section:



WHAT ECOGUARDIAN KNOWS



Show evidence-backed observations.



WHAT ECOGUARDIAN DOES NOT KNOW



Examples of uncertainty categories are acceptable, but never fabricate specific conclusions.



For example:



- Exact cause

- Whether an event will occur

- Final severity



Actions:



VIEW EVIDENCE



HUMAN VALIDATION



---



SCREEN 5 — CITY MEMORY



This screen is central to the product thesis.



Title:



CITY MEMORY



Subtitle:



«EcoGuardian doesn't only watch today's city. It remembers how the city has changed over time.»



Create a horizontal temporal visualization.



Conceptual layers:



Environment



Infrastructure



Mobility



Events



Observations



If there is no historical data:



Show:



CITY MEMORY NOT CONNECTED



«Connect historical observations to build the city's memory.»



Do not invent years or events.



When real data becomes available, the timeline should support:



- historical observations

- spatial changes

- infrastructure events

- environmental observations

- mobility changes

- detected anomalies

- relationships discovered across time



Allow the user to select a time period and inspect evidence.



---



SCREEN 6 — EVIDENCE



Title:



EVIDENCE



Subtitle:



«Every important signal should be traceable back to its supporting observations.»



Create an evidence explorer.



Possible sections:



Observation



Source



Time



Location



Relationship



Historical comparison



Uncertainty



Data quality



Again, only display values that come from real connected data.



If there is no data:



NO EVIDENCE AVAILABLE



«Evidence will appear here once observations and discovery results are connected.»



---



SCREEN 7 — DATA



Title:



DATA



Create a professional data-source management interface.



Sections:



Connected Sources



Available Datasets



Data Health



Coverage



Last Ingestion



But do NOT populate fake statuses.



If nothing is connected:



NO DATA SOURCES CONNECTED



Button:



Connect Data Source



Create the architecture so future sources can include:



- satellite / Earth observation

- environmental observations

- infrastructure data

- mobility data

- weather

- city event records

- geospatial datasets

- user-provided datasets



Do not claim any source is currently connected unless it actually is.



---



UX PRINCIPLES



The product should always distinguish between:



OBSERVED



DISCOVERED



INFERRED



HYPOTHESIZED



VALIDATED



Use these states throughout the interface.



This distinction is extremely important.



For example:



Observed data ≠ discovered relationship.



Discovered relationship ≠ prediction.



Prediction ≠ confirmed event.



The UI should visually communicate these differences.



---



IMPORTANT TRUST DESIGN



EcoGuardian must never feel like an AI oracle.



Avoid:



❌ “The AI predicts…”



Prefer:



✅ “Emerging signal detected”



✅ “Candidate relationship discovered”



✅ “Historical similarity identified”



✅ “Evidence requires human validation”



✅ “Insufficient evidence”



✅ “Data coverage incomplete”



Make uncertainty a first-class UI element.



---



RESPONSIVE BEHAVIOR



Prioritize desktop because this is an intelligence/control-center product.



Support tablet and mobile gracefully, but desktop is the primary experience.



The main interface should feel like a serious operational/research environment rather than a marketing website.



---



MOTION



Use subtle motion only:



- panel transitions

- map layer transitions

- timeline movement

- signal appearance

- data loading

- hover states



No excessive glowing effects.



No distracting animations.



---



LANDING / PRODUCT TRANSITION



The initial screen should immediately explain:



What it is → What it does → Why it is different.



A visitor should understand within approximately 10 seconds:



«EcoGuardian watches city data, discovers unusual patterns and relationships, and helps surface emerging risks with evidence.»



---



FINAL PRODUCT FEEL



The final result should feel like an early version of a serious city intelligence platform / research operating system.



It should communicate:



technical depth 



scientific credibility



urban intelligence



explainability



uncertainty



future potential



without pretending that capabilities or results already exist.



Most importantly:



NEVER manufacture evidence to make the dashboard look impressive.



An empty state that honestly says “No validated discoveries yet” is preferable to a beautiful fake dashboard.     “Use strong visual hierarchy for important evidence and system states, but never prioritize numerical KPIs unless they are backed by connected data.”    VISUAL DESIGN LANGUAGE — MANDATORY



The visual identity should follow a Deep Aurora Glass / Glassmorphism Dark Mode / Spatial Climate-Tech Intelligence aesthetic.



Think:



advanced geospatial intelligence platform × climate research lab × premium Apple/Stripe product design



with subtle 3D GIS / spatial computing influence.



The interface should feel sophisticated, technical, calm, and scientific — not like a generic SaaS dashboard and not like a futuristic gaming interface.



COLOR SYSTEM



Core Background



Use a deep atmospheric gradient:



- Deep Midnight Navy: "#0A111E"

- Atmospheric Ocean Blue: "#0F2537"



The background should have subtle depth rather than being a completely flat black screen.



Use very subtle radial/aurora gradients behind major spatial visualizations.



Primary Accent



Use:



- Electric Cyan: "#00F2FE"

- Neon Mint / Cyan: "#00E5FF"



Use these for:



- active navigation

- selected states

- data visualization highlights

- system status

- interaction states

- important UI affordances



Do NOT use accent colors to fabricate metrics or imply positive performance.



Secondary Colors



Use:



- Ice Blue: "#90CAF9"

- Muted Slate Blue: "#8A99AD"



for:



- secondary text

- metadata

- inactive navigation

- supporting labels

- non-primary visual elements



Warning Colors



Use:



- Amber Gold: "#FFB302"

- Thermal Coral: "#FF4D4D"



ONLY when representing an actual warning/risk state derived from connected data.



Do not use warning colors merely as decoration.



---



GLASS SYSTEM



Use layered glass panels throughout the application.



Cards and floating panels should use:



- semi-transparent dark surfaces

- approximately "rgba(15, 37, 55, 0.60)"

- strong background blur

- "backdrop-blur-xl"

- rounded corners around "rounded-2xl"

- extremely subtle borders such as "border-white/10"

- restrained shadows

- very subtle internal highlights



Glass should create depth without making the interface difficult to read.



Avoid excessive transparency.



Content must remain highly legible.



---



TYPOGRAPHY



Primary font:



Inter



Alternative:



Plus Jakarta Sans



Use a strong hierarchy:



- large concise page titles

- medium-weight section titles

- compact technical labels

- restrained metadata

- highly readable body text



Do not make every number huge.



This is an intelligence system, not a KPI marketing dashboard.



---



SPATIAL / GIS LANGUAGE



The product should have a subtle spatial-computing aesthetic.



Use:



- dark geospatial canvases

- grid structures

- contour-like visualization when supported by real data

- spatial layers

- subtle coordinate/grid references

- glowing observation points only when backed by actual data

- temporal traces

- relationship lines

- geographic boundaries

- layered map surfaces



The spatial visualizations should feel analytical rather than decorative.



Do not create fake map observations.



If no geographic data exists, show a sophisticated empty state instead.



Example:



CITY OBSERVATION SPACE



"No spatial data connected"



«Connect a city dataset to begin observing spatial patterns.»



---



3D / AURORA EFFECTS



Use subtle depth and atmospheric effects around major visualization areas.



Possible effects:



- soft cyan atmospheric glow

- subtle blue radial gradients

- layered translucent surfaces

- depth between map and UI panels

- soft light behind active states



Avoid:



- excessive neon

- cyberpunk aesthetics

- glowing text everywhere

- animated backgrounds

- sci-fi HUD overload

- decorative 3D objects unrelated to the data



The goal is:



“advanced climate intelligence platform”



not:



“spaceship control room.”



---



MAP / SPATIAL CANVAS



The main map should feel immersive and premium.



If a real map library is used, prefer:



Mapbox or Leaflet



with a dark custom visual treatment.



However:



Do not add fake map markers, fake anomalies, fake heat zones, or fake risk regions.



When real spatial data becomes available, the map should support:



- observation layers

- discovered anomalies

- affected areas

- historical comparisons

- spatial relationships

- evidence-linked signals

- temporal filtering



---



DATA VISUALIZATION STYLE



Charts should feel integrated into the spatial intelligence interface.



Prefer:



- thin line charts

- temporal traces

- compact sparklines

- relationship graphs

- spatial overlays

- layered timelines

- minimal axes

- subtle grid lines



Avoid generic dashboard charts with excessive decoration.



Every visualization should answer a specific analytical question.



If there is no data:



show an honest empty state.



Example:



Awaiting observations



rather than generating placeholder values.



---



STATUS LANGUAGE



Use restrained system-status indicators.



Examples:



● SYSTEM READY



● DATA CONNECTED



● PROCESSING



● VALIDATION REQUIRED



● NO DATA CONNECTED



● RESEARCH PROTOTYPE



Do not display LIVE unless the system is genuinely connected to a live data source.



---



TRUST / SCIENTIFIC CREDIBILITY



The visual system must distinguish between:



OBSERVED



DISCOVERED



INFERRED



HYPOTHESIZED



VALIDATED



Give these states different visual treatments.



For example:



Observed data can use neutral/cyan treatment.



A candidate discovery can use cyan/blue.



A warning can use amber.



Human validation can use a distinct approval state.



Never visually present a hypothesiVISUAL DESIGN LANGUAGE — MANDATORY



The visual identity should follow a Deep Aurora Glass / Glassmorphism Dark Mode / Spatial Climate-Tech Intelligence aesthetic.



Think:



advanced geospatial intelligence platform × climate research lab × premium Apple/Stripe product design



with subtle 3D GIS / spatial computing influence.



The interface should feel sophisticated, technical, calm, and scientific — not like a generic SaaS dashboard and not like a futuristic gaming interface.



COLOR SYSTEM



Core Background



Use a deep atmospheric gradient:



- Deep Midnight Navy: "#0A111E"

- Atmospheric Ocean Blue: "#0F2537"



The background should have subtle depth rather than being a completely flat black screen.



Use very subtle radial/aurora gradients behind major spatial visualizations.



Primary Accent



Use:



- Electric Cyan: "#00F2FE"

- Neon Mint / Cyan: "#00E5FF"



Use these for:



- active navigation

- selected states

- data visualization highlights

- system status

- interaction states

- important UI affordances



Do NOT use accent colors to fabricate metrics or imply positive performance.



Secondary Colors



Use:



- Ice Blue: "#90CAF9"

- Muted Slate Blue: "#8A99AD"



for:



- secondary text

- metadata

- inactive navigation

- supporting labels

- non-primary visual elements



Warning Colors



Use:



- Amber Gold: "#FFB302"

- Thermal Coral: "#FF4D4D"



ONLY when representing an actual warning/risk state derived from connected data.



Do not use warning colors merely as decoration.



---



GLASS SYSTEM



Use layered glass panels throughout the application.



Cards and floating panels should use:



- semi-transparent dark surfaces

- approximately "rgba(15, 37, 55, 0.60)"

- strong background blur

- "backdrop-blur-xl"

- rounded corners around "rounded-2xl"

- extremely subtle borders such as "border-white/10"

- restrained shadows

- very subtle internal highlights



Glass should create depth without making the interface difficult to read.



Avoid excessive transparency.



Content must remain highly legible.



---



TYPOGRAPHY



Primary font:



Inter



Alternative:



Plus Jakarta Sans



Use a strong hierarchy:



- large concise page titles

- medium-weight section titles

- compact technical labels

- restrained metadata

- highly readable body text



Do not make every number huge.



This is an intelligence system, not a KPI marketing dashboard.



---



SPATIAL / GIS LANGUAGE



The product should have a subtle spatial-computing aesthetic.



Use:



- dark geospatial canvases

- grid structures

- contour-like visualization when supported by real data

- spatial layers

- subtle coordinate/grid references

- glowing observation points only when backed by actual data

- temporal traces

- relationship lines

- geographic boundaries

- layered map surfaces



The spatial visualizations should feel analytical rather than decorative.



Do not create fake map observations.



If no geographic data exists, show a sophisticated empty state instead.



Example:



CITY OBSERVATION SPACE



"No spatial data connected"



«Connect a city dataset to begin observing spatial patterns.»



---



3D / AURORA EFFECTS



Use subtle depth and atmospheric effects around major visualization areas.



Possible effects:



- soft cyan atmospheric glow

- subtle blue radial gradients

- layered translucent surfaces

- depth between map and UI panels

- soft light behind active states



Avoid:



- excessive neon

- cyberpunk aesthetics

- glowing text everywhere

- animated backgrounds

- sci-fi HUD overload

- decorative 3D objects unrelated to the data



The goal is:



“advanced climate intelligence platform”



not:



“spaceship control room.”



---



MAP / SPATIAL CANVAS



The main map should feel immersive and premium.



If a real map library is used, prefer:



Mapbox or Leaflet



with a dark custom visual treatment.



However:



Do not add fake map markers, fake anomalies, fake heat zones, or fake risk regions.



When real spatial data becomes available, the map should support:



- observation layers

- discovered anomalies

- affected areas

- historical comparisons

- spatial relationships

- evidence-linked signals

- temporal filtering



---



DATA VISUALIZATION STYLE



Charts should feel integrated into the spatial intelligence interface.



Prefer:



- thin line charts

- temporal traces

- compact sparklines

- relationship graphs

- spatial overlays

- layered timelines

- minimal axes

- subtle grid lines



Avoid generic dashboard charts with excessive decoration.



Every visualization should answer a specific analytical question.



If there is no data:



show an honest empty state.



Example:



Awaiting observations



rather than generating placeholder values.



---



STATUS LANGUAGE



Use restrained system-status indicators.



Examples:



● SYSTEM READY



● DATA CONNECTED



● PROCESSING



● VALIDATION REQUIRED



● NO DATA CONNECTED



● RESEARCH PROTOTYPE



Do not display LIVE unless the system is genuinely connected to a live data source.



---



TRUST / SCIENTIFIC CREDIBILITY



The visual system must distinguish between:



OBSERVED



DISCOVERED



INFERRED



HYPOTHESIZED



VALIDATED



Give these states different visual treatments.



For example:



Observed data can use neutral/cyan treatment.



A candidate discovery can use cyan/blue.



A warning can use amber.



Human validation can use a distinct approval state.



Never visually present a hypothesi s as a confirmed fact.



---



OVERALL VISUAL PRINCIPLE



Every screen should feel like a window into a living spatial memory of a city.



The interface should communicate:



Observe → Remember → Discover → Understand → Anticipate



without pretending that the system already knows the future.s as a confirmed fact.



---



OVERALL VISUAL PRINCIPLE



Every screen should feel like a window into a living spatial memory of a city.



The interface should communicate:



Observe → Remember → Discover → Understand → Anticipate



without pretending that the system already knows the future.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f905038e-ac88-4632-80c3-5b5d88acd0df).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
