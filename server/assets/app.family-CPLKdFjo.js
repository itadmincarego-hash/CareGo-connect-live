import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader, L as Link } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-CPEUcL-r.js";
import { L as LiveDot, S as StatCard, M as MiniLineChart, b as MiniBarChart, a as SeverityBadge } from "./widgets-Dp7Jax5V.js";
import { b as careRecipient, s as stats, h as heartRateChart, w as wellbeingChart, c as currentBooking, e as aiDecisions, i as alerts, l as liveEvents } from "./demo-data-CfZIqSeF.js";
import { M as MessageSquare } from "./message-square-BHKWv70R.js";
import { P as Plus } from "./plus-DCogdPb3.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { P as Phone } from "./phone-rYB4bTmc.js";
import { B as Bot } from "./bot-BMKV8QGX.js";
import { H as Heart } from "./heart-COHp2i8v.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { F as Footprints } from "./footprints-B4UlU3Ut.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { C as Calendar } from "./calendar-CR1WfCPD.js";
import { A as Activity } from "./activity--9n7_III.js";
import { P as Pill } from "./pill-C4Js0H7q.js";
import { C as Clock } from "./clock-DbgIZzvt.js";
import { A as ArrowRight } from "./arrow-right-C2v7Tgma.js";
import { S as Sparkles } from "./sparkles-iZ9WvUgz.js";
import { B as Bell } from "./bell-ComxTxgg.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-BYEGRGHm.js";
import "./createLucideIcon-CZ_h3oUv.js";
function FamilyDashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: `Good afternoon, Sarah`, subtitle: `Here's how ${careRecipient.name} is doing today.`, badge: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDot, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "All systems normal" })
    ] }), action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "mr-1.5 h-4 w-4" }),
        " Message"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-gradient-hero shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/book", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
        " Book support"
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mb-6 border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-16 w-16 ring-2 ring-primary-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: careRecipient.photo }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: "MW" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-semibold", children: careRecipient.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm text-muted-foreground", children: [
            "· ",
            careRecipient.age
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-xs", children: careRecipient.conditions.join(" · ") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 inline-flex items-center gap-1.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
          " ",
          careRecipient.address
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "mr-1.5 h-4 w-4" }),
          " Call"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "mr-1.5 h-4 w-4" }),
          " Request AI check-in"
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Heart, label: "Wellbeing score", value: stats.wellbeing, hint: "+4 vs last week", tone: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: TriangleAlert, label: "Alerts today", value: stats.alertsToday, hint: "1 open · 2 resolved", tone: "warning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Footprints, label: "Last activity", value: stats.lastActivity, hint: "Kitchen · normal pattern", tone: "success" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Wifi, label: "Devices online", value: `${stats.devicesOnline}/${stats.devicesTotal}`, hint: "Kitchen temp sensor offline", tone: "default" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Calendar, label: "Active bookings", value: stats.activeBookings, hint: "Aisha P. · ETA 12 min", tone: "primary" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Live status" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Updated just now" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent-soft text-accent border-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDot, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "Live" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid gap-3 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: Activity, label: "Movement", value: "Active · Kitchen", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: Heart, label: "Heart rate", value: "74 bpm", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: Pill, label: "Medication", value: "On track · 09:38", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: Clock, label: "Inactivity", value: "No prolonged inactivity", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: MapPin, label: "Home zone", value: "Inside · Living Room", tone: "success" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StatusPill, { icon: Wifi, label: "Devices", value: "7 online · 1 offline", tone: "warning" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Heart rate · today", hint: "Normal range 62–88", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniLineChart, { data: heartRateChart }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChartCard, { title: "Wellbeing · 7 days", hint: "Trending up", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MiniBarChart, { data: wellbeingChart, color: "oklch(0.62 0.14 165)" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Support on the way" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-primary-soft text-primary border-0", children: "In progress" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-12 w-12", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: currentBooking.agent.photo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: "AP" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-semibold", children: currentBooking.agent.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs text-muted-foreground", children: currentBooking.agent.role })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-border bg-gradient-to-br from-primary-soft to-accent-soft p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "ETA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-gradient", children: "12 minutes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "2.4 mi · live route" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-4 w-full bg-gradient-hero shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/tracking", children: [
          "View live tracking ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Recent AI decisions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/monitoring", className: "text-xs font-medium text-primary hover:underline", children: "View all" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: aiDecisions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: d.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: d.risk })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: d.action }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-[10px] text-muted-foreground", children: [
            d.time,
            " · ",
            d.confidence,
            "% confidence"
          ] })
        ] }, d.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Alert centre" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/alerts", className: "text-xs font-medium text-primary hover:underline", children: "Open response centre" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-border p-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${a.severity === "high" ? "bg-destructive/10 text-destructive" : a.severity === "medium" ? "bg-warning/15 text-warning-foreground" : "bg-accent-soft text-accent"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: a.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              a.time,
              " · ",
              a.responder
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity })
        ] }, a.id)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Activity timeline · today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: liveEvents.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 border-b border-border/60 pb-3 last:border-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-semibold tabular-nums text-muted-foreground", children: e.time }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: e.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: e.reasoning })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
            e.confidence,
            "%"
          ] })
        ] }, e.id)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Quick actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2", children: [{
          i: MessageSquare,
          l: "Message Margaret"
        }, {
          i: Bot,
          l: "Request AI check-in"
        }, {
          i: Plus,
          l: "Book a care visit",
          to: "/app/book"
        }, {
          i: Phone,
          l: "Call assigned carer"
        }, {
          i: Calendar,
          l: "View care schedule"
        }].map((a) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "justify-start", asChild: !!a.to, children: a.to ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: a.to, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(a.i, { className: "mr-2 h-4 w-4" }),
          " ",
          a.l
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(a.i, { className: "mr-2 h-4 w-4" }),
          " ",
          a.l
        ] }) }, a.l)) })
      ] })
    ] })
  ] });
}
function StatusPill({
  icon: Icon,
  label,
  value,
  tone
}) {
  const tones = {
    success: "border-accent/20 bg-accent-soft/40",
    warning: "border-warning/30 bg-warning/10",
    destructive: "border-destructive/30 bg-destructive/10"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-3 rounded-xl border ${tones[tone]} p-3`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-muted-foreground" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-medium", children: value })
    ] })
  ] });
}
function ChartCard({
  title,
  hint,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: title }),
      hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children })
  ] });
}
export {
  FamilyDashboard as component
};
