import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatCard, SeverityBadge, LiveDot } from "@/components/app/widgets";
import { Activity, Bot, Sparkles, Wifi, AlertTriangle, CheckCircle2, Pill, Heart, DoorOpen, Moon, Footprints } from "lucide-react";
import { aiDecisions, liveEvents } from "@/lib/demo-data";

export const Route = createFileRoute("/app/monitoring")({
  head: () => ({ meta: [{ title: "AI monitoring — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="AI care companion · live monitoring" subtitle="Real-time event stream, AI decisions, and escalation control."
        badge={<Badge className="bg-accent-soft text-accent border-0"><LiveDot /><span className="ml-1.5">Live</span></Badge>} />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Activity} label="Events today" value={142} hint="98% resolved by AI" tone="primary" />
        <StatCard icon={AlertTriangle} label="Open escalations" value={1} hint="Medium · awaiting ack" tone="warning" />
        <StatCard icon={Sparkles} label="AI confidence" value="94%" hint="Rolling 24h average" tone="success" />
        <StatCard icon={Wifi} label="Device health" value="7/8" hint="Kitchen temp offline" tone="default" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-5">
          <h3 className="font-semibold">Live event feed</h3>
          <div className="mt-4 space-y-3">
            {liveEvents.map(e => {
              const Icon = e.type === "medication" ? Pill : e.type === "vitals" ? Heart : e.type === "door" ? DoorOpen : e.type === "sleep" ? Moon : Footprints;
              return (
                <div key={e.id} className="flex items-start gap-3 rounded-xl border border-border p-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary"><Icon className="h-4 w-4" /></div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{e.title}</p>
                      <span className="text-[10px] text-muted-foreground">{e.time}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">{e.reasoning}</p>
                    <div className="mt-1.5 flex items-center gap-2 text-[10px]">
                      <SeverityBadge severity={e.severity as "info" | "success"} />
                      <span className="text-muted-foreground">{e.confidence}% confidence</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
        <Card className="border-border/60 p-5">
          <h3 className="font-semibold flex items-center gap-2"><Bot className="h-4 w-4 text-primary" /> AI reasoning</h3>
          <div className="mt-4 rounded-xl border border-primary/20 bg-primary-soft/40 p-4">
            <p className="text-xs font-semibold text-primary">Last decision · 13:05</p>
            <p className="mt-1 text-sm font-medium">Medication window missed</p>
            <p className="mt-1.5 text-xs text-muted-foreground"><strong>Risk:</strong> Low · <strong>Confidence:</strong> 94%</p>
            <p className="mt-2 text-xs">Pattern matches previous benign delays. Sent gentle voice reminder via Echo. No escalation required.</p>
            <Button size="sm" variant="outline" className="mt-3 w-full">Override · escalate to family</Button>
          </div>
          <div className="mt-5">
            <h4 className="text-sm font-medium">Recent decisions</h4>
            <div className="mt-2 space-y-2">
              {aiDecisions.map(d => (
                <div key={d.id} className="flex items-center justify-between rounded-lg border border-border p-2.5">
                  <div className="min-w-0"><p className="truncate text-xs font-medium">{d.event}</p><p className="text-[10px] text-muted-foreground">{d.time}</p></div>
                  <SeverityBadge severity={d.risk as "low" | "medium" | "high"} />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
      <Card className="mt-6 border-border/60 p-5">
        <h3 className="font-semibold">Three-tier risk system</h3>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            { l: "Low risk", a: "Prompt / reminder", c: "border-accent/30 bg-accent-soft/40" },
            { l: "Medium risk", a: "Notify family / carer", c: "border-warning/30 bg-warning/10" },
            { l: "High risk", a: "Emergency dispatch", c: "border-destructive/30 bg-destructive/10" },
          ].map(t => (
            <div key={t.l} className={`rounded-xl border ${t.c} p-4`}>
              <p className="text-xs font-semibold uppercase">{t.l}</p>
              <p className="mt-1 text-sm">{t.a}</p>
              <CheckCircle2 className="mt-2 h-4 w-4 text-success" />
            </div>
          ))}
        </div>
      </Card>
    </div>
  ),
});
