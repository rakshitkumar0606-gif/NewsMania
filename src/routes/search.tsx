import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { Header } from "@/components/Header";
import { NewsFeed } from "@/components/NewsFeed";
import { useSettings } from "@/lib/settings-context";
import { Search as SearchIcon } from "lucide-react";

const searchSchema = z.object({
  q: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/search")({
  validateSearch: zodValidator(searchSchema),
  component: SearchPage,
  head: ({ match }) => ({
    meta: [
      { title: `Search: ${match.search.q || "News"} — NewsMania` },
      { name: "description", content: `Search results for ${match.search.q}` },
    ],
  }),
});

function SearchPage() {
  const { q } = Route.useSearch();
  const { t } = useSettings();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
            <SearchIcon className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              {t.resultsFor} <span className="text-gradient">"{q}"</span>
            </h1>
            <p className="text-sm text-muted-foreground">{t.sortedRecent}</p>
          </div>
        </div>
        {q ? (
          <NewsFeed query={q} />
        ) : (
          <p className="text-muted-foreground">{t.typeSomething}</p>
        )}
      </main>
    </div>
  );
}
