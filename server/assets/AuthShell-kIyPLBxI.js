import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { a as Logo, L as Link, C as CareGoMark } from "./router-LQ-ucdAP.js";
import { S as Sparkles } from "./sparkles-iZ9WvUgz.js";
function AuthShell({ title, subtitle, children, footer }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen lg:grid lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col px-6 py-8 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl font-semibold tracking-tight", children: title }),
        subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children }),
        footer && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-sm text-muted-foreground", children: footer })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© 2026 CareGo Health Ltd · ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground", children: "Back to site" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden overflow-hidden bg-gradient-hero lg:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-mesh opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full flex-col justify-between p-12 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " Trusted by 12,000+ care recipients"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CareGoMark, { className: "h-32 w-32 rounded-3xl shadow-glow animate-float-soft" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-semibold leading-tight", children: '"CareGo gives me the calm of knowing Mum is safe — even from 200 miles away."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80", children: "Eleanor R. · Family user, Newcastle" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AuthShell as A
};
