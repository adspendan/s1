"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { cn } from "@/lib/utils"

export function OperatorTelemetry() {
    const metrics = [
        {
            label: "Average Waste Eliminated",
            value: "27%",
            caption: "budget reclaimed from underperformers"
        },
        {
            label: "Daily Decisions Executed",
            value: "180+",
            caption: "discrete changes per day"
        },
        {
            label: "Creative Fatigue Prevented",
            value: "41%",
            caption: "ads rotated before CPA spikes"
        },
        {
            label: "Projected Lift Range",
            value: "+12–28%",
            caption: "estimated ROAS improvement"
        }
    ]

    return (
        <section id="operator-telemetry" className="py-20 relative">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-4xl md:text-5xl font-bold">Operator Telemetry</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Real optimizations. Real savings. Certain details redacted to protect active accounts.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {metrics.map((metric, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 flex flex-col h-full justify-between">
                                    <div className="text-[10px] uppercase tracking-wider text-gray-400 font-medium mb-4">
                                        {metric.label}
                                    </div>
                                    <div>
                                        <div className="text-4xl font-bold text-primary mb-2">
                                            {metric.value}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {metric.caption}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
