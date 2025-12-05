"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Lock, CheckCircle2 } from "lucide-react"

export function SafetyGuardrails() {
    const rules = [
        "Daily spend caps per campaign/account",
        "Maximum scaling limits (e.g., 20% per day)",
        "Bidding constraints and ROAS floors",
        "Platform-specific optimization rules",
        "Emergency stop triggers for anomalies",
    ]

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-8 md:p-12 border border-primary/20 relative">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-3xl rounded-full -z-10" />

                    <ScrollReveal>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="flex-1">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6">
                                    <Lock className="w-4 h-4" />
                                    <span>Safe-Mode Guardrails</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">You Always Stay in Control</h2>
                                <p className="text-lg text-gray-400 mb-8">
                                    Scaletio never exceeds your boundaries. You define the limits, and the operator executes within them.
                                </p>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="space-y-4">
                                    {rules.map((rule, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border">
                                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                            <span className="font-medium">{rule}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
