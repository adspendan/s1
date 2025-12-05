"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { ArrowRight, Link, Settings, Play } from "lucide-react"

import { PricingHeader } from "@/components/pricing/pricing-header"
import { PricingStrip } from "@/components/pricing/pricing-strip"
import { PricingCard } from "@/components/pricing/pricing-card"
import { BillingExplainer } from "@/components/pricing/billing-explainer"
import { AddonModules } from "@/components/pricing/addon-modules"
import { ComparisonTable } from "@/components/pricing/comparison-table"
import { FaqSection } from "@/components/pricing/faq-section"
import { pricingData } from "@/data/pricing"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <main className="min-h-screen bg-[#050708] text-white overflow-hidden">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050708] to-[#050708] z-0 pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <PricingHeader isAnnual={isAnnual} onToggle={setIsAnnual} />

        <PricingStrip />

        {/* Pricing Plans */}
        <section className="mb-32 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
            {pricingData.plans.map((plan, index) => (
              <ScrollReveal key={plan.name} delay={index * 100} className="h-full">
                <PricingCard plan={plan} isAnnual={isAnnual} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ComparisonTable />

        <BillingExplainer />

        <AddonModules />

        {/* Onboarding Steps */}
        <section className="mb-32 px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-16">How Onboarding Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Link className="w-6 h-6 text-black" />,
                    title: "1. Connect Accounts",
                    desc: "Instant sync with your ad platforms."
                  },
                  {
                    icon: <Settings className="w-6 h-6 text-black" />,
                    title: "2. Set Guardrails",
                    desc: "Define spend limits and risk profile."
                  },
                  {
                    icon: <Play className="w-6 h-6 text-black" />,
                    title: "3. Operator Optimizes",
                    desc: "Most users see impact within week one."
                  }
                ].map((step, i) => (
                  <div key={i} className="relative flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-[#C1FF72] flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(193,255,114,0.3)] z-10 relative">
                      {step.icon}
                    </div>
                    {i < 2 && (
                      <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-gradient-to-r from-[#C1FF72] to-transparent -z-0 opacity-30" />
                    )}
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        <FaqSection />

        {/* Final CTA */}
        <section className="mb-20 px-4">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto py-20 relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#C1FF72] opacity-[0.03] blur-3xl pointer-events-none" />

              <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">
                Ready to Put an Operator<br />
                <span className="text-[#C1FF72]">On Your Ad Spend?</span>
              </h2>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                <Button className="bg-[#C1FF72] text-black hover:bg-[#b0ef5e] text-lg px-10 py-6 rounded-full font-bold shadow-[0_0_30px_rgba(193,255,114,0.3)] hover:shadow-[0_0_50px_rgba(193,255,114,0.5)] transition-all duration-300">
                  Book a Call <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 text-lg px-10 py-6 rounded-full">
                  See Example Pricing
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        <Footer />
      </div>
    </main>
  )
}
