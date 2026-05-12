import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import { BackButton } from "@/components/BackButton";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, User, Users, Stethoscope, Building2, UserCheck, Wifi, Bell, CreditCard } from "lucide-react";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to CareGo — Onboarding" }] }),
  component: Onboarding,
});

const roles = [
  { id: "family", label: "Family / Care Seeker", desc: "I'm setting up CareGo for a loved one.", icon: Users },
  { id: "self", label: "Individual Receiving Care", desc: "CareGo will be supporting me directly.", icon: Heart },
  { id: "agent", label: "Care Provider / Agent", desc: "I deliver care and want to take bookings.", icon: Stethoscope },
  { id: "org", label: "Care Organisation Admin", desc: "I run a care home or agency.", icon: Building2 },
  { id: "viewer", label: "Relative / Monitoring Viewer", desc: "I've been invited to monitor someone.", icon: UserCheck },
];

const steps = ["Choose your role", "Create profile", "Add care recipient", "Connect devices", "Emergency contacts", "Plan & alerts"];

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [role, setRole] = useState("family");

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3"><BackButton /><Logo /></div>
          <p className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p>
        </div>
        <div className="h-1 w-full bg-muted">
          <div className="h-full bg-gradient-hero transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>
      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">{steps[step]}</h1>
        <Card className="mt-6 border-border/60 p-6 md:p-8">
          {step === 0 && (
            <div className="space-y-3">
              {roles.map(r => (
                <button key={r.id} onClick={() => setRole(r.id)} className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${role === r.id ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${role === r.id ? "bg-gradient-hero text-white" : "bg-muted text-foreground"}`}><r.icon className="h-5 w-5" /></div>
                  <div className="flex-1">
                    <p className="font-medium">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  {role === r.id && <CheckCircle2 className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>First name</Label><Input className="mt-1.5" defaultValue="Sarah" /></div>
              <div><Label>Last name</Label><Input className="mt-1.5" defaultValue="Whitfield" /></div>
              <div><Label>Phone</Label><Input className="mt-1.5" defaultValue="+44 7700 900123" /></div>
              <div><Label>City</Label><Input className="mt-1.5" defaultValue="Bristol" /></div>
            </div>
          )}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary"><User className="h-5 w-5" /></div>
                <p className="text-sm text-muted-foreground">Add the person CareGo will care for. You can add more later.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label>Full name</Label><Input className="mt-1.5" defaultValue="Margaret Whitfield" /></div>
                <div><Label>Age</Label><Input className="mt-1.5" defaultValue="78" /></div>
                <div className="sm:col-span-2"><Label>Conditions / support needs</Label><Input className="mt-1.5" defaultValue="Mild dementia, Type 2 diabetes" /></div>
                <div className="sm:col-span-2"><Label>Home address</Label><Input className="mt-1.5" defaultValue="14 Oakwood Lane, Bristol BS8 2QR" /></div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="space-y-3">
              {[
                { n: "Apple Watch Series 9", t: "Wearable" }, { n: "Smart Pill Dispenser", t: "Medication" },
                { n: "Amazon Echo Show 8", t: "Smart speaker" }, { n: "Motion sensors (3)", t: "Home" },
              ].map(d => (
                <label key={d.n} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary/40">
                  <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input text-primary" />
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary"><Wifi className="h-4 w-4" /></div>
                  <div className="flex-1"><p className="text-sm font-medium">{d.n}</p><p className="text-xs text-muted-foreground">{d.t}</p></div>
                  <Badge variant="secondary">Detected</Badge>
                </label>
              ))}
            </div>
          )}
          {step === 4 && (
            <div className="space-y-4">
              {[1, 2].map(i => (
                <div key={i} className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3">
                  <div><Label className="text-xs">Name</Label><Input className="mt-1" defaultValue={i === 1 ? "James Whitfield" : "Dr. Owens"} /></div>
                  <div><Label className="text-xs">Relation</Label><Input className="mt-1" defaultValue={i === 1 ? "Son" : "GP"} /></div>
                  <div><Label className="text-xs">Phone</Label><Input className="mt-1" defaultValue="+44 7700 900456" /></div>
                </div>
              ))}
              <Button variant="outline" size="sm">+ Add contact</Button>
            </div>
          )}
          {step === 5 && (
            <div className="grid gap-4">
              <div className="rounded-xl border border-border p-4">
                <p className="font-medium"><Bell className="mr-1.5 inline h-4 w-4" /> Alert preferences</p>
                <div className="mt-3 space-y-2 text-sm">
                  <label className="flex items-center justify-between"><span>Low-risk events</span><input type="checkbox" className="h-4 w-4" /></label>
                  <label className="flex items-center justify-between"><span>Medium-risk events</span><input type="checkbox" defaultChecked className="h-4 w-4" /></label>
                  <label className="flex items-center justify-between"><span>High-risk events</span><input type="checkbox" defaultChecked className="h-4 w-4" /></label>
                </div>
              </div>
              <div className="rounded-xl border-2 border-primary bg-primary-soft p-4">
                <p className="font-medium"><CreditCard className="mr-1.5 inline h-4 w-4 text-primary" /> Family Plus · 14-day free trial</p>
                <p className="mt-1 text-sm text-muted-foreground">£59/month after trial. Cancel anytime.</p>
              </div>
            </div>
          )}
        </Card>
        <div className="mt-6 flex items-center justify-between">
          <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}><ArrowLeft className="mr-1.5 h-4 w-4" /> Back</Button>
          <Button className="bg-gradient-hero shadow-glow" onClick={() => step < steps.length - 1 ? setStep(step + 1) : navigate({ to: "/app/family" })}>
            {step === steps.length - 1 ? "Finish & open dashboard" : "Continue"} <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
