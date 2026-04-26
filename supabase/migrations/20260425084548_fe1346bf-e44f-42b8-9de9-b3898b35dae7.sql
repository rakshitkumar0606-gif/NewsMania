
-- Profiles table
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);
create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);
create policy "Users can insert own profile" on public.profiles
  for insert with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username)
  values (new.id, coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)));
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- Bookmarks
create table public.bookmarks (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  article_url text not null,
  title text not null,
  description text,
  image_url text,
  source text,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  unique(user_id, article_url)
);

alter table public.bookmarks enable row level security;

create policy "Users can view own bookmarks" on public.bookmarks
  for select using (auth.uid() = user_id);
create policy "Users can insert own bookmarks" on public.bookmarks
  for insert with check (auth.uid() = user_id);
create policy "Users can delete own bookmarks" on public.bookmarks
  for delete using (auth.uid() = user_id);

create index bookmarks_user_id_idx on public.bookmarks(user_id, created_at desc);
