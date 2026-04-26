import { Link, useRouterState } from "@tanstack/react-router";
import { CATEGORIES, type NewsCategory } from "@/lib/news-types";
import { useSettings } from "@/lib/settings-context";
import { getCategoryLabel } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  const { t } = useSettings();
  const search = useRouterState({ select: (s) => s.location.search as { category?: NewsCategory } });
  const path = useRouterState({ select: (s) => s.location.pathname });
  const active = (path === "/" ? search.category : undefined) ?? "general";

  return (
    <div className="border-b border-border/60 bg-nav backdrop-blur-md sticky top-16 z-30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex gap-1 overflow-x-auto scrollbar-none -mb-px">
          {CATEGORIES.map((c) => {
            const isActive = active === c.value;
            return (
              <Link
                key={c.value}
                to="/"
                search={c.value === "general" ? {} : { category: c.value }}
                className={cn(
                  "relative whitespace-nowrap px-4 py-3 text-sm font-medium transition-smooth",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {getCategoryLabel(t, c.value)}
                {isActive && (
                  <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-gradient-brand" />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
