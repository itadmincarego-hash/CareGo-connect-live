import { Link } from "@tanstack/react-router";

/**
 * CareGo unified logo system.
 *
 * The mark is a network of interconnected nodes forming an abstract care/heart
 * shape — symbolising AI + family + care provider connectivity. Use this exact
 * SVG everywhere (sidebar, header, auth, loading, empty states, favicon).
 */
export function CareGoMark({
  className = "h-9 w-9",
  withGradient = true,
}: {
  className?: string;
  withGradient?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CareGo"
    >
      <defs>
        <linearGradient id="caregoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.48 0.16 245)" />
          <stop offset="55%" stopColor="oklch(0.55 0.14 200)" />
          <stop offset="100%" stopColor="oklch(0.62 0.14 165)" />
        </linearGradient>
        <linearGradient id="caregoBg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="oklch(0.48 0.16 245)" />
          <stop offset="100%" stopColor="oklch(0.62 0.14 165)" />
        </linearGradient>
      </defs>
      {withGradient && (
        <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#caregoBg)" />
      )}
      <g
        stroke={withGradient ? "white" : "url(#caregoGrad)"}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
        opacity={withGradient ? 0.9 : 1}
      >
        {/* Connection lines forming a care-network */}
        <line x1="13" y1="14" x2="20" y2="20" />
        <line x1="27" y1="14" x2="20" y2="20" />
        <line x1="13" y1="14" x2="27" y2="14" />
        <line x1="20" y1="20" x2="14" y2="27" />
        <line x1="20" y1="20" x2="26" y2="27" />
        <line x1="14" y1="27" x2="26" y2="27" />
      </g>
      <g fill={withGradient ? "white" : "url(#caregoGrad)"}>
        {/* Nodes — family, AI, provider, recipient, response, network */}
        <circle cx="13" cy="14" r="2.4" />
        <circle cx="27" cy="14" r="2.4" />
        <circle cx="20" cy="20" r="3" />
        <circle cx="14" cy="27" r="2.4" />
        <circle cx="26" cy="27" r="2.4" />
      </g>
    </svg>
  );
}

export function Logo({
  className = "",
  variant = "default",
  size = "md",
}: {
  className?: string;
  variant?: "default" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const markSize = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-9 w-9";
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";
  return (
    <Link
      to="/"
      className={`flex items-center gap-2.5 font-display font-semibold tracking-tight ${className}`}
    >
      <CareGoMark className={`${markSize} shadow-glow rounded-[10px]`} />
      <span className={`${textSize} ${variant === "light" ? "text-white" : "text-foreground"}`}>
        Care<span className="text-gradient">Go</span>
      </span>
    </Link>
  );
}
