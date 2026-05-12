import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { A as Avatar, a as AvatarImage, b as AvatarFallback } from "./avatar-CPEUcL-r.js";
import { L as LiveDot } from "./widgets-Dp7Jax5V.js";
import { c as currentBooking } from "./demo-data-CfZIqSeF.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { S as Star } from "./star-GMsKPKkV.js";
import { S as Shield } from "./shield-Dzj7PMsp.js";
import { P as Phone } from "./phone-rYB4bTmc.js";
import { M as MessageSquare } from "./message-square-BHKWv70R.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { X } from "./x-xQxb60Mf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-BYEGRGHm.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
function DT({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between gap-3 border-b border-border/60 pb-2 last:border-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "shrink-0 text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-right font-medium", children: v })
  ] });
}
const SplitComponent = () => {
  const b = currentBooking;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Help is on the way", subtitle: `Booking ${b.id} · ${b.service}`, badge: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-primary-soft text-primary border-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDot, { tone: "primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5", children: "On the way" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 overflow-hidden border-border/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-80 bg-gradient-to-br from-primary-soft via-card to-accent-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 240", className: "absolute inset-0 h-full w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid2", width: "24", height: "24", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 24 0 L 0 0 0 24", fill: "none", stroke: "oklch(0.48 0.16 245 / 0.08)", strokeWidth: "1" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "240", fill: "url(#grid2)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 180 L 400 180", stroke: "oklch(0.85 0.01 230)", strokeWidth: "14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 200 0 L 200 240", stroke: "oklch(0.85 0.01 230)", strokeWidth: "14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 80 L 400 80", stroke: "oklch(0.88 0.01 230)", strokeWidth: "8" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 200 L 100 200 L 100 80 L 320 80 L 320 40", stroke: "oklch(0.48 0.16 245)", strokeWidth: "4", fill: "none", strokeLinecap: "round", strokeDasharray: "8 4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "200", r: "20", fill: "oklch(0.62 0.14 165)", opacity: "0.25" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "100", cy: "200", r: "11", fill: "oklch(0.62 0.14 165)", stroke: "white", strokeWidth: "2.5" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("g", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "320", cy: "40", r: "11", fill: "oklch(0.48 0.16 245)", stroke: "white", strokeWidth: "2.5" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-lg bg-card/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 inline h-3.5 w-3.5 text-accent" }),
            " Aisha · 2.4 mi away"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 rounded-lg bg-gradient-hero px-4 py-2 text-sm font-semibold text-white shadow-glow", children: "ETA 12 minutes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Avatar, { className: "h-16 w-16 ring-2 ring-primary-soft", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImage, { src: b.agent.photo }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, { children: "AP" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: b.agent.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sm font-medium", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
                b.agent.rating
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                "· ",
                b.agent.jobs,
                " jobs"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              b.agent.role,
              " · ",
              b.agent.org
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex flex-wrap gap-1.5", children: b.agent.verified.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "mr-1 h-3 w-3" }),
              v
            ] }, v)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Journey timeline" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: b.timeline.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${t.done ? "bg-success text-success-foreground" : "border-2 border-dashed border-muted-foreground/40"}`, children: t.done && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm ${t.active ? "font-semibold text-primary" : "font-medium"}`, children: t.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.time })
            ] }),
            t.active && /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDot, { tone: "primary" })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Booking details" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(DT, { k: "Service", v: b.service }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DT, { k: "Scheduled", v: b.scheduled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DT, { k: "Address", v: b.address }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(DT, { k: "Notes", v: b.notes })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "mr-1.5 h-4 w-4" }),
              " Support"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", className: "flex-1 text-destructive border-destructive/30 hover:bg-destructive/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "mr-1.5 h-4 w-4" }),
              " Cancel"
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
};
export {
  SplitComponent as component
};
