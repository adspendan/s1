-- Create the tool_runs table
create table public.tool_runs (
  id uuid default gen_random_uuid() primary key,
  user_id text not null, -- Clerk User ID
  tool text not null,
  label text not null,
  status text not null check (status in ('completed', 'running', 'failed')),
  summary text,
  metadata jsonb default '{}'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.tool_runs enable row level security;

-- Create a policy that allows users to see only their own runs
create policy "Users can view their own tool runs"
  on public.tool_runs for select
  using (auth.uid()::text = user_id); -- Note: This assumes you are syncing Clerk IDs to Supabase Auth, OR using a custom claim. 
  -- FOR NOW, since we are using Clerk client-side and just sending the ID, we might need a more open policy or a service role for the backend if we aren't syncing auth yet.
  -- To keep it simple for this "frontend-first" integration where we trust the client (mocking the backend logic):
  
  -- SIMPLIFIED POLICY FOR DEMO (Caution: In prod, use proper Auth sync)
  -- We will actually allow insert/select based on the user_id column matching the query.
  -- But since RLS relies on `auth.uid()`, and we might not have a Supabase session for the Clerk user yet,
  -- we will temporarily disable RLS or create a permissive policy for this specific table if we are just using it as a data store.
  
  -- BETTER APPROACH for this specific prompt context (Frontend integration):
  -- We will assume the client sends the user_id. 
  -- We will create a policy that allows all operations for now, assuming the API layer would handle auth in a real app.
  
create policy "Enable read access for all users"
  on public.tool_runs for select
  using (true);

create policy "Enable insert access for all users"
  on public.tool_runs for insert
  with check (true);
