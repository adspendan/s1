import { NextResponse } from "next/server"
import { requestAuditEmail } from "@/services/smartAuditReportService"
import { getSupabaseClient } from "@/lib/supabase"

const supabase = getSupabaseClient()

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { reportId } = body

        if (!reportId) {
            return NextResponse.json({ error: "Missing reportId" }, { status: 400 })
        }

        // Verify report exists
        const { data, error } = await supabase
            .from("smart_audit_reports")
            .select("id")
            .eq("id", reportId)
            .single()

        if (error || !data) {
            return NextResponse.json({ error: "Report not found" }, { status: 404 })
        }

        // Queue email
        await requestAuditEmail(reportId)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Error in /api/audit/request-email:", error)
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
    }
}
