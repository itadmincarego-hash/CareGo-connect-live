import { CareGoSkeleton } from "@/components/Loader";

/**
 * Re-exported as a thin wrapper around the branded CareGo skeleton so any
 * shadcn component that imports `Skeleton` automatically uses the unified
 * CareGo shimmer language.
 */
function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <CareGoSkeleton className={className} {...props} />;
}

export { Skeleton };
