"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { pricingData } from "@/data/pricing"

export function FaqSection() {
    return (
        <section className="mb-32 max-w-4xl mx-auto px-4">
            <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                    Frequently Asked <span className="text-[#C1FF72]">Questions</span>
                </h2>
            </ScrollReveal>

            <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {pricingData.faqs.map((faq, index) => (
                        <ScrollReveal key={index} delay={index * 50}>
                            <AccordionItem
                                value={`item-${index}`}
                                className="border border-white/5 rounded-2xl px-6 bg-[#050708]/80 backdrop-blur-md transition-all duration-300 data-[state=open]:border-[#C1FF72]/30 data-[state=open]:bg-white/5 data-[state=open]:shadow-[0_0_30px_rgba(193,255,114,0.05)]"
                            >
                                <AccordionTrigger className="hover:no-underline hover:text-[#C1FF72] text-left py-6 text-base font-medium transition-colors [&[data-state=open]]:text-[#C1FF72]">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-400 pb-6 text-base leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        </ScrollReveal>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
