"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Activity, Brain, Zap, RefreshCw } from "lucide-react"

export function OperatorLoop() {
    const steps = [
        {
            icon: <Activity className="w-8 h-8 text-primary" />,
            title: "1. Signal Intake",
            description: "Scans platform signals (spend, CTR, CPA, fatigue, pacing) in real-time.",
        },
        {
            icon: <Brain className="w-8 h-8 text-primary" />,
            title: "2. Outcome Prediction",
            description: "Predicts which actions will increase performance based on historical learning.",
        },
        {
            icon: <Zap className="w-8 h-8 text-primary" />,
            title: "3. Autonomous Action",
            description: "Adjusts budgets, scales winners, cuts losers, reallocates spend, deploys creatives.",
        },
        {
            icon: <RefreshCw className="w-8 h-8 text-primary" />,
            title: "4. Continuous Learning",
            description: "Learns from each action and improves future decisions automatically.",
        },
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">How Scaletio Thinks + Acts</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Your operator watches every signal, predicts outcomes, and takes action instantly.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0" />

                    {/* Connecting Line (Mobile) */}
                    <div className="md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0" />

                    {steps.map((step, index) => (
                        <ScrollReveal key={step.title} delay={index * 100}>
                            <div className="relative flex flex-col items-center text-center group">
                                <div className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-8 relative z-10 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(127,0,255,0.2)]">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
