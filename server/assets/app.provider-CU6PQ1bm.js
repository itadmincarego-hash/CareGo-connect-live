import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PageHeader } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { S as StatCard } from "./widgets-Dp7Jax5V.js";
import { S as Switch } from "./switch-ByQULoNH.js";
import { C as Calendar } from "./calendar-CR1WfCPD.js";
import { S as Star } from "./star-GMsKPKkV.js";
import { D as DollarSign } from "./dollar-sign-Crl1EtGh.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { C as Car } from "./car-B4l2spJv.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./index-D09C4Dvc.js";
import "./index-BYEGRGHm.js";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Provider dashboard", subtitle: "Aisha Patel · Senior Care Specialist", action: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Switch, { defaultChecked: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "Available for bookings" })
  ] }) }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 md:grid-cols-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Calendar, label: "Visits today", value: 4, hint: "2 completed · 1 active", tone: "primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: Star, label: "Rating", value: "4.9", hint: "312 jobs · top 3%", tone: "success" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: DollarSign, label: "Earnings · week", value: "£684", hint: "+£120 vs last week", tone: "default" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { icon: CircleCheck, label: "Compliance", value: "100%", hint: "All credentials valid", tone: "success" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-2 border-border/60 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Today's visits" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: [{
        t: "10:00",
        c: "Eleanor Hughes",
        s: "Medication support",
        a: "12 Park Rd, Clifton",
        st: "completed"
      }, {
        t: "12:30",
        c: "Robert Singh",
        s: "Care visit · 1h",
        a: "44 Whiteladies, BS8",
        st: "completed"
      }, {
        t: "14:30",
        c: "Margaret Whitfield",
        s: "Urgent welfare check",
        a: "14 Oakwood Ln, BS8",
        st: "on_the_way"
      }, {
        t: "17:00",
        c: "Doris Bennett",
        s: "Companionship · 2h",
        a: "9 Stoke Lane, BS9",
        st: "upcoming"
      }].map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 rounded-xl border border-border p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-soft text-sm font-semibold text-primary", children: v.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: v.c }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: v.s }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 inline h-3 w-3" }),
            v.a
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: v.st === "completed" ? "bg-accent-soft text-accent border-0" : v.st === "on_the_way" ? "bg-primary-soft text-primary border-0" : "bg-muted text-foreground border-0", children: v.st === "completed" ? "Completed" : v.st === "on_the_way" ? "On the way" : "Upcoming" }),
        v.st === "on_the_way" && /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "sm", className: "bg-gradient-hero", children: "Arrived" }),
        v.st === "upcoming" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", variant: "outline", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Car, { className: "mr-1.5 h-4 w-4" }),
          "Start travel"
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Verification" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-2", children: [{
        l: "DBS check",
        e: "Valid until Sep 2027"
      }, {
        l: "Training",
        e: "Refresher Aug 2026"
      }, {
        l: "Right to work",
        e: "Verified"
      }, {
        l: "First aid",
        e: "Valid until Mar 2027"
      }].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border p-3 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium", children: v.l })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: v.e })
      ] }, v.l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-semibold", children: "Recent earnings" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 rounded-xl border border-border bg-gradient-soft p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "This month" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-semibold text-gradient", children: "£2,418" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "+£312 vs last month" })
      ] })
    ] })
  ] })
] });
export {
  SplitComponent as component
};
