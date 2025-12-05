"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useUser } from "@clerk/nextjs"
import { useToolHistory } from "@/hooks/useToolHistory"
import { useSmartAuditHistory } from "@/hooks/useSmartAuditHistory"
import { useEffect, useMemo } from "react"
import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Search, Layers, BarChart3, PieChart, ArrowRight, Clock, CheckCircle, XCircle, Loader2, TrendingUp, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { formatDistanceToNow, format } from "date-fns"
import { Logo } from "@/components/logo"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts'

export default function HubPage() {
    const { user } = useUser()
    const { history: toolHistory, loading: toolLoading, fetchHistory: fetchToolHistory } = useToolHistory()
    const { history: auditHistory, loading: auditLoading } = useSmartAuditHistory()

    useEffect(() => {
        fetchToolHistory()
    }, [fetchToolHistory])

    // Prepare chart data
    // Prepare chart data
    const chartData = useMemo(() => {
        return [...auditHistory].reverse().map(run => ({
            date: format(new Date(run.createdAt), "MMM d"),
            score: run.healthScore,
            waste: (run.wasteLow + run.wasteHigh) / 2
        }))
    }, [auditHistory])

    const latestAudit = auditHistory[0]
    const previousAudit = auditHistory[1]

    const scoreChange = latestAudit && previousAudit
        ? latestAudit.healthScore - previousAudit.healthScore
        : 0

    const quickLaunchTools = [
        {
            icon: <Search className="w-5 h-5 text-[#C1FF72]" />,
            title: "Smart Audit",
            link: "/labs/smart-audit",
        },
        {
            icon: <Layers className="w-5 h-5 text-purple-400" />,
            title: "Creative Analyzer",
            link: "/labs/creative-analyzer",
        },
        {
            icon: <BarChart3 className="w-5 h-5 text-blue-400" />,
            title: "Benchmarks",
            link: "/labs/benchmarks",
        },
        {
            icon: <PieChart className="w-5 h-5 text-orange-400" />,
            title: "Spend Optimizer",
            link: "/labs/spend-optimizer",
        },
    ]

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        {/* Welcome Header */}
                        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-4xl font-bold mb-2">
                                    Welcome back, <span className="text-[#C1FF72]">{user?.firstName || "Operator"}</span>
                                </h1>
                                <p className="text-gray-400 max-w-xl">
                                    Your autonomous ads operator workspace. Track your account health and execute optimization strategies.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Link href="/labs/smart-audit">
                                    <Button className="bg-[#C1FF72] text-black hover:bg-[#b0ef5e]">
                                        <Search className="w-4 h-4 mr-2" /> New Audit
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Smart Audit History Section */}
                        {auditHistory.length > 0 && (
                            <div className="mb-12">
                                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <TrendingUp className="w-5 h-5 text-[#C1FF72]" /> Account Health Trends
                                </h2>
                                <div className="grid lg:grid-cols-3 gap-6">
                                    {/* Health Trend Chart */}
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <h3 className="text-sm font-bold mb-4 text-gray-400">Health Score Over Time</h3>
                                        <div className="h-[200px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <LineChart data={chartData}>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                                    <XAxis
                                                        dataKey="date"
                                                        stroke="#666"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                    />
                                                    <YAxis
                                                        stroke="#666"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                        domain={[0, 100]}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                                                        itemStyle={{ color: '#fff' }}
                                                    />
                                                    <Line
                                                        type="monotone"
                                                        dataKey="score"
                                                        stroke="#C1FF72"
                                                        strokeWidth={3}
                                                        dot={{ fill: '#000', stroke: '#C1FF72', strokeWidth: 2, r: 4 }}
                                                        activeDot={{ r: 6, fill: '#C1FF72' }}
                                                    />
                                                </LineChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Waste Trend Chart */}
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                        <h3 className="text-sm font-bold mb-4 text-gray-400">Estimated Waste Over Time</h3>
                                        <div className="h-[200px] w-full">
                                            <ResponsiveContainer width="100%" height="100%">
                                                <AreaChart data={chartData}>
                                                    <defs>
                                                        <linearGradient id="colorWaste" x1="0" y1="0" x2="0" y2="1">
                                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                                        </linearGradient>
                                                    </defs>
                                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                                    <XAxis
                                                        dataKey="date"
                                                        stroke="#666"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                    />
                                                    <YAxis
                                                        stroke="#666"
                                                        fontSize={10}
                                                        tickLine={false}
                                                        axisLine={false}
                                                    />
                                                    <Tooltip
                                                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '8px' }}
                                                        itemStyle={{ color: '#fff' }}
                                                    />
                                                    <Area
                                                        type="monotone"
                                                        dataKey="waste"
                                                        stroke="#ef4444"
                                                        fillOpacity={1}
                                                        fill="url(#colorWaste)"
                                                    />
                                                </AreaChart>
                                            </ResponsiveContainer>
                                        </div>
                                    </div>

                                    {/* Comparison / Stats Card */}
                                    <div className="lg:col-span-1 space-y-6">
                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="text-sm text-gray-400 mb-1">Latest Health Score</div>
                                            <div className="flex items-end gap-3">
                                                <div className="text-5xl font-bold text-white">{latestAudit.healthScore}</div>
                                                {scoreChange !== 0 && (
                                                    <div className={`text-sm font-medium mb-1 ${scoreChange > 0 ? 'text-green-400' : 'text-red-400'}`}>
                                                        {scoreChange > 0 ? '+' : ''}{scoreChange} vs last
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center text-sm">
                                                <span className="text-gray-400">Waste Estimate</span>
                                                <span className="text-red-400 font-bold">
                                                    {latestAudit.wasteLow}% - {latestAudit.wasteHigh}%
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="text-sm text-gray-400 mb-1">Best Health Score</div>
                                            <div className="flex items-end gap-3">
                                                <div className="text-5xl font-bold text-[#C1FF72]">
                                                    {Math.max(...auditHistory.map(r => r.healthScore))}
                                                </div>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-400">
                                                All-time peak performance
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="grid lg:grid-cols-3 gap-8">
                            {/* Left Column: Status & Quick Launch */}
                            <div className="space-y-8">
                                {/* Status Card */}
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 mb-6">
                                        <Logo width={40} height={40} />
                                        <div>
                                            <h3 className="font-bold">Operator Status</h3>
                                            <p className="text-xs text-green-400 flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                                                System Online
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Total Audits</span>
                                            <span className="font-mono font-bold">{auditHistory.length}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-400">Last Active</span>
                                            <span className="font-mono text-gray-300">
                                                {toolHistory[0] ? formatDistanceToNow(new Date(toolHistory[0].createdAt)) + " ago" : "Never"}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/10">
                                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Suggested Action</p>
                                        <Link href="/labs/smart-audit">
                                            <Button className="w-full h-auto p-4 flex flex-col items-center gap-3 bg-white/5 border border-white/10 hover:bg-[#C1FF72]/10 hover:border-[#C1FF72] transition-all group">
                                                <div className="p-3 rounded-full bg-white/5 group-hover:bg-[#C1FF72] transition-colors">
                                                    <Search className="w-6 h-6 text-white group-hover:text-black" />
                                                </div>
                                                <span className="font-medium">Run Smart Audit</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Quick Launch */}
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/10">
                                    <h3 className="font-bold mb-4">Quick Launch</h3>
                                    <div className="grid grid-cols-2 gap-3">
                                        {quickLaunchTools.map((tool) => (
                                            <Link key={tool.title} href={tool.link}>
                                                <div className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all cursor-pointer h-full flex flex-col gap-2">
                                                    {tool.icon}
                                                    <span className="text-sm font-medium text-gray-300">{tool.title}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Recent Activity */}
                            <div className="lg:col-span-2">
                                <div className="p-6 rounded-2xl bg-black/40 border border-white/10 min-h-[500px]">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="font-bold text-xl">Recent Activity</h3>
                                        <Button variant="ghost" size="sm" onClick={() => fetchToolHistory()} disabled={toolLoading}>
                                            {toolLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
                                        </Button>
                                    </div>

                                    {toolHistory.length === 0 ? (
                                        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
                                            <Clock className="w-12 h-12 mb-4 opacity-20" />
                                            <p>No activity yet.</p>
                                            <p className="text-sm">Run a tool to see it here.</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-4">
                                            {toolHistory.map((run) => (
                                                <div
                                                    key={run.id}
                                                    className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors flex items-center justify-between group"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className={`p-2 rounded-lg ${run.status === "completed" ? "bg-green-500/10 text-green-400" :
                                                            run.status === "failed" ? "bg-red-500/10 text-red-400" :
                                                                "bg-blue-500/10 text-blue-400"
                                                            }`}>
                                                            {run.status === "completed" ? <CheckCircle className="w-5 h-5" /> :
                                                                run.status === "failed" ? <XCircle className="w-5 h-5" /> :
                                                                    <Loader2 className="w-5 h-5 animate-spin" />}
                                                        </div>
                                                        <div>
                                                            <h4 className="font-medium text-white group-hover:text-[#C1FF72] transition-colors">
                                                                {run.label}
                                                            </h4>
                                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                                <span className="capitalize">{run.tool.replace("_", " ")}</span>
                                                                <span>•</span>
                                                                <span>{formatDistanceToNow(new Date(run.createdAt))} ago</span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {run.summary && (
                                                        <div className="hidden md:block text-sm text-gray-400 max-w-xs truncate">
                                                            {run.summary}
                                                        </div>
                                                    )}

                                                    <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                                                        View
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </main>
            <Footer />
        </>
    )
}
