import { r as reactExports, W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { u as useNavigate, a as Logo } from "./router-LQ-ucdAP.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { L as Label } from "./label-C2PAW0RR.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { U as Users } from "./users-DO0i84s7.js";
import { H as Heart } from "./heart-COHp2i8v.js";
import { S as Stethoscope } from "./stethoscope-B7A-tZbP.js";
import { B as Building2 } from "./building-2-Cvlyxd42.js";
import { U as UserCheck } from "./user-check-HwD7Koib.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { B as Bell } from "./bell-ComxTxgg.js";
import { A as ArrowRight } from "./arrow-right-C2v7Tgma.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$2 = [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }]
];
const ArrowLeft = createLucideIcon("arrow-left", __iconNode$2);
const __iconNode$1 = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const roles = [{
  id: "family",
  label: "Family / Care Seeker",
  desc: "I'm setting up CareGo for a loved one.",
  icon: Users
}, {
  id: "self",
  label: "Individual Receiving Care",
  desc: "CareGo will be supporting me directly.",
  icon: Heart
}, {
  id: "agent",
  label: "Care Provider / Agent",
  desc: "I deliver care and want to take bookings.",
  icon: Stethoscope
}, {
  id: "org",
  label: "Care Organisation Admin",
  desc: "I run a care home or agency.",
  icon: Building2
}, {
  id: "viewer",
  label: "Relative / Monitoring Viewer",
  desc: "I've been invited to monitor someone.",
  icon: UserCheck
}];
const steps = ["Choose your role", "Create profile", "Add care recipient", "Connect devices", "Emergency contacts", "Plan & alerts"];
function Onboarding() {
  const navigate = useNavigate();
  const [step, setStep] = reactExports.useState(0);
  const [role, setRole] = reactExports.useState("family");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-gradient-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-background/80 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex max-w-5xl items-center justify-between px-4 py-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "Step ",
          step + 1,
          " of ",
          steps.length
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-hero transition-all", style: {
        width: `${(step + 1) / steps.length * 100}%`
      } }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl px-4 py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight", children: steps[step] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-6 border-border/60 p-6 md:p-8", children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: roles.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setRole(r.id), className: `flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all ${role === r.id ? "border-primary bg-primary-soft" : "border-border hover:border-primary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-10 w-10 items-center justify-center rounded-lg ${role === r.id ? "bg-gradient-hero text-white" : "bg-muted text-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(r.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: r.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: r.desc })
          ] }),
          role === r.id && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary" })
        ] }, r.id)) }),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "First name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Sarah" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Last name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Whitfield" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "+44 7700 900123" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "City" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Bristol" })
          ] })
        ] }),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-muted/30 p-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Add the person CareGo will care for. You can add more later." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Margaret Whitfield" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Age" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "78" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Conditions / support needs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "Mild dementia, Type 2 diabetes" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Home address" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1.5", defaultValue: "14 Oakwood Lane, Bristol BS8 2QR" })
            ] })
          ] })
        ] }),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [{
          n: "Apple Watch Series 9",
          t: "Wearable"
        }, {
          n: "Smart Pill Dispenser",
          t: "Medication"
        }, {
          n: "Amazon Echo Show 8",
          t: "Smart speaker"
        }, {
          n: "Motion sensors (3)",
          t: "Home"
        }].map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-3 rounded-xl border border-border p-4 hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4 rounded border-input text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wifi, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: d.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: d.t })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Detected" })
        ] }, d.n)) }),
        step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          [1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3 rounded-xl border border-border p-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", defaultValue: i === 1 ? "James Whitfield" : "Dr. Owens" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Relation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", defaultValue: i === 1 ? "Son" : "GP" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { className: "text-xs", children: "Phone" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { className: "mt-1", defaultValue: "+44 7700 900456" })
            ] })
          ] }, i)),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", size: "sm", children: "+ Add contact" })
        ] }),
        step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "mr-1.5 inline h-4 w-4" }),
              " Alert preferences"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Low-risk events" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Medium-risk events" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "High-risk events" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", defaultChecked: true, className: "h-4 w-4" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-primary bg-primary-soft p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-medium", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CreditCard, { className: "mr-1.5 inline h-4 w-4 text-primary" }),
              " Family Plus · 14-day free trial"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "£59/month after trial. Cancel anytime." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "ghost", onClick: () => setStep(Math.max(0, step - 1)), disabled: step === 0, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "mr-1.5 h-4 w-4" }),
          " Back"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { className: "bg-gradient-hero shadow-glow", onClick: () => step < steps.length - 1 ? setStep(step + 1) : navigate({
          to: "/app/family"
        }), children: [
          step === steps.length - 1 ? "Finish & open dashboard" : "Continue",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] })
      ] })
    ] })
  ] });
}
export {
  Onboarding as component
};
