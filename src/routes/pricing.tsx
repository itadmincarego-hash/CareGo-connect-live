import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { pricingTiers } from "@/lib/demo-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({ meta: [{ title: "Pricing — CareGo" }] }),
  component: () => (
    <PublicShell eyebrow="Pricing" title="Plans that scale with the care you give." subtitle="Start free for 14 days. No card required.">
      <div className="grid gap-6 md:grid-cols-3">
        {pricingTiers.map(t => (
          <Card key={t.name} className={`p-7 ${t.featured ? "border-primary shadow-elevated ring-1 ring-primary" : "border-border/60"}`}>
            <p className="text-sm font-semibold text-primary">{t.name}</p>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-4xl font-semibold">{t.price}</span>
              {t.per && <span className="text-sm text-muted-foreground">{t.per}</span>}
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
            <ul className="mt-6 space-y-2.5">
              {t.features.map(f => <li key={f} className="flex items-start gap-2 text-sm"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><span>{f}</span></li>)}
            </ul>
            <Button asChild className={`mt-7 w-full ${t.featured ? "bg-gradient-hero shadow-glow" : ""}`} variant={t.featured ? "default" : "outline"}>
              <Link to={t.cta === "Book Demo" ? "/contact" : "/signup"}>{t.cta}</Link>
            </Button>
          </Card>
        ))}
      </div>
    </PublicShell>
  ),
});
