"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function RedactedActions() {
    const actions = [
        {
            action: "Reduced wasted spend by 19%",
            result: "$4,200 saved / mo",
            status: "Protected"
        },
        {
            action: "Scaled TOF winners +32% week-over-week",
            result: "ROAS maintained",
            status: "Scaling"
        },
        {
            action: "CPA pulled back under target range",
            result: "Margin recovered",
            status: "Resolved"
        },
        {
            action: "Detected creative fatigue early",
            result: "Swapped assets",
            status: "Resolved"
        }
    ]

    return (
        <section id="redacted-actions" className="py-20 relative">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-12 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold">Real Actions. Redacted Data.</h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Early partners see compounding gains. Their data stays protected — we expose only the operator’s behavior.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 p-4 border-b border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                            <div className="col-span-1">Account</div>
                            <div className="col-span-2 md:col-span-1">Action</div>
                            <div className="hidden md:block col-span-1">Result</div>
                            <div className="col-span-1 text-right">Status</div>
                        </div>

                        {/* Table Body */}
                        <div className="divide-y divide-white/5">
                            {actions.map((item, i) => (
                                <div key={i} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-white/5 transition-colors">
                                    <div className="col-span-1 font-mono text-sm text-white/20 select-none blur-[2px]">
                                        ████████
                                    </div>
                                    <div className="col-span-2 md:col-span-1 text-sm font-medium text-white/90">
                                        {item.action}
                                    </div>
                                    <div className="hidden md:block col-span-1 text-sm text-muted-foreground">
                                        {item.result}
                                    </div>
                                    <div className="col-span-1 flex justify-end">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide ${item.status === "Scaling" ? "bg-primary/10 text-primary" :
                                                item.status === "Resolved" ? "bg-blue-500/10 text-blue-400" :
                                                    "bg-gray-500/10 text-gray-400"
                                            }`}>
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/labs/smart-audit"
                            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
                        >
                            Run a free Smart Audit
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
