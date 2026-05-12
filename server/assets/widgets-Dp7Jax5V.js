import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Badge } from "./badge-DljzzQci.js";
function StatCard({ icon: Icon, label, value, hint, tone = "default" }) {
  const tones = {
    default: "bg-muted text-foreground",
    success: "bg-accent-soft text-accent",
    warning: "bg-warning/15 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
    primary: "bg-primary-soft text-primary"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border/60 p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-2xl font-semibold", children: value }),
      hint && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: hint })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-lg ${tones[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) })
  ] }) });
}
function SeverityBadge({ severity }) {
  const map = {
    low: "bg-accent-soft text-accent",
    info: "bg-primary-soft text-primary",
    success: "bg-accent-soft text-accent",
    medium: "bg-warning/15 text-warning-foreground",
    high: "bg-destructive/10 text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `${map[severity]} border-0 capitalize`, children: severity });
}
function LiveDot({ tone = "accent" }) {
  const colors = {
    accent: "bg-accent text-accent",
    destructive: "bg-destructive text-destructive",
    warning: "bg-warning text-warning",
    primary: "bg-primary text-primary"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative inline-flex h-2 w-2 rounded-full pulse-dot ${colors[tone]}` });
}
function MiniBarChart({ data, color = "oklch(0.48 0.16 245)" }) {
  const max = Math.max(...data.map((d) => d.v));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-32 items-end gap-1.5", children: data.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col items-center gap-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full flex-1 items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full rounded-md transition-all", style: { height: `${d.v / max * 100}%`, background: color, opacity: 0.85 } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: d.d })
  ] }, d.d)) });
}
function MiniLineChart({ data, color = "oklch(0.48 0.16 245)" }) {
  const vals = data.map((d) => d.v);
  const min = Math.min(...vals) - 5, max = Math.max(...vals) + 5;
  const w = 300, h = 90;
  const points = data.map((d, i) => `${i / (data.length - 1) * w},${h - (d.v - min) / (max - min) * h}`).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: `0 0 ${w} ${h + 20}`, className: "h-28 w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "ml-grad", x1: "0", x2: "0", y1: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: color, stopOpacity: "0.3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: color, stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points, fill: "none", stroke: color, strokeWidth: "2.5", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: `0,${h} ${points} ${w},${h}`, fill: "url(#ml-grad)" }),
    data.map((d, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: i / (data.length - 1) * w, y: h + 14, fontSize: "9", fill: "oklch(0.5 0.02 240)", textAnchor: "middle", children: d.t }, d.t))
  ] });
}
export {
  LiveDot as L,
  MiniLineChart as M,
  StatCard as S,
  SeverityBadge as a,
  MiniBarChart as b
};
