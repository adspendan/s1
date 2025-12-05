"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { ArrowLeftRight, Users, AlertTriangle, RefreshCw } from "lucide-react"

export function AdvancedCapabilities() {
    const capabilities = [
        {
            icon: <ArrowLeftRight className="w-6 h-6 text-primary" />,
            title: "Cross-Platform Spend Reallocation",
            description: "Moves budget between platforms based on predicted ROI — no human required.",
        },
        {
            icon: <Users className="w-6 h-6 text-primary" />,
            title: "Audience Decay Detection",
            description: "Identifies audience fatigue early and triggers creative or targeting refreshes.",
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-primary" />,
            title: "Anomaly Detection + Auto-Correction",
            description: "Stops campaigns when spend spikes, CPAs break thresholds, or attribution anomalies occur.",
        },
        {
            icon: <RefreshCw className="w-6 h-6 text-primary" />,
            title: "Autonomous Creative Rotation",
            description: "Chooses which creatives to push, pause, or scale without human intervention.",
        },
    ]

    return (
        <section className="py-20 bg-white/5 border-y border-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Advanced Operator Capabilities</h2>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {capabilities.map((cap, index) => (
                        <ScrollReveal key={cap.title} delay={index * 100}>
                            <div className="p-6 rounded-xl bg-card/40 border border-border hover:border-primary/30 transition-all duration-300 h-full group">
                                <div className="mb-4 p-3 bg-secondary/50 rounded-lg w-fit group-hover:bg-primary/10 transition-colors">
                                    {cap.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3">{cap.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{cap.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
