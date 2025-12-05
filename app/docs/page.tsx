"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollReveal } from "@/components/scroll-animations"
import { Book, Code, Terminal, FileText } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
    const sections = [
        {
            icon: <Book className="w-6 h-6 text-[#C1FF72]" />,
            title: "Getting Started",
            description: "Connect your ad accounts and launch your first autonomous agent.",
            link: "#",
        },
        {
            icon: <Terminal className="w-6 h-6 text-purple-400" />,
            title: "Operator CLI",
            description: "Control Scaletio from your terminal. Reference for commands and config.",
            link: "#",
        },
        {
            icon: <Code className="w-6 h-6 text-blue-400" />,
            title: "API Reference",
            description: "Integrate Scaletio intelligence into your own dashboards and tools.",
            link: "#",
        },
        {
            icon: <FileText className="w-6 h-6 text-orange-400" />,
            title: "Strategy Guides",
            description: "Best practices for creative testing, scaling, and budget allocation.",
            link: "#",
        },
    ]

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <ScrollReveal>
                        <div className="max-w-4xl mx-auto mb-16">
                            <h1 className="text-4xl md:text-5xl font-bold mb-6">Documentation</h1>
                            <p className="text-xl text-gray-400">
                                Everything you need to know about running Scaletio.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {sections.map((section) => (
                                <Link key={section.title} href={section.link} className="group">
                                    <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#C1FF72]/30 transition-all h-full">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 rounded-lg bg-black/40 border border-white/5 group-hover:border-[#C1FF72]/20 transition-colors">
                                                {section.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold mb-2 group-hover:text-[#C1FF72] transition-colors">{section.title}</h3>
                                                <p className="text-gray-400 text-sm leading-relaxed">{section.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </main>
            <Footer />
        </>
    )
}
