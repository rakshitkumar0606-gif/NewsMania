import { createServerFn } from "@tanstack/react-start";
import type { NewsArticle, NewsCategory, Language } from "./news-types";

// NewsAPI key (hardcoded per user request).
// NOTE: NewsAPI's free/developer tier only allows requests from localhost/dev environments.
// Production deployments will receive 426 errors unless upgraded to a paid plan.
const NEWS_API_KEY = "3f652a5b2c82400689eabe41eaa799e3";
const NEWS_API_BASE = "https://newsapi.org/v2";

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: Array<{
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }>;
  code?: string;
  message?: string;
}

function mapLang(lang: Language): string {
  // NewsAPI supports: ar de en es fr he it nl no pt ru sv ud zh
  // Hindi/Marathi aren't supported — fall back to English and rely on AI translation.
  if (lang === "hi" || lang === "mr") return "en";
  return lang;
}

interface FetchInput {
  category?: NewsCategory;
  query?: string;
  language?: Language;
  page?: number;
  pageSize?: number;
  country?: string;
}

export const fetchNews = createServerFn({ method: "POST" })
  .inputValidator((d: FetchInput) => d)
  .handler(async ({ data }): Promise<{ articles: NewsArticle[]; total: number; error?: string }> => {
    const lang = mapLang(data.language ?? "en");
    const page = Math.max(1, data.page ?? 1);
    const pageSize = Math.min(20, data.pageSize ?? 12);

    try {
      let url: string;
      if (data.query && data.query.trim()) {
        const params = new URLSearchParams({
          q: data.query.trim(),
          language: lang,
          pageSize: String(pageSize),
          page: String(page),
          sortBy: "publishedAt",
          apiKey: NEWS_API_KEY,
        });
        url = `${NEWS_API_BASE}/everything?${params}`;
      } else {
        const params = new URLSearchParams({
          pageSize: String(pageSize),
          page: String(page),
          apiKey: NEWS_API_KEY,
        });
        const cat = data.category ?? "general";
        params.set("category", cat);
        params.set("country", data.country ?? "us");
        url = `${NEWS_API_BASE}/top-headlines?${params}`;
      }

      const res = await fetch(url, {
        headers: { "User-Agent": "NewsManiaAI/1.0" },
      });
      const json = (await res.json()) as NewsAPIResponse;

      if (!res.ok || json.status !== "ok") {
        console.error("NewsAPI error", res.status, json);
        const msg = json.message ?? `News service error (${res.status}).`;
        return { articles: [], total: 0, error: msg };
      }

      return {
        articles: json.articles
          .filter((a) => a.title && a.title !== "[Removed]")
          .map((a) => ({
            url: a.url,
            title: a.title,
            description: a.description,
            image: a.urlToImage,
            publishedAt: a.publishedAt,
            source: { name: a.source.name, url: a.url },
            content: a.content,
          })),
        total: json.totalResults,
      };
    } catch (err) {
      console.error("fetchNews failed", err);
      return { articles: [], total: 0, error: "Failed to load news. Please try again." };
    }
  });
