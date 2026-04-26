import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { useBookmarks } from "@/lib/use-bookmarks";
import { useAuth } from "@/lib/auth-context";
import { useSettings } from "@/lib/settings-context";
import { Bookmark, Trash2, ExternalLink, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export const Route = createFileRoute("/saved")({
  component: SavedPage,
  head: () => ({
    meta: [
      { title: "Saved News — NewsMania" },
      { name: "description", content: "Your bookmarked articles" },
    ],
  }),
});

function SavedPage() {
  const { items, remove, loading } = useBookmarks();
  const { user } = useAuth();
  const { t } = useSettings();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 py-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
            <Bookmark className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold">
              {t.savedTitle} <span className="text-gradient">{t.savedAccent}</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              {user ? t.syncedToAccount : t.savedToDevice}
            </p>
          </div>
        </div>

        {!user && items.length > 0 && (
          <Card className="mb-6 p-4 bg-gradient-hero border-primary/20 flex items-center justify-between flex-wrap gap-3">
            <p className="text-sm">{t.signInToSync}</p>
            <Button asChild size="sm" className="bg-gradient-brand text-brand-foreground">
              <Link to="/auth">
                <LogIn className="mr-1.5 h-4 w-4" /> {t.signIn}
              </Link>
            </Button>
          </Card>
        )}

        {loading ? (
          <p className="text-muted-foreground">{t.loading}</p>
        ) : items.length === 0 ? (
          <Card className="p-12 text-center">
            <Bookmark className="h-12 w-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="font-display font-semibold text-lg">{t.nothingSaved}</h3>
            <p className="text-muted-foreground mt-1 mb-4">{t.nothingSavedHint}</p>
            <Button asChild>
              <Link to="/">{t.browseNews}</Link>
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((b, i) => (
              <Card
                key={b.article_url}
                className="group flex flex-col overflow-hidden border-border/60 bg-gradient-card shadow-card hover:shadow-card-lg transition-smooth animate-fade-in-up"
                style={{ animationDelay: `${Math.min(i * 40, 300)}ms` }}
              >
                <a href={b.article_url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                    {b.image_url ? (
                      <img
                        src={b.image_url}
                        alt={b.title}
                        loading="lazy"
                        onError={(e) => (e.currentTarget.style.display = "none")}
                        className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-hero">
                        <span className="text-3xl font-display font-bold text-gradient">N</span>
                      </div>
                    )}
                    {b.source && (
                      <Badge className="absolute left-3 top-3 bg-background/90 backdrop-blur text-foreground border-0">
                        {b.source}
                      </Badge>
                    )}
                  </div>
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <a href={b.article_url} target="_blank" rel="noopener noreferrer">
                    <h3 className="font-display font-semibold text-base leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
                      {b.title}
                    </h3>
                  </a>
                  {b.description && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.description}</p>
                  )}
                  <div className="mt-auto flex items-center justify-end gap-1 pt-4">
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8">
                      <a href={b.article_url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={async () => {
                        await remove(b.article_url);
                        toast.success(t.removedToast);
                      }}
                      aria-label={t.removeBookmark}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
