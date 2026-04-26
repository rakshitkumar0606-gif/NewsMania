import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Newspaper, Bookmark, Settings as SettingsIcon, LogIn, LogOut, Sun, Moon, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth-context";
import { useSettings } from "@/lib/settings-context";
import { SettingsDialog } from "./SettingsDialog";
import { SearchBar } from "./SearchBar";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  const { user, profile, signOut } = useAuth();
  const { t, theme, toggleTheme } = useSettings();
  const navigate = useNavigate();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [settingsMode, setSettingsMode] = useState<"profile" | "preferences">("profile");
  const path = useRouterState({ select: (s) => s.location.pathname });

  const openSettings = (mode: "profile" | "preferences") => {
    setSettingsMode(mode);
    setSettingsOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-nav backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:gap-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-smooth">
              <Newspaper className="h-5 w-5 text-brand-foreground" />
            </div>
            <span className="hidden sm:block font-display font-bold text-lg tracking-tight group-hover:translate-x-0.5 transition-smooth">
              News<span className="text-gradient">Mania</span>
            </span>
          </Link>

          <div className="flex-1 max-w-2xl mx-auto">
            <SearchBar />
          </div>

          <nav className="flex items-center gap-1">
            <Button
              variant={path === "/saved" ? "secondary" : "ghost"}
              size="icon"
              onClick={() => navigate({ to: "/saved" })}
              aria-label={t.savedNews}
            >
              <Bookmark className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="transition-smooth"
            >
              {theme === "dark" ? (
                <Sun className="h-5 w-5 text-warning transition-smooth" />
              ) : (
                <Moon className="h-5 w-5 transition-smooth" />
              )}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => openSettings("preferences")} aria-label={t.settings}>
              <SettingsIcon className="h-5 w-5" />
            </Button>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8 border border-brand/20">
                      <AvatarImage src={profile?.avatar_url} />
                      <AvatarFallback className="bg-gradient-brand text-brand-foreground text-xs font-bold">
                        {(profile?.full_name?.[0] || user.email?.[0] || "U").toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem onClick={() => openSettings("profile")}>
                    <UserIcon className="mr-2 h-4 w-4" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={async () => {
                      if (confirm(t.logoutConfirm)) {
                        await signOut();
                        navigate({ to: "/" });
                      }
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" /> {t.signOut}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="default"
                size="sm"
                className="ml-1 bg-gradient-brand text-brand-foreground hover:opacity-90"
                onClick={() => navigate({ to: "/auth", search: { tab: "signin" } })}
              >
                <LogIn className="mr-1.5 h-4 w-4" />
                <span className="hidden sm:inline">{t.signIn}</span>
              </Button>
            )}
          </nav>
        </div>
      </header>
      <SettingsDialog open={settingsOpen} onOpenChange={setSettingsOpen} mode={settingsMode} />
    </>
  );
}
