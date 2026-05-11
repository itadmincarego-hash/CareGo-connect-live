import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export function StatCard({ icon: Icon, label, value, hint, tone = "default" }: {
  icon: LucideIcon; label: string; value: ReactNode; hint?: ReactNode; tone?: "default" | "success" | "warning" | "destructive" | "primary";
}) {
  const tones: Record<string, string> = {
    default: "bg-muted text-foreground",
    success: "bg-accent-soft text-accent",
    warning: "bg-warning/15 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
    primary: "bg-primary-soft text-primary",
  };
  return (
    <Card className="border-border/60 p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1.5 text-2xl font-semibold">{value}</p>
          {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
        </div>
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${tones[tone]}`}><Icon className="h-5 w-5" /></div>
      </div>
    </Card>
  );
}

export function SeverityBadge({ severity }: { severity: "low" | "medium" | "high" | "info" | "success" }) {
  const map: Record<string, string> = {
    low: "bg-accent-soft text-accent",
    info: "bg-primary-soft text-primary",
    success: "bg-accent-soft text-accent",
    medium: "bg-warning/15 text-warning-foreground",
    high: "bg-destructive/10 text-destructive",
  };
  return <Badge className={`${map[severity]} border-0 capitalize`}>{severity}</Badge>;
}

export function LiveDot({ tone = "accent" }: { tone?: "accent" | "destructive" | "warning" | "primary" }) {
  const colors: Record<string, string> = {
    accent: "bg-accent text-accent",
    destructive: "bg-destructive text-destructive",
    warning: "bg-warning text-warning",
    primary: "bg-primary text-primary",
  };
  return <span className={`relative inline-flex h-2 w-2 rounded-full pulse-dot ${colors[tone]}`} />;
}

export function MiniBarChart({ data, color = "oklch(0.48 0.16 245)" }: { data: { d: string; v: number }[]; color?: string }) {
  const max = Math.max(...data.map(d => d.v));
  return (
    <div className="flex h-32 items-end gap-1.5">
      {data.map(d => (
        <div key={d.d} className="flex flex-1 flex-col items-center gap-1.5">
          <div className="flex w-full flex-1 items-end">
            <div className="w-full rounded-md transition-all" style={{ height: `${(d.v / max) * 100}%`, background: color, opacity: 0.85 }} />
          </div>
          <span className="text-[10px] text-muted-foreground">{d.d}</span>
        </div>
      ))}
    </div>
  );
}

export function MiniLineChart({ data, color = "oklch(0.48 0.16 245)" }: { data: { t: string; v: number }[]; color?: string }) {
  const vals = data.map(d => d.v);
  const min = Math.min(...vals) - 5, max = Math.max(...vals) + 5;
  const w = 300, h = 90;
  const points = data.map((d, i) => `${(i / (data.length - 1)) * w},${h - ((d.v - min) / (max - min)) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h + 20}`} className="h-28 w-full">
      <defs>
        <linearGradient id="ml-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round" />
      <polygon points={`0,${h} ${points} ${w},${h}`} fill="url(#ml-grad)" />
      {data.map((d, i) => (
        <text key={d.t} x={(i / (data.length - 1)) * w} y={h + 14} fontSize="9" fill="oklch(0.5 0.02 240)" textAnchor="middle">{d.t}</text>
      ))}
    </svg>
  );
}
