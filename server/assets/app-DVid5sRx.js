import { O as useRouter, W as jsxRuntimeExports, r as reactExports, a1 as Outlet } from "./server-B-7RlTE1.js";
import { a as Logo, L as Link } from "./router-LQ-ucdAP.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { f as familyUser } from "./demo-data-CfZIqSeF.js";
import { H as Heart } from "./heart-COHp2i8v.js";
import { A as Activity } from "./activity--9n7_III.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { P as Plus } from "./plus-DCogdPb3.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { U as Users } from "./users-DO0i84s7.js";
import { B as Building2 } from "./building-2-Cvlyxd42.js";
import { S as ShoppingBag } from "./shopping-bag-JGFkQl8h.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { S as Search } from "./search-By2J2wKj.js";
import { B as Bell } from "./bell-ComxTxgg.js";
import { C as ChevronDown } from "./chevron-down-Q1NVDZsG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function useRouterState(opts) {
  const contextRouter = useRouter({ warn: opts?.router === void 0 });
  const router = opts?.router || contextRouter;
  {
    const state = router.stores.__store.get();
    return opts?.select ? opts.select(state) : state;
  }
}
const __iconNode$2 = [
  ["path", { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M12 7v5l4 2", key: "1fdv2h" }]
];
const History = createLucideIcon("history", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
  ["path", { d: "M21 12H9", key: "dn1m92" }],
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }]
];
const LogOut = createLucideIcon("log-out", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
      key: "1i5ecw"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
];
const Settings = createLucideIcon("settings", __iconNode);
const nav = [{
  group: "Care",
  items: [{
    to: "/app/family",
    label: "Family dashboard",
    icon: Heart
  }, {
    to: "/app/monitoring",
    label: "AI monitoring",
    icon: Activity
  }, {
    to: "/app/alerts",
    label: "Alerts & response",
    icon: TriangleAlert
  }, {
    to: "/app/book",
    label: "Book support",
    icon: Plus
  }, {
    to: "/app/tracking",
    label: "Live agent tracking",
    icon: MapPin
  }]
}, {
  group: "Workforce",
  items: [{
    to: "/app/provider",
    label: "Provider dashboard",
    icon: Users
  }, {
    to: "/app/organisation",
    label: "Organisation",
    icon: Building2
  }, {
    to: "/app/marketplace",
    label: "Staff marketplace",
    icon: ShoppingBag
  }]
}, {
  group: "Insights",
  items: [{
    to: "/app/history",
    label: "History & reports",
    icon: History
  }, {
    to: "/app/devices",
    label: "Devices",
    icon: Wifi
  }, {
    to: "/app/settings",
    label: "Settings",
    icon: Settings
  }]
}];
function AppLayout() {
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  const path = useRouterState({
    select: (s) => s.location.pathname
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-screen bg-muted/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `fixed inset-y-0 left-0 z-40 w-64 transform border-r border-border bg-sidebar transition-transform lg:static lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-16 items-center border-b border-border px-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex h-[calc(100%-4rem)] flex-col overflow-y-auto p-3", children: [
        nav.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: g.group }),
          g.items.map((item) => {
            const active = path === item.to;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.to, onClick: () => setMobileOpen(false), className: `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-primary-soft text-primary" : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4" }),
              " ",
              item.label
            ] }, item.to);
          })
        ] }, g.group)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto rounded-xl border border-border bg-gradient-soft p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: familyUser.photo, alt: "", className: "h-9 w-9 rounded-full bg-muted" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate text-sm font-medium", children: familyUser.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "truncate text-[11px] text-muted-foreground", children: [
              familyUser.relation,
              " · Family Plus"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", "aria-label": "Sign out", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LogOut, { className: "h-4 w-4 text-muted-foreground hover:text-foreground" }) })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setMobileOpen(!mobileOpen), className: "rounded-lg p-2 lg:hidden", "aria-label": "Menu", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-0.5 w-5 bg-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-0.5 w-5 bg-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 h-0.5 w-5 bg-foreground" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden flex-1 max-w-md md:block", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { placeholder: "Search people, devices, events…", className: "pl-9" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "bg-gradient-hero shadow-glow hidden sm:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/book", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "mr-1 h-4 w-4" }),
            " Book support"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "icon", className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-semibold text-destructive-foreground", children: "3" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 rounded-lg border border-border bg-card px-2 py-1.5 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: familyUser.photo, alt: "", className: "h-6 w-6 rounded-full bg-muted" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: familyUser.name.split(" ")[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 text-muted-foreground" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1 p-4 md:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
    ] })
  ] });
}
function PageHeader({
  title,
  subtitle,
  action,
  badge
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 flex flex-wrap items-end justify-between gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold tracking-tight md:text-3xl", children: title }),
        badge
      ] }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: subtitle })
    ] }),
    action
  ] });
}
export {
  PageHeader,
  AppLayout as component
};
