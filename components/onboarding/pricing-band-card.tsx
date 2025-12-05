"use client"

import { PricingResult } from "@/lib/pricing-calculator"
import { Check } from "lucide-react"

interface PricingBandCardProps {
    result: PricingResult
}

export function PricingBandCard({ result }: PricingBandCardProps) {
    if (result.recommendedPlan === "below_threshold") {
        return (
            <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8 text-center max-w-2xl mx-auto backdrop-blur-sm">
                <h3 className="text-xl font-bold text-red-400 mb-4">Spend Threshold Not Met</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                    You’re below our recommended spend range. Scaletio is designed for teams spending $10,000+/month in paid media. You can still join our waitlist or request a strategy call for when you’re ready.
                </p>
                <button className="text-white hover:text-red-400 transition-colors underline decoration-red-500/30 underline-offset-4">Request Strategy Call</button>
            </div>
        )
    }

    return (
        <div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-1 max-w-2xl mx-auto overflow-hidden shadow-2xl">
            {/* Glow Effect */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C1FF72] rounded-full blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-700" />

            <div className="relative bg-[#050708]/80 backdrop-blur-xl rounded-[22px] p-8 border border-white/5">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1FF72]/10 border border-[#C1FF72]/20 text-[#C1FF72] text-[10px] font-bold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(193,255,114,0.1)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C1FF72] animate-pulse" />
                        Recommended Configuration
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                        Autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 capitalize">{result.recommendedPlan}</span>
                    </h2>
                    <p className="text-gray-400 text-sm font-medium">
                        Based on <span className="text-white">${result.monthlySpendEstimate.toLocaleString()}</span> monthly spend
                    </p>
                </div>

                <div className="bg-white/5 rounded-2xl p-1 border border-white/10 mb-8">
                    <div className="bg-[#050708]/50 rounded-xl p-6 space-y-5">
                        <div className="flex justify-between items-center pb-5 border-b border-white/5">
                            <span className="text-gray-400 font-medium">Base Operator Fee</span>
                            <span className="font-mono text-lg text-white">
                                {typeof result.baseFee === 'number' ? `$${result.baseFee}/mo` : result.baseFee}
                            </span>
                        </div>
                        <div className="flex justify-between items-center pb-5 border-b border-white/5">
                            <span className="text-gray-400 font-medium">% of Managed Spend</span>
                            <span className="font-mono text-lg text-[#C1FF72] drop-shadow-[0_0_8px_rgba(193,255,114,0.3)]">
                                {result.percentRange[0]}% – {result.percentRange[1]}%
                            </span>
                        </div>
                        <div className="flex justify-between items-end pt-1">
                            <span className="text-white font-bold text-lg">Est. Total Cost</span>
                            <div className="text-right">
                                <div className="text-3xl font-bold text-white tracking-tight">
                                    ${result.totalBand[0].toLocaleString()} – ${result.totalBand[1].toLocaleString()}
                                </div>
                                <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Per Month</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-2 font-medium">
                        <Check className="w-3 h-3 text-[#C1FF72]" />
                        Dynamic pricing adjusts automatically with your spend
                    </p>
                </div>
            </div>
        </div>
    )
}
