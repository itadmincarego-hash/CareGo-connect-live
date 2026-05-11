import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/for-families")({
  head: () => ({ meta: [{ title: "For Families — CareGo" }, { name: "description", content: "Real-time wellbeing, alerts, and on-demand support for the people you love." }] }),
  component: () => (
    <PublicShell eyebrow="For families" title="Peace of mind. Even from 200 miles away." subtitle="Know your loved one is safe — without becoming the 24/7 carer.">
      <div className="grid gap-8 lg:grid-cols-2">
        <ul className="space-y-4 text-sm">
          {[
            "Live wellbeing score and daily summary",
            "Three-tier alerts tuned to your family",
            "AI Companion that talks to your loved one — and to you",
            "Book trusted, verified carers on demand",
            "See exactly when help is on the way",
            "Shared family access — coordinate across siblings",
          ].map(p => <li key={p} className="flex items-start gap-2.5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{p}</span></li>)}
        </ul>
        <Card className="border-border/60 p-6">
          <h3 className="font-semibold">Try the family dashboard</h3>
          <p className="mt-1 text-sm text-muted-foreground">Walk through a live demo with Margaret, an 82-year-old being monitored by her daughter Sarah.</p>
          <Button asChild className="mt-4 bg-gradient-hero shadow-glow"><Link to="/app/family">Open family demo</Link></Button>
        </Card>
      </div>
    </PublicShell>
  ),
});
