"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Wallet, PauseCircle, TrendingUp, EyeOff, ShieldCheck, Scale } from "lucide-react"

export function AutonomousActions() {
    const actions = [
        {
            icon: <Wallet className="w-6 h-6 text-primary" />,
            title: "Budget Reallocation",
            description: "Automatically moves spend to high-performing campaigns.",
        },
        {
            icon: <PauseCircle className="w-6 h-6 text-red-400" />,
            title: "Loss Prevention",
            description: "Pauses losing ads instantly to stop budget bleeding.",
        },
        {
            icon: <TrendingUp className="w-6 h-6 text-primary" />,
            title: "Predictive Scaling",
            description: "Scales winners based on forecasted performance.",
        },
        {
            icon: <EyeOff className="w-6 h-6 text-orange-400" />,
            title: "Fatigue Detection",
            description: "Identifies creative fatigue before CPA spikes.",
        },
        {
            icon: <ShieldCheck className="w-6 h-6 text-primary" />,
            title: "Spend Protection",
            description: "Hard stops prevent runaway spending anomalies.",
        },
        {
            icon: <Scale className="w-6 h-6 text-primary" />,
            title: "Cross-Platform Balance",
            description: "Balances spend between Meta, Google, and TikTok.",
        },
    ]

    return (
        <section className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">What the Operator Does for You</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {actions.map((action, index) => (
                        <ScrollReveal key={action.title} delay={index * 100}>
                            <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group h-full">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                                        {action.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold mb-2">{action.title}</h3>
                                        <p className="text-sm text-gray-400 leading-relaxed">{action.description}</p>
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
