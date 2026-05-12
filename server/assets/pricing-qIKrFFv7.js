import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { L as Link } from "./router-LQ-ucdAP.js";
import { P as PublicShell } from "./PublicShell-fk0NVoyP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { p as pricingTiers } from "./demo-data-CfZIqSeF.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./PublicFooter-DU8D8jQ0.js";
import "./x-xQxb60Mf.js";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicShell, { eyebrow: "Pricing", title: "Plans that scale with the care you give.", subtitle: "Start free for 14 days. No card required.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-6 md:grid-cols-3", children: pricingTiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `p-7 ${t.featured ? "border-primary shadow-elevated ring-1 ring-primary" : "border-border/60"}`, children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: t.name }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-semibold", children: t.price }),
    t.per && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t.per })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.description }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
  ] }, f)) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: `mt-7 w-full ${t.featured ? "bg-gradient-hero shadow-glow" : ""}`, variant: t.featured ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t.cta === "Book Demo" ? "/contact" : "/signup", children: t.cta }) })
] }, t.name)) }) });
export {
  SplitComponent as component
};
