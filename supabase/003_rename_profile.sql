-- Already applied to petersfhs-study. Lets a signed-in student change their display name after confirming their PIN.
create or replace function public.pfhs_rename_profile(p_token text, p_pin text, p_new_name text)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $$
declare pid uuid; rec public.profiles%rowtype; nn text;
begin
  pid := private.pfhs_auth(p_token);
  select * into rec from public.profiles where id = pid for update;
  if rec.locked_until is not null and rec.locked_until > now() then
    raise exception 'too many wrong PINs; try again in a few minutes' using errcode = '28000';
  end if;
  nn := btrim(coalesce(p_new_name, ''));
  if char_length(nn) < 1 or char_length(nn) > 40 then
    raise exception 'name must be 1 to 40 characters' using errcode = '22023';
  end if;
  if rec.pin_hash <> extensions.crypt(coalesce(p_pin, ''), rec.pin_hash) then
    update public.profiles
       set failed_attempts = case when failed_attempts >= 4 then 0 else failed_attempts + 1 end,
           locked_until = case when failed_attempts >= 4 then now() + interval '15 minutes' else null end
     where id = pid;
    raise exception 'wrong PIN' using errcode = '28000';
  end if;
  if exists (select 1 from public.profiles where name_key = lower(nn) and id <> pid) then
    raise exception 'that name is already taken' using errcode = '23505';
  end if;
  update public.profiles set name = nn, failed_attempts = 0, locked_until = null where id = pid;
  return jsonb_build_object('id', pid, 'name', nn);
end;
$$;

revoke all on function public.pfhs_rename_profile(text, text, text) from public;
grant execute on function public.pfhs_rename_profile(text, text, text) to anon, authenticated;
