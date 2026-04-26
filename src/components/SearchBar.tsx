import { useEffect, useRef, useState } from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import { Search, Mic, MicOff, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/lib/settings-context";
import { toast } from "sonner";

// Web Speech API typings (browser-only, optional)
type SpeechRecognitionEvent = { results: { 0: { 0: { transcript: string } } } };
interface SpeechRecognitionLike {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: (e: SpeechRecognitionEvent) => void;
  onerror: (e: { error?: string }) => void;
  onend: () => void;
  start: () => void;
  stop: () => void;
}

export function SearchBar() {
  const navigate = useNavigate();
  const { language, t } = useSettings();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.search as { q?: string } });
  const [value, setValue] = useState(search.q ?? "");
  const [listening, setListening] = useState(false);
  const recRef = useRef<SpeechRecognitionLike | null>(null);

  useEffect(() => {
    setValue(search.q ?? "");
  }, [search.q]);

  const submit = (q: string) => {
    const trimmed = q.trim();
    if (!trimmed) return;
    navigate({ to: "/search", search: { q: trimmed } });
  };

  const startVoice = () => {
    const W = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const SR = W.SpeechRecognition ?? W.webkitSpeechRecognition;
    if (!SR) {
      toast.error(t.voiceUnsupported);
      return;
    }
    const speechLangMap: Record<string, string> = {
      en: "en-IN", hi: "hi-IN", mr: "mr-IN", bn: "bn-IN", ta: "ta-IN",
      te: "te-IN", gu: "gu-IN", kn: "kn-IN", ml: "ml-IN", pa: "pa-IN",
      or: "or-IN", as: "as-IN", ur: "ur-IN",
    };
    const rec = new SR();
    rec.lang = speechLangMap[language] ?? "en-IN";
    rec.continuous = false;
    rec.interimResults = false;
    rec.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setValue(transcript);
      submit(transcript);
    };
    rec.onerror = (e) => {
      if (e.error !== "no-speech") toast.error(`Voice error: ${e.error ?? "unknown"}`);
      setListening(false);
    };
    rec.onend = () => setListening(false);
    recRef.current = rec;
    setListening(true);
    rec.start();
  };

  const stopVoice = () => {
    recRef.current?.stop();
    setListening(false);
  };

  const showClear = value.length > 0 || (path === "/search" && search.q);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(value);
      }}
      className="relative w-full"
    >
      <Search className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={t.searchPlaceholder}
        className="h-11 pl-10 pr-20 rounded-full border-border/70 bg-muted/40 focus-visible:bg-background transition-smooth"
      />
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex items-center gap-0.5">
        {showClear && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 rounded-full"
            onClick={() => {
              setValue("");
              if (path === "/search") navigate({ to: "/" });
            }}
            aria-label={t.clearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={`h-8 w-8 rounded-full ${listening ? "text-destructive animate-pulse" : ""}`}
          onClick={listening ? stopVoice : startVoice}
          aria-label={listening ? t.voiceStop : t.voiceStart}
        >
          {listening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}
