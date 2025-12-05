"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Zap, Shield, BarChart3, Layers, Activity, Network } from "lucide-react"

export function OperatorBrain() {
    const modules = [
        {
            title: "Optimization Engine",
            description: "Core logic for bid adjustments, budget allocation, and pausing.",
            icon: <Zap className="w-6 h-6 text-[#C1FF72]" />,
        },
        {
            title: "Waste Detection",
            description: "Identifies bleeding ad sets and inefficient spend instantly.",
            icon: <Shield className="w-6 h-6 text-[#C1FF72]" />,
        },
        {
            title: "Creative Intelligence Core",
            description: "Analyzes visual elements, copy, and fatigue patterns.",
            icon: <BarChart3 className="w-6 h-6 text-[#C1FF72]" />,
        },
        {
            title: "Scaling Engine",
            description: "Detects winners and aggressively scales budget vertically/horizontally.",
            icon: <Layers className="w-6 h-6 text-[#C1FF72]" />,
        },
        {
            title: "Signal Aggregator",
            description: "Ingests data from pixels, APIs, and offline conversions.",
            icon: <Activity className="w-6 h-6 text-[#C1FF72]" />,
        },
        {
            title: "Multi-Platform Routing",
            description: "Moves budget between Meta, TikTok, and Google based on ROAS.",
            icon: <Network className="w-6 h-6 text-[#C1FF72]" />,
        },
    ]

    return (
        <section className="mb-32">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The <span className="text-[#C1FF72]">Operator Brain™</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A look under the hood of the autonomous infrastructure.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {modules.map((module, index) => (
                    <ScrollReveal key={index} delay={index * 50}>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C1FF72]/30 transition-all group h-full">
                            <div className="mb-4 p-3 bg-black/40 rounded-xl w-fit group-hover:bg-[#C1FF72]/10 transition-colors">
                                {module.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{module.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{module.description}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
