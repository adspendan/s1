"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Globe, Facebook, Instagram, Youtube, Twitter } from "lucide-react"

export function CrossPlatform() {
    const platforms = [
        { name: "Meta", icon: <Facebook className="w-8 h-8" /> },
        { name: "TikTok", icon: <span className="text-2xl font-bold">Tk</span> },
        { name: "Google", icon: <Globe className="w-8 h-8" /> },
        { name: "YouTube", icon: <Youtube className="w-8 h-8" /> },
        { name: "X", icon: <Twitter className="w-8 h-8" /> },
    ]

    return (
        <section className="py-20 bg-white/5">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">A Unified Brain Across Every Platform</h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Scaletio isn’t siloed like traditional tools. It understands performance across Meta, TikTok, Google, and
                            more — then allocates budget based on predicted ROI.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center max-w-4xl mx-auto">
                    {platforms.map((platform, index) => (
                        <ScrollReveal key={platform.name} delay={index * 100}>
                            <div className="flex flex-col items-center gap-4 group">
                                <div className="w-20 h-20 rounded-full bg-card border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:text-primary group-hover:shadow-[0_0_20px_rgba(127,0,255,0.2)] transition-all duration-300">
                                    {platform.icon}
                                </div>
                                <span className="font-medium text-gray-400 group-hover:text-white transition-colors">
                                    {platform.name}
                                </span>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
