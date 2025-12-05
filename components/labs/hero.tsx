"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, BarChart3, Zap, Brain, Search, Activity, Layers, Globe, Shield } from "lucide-react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { useEffect, useState } from "react"

export function LabsHero() {
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border text-sm font-medium mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span>Scaletio Labs</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
                            Scaletio <span className="text-primary glow-text">Labs</span>
                        </h1>

                        <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                            Free AI-powered tools that diagnose, analyze, forecast, and enhance your ad performance — all powered by the Autonomous Ads Operator.
                        </p>

                        {/* Badge Row */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 text-sm font-medium text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <Brain className="w-4 h-4 text-primary" />
                                <span>24/7 Autonomous Insights</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-4 h-4 text-primary" />
                                <span>Predictive Ad Intelligence</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Activity className="w-4 h-4 text-primary" />
                                <span>Operator-Grade Diagnostics</span>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
                            <Button
                                onClick={() => document.getElementById("featured-tools")?.scrollIntoView({ behavior: "smooth" })}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(127,0,255,0.3)] hover:shadow-[0_0_50px_rgba(127,0,255,0.5)] transition-all duration-300 group"
                            >
                                Explore Tools
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Link href="/pricing">
                                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border text-lg px-8 py-6 rounded-full font-bold backdrop-blur-sm transition-all duration-300">
                                    Create Scaletio Account
                                </Button>
                            </Link>
                        </div>
                    </ScrollReveal>

                    {/* Orbital Constellation Visual */}
                    <div
                        className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] -mt-20 pointer-events-none transition-transform duration-100 ease-out"
                        style={{ transform: `scale(${1 + scrollY * 0.0005})` }}
                    >
                        {/* Neural Network Connections */}
                        <svg className="absolute inset-0 w-full h-full z-10 opacity-40">
                            <defs>
                                <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent" />
                                    <stop offset="50%" stopColor="var(--primary)" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                            {/* Connections to Orbit 1 */}
                            <path d="M400 400 L400 200" stroke="url(#pulse-gradient)" strokeWidth="2" fill="none" className="animate-pulse-fast" />
                            <path d="M400 400 L400 600" stroke="url(#pulse-gradient)" strokeWidth="2" fill="none" className="animate-pulse-fast delay-75" />

                            {/* Connections to Orbit 2 */}
                            <path d="M400 400 L700 400" stroke="url(#pulse-gradient)" strokeWidth="2" fill="none" className="animate-pulse-fast delay-150" />
                            <path d="M400 400 L100 400" stroke="url(#pulse-gradient)" strokeWidth="2" fill="none" className="animate-pulse-fast delay-300" />

                            {/* Connections to Orbit 3 */}
                            <path d="M400 400 L680 120" stroke="url(#pulse-gradient)" strokeWidth="1" fill="none" className="animate-pulse-slow opacity-50" />
                        </svg>

                        {/* Central Core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-pulse" />
                            <div className="relative shadow-[0_0_60px_rgba(127,0,255,0.5)] rounded-2xl">
                                <Logo width={80} height={80} className="w-20 h-20 rounded-2xl" />
                            </div>
                        </div>

                        {/* Orbit 1 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full animate-spin-slow">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-xl flex items-center justify-center">
                                <BarChart3 className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#0A0A0A] border border-white/20 rounded-xl flex items-center justify-center">
                                <Search className="w-6 h-6 text-purple-400" />
                            </div>
                        </div>

                        {/* Orbit 2 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full animate-spin-reverse-slow">
                            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0A0A0A] border border-white/20 rounded-xl flex items-center justify-center">
                                <Layers className="w-7 h-7 text-orange-400" />
                            </div>
                            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#0A0A0A] border border-white/20 rounded-xl flex items-center justify-center">
                                <Globe className="w-7 h-7 text-green-400" />
                            </div>
                        </div>

                        {/* Orbit 3 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slow opacity-50">
                            <div className="absolute top-[15%] right-[15%] w-10 h-10 bg-[#0A0A0A] border border-white/20 rounded-xl flex items-center justify-center">
                                <Shield className="w-5 h-5 text-red-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
