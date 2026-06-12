import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { careRecipient } from "@/lib/demo-data";
import { useAuthStore } from "@/store/authStore";
import { useState } from "react";
import { Check, Eye, EyeOff, ShieldCheck } from "lucide-react";

// Map demo emails → profile data
const DEMO_PROFILES: Record<string, { name: string; phone: string; relation: string }> = {
  "family@carego.com":   { name: "Sarah Whitfield",   phone: "+44 7700 900123", relation: "Daughter" },
  "provider@carego.com": { name: "Aisha Patel",        phone: "+44 7700 900456", relation: "Care Provider" },
  "business@carego.com": { name: "Bristol Care Ltd",   phone: "+44 117 900 0001", relation: "Organisation" },
  "admin@carego.com":    { name: "Admin User",          phone: "+44 7700 900999", relation: "System Admin" },
};

const ROLE_LABELS: Record<string, string> = {
  family:   "Family Plus",
  provider: "Care Provider",
  business: "Organisation",
  admin:    "Admin",
};

const PLAN_LABELS: Record<string, string> = {
  family:   "Family Plus · £59/month",
  provider: "Provider Pro · £79/month",
  business: "Organisation · £199/month",
  admin:    "Internal Admin · No charge",
};

function useProfile() {
  const email = useAuthStore(s => s.email);
  const role  = useAuthStore(s => s.role);
  const key   = (email ?? "").toLowerCase();
  const demo  = DEMO_PROFILES[key];
  const name  = demo?.name ?? (email ? email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, c => c.toUpperCase()) : "Unknown User");
  const phone = demo?.phone ?? "";
  const relation = demo?.relation ?? "";
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}&backgroundColor=b6e3f4`;
  return { name, email: email ?? "", phone, relation, role: role ?? "family", initials, avatar };
}

function ProfileTab() {
  const p = useProfile();
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <Card className="border-border/60 p-6">
      {/* Avatar + role */}
      <div className="flex items-center gap-4">
        <Avatar className="h-16 w-16 ring-2 ring-primary/20">
          <AvatarImage src={p.avatar} />
          <AvatarFallback>{p.initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-lg">{p.name}</p>
          <div className="mt-1 flex items-center gap-2">
            <Badge variant="secondary" className="text-xs">
              <ShieldCheck className="mr-1 h-3 w-3" />
              {ROLE_LABELS[p.role] ?? p.role}
            </Badge>
            <span className="text-xs text-muted-foreground">{p.email}</span>
          </div>
        </div>
        <Button variant="outline" size="sm" className="ml-auto">Change photo</Button>
      </div>

      {/* Fields */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div><Label>Full name</Label><Input className="mt-1.5" defaultValue={p.name} /></div>
        <div><Label>Email address</Label><Input className="mt-1.5" type="email" defaultValue={p.email} /></div>
        <div><Label>Phone number</Label><Input className="mt-1.5" type="tel" defaultValue={p.phone} /></div>
        <div><Label>{p.role === "family" ? "Relation to recipient" : "Role / title"}</Label><Input className="mt-1.5" defaultValue={p.relation} /></div>
      </div>

      <Button onClick={handleSave} className="mt-6 bg-gradient-hero shadow-glow">
        {saved ? <><Check className="mr-1.5 h-4 w-4" /> Saved!</> : "Save changes"}
      </Button>
    </Card>
  );
}

function PasswordTab() {
  const [show, setShow] = useState({ cur: false, nw: false, cf: false });
  const [saved, setSaved] = useState(false);
  const [values, setValues] = useState({ current: "", newPw: "", confirm: "" });
  const mismatch = values.newPw && values.confirm && values.newPw !== values.confirm;

  function handleSave() {
    if (!values.current || !values.newPw || mismatch) return;
    setSaved(true);
    setValues({ current: "", newPw: "", confirm: "" });
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <Card className="border-border/60 p-6 max-w-md">
      <h3 className="font-semibold mb-4">Change password</h3>
      <div className="space-y-4">
        <div>
          <Label>Current password</Label>
          <div className="relative mt-1.5">
            <Input type={show.cur ? "text" : "password"} value={values.current} onChange={e => setValues(v => ({ ...v, current: e.target.value }))} className="pr-10" />
            <button type="button" onClick={() => setShow(s => ({ ...s, cur: !s.cur }))} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show.cur ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
        </div>
        <div>
          <Label>New password</Label>
          <div className="relative mt-1.5">
            <Input type={show.nw ? "text" : "password"} value={values.newPw} onChange={e => setValues(v => ({ ...v, newPw: e.target.value }))} className="pr-10" />
            <button type="button" onClick={() => setShow(s => ({ ...s, nw: !s.nw }))} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show.nw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
        </div>
        <div>
          <Label>Confirm new password</Label>
          <div className="relative mt-1.5">
            <Input type={show.cf ? "text" : "password"} value={values.confirm} onChange={e => setValues(v => ({ ...v, confirm: e.target.value }))} className={`pr-10 ${mismatch ? "border-destructive focus-visible:ring-destructive" : ""}`} />
            <button type="button" onClick={() => setShow(s => ({ ...s, cf: !s.cf }))} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{show.cf ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button>
          </div>
          {mismatch && <p className="mt-1 text-xs text-destructive">Passwords do not match</p>}
        </div>
      </div>
      <Button onClick={handleSave} className="mt-6 bg-gradient-hero shadow-glow" disabled={!values.current || !values.newPw || !!mismatch}>
        {saved ? <><Check className="mr-1.5 h-4 w-4" /> Password updated!</> : "Update password"}
      </Button>
    </Card>
  );
}

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — CareGo" }] }),
  component: SettingsPage,
});

function SettingsPage() {
  const { role } = useProfile();

  return (
    <div>
      <PageHeader title="Settings" subtitle="Manage your profile, security, alerts, privacy, and billing." />
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-3xl grid-cols-6 mb-6">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="recipient">Recipient</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="profile"><ProfileTab /></TabsContent>
        <TabsContent value="password"><PasswordTab /></TabsContent>

        <TabsContent value="recipient">
          <Card className="border-border/60 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label>Name</Label><Input className="mt-1.5" defaultValue={careRecipient.name} /></div>
              <div><Label>Age</Label><Input className="mt-1.5" defaultValue={String(careRecipient.age)} /></div>
              <div className="sm:col-span-2"><Label>Address</Label><Input className="mt-1.5" defaultValue={careRecipient.address} /></div>
              <div className="sm:col-span-2"><Label>Conditions</Label><Input className="mt-1.5" defaultValue={careRecipient.conditions.join(", ")} /></div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="alerts">
          <Card className="border-border/60 p-6">
            <h3 className="font-semibold">Alert preferences</h3>
            <div className="mt-4 space-y-3">
              {([
                ["Low-risk events", false],
                ["Medium-risk events", true],
                ["High-risk events", true],
                ["Daily wellbeing summary", true],
                ["Weekly report", true],
              ] as [string, boolean][]).map(([l, on]) => (
                <div key={l} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-medium">{l}</span>
                  <Switch defaultChecked={on} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="privacy">
          <Card className="border-border/60 p-6">
            <h3 className="font-semibold">Privacy &amp; data</h3>
            <div className="mt-4 space-y-3">
              {[
                "Share data with assigned care organisation",
                "Allow AI to analyse audio for distress signals",
                "Anonymised analytics for product improvement",
              ].map(l => (
                <div key={l} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-medium">{l}</span>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="border-border/60 p-6">
            <div className="rounded-xl border-2 border-primary bg-primary-soft p-5">
              <p className="text-xs font-semibold uppercase text-primary">Current plan</p>
              <p className="mt-1 text-2xl font-semibold">{PLAN_LABELS[role] ?? "CareGo Plan"}</p>
              <p className="mt-1 text-sm text-muted-foreground">Renews on 1 July 2026 · Cancel anytime</p>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline">Change plan</Button>
              <Button variant="outline">Update payment method</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
