import { createFileRoute, Link, Outlet, useRouterState } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Heart, Activity, AlertTriangle, Bell, Bot, Calendar, Footprints, MapPin,
  MessageSquare, Phone, Pill, Plus, Sparkles, Wifi, Clock, ArrowRight
} from "lucide-react";
import { StatCard, SeverityBadge, LiveDot, MiniLineChart, MiniBarChart } from "@/components/app/widgets";
import {
  careRecipient, stats, liveEvents, aiDecisions, alerts,
  heartRateChart, wellbeingChart, currentBooking
} from "@/lib/demo-data";

export const Route = createFileRoute("/app/admin")({
  component: AdminLayout,
});

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

// Admin layout — renders the family view for /app/admin
// and passes through to child routes (e.g. /app/admin/users) via Outlet
function AdminLayout() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isIndex = path === "/app/admin";

  // If we are on a child route, just render the child
  if (!isIndex) return <Outlet />;

  return (
    <div>
      <PageHeader
        title={`${greeting()}, Admin`}
        subtitle="Admin view \u2014 showing demo family data."
        badge={
          <Badge className="border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft">
            <LiveDot /><span className="ml-1.5">All systems normal</span>
          </Badge>
        }
        action={
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <MessageSquare className="mr-1.5 h-4 w-4" /> Message
            </Button>
            <Button asChild size="sm" className="bg-gradient-hero shadow-glow">
              <Link to="/app/book"><Plus className="mr-1.5 h-4 w-4" /> Book support</Link>
            </Button>
          </div>
        }
      />

      {/* Recipient summary */}
      <Card className="mb-6 border-border/60 p-5">
        <div className="flex flex-wrap items-center gap-5">
          <Avatar className="h-16 w-16 ring-2 ring-primary-soft">
            <AvatarImage src={careRecipient.photo} />
            <AvatarFallback>MW</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-lg font-semibold">{careRecipient.name}</h2>
              <span className="text-sm text-muted-foreground">\u00b7 {careRecipient.age}</span>
              <Badge variant="secondary" className="text-xs">{careRecipient.conditions.join(" \u00b7 ")}</Badge>
            </div>
            <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" /> {careRecipient.address}
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm"><Phone className="mr-1.5 h-4 w-4" /> Call</Button>
            <Button variant="outline" size="sm"><Bot className="mr-1.5 h-4 w-4" /> Request AI check-in</Button>
          </div>
        </div>
      </Card>

      {/* Stat cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        <StatCard icon={Heart}         label="Wellbeing score"  value={stats.wellbeing}                              hint="+4 vs last week"          tone="primary" />
        <StatCard icon={AlertTriangle} label="Alerts today"     value={stats.alertsToday}                            hint="1 open \u00b7 2 resolved"  tone="warning" />
        <StatCard icon={Footprints}    label="Last activity"    value={stats.lastActivity}                           hint="Kitchen \u00b7 normal pattern" tone="success" />
        <StatCard icon={Wifi}          label="Devices online"   value={`${stats.devicesOnline}/${stats.devicesTotal}`} hint="Kitchen temp sensor offline" tone="default" />
        <StatCard icon={Calendar}      label="Active bookings"  value={stats.activeBookings}                         hint="Aisha P. \u00b7 ETA 12 min" tone="primary" />
      </div>

      {/* Main grid */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-5">
          <div className="flex items-center justify-between">
            <div><h3 className="font-semibold">Live status</h3><p className="text-xs text-muted-foreground">Updated just now</p></div>
            <Badge className="bg-accent-soft text-accent border-0"><LiveDot /><span className="ml-1.5">Live</span></Badge>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <StatusPill icon={Activity} label="Movement"   value="Active \u00b7 Kitchen"         tone="success" />
            <StatusPill icon={Heart}    label="Heart rate" value="74 bpm"                   tone="success" />
            <StatusPill icon={Pill}     label="Medication" value="On track \u00b7 09:38"       tone="success" />
            <StatusPill icon={Clock}    label="Inactivity" value="No prolonged inactivity"  tone="success" />
            <StatusPill icon={MapPin}   label="Home zone"  value="Inside \u00b7 Living Room"   tone="success" />
            <StatusPill icon={Wifi}     label="Devices"    value="7 online \u00b7 1 offline"   tone="warning" />
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <ChartCard title="Heart rate \u00b7 today" hint="Normal range 62\u201388"><MiniLineChart data={heartRateChart} /></ChartCard>
            <ChartCard title="Wellbeing \u00b7 7 days" hint="Trending up"><MiniBarChart data={wellbeingChart} color="oklch(0.62 0.14 165)" /></ChartCard>
          </div>
        </Card>

        <Card className="border-border/60 p-5">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Support on the way</h3>
            <Badge className="bg-primary-soft text-primary border-0">In progress</Badge>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Avatar className="h-12 w-12"><AvatarImage src={currentBooking.agent.photo} /><AvatarFallback>AP</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold">{currentBooking.agent.name}</p>
              <p className="truncate text-xs text-muted-foreground">{currentBooking.agent.role}</p>
            </div>
          </div>
          <div className="mt-4 rounded-xl border border-border bg-gradient-to-br from-primary-soft to-accent-soft p-4">
            <p className="text-xs text-muted-foreground">ETA</p>
            <p className="text-2xl font-semibold text-gradient">12 minutes</p>
            <p className="text-xs text-muted-foreground">2.4 mi \u00b7 live route</p>
          </div>
          <Button asChild className="mt-4 w-full bg-gradient-hero shadow-glow">
            <Link to="/app/tracking">View live tracking <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
          </Button>
        </Card>
      </div>

      {/* AI decisions + alerts */}
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <Card className="border-border/60 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-primary" /><h3 className="font-semibold">Recent AI decisions</h3></div>
            <Link to="/app/monitoring" className="text-xs font-medium text-primary hover:underline">View all</Link>
          </div>
          <div className="mt-4 space-y-3">
            {aiDecisions.map(d => (
              <div key={d.id} className="rounded-xl border border-border p-3.5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{d.event}</p>
                  <SeverityBadge severity={d.risk as "low" | "medium" | "high"} />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{d.action}</p>
                <p className="mt-1.5 text-[10px] text-muted-foreground">{d.time} \u00b7 {d.confidence}% confidence</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-border/60 p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /><h3 className="font-semibold">Alert centre</h3></div>
            <Link to="/app/alerts" className="text-xs font-medium text-primary hover:underline">Open response centre</Link>
          </div>
          <div className="mt-4 space-y-3">
            {alerts.map(a => (
              <div key={a.id} className="flex items-start gap-3 rounded-xl border border-border p-3.5">
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  a.severity === "high" ? "bg-destructive/10 text-destructive" :
                  a.severity === "medium" ? "bg-warning/15 text-warning-foreground" :
                  "bg-accent-soft text-accent"
                }`}><AlertTriangle className="h-4 w-4" /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{a.title}</p>
                  <p className="text-xs text-muted-foreground">{a.time} \u00b7 {a.responder}</p>
                </div>
                <SeverityBadge severity={a.severity} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Activity timeline + quick actions */}
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-5">
          <h3 className="font-semibold">Activity timeline \u00b7 today</h3>
          <div className="mt-4 space-y-3">
            {liveEvents.map(e => (
              <div key={e.id} className="flex items-start gap-3 border-b border-border/60 pb-3 last:border-0">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <span className="text-[10px] font-semibold tabular-nums text-muted-foreground">{e.time}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{e.title}</p>
                  <p className="text-xs text-muted-foreground">{e.reasoning}</p>
                </div>
                <Badge variant="secondary" className="text-[10px]">{e.confidence}%</Badge>
              </div>
            ))}
          </div>
        </Card>

        <Card className="border-border/60 p-5">
          <h3 className="font-semibold">Quick actions</h3>
          <div className="mt-4 grid gap-2">
            <Button variant="outline" className="justify-start">
              <MessageSquare className="mr-2 h-4 w-4" /> Message Margaret
            </Button>
            <Button variant="outline" className="justify-start">
              <Bot className="mr-2 h-4 w-4" /> Request AI check-in
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/app/book"><Plus className="mr-2 h-4 w-4" /> Book a care visit</Link>
            </Button>
            <Button variant="outline" className="justify-start">
              <Phone className="mr-2 h-4 w-4" /> Call assigned carer
            </Button>
            <Button asChild variant="outline" className="justify-start">
              <Link to="/app/history"><Calendar className="mr-2 h-4 w-4" /> View care schedule</Link>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatusPill({ icon: Icon, label, value, tone }: { icon: typeof Heart; label: string; value: string; tone: "success" | "warning" | "destructive" }) {
  const tones = { success: "border-accent/20 bg-accent-soft/40", warning: "border-warning/30 bg-warning/10", destructive: "border-destructive/30 bg-destructive/10" };
  return (
    <div className={`flex items-center gap-3 rounded-xl border ${tones[tone]} p-3`}>
      <Icon className="h-4 w-4 text-muted-foreground" />
      <div className="min-w-0"><p className="text-[10px] uppercase tracking-wide text-muted-foreground">{label}</p><p className="truncate text-sm font-medium">{value}</p></div>
    </div>
  );
}

function ChartCard({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <div className="flex items-center justify-between"><p className="text-sm font-medium">{title}</p>{hint && <p className="text-[10px] text-muted-foreground">{hint}</p>}</div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
