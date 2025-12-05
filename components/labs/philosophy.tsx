"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { Activity, Brain, Zap } from "lucide-react"

export function OperatorPhilosophy() {
    const cards = [
        {
            icon: <Activity className="w-6 h-6 text-primary" />,
            title: "Operator-Grade Diagnostics",
            description: "See issues before they cost you money. Our tools use the same diagnostic engine as the full operator.",
        },
        {
            icon: <Brain className="w-6 h-6 text-primary" />,
            title: "Predictive Intelligence",
            description: "Forecast outcomes with AI models trained on millions in ad data, not just historical reporting.",
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Autonomous Decision Systems",
            description: "Preview the actions Scaletio takes automatically on your behalf to optimize performance.",
        },
    ]

    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Scaletio Labs Exists</h2>
                            <p className="text-xl text-gray-400 leading-relaxed">
                                Scaletio is more than a platform — it’s an ecosystem. Labs gives advertisers free access to the same
                                intelligence that powers our Autonomous Ads Operator. Every tool reveals a different part of the
                                operator’s brain: pattern matching, fatigue detection, predictive modeling, anomaly protection, and
                                cross-platform allocation.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <ScrollReveal key={card.title} delay={index * 100}>
                            <SpotlightCard className="p-8 rounded-2xl bg-card/40 border border-border h-full">
                                <div className="mb-6 p-3 rounded-xl bg-white/5 w-fit">{card.icon}</div>
                                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{card.description}</p>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
