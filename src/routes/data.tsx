import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Building2, CloudSun, Map, Navigation, Satellite, Trees, Upload, CalendarDays } from "lucide-react";
import { EmptyState, Panel, PageHeader, PrimaryButton } from "@/components/eco/ui";
import { sourcesQuery } from "@/lib/data/api";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/data")({
  head: () => seo("Data Sources", "Manage the city data sources that feed EcoGuardian's memory and discovery."),
  loader: ({ context }) => context.queryClient.ensureQueryData(sourcesQuery),
  component: Data,
});

const KINDS = [
  { l: "Satellite / Earth observation", i: Satellite },
  { l: "Environmental observations", i: Trees },
  { l: "Infrastructure data", i: Building2 },
  { l: "Mobility data", i: Navigation },
  { l: "Weather", i: CloudSun },
  { l: "City event records", i: CalendarDays },
  { l: "Geospatial datasets", i: Map },
  { l: "User-provided datasets", i: Upload },
];

function Data() {
  const { data } = useSuspenseQuery(sourcesQuery);
  return (
    <div className="space-y-6">
      <PageHeader eyebrow="Data" title="Data" subtitle="Every signal starts with a real, traceable data source." right={<PrimaryButton>Connect Data Source</PrimaryButton>} />
      <Panel title="Connected sources">
        {data.length === 0 && <EmptyState title="No data sources connected" body="Connect a data source to start building the city's memory." action={<PrimaryButton>Connect Data Source</PrimaryButton>} />}
      </Panel>
      <div className="grid gap-4 md:grid-cols-3">
        {["Data health", "Coverage", "Last ingestion"].map((t) => (
          <Panel key={t} title={t}><p className="text-sm text-muted-foreground">Not available — no sources connected.</p></Panel>
        ))}
      </div>
      <Panel title="Available dataset types · supported by the architecture">
        <div className="grid gap-2 md:grid-cols-4">
          {KINDS.map(({ l, i: Icon }) => (
            <div key={l} className="flex items-center gap-3 rounded-md border border-border px-3 py-3 text-sm">
              <Icon className="h-4 w-4 text-eco-mid" />
              <span className="flex-1">{l}</span>
              <span className="label-mono text-muted-foreground/60">Not connected</span>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}
