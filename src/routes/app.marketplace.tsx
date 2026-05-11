import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { marketplaceListings } from "@/lib/demo-data";
import { Search, Star, Shield, MapPin } from "lucide-react";

export const Route = createFileRoute("/app/marketplace")({
  head: () => ({ meta: [{ title: "Staff marketplace — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="Staff marketplace" subtitle="Browse verified carers and unused capacity across organisations."
        action={<Button className="bg-gradient-hero shadow-glow">+ List capacity</Button>} />
      <Card className="border-border/60 p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by skill, location, role…" className="pl-9" />
          </div>
          {["Night shift", "Dementia", "Hoist trained", "Within 5mi", "Available today"].map(f => (
            <Badge key={f} variant="secondary" className="cursor-pointer">{f}</Badge>
          ))}
        </div>
      </Card>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {marketplaceListings.map(l => (
          <Card key={l.id} className="border-border/60 p-5">
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary">{l.carer.split(" ").map(n => n[0]).join("")}</div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-semibold">{l.carer}</p>
                  <span className="inline-flex items-center gap-1 text-sm"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{l.rating}</span>
                </div>
                <p className="text-xs text-muted-foreground">{l.role} · {l.org}</p>
                <p className="mt-1 text-xs text-muted-foreground"><MapPin className="mr-1 inline h-3 w-3" />{l.distance} mi · {l.available}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {l.skills.map(s => <Badge key={s} variant="secondary" className="text-[10px]">{s}</Badge>)}
                  <Badge className="bg-accent-soft text-accent border-0 text-[10px]"><Shield className="mr-1 h-3 w-3" />Verified</Badge>
                </div>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">£{l.rate}<span className="text-xs text-muted-foreground">/hr</span></p>
                <Button size="sm" className="mt-2 bg-gradient-hero shadow-glow">Book</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
});
