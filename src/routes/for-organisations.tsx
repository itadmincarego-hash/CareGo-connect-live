import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/for-organisations")({
  head: () => ({ meta: [{ title: "For Care Organisations — CareGo" }] }),
  component: () => (
    <PublicShell eyebrow="For care organisations" title="Run a safer, smarter, more profitable operation." subtitle="Workforce, compliance, monitoring and marketplace — in one console.">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-4 text-sm">
          {[
            "Live workforce dispatch and shift gaps",
            "DBS, training, right-to-work in one view",
            "Live resident / client monitoring overview",
            "Compliance-ready reporting and exports",
            "Marketplace: unlock new revenue and cover gaps fast",
            "Dedicated success manager and SLA",
          ].map(p => <li key={p} className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{p}</span></li>)}
        </ul>
        <Card className="border-border/60 p-6">
          <h3 className="font-semibold">Try the organisation console</h3>
          <p className="mt-1 text-sm text-muted-foreground">Run BrightCare Bristol for the day — 142 staff, 326 clients monitored.</p>
          <Button asChild className="mt-4 bg-gradient-hero shadow-glow"><Link to="/app/organisation">Open organisation demo</Link></Button>
        </Card>
      </div>
    </PublicShell>
  ),
});
