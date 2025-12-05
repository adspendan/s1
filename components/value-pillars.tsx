"use client"

import { ScrollReveal, CountUp } from "./scroll-animations"
import { Zap, Network, Shield, Rocket, Wrench, Cpu } from "lucide-react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"

const pillars = [
  {
    icon: Zap,
    title: "Autonomous Optimization",
    description: "Daily optimization cycles executed automatically. No human latency.",
  },
  {
    icon: Network,
    title: "Cross-Platform Intelligence",
    description: "One operator brain, unified across Meta, Google, TikTok, and YouTube.",
  },
  {
    icon: Shield,
    title: "Anti-Waste Protection",
    description: "Scaletio detects budget leaks, fatigue, and overspend instantly.",
  },
  {
    icon: Rocket,
    title: "Scaling Engine",
    description: "Learns patterns from millions in ad data and applies them to scale winners.",
  },
  {
    icon: Wrench,
    title: "Operator-Built",
    description: "Designed by real media buyers who manage millions in spend.",
  },
  {
    icon: Cpu,
    title: "Predictive AI",
    description: "Forecasts performance trends to allocate budget before costs rise.",
  },
]

import { SpotlightCard } from "@/components/ui/spotlight-card"

export function ValuePillars() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-primary mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              System Architecture
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Why Scaletio Wins</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              The only platform that combines autonomous execution with cross-channel intelligence.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-24">
            {[
              { value: 24, suffix: "/7", label: "Always Running" },
              { value: 6, suffix: "", label: "Major Platforms" },
              { value: 100, prefix: "$", suffix: "M+", label: "Ad Spend Managed" },
              { value: 1000, suffix: "+", label: "Daily Optimizations" },
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm text-center group hover:bg-white/10 transition-colors">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {stat.prefix}<CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={300 + index * 100}>
              <SpotlightCard>
                <div className="w-12 h-12 rounded-lg bg-secondary/50 border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">
                  <pillar.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">{pillar.description}</p>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

