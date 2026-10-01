import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { EmptyState, EpistemicLegend, Panel, PageHeader } from "@/components/eco/ui";
import { evidenceQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/evidence")({
  head: () => seo("Evidence", "Every important signal should be traceable back to its supporting observations."),
  loader: ({ context }) => context.queryClient.ensureQueryData(evidenceQuery),
  component: Evidence,
});

const COLS = ["Observation", "Source", "Time", "Location", "Relationship", "Historical comparison", "Uncertainty", "Data quality"];

function Evidence() {
  const { data } = useSuspenseQuery(evidenceQuery);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Evidence" title="Evidence" subtitle="Every important signal should be traceable back to its supporting observations." />
      <Panel title="Evidence explorer" meta={<EpistemicLegend />}>
        <div className="overflow-x-auto">
          <div className="grid min-w-[900px] grid-cols-8 border-b border-border pb-2">
            {COLS.map((c) => <span key={c} className="label-mono text-muted-foreground">{c}</span>)}
          </div>
        </div>
        {data.length === 0 && <EmptyState title="No evidence available" body="Evidence will appear here once observations and discovery results are connected." />}
      </Panel>
    </div>
  );
}
