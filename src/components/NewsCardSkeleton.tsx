import { Card } from "@/components/ui/card";

export function NewsCardSkeleton() {
  return (
    <Card className="overflow-hidden border-border/60 bg-card">
      <div className="aspect-[16/9] skeleton-shimmer" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-3/4 rounded skeleton-shimmer" />
        <div className="h-4 w-full rounded skeleton-shimmer" />
        <div className="h-4 w-5/6 rounded skeleton-shimmer" />
        <div className="flex justify-between pt-2">
          <div className="h-4 w-16 rounded skeleton-shimmer" />
          <div className="h-4 w-24 rounded skeleton-shimmer" />
        </div>
      </div>
    </Card>
  );
}

export function NewsGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  );
}
