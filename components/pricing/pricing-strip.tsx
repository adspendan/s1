"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { pricingData } from "@/data/pricing"

export function PricingStrip() {
    return (
        <section className="mb-24 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
                {pricingData.strip.map((item, index) => (
                    <ScrollReveal key={index} delay={index * 100}>
                        <div className="group relative h-full">
                            <div className="absolute inset-0 bg-[#C1FF72] rounded-2xl blur-xl opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                            <div className="relative bg-[#050708]/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center h-full flex flex-col justify-center transition-all duration-300 group-hover:border-[#C1FF72]/30 group-hover:-translate-y-1">
                                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#C1FF72]/10 flex items-center justify-center text-[#C1FF72] font-bold text-xl border border-[#C1FF72]/20 shadow-[0_0_15px_rgba(193,255,114,0.1)] group-hover:scale-110 transition-transform duration-300">
                                    {index + 1}
                                </div>
                                <div className="text-white font-bold mb-3 text-lg group-hover:text-[#C1FF72] transition-colors">{item.title}</div>
                                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
