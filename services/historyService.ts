import { ToolRun } from "@/types/history"
import { getSupabaseClient } from "@/lib/supabase"

const supabase = getSupabaseClient()

export const historyService = {
    async getRecentToolRuns(userId: string): Promise<ToolRun[]> {
        const { data, error } = await supabase
            .from("tool_runs")
            .select("*")
            .eq("user_id", userId)
            .order("created_at", { ascending: false })
            .limit(20)

        if (error) {
            console.error("Error fetching history:", error)
            return []
        }

        return data.map((row: any) => ({
            id: row.id,
            userId: row.user_id,
            tool: row.tool,
            label: row.label,
            createdAt: row.created_at,
            status: row.status,
            summary: row.summary,
            metadata: row.metadata
        }))
    },

    async logToolRun(run: Omit<ToolRun, "id" | "createdAt">): Promise<void> {
        const { error } = await supabase
            .from("tool_runs")
            .insert({
                user_id: run.userId,
                tool: run.tool,
                label: run.label,
                status: run.status,
                summary: run.summary,
                metadata: run.metadata
            })

        if (error) {
            console.error("Error logging tool run:", error)
            throw error
        }
    }
}
