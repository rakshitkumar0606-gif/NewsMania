import { createServerFn } from "@tanstack/react-start";

// Using Google Gemini API directly for summarization and translation
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent";

type LangCode =
  | "en" | "hi" | "mr" | "bn" | "ta" | "te"
  | "gu" | "kn" | "ml" | "pa" | "or" | "as" | "ur";

interface SummarizeInput {
  title: string;
  description?: string | null;
  content?: string | null;
  language?: LangCode;
}

const LANG_NAME: Record<LangCode, string> = {
  en: "English", hi: "Hindi", mr: "Marathi", bn: "Bengali",
  ta: "Tamil", te: "Telugu", gu: "Gujarati", kn: "Kannada",
  ml: "Malayalam", pa: "Punjabi", or: "Odia", as: "Assamese", ur: "Urdu",
};

export const summarizeArticle = createServerFn({ method: "POST" })
  .inputValidator((d: SummarizeInput) => d)
  .handler(async ({ data }): Promise<{ summary: string; error?: string }> => {
    // Check for various API key locations
    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY || process.env.LOVABLE_API_KEY;
    
    if (!apiKey) return { summary: "", error: "AI not configured. Please add GEMINI_API_KEY to your .env file." };

    const lang = data.language ?? "en";
    const text = [data.title, data.description, data.content].filter(Boolean).join("\n\n");

    try {
      // DEBUG: List available models to see what this key supports
      const listRes = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
      if (listRes.ok) {
        const listData = await listRes.json();
        console.log("Available models for this key:", listData.models?.map((m: any) => m.name));
      }

      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Summarize this news article in 2-3 concise sentences in ${LANG_NAME[lang]}. 
              Do not include any introductory text, just the summary.
              
              Article Text:
              ${text}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Gemini API Error:", errorData);
        return { summary: "", error: `AI service error: ${errorData?.error?.message || response.statusText}` };
      }

      const json = await response.json();
      const summary = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "";
      return { summary };
    } catch (err) {
      console.error("summarize failed", err);
      return { summary: "", error: "Failed to generate summary." };
    }
  });

interface TranslateInput {
  items: { id: string; title: string; description: string | null }[];
  target: LangCode;
}

export const translateArticles = createServerFn({ method: "POST" })
  .inputValidator((d: TranslateInput) => d)
  .handler(async ({ data }): Promise<{ translations: Record<string, { title: string; description: string | null }>; error?: string }> => {
    const apiKey = process.env.GEMINI_API_KEY || process.env.LOVABLE_API_KEY;
    if (!apiKey) return { translations: {}, error: "AI not configured" };
    
    if (data.target === "en" || data.items.length === 0) {
      return { translations: {} };
    }

    try {
      const payload = data.items.map((i) => ({ id: i.id, title: i.title, description: i.description ?? "" }));
      
      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `Translate the following news titles and descriptions into ${LANG_NAME[data.target]}. 
              Return ONLY a JSON object where the keys are the IDs and the values are objects containing the translated "title" and "description".
              
              Data:
              ${JSON.stringify(payload)}`
            }]
          }],
          generationConfig: {
            response_mime_type: "application/json",
          }
        })
      });

      if (!response.ok) {
        console.error("Gemini Translation Error:", await response.text());
        return { translations: {}, error: "Translation failed" };
      }

      const json = await response.json();
      const text = json.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ?? "{}";
      const translations = JSON.parse(text);
      
      return { translations };
    } catch (err) {
      console.error("translate failed", err);
      return { translations: {}, error: "Translation failed" };
    }
  });
