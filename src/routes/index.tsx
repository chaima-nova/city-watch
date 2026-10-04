import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight, Binoculars, Building2, Car, Database, Droplets, Eye, Factory,
  FileCheck2, GitBranch, Globe2, LandPlot, Layers3, Leaf, Network, Orbit,
  RadioTower, Satellite, Sparkles, TriangleAlert, Waves, Zap,
} from "lucide-react";
import { GhostButton, PrimaryButton, StateBadge } from "@/components/eco/ui";
import { Button } from "@/components/ui/button";
import { seo } from "@/lib/seo";
import cityHero from "@/assets/ecoguardian-city-hero.jpg";
import systemLayers from "@/assets/ecoguardian-system-layers.jpg";
import capabilityVisuals from "@/assets/ecoguardian-capabilities.jpg";
import cityBanner from "@/assets/ecoguardian-city-banner.jpg";
import gcombLogo from "@/assets/gcomb-logo.png.asset.json";
import techToTheRescueLogo from "@/assets/tech-to-the-rescue-logo.png.asset.json";
import hackForEarthLogo from "@/assets/hack-for-earth-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => seo("City Intelligence & Discovery", "An experimental city intelligence system for understanding urban change through evidence, memory, and human validation."),
  component: Overview,
});

const DOMAINS = [
  { label: "Infrastructure", icon: Building2 }, { label: "Mobility", icon: Car },
  { label: "Environment", icon: Leaf }, { label: "Land Use", icon: LandPlot },
  { label: "Energy", icon: Zap }, { label: "Water", icon: Droplets },
  { label: "Public Services", icon: Factory }, { label: "Earth Observation", icon: Satellite },
] as const;

const CAPABILITIES = [
  { number: "01", title: "Watch", icon: Eye, body: "Continuously organize and monitor heterogeneous city data.", position: "bg-[position:0%_center]" },
  { number: "02", title: "Discover", icon: Network, body: "Identify unusual changes and relationships that were not explicitly predefined.", position: "bg-[position:50%_center]" },
  { number: "03", title: "Warn", icon: TriangleAlert, body: "Surface emerging signals with evidence, uncertainty, and historical context.", position: "bg-[position:100%_center]" },
] as const;

const EPISTEMIC = [
  { state: "observed", detail: "Directly from data" }, { state: "discovered", detail: "Unusual patterns" },
  { state: "inferred", detail: "Possible links" }, { state: "hypothesized", detail: "Explanations" },
  { state: "validated", detail: "Human review" },
] as const;

const ARCHITECTURE_LAYERS = [
  { title: "Foresight", detail: "Possible futures & scenarios", icon: Orbit },
  { title: "Evidence", detail: "Context & validation", icon: FileCheck2 },
  { title: "Discovery", detail: "Patterns & relationships", icon: Sparkles },
  { title: "City Memory", detail: "Temporal urban memory", icon: Layers3 },
  { title: "City Data", detail: "Multi-source, multi-domain", icon: Database },
] as const;

const SUPPORTERS = [
  { name: "Global Covenant of Mayors for Climate & Energy", src: gcombLogo.url, width: 250 },
  { name: "Tech To The Rescue", src: techToTheRescueLogo.url, width: 210 },
  { name: "Hack for Earth", src: hackForEarthLogo.url, width: 180 },
] as const;

function Overview() {
  return (
    <div className="space-y-5 pb-6">
      <section className="relative min-h-[580px] overflow-hidden rounded-xl border border-border bg-background sm:min-h-[620px] lg:min-h-[660px]">
        <img src={cityHero} alt="Conceptual aerial city visualization" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover object-center opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_92%,transparent)_34%,color-mix(in_oklab,var(--background)_28%,transparent)_76%,color-mix(in_oklab,var(--background)_8%,transparent))]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative z-10 flex min-h-[580px] max-w-3xl flex-col justify-center px-6 py-16 sm:min-h-[620px] sm:px-10 lg:min-h-[660px] lg:px-14">
          <div className="flex flex-wrap gap-2">
            <span className="label-mono rounded border border-eco/30 bg-background/55 px-2.5 py-1 text-eco backdrop-blur">Research prototype · Experimental</span>
            <span className="label-mono rounded border border-signal-blue/25 bg-background/55 px-2.5 py-1 text-signal-blue backdrop-blur">Multi-source urban data</span>
          </div>
          <h1 className="mt-7 max-w-3xl font-display text-4xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Understand what <span className="text-gradient">your city is becoming.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/90 sm:text-lg">Watch the city. Discover what is changing. Surface emerging patterns and signals before they become obvious.</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">EcoGuardian AI is an experimental city intelligence system that builds a historical City Memory from heterogeneous urban data and explores changes, relationships, and emerging patterns across urban systems.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <PrimaryButton to="/watch">Enter City Watch <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <GhostButton to="/contact">Book a Demo</GhostButton>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-eco" />Data not connected</span>
            <span className="h-3 w-px bg-border" /><span>Research prototype</span>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
          <MapPin label="Mobility" icon={Car} className="left-[60%] top-[35%]" />
          <MapPin label="Infrastructure" icon={Building2} className="left-[74%] top-[22%]" />
          <MapPin label="Land Use" icon={LandPlot} className="left-[70%] top-[52%]" />
          <MapPin label="Environment" icon={Leaf} className="left-[84%] top-[39%]" />
        </div>
      </section>

      <section aria-labelledby="supporters-title" className="overflow-hidden border-y border-border/70 py-6 sm:py-7">
        <h2 id="supporters-title" className="text-center text-sm font-medium tracking-widest text-supporter-title">RECOGNIZED &amp; SUPPORTED BY</h2>
        <div className="mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="supporter-marquee flex w-max items-center">
            {[false, true].map((duplicate) => (
              <div key={String(duplicate)} aria-hidden={duplicate || undefined} className="flex shrink-0 items-center gap-16 px-8 sm:gap-24 sm:px-12 lg:gap-32 lg:px-16">
                {SUPPORTERS.map((supporter) => (
                  <div key={supporter.name} className="flex h-14 shrink-0 items-center bg-transparent">
                    <img src={supporter.src} alt={duplicate ? "" : supporter.name} width={supporter.width} height={40} className="supporter-logo h-9 w-auto max-w-[250px] object-contain sm:h-10" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-5 py-5 lg:grid-cols-[0.62fr_1.38fr] lg:items-center">
        <div>
          <h2 className="font-display text-2xl font-semibold">The city is a system.</h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">Urban signals rarely exist in isolation. EcoGuardian brings heterogeneous observations into a shared temporal context.</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-8">
          {DOMAINS.map(({ label, icon: Icon }) => <div key={label} className="glass group flex min-h-24 flex-col items-center justify-center rounded-lg p-3 text-center transition duration-300 hover:-translate-y-1 hover:border-signal-blue/45 hover:bg-accent"><Icon className="h-5 w-5 text-signal-blue transition group-hover:text-eco" /><span className="mt-3 text-[11px] leading-tight text-muted-foreground group-hover:text-foreground">{label}</span></div>)}
        </div>
      </section>

      <section className="glass overflow-hidden rounded-xl">
        <div className="grid min-h-[500px] lg:grid-cols-[1.3fr_0.7fr]">
          <div className="relative min-h-[460px] overflow-hidden border-b border-border lg:min-h-[500px] lg:border-b-0 lg:border-r">
            <img src={systemLayers} alt="Conceptual layered city intelligence architecture" loading="lazy" width={1408} height={912} className="absolute inset-0 h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_oklab,var(--background)_86%,transparent),color-mix(in_oklab,var(--background)_10%,transparent)_58%,color-mix(in_oklab,var(--background)_68%,transparent))]" />
            <ArchitectureDiagram />
            <span className="label-mono absolute left-5 top-5 z-10 text-muted-foreground">City intelligence architecture</span>
          </div>
          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
            <div className="label-mono text-signal-blue">From data to insights</div>
            <h2 className="mt-4 font-display text-3xl font-semibold">A layered approach to urban intelligence.</h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">EcoGuardian integrates diverse data sources, builds a temporal memory of the city, and uses AI to discover what matters — so humans can make better, evidence-based decisions.</p>
            <div className="mt-8"><GhostButton to="/memory">Explore the System <ArrowRight className="h-4 w-4" /></GhostButton></div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {CAPABILITIES.map(({ number, title, body, icon: Icon, position }) => <article key={title} className="glass group relative min-h-[230px] overflow-hidden rounded-xl p-6 transition duration-300 hover:-translate-y-1 hover:border-signal-blue/45"><div className={`absolute inset-y-0 right-0 w-1/2 bg-cover opacity-40 transition duration-500 group-hover:opacity-55 ${position}`} style={{ backgroundImage: `url(${capabilityVisuals})` }} /><div className="absolute inset-0 bg-gradient-to-r from-card via-card/85 to-transparent" /><div className="relative z-10 max-w-[70%]"><div className="flex items-center gap-3"><Icon className="h-4 w-4 text-eco" /><span className="label-mono text-eco">{number} · {title}</span></div><p className="mt-7 text-sm leading-relaxed text-foreground/90">{body}</p></div></article>)}
      </section>

      <section className="glass overflow-hidden rounded-xl">
        <div className="grid lg:grid-cols-[0.5fr_1.5fr]">
          <div className="border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="flex items-center gap-3"><Layers3 className="h-5 w-5 text-signal-blue" /><span className="label-mono text-muted-foreground">City Memory</span></div>
            <h2 className="mt-5 font-display text-2xl font-semibold">A temporal record of what the city has observed, changed, and experienced.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">From satellite imagery to urban infrastructure, EcoGuardian builds a continuous memory of the city — across space and time.</p>
          </div>
          <div className="relative min-h-[290px] overflow-hidden p-6 sm:p-8">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${capabilityVisuals})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <span className="label-mono relative z-10 inline-flex rounded border border-border bg-background/65 px-2 py-1 text-muted-foreground">Illustrative system view · not live data</span>
            <div className="relative z-10 mt-16 grid grid-cols-5 gap-2">
              {["2020", "2021", "2022", "2023", "2024"].map((year, index) => <div key={year} className="relative flex flex-col items-center"><div className="relative flex w-full items-center"><span className="h-px flex-1 bg-signal-blue/40" /><span className={`h-3 w-3 shrink-0 rounded-full border border-signal-blue bg-background ${index === 4 ? "premium-glow" : ""}`} /><span className="h-px flex-1 bg-signal-blue/40" /></div><div className="mt-5 label-mono text-muted-foreground">{year}</div></div>)}
            </div>
            <div className="relative z-10 mt-9 text-center text-xs text-muted-foreground">Illustrative temporal structure only. No historical city observations are connected.</div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 py-3 lg:grid-cols-[0.48fr_1.52fr] lg:items-center">
        <div><h2 className="font-display text-xl font-semibold">The epistemic states</h2><p className="mt-2 text-xs leading-relaxed text-muted-foreground">A discovery is not presented as a prediction, and a hypothesis is not presented as a confirmed event.</p></div>
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-5">
          {EPISTEMIC.map(({ state, detail }, index) => <div key={state} className="relative bg-background/75 p-4 text-center"><StateBadge state={state} /><div className="mt-3 text-[10px] text-muted-foreground">{detail}</div>{index < EPISTEMIC.length - 1 && <ArrowRight className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-signal-blue sm:block" />}</div>)}
        </div>
      </section>

      <section className="relative overflow-hidden rounded-xl border border-border px-6 py-9 sm:px-10">
        <img src={cityBanner} alt="City skyline at blue hour" loading="lazy" width={1600} height={544} className="absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/25" />
        <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div><div className="label-mono text-eco">Let&apos;s work together</div><h2 className="mt-2 font-display text-3xl font-semibold">Book a Demo</h2><p className="mt-2 text-sm text-muted-foreground">See how EcoGuardian can support your city, organization, or research goals.</p></div>
          <PrimaryButton to="/contact">Book a Demo <ArrowRight className="h-4 w-4" /></PrimaryButton>
        </div>
      </section>

      <footer className="flex flex-col gap-5 border-t border-border px-1 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center gap-3 text-foreground"><Globe2 className="h-5 w-5 text-eco" /><span><strong className="font-medium">EcoGuardian AI</strong><span className="ml-2 text-muted-foreground">City Intelligence & Discovery</span></span></Link>
        <div className="flex flex-wrap gap-x-4 gap-y-2"><Link to="/watch">City Watch</Link><Link to="/memory">City Memory</Link><Link to="/discoveries">Discoveries</Link><Link to="/evidence">Evidence</Link><Link to="/contact">Contact</Link></div>
        <span className="label-mono">Research prototype</span>
      </footer>
    </div>
  );
}

function MapPin({ label, icon: Icon, className }: { label: string; icon: typeof Car; className: string }) {
  return <div className={`absolute animate-float-soft ${className}`}><div className="flex items-center gap-2 rounded-md border border-signal-blue/40 bg-background/65 px-3 py-2 text-xs text-foreground backdrop-blur"><Icon className="h-3.5 w-3.5 text-eco" />{label}</div><div className="mx-auto h-14 w-px bg-gradient-to-b from-signal-blue to-transparent" /><div className="mx-auto h-2 w-2 rounded-full bg-eco premium-glow" /></div>;
}

function ArchitectureDiagram() {
  const reduceMotion = useReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const spring = { type: "spring" as const, stiffness: 200, damping: 20 };

  return (
    <div
      className="relative z-10 grid min-h-[460px] grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] items-center gap-2 px-4 pb-6 pt-14 sm:gap-5 sm:px-8 lg:min-h-[500px]"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => { setExpanded(false); setActiveLayer(null); }}
    >
      <nav aria-label="Architecture layers" className="relative z-20 flex flex-col gap-1.5">
        {ARCHITECTURE_LAYERS.map(({ title, detail, icon: Icon }, index) => {
          const selected = activeLayer === index;
          return (
            <Button
              key={title}
              type="button"
              variant="ghost"
              aria-pressed={selected}
              onMouseEnter={() => setActiveLayer(index)}
              onFocus={() => { setExpanded(true); setActiveLayer(index); }}
              onBlur={() => { setExpanded(false); setActiveLayer(null); }}
              className="h-auto min-w-0 justify-start gap-2 rounded-md border border-transparent px-2 py-2 text-left text-muted-foreground hover:border-signal-blue/35 hover:bg-background/55 hover:text-foreground sm:gap-3 sm:px-3"
            >
              <Icon className="h-4 w-4 shrink-0 text-signal-blue" />
              <span className="min-w-0">
                <span className="block truncate text-[11px] font-medium text-foreground sm:text-xs">{title}</span>
                <span className="mt-0.5 hidden truncate text-[9px] font-normal text-muted-foreground sm:block">{detail}</span>
              </span>
            </Button>
          );
        })}
      </nav>

      <div className="relative h-72 min-w-0 [perspective:900px] sm:h-80" aria-label="Interactive 3D architecture stack">
        <motion.div
          className="absolute inset-0 [transform-style:preserve-3d]"
          animate={reduceMotion ? { y: 0 } : { y: [4, -4, 4] }}
          transition={reduceMotion ? { duration: 0 } : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute left-1/2 top-1/2 h-48 w-[82%] max-w-sm -translate-x-1/2 -translate-y-1/2 [transform-style:preserve-3d] sm:h-56">
            {ARCHITECTURE_LAYERS.map(({ title, icon: Icon }, index) => {
              const selected = activeLayer === index;
              const hasSelection = activeLayer !== null;
              const spacing = expanded ? 35 : 23;
              const offset = (index - 2) * spacing;
              return (
                <motion.div
                  key={title}
                  className="absolute inset-x-0 top-1/2 flex h-24 cursor-pointer items-center justify-between rounded-lg border border-signal-blue/35 bg-card/85 px-4 backdrop-blur-xl [transform-style:preserve-3d]"
                  animate={{
                    y: offset,
                    z: expanded ? Math.abs(index - 2) * 8 : 0,
                    rotateX: 57,
                    rotateZ: -28,
                    scale: selected ? 1.05 : 1,
                    opacity: hasSelection && !selected ? 0.4 : 1,
                  }}
                  transition={spring}
                  onMouseEnter={() => setActiveLayer(index)}
                  onFocus={() => setActiveLayer(index)}
                  tabIndex={0}
                  aria-label={`${title} architecture layer`}
                >
                  <span className="flex items-center gap-2 text-xs font-medium text-foreground"><Icon className="h-4 w-4 text-signal-blue" />{title}</span>
                  <span className="h-2 w-2 rounded-full bg-signal-blue shadow-[0_0_16px_var(--signal-blue)]" />
                  {selected && <motion.span layoutId="architecture-outline" className="architecture-glow pointer-events-none absolute inset-0 rounded-lg border border-signal-blue" transition={spring} />}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}