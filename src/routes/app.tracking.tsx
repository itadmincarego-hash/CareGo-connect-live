import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LiveDot } from "@/components/app/widgets";
import { Phone, MessageSquare, Shield, Star, MapPin, CheckCircle2, AlertCircle, Clock, X } from "lucide-react";
import { currentBooking } from "@/lib/demo-data";

export const Route = createFileRoute("/app/tracking")({
  head: () => ({ meta: [{ title: "Live agent tracking — CareGo" }] }),
  component: () => {
    const b = currentBooking;
    return (
      <div>
        <PageHeader title="Help is on the way" subtitle={`Booking ${b.id} · ${b.service}`}
          badge={<Badge className="bg-primary-soft text-primary border-0"><LiveDot tone="primary" /><span className="ml-1.5">On the way</span></Badge>} />
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 overflow-hidden border-border/60">
            <div className="relative h-80 bg-gradient-to-br from-primary-soft via-card to-accent-soft">
              <svg viewBox="0 0 400 240" className="absolute inset-0 h-full w-full">
                <defs>
                  <pattern id="grid2" width="24" height="24" patternUnits="userSpaceOnUse">
                    <path d="M 24 0 L 0 0 0 24" fill="none" stroke="oklch(0.48 0.16 245 / 0.08)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="400" height="240" fill="url(#grid2)" />
                {/* Roads */}
                <path d="M 0 180 L 400 180" stroke="oklch(0.85 0.01 230)" strokeWidth="14" />
                <path d="M 200 0 L 200 240" stroke="oklch(0.85 0.01 230)" strokeWidth="14" />
                <path d="M 0 80 L 400 80" stroke="oklch(0.88 0.01 230)" strokeWidth="8" />
                {/* Route */}
                <path d="M 40 200 L 100 200 L 100 80 L 320 80 L 320 40" stroke="oklch(0.48 0.16 245)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="8 4" />
                {/* Agent */}
                <g>
                  <circle cx="100" cy="200" r="20" fill="oklch(0.62 0.14 165)" opacity="0.25" />
                  <circle cx="100" cy="200" r="11" fill="oklch(0.62 0.14 165)" stroke="white" strokeWidth="2.5" />
                </g>
                {/* Destination */}
                <g>
                  <circle cx="320" cy="40" r="11" fill="oklch(0.48 0.16 245)" stroke="white" strokeWidth="2.5" />
                </g>
              </svg>
              <div className="absolute left-4 top-4 rounded-lg bg-card/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur">
                <MapPin className="mr-1 inline h-3.5 w-3.5 text-accent" /> Aisha · 2.4 mi away
              </div>
              <div className="absolute bottom-4 right-4 rounded-lg bg-gradient-hero px-4 py-2 text-sm font-semibold text-white shadow-glow">ETA 12 minutes</div>
            </div>
            <div className="border-t border-border p-5">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 ring-2 ring-primary-soft"><AvatarImage src={b.agent.photo} /><AvatarFallback>AP</AvatarFallback></Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{b.agent.name}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{b.agent.rating}</span>
                    <span className="text-xs text-muted-foreground">· {b.agent.jobs} jobs</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{b.agent.role} · {b.agent.org}</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {b.agent.verified.map(v => <Badge key={v} variant="secondary" className="text-[10px]"><Shield className="mr-1 h-3 w-3" />{v}</Badge>)}
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="icon" variant="outline"><Phone className="h-4 w-4" /></Button>
                  <Button size="icon" variant="outline"><MessageSquare className="h-4 w-4" /></Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-4">
            <Card className="border-border/60 p-5">
              <h3 className="font-semibold">Journey timeline</h3>
              <div className="mt-4 space-y-3">
                {b.timeline.map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.done ? "bg-success text-success-foreground" : "border-2 border-dashed border-muted-foreground/40"}`}>
                      {t.done && <CheckCircle2 className="h-3.5 w-3.5" />}
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm ${t.active ? "font-semibold text-primary" : "font-medium"}`}>{t.label}</p>
                      <p className="text-xs text-muted-foreground">{t.time}</p>
                    </div>
                    {t.active && <LiveDot tone="primary" />}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="border-border/60 p-5">
              <h3 className="font-semibold">Booking details</h3>
              <dl className="mt-3 space-y-2 text-sm">
                <DT k="Service" v={b.service} />
                <DT k="Scheduled" v={b.scheduled} />
                <DT k="Address" v={b.address} />
                <DT k="Notes" v={b.notes} />
              </dl>
              <div className="mt-4 flex gap-2">
                <Button variant="outline" size="sm" className="flex-1"><AlertCircle className="mr-1.5 h-4 w-4" /> Support</Button>
                <Button variant="outline" size="sm" className="flex-1 text-destructive border-destructive/30 hover:bg-destructive/10"><X className="mr-1.5 h-4 w-4" /> Cancel</Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  },
});

function DT({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-3 border-b border-border/60 pb-2 last:border-0">
      <dt className="shrink-0 text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}
