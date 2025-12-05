"use client"

export interface LeadSubmission {
  email: string
  name?: string
  source: "early_access" | "smart_audit" | "framework" | "benchmarks" | "extension"
  message?: string
  metadata?: Record<string, any>
}

export async function submitLead(data: LeadSubmission) {
  try {
    const response = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()
    return result
  } catch (error) {
    console.error("[v0] Lead submission exception:", error)
    return { success: false, error: "Failed to submit. Please try again." }
  }
}
