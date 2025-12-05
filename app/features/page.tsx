"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { OperatorLoop } from "@/components/features/operator-loop"
import { AdvancedCapabilities } from "@/components/features/advanced-capabilities"
import { ComparisonMarquee } from "@/components/features/comparison-marquee"
import { MiniCaseExamples } from "@/components/features/mini-case-examples"
import { BackgroundGrid } from "@/components/background-grid"
import { Brain, TrendingUp, Clock, Globe, Shield, Zap, ArrowRight } from "lucide-react"
import { GlowButton } from "@/components/glow-button"
import { SpotlightCard } from "@/components/ui/spotlight-card"

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Autonomous Decision Engine",
      description:
        "AI system that evaluates performance patterns and makes optimization decisions instantly. Replaces hours of manual analysis.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Predictive Scaling Engine",
      description:
        "Forecasts winners before they scale, shifts budgets intelligently, and prevents wasted spend on losing ads.",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Real-Time Optimization Cycles",
      description:
        "Operator cycles run every 1–6 hours depending on plan tier — constantly adjusting spend, bids, creative weighting, and targeting.",
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Multi-Platform Intelligence",
      description:
        "Unified brain across Meta, TikTok, Google, YouTube, and more. Learns which signals matter on each platform and applies them universally.",
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Budget Protection Guardrails",
      description:
        "Hard safety rails prevent overspending, runaway campaigns, and budget leaks. You define limits; Scaletio stays inside them.",
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Creative Intelligence Engine (CIE)",
      description:
        "Detects fatigue early, identifies top-performing creatives, and prioritizes winning variations automatically.",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
        <BackgroundGrid />

        {/* Hero Section */}
        <section className="container mx-auto px-6 mb-24 relative z-10">
          <ScrollReveal>
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-primary mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                SYSTEM V2.0 ONLINE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight leading-tight">
                The <span className="text-primary">Autonomous Operator</span>
                <br />
                Behind Your Ads
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Scaletio isn’t a tool. It’s an always-on optimization system that watches, decides, and acts across all
                your ad accounts — eliminating human lag and unlocking real performance.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <GlowButton
                  onClick={() => document.getElementById("operator-loop")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-8 py-6 text-lg"
                >
                  See How It Works
                </GlowButton>
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  View Documentation <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Operator Loop */}
        <div id="operator-loop" className="relative z-10 mb-24">
          <OperatorLoop />
        </div>

        {/* Core Feature Grid */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Core Autonomous Systems</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Each system works together to replace repetitive manual work and 10× your optimization speed.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {coreFeatures.map((feature, index) => (
                <ScrollReveal key={feature.title} delay={100 + index * 100}>
                  <SpotlightCard className="group relative bg-card/40 backdrop-blur-xl border border-border rounded-3xl p-8 hover:bg-secondary/5 transition-all duration-500 hover:border-primary/30 h-full overflow-hidden">
                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-primary/20">
                      {feature.icon}
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-secondary/20 group-hover:bg-primary transition-colors" />
                  </SpotlightCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Capabilities */}
        <div className="relative z-10">
          <AdvancedCapabilities />
        </div>

        {/* Comparison Marquee */}
        <div className="relative z-10">
          <ComparisonMarquee />
        </div>

        {/* Mini Case Examples */}
        <div className="relative z-10">
          <MiniCaseExamples />
        </div>

        {/* CTA Section */}
        <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
            <ScrollReveal>
              <div className="text-center max-w-4xl mx-auto py-24 relative overflow-hidden rounded-[3rem] bg-gradient-to-b from-secondary/5 to-card border border-border">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                    Let Scaletio Run the Ads
                    <br />
                    <span className="text-muted-foreground">While You Run the Business</span>
                  </h2>
                  <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
                    Go autonomous before your competitors do. Start your 14-day free trial today.
                  </p>
                  <GlowButton className="px-10 py-6 text-lg">
                    Get Early Access
                  </GlowButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
