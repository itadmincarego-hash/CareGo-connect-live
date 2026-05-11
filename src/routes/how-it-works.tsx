import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({ meta: [{ title: "How It Works — CareGo" }] }),
  component: () => (
    <PublicShell eyebrow="How it works" title="From setup to safety in three steps." subtitle="Designed so anyone — family, carer, or operator — can be up and running in a single afternoon.">
      <div className="space-y-6">
        {[
          { n: "01", t: "Set up the care recipient", d: "Add a profile, pair compatible devices, and invite family or care team members. CareGo's onboarding flow takes around 12 minutes." },
          { n: "02", t: "Let the AI learn the baseline", d: "Over 48 hours, the AI Companion learns each person's rhythm — sleep, mobility, hydration, vitals, medication." },
          { n: "03", t: "Monitor & respond — together", d: "Family see live wellbeing. Providers see live operations. The AI handles everything in between." },
          { n: "04", t: "Audit, report, improve", d: "Every event, decision and visit logged. Generate CQC-ready reports in seconds." },
        ].map(s => (
          <Card key={s.n} className="flex gap-6 border-border/60 p-7">
            <span className="text-3xl font-semibold text-gradient">{s.n}</span>
            <div>
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex justify-center"><Button asChild size="lg" className="bg-gradient-hero shadow-glow"><Link to="/signup">Start your trial</Link></Button></div>
    </PublicShell>
  ),
});
