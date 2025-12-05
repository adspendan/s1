"use client"

import { TrendingUp, DollarSign, Users, Target, Activity, Zap, Command } from "lucide-react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import { OperatorPulse } from "@/components/ui/operator-pulse"

export function MobileHeroDashboard() {
    return (
        <div className="w-full bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl relative overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-3">
                    <Logo width={28} height={28} className="rounded-md" />
                    <div>
                        <div className="text-sm font-bold text-white leading-none">Scaletio</div>
                        <div className="text-[10px] text-gray-500 font-mono mt-0.5">Mobile Command</div>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Online</span>
                </div>
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 gap-3">
                <div className="bg-secondary/50 border border-border rounded-xl p-3 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">ROAS</span>
                        <TrendingUp className="w-3 h-3 text-primary" />
                    </div>
                    <div className="text-xl font-bold text-white">4.2x</div>
                    <div className="text-[10px] text-primary mt-1">+12% this week</div>
                </div>
                <div className="bg-secondary/50 border border-border rounded-xl p-3 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">Spend</span>
                        <DollarSign className="w-3 h-3 text-gray-400" />
                    </div>
                    <div className="text-xl font-bold text-white">$24.5k</div>
                    <div className="text-[10px] text-gray-500 mt-1">On pace</div>
                </div>
            </div>

            {/* Active Operator Pulse */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col items-center justify-center min-h-[180px] relative overflow-hidden">
                <div className="absolute top-2 left-3 text-[10px] text-gray-500 uppercase tracking-wider">Live Optimization</div>
                <OperatorPulse isActive={true} />
            </div>

            {/* Recent Action Log */}
            <div className="bg-white/5 border border-white/5 rounded-xl p-3">
                <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-white">Recent Actions</span>
                </div>
                <div className="space-y-2">
                    <div className="flex items-start gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="text-gray-300">Increased budget on <span className="text-white">Scale_Winners_v2</span></span>
                    </div>
                    <div className="flex items-start gap-2 text-xs">
                        <div className="w-1 h-1 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span className="text-gray-300">Paused <span className="text-white">Creative_04</span> (High CPA)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
