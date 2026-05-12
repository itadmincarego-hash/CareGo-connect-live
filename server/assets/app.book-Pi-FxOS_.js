import { r as reactExports, W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { u as useNavigate, P as PageHeader, L as Link } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { L as Label } from "./label-C2PAW0RR.js";
import { T as Textarea } from "./textarea-BUj11rv5.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { S as Stethoscope } from "./stethoscope-B7A-tZbP.js";
import { U as Users } from "./users-DO0i84s7.js";
import { P as Pill } from "./pill-C4Js0H7q.js";
import { M as Moon } from "./moon-BrAs-dsP.js";
import { C as Car } from "./car-B4l2spJv.js";
import { S as Sparkles } from "./sparkles-iZ9WvUgz.js";
import { C as Clock } from "./clock-DbgIZzvt.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./createLucideIcon-CZ_h3oUv.js";
const services = [{
  id: "welfare",
  icon: TriangleAlert,
  label: "Urgent welfare check",
  price: "from £35"
}, {
  id: "care",
  icon: Stethoscope,
  label: "Care visit",
  price: "from £28/hr"
}, {
  id: "companion",
  icon: Users,
  label: "Companionship",
  price: "from £22/hr"
}, {
  id: "meds",
  icon: Pill,
  label: "Medication support",
  price: "from £25"
}, {
  id: "night",
  icon: Moon,
  label: "Night response",
  price: "from £40"
}, {
  id: "transport",
  icon: Car,
  label: "Transport / accompaniment",
  price: "from £30"
}];
function BookPage() {
  const navigate = useNavigate();
  const [service, setService] = reactExports.useState("welfare");
  const [urgency, setUrgency] = reactExports.useState("urgent");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHeader, { title: "Book support", subtitle: "Request verified help in minutes. Most bookings accepted within 4 minutes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "lg:col-span-2 border-border/60 p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        navigate({
          to: "/app/tracking"
        });
      }, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Service type" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-2 sm:grid-cols-2", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setService(s.id), className: `flex items-center gap-3 rounded-xl border p-3 text-left transition-all ${service === s.id ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-9 w-9 items-center justify-center rounded-lg ${service === s.id ? "bg-gradient-hero text-white" : "bg-muted"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: s.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: s.price })
            ] })
          ] }, s.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-sm font-semibold", children: "Urgency" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2", children: [{
            id: "urgent",
            l: "Urgent · <30 min"
          }, {
            id: "today",
            l: "Today · within 4h"
          }, {
            id: "scheduled",
            l: "Scheduled"
          }].map((u) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setUrgency(u.id), className: `rounded-xl border p-3 text-sm font-medium ${urgency === u.id ? "border-primary bg-primary-soft text-primary" : "border-border"}`, children: u.l }, u.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "date", className: "mt-1.5", defaultValue: "2026-05-11" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Time" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "time", className: "mt-1.5", defaultValue: "14:30" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Address" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "14 Oakwood Lane, Bristol BS8 2QR" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Notes / special instructions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { rows: 3, className: "mt-1.5", defaultValue: "Check on Margaret following missed medication. Front key in safe — code with agent." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-accent/30 bg-accent-soft/40 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4 text-accent" }),
            " CareGo will match a verified agent nearby"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Estimated match time: under 4 minutes · DBS, training, right-to-work verified." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/family", children: "Cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "bg-gradient-hero shadow-glow", children: "Submit booking" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold", children: "Booking statuses" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-2 text-sm", children: ["Requested", "Searching for agent", "Agent accepted", "On the way", "Arrived", "Checked in", "Completed"].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-5 w-5 items-center justify-center rounded-full bg-primary-soft text-[10px] font-semibold text-primary", children: i + 1 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s })
          ] }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary" }),
            " Recent bookings"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BK-20399 · Priya Nair · 12 May" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BK-20381 · Aisha Patel · 08 May" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "BK-20355 · Daniel O'Connor · 01 May" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "mt-3 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/app/history", children: "View all history" }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  BookPage as component
};
