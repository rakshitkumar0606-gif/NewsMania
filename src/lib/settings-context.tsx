import { createContext, useContext, useEffect, useState, useMemo, type ReactNode } from "react";
import type { Language } from "./news-types";
import { getStrings, isRTL, type UIStrings } from "./i18n";

type Theme = "light" | "dark";

interface SettingsCtx {
  theme: Theme;
  language: Language;
  setTheme: (t: Theme) => void;
  setLanguage: (l: Language) => void;
  toggleTheme: () => void;
  t: UIStrings;
}

const Ctx = createContext<SettingsCtx | undefined>(undefined);

const THEME_KEY = "newsmania:theme";
const LANG_KEY = "newsmania:lang";

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const t = (localStorage.getItem(THEME_KEY) as Theme | null) ?? "light";
    const l = (localStorage.getItem(LANG_KEY) as Language | null) ?? "en";
    setThemeState(t);
    setLanguageState(l);
    document.documentElement.classList.toggle("dark", t === "dark");
    document.documentElement.lang = l;
    document.documentElement.dir = isRTL(l) ? "rtl" : "ltr";
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem(THEME_KEY, t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  const setLanguage = (l: Language) => {
    setLanguageState(l);
    localStorage.setItem(LANG_KEY, l);
    document.documentElement.lang = l;
    document.documentElement.dir = isRTL(l) ? "rtl" : "ltr";
  };

  const t = useMemo(() => getStrings(language), [language]);

  return (
    <Ctx.Provider
      value={{
        theme,
        language,
        setTheme,
        setLanguage,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light"),
        t,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useSettings must be used inside SettingsProvider");
  return ctx;
}
