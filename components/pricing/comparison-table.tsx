"use client"

import { Check, X, Minus } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-animations"
import { pricingData } from "@/data/pricing"

export function ComparisonTable() {
    return (
        <section className="mb-32 px-4">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Why Choose an <span className="text-[#C1FF72]">Operator</span>?
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        See how Scaletio compares to traditional methods.
                    </p>
                </div>
            </ScrollReveal>

            <div className="overflow-x-auto pb-4">
                <div className="min-w-[900px] max-w-6xl mx-auto bg-[#050708]/80 backdrop-blur-xl rounded-[32px] border border-white/10 p-1 relative">
                    {/* Glow */}
                    <div className="absolute top-0 left-3/4 w-64 h-64 bg-[#C1FF72] rounded-full blur-[120px] opacity-10 pointer-events-none" />

                    <div className="grid grid-cols-4 gap-px bg-white/5 rounded-[28px] overflow-hidden border border-white/5">
                        {/* Header Row */}
                        <div className="col-span-4 grid grid-cols-4 bg-white/5">
                            <div className="p-6 font-bold text-gray-500 uppercase text-xs tracking-widest flex items-end">Feature</div>
                            <div className="p-6 font-bold text-white text-lg text-center flex items-end justify-center">Human Buyer</div>
                            <div className="p-6 font-bold text-white text-lg text-center flex items-end justify-center">SaaS Tool</div>
                            <div className="p-6 relative bg-[#C1FF72]/5">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#C1FF72]" />
                                <div className="font-bold text-[#C1FF72] text-xl text-center mb-1">Scaletio Operator</div>
                                <div className="flex justify-center">
                                    <span className="text-[10px] bg-[#C1FF72] text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                                        Autonomous
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Data Rows */}
                        {pricingData.comparison.map((row, i) => (
                            <div key={i} className="col-span-4 grid grid-cols-4 group hover:bg-white/5 transition-colors">
                                <div className="p-6 flex items-center font-medium text-gray-300 border-t border-white/5 group-hover:text-white transition-colors">
                                    {row.feature}
                                </div>
                                <div className="p-6 flex items-center justify-center text-center text-gray-500 text-sm border-t border-white/5 border-l">
                                    {row.human}
                                </div>
                                <div className="p-6 flex items-center justify-center text-center text-gray-500 text-sm border-t border-white/5 border-l">
                                    {row.saas}
                                </div>
                                <div className="p-6 flex items-center justify-center text-center font-bold text-sm border-t border-white/5 border-l bg-[#C1FF72]/5 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[#C1FF72] opacity-0 group-hover:opacity-10 transition-opacity" />
                                    <span className="text-[#C1FF72] relative z-10 drop-shadow-[0_0_8px_rgba(193,255,114,0.3)]">
                                        {row.scaletio}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
