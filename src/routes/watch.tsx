import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { EmptyState, Panel, PageHeader, PrimaryButton } from "@/components/eco/ui";
import { observationsQuery, warningsQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/watch")({
  head: () => seo("City Watch", "A spatial view of observations, changes and emerging signals."),
  loader: ({ context }) => Promise.all([
    context.queryClient.ensureQueryData(observationsQuery),
    context.queryClient.ensureQueryData(warningsQuery),
  ]),
  component: Watch,
});

function Watch() {
  const { data: obs } = useSuspenseQuery(observationsQuery);
  const { data: signals } = useSuspenseQuery(warningsQuery);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="City Watch" title="City Watch" subtitle="A spatial view of observations, changes and emerging signals." />
      <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-border grid-bg">
        <svg className="absolute inset-0 h-full w-full opacity-30" aria-hidden>
          {[120, 220, 320].map((r) => (
            <circle key={r} cx="50%" cy="50%" r={r} fill="none" stroke="currentColor" className="text-border" strokeDasharray="2 6" />
          ))}
        </svg>
        <div className="absolute left-4 top-4 flex gap-2">
          {["Observations", "Anomalies", "Areas", "Temporal", "Signals"].map((l) => (
            <span key={l} className="label-mono rounded border border-border bg-background/70 px-2 py-1 text-muted-foreground/70">{l}</span>
          ))}
        </div>
        {obs.length === 0 && (
          <div className="relative flex min-h-[520px] items-center justify-center">
            <div className="glass rounded-lg">
              <EmptyState title="No city data connected" body="Connect a city dataset to begin observing spatial and temporal patterns." action={<PrimaryButton to="/data">Connect Data</PrimaryButton>} />
            </div>
          </div>
        )}
      </div>
      <Panel title="Active signals">
        {signals.length === 0 ? <p className="text-sm text-muted-foreground">No validated signals available.</p> : null}
      </Panel>
    </div>
  );
}
