"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { AlertOctagon, TrendingUp, Scissors } from "lucide-react"

export function MiniCaseExamples() {
    const examples = [
        {
            icon: <Scissors className="w-5 h-5 text-red-400" />,
            title: "Creative Fatigue Detected",
            action: "Operator cuts the ad + reallocates budget within 60 seconds.",
            color: "border-red-500/20 bg-red-500/5",
        },
        {
            icon: <AlertOctagon className="w-5 h-5 text-orange-400" />,
            title: "Sudden CPA Spike",
            action: "Operator pauses waste + protects budget automatically.",
            color: "border-orange-500/20 bg-orange-500/5",
        },
        {
            icon: <TrendingUp className="w-5 h-5 text-primary" />,
            title: "New Winner Identified",
            action: "Operator scales spend with a 4-hour forecast horizon.",
            color: "border-primary/20 bg-primary/5",
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">What Autonomy Looks Like in Action</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {examples.map((ex, index) => (
                        <ScrollReveal key={ex.title} delay={index * 100}>
                            <div className={`p-6 rounded-xl border ${ex.color} backdrop-blur-sm h-full`}>
                                <div className="flex items-center gap-3 mb-3">
                                    {ex.icon}
                                    <h3 className="font-bold">{ex.title}</h3>
                                </div>
                                <p className="text-sm text-gray-400">{ex.action}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
