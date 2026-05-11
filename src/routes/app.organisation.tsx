import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/app/widgets";
import { orgStats, orgStaff } from "@/lib/demo-data";
import { Users, AlertTriangle, Building2, CheckCircle2, TrendingUp, DollarSign, Calendar, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/app/organisation")({
  head: () => ({ meta: [{ title: "Organisation dashboard — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="BrightCare Bristol" subtitle="Operations · workforce · compliance · marketplace" />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Users} label="Workforce" value={orgStats.staff} hint={`${orgStats.available} available · ${orgStats.onVisit} on visit`} tone="primary" />
        <StatCard icon={AlertTriangle} label="Shift gaps" value={orgStats.shiftGaps} hint="Next 48h" tone="warning" />
        <StatCard icon={Building2} label="Clients monitored" value={orgStats.clientsMonitored} hint={`${orgStats.openAlerts} open alerts`} tone="default" />
        <StatCard icon={DollarSign} label="Revenue · month" value={`£${(orgStats.revenue / 1000).toFixed(1)}k`} hint="+12% vs last month" tone="success" />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Workforce</h3>
            <Button size="sm" variant="outline">Manage rota</Button>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-muted/50 text-left text-xs text-muted-foreground">
                <tr><th className="p-3">Carer</th><th className="p-3">Role</th><th className="p-3">Status</th><th className="p-3">Compliance</th><th className="p-3">Shifts</th></tr>
              </thead>
              <tbody>
                {orgStaff.map(s => (
                  <tr key={s.id} className="border-t border-border">
                    <td className="p-3 font-medium">{s.name}</td>
                    <td className="p-3 text-muted-foreground">{s.role}</td>
                    <td className="p-3"><Badge className={s.status === "on_visit" ? "bg-primary-soft text-primary border-0" : s.status === "available" ? "bg-accent-soft text-accent border-0" : "bg-muted border-0"}>{s.status.replace("_", " ")}</Badge></td>
                    <td className="p-3"><span className={s.compliance === 100 ? "text-accent" : "text-warning-foreground"}>{s.compliance}%</span></td>
                    <td className="p-3 text-muted-foreground">{s.shifts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="border-border/60 p-5">
            <h3 className="font-semibold flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /> Compliance</h3>
            <div className="mt-3 space-y-2">
              {[
                { l: "DBS valid", v: "138/142", c: "accent" },
                { l: "Training current", v: "140/142", c: "accent" },
                { l: "Right to work", v: "142/142", c: "accent" },
                { l: "Expiring < 30d", v: "4", c: "warning" },
              ].map(r => (
                <div key={r.l} className="flex justify-between rounded-lg border border-border p-2.5 text-sm">
                  <span>{r.l}</span><span className={`font-semibold ${r.c === "accent" ? "text-accent" : "text-warning-foreground"}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="border-border/60 p-5">
            <h3 className="font-semibold flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> This week</h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-center">
              <div className="rounded-lg bg-primary-soft p-3"><p className="text-2xl font-semibold text-primary">{orgStats.visitsThisWeek}</p><p className="text-[10px] text-muted-foreground">visits</p></div>
              <div className="rounded-lg bg-accent-soft p-3"><p className="text-2xl font-semibold text-accent">99.2%</p><p className="text-[10px] text-muted-foreground">on time</p></div>
              <div className="rounded-lg bg-muted p-3"><p className="text-2xl font-semibold">47s</p><p className="text-[10px] text-muted-foreground">response</p></div>
              <div className="rounded-lg bg-muted p-3"><p className="text-2xl font-semibold">4.86</p><p className="text-[10px] text-muted-foreground">CSAT</p></div>
            </div>
          </Card>
          <Card className="border-border/60 p-5">
            <h3 className="font-semibold flex items-center gap-2"><ShoppingBag className="h-4 w-4 text-primary" /> Marketplace</h3>
            <p className="mt-1.5 text-xs text-muted-foreground">12 active listings · 4 incoming requests</p>
            <Button size="sm" className="mt-3 w-full bg-gradient-hero">Open marketplace</Button>
          </Card>
        </div>
      </div>
    </div>
  ),
});
