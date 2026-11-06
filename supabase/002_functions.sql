-- Peters Family Homeschool: sign-in and progress functions for the petersfhs-study Supabase project.
-- Run once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.
-- Tables (profiles, sessions, progress, attempts, app_settings) already exist with row-level security on
-- and no policies, so the website can only reach data through the pfhs_* functions below.

-- Internal helpers (not callable from the browser) -------------------------------------------------

create or replace function private.pfhs_auth(p_token text)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid;
begin
  select s.profile_id into pid
  from public.sessions s
  where s.token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex')
    and s.expires_at > now();
  if pid is null then
    raise exception 'not signed in' using errcode = '28000';
  end if;
  return pid;
end;
$$;

create or replace function private.pfhs_new_session(p_profile uuid)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare tok text;
begin
  tok := encode(extensions.gen_random_bytes(32), 'hex');
  insert into public.sessions(token_hash, profile_id)
  values (encode(extensions.digest(tok, 'sha256'), 'hex'), p_profile);
  delete from public.sessions where expires_at < now();
  return tok;
end;
$$;

revoke all on function private.pfhs_auth(text) from public, anon, authenticated;
revoke all on function private.pfhs_new_session(uuid) from public, anon, authenticated;

-- Functions the website calls -----------------------------------------------------------------------

create or replace function public.pfhs_list_profiles()
returns table(id uuid, name text)
language sql
security definer
set search_path = ''
as $$
  select p.id, p.name from public.profiles p order by lower(p.name);
$$;

create or replace function public.pfhs_create_profile(p_name text, p_pin text, p_family_code text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare code text; pid uuid;
begin
  select value into code from public.app_settings where key = 'family_code';
  if code is null or lower(btrim(coalesce(p_family_code, ''))) <> lower(btrim(code)) then
    raise exception 'wrong family code' using errcode = '42501';
  end if;
  if p_pin !~ '^[0-9]{4,8}$' then
    raise exception 'PIN must be 4 to 8 digits' using errcode = '22023';
  end if;
  insert into public.profiles(name, pin_hash)
  values (btrim(p_name), extensions.crypt(p_pin, extensions.gen_salt('bf')))
  returning id into pid;
  return jsonb_build_object('id', pid, 'name', btrim(p_name), 'token', private.pfhs_new_session(pid));
exception when unique_violation then
  raise exception 'that name is already taken' using errcode = '23505';
end;
$$;

create or replace function public.pfhs_login(p_profile_id uuid, p_pin text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare rec public.profiles%rowtype;
begin
  select * into rec from public.profiles where id = p_profile_id for update;
  if not found then
    raise exception 'profile not found' using errcode = '28000';
  end if;
  if rec.locked_until is not null and rec.locked_until > now() then
    raise exception 'too many wrong PINs; try again in a few minutes' using errcode = '28000';
  end if;
  if rec.pin_hash = extensions.crypt(coalesce(p_pin, ''), rec.pin_hash) then
    update public.profiles set failed_attempts = 0, locked_until = null where id = rec.id;
    return jsonb_build_object('id', rec.id, 'name', rec.name, 'token', private.pfhs_new_session(rec.id));
  end if;
  update public.profiles
     set failed_attempts = case when failed_attempts >= 4 then 0 else failed_attempts + 1 end,
         locked_until = case when failed_attempts >= 4 then now() + interval '15 minutes' else null end
   where id = rec.id;
  raise exception 'wrong PIN' using errcode = '28000';
end;
$$;

create or replace function public.pfhs_logout(p_token text)
returns void
language sql
security definer
set search_path = ''
as $$
  delete from public.sessions where token_hash = encode(extensions.digest(coalesce(p_token, ''), 'sha256'), 'hex');
$$;

create or replace function public.pfhs_get_all(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid; out jsonb;
begin
  pid := private.pfhs_auth(p_token);
  select coalesce(jsonb_object_agg(key, jsonb_build_object('v', value, 't', updated_at)), '{}'::jsonb)
    into out from public.progress where profile_id = pid;
  return out;
end;
$$;

create or replace function public.pfhs_set_many(p_token text, p_items jsonb)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid; n integer;
begin
  pid := private.pfhs_auth(p_token);
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) > 500 then
    raise exception 'bad payload' using errcode = '22023';
  end if;
  insert into public.progress(profile_id, key, value, updated_at)
  select pid, i->>'k', i->>'v', now()
    from jsonb_array_elements(p_items) i
   where i ? 'k' and i ? 'v'
  on conflict (profile_id, key) do update set value = excluded.value, updated_at = now();
  get diagnostics n = row_count;
  return n;
end;
$$;

create or replace function public.pfhs_delete_key(p_token text, p_key text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid;
begin
  pid := private.pfhs_auth(p_token);
  delete from public.progress where profile_id = pid and key = p_key;
end;
$$;

create or replace function public.pfhs_log_attempts(p_token text, p_items jsonb)
returns integer
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid; n integer;
begin
  pid := private.pfhs_auth(p_token);
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) > 500 then
    raise exception 'bad payload' using errcode = '22023';
  end if;
  insert into public.attempts(profile_id, hub, kind, item_id, unit, chosen, correct, seconds)
  select pid, i->>'hub', i->>'kind', i->>'item', i->>'unit',
         nullif(i->>'chosen', '')::integer, nullif(i->>'correct', '')::boolean, nullif(i->>'seconds', '')::integer
    from jsonb_array_elements(p_items) i
   where i ? 'hub' and i ? 'kind' and i ? 'item';
  get diagnostics n = row_count;
  return n;
end;
$$;

-- Only the website-facing functions are callable from the browser ------------------------------------

revoke all on function public.pfhs_list_profiles() from public;
revoke all on function public.pfhs_create_profile(text, text, text) from public;
revoke all on function public.pfhs_login(uuid, text) from public;
revoke all on function public.pfhs_logout(text) from public;
revoke all on function public.pfhs_get_all(text) from public;
revoke all on function public.pfhs_set_many(text, jsonb) from public;
revoke all on function public.pfhs_delete_key(text, text) from public;
revoke all on function public.pfhs_log_attempts(text, jsonb) from public;

grant execute on function public.pfhs_list_profiles() to anon, authenticated;
grant execute on function public.pfhs_create_profile(text, text, text) to anon, authenticated;
grant execute on function public.pfhs_login(uuid, text) to anon, authenticated;
grant execute on function public.pfhs_logout(text) to anon, authenticated;
grant execute on function public.pfhs_get_all(text) to anon, authenticated;
grant execute on function public.pfhs_set_many(text, jsonb) to anon, authenticated;
grant execute on function public.pfhs_delete_key(text, text) to anon, authenticated;
grant execute on function public.pfhs_log_attempts(text, jsonb) to anon, authenticated;

-- Family code (replace the word below with your own, then run). Kids need it once, to create their profile.
-- insert into public.app_settings(key, value) values ('family_code', 'YOUR-WORD-HERE')
--   on conflict (key) do update set value = excluded.value;
