"use client"

import { ScrollReveal } from "./scroll-animations"
import { Lock } from "lucide-react"

export function SocialProof() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-balance">
              Performance <span className="text-primary">Classified</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our early partners are seeing results that give them an unfair advantage.
              We protect their edge by keeping specific data confidential.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 relative">
              {/* Blurred Overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-background/60 backdrop-blur-[2px] rounded-2xl border border-border">
                <div className="bg-[#0A0A0A] border border-white/10 p-4 rounded-xl flex items-center gap-3 shadow-2xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Lock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-bold text-white">Restricted Access</div>
                    <div className="text-xs text-gray-500">Early Access Members Only</div>
                  </div>
                </div>
              </div>

              {/* Dummy "Redacted" Cards */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-6 flex flex-col gap-4 opacity-50 blur-sm select-none">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gray-700/50" />
                    <div className="space-y-2">
                      <div className="h-3 w-24 bg-gray-700/50 rounded" />
                      <div className="h-2 w-16 bg-gray-700/50 rounded" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-gray-700/50 rounded" />
                    <div className="h-2 w-5/6 bg-gray-700/50 rounded" />
                    <div className="h-2 w-4/6 bg-gray-700/50 rounded" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/5 flex justify-between">
                    <div className="h-8 w-20 bg-primary/20 rounded" />
                    <div className="h-8 w-12 bg-gray-700/50 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
