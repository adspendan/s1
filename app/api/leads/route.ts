import { type NextRequest, NextResponse } from "next/server"
import { getSupabaseClient } from "@/lib/supabase"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, source, message, metadata } = body

    if (!email || !source) {
      return NextResponse.json({ success: false, error: "Email and source are required" }, { status: 400 })
    }

    const supabase = getSupabaseClient()

    const { data, error } = await supabase.from("leads").insert([
      {
        email,
        name: name || null,
        source,
        message: message || null,
        metadata: metadata || {},
      },
    ])

    if (error) {
      console.error("[v0] Lead submission error:", error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Lead submission exception:", error)
    return NextResponse.json({ success: false, error: "Failed to submit. Please try again." }, { status: 500 })
  }
}
