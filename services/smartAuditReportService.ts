import { getSupabaseClient } from "@/lib/supabase"
import type { SmartAuditInput, SmartAuditOutput } from "./smartAuditEngine"

const supabase = getSupabaseClient()

/*
-- SUPABASE SCHEMA --

create table if not exists public.smart_audit_reports (
  id uuid primary key default gen_random_uuid(),
  user_id text,
  email text not null,
  input jsonb not null,
  output jsonb not null,
  pdf_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.email_events (
  id uuid primary key default gen_random_uuid(),
  report_id uuid not null references public.smart_audit_reports (id) on delete cascade,
  type text not null,
  provider text,
  status text not null default 'queued',
  error_message text,
  created_at timestamptz not null default now()
);

create index if not exists smart_audit_reports_user_id_idx
  on public.smart_audit_reports (user_id, created_at desc);

create index if not exists email_events_report_id_idx
  on public.email_events (report_id, created_at desc);
*/

export async function saveSmartAuditReport(params: {
  userId?: string | null;
  email: string;
  input: SmartAuditInput;
  output: SmartAuditOutput;
}): Promise<{ reportId: string }> {
  const { userId, email, input, output } = params;

  // Ensure we use the client-side supabase instance if available, 
  // or the one imported from lib. 
  // Note: In a real app, you might want to use a server-side client for RLS bypass if needed,
  // but for now we assume the user has permission to insert their own reports.

  const { data, error } = await supabase
    .from("smart_audit_reports")
    .insert({
      user_id: userId ?? null,
      email,
      input,
      output,
      health_score: output.healthScore,
      waste_low: output.wasteLow,
      waste_high: output.wasteHigh,
      roas_lift_low: output.roasLiftLow,
      roas_lift_high: output.roasLiftHigh,
    })
    .select("id")
    .single();

  if (error) {
    console.error("Error saving smart audit report", error);
    throw error;
  }

  return { reportId: data.id as string };
}

export async function requestAuditEmail(reportId: string): Promise<void> {
  const { error } = await supabase.from("email_events").insert({
    report_id: reportId,
    type: "audit_report",
    provider: null,
    status: "queued",
  });

  if (error) {
    console.error("Error queueing audit email", error);
    throw error;
  }

  // TODO: In the future, trigger a background worker or job to:
  // 1) Generate a PDF for this report (server-side function generateAuditPdf).
  // 2) Send an email via Resend/Postmark.
  // 3) Update email_events.status and smart_audit_reports.pdf_url.
}

export interface SmartAuditHistoryPoint {
  id: string;
  createdAt: string;
  healthScore: number;
  wasteLow: number;
  wasteHigh: number;
  roasLiftLow: number;
  roasLiftHigh: number;
}

export async function getSmartAuditHistory(
  userId: string,
  limit = 20
): Promise<SmartAuditHistoryPoint[]> {
  const { data, error } = await supabase
    .from("smart_audit_reports")
    .select(
      `
        id,
        created_at,
        health_score,
        waste_low,
        waste_high,
        roas_lift_low,
        roas_lift_high,
        output
      `
    )
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(limit);

  if (error) {
    console.error("Error fetching smart audit history", error);
    return [];
  }

  return (data ?? []).map((row: any) => {
    const out = row.output ?? {};
    return {
      id: row.id as string,
      createdAt: row.created_at as string,
      healthScore: row.health_score ?? out.healthScore ?? 0,
      wasteLow: row.waste_low ?? out.wasteLow ?? 0,
      wasteHigh: row.waste_high ?? out.wasteHigh ?? 0,
      roasLiftLow: row.roas_lift_low ?? out.roasLiftLow ?? 0,
      roasLiftHigh: row.roas_lift_high ?? out.roasLiftHigh ?? 0,
    };
  });
}
