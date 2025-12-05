"use client"

import { useState, useEffect } from "react"
import { TrendingUp, DollarSign, Users, Target, Activity, Zap, Search, Command } from "lucide-react"
import { Area, AreaChart, ResponsiveContainer } from "recharts"
import { cn } from "@/lib/utils"
import { OperatorTerminal } from "@/components/ui/operator-terminal"
import { OperatorPulse } from "@/components/ui/operator-pulse"
import { Logo } from "@/components/logo"
import { useRef } from "react"
import { useInView } from "framer-motion"

const chartData = [
    { value: 40 }, { value: 35 }, { value: 45 }, { value: 55 }, { value: 50 }, { value: 60 }, { value: 65 }, { value: 55 }, { value: 70 }, { value: 75 }, { value: 85 }, { value: 80 }
]

const liveActions = [
    { type: "optimize", message: "Increased budget on 'Scale_Winners_v2'", time: "Just now" },
    { type: "guard", message: "Paused 'Creative_04' (High CPA)", time: "2m ago" },
    { type: "detect", message: "Detected new audience opportunity", time: "5m ago" },
    { type: "scale", message: "Raised bid cap on Ad Set #12", time: "12m ago" },
]

export function HeroPreviewDashboard() {
    const [activeNode, setActiveNode] = useState<string | null>(null)
    const [scrollingLog, setScrollingLog] = useState(liveActions)
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, margin: "-100px" })

    // Simulate live log effect
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollingLog(prev => {
                const [first, ...rest] = prev
                return [...rest, first]
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="w-full aspect-[16/9] bg-[#0A0A0A]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 flex flex-col gap-4 shadow-2xl relative overflow-hidden group hover:shadow-[0_0_60px_-15px_rgba(193,255,114,0.2)] transition-all duration-500">
            {/* Header: Logo & Status */}
            <div className="flex items-center justify-between relative z-10 border-b border-white/5 pb-4">
                <div className="flex items-center gap-4">
                    {/* Logo Area */}
                    <div className="flex items-center gap-2">
                        <Logo width={32} height={32} className="rounded-md" />
                        <div className="hidden sm:block">
                            <div className="text-sm font-bold text-white leading-none">Scaletio</div>
                            <div className="text-[10px] text-gray-500 font-mono">Workspace: Main</div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="h-6 w-px bg-white/10 mx-2 hidden sm:block" />

                    {/* Plan Badge */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[10px] text-gray-400">
                        <Command className="w-3 h-3" />
                        <span>Autonomous Core</span>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <div className="relative">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                        </div>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Operator Online</span>
                    </div>
                </div>
            </div>

            {/* TOP ROW: 5 KPIs */}
            <div className="grid grid-cols-5 gap-3 relative z-10">
                {[
                    { label: "ROAS", value: "4.2x", change: "+12%", icon: TrendingUp },
                    { label: "Spend", value: "$24.5k", change: "On pace", icon: DollarSign },
                    { label: "Conv.", value: "1,247", change: "+8%", icon: Users },
                    { label: "CPA", value: "$19.63", change: "-15%", icon: Target },
                    { label: "CAC", value: "$24.10", change: "-5%", icon: Activity },
                ].map((kpi, i) => (
                    <div
                        key={i}
                        className="bg-secondary/50 border border-border rounded-xl p-3 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group/card cursor-default relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity" />
                        <div className="flex items-start justify-between mb-2 relative">
                            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">{kpi.label}</span>
                            <kpi.icon className="w-3 h-3 text-muted-foreground group-hover/card:text-primary transition-colors" />
                        </div>
                        <div className="text-lg font-bold text-white mb-1 relative">{kpi.value}</div>
                        <div className={cn(
                            "text-[10px] relative",
                            kpi.change.startsWith("+") || kpi.change === "On pace" || kpi.change.startsWith("-")
                                ? "text-primary"
                                : "text-gray-500"
                        )}>{kpi.change}</div>
                    </div>
                ))}
            </div>

            {/* MIDDLE: Active Operator Loop & Chart */}
            <div className="flex-1 grid grid-cols-3 gap-4 relative z-10 min-h-0">
                {/* Left: Operator Loop Visualization */}
                {/* Left: Operator Loop Visualization */}
                <div
                    ref={containerRef}
                    className={cn(
                        "col-span-2 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-center relative group/loop transition-all duration-1000",
                        isInView ? "shadow-[0_0_50px_-20px_rgba(193,255,114,0.3)] border-primary/20" : ""
                    )}
                >
                    <OperatorPulse isActive={isInView} />
                </div>

                {/* Right: Live Operator Terminal */}
                <div className="col-span-1 h-full min-h-[200px]">
                    <OperatorTerminal />
                </div>
            </div>

            {/* BOTTOM: Micro Chart */}
            <div className="h-20 bg-white/5 border border-white/5 rounded-xl px-4 py-2 relative z-20 overflow-hidden group/chart flex items-center justify-between">
                <div className="flex flex-col justify-center">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Total Revenue</div>
                    <div className="text-xl font-bold text-white">$142,893</div>
                </div>
                <div className="w-2/3 h-full pt-2">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={chartData}>
                            <defs>
                                <linearGradient id="heroChartGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" className="text-primary" stopOpacity={0.2} />
                                    <stop offset="100%" stopColor="currentColor" className="text-primary" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <Area
                                type="monotone"
                                dataKey="value"
                                stroke="currentColor" className="text-primary"
                                strokeWidth={2}
                                fill="url(#heroChartGradient)"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}
