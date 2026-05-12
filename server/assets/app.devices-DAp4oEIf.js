import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { j as devices } from "./demo-data-CfZIqSeF.js";
import { P as Plus } from "./plus-DCogdPb3.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["path", { d: "M 22 14 L 22 10", key: "nqc4tb" }],
  ["rect", { x: "2", y: "6", width: "16", height: "12", rx: "2", key: "13zb55" }]
];
const Battery = createLucideIcon("battery", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 5.17-2.69", key: "1dl1wf" }],
  ["path", { d: "M19 12.859a10 10 0 0 0-2.007-1.523", key: "4k23kn" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 4.177-2.643", key: "1grhjp" }],
  ["path", { d: "M22 8.82a15 15 0 0 0-11.288-3.764", key: "z3jwby" }],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const WifiOff = createLucideIcon("wifi-off", __iconNode);
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Devices & integrations", subtitle: "Wearables, sensors, smart speakers, and home environment.", action: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-gradient-hero shadow-glow", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1.5 h-4 w-4" }),
    " Add device"
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: devices.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: d.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.type })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: d.status === "online" ? "bg-accent-soft text-accent border-0" : "bg-destructive/10 text-destructive border-0", children: [
        d.status === "online" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "mr-1 h-3 w-3" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "mr-1 h-3 w-3" }),
        d.status
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
      d.battery !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Battery, { className: `h-3.5 w-3.5 ${d.battery < 20 ? "text-destructive" : ""}` }),
        d.battery,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Last sync · ",
        d.lastSync
      ] })
    ] })
  ] }, d.id)) })
] });
export {
  SplitComponent as component
};
