import { W as jsxRuntimeExports } from "./server-B-7RlTE1.js";
import { u as useNavigate, L as Link } from "./router-LQ-ucdAP.js";
import { A as AuthShell } from "./AuthShell-kIyPLBxI.js";
import { B as Button } from "./button-CXEpyh_l.js";
import { I as Input } from "./input-BaCx51LH.js";
import { L as Label } from "./label-C2PAW0RR.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./sparkles-iZ9WvUgz.js";
import "./createLucideIcon-CZ_h3oUv.js";
function Signup() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { title: "Start your free trial", subtitle: "14 days free. No credit card required.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Already have an account? ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", className: "font-medium text-primary hover:underline", children: "Sign in" })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    navigate({
      to: "/onboarding"
    });
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "First name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "mt-1.5", defaultValue: "Sarah" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Last name" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, className: "mt-1.5", defaultValue: "Whitfield" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, className: "mt-1.5", defaultValue: "sarah@example.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, className: "mt-1.5", placeholder: "At least 12 characters" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-gradient-hero shadow-glow", children: "Create account" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "By creating an account you agree to our Terms and Privacy Policy." })
  ] }) });
}
export {
  Signup as component
};
