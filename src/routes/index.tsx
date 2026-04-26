import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { NewsFeed } from "@/components/NewsFeed";
import { useSettings } from "@/lib/settings-context";
import { getCategoryLabel } from "@/lib/i18n";
import { useAuth } from "@/lib/auth-context";
import { LandingPage } from "@/components/LandingPage";

const searchSchema = z.object({
  category: fallback(
    z.enum(["general", "technology", "business", "sports", "health", "entertainment", "science"]),
    "general"
  ).default("general"),
});

export const Route = createFileRoute("/")({
  validateSearch: zodValidator(searchSchema),
  component: HomePage,
});

function HomePage() {
  const { category } = Route.useSearch();
  const { t } = useSettings();
  const { user, loading } = useAuth();

  if (loading) return null;
  if (!user) return <LandingPage />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="mb-6 animate-fade-in-up">
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight">
            {category === "general" ? (
              <>
                {t.todaysTopStories} <span className="text-gradient">{t.topStoriesAccent}</span>
              </>
            ) : (
              <span>{getCategoryLabel(t, category)}</span>
            )}
          </h1>
          <p className="mt-1.5 text-muted-foreground">{t.homeSubtitle}</p>
        </div>
        <NewsFeed category={category} />
      </main>
    </div>
  );
}
