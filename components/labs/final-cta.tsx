"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function LabsFinalCTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center max-w-4xl mx-auto py-20 relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl -z-10" />

                        <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready for Autonomous Optimization?</h2>
                        <p className="text-xl text-gray-400 mb-10">
                            Scaletio doesn’t just analyze your ads — it runs them.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link href="/pricing">
                                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-10 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(127,0,255,0.3)] hover:shadow-[0_0_50px_rgba(127,0,255,0.5)] transition-all duration-300 group">
                                    Activate the Operator
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 py-6 rounded-full font-bold">
                                    Explore Pricing
                                </Button>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
