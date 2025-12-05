"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Palette, BarChart, RefreshCcw } from "lucide-react"

export function CreativeIntelligence() {
    const features = [
        {
            icon: <BarChart className="w-6 h-6 text-primary" />,
            title: "Fatigue Prediction",
            description: "Detects when ad performance is about to drop before it happens.",
        },
        {
            icon: <Palette className="w-6 h-6 text-primary" />,
            title: "Creative Scoring",
            description: "Scores every visual asset based on cross-platform engagement.",
        },
        {
            icon: <RefreshCcw className="w-6 h-6 text-primary" />,
            title: "Autonomous Rotation",
            description: "Swaps out low-performing creatives for fresh winners automatically.",
        },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <ScrollReveal>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Creative Intelligence Engine (CIE)</h2>
                            <p className="text-xl text-gray-400 mb-8">
                                Scaletio analyzes creative performance, detects fatigue, identifies winners, and rotates ads
                                automatically.
                            </p>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="p-2 rounded-lg bg-primary/10 mt-1">{feature.icon}</div>
                                        <div>
                                            <h3 className="font-bold mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-400">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <div className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]">
                            {/* Abstract Visualization of Creative Analysis */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-50">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
                                    ))}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-sm font-bold">Creative Score</span>
                                        <span className="text-primary font-bold">98/100</span>
                                    </div>
                                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[98%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
