"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Button } from "@/components/ui/button"
import { Lock, Mail } from "lucide-react"
import Link from "next/link"

export function AuthWall() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-6">
                <ScrollReveal>
                    <div className="max-w-4xl mx-auto p-12 rounded-3xl bg-card/40 border border-border text-center relative overflow-hidden backdrop-blur-sm">
                        {/* Background Glow */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-secondary/50 mb-8 border border-border">
                            <Lock className="w-8 h-8 text-primary" />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Create Your Scaletio Account</h2>
                        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                            A single login unlocks all Labs tools, saves your reports, syncs your history, and personalizes your
                            Operator profile.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/pricing">
                                <Button className="bg-background text-foreground hover:bg-secondary/80 border border-border text-lg px-8 py-6 rounded-full font-bold w-full sm:w-auto">
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                        <path
                                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                            fill="#4285F4"
                                        />
                                        <path
                                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                            fill="#34A853"
                                        />
                                        <path
                                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                            fill="#FBBC05"
                                        />
                                        <path
                                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                            fill="#EA4335"
                                        />
                                    </svg>
                                    Continue with Google
                                </Button>
                            </Link>
                            <Link href="/pricing">
                                <Button variant="outline" className="border-border hover:bg-secondary/50 text-foreground text-lg px-8 py-6 rounded-full font-bold w-full sm:w-auto">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Continue with Email
                                </Button>
                            </Link>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
