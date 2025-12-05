"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Check, Palette, Zap, Crown } from "lucide-react"

export function CreativeEngine() {
    const tiers = [
        {
            name: "Studio Lite",
            price: "$997",
            period: "/ month",
            description: "Automated creative production for growing brands.",
            features: [
                "30 auto-generated creatives/mo",
                "Scoring & recommendations",
                "Platform-optimized variants",
                "Auto-matching to winning audiences"
            ],
            icon: <Palette className="w-6 h-6 text-[#C1FF72]" />,
            cta: "Add Subscription",
            highlight: false
        },
        {
            name: "Studio Pro",
            price: "$2,500",
            period: "/ month",
            description: "High-volume creative engine for scaling teams.",
            features: [
                "100 creatives/mo",
                "Auto-edited video variants",
                "Multi-platform compliance formatting",
                "AI editing suite access"
            ],
            icon: <Zap className="w-6 h-6 text-[#C1FF72]" />,
            cta: "Add Subscription",
            highlight: true
        },
        {
            name: "Creative Enterprise Lab",
            price: "$5k–$20k",
            period: "/ month",
            description: "Full-scale creative factory for global brands.",
            features: [
                "Unlimited variants",
                "Brand-trained creative AI",
                "Full auto-rotation rules",
                "Dedicated creative operator"
            ],
            icon: <Crown className="w-6 h-6 text-[#C1FF72]" />,
            cta: "Contact Sales",
            highlight: false
        }
    ]

    return (
        <section className="mb-32">
            <ScrollReveal>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        🎨 Autonomous <span className="text-[#C1FF72]">Creative Engine</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Fuel your operator with high-performance creative assets.
                    </p>
                </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {tiers.map((tier, index) => (
                    <ScrollReveal key={tier.name} delay={index * 100}>
                        <div className={`relative p-8 rounded-3xl border h-full flex flex-col ${tier.highlight
                            ? "bg-[#C1FF72]/5 border-[#C1FF72] shadow-[0_0_30px_rgba(193,255,114,0.1)]"
                            : "bg-white/5 border-white/10 hover:border-white/20"
                            }`}>
                            <div className="mb-6 p-3 bg-white/5 rounded-xl w-fit">
                                {tier.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-2xl font-bold">{tier.price}</span>
                                <span className="text-sm text-gray-400">{tier.period}</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{tier.description}</p>

                            <ul className="space-y-3 mb-8 flex-1">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                                        <Check className="w-4 h-4 text-[#C1FF72] mt-0.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.highlight ? "default" : "outline"}
                                className={`w-full ${tier.highlight
                                    ? "bg-[#C1FF72] text-black hover:bg-[#b0ef5e]"
                                    : "border-white/10 hover:bg-white/5"
                                    }`}
                            >
                                {tier.cta}
                            </Button>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    )
}
