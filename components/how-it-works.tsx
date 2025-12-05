"use client"

import { ScrollReveal } from "./scroll-animations"
import { NeuralPipeline } from "./how-it-works/neural-pipeline"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              How Scaletio <span className="text-primary">Operates</span>
            </h2>
            <div className="space-y-2">
              <p className="text-xl text-muted-foreground">
                Not just alerts. <span className="text-white font-medium">Autonomous execution.</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="max-w-6xl mx-auto">
            <NeuralPipeline />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
