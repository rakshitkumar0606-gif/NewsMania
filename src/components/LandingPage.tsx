import { Link } from "@tanstack/react-router";
import { Newspaper, ArrowRight, Shield, Globe, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-animated-mesh overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Newspaper className="h-5 w-5 text-brand-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            News<span className="text-gradient">Mania</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/auth" search={{ tab: 'signin' }}>
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          </Link>
          <Link to="/auth" search={{ tab: 'signup' }}>
            <Button className="bg-gradient-brand text-brand-foreground">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-32">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium border border-brand/20 animate-fade-in">
            <Sparkles className="h-4 w-4" />
            <span>AI-Powered News Experience</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-display font-extrabold tracking-tight animate-slide-up">
            Your Personalized <br />
            <span className="text-gradient">News Mania</span>
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Experience news like never before. Real-time updates, AI-summarized insights, 
            and seamless multilingual translations all in one premium space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Link to="/auth" search={{ tab: 'signup' }} className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-gradient-brand text-brand-foreground shadow-glow group">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/auth" search={{ tab: 'signin' }} className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg">
                Sign In
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-brand/30 transition-smooth group">
            <div className="h-12 w-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
              <Globe className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3">Multilingual AI</h3>
            <p className="text-muted-foreground">Read news from around the globe in your preferred language with instant AI translation.</p>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-brand/30 transition-smooth group">
            <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
              <Sparkles className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold mb-3">Smart Summaries</h3>
            <p className="text-muted-foreground">Save time with AI-generated summaries that capture the essence of every story instantly.</p>
          </div>
          <div className="p-8 rounded-3xl bg-card border border-border/50 hover:border-brand/30 transition-smooth group">
            <div className="h-12 w-12 rounded-2xl bg-brand/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
              <Shield className="h-6 w-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold mb-3">Private & Secure</h3>
            <p className="text-muted-foreground">Your bookmarks and preferences are securely synced across all your devices.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Newspaper className="h-5 w-5 text-brand" />
            <span className="font-display font-bold tracking-tight">NewsMania AI</span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 NewsMania AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
