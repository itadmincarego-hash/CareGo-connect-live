import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Activity, AlertTriangle, BarChart3, Bot, Building2, HeartHandshake, Headphones, MapPin } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({ meta: [{ title: "Features — CareGo" }, { name: "description", content: "Explore the full CareGo platform: AI care companion, monitoring, response, marketplace and more." }] }),
  component: () => (
    <PublicShell eyebrow="Features" title="The complete operating system for modern care." subtitle="From AI-powered home monitoring to live workforce dispatch — CareGo connects every part of the care journey.">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {([
          { Icon: Bot, title: "AI Care Companion", desc: "24/7 conversational presence with explainable decisioning." },
          { Icon: Activity, title: "Wellbeing monitoring", desc: "Vitals, movement, sleep, and environment fused into one score." },
          { Icon: AlertTriangle, title: "Risk response", desc: "Three-tier model: prompt, notify, dispatch." },
          { Icon: MapPin, title: "Live agent tracking", desc: "Verified responders, live route, ETA, and full audit trail." },
          { Icon: Building2, title: "Workforce & compliance", desc: "Rotas, DBS, training and right-to-work in one console." },
          { Icon: HeartHandshake, title: "Staff marketplace", desc: "Share verified capacity across organisations." },
          { Icon: BarChart3, title: "Reporting & audit", desc: "Every alert, AI decision, and visit — exportable." },
          { Icon: Headphones, title: "24/7 human support", desc: "Real responders behind every escalation." },
        ] as const).map(({ Icon, title, desc }) => (
          <Card key={title} className="border-border/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild size="lg" className="bg-gradient-hero shadow-glow"><Link to="/app/family">View live demo</Link></Button>
      </div>
    </PublicShell>
  ),
});
