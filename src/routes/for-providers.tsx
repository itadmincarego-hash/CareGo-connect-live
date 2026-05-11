import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/for-providers")({
  head: () => ({ meta: [{ title: "For Care Providers — CareGo" }] }),
  component: () => (
    <PublicShell eyebrow="For providers" title="More work. Less admin. Real recognition." subtitle="Built with carers, agents, and support workers — to make great care sustainable.">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-4 text-sm">
          {[
            "Today's visits, briefings, and live travel",
            "One-tap check-in, notes, and incident logging",
            "Live earnings and shift availability control",
            "Verified profile that travels with you across jobs",
            "Direct, masked-number contact with families",
            "Marketplace access — extra shifts when you want them",
          ].map(p => <li key={p} className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{p}</span></li>)}
        </ul>
        <Card className="border-border/60 p-6">
          <h3 className="font-semibold">Try the provider dashboard</h3>
          <p className="mt-1 text-sm text-muted-foreground">Step into Aisha's day — visits, travel, check-ins, and earnings.</p>
          <Button asChild className="mt-4 bg-gradient-hero shadow-glow"><Link to="/app/provider">Open provider demo</Link></Button>
        </Card>
      </div>
    </PublicShell>
  ),
});
