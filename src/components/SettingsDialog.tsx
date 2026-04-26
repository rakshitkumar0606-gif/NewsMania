import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sun, Moon, User as UserIcon, Settings as SettingsIcon, Camera, Loader2 } from "lucide-react";
import { useSettings } from "@/lib/settings-context";
import { LANGUAGES, type Language } from "@/lib/news-types";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

import { cn } from "@/lib/utils";

export function SettingsDialog({ 
  open, 
  onOpenChange,
  mode = "profile"
}: { 
  open: boolean; 
  onOpenChange: (o: boolean) => void;
  mode?: "profile" | "preferences";
}) {
  const { theme, setTheme, language, setLanguage, t } = useSettings();
  const { user, refreshProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [profile, setProfile] = useState({
    username: "",
    full_name: "",
    phone: "",
    avatar_url: "",
  });

  useEffect(() => {
    if (user && open && mode === "profile") {
      fetchProfile();
    }
  }, [user, open, mode]);

  async function fetchProfile() {
    if (!user) return;
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error && error.code !== "PGRST116") throw error;
      if (data) {
        setProfile({
          username: data.username || "",
          full_name: data.full_name || "",
          phone: data.phone || "",
          avatar_url: data.avatar_url || "",
        });
      }
    } catch (error: any) {
      toast.error("Error loading profile: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  const [isEditing, setIsEditing] = useState(false);

  async function updateProfile() {
    if (!user) return;
    try {
      setLoading(true);
      const { error } = await supabase.from("profiles").upsert({
        id: user.id,
        ...profile,
      });

      if (error) throw error;
      await refreshProfile();
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error: any) {
      toast.error("Error updating profile: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    if (!user) return;
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) return;
      const file = event.target.files[0];
      const fileExt = file.name.split(".").pop();
      const filePath = `${user.id}/${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from("avatars")
        .getPublicUrl(filePath);

      setProfile(prev => ({ ...prev, avatar_url: publicUrl }));
      
      // Update profile immediately with new avatar
      await supabase.from("profiles").upsert({
        id: user.id,
        avatar_url: publicUrl,
      });

      await refreshProfile();
      toast.success("Avatar uploaded successfully!");
    } catch (error: any) {
      toast.error("Error uploading avatar: " + error.message);
    } finally {
      setUploading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="font-display flex items-center gap-2">
            {mode === "profile" ? (
              <>
                <UserIcon className="h-5 w-5 text-brand" />
                Profile
              </>
            ) : (
              <>
                <SettingsIcon className="h-5 w-5 text-brand" />
                Settings
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {mode === "profile" 
              ? "Manage your identity and account details." 
              : "Customize your application experience."}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto pr-2 mt-4 space-y-6 min-h-0">
          {mode === "profile" ? (
            user ? (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group">
                    <Avatar className="h-24 w-24 border-2 border-brand/20">
                      <AvatarImage src={profile.avatar_url} />
                      <AvatarFallback className="bg-brand/10 text-brand text-2xl font-bold">
                        {profile.full_name?.[0]?.toUpperCase() || profile.username?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <button 
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="absolute bottom-0 right-0 p-2 rounded-full bg-brand text-brand-foreground shadow-lg hover:scale-105 transition-smooth disabled:opacity-50 animate-in zoom-in"
                      >
                        {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
                      </button>
                    )}
                    <input 
                      type="file" 
                      ref={fileInputRef} 
                      onChange={uploadAvatar} 
                      accept="image/*" 
                      className="hidden" 
                    />
                  </div>
                  {profile.full_name && (
                    <div className="text-center">
                      <p className="text-lg font-display font-bold">{profile.full_name}</p>
                      <p className="text-xs text-muted-foreground">@{profile.username}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  {isEditing ? (
                    <div className="space-y-4 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username" className="text-xs font-medium ml-1">Username</Label>
                          <Input 
                            id="username" 
                            value={profile.username} 
                            onChange={e => setProfile(p => ({ ...p, username: e.target.value }))} 
                            placeholder="johndoe"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="full_name" className="text-xs font-medium ml-1">Full Name</Label>
                          <Input 
                            id="full_name" 
                            value={profile.full_name} 
                            onChange={e => setProfile(p => ({ ...p, full_name: e.target.value }))} 
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-medium ml-1">Phone Number</Label>
                        <Input 
                          id="phone" 
                          value={profile.phone} 
                          onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} 
                          placeholder="+1 234 567 890"
                        />
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          className="flex-1 bg-gradient-brand text-brand-foreground" 
                          onClick={updateProfile}
                          disabled={loading}
                        >
                          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                          Save Changes
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4 animate-fade-in">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label className="text-xs text-muted-foreground uppercase tracking-wider ml-1">Username</Label>
                          <div className="h-12 flex items-center px-4 bg-muted/40 rounded-xl border border-border/50 font-medium">
                            {profile.username || "Not set"}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs text-muted-foreground uppercase tracking-wider ml-1">Full Name</Label>
                          <div className="h-12 flex items-center px-4 bg-muted/40 rounded-xl border border-border/50 font-medium">
                            {profile.full_name || "Not set"}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wider ml-1">Email Address</Label>
                        <div className="h-12 flex items-center px-4 bg-muted/40 rounded-xl border border-border/50 font-medium">
                          {user.email}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label className="text-xs text-muted-foreground uppercase tracking-wider ml-1">Phone Number</Label>
                        <div className="h-12 flex items-center px-4 bg-muted/40 rounded-xl border border-border/50 font-medium">
                          {profile.phone || "Not set"}
                        </div>
                      </div>

                      <Button 
                        variant="outline" 
                        className="w-full mt-2 border-brand/30 text-brand hover:bg-brand/5" 
                        onClick={() => setIsEditing(true)}
                      >
                        Edit Profile
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4 animate-fade-in">
                <p className="text-muted-foreground">Please sign in to manage your profile.</p>
                <Button variant="outline" onClick={() => onOpenChange(false)}>Close</Button>
              </div>
            )
          ) : (
            <div className="space-y-8 animate-fade-in py-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base font-semibold">{t.theme}</Label>
                    <p className="text-xs text-muted-foreground">Select your interface appearance</p>
                  </div>
                  <div className="flex bg-muted p-1 rounded-lg">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className={`rounded-md px-4 ${theme === "light" ? "bg-background shadow-sm text-brand" : "text-muted-foreground"}`}
                      onClick={() => setTheme("light")}
                    >
                      <Sun className="mr-2 h-4 w-4" /> {t.light}
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className={`rounded-md px-4 ${theme === "dark" ? "bg-background shadow-sm text-brand" : "text-muted-foreground"}`}
                      onClick={() => setTheme("dark")}
                    >
                      <Moon className="mr-2 h-4 w-4" /> {t.dark}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t pt-6">
                <div className="space-y-3">
                  <Label className="text-base font-semibold">{t.language}</Label>
                  <p className="text-xs text-muted-foreground mb-4">{t.langHint}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {LANGUAGES.map((l) => {
                      const isActive = language === l.value;
                      return (
                        <button
                          key={l.value}
                          onClick={() => setLanguage(l.value as Language)}
                          className={cn(
                            "flex flex-col items-start p-3 rounded-xl border-2 text-left transition-smooth hover-lift",
                            isActive 
                              ? "border-brand bg-brand/5 shadow-sm" 
                              : "border-border/50 bg-muted/30 hover:border-brand/30"
                          )}
                        >
                          <span className={cn(
                            "text-sm font-bold font-display",
                            isActive ? "text-brand" : "text-foreground"
                          )}>
                            {l.native}
                          </span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">
                            {l.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="outline" className="w-full" onClick={() => onOpenChange(false)}>
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
