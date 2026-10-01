import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { EmptyState, GhostButton, Panel, PageHeader } from "@/components/eco/ui";
import { warningsQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/warnings")({
  head: () => seo("Early Warning", "Surface emerging signals without pretending to know the future."),
  loader: ({ context }) => context.queryClient.ensureQueryData(warningsQuery),
  component: Warnings,
});

const FIELDS = ["Signal status", "Affected area", "Detection time", "Contributing observations", "Historical comparisons", "Potential lead time", "Uncertainty", "Missing data", "Human validation"];

function Warnings() {
  const { data } = useSuspenseQuery(warningsQuery);
  const has = data.length > 0;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Early Warning" title="Early Warning" subtitle="Surface emerging signals without pretending to know the future." />
      <Panel>
        <EmptyState title="No validated early-warning signals" body="EcoGuardian will surface an early-warning signal only when supported by connected data and validated detection logic." />
      </Panel>
      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="What EcoGuardian knows" meta={<span className="label-mono text-signal-blue">Evidence-backed only</span>}>
          <p className="text-sm text-muted-foreground">Insufficient evidence. No observations are connected.</p>
        </Panel>
        <Panel title="What EcoGuardian does not know" meta={<span className="label-mono text-warn">Uncertainty</span>}>
          <ul className="space-y-2 text-sm">
            {["Exact cause", "Whether an event will occur", "Final severity"].map((u) => (
              <li key={u} className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-warn" />{u}</li>
            ))}
          </ul>
        </Panel>
      </div>
      <Panel title="Signal structure · shown when a real signal exists">
        <div className="grid gap-2 md:grid-cols-3">
          {FIELDS.map((f) => (
            <div key={f} className="flex items-center justify-between rounded-md border border-border px-3 py-2.5 text-sm">
              <span className="text-muted-foreground">{f}</span><span className="text-muted-foreground/50">—</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2 border-t border-border pt-4">
          <GhostButton disabled={!has}>View evidence</GhostButton>
          <GhostButton disabled={!has}>Human validation</GhostButton>
        </div>
      </Panel>
    </div>
  );
}
