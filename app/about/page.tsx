"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-animations"
import { Brain, Target, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                We Are Building the <span className="text-[#C1FF72]">Autonomous Future</span> of Advertising
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Scaletio was born from a simple realization: human media buyers can't compete with algorithms at scale.
                We are building the world's first true Autonomous Ads Operator — an AI that doesn't just assist you, but actively runs your growth stack.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Brain className="w-10 h-10 text-[#C1FF72] mb-6" />
                <h3 className="text-xl font-bold mb-4">Intelligence First</h3>
                <p className="text-gray-400">
                  We believe ad performance is a data problem, not a creative guessing game. Our operator is trained on millions of dollars in ad spend.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Target className="w-10 h-10 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">Outcome Oriented</h3>
                <p className="text-gray-400">
                  We don't optimize for vanity metrics. Scaletio is engineered to maximize ROAS, reduce CPA, and scale revenue.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                <Zap className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">Speed & Scale</h3>
                <p className="text-gray-400">
                  The market moves fast. Scaletio moves faster. 24/7 optimization means you never miss a trend or waste a dollar.
                </p>
              </div>
            </div>

            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Revolution</h2>
              <p className="text-gray-400 mb-8">
                We are a team of engineers, data scientists, and media buyers obsessed with solving the scaling problem.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
