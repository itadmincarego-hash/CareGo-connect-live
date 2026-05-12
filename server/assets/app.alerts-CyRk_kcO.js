import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { S as StatCard, a as SeverityBadge } from "./widgets-Dp7Jax5V.js";
import { i as alerts } from "./demo-data-CfZIqSeF.js";
import { B as Bell } from "./bell-ComxTxgg.js";
import { C as Clock } from "./clock-DbgIZzvt.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Alerts & response centre", subtitle: "Open alerts, escalation, and post-incident review." }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Bell, label: "Open alerts", value: 1, hint: "1 medium · 0 high", tone: "warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Clock, label: "Median response", value: "47s", hint: "Last 7 days", tone: "primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: CircleCheck, label: "Resolved today", value: 2, tone: "success" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: TriangleAlert, label: "Escalations · 7d", value: 4, hint: "3 medium · 1 high", tone: "destructive" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 border-border/60 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "All alerts" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: ["All", "High", "Medium", "Low", "Resolved"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: f }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: alerts.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-xl border border-border p-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${a.severity === "high" ? "bg-destructive/10 text-destructive" : a.severity === "medium" ? "bg-warning/15 text-warning-foreground" : "bg-accent-soft text-accent"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          a.time,
          " · Responder: ",
          a.responder
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SeverityBadge, { severity: a.severity }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "capitalize", children: a.status }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: a.status === "open" ? "default" : "outline", children: a.status === "open" ? "Acknowledge" : "Review" })
    ] }, a.id)) })
  ] })
] });
export {
  SplitComponent as component
};
