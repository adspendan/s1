"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { OperatorDiagram } from "@/components/how-it-works/operator-diagram"
import { OperatorLoopRedesigned } from "@/components/how-it-works/operator-loop-redesigned"
import { CycleFrequency } from "@/components/how-it-works/cycle-frequency"
import { AutonomousActions } from "@/components/how-it-works/autonomous-actions"
import { SafetyGuardrails } from "@/components/how-it-works/safety-guardrails"
import { CrossPlatform } from "@/components/how-it-works/cross-platform"
import { CreativeIntelligence } from "@/components/how-it-works/creative-intelligence"
import { CaseStudies } from "@/components/how-it-works/case-studies"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HowItWorksPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black relative">
                {/* Global Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                {/* Hero Section */}
                <section className="container mx-auto px-6 mb-20 relative z-10">
                    <ScrollReveal>
                        <div className="text-center max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-8 backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-[#C1FF72] animate-pulse" />
                                <span>System Online</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance tracking-tight">
                                How Scaletio <span className="text-[#C1FF72] glow-text">Operates</span> Your Ads
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                                Your autonomous ads operator watches, decides, and acts 24/7 — delivering performance that human teams
                                physically can’t match.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
                                <div className="text-lg font-medium">
                                    <span className="text-gray-500">Not alerts.</span> <span className="text-white">Decisions.</span>
                                </div>
                                <div className="hidden md:block w-1 h-1 bg-gray-700 rounded-full" />
                                <div className="text-lg font-medium">
                                    <span className="text-gray-500">Not recommendations.</span>{" "}
                                    <span className="text-white">Execution.</span>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <Button
                                    onClick={() => document.getElementById("operator-system")?.scrollIntoView({ behavior: "smooth" })}
                                    className="bg-white/10 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full font-bold backdrop-blur-sm transition-all duration-300"
                                >
                                    See How It Works
                                </Button>
                                <Link href="/pricing">
                                    <Button className="bg-[#C1FF72] text-black hover:bg-[#b0ef5e] text-lg px-10 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(193,255,114,0.3)] hover:shadow-[0_0_50px_rgba(193,255,114,0.5)] transition-all duration-300 group">
                                        Start Autonomy
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* Operator System Diagram */}
                <div id="operator-system">
                    <OperatorDiagram />
                </div>

                {/* Operator Loop */}
                <OperatorLoopRedesigned />

                {/* Cycle Frequency */}
                <CycleFrequency />

                {/* Autonomous Actions */}
                <AutonomousActions />

                {/* Safety Guardrails */}
                <SafetyGuardrails />

                {/* Cross Platform */}
                <CrossPlatform />

                {/* Creative Intelligence */}
                <CreativeIntelligence />

                {/* Case Studies */}
                <CaseStudies />

                {/* Final CTA */}
                <section className="py-20 relative z-10">
                    <div className="container mx-auto px-6">
                        <ScrollReveal>
                            <div className="text-center max-w-4xl mx-auto py-20 relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                                <div className="absolute inset-0 bg-[#C1FF72]/5 blur-3xl -z-10" />
                                <h2 className="text-4xl md:text-6xl font-bold mb-8">Activate Your Autonomous Ads Operator</h2>
                                <p className="text-xl text-gray-400 mb-10">
                                    Let Scaletio handle the optimization — you handle the business.
                                </p>
                                <Link href="/pricing">
                                    <Button className="bg-[#C1FF72] text-black hover:bg-[#b0ef5e] text-lg px-10 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(193,255,114,0.3)] hover:shadow-[0_0_50px_rgba(193,255,114,0.5)] transition-all duration-300 group">
                                        Get Early Access
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
