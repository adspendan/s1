"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Search, Brain, Zap, RefreshCw } from "lucide-react"

export function OperatorLoopRedesigned() {
    const stages = [
        {
            icon: <Search className="w-8 h-8 text-primary" />,
            title: "1. Audit",
            description: "Reads real-time performance signals across all platforms.",
        },
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "2. Predict",
            description: "Forecasts outcomes using historical learning + cross-platform intelligence.",
        },
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "3. Act",
            description: "Executes optimizations instantly — no alerts or approvals needed.",
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-primary" />,
            title: "4. Learn",
            description: "Improves its decision-making with every cycle.",
        },
    ]

    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">The Autonomous Operator Loop</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Scaletio runs continuous AI cycles that analyze → predict → act → learn.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-6 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0" />

                    {stages.map((stage, index) => (
                        <ScrollReveal key={stage.title} delay={index * 100}>
                            <div className="relative group">
                                <div className="w-24 h-24 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-6 relative z-10 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(127,0,255,0.2)] transition-all duration-300">
                                    {stage.icon}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-xl font-bold mb-3">{stage.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{stage.description}</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
