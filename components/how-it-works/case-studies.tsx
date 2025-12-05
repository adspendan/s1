"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { AlertOctagon, TrendingUp, Shuffle } from "lucide-react"

export function CaseStudies() {
    const cases = [
        {
            icon: <AlertOctagon className="w-6 h-6 text-red-400" />,
            title: "CPA Spike Detected",
            result: "Operator pauses waste within minutes.",
            color: "border-red-500/20 bg-red-500/5",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-primary" />,
            title: "New Creative Wins",
            result: "Operator shifts spend automatically.",
            color: "border-primary/20 bg-primary/5",
        },
        {
            icon: <Shuffle className="w-6 h-6 text-blue-400" />,
            title: "Platform Misfires",
            result: "Operator reallocates budget cross-platform.",
            color: "border-blue-500/20 bg-blue-500/5",
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What Autonomy Looks Like in Real Life</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {cases.map((item, index) => (
                        <ScrollReveal key={item.title} delay={index * 100}>
                            <div className={`p-8 rounded-2xl border ${item.color} backdrop-blur-sm h-full flex flex-col items-center text-center`}>
                                <div className="mb-4 p-3 rounded-full bg-white/5">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.result}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
