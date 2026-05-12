import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { L as LiveDot, S as StatCard, a as SeverityBadge } from "./widgets-Dp7Jax5V.js";
import { l as liveEvents, e as aiDecisions } from "./demo-data-CfZIqSeF.js";
import { A as Activity } from "./activity--9n7_III.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { S as Sparkles } from "./sparkles-iZ9WvUgz.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { P as Pill } from "./pill-C4Js0H7q.js";
import { H as Heart } from "./heart-COHp2i8v.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { M as Moon } from "./moon-BrAs-dsP.js";
import { F as Footprints } from "./footprints-B4UlU3Ut.js";
import { B as Bot } from "./bot-BMKV8QGX.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M11 20H2", key: "nlcfvz" }],
  [
    "path",
    {
      d: "M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z",
      key: "au4z13"
    }
  ],
  ["path", { d: "M11 4H8a2 2 0 0 0-2 2v14", key: "74r1mk" }],
  ["path", { d: "M14 12h.01", key: "1jfl7z" }],
  ["path", { d: "M22 20h-3", key: "vhrsz" }]
];
const DoorOpen = createLucideIcon("door-open", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "AI care companion · live monitoring", subtitle: "Real-time event stream, AI decisions, and escalation control.", badge: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent-soft text-accent border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDot, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "Live" })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Activity, label: "Events today", value: 142, hint: "98% resolved by AI", tone: "primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: TriangleAlert, label: "Open escalations", value: 1, hint: "Medium · awaiting ack", tone: "warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Sparkles, label: "AI confidence", value: "94%", hint: "Rolling 24h average", tone: "success" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Wifi, label: "Device health", value: "7/8", hint: "Kitchen temp offline", tone: "default" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Live event feed" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: liveEvents.map((e) => {
        const Icon = e.type === "medication" ? Pill : e.type === "vitals" ? Heart : e.type === "door" ? DoorOpen : e.type === "sleep" ? Moon : Footprints;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-xl border border-border p-3.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: e.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: e.time })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: e.reasoning }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: e.severity }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
                e.confidence,
                "% confidence"
              ] })
            ] })
          ] })
        ] }, e.id);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4 text-primary" }),
        " AI reasoning"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-xl border border-primary/20 bg-primary-soft/40 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary", children: "Last decision · 13:05" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-medium", children: "Medication window missed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Risk:" }),
          " Low · ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Confidence:" }),
          " 94%"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs", children: "Pattern matches previous benign delays. Sent gentle voice reminder via Echo. No escalation required." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", className: "mt-3 w-full", children: "Override · escalate to family" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-medium", children: "Recent decisions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-2", children: aiDecisions.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border p-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-xs font-medium", children: d.event }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: d.time })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: d.risk })
        ] }, d.id)) })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 border-border/60 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Three-tier risk system" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-3 md:grid-cols-3", children: [{
      l: "Low risk",
      a: "Prompt / reminder",
      c: "border-accent/30 bg-accent-soft/40"
    }, {
      l: "Medium risk",
      a: "Notify family / carer",
      c: "border-warning/30 bg-warning/10"
    }, {
      l: "High risk",
      a: "Emergency dispatch",
      c: "border-destructive/30 bg-destructive/10"
    }].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-xl border ${t.c} p-4`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase", children: t.l }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm", children: t.a }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-2 h-4 w-4 text-success" })
    ] }, t.l)) })
  ] })
] });
export {
  SplitComponent as component
};
