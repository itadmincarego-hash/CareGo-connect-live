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
        {[
          [Bot, "AI Care Companion", "24/7 conversational presence with explainable decisioning."],
          [Activity, "Wellbeing monitoring", "Vitals, movement, sleep, and environment fused into one score."],
          [AlertTriangle, "Risk response", "Three-tier model: prompt, notify, dispatch."],
          [MapPin, "Live agent tracking", "Verified responders, live route, ETA, and full audit trail."],
          [Building2, "Workforce & compliance", "Rotas, DBS, training and right-to-work in one console."],
          [HeartHandshake, "Staff marketplace", "Share verified capacity across organisations."],
          [BarChart3, "Reporting & audit", "Every alert, AI decision, and visit — exportable."],
          [Headphones, "24/7 human support", "Real responders behind every escalation."],
        ].map(([Icon, title, desc]) => (
          <Card key={title as string} className="border-border/60 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary">
              {/* @ts-expect-error icon */}
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold">{title as string}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{desc as string}</p>
          </Card>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Button asChild size="lg" className="bg-gradient-hero shadow-glow"><Link to="/app/family">View live demo</Link></Button>
      </div>
    </PublicShell>
  ),
});
