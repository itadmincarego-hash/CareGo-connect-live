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
function Login() {
  const navigate = useNavigate();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AuthShell, { title: "Welcome back", subtitle: "Sign in to continue caring with CareGo.", footer: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    "Don't have an account? ",
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", className: "font-medium text-primary hover:underline", children: "Create one" })
  ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
    e.preventDefault();
    navigate({
      to: "/app/family"
    });
  }, className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Email" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "email", required: true, defaultValue: "sarah@example.com", className: "mt-1.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { children: "Password" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { type: "password", required: true, defaultValue: "••••••••", className: "mt-1.5" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "checkbox", className: "rounded border-input" }),
        " Remember me"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/forgot-password", className: "text-primary hover:underline", children: "Forgot password?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full bg-gradient-hero shadow-glow", children: "Sign in" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-full border-t" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-background px-2 text-muted-foreground", children: "or" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", className: "w-full", children: "Continue with Google" })
  ] }) });
}
export {
  Login as component
};
