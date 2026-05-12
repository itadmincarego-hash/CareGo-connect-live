import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { g as bookingHistory } from "./demo-data-CfZIqSeF.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { S as Star } from "./star-GMsKPKkV.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "History & reports", subtitle: "Full audit trail of every booking, AI decision, alert, and visit.", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "mr-1.5 h-4 w-4" }),
    " Export CSV"
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 flex flex-wrap gap-2", children: ["All", "Bookings", "Alerts", "AI decisions", "Incidents", "Travel"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: t === "Bookings" ? "default" : "outline", size: "sm", className: t === "Bookings" ? "bg-gradient-hero" : "", children: t }, t)) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "overflow-hidden border-border/60", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-muted/50 text-left text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Booking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Agent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Duration" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Rating" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "p-3", children: "Status" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: bookingHistory.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-t border-border hover:bg-muted/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 font-medium text-primary", children: b.id }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: b.date }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: b.service }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: b.agent }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3 text-muted-foreground", children: b.duration }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
        b.rating
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "bg-accent-soft text-accent border-0", children: "Completed" }) })
    ] }, b.id)) })
  ] }) })
] });
export {
  SplitComponent as component
};
