"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { CheckCircle2 } from "lucide-react"

export function BillingExplainer() {
    return (
        <section className="mb-32 px-4">
            <ScrollReveal>
                <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">How Billing Works</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-bold mb-6 text-[#C1FF72]">The Structure</h3>
                            <ul className="space-y-4">
                                {[
                                    "Base operator fee (fixed monthly)",
                                    "% of managed spend (variable)",
                                    "Monthly billing based on real spend",
                                    "Spend caps & guardrails",
                                    "Choose your autonomy levels"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#C1FF72] mt-2 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-6 text-white">The Transparency</h3>
                            <ul className="space-y-4">
                                {[
                                    "Billing transparency dashboard",
                                    "Spend safety & hard limits",
                                    "Prediction of next billing cycle",
                                    "All examples are ranges (not commitments)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-gray-500 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </ScrollReveal>
        </section>
    )
}
