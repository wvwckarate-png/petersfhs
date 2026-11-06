-- Already applied to petersfhs-study. A daily GitHub Actions job (.github/workflows/supabase-keepalive.yml) calls
-- pfhs_keepalive() so the free-plan project always shows recent activity and is not paused for inactivity.
create table if not exists public.keepalive (
  id integer primary key default 1 check (id = 1),
  last_ping timestamptz not null default now(),
  pings bigint not null default 0
);
alter table public.keepalive enable row level security;
insert into public.keepalive(id) values (1) on conflict (id) do nothing;

create or replace function public.pfhs_keepalive()
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare r public.keepalive%rowtype;
begin
  update public.keepalive set last_ping = now(), pings = pings + 1 where id = 1 returning * into r;
  return jsonb_build_object('ok', true, 'last_ping', r.last_ping, 'pings', r.pings);
end;
$$;

revoke all on function public.pfhs_keepalive() from public;
grant execute on function public.pfhs_keepalive() to anon, authenticated;
