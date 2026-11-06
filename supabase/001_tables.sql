-- Peters Family Homeschool (project: petersfhs-study). Already applied; kept here for reference.
-- Tables are locked down: row-level security is on with no policies, so the browser can only
-- reach data through the pfhs_* functions in 002_functions.sql.

create extension if not exists pgcrypto with schema extensions;
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table public.profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 40),
  name_key text generated always as (lower(btrim(name))) stored unique,
  pin_hash text not null,
  failed_attempts integer not null default 0,
  locked_until timestamptz,
  created_at timestamptz not null default now()
);

create table public.sessions (
  token_hash text primary key,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null default (now() + interval '180 days')
);
create index sessions_profile_idx on public.sessions(profile_id);

create table public.progress (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  key text not null check (char_length(key) <= 200),
  value text not null check (char_length(value) <= 500000),
  updated_at timestamptz not null default now(),
  primary key (profile_id, key)
);

create table public.attempts (
  id bigint generated always as identity primary key,
  profile_id uuid not null references public.profiles(id) on delete cascade,
  hub text not null,
  kind text not null,
  item_id text not null,
  unit text,
  chosen integer,
  correct boolean,
  seconds integer,
  created_at timestamptz not null default now()
);
create index attempts_profile_idx on public.attempts(profile_id, created_at desc);
create index attempts_item_idx on public.attempts(hub, item_id);

create table public.app_settings (
  key text primary key,
  value text not null
);

alter table public.profiles enable row level security;
alter table public.sessions enable row level security;
alter table public.progress enable row level security;
alter table public.attempts enable row level security;
alter table public.app_settings enable row level security;
