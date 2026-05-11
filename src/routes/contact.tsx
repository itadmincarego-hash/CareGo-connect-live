import { createFileRoute } from "@tanstack/react-router";
import { PublicShell } from "@/components/public/PublicShell";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact — CareGo" }] }),
  component: () => (
    <PublicShell eyebrow="Contact" title="Talk to our team." subtitle="Book a demo, ask about pricing, or partner with us.">
      <div className="grid gap-10 lg:grid-cols-3">
        <Card className="border-border/60 p-6 lg:col-span-2">
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Thanks! Our team will be in touch within one business day."); }} className="grid gap-4 sm:grid-cols-2">
            <div><Label>First name</Label><Input className="mt-1.5" defaultValue="Sarah" /></div>
            <div><Label>Last name</Label><Input className="mt-1.5" defaultValue="Whitfield" /></div>
            <div className="sm:col-span-2"><Label>Email</Label><Input type="email" className="mt-1.5" defaultValue="sarah@example.com" /></div>
            <div className="sm:col-span-2"><Label>Organisation (optional)</Label><Input className="mt-1.5" /></div>
            <div className="sm:col-span-2"><Label>How can we help?</Label><Textarea rows={5} className="mt-1.5" defaultValue="I'd like to book a demo for a small care home (24 residents)." /></div>
            <Button type="submit" className="sm:col-span-2 bg-gradient-hero shadow-glow">Send message</Button>
          </form>
        </Card>
        <div className="space-y-4">
          <Card className="border-border/60 p-5"><div className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium">hello@carego.health</p><p className="text-xs text-muted-foreground">Reply within 4 working hours</p></div></div></Card>
          <Card className="border-border/60 p-5"><div className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium">+44 117 555 0192</p><p className="text-xs text-muted-foreground">Mon–Fri · 8am–8pm</p></div></div></Card>
          <Card className="border-border/60 p-5"><div className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" /><div><p className="text-sm font-medium">Engine Shed, Bristol</p><p className="text-xs text-muted-foreground">Station Approach · BS1 6QH</p></div></div></Card>
        </div>
      </div>
    </PublicShell>
  ),
});
