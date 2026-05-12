import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { P as PublicNav, a as PublicFooter } from "./PublicFooter-DU8D8jQ0.js";
function PublicShell({ eyebrow, title, subtitle, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-mesh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4 py-16 md:py-24", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl text-lg text-muted-foreground", children: subtitle })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-7xl px-4 py-16", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicFooter, {})
  ] });
}
export {
  PublicShell as P
};
