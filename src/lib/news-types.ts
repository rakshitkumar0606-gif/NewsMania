export interface NewsArticle {
  url: string;
  title: string;
  description: string | null;
  image: string | null;
  publishedAt: string;
  source: { name: string; url?: string };
  content?: string | null;
}

export type NewsCategory =
  | "general"
  | "technology"
  | "business"
  | "sports"
  | "health"
  | "entertainment"
  | "science"
  | "science";

export type Language =
  | "en"
  | "hi"
  | "mr"
  | "bn"
  | "ta"
  | "te"
  | "gu"
  | "kn"
  | "ml"
  | "pa"
  | "or"
  | "as"
  | "ur";

export const LANGUAGES: { value: Language; label: string; native: string }[] = [
  { value: "en", label: "English", native: "English" },
  { value: "hi", label: "Hindi", native: "हिन्दी" },
  { value: "bn", label: "Bengali", native: "বাংলা" },
  { value: "mr", label: "Marathi", native: "मराठी" },
  { value: "te", label: "Telugu", native: "తెలుగు" },
  { value: "ta", label: "Tamil", native: "தமிழ்" },
  { value: "gu", label: "Gujarati", native: "ગુજરાતી" },
  { value: "kn", label: "Kannada", native: "ಕನ್ನಡ" },
  { value: "ml", label: "Malayalam", native: "മലയാളം" },
  { value: "pa", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { value: "or", label: "Odia", native: "ଓଡ଼ିଆ" },
  { value: "as", label: "Assamese", native: "অসমীয়া" },
  { value: "ur", label: "Urdu", native: "اردو" },
];

export const CATEGORIES: { value: NewsCategory; label: string }[] = [
  { value: "general", label: "Top Stories" },
  { value: "technology", label: "Technology" },
  { value: "business", label: "Business" },
  { value: "sports", label: "Sports" },
  { value: "health", label: "Health" },
  { value: "entertainment", label: "Entertainment" },
  { value: "science", label: "Science" },
];
