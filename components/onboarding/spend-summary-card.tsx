"use client"

import { Input } from "@/components/ui/input"
import { SpendSummary } from "@/lib/mock-services"

interface SpendSummaryCardProps {
    spendData: SpendSummary | null
    manualOverride: number | undefined
    onOverrideChange: (value: number) => void
    platforms: { [key: string]: boolean }
}

export function SpendSummaryCard({ spendData, manualOverride, onOverrideChange, platforms }: SpendSummaryCardProps) {
    if (!spendData) return null

    const calculateTotal = () => {
        let total = 0
        if (platforms.meta) total += spendData.platforms.meta.last30
        if (platforms.tiktok) total += spendData.platforms.tiktok.last30
        if (platforms.google) total += spendData.platforms.google.last30
        if (platforms.youtube) total += spendData.platforms.youtube.last30
        return total
    }

    const detectedTotal = calculateTotal()
    const displayTotal = manualOverride !== undefined ? manualOverride : detectedTotal

    return (
        <div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative z-10 text-center mb-10">
                <div className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider">Estimated Monthly Spend</div>
                <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
                    ${displayTotal.toLocaleString()}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1FF72]" />
                    Based on last 30 days data
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 mb-10">
                {Object.entries(spendData.platforms).map(([key, data]) => {
                    const isConnected = platforms[key as keyof typeof platforms]
                    if (!isConnected) return null
                    return (
                        <div key={key} className="p-4 bg-white/5 border border-white/5 rounded-xl flex justify-between items-center hover:bg-white/10 transition-colors">
                            <span className="capitalize text-gray-400 font-medium">{key}</span>
                            <span className="font-mono font-bold text-white">${data.last30.toLocaleString()}</span>
                        </div>
                    )
                })}
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10">
                <label className="block text-sm font-medium text-gray-400 mb-3">Override Estimate (Optional)</label>
                <div className="flex gap-4">
                    <Input
                        type="number"
                        placeholder="Enter custom amount..."
                        className="bg-black/40 border-white/10 text-white h-12 text-lg focus:border-[#C1FF72]/50 focus:ring-[#C1FF72]/20 transition-all"
                        onChange={(e) => onOverrideChange(Number(e.target.value))}
                    />
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    Use this if your connected accounts don't reflect your full monthly budget.
                </p>
            </div>
        </div>
    )
}
