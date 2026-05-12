import { r as reactExports, W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { a as Logo, L as Link } from "./router-LQ-ucdAP.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { X } from "./x-xQxb60Mf.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
const __iconNode = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode);
const navItems = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/for-families", label: "For Families" },
  { to: "/for-providers", label: "For Providers" },
  { to: "/for-organisations", label: "For Organisations" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" }
];
function PublicNav() {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex h-16 max-w-7xl items-center justify-between px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-1 lg:flex", children: navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: n.to,
          activeOptions: { exact: n.to === "/" },
          activeProps: { className: "text-primary bg-primary-soft" },
          className: "rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
          children: n.label
        },
        n.to
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "sm", className: "hidden md:inline-flex", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "hidden md:inline-flex bg-gradient-hero shadow-glow hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Start Free Trial" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(!open), className: "rounded-lg p-2 lg:hidden", "aria-label": "Toggle menu", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" }) })
      ] })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border bg-background lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3", children: [
      navItems.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: n.to, onClick: () => setOpen(false), className: "rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted", children: n.label }, n.to)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2 border-t pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign in" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", className: "flex-1 bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Free Trial" }) })
      ] })
    ] }) })
  ] });
}
function PublicFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border bg-gradient-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xs text-sm text-muted-foreground", children: "AI-powered autonomous care — keeping vulnerable people safe at home, and giving families and providers the visibility they deserve." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "Built in the UK · Aligned to CQC standards · ISO 27001 ready" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Product", links: [
        ["/features", "Features"],
        ["/how-it-works", "How It Works"],
        ["/pricing", "Pricing"],
        ["/app/family", "Live Platform Demo"]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Solutions", links: [
        ["/for-families", "For Families"],
        ["/for-providers", "For Providers"],
        ["/for-organisations", "For Organisations"],
        ["/app/marketplace", "Staff Marketplace"]
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FooterCol, { title: "Company", links: [
        ["/contact", "Contact"],
        ["/signup", "Start Free Trial"],
        ["/login", "Sign in"]
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2026 CareGo Health Ltd. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Privacy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Terms" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "Security" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "hover:text-foreground", children: "DPA" })
      ] })
    ] })
  ] }) });
}
function FooterCol({ title, links }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: links.map(([to, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to, className: "text-sm text-muted-foreground hover:text-foreground", children: label }) }, to)) })
  ] });
}
export {
  PublicNav as P,
  PublicFooter as a
};
