import { useUser } from "@clerk/nextjs";
import { historyService } from "@/services/historyService";
import type { ToolRun, ToolType } from "@/types/history";
import { useState, useCallback } from "react";

export function useToolHistory() {
    const { user } = useUser();
    const [history, setHistory] = useState<ToolRun[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchHistory = useCallback(async () => {
        if (!user) return [];
        setLoading(true);
        try {
            const data = await historyService.getRecentToolRuns(user.id);
            setHistory(data);
            return data;
        } finally {
            setLoading(false);
        }
    }, [user]);

    const recordToolRun = useCallback(async (input: {
        tool: ToolType;
        label: string;
        status?: ToolRun["status"];
        summary?: string;
        metadata?: Record<string, any>;
    }) => {
        if (!user) return;
        await historyService.logToolRun({
            userId: user.id,
            tool: input.tool,
            label: input.label,
            status: input.status ?? "completed",
            summary: input.summary,
            metadata: input.metadata,
        });
        // Refresh history after logging
        fetchHistory();
    }, [user, fetchHistory]);

    return { history, loading, fetchHistory, recordToolRun };
}
