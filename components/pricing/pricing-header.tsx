"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Switch } from "@/components/ui/switch"
import { pricingData } from "@/data/pricing"

interface PricingHeaderProps {
    isAnnual: boolean
    onToggle: (checked: boolean) => void
}

export function PricingHeader({ isAnnual, onToggle }: PricingHeaderProps) {
    const { header } = pricingData

    return (
        <section className="relative pt-32 pb-20 text-center px-4 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#C1FF72] rounded-full blur-[150px] opacity-10 pointer-events-none" />

            <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C1FF72]/10 border border-[#C1FF72]/20 text-[#C1FF72] text-[10px] font-bold uppercase tracking-widest mb-6 shadow-[0_0_10px_rgba(193,255,114,0.1)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C1FF72] animate-pulse" />
                    {header.eyebrow}
                </div>

                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-5xl mx-auto leading-tight">
                    Pricing That Scales With <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#C1FF72] to-white animate-gradient-x">
                        Your Ad Spend
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
                    {header.subheadline}
                </p>

                <p className="text-sm text-gray-500 mb-12 font-mono uppercase tracking-wider">
                    {header.keyline}
                </p>

                <div className="inline-flex items-center justify-center gap-6 bg-white/5 p-2 pr-6 rounded-full border border-white/10 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold transition-colors px-4 py-2 rounded-full ${!isAnnual ? "bg-white/10 text-white" : "text-gray-500 hover:text-white"}`}>
                            Monthly
                        </span>
                        <Switch
                            checked={isAnnual}
                            onCheckedChange={onToggle}
                            className="data-[state=checked]:bg-[#C1FF72] border border-white/10"
                        />
                        <span className={`text-sm font-bold transition-colors ${isAnnual ? "text-white" : "text-gray-500"}`}>
                            Annual
                        </span>
                    </div>
                    <span className="text-[#C1FF72] text-[10px] font-bold uppercase tracking-wider bg-[#C1FF72]/10 px-2 py-1 rounded-full border border-[#C1FF72]/20 shadow-[0_0_10px_rgba(193,255,114,0.2)]">
                        Save 15%
                    </span>
                </div>
            </ScrollReveal>
        </section>
    )
}
