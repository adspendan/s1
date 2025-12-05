"use client"

import { useState } from "react"
import { ScrollReveal } from "@/components/scroll-animations"
import { Search, Layers, BarChart3, PieChart, AlertTriangle, Users, Terminal, Lock } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ToolsDirectory() {
    const [filter, setFilter] = useState("All")

    const categories = [
        "All",
        "Diagnostics",
        "Creative Tools",
        "Forecasting",
        "Optimization",
        "Technical",
        "Coming Soon",
    ]

    const allTools = [
        {
            title: "Smart Audit",
            category: "Diagnostics",
            icon: <Search className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Anomaly Detector",
            category: "Diagnostics",
            icon: <AlertTriangle className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Attribution Truth Analyzer",
            category: "Diagnostics",
            icon: <BarChart3 className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Creative Intelligence Analyzer",
            category: "Creative Tools",
            icon: <Layers className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Fatigue Predictor",
            category: "Creative Tools",
            icon: <Layers className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Predictive Scaling Engine",
            category: "Forecasting",
            icon: <PieChart className="w-5 h-5" />,
            status: "Preview",
        },
        {
            title: "Spend Split Optimizer",
            category: "Forecasting",
            icon: <PieChart className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Audience Overlap Visualizer",
            category: "Optimization",
            icon: <Users className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Scaletio CLI",
            category: "Technical",
            icon: <Terminal className="w-5 h-5" />,
            status: "Live",
        },
        {
            title: "Autonomous Creative Generator",
            category: "Coming Soon",
            icon: <Lock className="w-5 h-5" />,
            status: "Locked",
        },
        {
            title: "Real-Time Operator Feed",
            category: "Coming Soon",
            icon: <Lock className="w-5 h-5" />,
            status: "Locked",
        },
    ]

    const filteredTools = filter === "All" ? allTools : allTools.filter((tool) => tool.category === filter)

    return (
        <section className="py-20 bg-background/20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">All Scaletio Tools</h2>
                        <p className="text-gray-400">Explore the full suite of operator-grade diagnostics, analyzers, and utilities.</p>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {filteredTools.map((tool, index) => (
                            <div
                                key={tool.title}
                                className={`p-6 rounded-xl border transition-all ${tool.status === "Locked"
                                    ? "bg-white/5 border-white/5 opacity-50 cursor-not-allowed"
                                    : "bg-card/40 border-border hover:border-primary/30 hover:bg-secondary/5 cursor-pointer group"
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className={`p-2 rounded-lg ${tool.status === "Locked" ? "bg-secondary/50" : "bg-primary/10 text-primary"}`}>
                                        {tool.icon}
                                    </div>
                                    {tool.status === "Locked" && <Badge variant="secondary" className="bg-white/10 text-gray-400">Coming Soon</Badge>}
                                    {tool.status === "Preview" && <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30">Preview</Badge>}
                                </div>
                                <h3 className={`font-bold mb-1 ${tool.status !== "Locked" && "group-hover:text-primary transition-colors"}`}>
                                    {tool.title}
                                </h3>
                                <p className="text-xs text-gray-500">{tool.category}</p>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
