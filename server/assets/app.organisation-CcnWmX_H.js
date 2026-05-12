import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { S as StatCard } from "./widgets-Dp7Jax5V.js";
import { o as orgStats, d as orgStaff } from "./demo-data-CfZIqSeF.js";
import { U as Users } from "./users-DO0i84s7.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { B as Building2 } from "./building-2-Cvlyxd42.js";
import { D as DollarSign } from "./dollar-sign-Crl1EtGh.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { S as ShoppingBag } from "./shopping-bag-JGFkQl8h.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M16 7h6v6", key: "box55l" }],
  ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }]
];
const TrendingUp = createLucideIcon("trending-up", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "BrightCare Bristol", subtitle: "Operations · workforce · compliance · marketplace" }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Users, label: "Workforce", value: orgStats.staff, hint: `${orgStats.available} available · ${orgStats.onVisit} on visit`, tone: "primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: TriangleAlert, label: "Shift gaps", value: orgStats.shiftGaps, hint: "Next 48h", tone: "warning" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Building2, label: "Clients monitored", value: orgStats.clientsMonitored, hint: `${orgStats.openAlerts} open alerts`, tone: "default" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: "Revenue · month", value: `£${(orgStats.revenue / 1e3).toFixed(1)}k`, hint: "+12% vs last month", tone: "success" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Workforce" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", variant: "outline", children: "Manage rota" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Carer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Role" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Status" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Compliance" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Shifts" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: orgStaff.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium", children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: s.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: s.status === "on_visit" ? "bg-primary-soft text-primary border-0" : s.status === "available" ? "bg-accent-soft text-accent border-0" : "bg-muted border-0", children: s.status.replace("_", " ") }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: s.compliance === 100 ? "text-accent" : "text-warning-foreground", children: [
            s.compliance,
            "%"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: s.shifts })
        ] }, s.id)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent" }),
          " Compliance"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2", children: [{
          l: "DBS valid",
          v: "138/142",
          c: "accent"
        }, {
          l: "Training current",
          v: "140/142",
          c: "accent"
        }, {
          l: "Right to work",
          v: "142/142",
          c: "accent"
        }, {
          l: "Expiring < 30d",
          v: "4",
          c: "warning"
        }].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between rounded-lg border border-border p-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-semibold ${r.c === "accent" ? "text-accent" : "text-warning-foreground"}`, children: r.v })
        ] }, r.l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-4 w-4 text-primary" }),
          " This week"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-primary-soft p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-primary", children: orgStats.visitsThisWeek }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "visits" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-accent-soft p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-accent", children: "99.2%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "on time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold", children: "47s" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "response" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg bg-muted p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold", children: "4.86" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "CSAT" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-4 w-4 text-primary" }),
          " Marketplace"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-xs text-muted-foreground", children: "12 active listings · 4 incoming requests" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "mt-3 w-full bg-gradient-hero", children: "Open marketplace" })
      ] })
    ] })
  ] })
] });
export {
  SplitComponent as component
};
