import { createFileRoute } from "@tanstack/react-router";
import { Users, CalendarCheck, Activity, AlertTriangle, Server, ShieldCheck } from "lucide-react";
import { PageHeader } from "./app";

export const Route = createFileRoute("/app/admin")({
  component: AdminDashboard,
});

function StatCard({ icon, label, value, trend, color = "primary" }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  trend?: string;
  color?: "primary" | "accent" | "warning" | "destructive";
}) {
  const colorMap = {
    primary:     "bg-primary-soft text-primary",
    accent:      "bg-accent-soft text-accent",
    warning:     "bg-warning/10 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
  };
  return (
    <div className="rounded-xl border border-border bg-card shadow-card p-5">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-muted-foreground">{label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${colorMap[color]}`}>{icon}</span>
      </div>
      <p className="text-2xl font-semibold tracking-tight">{value}</p>
      {trend && <p className="mt-1 text-xs text-success">{trend} this month</p>}
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="animate-fade-in space-y-8">
      <PageHeader
        title="Platform Overview"
        subtitle="System health and platform activity at a glance"
        badge={
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
            <span className="relative flex h-1.5 w-1.5"><span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-success opacity-75" /><span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" /></span>
            Live
          </span>
        }
      />

      {/* KPI row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={<Users className="h-5 w-5" />}         label="Active Users"    value="2,847" trend="+12%"  color="primary" />
        <StatCard icon={<CalendarCheck className="h-5 w-5" />} label="Total Bookings"  value="1,234" trend="+8%"   color="accent" />
        <StatCard icon={<Activity className="h-5 w-5" />}      label="Platform Uptime" value="99.9%"              color="accent" />
        <StatCard icon={<AlertTriangle className="h-5 w-5" />} label="Open Disputes"   value="3"                  color="destructive" />
      </div>

      {/* System health + role breakdown */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {/* System Health */}
        <div className="rounded-xl border border-border bg-card shadow-card p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <Server className="h-4 w-4 text-primary" /> System Health
          </h3>
          <div className="space-y-3">
            {[
              { name: "API Server",            status: "Healthy",  pct: 99.9 },
              { name: "Database",              status: "Healthy",  pct: 99.8 },
              { name: "AI Matching Engine",    status: "Healthy",  pct: 100  },
              { name: "Notification Service", status: "Warning",  pct: 95.2 },
            ].map(s => (
              <div key={s.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${s.status === "Healthy" ? "bg-success" : "bg-warning"}`} />
                  <span className="text-sm">{s.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-1.5 w-24 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full ${s.status === "Healthy" ? "bg-success" : "bg-warning"}`}
                      style={{ width: `${s.pct}%` }}
                    />
                  </div>
                  <span className="w-12 text-right text-xs text-muted-foreground">{s.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Role breakdown */}
        <div className="rounded-xl border border-border bg-card shadow-card p-6">
          <h3 className="mb-4 flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-4 w-4 text-primary" /> User Role Breakdown
          </h3>
          <div className="space-y-3">
            {[
              { role: "Families",       count: 1842, barClass: "bg-primary",     pct: 65 },
              { role: "Care Providers", count: 756,  barClass: "bg-accent",      pct: 27 },
              { role: "Organisations",  count: 198,  barClass: "bg-warning",     pct: 7  },
              { role: "Admins",         count: 5,    barClass: "bg-destructive", pct: 1  },
            ].map(r => (
              <div key={r.role} className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{r.role}</span>
                  <span className="text-muted-foreground">{r.count.toLocaleString()}</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                  <div className={`h-full rounded-full ${r.barClass}`} style={{ width: `${r.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Disputes */}
      <div className="rounded-xl border border-border bg-card shadow-card p-6">
        <h3 className="mb-4 font-semibold">Recent Disputes</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs text-muted-foreground">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer</th>
                <th className="pb-3 font-medium">Provider</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: "D-001", customer: "Jane C.",  provider: "John D.",    status: "Under Review" },
                { id: "D-002", customer: "Mark S.",  provider: "Emma W.",    status: "Pending"      },
                { id: "D-003", customer: "Lucy T.",  provider: "Michael R.", status: "Resolved"     },
              ].map(d => (
                <tr key={d.id} className="border-b border-border last:border-0">
                  <td className="py-3 font-mono text-xs font-medium text-muted-foreground">{d.id}</td>
                  <td className="py-3 font-medium">{d.customer}</td>
                  <td className="py-3">{d.provider}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      d.status === "Resolved"     ? "bg-success/10 text-success" :
                      d.status === "Under Review" ? "bg-primary-soft text-primary" :
                      "bg-warning/10 text-warning-foreground"
                    }`}>{d.status}</span>
                  </td>
                  <td className="py-3">
                    <button className="text-xs font-medium text-primary hover:underline">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
