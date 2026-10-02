import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Building2, Mail, MapPin } from "lucide-react";
import { PrimaryButton } from "@/components/eco/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("Book a Demo", "Explore EcoGuardian with your city data, research goals, or urban systems challenge."),
  component: ContactPage,
});

const INTERESTS = ["Infrastructure", "Mobility", "Environment", "Climate", "Land Use", "Energy", "Water", "Public Services", "Earth Observation", "City Data Integration", "Research Collaboration", "Other"];

function ContactPage() {
  const [state, setState] = useState<"idle" | "submitting" | "unavailable">("idle");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    window.setTimeout(() => setState("unavailable"), 500);
  }
  const field = "w-full rounded-md border border-input bg-background/55 px-3.5 py-3 text-sm text-foreground outline-none transition placeholder:text-subtle focus:border-signal-blue focus:ring-2 focus:ring-signal-blue/15";
  return (
    <div className="mx-auto max-w-6xl py-4 sm:py-8">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
        <section className="lg:sticky lg:top-24 lg:self-start">
          <div className="label-mono text-eco">Let&apos;s work together</div>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">Explore EcoGuardian with your city data.</h1>
          <p className="mt-5 max-w-lg leading-relaxed text-muted-foreground">Tell us about your city, organization, data landscape, or research challenge. We&apos;ll use that context to shape a useful conversation.</p>
          <div className="mt-9 space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3"><Building2 className="h-4 w-4 text-signal-blue" /> City and organization context</div>
            <div className="flex items-center gap-3"><MapPin className="h-4 w-4 text-signal-blue" /> Urban system or regional challenge</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-signal-blue" /> Data and research collaboration</div>
          </div>
        </section>
        <form onSubmit={submit} className="glass rounded-xl p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm">Full Name<input required name="name" autoComplete="name" className={`${field} mt-2`} /></label>
            <label className="text-sm">Organization<input required name="organization" autoComplete="organization" className={`${field} mt-2`} /></label>
            <label className="text-sm">Role<input required name="role" autoComplete="organization-title" className={`${field} mt-2`} /></label>
            <label className="text-sm">Work Email<input required type="email" name="email" autoComplete="email" className={`${field} mt-2`} /></label>
            <label className="text-sm">City / Region<input required name="region" autoComplete="address-level2" className={`${field} mt-2`} /></label>
            <label className="text-sm">Area of Interest<select required name="interest" defaultValue="" className={`${field} mt-2`}><option value="" disabled>Select an area</option>{INTERESTS.map((item) => <option key={item}>{item}</option>)}</select></label>
            <label className="text-sm sm:col-span-2">Message<textarea required name="message" rows={6} className={`${field} mt-2 resize-y`} placeholder="Describe your data, research question, or city challenge." /></label>
          </div>
          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <PrimaryButton disabled={state === "submitting"}>{state === "submitting" ? "Checking delivery…" : <>Request a Demo <ArrowRight className="h-4 w-4" /></>}</PrimaryButton>
            <span className="max-w-sm text-xs leading-relaxed text-muted-foreground">No email service is connected to this research prototype.</span>
          </div>
          {state === "unavailable" && <div role="alert" className="mt-5 rounded-md border border-warn/40 bg-warn/5 p-4 text-sm text-warn">Your request was not sent. Demo-request delivery is unavailable until an email service is connected.</div>}
        </form>
      </div>
    </div>
  );
}