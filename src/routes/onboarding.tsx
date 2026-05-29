import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Logo } from "@/components/Logo";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Heart, User, Users, Stethoscope, Building2, UserCheck, Wifi, Bell, CreditCard, MapPin, Search, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({ meta: [{ title: "Welcome to CareGo — Onboarding" }] }),
  component: Onboarding,
});

const roles = [
  { id: "family",  label: "Family / Care Seeker",        desc: "I'm setting up CareGo for a loved one.",   icon: Users },
  { id: "self",   label: "Individual Receiving Care",    desc: "CareGo will be supporting me directly.",    icon: Heart },
  { id: "agent",  label: "Care Provider / Agent",        desc: "I deliver care and want to take bookings.", icon: Stethoscope },
  { id: "org",    label: "Care Organisation Admin",      desc: "I run a care home or agency.",              icon: Building2 },
  { id: "viewer", label: "Relative / Monitoring Viewer", desc: "I've been invited to monitor someone.",    icon: UserCheck },
];

const FAMILY_STEPS = ["Choose your role", "Create profile", "Service beneficiary", "Connect devices", "Emergency contacts", "Plan & alerts"];
const OTHER_STEPS  = ["Choose your role", "Create profile", "Connect devices", "Emergency contacts", "Plan & alerts"];

type Fields = Record<string, string>;
function isMonitoringRole(role: string) { return role === "family" || role === "viewer"; }

// Build a single address string from structured manual fields
function buildAddress(prefix: string, f: Fields): string {
  return [
    f[`${prefix}Line1`],
    f[`${prefix}Line2`],
    f[`${prefix}Line3`],
    f[`${prefix}Town`],
    f[`${prefix}County`],
    f[`${prefix}Postcode`],
  ].filter(Boolean).join(", ");
}

function validateStep(stepLabel: string, fields: Fields): string[] {
  const m: string[] = [];
  if (stepLabel === "Create profile") {
    if (!fields.phone?.trim()) m.push("phone");
    // Address is valid if either lookup address or manual line1+postcode filled
    const hasLookup = !!fields.profileAddress?.trim();
    const hasManual = !!fields["profileLine1"]?.trim() && !!fields["profilePostcode"]?.trim();
    if (!hasLookup && !hasManual) m.push("profileAddress");
  }
  if (stepLabel === "Service beneficiary") {
    if (!fields.recipientName?.trim()) m.push("recipientName");
    if (!fields.recipientAge?.trim())  m.push("recipientAge");
    const hasLookup = !!fields.recipientAddress?.trim();
    const hasManual = !!fields["recipientLine1"]?.trim() && !!fields["recipientPostcode"]?.trim();
    if (!hasLookup && !hasManual) m.push("recipientAddress");
  }
  if (stepLabel === "Emergency contacts") {
    if (!fields.contact1Name?.trim())  m.push("contact1Name");
    if (!fields.contact1Phone?.trim()) m.push("contact1Phone");
  }
  return m;
}

function Field({ id, label, fields, errors, onChange, placeholder, type = "text", readOnly = false, colSpan, optional = false }: {
  id: string; label: string; fields: Fields; errors: string[];
  onChange: (id: string, val: string) => void;
  placeholder?: string; type?: string; readOnly?: boolean; colSpan?: string; optional?: boolean;
}) {
  const invalid = errors.includes(id);
  return (
    <div className={colSpan}>
      <Label htmlFor={id} className={invalid ? "text-destructive" : ""}>
        {label}{!readOnly && !optional && <span className="text-destructive ml-0.5">*</span>}
        {optional && <span className="ml-1 text-xs text-muted-foreground">(optional)</span>}
      </Label>
      <Input id={id} type={type} value={fields[id] ?? ""} onChange={e => onChange(id, e.target.value)}
        placeholder={placeholder} readOnly={readOnly}
        className={cn("mt-1.5", invalid && "border-destructive ring-1 ring-destructive", readOnly && "bg-muted/50 cursor-default")} />
      {invalid && <p className="mt-1 text-xs text-destructive">This field is required</p>}
    </div>
  );
}

// Shared structured manual address form
function ManualAddressFields({ prefix, fields, errors, onChange, onSwitchBack }: {
  prefix: string; fields: Fields; errors: string[];
  onChange: (id: string, val: string) => void;
  onSwitchBack: () => void;
}) {
  return (
    <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-4">
      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Enter address manually</p>
      <div className="grid gap-3">
        <Field id={`${prefix}Line1`}    label="1st line of address" fields={fields} errors={errors} onChange={onChange} placeholder="e.g. 14 Oakwood Lane" />
        <Field id={`${prefix}Line2`}    label="2nd line of address" fields={fields} errors={errors} onChange={onChange} placeholder="e.g. Clifton" optional />
        <Field id={`${prefix}Line3`}    label="3rd line of address" fields={fields} errors={errors} onChange={onChange} placeholder="e.g. Apartment 3" optional />
        <div className="grid gap-3 sm:grid-cols-2">
          <Field id={`${prefix}Town`}     label="Town"     fields={fields} errors={errors} onChange={onChange} placeholder="e.g. Bristol" />
          <Field id={`${prefix}County`}   label="County"   fields={fields} errors={errors} onChange={onChange} placeholder="e.g. Avon" optional />
        </div>
        <Field id={`${prefix}Postcode`}  label="Postcode" fields={fields} errors={errors} onChange={onChange} placeholder="e.g. BS8 2QR" />
      </div>
      <button type="button" onClick={onSwitchBack} className="text-xs text-primary hover:underline">
        ← Use postcode lookup instead
      </button>
    </div>
  );
}

// ── Profile address: postcode lookup → address dropdown OR manual structured
function ProfileAddressField({ fields, errors, onChange }: {
  fields: Fields; errors: string[]; onChange: (id: string, val: string) => void;
}) {
  const [postcode, setPostcode]   = useState(fields.postcode ?? "");
  const [addresses, setAddresses] = useState<string[]>([]);
  const [open, setOpen]           = useState(false);
  const [loading, setLoading]     = useState(false);
  const [lookupErr, setLookupErr] = useState("");
  const [manual, setManual]       = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const addressError = errors.includes("profileAddress");

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function lookupAddresses() {
    const pc = postcode.trim().replace(/\s/g, "").toUpperCase();
    if (pc.length < 5) { setLookupErr("Please enter a valid UK postcode."); return; }
    setLoading(true); setLookupErr(""); setAddresses([]); setOpen(false);
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${pc}`);
      const data = await res.json();
      if (!data.result) { setLookupErr("Postcode not found. Try again or enter address manually."); setLoading(false); return; }
      const district = data.result.admin_district || "";
      const ward     = data.result.admin_ward     || "";
      onChange("city", district);
      const pcF = pc.slice(0, -3) + " " + pc.slice(-3);
      setAddresses([
        `1 ${ward} Road, ${district}, ${pcF}`,
        `2 ${ward} Road, ${district}, ${pcF}`,
        `3 ${ward} Road, ${district}, ${pcF}`,
        `4 ${ward} Road, ${district}, ${pcF}`,
        `5 ${ward} Road, ${district}, ${pcF}`,
        `Flat 1, ${ward} House, ${district}, ${pcF}`,
        `Flat 2, ${ward} House, ${district}, ${pcF}`,
      ]);
      setOpen(true);
    } catch { setLookupErr("Could not look up postcode. Please enter address manually."); }
    setLoading(false);
  }

  if (manual) {
    return (
      <div className="sm:col-span-2">
        <ManualAddressFields
          prefix="profile"
          fields={fields}
          errors={errors}
          onChange={onChange}
          onSwitchBack={() => { setManual(false); onChange("profileAddress", ""); }}
        />
      </div>
    );
  }

  return (
    <div className="sm:col-span-2 space-y-3">
      <div>
        <Label htmlFor="profilePostcodeSearch">Address <span className="text-destructive">*</span></Label>
        <p className="text-xs text-muted-foreground mb-1.5">Enter postcode to find your address, or city will auto-fill</p>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input id="profilePostcodeSearch" value={postcode}
              onChange={e => { setPostcode(e.target.value); onChange("postcode", e.target.value); }}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), lookupAddresses())}
              placeholder="e.g. BS8 2QR"
              className={cn("pr-9", addressError && !fields.profileAddress && "border-destructive ring-1 ring-destructive")} />
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <Button type="button" variant="outline" onClick={lookupAddresses} disabled={loading} className="shrink-0">
            {loading ? <span className="animate-pulse">Searching…</span> : <><Search className="h-4 w-4 mr-1.5" />Find</>}
          </Button>
        </div>
        {lookupErr && <p className="mt-1 text-xs text-destructive">{lookupErr}</p>}
      </div>

      {/* City auto-fill display */}
      {fields.city && (
        <div className="flex items-center gap-2">
          <Label htmlFor="city" className="shrink-0">City <span className="text-destructive">*</span></Label>
          <Input id="city" value={fields.city} onChange={e => onChange("city", e.target.value)} className="mt-0" />
        </div>
      )}

      {/* Address dropdown */}
      {addresses.length > 0 && (
        <div ref={dropRef} className="relative">
          <Label className={addressError && !fields.profileAddress ? "text-destructive" : ""}>
            Select address <span className="text-destructive">*</span>
          </Label>
          <button type="button" onClick={() => setOpen(o => !o)}
            className={cn(
              "mt-1.5 w-full flex items-center justify-between rounded-md border px-3 py-2 text-sm bg-background text-left hover:border-primary/60 transition-colors",
              addressError && !fields.profileAddress ? "border-destructive ring-1 ring-destructive" : "border-input",
              fields.profileAddress ? "text-foreground" : "text-muted-foreground"
            )}>
            <span className="truncate">{fields.profileAddress || "Choose an address…"}</span>
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
          </button>
          {open && (
            <ul className="absolute z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg max-h-52 overflow-y-auto">
              {addresses.map(addr => (
                <li key={addr}>
                  <button type="button" onClick={() => { onChange("profileAddress", addr); setOpen(false); }}
                    className={cn("w-full px-3 py-2 text-sm text-left hover:bg-primary-soft hover:text-primary transition-colors", fields.profileAddress === addr && "bg-primary-soft text-primary font-medium")}>
                    {addr}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {addressError && !fields.profileAddress && <p className="mt-1 text-xs text-destructive">Please select an address</p>}
          {fields.profileAddress && (
            <p className="mt-1.5 text-xs text-muted-foreground">
              Selected: <span className="font-medium text-foreground">{fields.profileAddress}</span>
              <button type="button" onClick={() => { onChange("profileAddress", ""); setAddresses([]); }}
                className="ml-2 text-primary hover:underline">Change</button>
            </p>
          )}
        </div>
      )}

      <button type="button" onClick={() => setManual(true)} className="text-xs text-muted-foreground hover:text-primary hover:underline">
        Can’t find address? Enter manually
      </button>
    </div>
  );
}

// ── Beneficiary address: same postcode lookup + manual structured
function BeneficiaryAddressField({ fields, errors, onChange }: {
  fields: Fields; errors: string[]; onChange: (id: string, val: string) => void;
}) {
  const [postcode, setPostcode]   = useState("");
  const [addresses, setAddresses] = useState<string[]>([]);
  const [open, setOpen]           = useState(false);
  const [loading, setLoading]     = useState(false);
  const [lookupErr, setLookupErr] = useState("");
  const [manual, setManual]       = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  const addressError = errors.includes("recipientAddress");

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  async function lookupAddresses() {
    const pc = postcode.trim().replace(/\s/g, "").toUpperCase();
    if (pc.length < 5) { setLookupErr("Please enter a valid UK postcode."); return; }
    setLoading(true); setLookupErr(""); setAddresses([]); setOpen(false);
    try {
      const res = await fetch(`https://api.postcodes.io/postcodes/${pc}`);
      const data = await res.json();
      if (!data.result) { setLookupErr("Postcode not found. Try again or enter address manually."); setLoading(false); return; }
      const district = data.result.admin_district || "";
      const ward     = data.result.admin_ward     || "";
      const pcF = pc.slice(0, -3) + " " + pc.slice(-3);
      setAddresses([
        `1 ${ward} Road, ${district}, ${pcF}`,
        `2 ${ward} Road, ${district}, ${pcF}`,
        `3 ${ward} Road, ${district}, ${pcF}`,
        `4 ${ward} Road, ${district}, ${pcF}`,
        `5 ${ward} Road, ${district}, ${pcF}`,
        `Flat 1, ${ward} House, ${district}, ${pcF}`,
        `Flat 2, ${ward} House, ${district}, ${pcF}`,
      ]);
      setOpen(true);
    } catch { setLookupErr("Could not look up postcode. Please enter address manually."); }
    setLoading(false);
  }

  if (manual) {
    return (
      <div className="sm:col-span-2">
        <ManualAddressFields
          prefix="recipient"
          fields={fields}
          errors={errors}
          onChange={onChange}
          onSwitchBack={() => { setManual(false); onChange("recipientAddress", ""); }}
        />
      </div>
    );
  }

  return (
    <div className="sm:col-span-2 space-y-3">
      <div>
        <Label htmlFor="recipientPostcodeSearch">Home address <span className="text-destructive">*</span></Label>
        <p className="text-xs text-muted-foreground mb-1.5">Enter postcode to find address</p>
        <div className="mt-1.5 flex gap-2">
          <div className="relative flex-1">
            <Input id="recipientPostcodeSearch" value={postcode} onChange={e => setPostcode(e.target.value)}
              onKeyDown={e => e.key === "Enter" && (e.preventDefault(), lookupAddresses())}
              placeholder="e.g. BS8 2QR"
              className={cn("pr-9", addressError && !fields.recipientAddress && "border-destructive ring-1 ring-destructive")} />
            <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </div>
          <Button type="button" variant="outline" onClick={lookupAddresses} disabled={loading} className="shrink-0">
            {loading ? <span className="animate-pulse">Searching…</span> : <><Search className="h-4 w-4 mr-1.5" />Find address</>}
          </Button>
        </div>
        {lookupErr && <p className="mt-1 text-xs text-destructive">{lookupErr}</p>}
      </div>

      {addresses.length > 0 && (
        <div ref={dropRef} className="relative">
          <Label className={addressError && !fields.recipientAddress ? "text-destructive" : ""}>
            Select address <span className="text-destructive">*</span>
          </Label>
          <button type="button" onClick={() => setOpen(o => !o)}
            className={cn(
              "mt-1.5 w-full flex items-center justify-between rounded-md border px-3 py-2 text-sm bg-background text-left hover:border-primary/60 transition-colors",
              addressError && !fields.recipientAddress ? "border-destructive ring-1 ring-destructive" : "border-input",
              fields.recipientAddress ? "text-foreground" : "text-muted-foreground"
            )}>
            <span className="truncate">{fields.recipientAddress || "Choose an address…"}</span>
            <ChevronDown className={cn("h-4 w-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")} />
          </button>
          {open && (
            <ul className="absolute z-50 mt-1 w-full rounded-md border border-border bg-background shadow-lg max-h-52 overflow-y-auto">
              {addresses.map(addr => (
                <li key={addr}>
                  <button type="button" onClick={() => { onChange("recipientAddress", addr); setOpen(false); }}
                    className={cn("w-full px-3 py-2 text-sm text-left hover:bg-primary-soft hover:text-primary transition-colors", fields.recipientAddress === addr && "bg-primary-soft text-primary font-medium")}>
                    {addr}
                  </button>
                </li>
              ))}
            </ul>
          )}
          {addressError && !fields.recipientAddress && <p className="mt-1 text-xs text-destructive">Please select an address</p>}
          {fields.recipientAddress && (
            <p className="mt-1.5 text-xs text-muted-foreground">
              Selected: <span className="font-medium text-foreground">{fields.recipientAddress}</span>
              <button type="button" onClick={() => { onChange("recipientAddress", ""); setAddresses([]); setPostcode(""); }}
                className="ml-2 text-primary hover:underline">Change</button>
            </p>
          )}
        </div>
      )}

      <button type="button" onClick={() => setManual(true)} className="text-xs text-muted-foreground hover:text-primary hover:underline">
        Can’t find address? Enter manually
      </button>
    </div>
  );
}

function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep]     = useState(0);
  const [role, setRole]     = useState("family");
  const [fields, setFields] = useState<Fields>({});
  const [errors, setErrors] = useState<string[]>([]);
  const [devices, setDevices] = useState<Record<string, boolean>>({
    "Apple Watch Series 9": true, "Smart Pill Dispenser": true,
    "Amazon Echo Show 8": true,   "Motion sensors (3)": true,
  });
  const [alerts, setAlerts] = useState({ low: false, medium: true, high: true });

  const steps = isMonitoringRole(role) ? FAMILY_STEPS : OTHER_STEPS;
  const stepLabel = steps[step];

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem("carego-signup");
      if (raw) {
        const data = JSON.parse(raw);
        setFields(f => ({
          ...f,
          firstName: f.firstName || data.firstName || "",
          lastName:  f.lastName  || data.lastName  || "",
          email:     f.email     || data.email     || "",
        }));
      }
    } catch {}
  }, []);

  function setField(id: string, val: string) {
    setFields(f => ({ ...f, [id]: val }));
    setErrors(e => e.filter(x => x !== id));
  }

  function handleContinue() {
    const missing = validateStep(stepLabel, fields);
    if (missing.length) { setErrors(missing); return; }
    setErrors([]);
    if (step < steps.length - 1) setStep(s => s + 1);
    else navigate({ to: "/app/family" });
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
        <h1 className="text-3xl font-semibold tracking-tight">{stepLabel}</h1>

        <Card className="mt-6 border-border/60 p-6 md:p-8">

          {stepLabel === "Choose your role" && (
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

          {stepLabel === "Create profile" && (
            <div className="space-y-4">
              <div className="rounded-lg border border-border bg-muted/30 p-3 text-sm text-muted-foreground">
                👤 Your name and email are carried over from sign-up. Please complete your contact details below.
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="firstName" label="First name"    fields={fields} errors={errors} onChange={setField} placeholder="e.g. Sarah"           readOnly={!!fields.firstName} />
                <Field id="lastName"  label="Last name"     fields={fields} errors={errors} onChange={setField} placeholder="e.g. Whitfield"        readOnly={!!fields.lastName} />
                <Field id="email"     label="Email"         fields={fields} errors={errors} onChange={setField} placeholder="e.g. sarah@example.com" readOnly={!!fields.email} type="email" />
                <Field id="phone"     label="Mobile number" fields={fields} errors={errors} onChange={setField} placeholder="e.g. +44 7700 900123"   type="tel" />
                <ProfileAddressField fields={fields} errors={errors} onChange={setField} />
              </div>
            </div>
          )}

          {stepLabel === "Service beneficiary" && (
            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary"><User className="h-5 w-5" /></div>
                <p className="text-sm text-muted-foreground">Add details of the person CareGo will support. You can add more recipients later.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field id="recipientName" label="Full name" fields={fields} errors={errors} onChange={setField} placeholder="e.g. Margaret Whitfield" />
                <Field id="recipientAge"  label="Age"        fields={fields} errors={errors} onChange={setField} placeholder="e.g. 78" type="number" />
                <div className="sm:col-span-2">
                  <Label htmlFor="recipientConditions">Conditions / support needs</Label>
                  <Input id="recipientConditions" className="mt-1.5" placeholder="e.g. Mild dementia, Type 2 diabetes"
                    value={fields.recipientConditions ?? ""} onChange={e => setField("recipientConditions", e.target.value)} />
                </div>
                <BeneficiaryAddressField fields={fields} errors={errors} onChange={setField} />
              </div>
            </div>
          )}

          {stepLabel === "Connect devices" && (
            <div className="space-y-3">
              {Object.entries(devices).map(([name, checked]) => (
                <label key={name} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary/40 cursor-pointer">
                  <input type="checkbox" checked={checked} onChange={e => setDevices(d => ({ ...d, [name]: e.target.checked }))} className="h-4 w-4 rounded border-input text-primary" />
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary"><Wifi className="h-4 w-4" /></div>
                  <div className="flex-1"><p className="text-sm font-medium">{name}</p></div>
                  <Badge variant="secondary">Detected</Badge>
                </label>
              ))}
            </div>
          )}

          {stepLabel === "Emergency contacts" && (
            <div className="space-y-4">
              <div className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3">
                <Field id="contact1Name"     label="Name"     placeholder="e.g. James Whitfield" fields={fields} errors={errors} onChange={setField} />
                <Field id="contact1Relation" label="Relation" placeholder="e.g. Son"              fields={fields} errors={errors} onChange={setField} />
                <Field id="contact1Phone"    label="Phone"    placeholder="e.g. +44 7700 900456"  fields={fields} errors={errors} onChange={setField} type="tel" />
              </div>
              <div className="grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3">
                <div><Label>Name</Label><Input className="mt-1.5" placeholder="e.g. Dr. Owens" value={fields.contact2Name ?? ""} onChange={e => setField("contact2Name", e.target.value)} /></div>
                <div><Label>Relation</Label><Input className="mt-1.5" placeholder="e.g. GP" value={fields.contact2Relation ?? ""} onChange={e => setField("contact2Relation", e.target.value)} /></div>
                <div><Label>Phone</Label><Input className="mt-1.5" placeholder="e.g. +44 7700 900789" value={fields.contact2Phone ?? ""} onChange={e => setField("contact2Phone", e.target.value)} /></div>
              </div>
              <Button variant="outline" size="sm">+ Add contact</Button>
            </div>
          )}

          {stepLabel === "Plan & alerts" && (
            <div className="grid gap-4">
              <div className="rounded-xl border border-border p-4">
                <p className="font-medium"><Bell className="mr-1.5 inline h-4 w-4" /> Alert preferences</p>
                <div className="mt-3 space-y-2 text-sm">
                  <label className="flex items-center justify-between cursor-pointer"><span>Low-risk events</span><input type="checkbox" checked={alerts.low} onChange={e => setAlerts(a => ({ ...a, low: e.target.checked }))} className="h-4 w-4" /></label>
                  <label className="flex items-center justify-between cursor-pointer"><span>Medium-risk events</span><input type="checkbox" checked={alerts.medium} onChange={e => setAlerts(a => ({ ...a, medium: e.target.checked }))} className="h-4 w-4" /></label>
                  <label className="flex items-center justify-between cursor-pointer"><span>High-risk events</span><input type="checkbox" checked={alerts.high} onChange={e => setAlerts(a => ({ ...a, high: e.target.checked }))} className="h-4 w-4" /></label>
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
          <Button variant="ghost" onClick={handleBack}><ArrowLeft className="mr-1.5 h-4 w-4" /> Back</Button>
          <Button className="bg-gradient-hero shadow-glow" onClick={handleContinue}>
            {step === steps.length - 1 ? "Finish & open dashboard" : "Continue"} <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
