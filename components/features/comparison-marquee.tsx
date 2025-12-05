"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { CheckCircle2 } from "lucide-react"

export function ComparisonMarquee() {
    const items = [
        "24/7 Autonomous Actions",
        "Unified Cross-Platform Brain",
        "Operator-Level Intelligence",
        "Optimization Cycles That Never Sleep",
    ]

    return (
        <section className="py-12 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center">
                <ScrollReveal>
                    <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest text-sm">
                        What Makes Scaletio Different
                    </h2>
                </ScrollReveal>
            </div>

            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 py-4">
                    {[...items, ...items, ...items].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 text-2xl md:text-4xl font-bold text-white/80">
                            <CheckCircle2 className="w-8 h-8 text-primary" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
