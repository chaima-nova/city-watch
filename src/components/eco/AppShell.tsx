import { Link, useRouterState } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { Activity, Clock, Compass, Database, FileSearch, LayoutGrid, Menu, Radar, TriangleAlert } from "lucide-react";
import { configQuery } from "@/lib/data/api";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Overview", icon: LayoutGrid },
  { to: "/watch", label: "City Watch", icon: Compass },
  { to: "/memory", label: "City Memory", icon: Clock },
  { to: "/discoveries", label: "Discoveries", icon: Radar },
  { to: "/warnings", label: "Early Warnings", icon: TriangleAlert },
  { to: "/evidence", label: "Evidence", icon: FileSearch },
  { to: "/data", label: "Data", icon: Database },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { data: config } = useQuery(configQuery);
  const connected = config?.connected ?? false;

  return (
    <div className="flex min-h-screen flex-col topo-bg">
      <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-border bg-background/80 px-4 backdrop-blur-xl sm:px-5">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-7 w-7 place-items-center rounded-md border border-eco-mid/50 bg-eco-deep/40">
            <Activity className="h-3.5 w-3.5 text-eco" />
          </div>
          <div className="leading-tight">
            <div className="label-mono text-foreground">EcoGuardian AI</div>
            <div className="hidden text-[11px] text-muted-foreground sm:block">City Intelligence & Discovery</div>
          </div>
        </Link>
        <div className="flex items-center gap-3">
          {connected && config?.cityName && (
            <span className="label-mono text-muted-foreground">{config.cityName}</span>
          )}
          <span className="label-mono hidden rounded border border-border px-2.5 py-1 text-muted-foreground lg:inline-flex">Research prototype</span>
          <span className={cn("label-mono flex items-center gap-2 rounded border px-2.5 py-1", connected ? "border-eco-mid/50 text-eco" : "border-warn/40 text-warn")}>
            <span className={cn("h-1.5 w-1.5 rounded-full", connected ? "bg-eco" : "bg-warn")} />
             {connected ? "Data connected" : "Data not connected"}
          </span>
        </div>
      </header>
      <div className="flex flex-1">
         <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-60 shrink-0 flex-col border-r border-border bg-background/35 px-3 py-6 backdrop-blur-lg md:flex">
           <div className="label-mono px-3 pb-4 text-muted-foreground/70">City intelligence</div>
          <nav className="flex flex-col gap-0.5">
            {NAV.map(({ to, label, icon: Icon }) => {
              const active = to === "/" ? path === "/" : path.startsWith(to);
              return (
                 <Link key={to} to={to} className={cn("group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition duration-300", active ? "bg-accent text-foreground shadow-[inset_2px_0_var(--eco)]" : "text-muted-foreground hover:bg-accent/60 hover:text-foreground")}>
                  <Icon className={cn("h-4 w-4", active && "text-eco")} />
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto rounded-md border border-border p-3 text-[11px] leading-relaxed text-muted-foreground">
            Experimental research system. Signals are not predictions and require human validation.
          </div>
        </aside>
        <main className="min-w-0 flex-1">
           <nav aria-label="Mobile navigation" className="flex gap-1 overflow-x-auto border-b border-border bg-background/55 px-3 py-2 backdrop-blur md:hidden">
             <span className="grid h-8 w-8 shrink-0 place-items-center text-muted-foreground" title="Navigation"><Menu className="h-4 w-4" /></span>
            {NAV.map(({ to, label }) => (
              <Link key={to} to={to} className="whitespace-nowrap rounded px-2.5 py-1 text-xs text-muted-foreground [&.active]:bg-accent [&.active]:text-foreground">{label}</Link>
            ))}
          </nav>
           <div className={cn("mx-auto px-4 py-5 sm:px-6 sm:py-7 lg:px-8", path === "/" ? "max-w-[1640px]" : "max-w-[1400px]")}>{children}</div>
        </main>
      </div>
    </div>
  );
}
