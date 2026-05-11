import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/app/widgets";
import { Switch } from "@/components/ui/switch";
import { Calendar, Car, CheckCircle2, Clock, DollarSign, MapPin, Star, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/app/provider")({
  head: () => ({ meta: [{ title: "Provider dashboard — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="Provider dashboard" subtitle="Aisha Patel · Senior Care Specialist"
        action={<div className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-1.5"><Switch defaultChecked /><span className="text-sm font-medium">Available for bookings</span></div>} />
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard icon={Calendar} label="Visits today" value={4} hint="2 completed · 1 active" tone="primary" />
        <StatCard icon={Star} label="Rating" value="4.9" hint="312 jobs · top 3%" tone="success" />
        <StatCard icon={DollarSign} label="Earnings · week" value="£684" hint="+£120 vs last week" tone="default" />
        <StatCard icon={CheckCircle2} label="Compliance" value="100%" hint="All credentials valid" tone="success" />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-5">
          <h3 className="font-semibold">Today's visits</h3>
          <div className="mt-4 space-y-3">
            {[
              { t: "10:00", c: "Eleanor Hughes", s: "Medication support", a: "12 Park Rd, Clifton", st: "completed" },
              { t: "12:30", c: "Robert Singh", s: "Care visit · 1h", a: "44 Whiteladies, BS8", st: "completed" },
              { t: "14:30", c: "Margaret Whitfield", s: "Urgent welfare check", a: "14 Oakwood Ln, BS8", st: "on_the_way" },
              { t: "17:00", c: "Doris Bennett", s: "Companionship · 2h", a: "9 Stoke Lane, BS9", st: "upcoming" },
            ].map((v, i) => (
              <div key={i} className="flex flex-wrap items-center gap-3 rounded-xl border border-border p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-sm font-semibold text-primary">{v.t}</div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium">{v.c}</p>
                  <p className="text-xs text-muted-foreground">{v.s}</p>
                  <p className="text-xs text-muted-foreground"><MapPin className="mr-1 inline h-3 w-3" />{v.a}</p>
                </div>
                <Badge className={v.st === "completed" ? "bg-accent-soft text-accent border-0" : v.st === "on_the_way" ? "bg-primary-soft text-primary border-0" : "bg-muted text-foreground border-0"}>
                  {v.st === "completed" ? "Completed" : v.st === "on_the_way" ? "On the way" : "Upcoming"}
                </Badge>
                {v.st === "on_the_way" && <Button size="sm" className="bg-gradient-hero">Arrived</Button>}
                {v.st === "upcoming" && <Button size="sm" variant="outline"><Car className="mr-1.5 h-4 w-4" />Start travel</Button>}
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-border/60 p-5">
          <h3 className="font-semibold">Verification</h3>
          <div className="mt-4 space-y-2">
            {[
              { l: "DBS check", e: "Valid until Sep 2027" },
              { l: "Training", e: "Refresher Aug 2026" },
              { l: "Right to work", e: "Verified" },
              { l: "First aid", e: "Valid until Mar 2027" },
            ].map(v => (
              <div key={v.l} className="flex items-center justify-between rounded-lg border border-border p-3 text-sm">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" /><span className="font-medium">{v.l}</span></div>
                <span className="text-xs text-muted-foreground">{v.e}</span>
              </div>
            ))}
          </div>
          <h3 className="mt-6 font-semibold">Recent earnings</h3>
          <div className="mt-3 rounded-xl border border-border bg-gradient-soft p-4">
            <p className="text-xs text-muted-foreground">This month</p>
            <p className="text-3xl font-semibold text-gradient">£2,418</p>
            <p className="mt-1 text-xs text-muted-foreground">+£312 vs last month</p>
          </div>
        </Card>
      </div>
    </div>
  ),
});
