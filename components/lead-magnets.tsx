"use client"

import { Button } from "@/components/ui/button"
import { ScrollReveal } from "./scroll-animations"
import { useState } from "react"
import { LeadMagnetModal } from "./lead-magnet-modal"

const FileTextIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <polyline points="14 2 14 8 20 8" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="13" x2="8" y2="13" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="16" y1="17" x2="8" y2="17" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="10 9 9 9 8 9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BookOpenIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BarChartIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <line x1="12" y1="20" x2="12" y2="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="20" x2="18" y2="4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <line x1="6" y1="20" x2="6" y2="16" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChromeIcon = () => (
  <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <circle cx="12" cy="12" r="4" strokeWidth={2} />
    <line x1="21.17" y1="8" x2="12" y2="8" strokeWidth={2} />
    <line x1="3.95" y1="6.06" x2="8.54" y2="14" strokeWidth={2} />
    <line x1="10.88" y1="21.94" x2="15.46" y2="14" strokeWidth={2} />
  </svg>
)

const ArrowRightIcon = () => (
  <svg
    className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="12 5 19 12 12 19" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const magnets = [
  {
    icon: FileTextIcon,
    title: "Scaletio Smart Audit™",
    description:
      "Upload screenshots or connect read-only access → Receive a PDF showing: Budget waste %, Creative fatigue timer, Scaling recommendations, ROAS opportunity model if Scaletio takes over",
    cta: "Run Your Free Audit",
    badge: "Free Audit",
    source: "smart_audit" as const,
    requiresMessage: true,
  },
  {
    icon: BookOpenIcon,
    title: "Autonomous Scaling Framework (2025)",
    description:
      'A premium guide revealing: Daily optimization logic, "Don\'t Scale Too Early" rule, How Scaletio predicts winners, Tactical scaling sequences',
    cta: "Get the Framework",
    badge: "Free Guide",
    source: "framework" as const,
  },
  {
    icon: BarChartIcon,
    title: "Ad Benchmarks 2025",
    description: "Interactive comparison of your metrics to: Ecom, SaaS, Local Services, Info / Coaching, Apps",
    cta: "Compare Your Benchmarks",
    badge: "Free Tool",
    source: "benchmarks" as const,
  },
  {
    icon: ChromeIcon,
    title: "Ad Saver Chrome Extension",
    description: "Lightweight teaser tool that warns: \"You're wasting $126 today. Scaletio would've prevented this.\"",
    cta: "Get the Extension",
    badge: "Coming Soon",
    source: "extension" as const,
  },
]

export function LeadMagnets() {
  const [activeModal, setActiveModal] = useState<number | null>(null)

  return (
    <>
      <section id="resources" className="py-32 relative">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-balance">Free Tools That Show You</h2>
            <p className="text-2xl text-center text-muted-foreground mb-16">What Scaletio Can Do</p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {magnets.map((magnet, index) => (
              <ScrollReveal key={magnet.title} delay={200 + index * 150} direction="left">
                <div className="glass-effect rounded-2xl p-8 hover:bg-secondary/50 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <magnet.icon />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">{magnet.title}</h3>
                            {magnet.badge && (
                              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium uppercase tracking-wide">
                                {magnet.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">{magnet.description}</p>
                        </div>
                      </div>

                      <Button
                        onClick={() => setActiveModal(index)}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn"
                        disabled={magnet.badge === "Coming Soon"}
                      >
                        {magnet.cta}
                        <ArrowRightIcon />
                      </Button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {magnets.map((magnet, index) => (
        <LeadMagnetModal
          key={magnet.title}
          isOpen={activeModal === index}
          onClose={() => setActiveModal(null)}
          title={magnet.title}
          description="Enter your details to get instant access"
          source={magnet.source}
          requiresMessage={magnet.requiresMessage}
        />
      ))}
    </>
  )
}
