import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { L as Link } from "./router-LQ-ucdAP.js";
import { P as PublicShell } from "./PublicShell-fk0NVoyP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Bot } from "./bot-BMKV8QGX.js";
import { A as Activity } from "./activity--9n7_III.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { B as Building2 } from "./building-2-Cvlyxd42.js";
import { H as HeartHandshake, C as ChartColumn, a as Headphones } from "./heart-handshake-BHqP7sRv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./PublicFooter-DU8D8jQ0.js";
import "./x-xQxb60Mf.js";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicShell, { eyebrow: "Features", title: "The complete operating system for modern care.", subtitle: "From AI-powered home monitoring to live workforce dispatch — CareGo connects every part of the care journey.", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-3", children: [{
    Icon: Bot,
    title: "AI Care Companion",
    desc: "24/7 conversational presence with explainable decisioning."
  }, {
    Icon: Activity,
    title: "Wellbeing monitoring",
    desc: "Vitals, movement, sleep, and environment fused into one score."
  }, {
    Icon: TriangleAlert,
    title: "Risk response",
    desc: "Three-tier model: prompt, notify, dispatch."
  }, {
    Icon: MapPin,
    title: "Live agent tracking",
    desc: "Verified responders, live route, ETA, and full audit trail."
  }, {
    Icon: Building2,
    title: "Workforce & compliance",
    desc: "Rotas, DBS, training and right-to-work in one console."
  }, {
    Icon: HeartHandshake,
    title: "Staff marketplace",
    desc: "Share verified capacity across organisations."
  }, {
    Icon: ChartColumn,
    title: "Reporting & audit",
    desc: "Every alert, AI decision, and visit — exportable."
  }, {
    Icon: Headphones,
    title: "24/7 human support",
    desc: "Real responders behind every escalation."
  }].map(({
    Icon,
    title,
    desc
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: desc })
  ] }, title)) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-hero shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/family", children: "View live demo" }) }) })
] });
export {
  SplitComponent as component
};
