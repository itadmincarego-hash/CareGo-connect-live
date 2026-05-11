import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { familyUser, careRecipient } from "@/lib/demo-data";

export const Route = createFileRoute("/app/settings")({
  head: () => ({ meta: [{ title: "Settings — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="Settings" subtitle="Profile, care recipient, alerts, privacy, and billing." />
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full max-w-3xl grid-cols-5">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="recipient">Care recipient</TabsTrigger>
          <TabsTrigger value="alerts">Alerts</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card className="border-border/60 p-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16"><AvatarImage src={familyUser.photo} /><AvatarFallback>SW</AvatarFallback></Avatar>
              <Button variant="outline" size="sm">Change photo</Button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div><Label>Full name</Label><Input className="mt-1.5" defaultValue={familyUser.name} /></div>
              <div><Label>Email</Label><Input className="mt-1.5" defaultValue={familyUser.email} /></div>
              <div><Label>Phone</Label><Input className="mt-1.5" defaultValue="+44 7700 900123" /></div>
              <div><Label>Relation</Label><Input className="mt-1.5" defaultValue={familyUser.relation} /></div>
            </div>
            <Button className="mt-6 bg-gradient-hero shadow-glow">Save changes</Button>
          </Card>
        </TabsContent>
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
              {[
                ["Low-risk events", false],
                ["Medium-risk events", true],
                ["High-risk events", true],
                ["Daily wellbeing summary", true],
                ["Weekly report", true],
              ].map(([l, on]) => (
                <div key={l as string} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <span className="text-sm font-medium">{l as string}</span>
                  <Switch defaultChecked={on as boolean} />
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="privacy">
          <Card className="border-border/60 p-6">
            <h3 className="font-semibold">Privacy & data</h3>
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
              <p className="mt-1 text-2xl font-semibold">Family Plus · £59/month</p>
              <p className="mt-1 text-sm text-muted-foreground">Renews on 1 June 2026 · Cancel anytime</p>
            </div>
            <div className="mt-4 flex gap-2"><Button variant="outline">Change plan</Button><Button variant="outline">Update payment method</Button></div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
});
