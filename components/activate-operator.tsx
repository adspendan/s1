"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Terminal, Lock } from "lucide-react"
import { useState } from "react"
import { SignInButton } from "@clerk/nextjs"

export function ActivateOperator() {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // TODO: Integrate with real form handler
        await new Promise(resolve => setTimeout(resolve, 1000))
        setIsSubmitting(false)
        alert("Application received. We will be in touch shortly.")
    }

    return (
        <section id="activate-operator" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="max-w-xl mx-auto">
                        <div className="text-center mb-8 space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Limited Availability · Q1 2025
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold">Activate Your Operator</h2>
                            <p className="text-lg text-muted-foreground">
                                Secure your early access slot and let Scaletio take over the heavy lifting.
                            </p>
                        </div>

                        <div className="bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative group">
                            {/* Terminal Header Decoration */}
                            <div className="absolute top-0 left-0 right-0 h-8 bg-white/5 border-b border-white/5 rounded-t-2xl flex items-center px-4 gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
                                <div className="ml-auto flex items-center gap-1.5 text-[10px] text-muted-foreground font-mono">
                                    <Terminal className="w-3 h-3" />
                                    <span>init_access.sh</span>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">Brand Name</label>
                                    <Input
                                        placeholder="Enter your brand"
                                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">Work Email</label>
                                    <Input
                                        type="email"
                                        placeholder="name@company.com"
                                        className="bg-white/5 border-white/10 focus:border-primary/50 transition-colors"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-medium uppercase tracking-wider text-gray-400">Primary Ad Platform</label>
                                    <Select>
                                        <SelectTrigger className="bg-white/5 border-white/10 focus:border-primary/50">
                                            <SelectValue placeholder="Select platform" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="meta">Meta (Facebook/Instagram)</SelectItem>
                                            <SelectItem value="tiktok">TikTok</SelectItem>
                                            <SelectItem value="google">Google Ads</SelectItem>
                                            <SelectItem value="youtube">YouTube</SelectItem>
                                            <SelectItem value="mixed">Mixed / Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide mt-4 h-12"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "INITIALIZING..." : "INITIALIZE ACCESS"}
                                    {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
                                </Button>

                                <p className="text-center text-xs text-muted-foreground mt-4">
                                    Approved applications receive onboarding instructions and operator setup details.
                                </p>
                            </form>

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-white/10" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-[#0A0A0A] px-2 text-muted-foreground">Or</span>
                                </div>
                            </div>

                            {/* Clerk Auth Button */}
                            <div className="text-center">
                                <SignInButton mode="modal">
                                    <Button variant="outline" className="w-full bg-white/5 border-white/10 hover:bg-white/10 hover:text-white text-muted-foreground transition-all">
                                        <Lock className="w-3 h-3 mr-2" />
                                        Already a partner? Access Terminal
                                    </Button>
                                </SignInButton>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
