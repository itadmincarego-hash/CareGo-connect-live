import { CareGoMark } from "@/components/Logo";
import { cn } from "@/lib/utils";

/**
 * CareGo unified loading screen.
 *
 * Use everywhere: app startup, auth loading, dashboard loading, monitoring,
 * map, booking, history. Only the `text` prop changes based on context.
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
      <div className="relative flex h-24 w-24 items-center justify-center">
        {/* Pulsing node rings */}
        <span className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping-slow" />
        <span className="absolute inset-2 rounded-2xl bg-accent/20 animate-ping-slower" />
        <CareGoMark className="relative h-16 w-16 rounded-2xl shadow-glow animate-float-soft" />
      </div>
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
      <div className="relative h-6 w-6">
        <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping-slow" />
        <CareGoMark className="relative h-6 w-6 rounded-md" />
      </div>
      {text}
    </div>
  );
}

/** Branded skeleton block — use instead of generic Skeleton. */
export function CareGoSkeleton({ className }: { className?: string }) {
  return (
    <div
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
          <CareGoSkeleton key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%` } as React.CSSProperties} />
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
