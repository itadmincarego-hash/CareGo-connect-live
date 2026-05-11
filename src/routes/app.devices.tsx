import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { devices } from "@/lib/demo-data";
import { Battery, Plus, Wifi, WifiOff } from "lucide-react";

export const Route = createFileRoute("/app/devices")({
  head: () => ({ meta: [{ title: "Devices — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="Devices & integrations" subtitle="Wearables, sensors, smart speakers, and home environment."
        action={<Button className="bg-gradient-hero shadow-glow"><Plus className="mr-1.5 h-4 w-4" /> Add device</Button>} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {devices.map(d => (
          <Card key={d.id} className="border-border/60 p-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold">{d.name}</p>
                <p className="text-xs text-muted-foreground">{d.type}</p>
              </div>
              <Badge className={d.status === "online" ? "bg-accent-soft text-accent border-0" : "bg-destructive/10 text-destructive border-0"}>
                {d.status === "online" ? <Wifi className="mr-1 h-3 w-3" /> : <WifiOff className="mr-1 h-3 w-3" />}
                {d.status}
              </Badge>
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              {d.battery !== null && (
                <span className="inline-flex items-center gap-1"><Battery className={`h-3.5 w-3.5 ${d.battery! < 20 ? "text-destructive" : ""}`} />{d.battery}%</span>
              )}
              <span>Last sync · {d.lastSync}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  ),
});
