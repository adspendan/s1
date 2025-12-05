"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Activity } from "lucide-react"

export function CycleFrequency() {
    const tiers = [
        {
            title: "Autonomous Core",
            frequency: "Every 6 hours",
            pulseSpeed: "animate-pulse-slow",
        },
        {
            title: "Autonomous Pro",
            frequency: "Every 1–2 hours",
            pulseSpeed: "animate-pulse",
        },
        {
            title: "Operator+ Enterprise",
            frequency: "Continuous real-time",
            pulseSpeed: "animate-pulse-fast",
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Operator Cycles That Never Sleep</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {tiers.map((tier, index) => (
                        <ScrollReveal key={tier.title} delay={index * 100}>
                            <div className="glass-effect p-8 rounded-2xl border border-border hover:border-primary/30 transition-all group text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <h3 className="text-lg font-medium text-gray-400 mb-4">{tier.title}</h3>
                                <div className="flex items-center justify-center gap-3 mb-2">
                                    <Activity className={`w-6 h-6 text-primary ${tier.pulseSpeed}`} />
                                    <span className="text-2xl md:text-3xl font-bold text-white">{tier.frequency}</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
