import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { EpistemicLegend, GhostButton, Panel, PrimaryButton } from "@/components/eco/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("Overview", "Watch the city. Discover what is changing. Detect emerging risks before they escalate."),
  component: Overview,
});

const CAPS = [
  { n: "01", t: "Watch", d: "Continuously organize and monitor heterogeneous city data." },
  { n: "02", t: "Discover", d: "Identify unusual changes and relationships that were not explicitly predefined." },
  { n: "03", t: "Warn", d: "Surface emerging signals with evidence, uncertainty, and historical context." },
];

const PIPE = ["City data", "City memory", "Discovery", "Evidence", "Early warning"];

function Overview() {
  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-xl border border-border grid-bg px-10 py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-eco-deep/40 blur-3xl" />
        <div className="relative max-w-3xl">
          <span className="label-mono rounded border border-warn/40 px-2.5 py-1 text-warn">Research prototype · Experimental</span>
          <div className="mt-8 label-mono text-eco-mid">EcoGuardian AI · City Intelligence & Early-Warning System</div>
          <h1 className="mt-4 text-5xl font-semibold leading-[1.05] tracking-tight">
            Watch the city. Discover what is changing.{" "}
            <span className="text-eco">Detect emerging risks before they escalate.</span>
          </h1>
          <p className="mt-6 max-w-xl text-muted-foreground">
            An experimental system that builds a historical City Memory from heterogeneous urban data and surfaces evidence-based signals for human review — never conclusions on its own.
          </p>
          <div className="mt-8 flex gap-3">
            <PrimaryButton to="/data">Connect data <ArrowRight className="h-4 w-4" /></PrimaryButton>
            <GhostButton>Observe → Remember → Discover → Understand → Anticipate</GhostButton>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {CAPS.map((c) => (
          <div key={c.n} className="glass rounded-lg p-6 transition hover:border-eco-mid/40">
            <div className="label-mono text-eco-mid">{c.n} — {c.t}</div>
            <p className="mt-4 text-[15px] leading-relaxed">{c.d}</p>
          </div>
        ))}
      </section>

      <Panel title="System architecture · conceptual" meta={<span className="label-mono text-muted-foreground">No patterns discovered yet</span>}>
        <div className="flex flex-col items-stretch gap-3 py-6 lg:flex-row lg:items-center">
          {PIPE.map((p, i) => (
            <div key={p} className="flex flex-1 items-center gap-3">
              <div className="flex-1 rounded-md border border-border bg-background/60 px-4 py-5 text-center">
                <div className="label-mono text-muted-foreground">Stage {i + 1}</div>
                <div className="mt-1.5 text-sm font-medium">{p}</div>
              </div>
              {i < PIPE.length - 1 && (
                <div className="relative hidden h-px w-10 overflow-hidden bg-border lg:block">
                  <div className="absolute inset-y-0 w-1/4 bg-eco-mid animate-flow" style={{ animationDelay: `${i * 0.4}s` }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-border pt-4">
          <div className="label-mono mb-3 text-muted-foreground">Epistemic states used throughout</div>
          <EpistemicLegend />
        </div>
      </Panel>
    </div>
  );
}
