import { useEffect, useState } from "react";
import { CareGoMark } from "@/components/Logo";
import { cn } from "@/lib/utils";

/**
 * CareGo unified loading screen — used for route transitions.
 * Quick branded pulse on the house+ECG mark.
 */
export function CareGoLoader({
  text = "Loading CareGo…",
  fullscreen = true,
  className,
}: {
  text?: string;
  fullscreen?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6 bg-gradient-soft",
        fullscreen ? "min-h-screen w-full" : "py-16",
        className,
      )}
      role="status"
      aria-live="polite"
    >
      <CareGoMark className="h-20 w-auto animate-pulse-glow" ecgMode="pulsing" />
      <div className="flex flex-col items-center gap-2">
        <p className="text-sm font-medium text-foreground/80">{text}</p>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-primary/70 animate-bounce [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce" />
        </div>
      </div>
    </div>
  );
}

/** Inline loader for panels / cards. */
export function CareGoInlineLoader({ text = "Loading…" }: { text?: string }) {
  return (
    <div className="flex items-center justify-center gap-3 py-10 text-sm text-muted-foreground">
      <CareGoMark className="h-7 w-auto animate-pulse-glow" ecgMode="pulsing" />
      {text}
    </div>
  );
}

/**
 * Full-screen first-load preloader: spinner → logo reveal → wordmark + tagline.
 * Mounted once at app root, gated by sessionStorage so it only shows on first visit.
 */
export function CareGoPreloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"spinner" | "logo" | "wordmark" | "fading">("spinner");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("logo"), 1600);
    const t2 = setTimeout(() => setPhase("wordmark"), 2600);
    const t3 = setTimeout(() => setPhase("fading"), 4400);
    const t4 = setTimeout(() => onComplete(), 5200);
    return () => { [t1, t2, t3, t4].forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-soft",
        phase === "fading" && "preloader-fade-out",
      )}
      role="status"
      aria-live="polite"
    >
      {phase === "spinner" && (
        <div className="relative flex h-32 w-32 items-center justify-center animate-fade-in">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full ring-spin">
            <defs>
              <linearGradient id="cg-spin" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e88e5" />
                <stop offset="100%" stopColor="#43a047" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="42" fill="none" stroke="url(#cg-spin)" strokeWidth="6" strokeLinecap="round" strokeDasharray="60 200" />
          </svg>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-accent animate-pulse">
            Loading
          </span>
        </div>
      )}

      {phase !== "spinner" && (
        <div className="flex flex-col items-center animate-fade-in">
          <CareGoMark
            className="mb-6 h-32 w-auto animate-pulse-glow"
            ecgMode={phase === "logo" ? "pulsing" : "drawing"}
          />
          {phase !== "logo" && (
            <>
              <div className="mb-3 flex text-5xl font-bold tracking-tight md:text-6xl">
                <span className="letter-anim" style={{ color: "#1e88e5" }}>C</span>
                <span className="letter-anim" style={{ color: "#1e88e5" }}>a</span>
                <span className="letter-anim" style={{ color: "#1e88e5" }}>r</span>
                <span className="letter-anim" style={{ color: "#1e88e5" }}>e</span>
                <span className="letter-anim" style={{ color: "#43a047" }}>G</span>
                <span className="letter-anim" style={{ color: "#43a047" }}>o</span>
              </div>
              <div className="tagline-anim text-base font-medium text-muted-foreground md:text-lg">
                AI-powered care, always watching, always ready.
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}


/** Branded skeleton block — use instead of generic Skeleton. */
export function CareGoSkeleton({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      className={cn(
        "relative overflow-hidden rounded-lg bg-primary/5",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer",
        "before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent",
        className,
      )}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-center gap-3">
        <CareGoSkeleton className="h-10 w-10 rounded-xl" />
        <div className="flex-1 space-y-2">
          <CareGoSkeleton className="h-3 w-1/3" />
          <CareGoSkeleton className="h-2.5 w-1/2" />
        </div>
      </div>
      <div className="mt-5 space-y-2">
        <CareGoSkeleton className="h-2.5 w-full" />
        <CareGoSkeleton className="h-2.5 w-5/6" />
        <CareGoSkeleton className="h-2.5 w-2/3" />
      </div>
    </div>
  );
}

export function ChartSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <CareGoSkeleton className="h-3 w-32" />
      <div className="mt-6 flex h-40 items-end gap-2">
        {[60, 80, 45, 90, 70, 55, 85, 65, 75, 50, 95, 60].map((h, i) => (
          <CareGoSkeleton key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export function TimelineSkeleton({ rows = 4 }: { rows?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-3">
          <CareGoSkeleton className="h-8 w-8 rounded-full" />
          <div className="flex-1 space-y-2">
            <CareGoSkeleton className="h-2.5 w-1/4" />
            <CareGoSkeleton className="h-2.5 w-3/4" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex gap-4 border-b border-border bg-muted/40 p-4">
        {[1, 2, 3, 4].map((i) => <CareGoSkeleton key={i} className="h-3 flex-1" />)}
      </div>
      {Array.from({ length: rows }).map((_, i) => (
        <div key={i} className="flex gap-4 border-b border-border p-4 last:border-0">
          {[1, 2, 3, 4].map((j) => <CareGoSkeleton key={j} className="h-3 flex-1" />)}
        </div>
      ))}
    </div>
  );
}

export function MapSkeleton() {
  return (
    <div className="relative h-80 overflow-hidden rounded-2xl border border-border bg-gradient-soft">
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage:
          "linear-gradient(oklch(0.92 0.01 230) 1px, transparent 1px), linear-gradient(90deg, oklch(0.92 0.01 230) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <CareGoInlineLoader text="Loading live map…" />
      </div>
    </div>
  );
}
