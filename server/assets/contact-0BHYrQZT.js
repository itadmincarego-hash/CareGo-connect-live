import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PublicShell } from "./PublicShell-fk0NVoyP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { T as Textarea } from "./textarea-BUj11rv5.js";
import { L as Label } from "./label-C2PAW0RR.js";
import { t as toast } from "./router-LQ-ucdAP.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { P as Phone } from "./phone-rYB4bTmc.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./PublicFooter-DU8D8jQ0.js";
import "./x-xQxb60Mf.js";
const __iconNode = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(PublicShell, { eyebrow: "Contact", title: "Talk to our team.", subtitle: "Book a demo, ask about pricing, or partner with us.", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-3", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-6 lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    toast.success("Thanks! Our team will be in touch within one business day.");
  }, className: "grid gap-4 sm:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "First name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Sarah" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Last name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Whitfield" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", className: "mt-1.5", defaultValue: "sarah@example.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Organisation (optional)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "How can we help?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 5, className: "mt-1.5", defaultValue: "I'd like to book a demo for a small care home (24 residents)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "sm:col-span-2 bg-gradient-hero shadow-glow", children: "Send message" })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "hello@carego.health" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Reply within 4 working hours" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "+44 117 555 0192" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Mon–Fri · 8am–8pm" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: "Engine Shed, Bristol" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Station Approach · BS1 6QH" })
      ] })
    ] }) })
  ] })
] }) });
export {
  SplitComponent as component
};
