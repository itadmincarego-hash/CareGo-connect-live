import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Pill, Moon, Stethoscope, Car, AlertTriangle, Users, Clock, Sparkles } from "lucide-react";
import { useState } from "react";

const services = [
  { id: "welfare", icon: AlertTriangle, label: "Urgent welfare check", price: "from £35" },
  { id: "care", icon: Stethoscope, label: "Care visit", price: "from £28/hr" },
  { id: "companion", icon: Users, label: "Companionship", price: "from £22/hr" },
  { id: "meds", icon: Pill, label: "Medication support", price: "from £25" },
  { id: "night", icon: Moon, label: "Night response", price: "from £40" },
  { id: "transport", icon: Car, label: "Transport / accompaniment", price: "from £30" },
];

export const Route = createFileRoute("/app/book")({
  head: () => ({ meta: [{ title: "Book support — CareGo" }] }),
  component: BookPage,
});

function BookPage() {
  const navigate = useNavigate();
  const [service, setService] = useState("welfare");
  const [urgency, setUrgency] = useState("urgent");
  return (
    <div>
      <PageHeader title="Book support" subtitle="Request verified help in minutes. Most bookings accepted within 4 minutes." />
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 p-6">
          <form onSubmit={(e) => { e.preventDefault(); navigate({ to: "/app/tracking" }); }} className="space-y-6">
            <div>
              <Label className="text-sm font-semibold">Service type</Label>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {services.map(s => (
                  <button type="button" key={s.id} onClick={() => setService(s.id)} className={`flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${service === s.id ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`}>
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${service === s.id ? "bg-gradient-hero text-white" : "bg-muted"}`}><s.icon className="h-4 w-4" /></div>
                    <div className="flex-1"><p className="text-sm font-medium">{s.label}</p><p className="text-xs text-muted-foreground">{s.price}</p></div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <Label className="text-sm font-semibold">Urgency</Label>
              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { id: "urgent", l: "Urgent · <30 min" },
                  { id: "today", l: "Today · within 4h" },
                  { id: "scheduled", l: "Scheduled" },
                ].map(u => (
                  <button type="button" key={u.id} onClick={() => setUrgency(u.id)} className={`rounded-xl border p-3 text-sm font-medium ${urgency === u.id ? "border-primary bg-primary-soft text-primary" : "border-border"}`}>{u.l}</button>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>Date</Label><Input type="date" className="mt-1.5" defaultValue="2026-05-11" /></div>
              <div><Label>Time</Label><Input type="time" className="mt-1.5" defaultValue="14:30" /></div>
              <div className="sm:col-span-2"><Label>Address</Label><Input className="mt-1.5" defaultValue="14 Oakwood Lane, Bristol BS8 2QR" /></div>
              <div className="sm:col-span-2"><Label>Notes / special instructions</Label><Textarea rows={3} className="mt-1.5" defaultValue="Check on Margaret following missed medication. Front key in safe — code with agent." /></div>
            </div>
            <div className="rounded-xl border border-accent/30 bg-accent-soft/40 p-4">
              <p className="text-sm font-semibold flex items-center gap-1.5"><Sparkles className="h-4 w-4 text-accent" /> CareGo will match a verified agent nearby</p>
              <p className="mt-1 text-xs text-muted-foreground">Estimated match time: under 4 minutes · DBS, training, right-to-work verified.</p>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" asChild><Link to="/app/family">Cancel</Link></Button>
              <Button type="submit" className="bg-gradient-hero shadow-glow">Submit booking</Button>
            </div>
          </form>
        </Card>
        <div className="space-y-4">
          <Card className="border-border/60 p-5">
            <h3 className="font-semibold">Booking statuses</h3>
            <div className="mt-3 space-y-2 text-sm">
              {["Requested", "Searching for agent", "Agent accepted", "On the way", "Arrived", "Checked in", "Completed"].map((s, i) => (
                <div key={s} className="flex items-center gap-2"><div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-[10px] font-semibold text-primary">{i + 1}</div><span>{s}</span></div>
              ))}
            </div>
          </Card>
          <Card className="border-border/60 p-5">
            <h3 className="font-semibold flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> Recent bookings</h3>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <p>BK-20399 · Priya Nair · 12 May</p>
              <p>BK-20381 · Aisha Patel · 08 May</p>
              <p>BK-20355 · Daniel O'Connor · 01 May</p>
            </div>
            <Button asChild variant="ghost" size="sm" className="mt-3 w-full"><Link to="/app/history">View all history</Link></Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
