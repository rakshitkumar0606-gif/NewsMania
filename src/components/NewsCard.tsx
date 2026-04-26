import { useState } from "react";
import { Bookmark, BookmarkCheck, Sparkles, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import type { NewsArticle } from "@/lib/news-types";
import { useBookmarks } from "@/lib/use-bookmarks";
import { useSettings } from "@/lib/settings-context";
import { summarizeArticle } from "@/lib/ai.functions";

interface Props {
  article: NewsArticle;
  index?: number;
  translation?: { title: string; description: string | null };
}

function timeAgo(iso: string, t: { justNow: string; minAgo: string; hourAgo: string; dayAgo: string }): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return t.justNow;
  if (m < 60) return `${m}${t.minAgo}`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}${t.hourAgo}`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d}${t.dayAgo}`;
  return new Date(iso).toLocaleDateString();
}

export function NewsCard({ article, index = 0, translation }: Props) {
  const { isSaved, toggle } = useBookmarks();
  const { language, t } = useSettings();
  const [summary, setSummary] = useState<string | null>(null);
  const [summarizing, setSummarizing] = useState(false);
  const saved = isSaved(article.url);
  const title = translation?.title ?? article.title;
  const description = translation?.description ?? article.description;

  const onSummarize = async () => {
    if (summary) {
      setSummary(null);
      return;
    }
    setSummarizing(true);
    const res = await summarizeArticle({
      data: {
        title: article.title,
        description: article.description,
        content: article.content,
        language,
      },
    });
    setSummarizing(false);
    if (res.error) toast.error(res.error);
    else if (res.summary) setSummary(res.summary);
  };

  const onSave = async () => {
    await toggle(article);
    toast.success(saved ? "Removed from saved" : "Saved for later");
  };

  return (
    <Card
      className="group flex flex-col overflow-hidden border-border/60 bg-gradient-card shadow-card hover-lift transition-smooth animate-blur-in"
      style={{ animationDelay: `${Math.min(index * 40, 400)}ms` }}
    >
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          {article.image ? (
            <img
              src={article.image}
              alt={title}
              loading="lazy"
              onError={(e) => ((e.currentTarget.style.display = "none"))}
              className="h-full w-full object-cover transition-smooth group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-hero">
              <span className="text-3xl font-display font-bold text-gradient">N</span>
            </div>
          )}
          <Badge className="absolute left-3 top-3 bg-background/90 backdrop-blur text-foreground border-0 font-medium">
            {article.source.name}
          </Badge>
        </div>
      </a>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="block">
          <h3 className="font-display font-semibold text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-primary transition-smooth">
            {title}
          </h3>
        </a>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{description}</p>
        )}

        {summary && (
          <div className="mt-3 rounded-lg border border-primary/20 bg-accent/40 p-3 animate-fade-in-up">
            <div className="flex items-center gap-1.5 mb-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> {t.aiSummary}
            </div>
            <p className="text-sm leading-relaxed">{summary}</p>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between pt-4 gap-2">
          <span className="text-xs text-muted-foreground">{timeAgo(article.publishedAt, t)}</span>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onSummarize}
              disabled={summarizing}
              className="h-8 px-2.5 gap-1.5 text-xs"
            >
              {summarizing ? (
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
              ) : (
                <Sparkles className="h-3.5 w-3.5" />
              )}
              {summary ? t.hide : t.summarize}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onSave}
              className="h-8 w-8"
              aria-label={saved ? t.removeBookmark : t.saveArticle}
            >
              {saved ? (
                <BookmarkCheck className="h-4 w-4 text-primary" />
              ) : (
                <Bookmark className="h-4 w-4" />
              )}
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-8 w-8" aria-label={t.openArticle}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
