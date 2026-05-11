import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard, SeverityBadge } from "@/components/app/widgets";
import { alerts } from "@/lib/demo-data";
import { AlertTriangle, Bell, Clock, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/app/alerts")({
  head: () => ({ meta: [{ title: "Alerts & response — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="Alerts & response centre" subtitle="Open alerts, escalation, and post-incident review." />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Bell} label="Open alerts" value={1} hint="1 medium · 0 high" tone="warning" />
        <StatCard icon={Clock} label="Median response" value="47s" hint="Last 7 days" tone="primary" />
        <StatCard icon={CheckCircle2} label="Resolved today" value={2} tone="success" />
        <StatCard icon={AlertTriangle} label="Escalations · 7d" value={4} hint="3 medium · 1 high" tone="destructive" />
      </div>
      <Card className="mt-6 border-border/60 p-5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">All alerts</h3>
          <div className="flex gap-2">
            {["All", "High", "Medium", "Low", "Resolved"].map(f => (
              <Button key={f} variant="outline" size="sm">{f}</Button>
            ))}
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {alerts.map(a => (
            <div key={a.id} className="flex flex-wrap items-center gap-3 rounded-xl border border-border p-4">
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${a.severity === "high" ? "bg-destructive/10 text-destructive" : a.severity === "medium" ? "bg-warning/15 text-warning-foreground" : "bg-accent-soft text-accent"}`}>
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{a.title}</p>
                <p className="text-xs text-muted-foreground">{a.time} · Responder: {a.responder}</p>
              </div>
              <SeverityBadge severity={a.severity} />
              <Badge variant="secondary" className="capitalize">{a.status}</Badge>
              <Button size="sm" variant={a.status === "open" ? "default" : "outline"}>{a.status === "open" ? "Acknowledge" : "Review"}</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  ),
});
