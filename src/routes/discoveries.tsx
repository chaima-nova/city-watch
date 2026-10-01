import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ArrowDown } from "lucide-react";
import { AwaitingTag, EmptyState, GhostButton, Panel, PageHeader, StateBadge } from "@/components/eco/ui";
import { discoveriesQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/discoveries")({
  head: () => seo("Discovery Engine", "Find changes and relationships humans did not explicitly ask for."),
  loader: ({ context }) => context.queryClient.ensureQueryData(discoveriesQuery),
  component: Discoveries,
});

function Discoveries() {
  const { data } = useSuspenseQuery(discoveriesQuery);
  const has = data.length > 0;
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Discovery" title="Discovery Engine" subtitle="Find changes and relationships humans did not explicitly ask for."
        right={<span className="label-mono rounded border border-warn/40 px-2.5 py-1 text-warn">Awaiting real data</span>} />
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Panel title="Candidate discovery" meta={<StateBadge state="hypothesized" />}>
          <div className="flex flex-col items-center gap-2 py-6">
            {["A", "B", "C"].map((v, i) => (
              <div key={v} className="flex w-full max-w-sm flex-col items-center gap-2">
                <div className="flex w-full items-center justify-between rounded-md border border-dashed border-border px-4 py-3">
                  <span className="text-sm">Variable {v} <span className="text-muted-foreground">· Observed variable</span></span>
                  <AwaitingTag label="—" />
                </div>
                {i < 2 && <ArrowDown className="h-4 w-4 text-muted-foreground/60" />}
              </div>
            ))}
          </div>
          <div className="grid gap-3 border-t border-border pt-4 md:grid-cols-3">
            {["Spatial relationship", "Temporal relationship", "Historical similarity"].map((r) => (
              <div key={r} className="rounded-md border border-border p-3">
                <div className="label-mono text-muted-foreground">{r}</div>
                <div className="mt-6 h-12 rounded border border-dashed border-border grid place-items-center"><AwaitingTag /></div>
              </div>
            ))}
          </div>
        </Panel>
        <div className="space-y-4">
          <Panel title="Evidence">
            <ul className="space-y-2">
              {["Environmental observation", "Infrastructure observation", "Historical comparison"].map((e) => (
                <li key={e} className="flex items-center justify-between rounded-md border border-border px-3 py-2.5 text-sm">
                  {e}<AwaitingTag />
                </li>
              ))}
            </ul>
          </Panel>
          <Panel>
            {!has && <EmptyState title="No candidate discoveries yet" body="No candidate discoveries yet. Connect historical city data to begin discovery experiments." />}
            <div className="flex gap-2 border-t border-border pt-4">
              <GhostButton disabled={!has} title="Requires a candidate discovery">Inspect Evidence</GhostButton>
              <GhostButton disabled={!has} title="Requires a candidate discovery">Send for Human Review</GhostButton>
            </div>
          </Panel>
        </div>
      </div>
    </div>
  );
}
