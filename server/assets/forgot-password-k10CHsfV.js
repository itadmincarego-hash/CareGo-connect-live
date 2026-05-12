import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { t as toast, L as Link } from "./router-LQ-ucdAP.js";
import { A as AuthShell } from "./AuthShell-kIyPLBxI.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { L as Label } from "./label-C2PAW0RR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-iZ9WvUgz.js";
import "./createLucideIcon-CZ_h3oUv.js";
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { title: "Reset your password", subtitle: "We'll email you a secure reset link.", footer: /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Back to sign in" }) }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
  e.preventDefault();
  toast.success("Check your email for the reset link.");
}, className: "space-y-4", children: [
  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, className: "mt-1.5" })
  ] }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-gradient-hero shadow-glow", children: "Send reset link" })
] }) });
export {
  SplitComponent as component
};
