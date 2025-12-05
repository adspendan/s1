import { useState, useEffect } from "react"
import { useUser } from "@clerk/nextjs"
import { SmartAuditHistoryPoint, getSmartAuditHistory } from "@/services/smartAuditReportService"

export function useSmartAuditHistory() {
    const { user } = useUser()
    const [history, setHistory] = useState<SmartAuditHistoryPoint[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchHistory() {
            if (!user?.id) return
            try {
                const data = await getSmartAuditHistory(user.id)
                setHistory(data)
            } catch (error) {
                console.error("Failed to fetch audit history", error)
            } finally {
                setLoading(false)
            }
        }

        if (user) {
            fetchHistory()
        } else {
            setLoading(false)
        }
    }, [user])

    return { history, loading }
}
