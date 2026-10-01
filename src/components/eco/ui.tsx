import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import type { EpistemicState } from "@/lib/data/types";
import { cn } from "@/lib/utils";

export function PageHeader({ eyebrow, title, subtitle, right }: { eyebrow: string; title: string; subtitle: string; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-border pb-6">
      <div>
        <div className="label-mono text-eco-mid">{eyebrow}</div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">«{subtitle}»</p>
      </div>
      {right}
    </div>
  );
}

export function Panel({ title, meta, children, className }: { title?: string; meta?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={cn("glass rounded-lg", className)}>
      {title && (
        <header className="flex items-center justify-between border-b border-border px-4 py-2.5">
          <span className="label-mono text-muted-foreground">{title}</span>
          {meta}
        </header>
      )}
      <div className="p-4">{children}</div>
    </section>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
      <div className="relative mb-5 h-10 w-10">
        <div className="absolute inset-0 rounded-full border border-eco-mid/40" />
        <div className="absolute inset-3 rounded-full border border-eco-mid/60 animate-pulse-soft" />
      </div>
      <div className="label-mono text-foreground">{title}</div>
      <p className="mt-3 max-w-md text-sm text-muted-foreground">«{body}»</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function AwaitingTag({ label = "Awaiting data" }: { label?: string }) {
  return <span className="label-mono rounded border border-border px-2 py-0.5 text-muted-foreground">{label}</span>;
}

const STATE_STYLE: Record<EpistemicState, string> = {
  observed: "border-signal-blue/40 text-signal-blue",
  discovered: "border-eco-mid/50 text-eco-mid",
  inferred: "border-warn/40 text-warn",
  hypothesized: "border-dashed border-muted-foreground/50 text-muted-foreground",
  validated: "border-eco/60 bg-eco/10 text-eco",
};

export function StateBadge({ state }: { state: EpistemicState }) {
  return <span className={cn("label-mono rounded border px-2 py-0.5", STATE_STYLE[state])}>{state}</span>;
}

export function EpistemicLegend() {
  const states: EpistemicState[] = ["observed", "discovered", "inferred", "hypothesized", "validated"];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {states.map((s, i) => (
        <span key={s} className="flex items-center gap-2">
          <StateBadge state={s} />
          {i < states.length - 1 && <span className="text-muted-foreground/50">≠</span>}
        </span>
      ))}
    </div>
  );
}

export function PrimaryButton({ children, to, onClick, disabled }: { children: ReactNode; to?: string; onClick?: () => void; disabled?: boolean }) {
  const cls = "inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40";
  if (to) return <Link to={to} className={cls}>{children}</Link>;
  return <button className={cls} onClick={onClick} disabled={disabled}>{children}</button>;
}

export function GhostButton({ children, disabled, title }: { children: ReactNode; disabled?: boolean; title?: string }) {
  return (
    <button title={title} disabled={disabled} className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm text-foreground transition hover:bg-accent disabled:cursor-not-allowed disabled:opacity-40">
      {children}
    </button>
  );
}
