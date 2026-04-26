import { useEffect, useState, useCallback, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader2, AlertCircle, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "./NewsCard";
import { NewsGridSkeleton } from "./NewsCardSkeleton";
import { fetchNews } from "@/lib/news.functions";
import { translateArticles } from "@/lib/ai.functions";
import { useSettings } from "@/lib/settings-context";
import type { NewsArticle, NewsCategory } from "@/lib/news-types";
import { toast } from "sonner";

interface Props {
  category?: NewsCategory;
  query?: string;
}

const PAGE_SIZE = 10;

export function NewsFeed({ category, query }: Props) {
  const { language, t } = useSettings();
  const [pages, setPages] = useState<NewsArticle[][]>([]);
  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [reachedEnd, setReachedEnd] = useState(false);
  const [translations, setTranslations] = useState<Record<string, { title: string; description: string | null }>>({});
  const sentinelRef = useRef<HTMLDivElement>(null);

  // Reset on filter change
  useEffect(() => {
    setPages([]);
    setPage(1);
    setReachedEnd(false);
    setTranslations({});
  }, [category, query, language]);

  const initial = useQuery({
    queryKey: ["news", category, query, language, "p1"],
    queryFn: () =>
      fetchNews({
        data: { category, query, language, page: 1, pageSize: PAGE_SIZE },
      }),
    staleTime: 60_000,
  });

  // Seed first page
  useEffect(() => {
    if (initial.data && pages.length === 0) {
      setPages([initial.data.articles]);
      if (initial.data.articles.length < PAGE_SIZE) setReachedEnd(true);
    }
  }, [initial.data, pages.length]);

  // Translate articles when language ≠ en
  useEffect(() => {
    if (language === "en") return;
    const all = pages.flat();
    const untranslated = all.filter((a) => !translations[a.url]);
    if (untranslated.length === 0) return;

    const batch = untranslated.slice(0, 10);
    translateArticles({
      data: {
        target: language,
        items: batch.map((a) => ({ id: a.url, title: a.title, description: a.description })),
      },
    }).then((res) => {
      if (res.translations && Object.keys(res.translations).length) {
        setTranslations((prev) => ({ ...prev, ...res.translations }));
      }
    });
  }, [pages, language, translations]);

  const loadMore = useCallback(async () => {
    if (loadingMore || reachedEnd) return;
    setLoadingMore(true);
    const next = page + 1;
    const res = await fetchNews({
      data: { category, query, language, page: next, pageSize: PAGE_SIZE },
    });
    setLoadingMore(false);
    if (res.error) {
      toast.error(res.error);
      setReachedEnd(true);
      return;
    }
    if (res.articles.length === 0) {
      setReachedEnd(true);
      return;
    }
    setPages((p) => [...p, res.articles]);
    setPage(next);
    if (res.articles.length < PAGE_SIZE) setReachedEnd(true);
  }, [page, category, query, language, loadingMore, reachedEnd]);

  // Infinite scroll
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { rootMargin: "400px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [loadMore]);

  if (initial.isLoading && pages.length === 0) {
    return <NewsGridSkeleton count={8} />;
  }

  if (initial.data?.error && pages.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <AlertCircle className="h-12 w-12 text-destructive mb-4" />
        <h3 className="font-display font-semibold text-lg">{t.couldntLoad}</h3>
        <p className="text-muted-foreground mt-1 max-w-md">{initial.data.error}</p>
        <Button className="mt-4" onClick={() => initial.refetch()}>
          {t.retry}
        </Button>
      </div>
    );
  }

  const all = pages.flat();

  if (all.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Newspaper className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="font-display font-semibold text-lg">{t.noResults}</h3>
        <p className="text-muted-foreground mt-1">{t.noResultsHint}</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {all.map((a, i) => (
          <NewsCard key={a.url} article={a} index={i} translation={translations[a.url]} />
        ))}
      </div>

      <div ref={sentinelRef} className="flex justify-center py-10">
        {loadingMore && <Loader2 className="h-6 w-6 animate-spin text-primary" />}
        {!loadingMore && !reachedEnd && (
          <Button variant="outline" onClick={loadMore}>
            {t.loadMore}
          </Button>
        )}
        {reachedEnd && all.length > 0 && (
          <p className="text-sm text-muted-foreground">{t.reachedEnd}</p>
        )}
      </div>
    </>
  );
}
