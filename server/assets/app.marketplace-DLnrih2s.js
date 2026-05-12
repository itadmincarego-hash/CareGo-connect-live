import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { I as Input } from "./input-BaCx51LH.js";
import { m as marketplaceListings } from "./demo-data-CfZIqSeF.js";
import { S as Search } from "./search-By2J2wKj.js";
import { S as Star } from "./star-GMsKPKkV.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { S as Shield } from "./shield-Dzj7PMsp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Staff marketplace", subtitle: "Browse verified carers and unused capacity across organisations.", action: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gradient-hero shadow-glow", children: "+ List capacity" }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 min-w-64", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search by skill, location, role…", className: "pl-9" })
    ] }),
    ["Night shift", "Dementia", "Hoist trained", "Within 5mi", "Available today"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "cursor-pointer", children: f }, f))
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: marketplaceListings.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft font-semibold text-primary", children: l.carer.split(" ").map((n) => n[0]).join("") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: l.carer }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
          l.rating
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        l.role,
        " · ",
        l.org
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 inline h-3 w-3" }),
        l.distance,
        " mi · ",
        l.available
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-wrap gap-1.5", children: [
        l.skills.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "text-[10px]", children: s }, s)),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "bg-accent-soft text-accent border-0 text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "mr-1 h-3 w-3" }),
          "Verified"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg font-semibold", children: [
        "£",
        l.rate,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "/hr" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "mt-2 bg-gradient-hero shadow-glow", children: "Book" })
    ] })
  ] }) }, l.id)) })
] });
export {
  SplitComponent as component
};
