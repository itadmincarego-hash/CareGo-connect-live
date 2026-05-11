import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/routes/app";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { bookingHistory } from "@/lib/demo-data";
import { Download, Star } from "lucide-react";

export const Route = createFileRoute("/app/history")({
  head: () => ({ meta: [{ title: "History & reports — CareGo" }] }),
  component: () => (
    <div>
      <PageHeader title="History & reports" subtitle="Full audit trail of every booking, AI decision, alert, and visit."
        action={<Button variant="outline"><Download className="mr-1.5 h-4 w-4" /> Export CSV</Button>} />
      <div className="mb-4 flex flex-wrap gap-2">
        {["All", "Bookings", "Alerts", "AI decisions", "Incidents", "Travel"].map(t => (
          <Button key={t} variant={t === "Bookings" ? "default" : "outline"} size="sm" className={t === "Bookings" ? "bg-gradient-hero" : ""}>{t}</Button>
        ))}
      </div>
      <Card className="overflow-hidden border-border/60">
        <table className="w-full text-sm">
          <thead className="bg-muted/50 text-left text-xs text-muted-foreground">
            <tr>
              <th className="p-3">Booking</th><th className="p-3">Date</th><th className="p-3">Service</th>
              <th className="p-3">Agent</th><th className="p-3">Duration</th><th className="p-3">Rating</th><th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookingHistory.map(b => (
              <tr key={b.id} className="border-t border-border hover:bg-muted/40">
                <td className="p-3 font-medium text-primary">{b.id}</td>
                <td className="p-3">{b.date}</td>
                <td className="p-3">{b.service}</td>
                <td className="p-3 text-muted-foreground">{b.agent}</td>
                <td className="p-3 text-muted-foreground">{b.duration}</td>
                <td className="p-3"><span className="inline-flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-warning text-warning" />{b.rating}</span></td>
                <td className="p-3"><Badge className="bg-accent-soft text-accent border-0">Completed</Badge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  ),
});
