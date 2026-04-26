import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import React, { useState, useEffect } from "react";
import { Newspaper, Loader2, Shield, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/lib/auth-context";
import { useSettings } from "@/lib/settings-context";
import { toast } from "sonner";
import { z } from "zod";
import { zodValidator } from "@tanstack/zod-adapter";

const authSearchSchema = z.object({
  tab: z.enum(["signin", "signup"]).optional().default("signin"),
});

export const Route = createFileRoute("/auth")({
  validateSearch: zodValidator(authSearchSchema),
  component: AuthPage,
  head: () => ({
    meta: [
      { title: "Sign in — NewsMania" },
      { name: "description", content: "Sign in or create your NewsMania account." },
    ],
  }),
});

function AuthPage() {
  const { tab: searchTab } = Route.useSearch();
  const navigate = Route.useNavigate();
  const { user, signIn, signUp } = useAuth();
  const { t } = useSettings();
  const [tab, setTab] = useState<"signin" | "signup">(searchTab || "signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (searchTab) setTab(searchTab);
  }, [searchTab]);

  const handleTabChange = (v: string) => {
    const newTab = v as "signin" | "signup";
    setTab(newTab);
    navigate({ to: '/auth', search: (prev) => ({ ...prev, tab: newTab }), replace: true });
  };
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) navigate({ to: "/" });
  }, [user, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) toast.error(error);
    else {
      toast.success(t.welcomeBack);
      window.location.href = "/";
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    setLoading(true);
    const { error } = await signUp(
      email, 
      password, 
      username || email.split("@")[0],
      fullName,
      phone
    );
    setLoading(false);
    if (error) toast.error(error);
    else {
      toast.success(t.accountCreated);
      window.location.href = "/";
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row bg-animated-mesh overflow-hidden">
      {/* Left Side: Animation & Branding */}
      <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center p-12 overflow-hidden border-r border-border/40">
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand/20 blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-md w-full text-center space-y-12 relative z-10">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div className="absolute inset-0 bg-brand/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-brand shadow-glow animate-fade-in-up">
                <Newspaper className="h-12 w-12 text-brand-foreground" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h1 className="font-display font-bold text-5xl tracking-tight animate-slide-up">
                News<span className="text-gradient">Mania</span>
              </h1>
              <p className="text-xl text-muted-foreground animate-slide-up" style={{ animationDelay: '0.1s' }}>
                {tab === 'signin' ? "Welcome back to your personalized news universe." : "Join thousands of readers and experience AI-powered news."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 pt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-md">
              <Sparkles className="h-8 w-8 text-brand mb-4 mx-auto animate-pulse" />
              <p className="text-sm font-medium">AI Summaries</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-md">
              <Globe className="h-8 w-8 text-accent mb-4 mx-auto" />
              <p className="text-sm font-medium">10+ Languages</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Auth Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-0 w-full flex justify-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
              <Newspaper className="h-5 w-5 text-brand-foreground" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              News<span className="text-gradient">Mania</span>
            </span>
          </Link>
        </div>

        <div className="w-full max-w-md animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Card className="p-6 sm:p-8 shadow-card-lg bg-gradient-card border-border/50 backdrop-blur-xl">
            <div className="mb-6 text-center lg:text-left">
              <h2 className="text-xl font-bold tracking-tight mb-1">
                {tab === 'signin' ? t.signInTab : t.createAccountTab}
              </h2>
              <p className="text-muted-foreground">
                {tab === 'signin' ? "Enter your credentials to access your account" : "Start your journey with a new account"}
              </p>
            </div>

            <Tabs value={tab} onValueChange={handleTabChange}>
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 p-1">
                <TabsTrigger value="signin" className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.signInTab}</TabsTrigger>
                <TabsTrigger value="signup" className="data-[state=active]:bg-background data-[state=active]:shadow-sm transition-all">{t.createAccountTab}</TabsTrigger>
              </TabsList>

              <TabsContent value="signin" className="mt-0 outline-none animate-fade-in">
                <form onSubmit={handleSignIn} className="space-y-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="signin-email" className="text-xs font-medium ml-1">{t.email}</Label>
                    <Input id="signin-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="h-10 bg-background/50" />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="signin-password" className="text-xs font-medium ml-1">{t.password}</Label>
                    <Input id="signin-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="h-10 bg-background/50" />
                  </div>
                  <Button type="submit" className="w-full h-11 bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t.signInTab}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="mt-0 outline-none animate-fade-in">
                <form onSubmit={handleSignUp} className="space-y-2">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="signup-username" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">{t.username}</Label>
                      <Input id="signup-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="name" className="h-9 bg-background/50" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-fullname" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">Full Name</Label>
                      <Input id="signup-fullname" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="John Doe" className="h-9 bg-background/50" />
                    </div>
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="signup-email" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">{t.email}</Label>
                    <Input id="signup-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" className="h-9 bg-background/50" />
                  </div>
                  
                  <div className="space-y-1">
                    <Label htmlFor="signup-phone" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">Phone Number</Label>
                    <Input id="signup-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+1 234..." className="h-9 bg-background/50" />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <Label htmlFor="signup-password" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">{t.password}</Label>
                      <Input id="signup-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••" className="h-9 bg-background/50" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="signup-confirm" className="text-[10px] font-medium ml-1 uppercase text-muted-foreground">Confirm</Label>
                      <Input id="signup-confirm" type="password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="••••" className="h-9 bg-background/50" />
                    </div>
                  </div>

                  <Button type="submit" className="w-full h-10 mt-2 bg-gradient-brand text-brand-foreground hover:opacity-90 shadow-glow" disabled={loading}>
                    {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : t.createAccount}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <p className="text-center text-[10px] sm:text-xs text-muted-foreground mt-8">
              {t.authFooter}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
