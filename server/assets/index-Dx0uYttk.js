import { r as reactExports, W as jsxRuntimeExports, V as React } from "./server-B-7RlTE1.js";
import { c as cn, L as Link } from "./router-LQ-ucdAP.js";
import { P as PublicNav, a as PublicFooter } from "./PublicFooter-DU8D8jQ0.js";
import { u as useComposedRefs, B as Button } from "./button-CXEpyh_l.js";
import { C as Card } from "./card-CLVQJ1cN.js";
import { B as Badge } from "./badge-DljzzQci.js";
import { t as testimonials, p as pricingTiers, a as faqs, h as heartRateChart } from "./demo-data-CfZIqSeF.js";
import { u as useControllableState, P as Primitive, c as composeEventHandlers, a as createContextScope } from "./index-D09C4Dvc.js";
import { u as useId, P as Presence, c as createCollection, a as useDirection } from "./index-B5S8CJH-.js";
import { u as useLayoutEffect2 } from "./index-BYEGRGHm.js";
import { C as ChevronDown } from "./chevron-down-Q1NVDZsG.js";
import { S as Sparkles } from "./sparkles-iZ9WvUgz.js";
import { A as ArrowRight } from "./arrow-right-C2v7Tgma.js";
import { c as createLucideIcon } from "./createLucideIcon-CZ_h3oUv.js";
import { S as Shield } from "./shield-Dzj7PMsp.js";
import { C as CircleCheck } from "./circle-check-D_wShAIX.js";
import { U as Users } from "./users-DO0i84s7.js";
import { W as Wifi } from "./wifi-BC7SuteU.js";
import { B as Bot } from "./bot-BMKV8QGX.js";
import { A as Activity } from "./activity--9n7_III.js";
import { T as TriangleAlert } from "./triangle-alert-Mn9rxOfm.js";
import { M as MapPin } from "./map-pin-mMl8DeZj.js";
import { B as Building2 } from "./building-2-Cvlyxd42.js";
import { H as HeartHandshake, C as ChartColumn, a as Headphones } from "./heart-handshake-BHqP7sRv.js";
import { B as Bell } from "./bell-ComxTxgg.js";
import { P as Phone } from "./phone-rYB4bTmc.js";
import { H as Heart } from "./heart-COHp2i8v.js";
import { U as UserCheck } from "./user-check-HwD7Koib.js";
import { S as Star } from "./star-GMsKPKkV.js";
import { M as MessageSquare } from "./message-square-BHKWv70R.js";
import { P as Pill } from "./pill-C4Js0H7q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-xQxb60Mf.js";
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",
      key: "kmsa83"
    }
  ],
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
];
const CirclePlay = createLucideIcon("circle-play", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: reactExports.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            "data-state": getState$1(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME$1 = "CollapsibleTrigger";
var CollapsibleTrigger = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME$1, __scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState$1(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME$1;
var CONTENT_NAME$1 = "CollapsibleContent";
var CollapsibleContent = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME$1, props.__scopeCollapsible);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME$1;
var CollapsibleContentImpl = reactExports.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME$1, __scopeCollapsible);
  const [isPresent, setIsPresent] = reactExports.useState(present);
  const ref = reactExports.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = reactExports.useRef(0);
  const height = heightRef.current;
  const widthRef = reactExports.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = reactExports.useRef(isOpen);
  const originalStylesRef = reactExports.useRef(void 0);
  reactExports.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-state": getState$1(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState$1(open) {
  return open ? "open" : "closed";
}
var Root = Collapsible;
var Trigger = CollapsibleTrigger;
var Content = CollapsibleContent;
var ACCORDION_NAME = "Accordion";
var ACCORDION_KEYS = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"];
var [Collection, useCollection, createCollectionScope] = createCollection(ACCORDION_NAME);
var [createAccordionContext] = createContextScope(ACCORDION_NAME, [
  createCollectionScope,
  createCollapsibleScope
]);
var useCollapsibleScope = createCollapsibleScope();
var Accordion$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { type, ...accordionProps } = props;
    const singleProps = accordionProps;
    const multipleProps = accordionProps;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Provider, { scope: props.__scopeAccordion, children: type === "multiple" ? /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplMultiple, { ...multipleProps, ref: forwardedRef }) : /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImplSingle, { ...singleProps, ref: forwardedRef }) });
  }
);
Accordion$1.displayName = ACCORDION_NAME;
var [AccordionValueProvider, useAccordionValueContext] = createAccordionContext(ACCORDION_NAME);
var [AccordionCollapsibleProvider, useAccordionCollapsibleContext] = createAccordionContext(
  ACCORDION_NAME,
  { collapsible: false }
);
var AccordionImplSingle = React.forwardRef(
  (props, forwardedRef) => {
    const {
      value: valueProp,
      defaultValue,
      onValueChange = () => {
      },
      collapsible = false,
      ...accordionSingleProps
    } = props;
    const [value, setValue] = useControllableState({
      prop: valueProp,
      defaultProp: defaultValue ?? "",
      onChange: onValueChange,
      caller: ACCORDION_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionValueProvider,
      {
        scope: props.__scopeAccordion,
        value: React.useMemo(() => value ? [value] : [], [value]),
        onItemOpen: setValue,
        onItemClose: React.useCallback(() => collapsible && setValue(""), [collapsible, setValue]),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionSingleProps, ref: forwardedRef }) })
      }
    );
  }
);
var AccordionImplMultiple = React.forwardRef((props, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {
    },
    ...accordionMultipleProps
  } = props;
  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue ?? [],
    onChange: onValueChange,
    caller: ACCORDION_NAME
  });
  const handleItemOpen = React.useCallback(
    (itemValue) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue]
  );
  const handleItemClose = React.useCallback(
    (itemValue) => setValue((prevValue = []) => prevValue.filter((value2) => value2 !== itemValue)),
    [setValue]
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    AccordionValueProvider,
    {
      scope: props.__scopeAccordion,
      value,
      onItemOpen: handleItemOpen,
      onItemClose: handleItemClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionCollapsibleProvider, { scope: props.__scopeAccordion, collapsible: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionImpl, { ...accordionMultipleProps, ref: forwardedRef }) })
    }
  );
});
var [AccordionImplProvider, useAccordionContext] = createAccordionContext(ACCORDION_NAME);
var AccordionImpl = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, disabled, dir, orientation = "vertical", ...accordionProps } = props;
    const accordionRef = React.useRef(null);
    const composedRefs = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === "ltr";
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target;
      const triggerCollection = getItems().filter((item) => !item.ref.current?.disabled);
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;
      if (triggerIndex === -1) return;
      event.preventDefault();
      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;
      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };
      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };
      switch (event.key) {
        case "Home":
          nextIndex = homeIndex;
          break;
        case "End":
          nextIndex = endIndex;
          break;
        case "ArrowRight":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case "ArrowDown":
          if (orientation === "vertical") {
            moveNext();
          }
          break;
        case "ArrowLeft":
          if (orientation === "horizontal") {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case "ArrowUp":
          if (orientation === "vertical") {
            movePrev();
          }
          break;
      }
      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionImplProvider,
      {
        scope: __scopeAccordion,
        disabled,
        direction: dir,
        orientation,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.Slot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            ...accordionProps,
            "data-orientation": orientation,
            ref: composedRefs,
            onKeyDown: disabled ? void 0 : handleKeyDown
          }
        ) })
      }
    );
  }
);
var ITEM_NAME = "AccordionItem";
var [AccordionItemProvider, useAccordionItemContext] = createAccordionContext(ITEM_NAME);
var AccordionItem$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(ITEM_NAME, __scopeAccordion);
    const valueContext = useAccordionValueContext(ITEM_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    const triggerId = useId();
    const open = value && valueContext.value.includes(value) || false;
    const disabled = accordionContext.disabled || props.disabled;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      AccordionItemProvider,
      {
        scope: __scopeAccordion,
        open,
        disabled,
        triggerId,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Root,
          {
            "data-orientation": accordionContext.orientation,
            "data-state": getState(open),
            ...collapsibleScope,
            ...accordionItemProps,
            ref: forwardedRef,
            disabled,
            open,
            onOpenChange: (open2) => {
              if (open2) {
                valueContext.onItemOpen(value);
              } else {
                valueContext.onItemClose(value);
              }
            }
          }
        )
      }
    );
  }
);
AccordionItem$1.displayName = ITEM_NAME;
var HEADER_NAME = "AccordionHeader";
var AccordionHeader = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...headerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(HEADER_NAME, __scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.h3,
      {
        "data-orientation": accordionContext.orientation,
        "data-state": getState(itemContext.open),
        "data-disabled": itemContext.disabled ? "" : void 0,
        ...headerProps,
        ref: forwardedRef
      }
    );
  }
);
AccordionHeader.displayName = HEADER_NAME;
var TRIGGER_NAME = "AccordionTrigger";
var AccordionTrigger$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(TRIGGER_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Collection.ItemSlot, { scope: __scopeAccordion, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Trigger,
      {
        "aria-disabled": itemContext.open && !collapsibleContext.collapsible || void 0,
        "data-orientation": accordionContext.orientation,
        id: itemContext.triggerId,
        ...collapsibleScope,
        ...triggerProps,
        ref: forwardedRef
      }
    ) });
  }
);
AccordionTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "AccordionContent";
var AccordionContent$1 = React.forwardRef(
  (props, forwardedRef) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(ACCORDION_NAME, __scopeAccordion);
    const itemContext = useAccordionItemContext(CONTENT_NAME, __scopeAccordion);
    const collapsibleScope = useCollapsibleScope(__scopeAccordion);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Content,
      {
        role: "region",
        "aria-labelledby": itemContext.triggerId,
        "data-orientation": accordionContext.orientation,
        ...collapsibleScope,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ["--radix-accordion-content-height"]: "var(--radix-collapsible-content-height)",
          ["--radix-accordion-content-width"]: "var(--radix-collapsible-content-width)",
          ...props.style
        }
      }
    );
  }
);
AccordionContent$1.displayName = CONTENT_NAME;
function getState(open) {
  return open ? "open" : "closed";
}
var Root2 = Accordion$1;
var Item = AccordionItem$1;
var Header = AccordionHeader;
var Trigger2 = AccordionTrigger$1;
var Content2 = AccordionContent$1;
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function LandingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesGrid, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AICompanion, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(RiskTiers, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreviews, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marketplace, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveResponse, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AgentTracking, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Pricing, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FinalCTA, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(PublicFooter, {})
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden bg-gradient-mesh", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container relative mx-auto max-w-7xl px-4 pt-16 pb-24 lg:pt-24 lg:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-12 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { className: "mb-6 border-primary/20 bg-primary-soft text-primary hover:bg-primary-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mr-1.5 h-3 w-3" }),
        " Now with AI Care Companion 2.0"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl", children: [
        "AI-powered care,",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "always watching, always ready." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "CareGo helps families, care providers, and care organisations monitor wellbeing, respond faster to risks, book trusted support, and coordinate care — through one intelligent platform." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-hero shadow-glow hover:opacity-95", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/signup", children: [
          "Start Free Trial ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book Demo" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "ghost", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/family", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-1.5 h-4 w-4" }),
          " View Live Demo"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4 text-accent" }),
          " CQC-aligned"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent" }),
          " GDPR & ISO 27001"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4 text-accent" }),
          " 12,000+ care recipients"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroMockup, {})
  ] }) }) });
}
function HeroMockup() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-hero opacity-20 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border/60 bg-card p-5 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "h-4 w-4 text-white", fill: "currentColor", strokeWidth: 0 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-foreground", children: "Margaret · 78" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "Bristol · monitored by Sarah" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-accent pulse-dot text-accent" }),
          "All systems normal"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-3 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 bg-primary-soft p-3 shadow-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide text-primary/80", children: "Wellbeing" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-2xl font-semibold text-primary", children: "82" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-primary/70", children: "+4 this week" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 bg-accent-soft p-3 shadow-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide text-accent", children: "Heart rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-2xl font-semibold text-accent", children: "74" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-accent/80", children: "bpm · normal" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-0 bg-muted p-3 shadow-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-wide text-muted-foreground", children: "Last activity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-2xl font-semibold text-foreground", children: "8m" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "ago · kitchen" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "mt-3 border border-border/60 p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium", children: "Today · Heart rate" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "62–88 bpm baseline" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 200 50", className: "mt-2 h-14 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "hr", x1: "0", x2: "0", y1: "0", y2: "1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.48 0.16 245)", stopOpacity: "0.35" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.48 0.16 245)", stopOpacity: "0" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: polyPath(heartRateChart.map((p) => p.v), 200, 50, 55, 82), fill: "none", stroke: "oklch(0.48 0.16 245)", strokeWidth: "2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: areaPath(heartRateChart.map((p) => p.v), 200, 50, 55, 82), fill: "url(#hr)" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-3 border border-accent/20 bg-accent-soft/40 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-4 w-4" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "AI Companion · gentle nudge sent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] text-muted-foreground", children: "Medication window approaching at 13:00. Voice reminder queued on Echo. Sarah notified." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1.5 flex items-center gap-2 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
              " 94% confidence"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "· Low risk" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "absolute -left-4 top-1/3 hidden w-56 border border-border/60 p-3 shadow-elevated animate-float md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-success/10 text-success", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Aisha is on the way" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "ETA 12 min · 2.4 mi" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "absolute -right-4 bottom-8 hidden w-60 border border-border/60 p-3 shadow-elevated animate-float md:block", style: {
      animationDelay: "1.5s"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-warning/15 text-warning-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Morning meds taken" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "09:38 · dispenser confirmed" })
      ] })
    ] }) })
  ] });
}
function polyPath(values, w, h, min, max) {
  return values.map((v, i) => {
    const x = i / (values.length - 1) * w;
    const y = h - (v - min) / (max - min) * h;
    return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(" ");
}
function areaPath(values, w, h, min, max) {
  return polyPath(values, w, h, min, max) + ` L${w},${h} L0,${h} Z`;
}
function TrustBar() {
  const items = ["NHS-aligned", "CQC standards", "ISO 27001", "GDPR compliant", "DBS verified network", "24/7 monitoring"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border bg-card/50 py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Trusted infrastructure for the UK care sector" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3", children: items.map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-sm font-medium text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-accent" }),
      " ",
      i
    ] }, i)) })
  ] }) });
}
function HowItWorks() {
  const steps = [{
    icon: Wifi,
    title: "1. Connect",
    desc: "Pair wearables, sensors, and smart devices in minutes. CareGo learns each person's baseline within 48 hours."
  }, {
    icon: Bot,
    title: "2. Monitor",
    desc: "The AI Companion observes wellbeing 24/7 — movement, vitals, medication, sleep, environment — explainable at every step."
  }, {
    icon: Zap,
    title: "3. Respond",
    desc: "From a gentle reminder to a full emergency dispatch, the right response is triggered in seconds, with everyone informed."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "How CareGo works", title: "One platform. Three intelligent layers.", subtitle: "Connect, monitor, and respond — built so families, providers, and organisations work from the same source of truth." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-6 md:grid-cols-3", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-border/60 p-7 transition-all hover:shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-hero opacity-5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-hero text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.desc })
    ] }, s.title)) })
  ] }) });
}
function FeaturesGrid() {
  const features = [{
    icon: Bot,
    title: "AI Care Companion",
    desc: "24/7 conversational assistant on smart speakers — gentle reminders, check-ins, and friendly company."
  }, {
    icon: Activity,
    title: "Live wellbeing monitoring",
    desc: "Vitals, movement, sleep, hydration, environment — fused into a single wellbeing score."
  }, {
    icon: TriangleAlert,
    title: "Three-tier risk response",
    desc: "Low-risk nudge, medium-risk family alert, high-risk emergency dispatch — fully audited."
  }, {
    icon: MapPin,
    title: "Live agent travel tracking",
    desc: "See accepted agent, ETA, live route, and verified credentials — the moment help is on the way."
  }, {
    icon: Building2,
    title: "Workforce & compliance",
    desc: "DBS, training, right-to-work, rotas, shift gaps and dispatch in one operations console."
  }, {
    icon: HeartHandshake,
    title: "Staff marketplace",
    desc: "Care homes and agencies share unused capacity — verified, rated, instantly bookable."
  }, {
    icon: ChartColumn,
    title: "Auditable reporting",
    desc: "Every AI decision, alert, visit, and intervention exportable for CQC, families, and funders."
  }, {
    icon: Headphones,
    title: "24/7 emergency response",
    desc: "Human responders in the loop for every high-risk event — never replaced by AI, always supported by it."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Features", title: "Everything you need to deliver safer care.", subtitle: "Designed alongside families, frontline carers, and operators — built to the standards the UK care sector demands." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "group border-border/60 p-6 transition-all hover:-translate-y-1 hover:shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-semibold", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground", children: f.desc })
    ] }, f.title)) })
  ] }) });
}
function AICompanion() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft", children: "AI Care Companion" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: "A warm, intelligent presence — even when no-one else is home." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "More than a monitor. The CareGo Companion has gentle two-way conversations through any compatible speaker — offering reminders, comfort, escalation when needed, and a clear, explainable record of every decision it makes." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: ["Personalised baselines learned in 48 hours", "Explainable AI — see exactly why every alert was raised", "Privacy by design — no continuous audio recording", "Hand-off to a human responder at every risk level"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
      ] }, p)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "relative overflow-hidden border-border/60 p-6 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-hero opacity-10 blur-2xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-hero text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "CareGo Companion" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Listening · sharing only what matters" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { side: "ai", children: '"Good morning Margaret — how did you sleep?"' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { side: "user", children: '"Not too bad. A bit stiff."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { side: "ai", children: `"Thank you. I'll log that. Your physio exercises are on at 11 — would you like a reminder?"` }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Bubble, { side: "user", children: '"Yes please."' }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border border-border/60 bg-muted/40 p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "AI decision:" }),
            " Sleep below personal average (-18m). Trend stable, no alert raised. Reminder queued."
          ] })
        ] }) })
      ] })
    ] })
  ] }) });
}
function Bubble({
  side,
  children
}) {
  const isAI = side === "ai";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${isAI ? "" : "justify-end"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[80%] rounded-2xl px-3.5 py-2 text-sm ${isAI ? "rounded-bl-sm bg-primary-soft text-foreground" : "rounded-br-sm bg-gradient-hero text-white"}`, children }) });
}
function RiskTiers() {
  const tiers = [{
    icon: Bell,
    color: "text-accent",
    bg: "bg-accent-soft",
    border: "border-accent/20",
    label: "Low risk",
    action: "Gentle prompt",
    desc: "AI sends a friendly voice reminder or a soft notification. Logged for trend analysis. No escalation.",
    example: "Missed scheduled hydration window."
  }, {
    icon: Phone,
    color: "text-warning-foreground",
    bg: "bg-warning/15",
    border: "border-warning/30",
    label: "Medium risk",
    action: "Family / carer notified",
    desc: "Designated family member or assigned carer is alerted. AI initiates check-in call to confirm wellbeing.",
    example: "2h+ unusual inactivity during the day."
  }, {
    icon: TriangleAlert,
    color: "text-destructive",
    bg: "bg-destructive/10",
    border: "border-destructive/30",
    label: "High risk",
    action: "Emergency dispatch",
    desc: "Nearest verified responder dispatched, emergency services contacted, full incident audit started immediately.",
    example: "Fall detected with no recovery movement."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Three-tier risk response", title: "The right response, every single time.", subtitle: "Every event passes through CareGo's risk model. Action is always proportionate — and every step is auditable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-3", children: tiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `border ${t.border} bg-card p-6 shadow-card`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex h-11 w-11 items-center justify-center rounded-xl ${t.bg} ${t.color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-4 text-xs font-semibold uppercase tracking-wide ${t.color}`, children: t.label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", children: t.action }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg border border-border bg-muted/50 p-3 text-xs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: "Example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-muted-foreground", children: t.example })
      ] })
    ] }, t.label)) })
  ] }) });
}
function DashboardPreviews() {
  const previews = [{
    title: "Family Dashboard",
    desc: "Wellbeing at a glance, live alerts, AI decisions, and one-tap support booking.",
    link: "/app/family",
    icon: Heart,
    audience: "For families"
  }, {
    title: "Provider Dashboard",
    desc: "Today's visits, live travel, check-ins, incident logging, earnings, and verification.",
    link: "/app/provider",
    icon: UserCheck,
    audience: "For carers & agents"
  }, {
    title: "Organisation Dashboard",
    desc: "Workforce, compliance, alerts, dispatch and marketplace — all in one console.",
    link: "/app/organisation",
    icon: Building2,
    audience: "For care homes & agencies"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Built for every role", title: "One product. Three connected experiences.", subtitle: "Whether you're a daughter checking in on Mum, an agent on a visit, or an operations director — CareGo speaks your language." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-3", children: previews.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: p.link, className: "group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full overflow-hidden border-border/60 transition-all hover:-translate-y-1 hover:shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-44 overflow-hidden bg-gradient-mesh", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-4 rounded-xl border border-border/60 bg-card/80 p-3 backdrop-blur", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 w-7 items-center justify-center rounded-md bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: p.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent-soft px-2 py-0.5 text-[10px] font-medium text-accent", children: "Live" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-3 gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 rounded-md bg-primary-soft/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 rounded-md bg-accent-soft/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 rounded-md bg-muted" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-12 rounded-md bg-muted/70" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium uppercase tracking-wide text-primary", children: p.audience }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2", children: [
          "Explore live demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
        ] })
      ] })
    ] }) }, p.title)) })
  ] }) });
}
function Marketplace() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "order-2 border-border/60 p-6 shadow-elevated lg:order-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Available carers · nearby" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: "Live" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 space-y-3", children: [{
        n: "Joseph A.",
        o: "BrightCare",
        r: 22,
        d: "3.1 mi",
        s: "Dementia · Hoist"
      }, {
        n: "Yuki T.",
        o: "Avon Home Care",
        r: 18,
        d: "6.4 mi",
        s: "Companion · MHFA"
      }, {
        n: "Marcus B.",
        o: "Independent",
        r: 26,
        d: "2.0 mi",
        s: "Night · First Aid"
      }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg border border-border bg-card p-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-primary-soft text-sm font-semibold text-primary", children: c.n[0] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: c.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
              c.o,
              " · ",
              c.s
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold", children: [
            "£",
            c.r,
            "/hr"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: c.d })
        ] })
      ] }, c.n)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border-primary/20 bg-primary-soft text-primary hover:bg-primary-soft", children: "Staff Marketplace" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: "Solve shift gaps in minutes, not days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Care homes, agencies and independent carers share verified capacity through the CareGo Marketplace. Cover gaps, expand reach, and unlock new revenue — without compromising on compliance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-6 bg-gradient-hero shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/app/marketplace", children: [
        "Explore the marketplace ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
      ] }) })
    ] })
  ] }) });
}
function LiveResponse() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border-destructive/20 bg-destructive/10 text-destructive hover:bg-destructive/10", children: "Live Emergency Response" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: "When seconds matter, CareGo moves first." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Every high-risk event triggers a coordinated response — verified responders, family notification, emergency services hand-off, and a complete audit trail. Built so no one is ever alone." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-3 sm:grid-cols-2", children: [{
        l: "Median dispatch",
        v: "47s"
      }, {
        l: "Resolution rate",
        v: "99.2%"
      }, {
        l: "False positives",
        v: "< 0.4%"
      }, {
        l: "Family reach",
        v: "100%"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-semibold text-gradient", children: s.v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: s.l })
      ] }, s.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-destructive/20 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-destructive/5 px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-destructive pulse-dot text-destructive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-destructive", children: "High-risk event · in progress" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-xs text-muted-foreground", children: "14:32" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3 p-5", children: [{
        t: "14:31:02",
        l: "Fall pattern detected · Living Room",
        ok: true
      }, {
        t: "14:31:14",
        l: "AI escalated to high risk · 97% confidence",
        ok: true
      }, {
        t: "14:31:22",
        l: "Emergency contact Sarah W. called",
        ok: true
      }, {
        t: "14:31:38",
        l: "Nearest agent Aisha P. dispatched · ETA 9 min",
        ok: true
      }, {
        t: "14:32:05",
        l: "Voice contact established via Echo",
        ok: true
      }, {
        t: "14:33",
        l: "Awaiting agent arrival",
        ok: false
      }].map((e, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${e.ok ? "bg-success text-success-foreground" : "border-2 border-dashed border-muted-foreground/40"}`, children: e.ok && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: e.l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: e.t })
        ] })
      ] }, i)) })
    ] })
  ] }) });
}
function AgentTracking() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-border/60 shadow-elevated", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-64 bg-gradient-to-br from-primary-soft via-card to-accent-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 400 200", className: "absolute inset-0 h-full w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "grid", width: "20", height: "20", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 20 0 L 0 0 0 20", fill: "none", stroke: "oklch(0.48 0.16 245 / 0.1)", strokeWidth: "1" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "400", height: "200", fill: "url(#grid)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 50 160 Q 130 100, 220 110 T 340 50", stroke: "oklch(0.48 0.16 245)", strokeWidth: "3", fill: "none", strokeDasharray: "6 4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "160", r: "8", fill: "oklch(0.62 0.14 165)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "160", r: "14", fill: "oklch(0.62 0.14 165)", opacity: "0.3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "340", cy: "50", r: "8", fill: "oklch(0.48 0.16 245)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute left-4 top-4 rounded-lg bg-card/90 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mr-1 inline h-3.5 w-3.5 text-accent" }),
          " Aisha Patel · 2.4 mi away"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-4 rounded-lg bg-gradient-hero px-3 py-1.5 text-xs font-semibold text-white shadow-glow", children: "ETA 12 min" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-base font-semibold text-primary", children: "AP" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "truncate font-semibold", children: "Aisha Patel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-warning text-warning" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium", children: "4.9" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Senior Care Specialist · BrightCare Bristol" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "icon", variant: "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-1.5", children: ["DBS", "Training", "Right to Work", "First Aid"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "secondary", className: "text-[10px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "mr-1 h-3 w-3" }),
          v
        ] }, v)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "mb-4 border-accent/20 bg-accent-soft text-accent hover:bg-accent-soft", children: "Accepted Agent Live Tracking" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-semibold tracking-tight sm:text-4xl", children: "Know who's coming. See them arrive." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "From the moment a booking is accepted, families see exactly who is coming, what they're trained in, and how far away they are — in real time. Comfort and clarity, when it matters most." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Verified profile · DBS, training, right-to-work", "Live route, ETA, and journey timeline", "Direct call and message — no shared phone numbers", "Full audit trail: accepted → arrived → checked-in → completed"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p })
      ] }, p)) })
    ] })
  ] }) });
}
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Stories", title: "Trusted by families, providers, and operators." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border/60 p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 text-warning", children: Array.from({
        length: 5
      }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm leading-relaxed", children: [
        '"',
        t.quote,
        '"'
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 border-t border-border pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.avatar, alt: t.name, className: "h-10 w-10 rounded-full bg-muted" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
        ] })
      ] })
    ] }, t.name)) })
  ] }) });
}
function Pricing() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-gradient-soft py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-7xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Pricing", title: "Simple plans for every kind of care.", subtitle: "Start free for 14 days. No card required. Cancel anytime." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: pricingTiers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: `relative p-7 ${t.featured ? "border-primary shadow-elevated ring-1 ring-primary" : "border-border/60"}`, children: [
      t.featured && /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: "absolute -top-3 left-7 bg-gradient-hero text-white", children: "Most popular" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-primary", children: t.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-baseline gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-semibold", children: t.price }),
        t.per && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: t.per })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: t.description }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-2.5", children: t.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f })
      ] }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: `mt-7 w-full ${t.featured ? "bg-gradient-hero shadow-glow" : ""}`, variant: t.featured ? "default" : "outline", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: t.cta === "Book Demo" ? "/contact" : "/signup", children: t.cta }) })
    ] }, t.name)) })
  ] }) });
}
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto max-w-3xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "FAQ", title: "Questions, answered." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "mt-10", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `f${i}`, className: "border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium hover:no-underline", children: f.q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground", children: f.a })
    ] }, i)) })
  ] }) });
}
function FinalCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "overflow-hidden border-0 bg-gradient-hero p-10 text-center shadow-elevated md:p-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "mx-auto h-8 w-8 text-white/80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl", children: "Care that's always one step ahead." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-xl text-white/85", children: "Join thousands of families and providers using CareGo to keep loved ones safe, reduce response times, and run better operations." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-white text-primary hover:bg-white/90", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/signup", children: "Start Free Trial" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Book a demo" }) })
    ] })
  ] }) }) });
}
function SectionHeading({
  eyebrow,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold uppercase tracking-wider text-primary", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-3xl font-semibold tracking-tight sm:text-4xl", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: subtitle })
  ] });
}
export {
  LandingPage as component
};
