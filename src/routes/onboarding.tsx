import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, User, Users, Stethoscope, Building2, UserCheck, Wifi, Bell, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to CareGo — Onboarding" }] }),
  component: Onboarding,
});

const roles = [
  { id: "family",  label: "Family / Care Seeker",          desc: "I'm setting up CareGo for a loved one.",     icon: Users },
  { id: "self",   label: "Individual Receiving Care",      desc: "CareGo will be supporting me directly.",      icon: Heart },
  { id: "agent",  label: "Care Provider / Agent",          desc: "I deliver care and want to take bookings.",   icon: Stethoscope },
  { id: "org",    label: "Care Organisation Admin",        desc: "I run a care home or agency.",                icon: Building2 },
  { id: "viewer", label: "Relative / Monitoring Viewer",   desc: "I've been invited to monitor someone.",      icon: UserCheck },
];

const steps = ["Choose your role", "Create profile", "Add care recipient", "Connect devices", "Emergency contacts", "Plan & alerts"];

type Fields = Record<string, string>;

function validateStep(step: number, fields: Fields): string[] {
  const missing: string[] = [];
  if (step === 1) {
    if (!fields.firstName?.trim())  missing.push("firstName");
    if (!fields.lastName?.trim())   missing.push("lastName");
    if (!fields.phone?.trim())      missing.push("phone");
    if (!fields.city?.trim())       missing.push("city");
  }
  if (step === 2) {
    if (!fields.recipientName?.trim())    missing.push("recipientName");
    if (!fields.recipientAge?.trim())     missing.push("recipientAge");
    if (!fields.recipientAddress?.trim()) missing.push("recipientAddress");
  }
  if (step === 4) {
    if (!fields.contact1Name?.trim())  missing.push("contact1Name");
    if (!fields.contact1Phone?.trim()) missing.push("contact1Phone");
  }
  return missing;
}

function Field({ id, label, fields, errors, onChange, placeholder, type = "text" }: {
  id: string; label: string; fields: Fields; errors: string[];
  onChange: (id: string, val: string) => void;
  placeholder?: string; type?: string;
}) {
  const invalid = errors.includes(id);
  return (
    <div>
      <Label htmlFor={id} className={invalid ? "text-destructive" : ""}>
        {label} <span className="text-destructive">*</span>
      </Label>
      <Input
        id={id} type={type}
        value={fields[id] ?? ""}
        onChange={e => onChange(id, e.target.value)}
        placeholder={placeholder}
        className={cn("mt-1.5", invalid && "border-destructive ring-1 ring-destructive focus-visible:ring-destructive")}
      />
      {invalid && <p className="mt-1 text-xs text-destructive">This field is required</p>}
    </div>
  );
}

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep]     = useState(0);
  const [role, setRole]     = useState("family");
  const [fields, setFields] = useState<Fields>({});
  const [errors, setErrors] = useState<string[]>([]);
  // Keep devices/alerts state so back doesn't reset them
  const [devices, setDevices] = useState<Record<string, boolean>>({
    "Apple Watch Series 9": true,
    "Smart Pill Dispenser": true,
    "Amazon Echo Show 8": true,
    "Motion sensors (3)": true,
  });
  const [alerts, setAlerts] = useState({ low: false, medium: true, high: true });

  function setField(id: string, val: string) {
    setFields(f => ({ ...f, [id]: val }));
    setErrors(e => e.filter(x => x !== id));
  }

  function handleContinue() {
    const missing = validateStep(step, fields);
    if (missing.length > 0) { setErrors(missing); return; }
    setErrors([]);
    if (step < steps.length - 1) {
      setStep(s => s + 1);
    } else {
      navigate({ to: "/app/family" });
    }
  }

  function handleBack() {
    setErrors([]);
    if (step > 0) setStep(s => s - 1);
    else navigate({ to: "/" });
  }

  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="border-b border-border bg-background/80 backdrop-blur">
        <div className="container mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <Logo />
          <p className="text-sm text-muted-foreground">Step {step + 1} of {steps.length}</p>
        </div>
        <div className="h-1 w-full bg-muted">
          <div className="h-full bg-gradient-hero transition-all" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">{steps[step]}</h1>

        <Card className="mt-6 border-border/60 p-6 md:p-8">

          {/* Step 0 — Role */}
          {step === 0 && (
            <div className="space-y-3">
              {roles.map(r => (
                <button key={r.id} onClick={() => setRole(r.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${
                    role === r.id ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"
                  }`}>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    role === r.id ? "bg-gradient-hero text-white" : "bg-muted text-foreground"
                  }`}><r.icon className="h-5 w-5" /></div>
                  <div className="flex-1">
                    <p className="font-medium">{r.label}</p>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                  {role === r.id && <CheckCircle2 className="h-5 w-5 text-primary" />}
                </button>
              ))}
            </div>
          )}

          {/* Step 1 — Profile */}
          {step === 1 && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Field id="firstName"  label="First name" placeholder="e.g. Sarah"          fields={fields} errors={errors} onChange={setField} />
              <Field id="lastName"   label="Last name"  placeholder="e.g. Whitfield"      fields={fields} errors={errors} onChange={setField} />
              <Field id="phone"      label="Phone"      placeholder="e.g. +44 7700 900123" fields={fields} errors={errors} onChange={setField} type="tel" />
              <Field id="city"       label="City"       placeholder="e.g. Bristol"         fields={fields} errors={errors} onChange={setField} />
            </div>
          )}

          {/* Step 2 — Care recipient */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary"><User className="h-5 w-5" /></div>
                <p className="text-sm text-muted-foreground">Add the person CareGo will care for. You can add more later.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="recipientName" label="Full name" placeholder="e.g. Margaret Whitfield" fields={fields} errors={errors} onChange={setField} />
                <Field id="recipientAge"  label="Age"       placeholder="e.g. 78"                  fields={fields} errors={errors} onChange={setField} type="number" />
                <div className="sm:col-span-2">
                  <Label htmlFor="recipientConditions">Conditions / support needs</Label>
                  <Input id="recipientConditions" className="mt-1.5" placeholder="e.g. Mild dementia, Type 2 diabetes"
                    value={fields.recipientConditions ?? ""} onChange={e => setField("recipientConditions", e.target.value)} />
                </div>
                <div className="sm:col-span-2">
                  <Field id="recipientAddress" label="Home address" placeholder="e.g. 14 Oakwood Lane, Bristol BS8 2QR" fields={fields} errors={errors} onChange={setField} />
                </div>
              </div>
            </div>
          )}

          {/* Step 3 — Devices */}
          {step === 3 && (
            <div className="space-y-3">
              {Object.entries(devices).map(([name, checked]) => (
                <label key={name} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary/40 cursor-pointer">
                  <input type="checkbox" checked={checked} onChange={e => setDevices(d => ({ ...d, [name]: e.target.checked }))}
                    className="h-4 w-4 rounded border-input text-primary" />
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary"><Wifi className="h-4 w-4" /></div>
                  <div className="flex-1"><p className="text-sm font-medium">{name}</p></div>
                  <Badge variant="secondary">Detected</Badge>
                </label>
              ))}
            </div>
          )}

          {/* Step 4 — Emergency contacts */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3">
                <Field id="contact1Name"     label="Name"     placeholder="e.g. James Whitfield" fields={fields} errors={errors} onChange={setField} />
                <Field id="contact1Relation" label="Relation" placeholder="e.g. Son"              fields={fields} errors={errors} onChange={setField} />
                <Field id="contact1Phone"    label="Phone"    placeholder="e.g. +44 7700 900456"  fields={fields} errors={errors} onChange={setField} type="tel" />
              </div>
              <div className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3">
                <div><Label htmlFor="contact2Name">Name</Label><Input id="contact2Name" className="mt-1.5" placeholder="e.g. Dr. Owens" value={fields.contact2Name ?? ""} onChange={e => setField("contact2Name", e.target.value)} /></div>
                <div><Label htmlFor="contact2Relation">Relation</Label><Input id="contact2Relation" className="mt-1.5" placeholder="e.g. GP" value={fields.contact2Relation ?? ""} onChange={e => setField("contact2Relation", e.target.value)} /></div>
                <div><Label htmlFor="contact2Phone">Phone</Label><Input id="contact2Phone" className="mt-1.5" placeholder="e.g. +44 7700 900789" value={fields.contact2Phone ?? ""} onChange={e => setField("contact2Phone", e.target.value)} /></div>
              </div>
              <Button variant="outline" size="sm">+ Add contact</Button>
            </div>
          )}

          {/* Step 5 — Plan & alerts */}
          {step === 5 && (
            <div className="grid gap-4">
              <div className="rounded-xl border border-border p-4">
                <p className="font-medium"><Bell className="mr-1.5 inline h-4 w-4" /> Alert preferences</p>
                <div className="mt-3 space-y-2 text-sm">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Low-risk events</span>
                    <input type="checkbox" checked={alerts.low} onChange={e => setAlerts(a => ({ ...a, low: e.target.checked }))} className="h-4 w-4" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>Medium-risk events</span>
                    <input type="checkbox" checked={alerts.medium} onChange={e => setAlerts(a => ({ ...a, medium: e.target.checked }))} className="h-4 w-4" />
                  </label>
                  <label className="flex items-center justify-between cursor-pointer">
                    <span>High-risk events</span>
                    <input type="checkbox" checked={alerts.high} onChange={e => setAlerts(a => ({ ...a, high: e.target.checked }))} className="h-4 w-4" />
                  </label>
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
          <Button variant="ghost" onClick={handleBack}>
            <ArrowLeft className="mr-1.5 h-4 w-4" /> Back
          </Button>
          <Button className="bg-gradient-hero shadow-glow" onClick={handleContinue}>
            {step === steps.length - 1 ? "Finish & open dashboard" : "Continue"} <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
