"use client"

import { ScrollReveal } from "@/components/scroll-animations"
import { Activity, Brain, Zap, BarChart3, Users, AlertTriangle, Layers, TrendingUp, Shield } from "lucide-react"

export function OperatorDiagram() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* HUD Grid Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="relative max-w-6xl mx-auto p-8 md:p-12 border border-border rounded-3xl bg-card/20 backdrop-blur-sm">
                        {/* HUD Corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-xl" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 rounded-bl-xl" />
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />

                        {/* Connecting Lines Layer */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                            <div className="absolute w-full h-full flex items-center justify-center">
                                <div className="w-[400px] h-[400px] border border-primary/5 rounded-full animate-pulse" />
                                <div className="absolute w-[600px] h-[600px] border border-primary/5 rounded-full" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
                            {/* Column 1: Signals */}
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-primary mb-2">
                                        INPUT STREAM
                                    </div>
                                    <h3 className="font-bold text-lg">Real-Time Signals</h3>
                                </div>
                                {[
                                    { icon: <BarChart3 />, label: "Platform Metrics" },
                                    { icon: <Layers />, label: "Creative Data" },
                                    { icon: <Users />, label: "Audience Decay" },
                                    { icon: <AlertTriangle />, label: "Anomalies" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-4 p-4 rounded-xl bg-card/40 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default"
                                    >
                                        <div className="text-muted-foreground group-hover:text-primary transition-colors">{item.icon}</div>
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Column 2: Brain */}
                            <div className="flex flex-col items-center justify-center">
                                <div className="relative w-48 h-48 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                                    <div className="relative w-32 h-32 bg-card border-2 border-primary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(127,0,255,0.3)] z-10">
                                        <Brain className="w-16 h-16 text-primary" />
                                    </div>
                                    {/* Orbiting dots */}
                                    <div className="absolute inset-0 animate-spin-slow pointer-events-none">
                                        <div className="absolute top-0 left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_10px_currentColor] text-primary" />
                                    </div>
                                    <div className="absolute inset-0 animate-spin-reverse-slow pointer-events-none opacity-50">
                                        <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2" />
                                    </div>
                                </div>
                                <div className="text-center mt-8">
                                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-3">
                                        PROCESSING
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">Operator Brain</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        Pattern Recognition
                                        <br />
                                        Predictive Modeling
                                        <br />
                                        Cross-Platform Learning
                                    </p>
                                </div>
                            </div>

                            {/* Column 3: Actions */}
                            <div className="space-y-6">
                                <div className="text-center mb-8">
                                    <div className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-mono text-primary mb-2">
                                        OUTPUT STREAM
                                    </div>
                                    <h3 className="font-bold text-lg">Autonomous Actions</h3>
                                </div>
                                {[
                                    { icon: <Activity />, label: "Budget Shifts" },
                                    { icon: <Zap />, label: "Creative Swaps" },
                                    { icon: <TrendingUp />, label: "Predictive Scaling" },
                                    { icon: <Shield />, label: "Loss Prevention" },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-end gap-4 p-4 rounded-xl bg-card/40 border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default text-right"
                                    >
                                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                            {item.label}
                                        </span>
                                        <div className="text-muted-foreground group-hover:text-primary transition-colors">{item.icon}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    )
}
