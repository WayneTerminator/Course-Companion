-- Course Companion v0.6 Supabase Schema
-- Run this in Supabase SQL Editor.
-- Important: use the anon/public key in the app, never the service_role key.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  home_course text,
  default_course_handicap integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
on public.profiles
for select
using (auth.uid() = id);

create policy "Users can insert their own profile"
on public.profiles
for insert
with check (auth.uid() = id);

create policy "Users can update their own profile"
on public.profiles
for update
using (auth.uid() = id)
with check (auth.uid() = id);


create table if not exists public.rounds (
  id uuid primary key default gen_random_uuid(),
  local_id text not null,
  user_id uuid not null references auth.users(id) on delete cascade,
  played_at timestamptz not null,
  player text not null,
  course text not null,
  course_handicap integer,
  mashie_handicap integer,
  scores jsonb not null,
  gross integer not null,
  net integer not null,
  stableford integer not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(user_id, local_id)
);

alter table public.rounds enable row level security;

create policy "Users can view their own rounds"
on public.rounds
for select
using (auth.uid() = user_id);

create policy "Users can insert their own rounds"
on public.rounds
for insert
with check (auth.uid() = user_id);

create policy "Users can update their own rounds"
on public.rounds
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

create policy "Users can delete their own rounds"
on public.rounds
for delete
using (auth.uid() = user_id);
