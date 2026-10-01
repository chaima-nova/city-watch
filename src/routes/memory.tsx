import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { EmptyState, Panel, PageHeader, PrimaryButton } from "@/components/eco/ui";
import { memoryQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/memory")({
  head: () => seo("City Memory", "A historical memory of how the city has changed over time."),
  loader: ({ context }) => context.queryClient.ensureQueryData(memoryQuery),
  component: Memory,
});

const LAYERS = ["Environment", "Infrastructure", "Mobility", "Events", "Observations"];

function Memory() {
  const { data } = useSuspenseQuery(memoryQuery);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="City Memory" title="City Memory" subtitle="EcoGuardian doesn't only watch today's city. It remembers how the city has changed over time." />
      <Panel title="Temporal layers" meta={<span className="label-mono text-muted-foreground">Time axis · not connected</span>}>
        <div className="relative">
          <div className="space-y-2">
            {LAYERS.map((l) => (
              <div key={l} className="grid grid-cols-[140px_1fr] items-center gap-4">
                <span className="label-mono text-muted-foreground">{l}</span>
                <div className="h-9 rounded border border-dashed border-border grid-bg" />
              </div>
            ))}
          </div>
          {data.length === 0 && (
            <div className="absolute inset-0 left-[156px] grid place-items-center">
              <div className="glass rounded-lg">
                <EmptyState title="City memory not connected" body="Connect historical observations to build the city's memory." action={<PrimaryButton to="/data">Connect Data</PrimaryButton>} />
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
          <span>Period selection becomes available once historical data is connected.</span>
          <span className="label-mono">— · —</span>
        </div>
      </Panel>
    </div>
  );
}
