import { useCallback, useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { NewsArticle } from "./news-types";
import { useAuth } from "./auth-context";

const LOCAL_KEY = "newsmania:bookmarks";

interface SavedBookmark {
  article_url: string;
  title: string;
  description: string | null;
  image_url: string | null;
  source: string | null;
  published_at: string | null;
}

function readLocal(): SavedBookmark[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) ?? "[]");
  } catch {
    return [];
  }
}
function writeLocal(items: SavedBookmark[]) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(items));
}

export function useBookmarks() {
  const { user } = useAuth();
  const [items, setItems] = useState<SavedBookmark[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    if (user) {
      setLoading(true);
      const { data } = await supabase
        .from("bookmarks")
        .select("article_url,title,description,image_url,source,published_at")
        .order("created_at", { ascending: false });
      setItems(data ?? []);
      setLoading(false);
    } else {
      setItems(readLocal());
    }
  }, [user]);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const isSaved = useCallback((url: string) => items.some((i) => i.article_url === url), [items]);

  const save = useCallback(
    async (a: NewsArticle) => {
      const row: SavedBookmark = {
        article_url: a.url,
        title: a.title,
        description: a.description,
        image_url: a.image,
        source: a.source.name,
        published_at: a.publishedAt,
      };
      if (user) {
        await supabase.from("bookmarks").upsert({ ...row, user_id: user.id }, { onConflict: "user_id,article_url" });
      } else {
        const next = [row, ...readLocal().filter((i) => i.article_url !== a.url)];
        writeLocal(next);
      }
      setItems((prev) => [row, ...prev.filter((i) => i.article_url !== a.url)]);
    },
    [user]
  );

  const remove = useCallback(
    async (url: string) => {
      if (user) {
        await supabase.from("bookmarks").delete().eq("article_url", url);
      } else {
        writeLocal(readLocal().filter((i) => i.article_url !== url));
      }
      setItems((prev) => prev.filter((i) => i.article_url !== url));
    },
    [user]
  );

  const toggle = useCallback(
    async (a: NewsArticle) => {
      if (isSaved(a.url)) await remove(a.url);
      else await save(a);
    },
    [isSaved, remove, save]
  );

  return { items, loading, isSaved, save, remove, toggle, refresh };
}

export type { SavedBookmark };
