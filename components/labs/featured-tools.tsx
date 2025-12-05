"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ArrowRight, Search, Layers, BarChart3, PieChart, AlertTriangle, Users } from "lucide-react"
import Link from "next/link"

export function FeaturedToolsGrid() {
    const tools = [
        {
            icon: <Search className="w-8 h-8 text-primary" />,
            title: "Smart Audit",
            description: "Instant diagnosis of budget waste, creative fatigue, scaling opportunities, and anomalies — powered by Operator intelligence.",
            cta: "Run Audit",
            link: "/labs/smart-audit",
        },
        {
            icon: <Layers className="w-8 h-8 text-purple-400" />,
            title: "Creative Intelligence Analyzer",
            description: "Upload images or videos. Scaletio predicts fatigue, CTR trends, winner probability, and lifespan.",
            cta: "Analyze Creative",
            link: "/labs/creative-analyzer",
        },
        {
            icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
            title: "Ad Benchmarks 2025",
            description: "See how your metrics compare across industry, spend bands, funnel types, and platforms.",
            cta: "Check Benchmarks",
            link: "/labs/benchmarks",
        },
        {
            icon: <PieChart className="w-8 h-8 text-orange-400" />,
            title: "Spend Split Optimizer",
            description: "Calculate your ideal distribution across Meta, Google, TikTok, and YouTube using predictive modeling.",
            cta: "Optimize Spend",
            link: "/labs/spend-optimizer",
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-red-400" />,
            title: "Anomaly & CPA Spike Detector",
            description: "Detect sudden CPA increases, overspend, pacing distortion, attribution breaks, and runaway adsets.",
            cta: "Detect Anomalies",
            link: "/labs/anomaly-detector",
        },
        {
            icon: <Users className="w-8 h-8 text-green-400" />,
            title: "Audience Overlap Visualizer",
            description: "Upload audiences and see overlap heatmaps + predicted efficiency loss.",
            cta: "Visualize Overlap",
            link: "/labs/audience-overlap",
        },
    ]

    return (
        <section id="featured-tools" className="py-20 relative">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Tools</h2>
                        <p className="text-xl text-gray-400">Your gateway into the Scaletio ecosystem. Try any tool for free.</p>
                    </div>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tools.map((tool, index) => (
                        <ScrollReveal key={tool.title} delay={index * 100}>
                            <SpotlightCard className="group relative h-full p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 flex flex-col">
                                <div className="mb-6 p-4 rounded-xl bg-card/40 w-fit border border-border group-hover:border-primary/20 transition-colors">
                                    {tool.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{tool.title}</h3>
                                <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{tool.description}</p>
                                <Link href={tool.link} className="mt-auto">
                                    <Button variant="ghost" className="p-0 hover:bg-transparent text-foreground group-hover:text-primary transition-colors">
                                        {tool.cta} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                </Link>
                            </SpotlightCard>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
