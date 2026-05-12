import { Link } from "@tanstack/react-router";

/**
 * CareGo brand mark — house with ECG pulse line, blue→green gradient.
 * Use this exact SVG everywhere (sidebar, header, auth, loading, favicon).
 *
 * `ecgMode`: 'pulsing' = animated heartbeat for live/loading states,
 * 'drawing' = one-shot draw-in, 'solid' = static, 'none' = no ECG line.
 */
export function CareGoMark({
  className = "h-9 w-auto",
  ecgMode = "solid",
}: {
  className?: string;
  ecgMode?: "none" | "pulsing" | "drawing" | "solid";
  /** Kept for backwards-compatibility; no longer used. */
  withGradient?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 110 60"
      fill="none"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CareGo"
    >
      <defs>
        <linearGradient id="carego-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1e88e5" />
          <stop offset="100%" stopColor="#43a047" />
        </linearGradient>
      </defs>

      <g transform="translate(5, 5)">
        {/* Speed lines */}
        <path d="M 15 25 L 35 25" stroke="#1e88e5" />
        <path d="M 22 31 L 35 31" stroke="#1e88e5" />
        <path d="M 15 43 L 35 43" stroke="#1e88e5" />

        {/* House */}
        <path d="M 28 25 L 35 25 L 35 20 L 55 5 L 75 20 L 75 25 L 82 25" stroke="url(#carego-grad)" />
        <path d="M 35 25 L 35 31" stroke="url(#carego-grad)" />
        <path d="M 75 25 L 75 31" stroke="url(#carego-grad)" />
        <path d="M 35 43 L 35 50 L 75 50 L 75 43" stroke="url(#carego-grad)" />

        {ecgMode === "pulsing" && (
          <path
            d="M 0 37 L 35 37 L 45 37 L 50 25 L 55 50 L 62 20 L 68 37 L 75 37 L 82 37"
            stroke="url(#carego-grad)"
            className="animate-ecg"
          />
        )}

        {(ecgMode === "drawing" || ecgMode === "solid") && (
          <>
            <path
              d="M 0 37 L 35 37 L 45 37 L 50 25 L 55 50 L 62 20 L 68 37 L 75 37 L 82 37"
              stroke="url(#carego-grad)"
              className={ecgMode === "drawing" ? "ecg-draw" : ""}
            />
            <path
              d="M 82 30 L 96 37 L 82 44 Z"
              stroke="#43a047"
              className={ecgMode === "drawing" ? "arrow-fade-in" : ""}
            />
          </>
        )}
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
  const markH = size === "sm" ? "h-7" : size === "lg" ? "h-11" : "h-9";
  const textSize = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg";
  return (
    <Link
      to="/"
      className={`flex items-center gap-2 font-display font-semibold tracking-tight ${className}`}
    >
      <CareGoMark className={`${markH} w-auto`} ecgMode="solid" />
      <span className={`${textSize} ${variant === "light" ? "text-white" : "text-foreground"}`}>
        Care<span className="text-gradient">Go</span>
      </span>
    </Link>
  );
}
