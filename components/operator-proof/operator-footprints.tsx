"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Activity, Zap, Target, TrendingUp, Clock } from "lucide-react"

export function OperatorFootprints() {
    const logs = [
        {
            type: "Budget Shift",
            icon: Activity,
            message: "Shifted +$812 into TOF Expansion winners.",
            meta: "Executed: 09:14 • Platform: Meta"
        },
        {
            type: "Creative Rotation",
            icon: Zap,
            message: "Paused creative as CPA breached safety band.",
            meta: "Executed: 09:42 • Platform: TikTok"
        },
        {
            type: "Pacing Update",
            icon: TrendingUp,
            message: "Increased pacing on high-ROAS Google PMAX.",
            meta: "Executed: 10:05 • Platform: Google"
        },
        {
            type: "Audience Adjustment",
            icon: Target,
            message: "Moved TikTok spend from fatigued lookalike to broad.",
            meta: "Executed: 10:23 • Platform: TikTok"
        }
    ]

    return (
        <section id="operator-footprints" className="py-20 relative bg-black/20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Operator Footprints</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A glimpse into the adjustments your operator makes every day — redacted for privacy, but real.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                    {logs.map((log, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                                <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                    <log.icon className="w-4 h-4" />
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-[10px] font-medium uppercase tracking-wider text-primary/80 bg-primary/5 px-2 py-0.5 rounded">
                                            {log.type}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-white/90">
                                        {log.message}
                                    </p>
                                    <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                        <Clock className="w-3 h-3" />
                                        {log.meta}
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
