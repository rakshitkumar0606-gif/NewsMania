import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

interface Profile {
  username: string;
  full_name: string;
  phone: string;
  avatar_url: string;
}

interface AuthCtx {
  user: User | null;
  session: Session | null;
  profile: Profile | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ error?: string }>;
  signUp: (email: string, password: string, username: string, fullName?: string, phone?: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const Ctx = createContext<AuthCtx | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();
      if (!error && data) {
        setProfile({
          username: data.username || "",
          full_name: data.full_name || "",
          phone: data.phone || "",
          avatar_url: data.avatar_url || "",
        });
      }
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
      setUser(s?.user ?? null);
      if (s?.user) fetchProfile(s.user.id);
      else setProfile(null);
    });

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      const u = data.session?.user ?? null;
      setUser(u);
      if (u) fetchProfile(u.id);
      setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  const value: AuthCtx = {
    user,
    session,
    profile,
    loading,
    signIn: async (email, password) => {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      return { error: error?.message };
    },
    signUp: async (email, password, username, fullName, phone) => {
      const redirectUrl = `${window.location.origin}/`;
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { 
          emailRedirectTo: redirectUrl, 
          data: { username, full_name: fullName, phone } 
        },
      });
      return { error: error?.message };
    },
    signOut: async () => {
      await supabase.auth.signOut();
      setProfile(null);
    },
    refreshProfile: async () => {
      if (user) await fetchProfile(user.id);
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
