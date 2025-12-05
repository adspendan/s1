"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { pricingData } from "@/data/pricing"

export function AddonModules() {
    return (
        <section className="mb-32 px-4">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Advanced <span className="text-[#C1FF72]">Modules</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Unlock inside the app once you're live.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {pricingData.modules.map((module, index) => (
                    <ScrollReveal key={module.title} delay={index * 50}>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#C1FF72]/30 transition-all group h-full flex flex-col items-center text-center">
                            <div className="p-4 bg-black/40 rounded-full mb-6 group-hover:bg-[#C1FF72]/10 transition-colors">
                                <module.icon className="w-8 h-8 text-[#C1FF72]" />
                            </div>

                            <h3 className="text-lg font-bold mb-2 text-white">{module.title}</h3>
                            <p className="text-sm text-gray-500">{module.description}</p>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
