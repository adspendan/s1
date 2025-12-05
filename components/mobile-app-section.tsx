"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Apple } from "lucide-react"
import Image from "next/image"

export function MobileAppSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">

                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left space-y-8">
                        <ScrollReveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-4">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Available on iOS
                            </div>

                            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                                Control Your Ad Empire <br />
                                <span className="text-primary">From Your Pocket.</span>
                            </h2>

                            <p className="text-xl text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                                Scaletio isn't just a dashboard on your desk. It's a command center in your hand. Monitor spend, approve scale-ups, and get critical alerts wherever you are.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start pt-4">
                                <Button className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full font-bold flex items-center gap-3 shadow-xl hover:scale-105 transition-transform">
                                    <Apple className="w-6 h-6" />
                                    Download for iOS
                                </Button>
                                <div className="text-sm text-gray-500">
                                    Coming soon to Android
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Visual - Abstract Phone Mockup */}
                    <div className="flex-1 relative w-full max-w-md mx-auto md:max-w-none">
                        <ScrollReveal delay={200} direction="left">
                            <div className="relative z-10 bg-[#0A0A0A] border-8 border-[#1a1a1a] rounded-[3rem] overflow-hidden shadow-2xl aspect-[9/19] max-h-[600px] mx-auto">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#1a1a1a] rounded-b-2xl z-20" />

                                {/* Screen Content */}
                                <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black p-6 flex flex-col relative">
                                    {/* Status Bar */}
                                    <div className="flex justify-between items-center text-[10px] text-white mb-8 px-2">
                                        <span>9:41</span>
                                        <div className="flex gap-1">
                                            <div className="w-4 h-2.5 bg-white rounded-[1px]" />
                                            <div className="w-0.5 h-2.5 bg-white/30 rounded-[1px]" />
                                        </div>
                                    </div>

                                    {/* App Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                                <div className="w-4 h-4 bg-primary rounded-sm" />
                                            </div>
                                            <span className="font-bold text-white">Scaletio</span>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-white/10" />
                                    </div>

                                    {/* Main Card */}
                                    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-4 backdrop-blur-md relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
                                        <div className="relative z-10">
                                            <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Total Revenue</div>
                                            <div className="text-3xl font-bold text-white mb-4">$14,293</div>
                                            <div className="flex items-center gap-2 text-primary text-sm font-medium bg-primary/10 self-start px-2 py-1 rounded-lg w-fit">
                                                +12.5% today
                                            </div>
                                        </div>
                                    </div>

                                    {/* Notification Stack */}
                                    <div className="space-y-3">
                                        <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex gap-3 items-start shadow-lg transform translate-y-0 opacity-100 transition-all">
                                            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 mb-0.5">Just now</div>
                                                <div className="text-sm text-white font-medium">Scaled "Winners_v2" budget by 20%</div>
                                            </div>
                                        </div>
                                        <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex gap-3 items-start shadow-lg opacity-60 scale-95">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                            </div>
                                            <div>
                                                <div className="text-xs text-gray-400 mb-0.5">15m ago</div>
                                                <div className="text-sm text-white font-medium">Paused "Creative_04" (High CPA)</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Nav */}
                                    <div className="mt-auto bg-[#111]/80 backdrop-blur-xl border-t border-white/5 -mx-6 -mb-6 p-6 flex justify-around">
                                        <div className="w-6 h-6 rounded-full bg-primary/20" />
                                        <div className="w-6 h-6 rounded-full bg-white/10" />
                                        <div className="w-6 h-6 rounded-full bg-white/10" />
                                    </div>
                                </div>
                            </div>

                            {/* Glow behind phone */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[100px] -z-10 pointer-events-none" />
                        </ScrollReveal>
                    </div>
                </div>
            </div>
        </section>
    )
}
