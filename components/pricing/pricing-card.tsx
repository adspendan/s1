"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export interface PricingPlan {
    name: string
    tagline: string
    baseFee: number | string
    percentage: string
    spendRange: string
    example: string
    features: string[]
    cta: string
    highlight: boolean
    popular?: boolean
    bestFor: string
}

interface PricingCardProps {
    plan: PricingPlan
    isAnnual: boolean
}

export function PricingCard({ plan, isAnnual }: PricingCardProps) {
    const displayFee = typeof plan.baseFee === 'number'
        ? (isAnnual ? Math.round(plan.baseFee * 0.85) : plan.baseFee)
        : plan.baseFee

    return (
        <SpotlightCard
            className={`flex flex-col h-full p-1 rounded-[32px] transition-all duration-500 group ${plan.highlight
                ? "bg-gradient-to-b from-[#C1FF72]/20 to-[#C1FF72]/0 shadow-[0_0_50px_rgba(193,255,114,0.1)]"
                : "bg-white/5 hover:bg-white/10"
                }`}
            spotlightColor={plan.highlight ? "rgba(193, 255, 114, 0.15)" : "rgba(255, 255, 255, 0.05)"}
        >
            <div className="flex flex-col h-full bg-[#050708]/90 backdrop-blur-xl rounded-[30px] p-8 border border-white/5 relative overflow-hidden">
                {/* Highlight Glow */}
                {plan.highlight && (
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#C1FF72] rounded-full blur-[80px] opacity-20 pointer-events-none" />
                )}

                {/* Header */}
                <div className="mb-8 relative z-10">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className={`text-2xl font-bold flex items-center gap-2 ${plan.highlight ? "text-white" : "text-gray-200"}`}>
                            {plan.name}
                        </h3>
                        {plan.popular && (
                            <span className="px-3 py-1 rounded-full bg-[#C1FF72] text-black text-[10px] font-bold uppercase tracking-wider shadow-[0_0_10px_rgba(193,255,114,0.4)]">
                                Most Popular
                            </span>
                        )}
                    </div>
                    <p className="text-sm text-gray-400 mb-8 leading-relaxed min-h-[40px]">{plan.tagline}</p>

                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {typeof displayFee === 'number' ? `$${displayFee}` : displayFee}
                        </span>
                        <span className="text-sm text-gray-500 font-medium ml-1">/ mo</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#C1FF72]/10 border border-[#C1FF72]/20">
                            <span className="text-[#C1FF72] font-bold text-lg leading-none">+ {plan.percentage}</span>
                        </div>
                        <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">of managed spend</span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${plan.highlight ? "bg-[#C1FF72]" : "bg-gray-500"}`} />
                        Spend Range: <span className="text-white font-medium">{plan.spendRange}</span>
                    </div>
                </div>

                {/* Example Callout */}
                <div className="mb-8 p-5 bg-white/5 rounded-2xl border border-white/5 text-xs text-gray-400 leading-relaxed relative group-hover:border-white/10 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-white font-bold block mb-1.5 flex items-center gap-2">
                        <span className="w-1 h-4 bg-[#C1FF72] rounded-full" />
                        Example Scenario
                    </span>
                    {plan.example}
                </div>

                {/* CTA */}
                <Button
                    className={`w-full py-7 text-lg font-bold mb-10 rounded-xl transition-all duration-300 ${plan.highlight
                        ? "bg-[#C1FF72] text-black hover:bg-[#b0ef5e] shadow-[0_0_20px_rgba(193,255,114,0.2)] hover:shadow-[0_0_30px_rgba(193,255,114,0.4)] hover:-translate-y-1"
                        : "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20"
                        }`}
                >
                    {plan.cta}
                </Button>

                {/* Features */}
                <div className="mb-8 flex-1">
                    <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Includes</div>
                    <ul className="space-y-4">
                        {plan.features.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-gray-300 group/item">
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-colors ${plan.highlight ? "bg-[#C1FF72]/10 text-[#C1FF72]" : "bg-white/5 text-gray-500 group-hover/item:text-white"}`}>
                                    <Check className="w-3 h-3" />
                                </div>
                                <span className="group-hover/item:text-white transition-colors">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Best For */}
                <div className="mt-auto pt-6 border-t border-white/5 text-xs text-gray-500 text-center font-medium">
                    Best for: <span className="text-gray-300">{plan.bestFor}</span>
                </div>
            </div>
        </SpotlightCard>
    )
}
