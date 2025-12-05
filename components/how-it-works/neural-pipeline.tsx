"use client"

import { useState, useEffect } from "react"
import { Search, Brain, Zap, TrendingUp, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { SwarmRobotIcon } from "@/components/icons/swarm-robot-icon"

export function NeuralPipeline() {
    const [activeStep, setActiveStep] = useState(0)

    // Auto-cycle through steps
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const steps = [
        {
            id: "audit",
            label: "Audit",
            icon: Search,
            description: "Scans for inefficiencies",
            color: "text-blue-400",
            bg: "bg-blue-400/10",
            border: "border-blue-400/20",
            shadow: "shadow-blue-400/20"
        },
        {
            id: "decide",
            label: "Decide",
            icon: Brain,
            description: "Calculates optimal moves",
            color: "text-primary",
            bg: "bg-primary/10",
            border: "border-primary/50",
            shadow: "shadow-primary/20"
        },
        {
            id: "act",
            label: "Act",
            icon: Zap,
            description: "Executes changes instantly",
            color: "text-purple-400",
            bg: "bg-purple-400/10",
            border: "border-purple-400/20",
            shadow: "shadow-purple-400/20"
        },
        {
            id: "learn",
            label: "Learn",
            icon: TrendingUp,
            description: "Updates prediction models",
            color: "text-pink-400",
            bg: "bg-pink-400/10",
            border: "border-pink-400/20",
            shadow: "shadow-pink-400/20"
        }
    ]

    return (
        <div className="w-full py-20 relative">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-20" />

            {/* Circuit Stream (Desktop Only) */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden md:block pointer-events-none">
                <svg className="w-full h-24" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
                            <stop offset="20%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="50%" stopColor="rgba(193, 255, 114, 0.1)" />
                            <stop offset="80%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                    </defs>
                    {/* Dual Rails */}
                    <path d="M0 46 H1200" stroke="url(#circuit-gradient)" strokeWidth="1" />
                    <path d="M0 50 H1200" stroke="url(#circuit-gradient)" strokeWidth="1" />
                </svg>

                {/* Data Packets - Swarm Robots */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Robot 1 */}
                    <div className="absolute top-[34px]" style={{ animation: 'flow 3s linear infinite' }}>
                        <SwarmRobotIcon className="w-6 h-6 text-primary dark:text-primary text-purple-600" />
                    </div>
                    {/* Robot 2 */}
                    <div className="absolute top-[34px]" style={{ animation: 'flow 4s linear infinite 1s' }}>
                        <SwarmRobotIcon className="w-6 h-6 text-primary dark:text-primary text-purple-600" />
                    </div>
                    {/* Robot 3 */}
                    <div className="absolute top-[34px]" style={{ animation: 'flow 2.5s linear infinite 0.5s' }}>
                        <SwarmRobotIcon className="w-6 h-6 text-primary dark:text-primary text-purple-600" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 px-4">
                {steps.map((step, index) => {
                    const isActive = activeStep === index

                    return (
                        <div
                            key={step.id}
                            className={cn(
                                "relative flex flex-col items-center text-center group transition-all duration-500",
                                isActive ? "scale-105 z-20" : "opacity-60 hover:opacity-100 hover:scale-100 z-10"
                            )}
                            onMouseEnter={() => setActiveStep(index)}
                        >
                            {/* Node Container */}
                            <div className="relative">
                                {/* Active Ring Effect */}
                                {isActive && (
                                    <div className={cn(
                                        "absolute -inset-4 rounded-3xl border border-dashed animate-[spin_10s_linear_infinite] opacity-30",
                                        step.color.replace("text-", "border-")
                                    )} />
                                )}

                                {/* Main Node Circle */}
                                <div className={cn(
                                    "w-24 h-24 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 relative backdrop-blur-xl border bg-[#0A0A0A]",
                                    step.border,
                                    isActive ? `shadow-[0_0_50px_-10px_currentColor] ${step.color}` : "border-white/10 shadow-none"
                                )}>
                                    <step.icon className={cn(
                                        "w-10 h-10 transition-all duration-300",
                                        isActive ? step.color : "text-gray-600"
                                    )} />

                                    {/* Inner Digital Noise (Glitch hint) */}
                                    {isActive && (
                                        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-20 mix-blend-overlay">
                                            <div className="w-full h-full bg-[url('/noise.png')] animate-pulse" />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="space-y-2 relative">
                                <h3 className={cn(
                                    "text-2xl font-bold transition-colors duration-300 tracking-tight",
                                    isActive ? "text-white" : "text-gray-500"
                                )}>
                                    {step.label}
                                </h3>

                                {/* Description with reveal animation */}
                                <div className={cn(
                                    "overflow-hidden transition-all duration-500 ease-out",
                                    isActive ? "max-h-20 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                                )}>
                                    <p className="text-sm text-gray-400 font-medium max-w-[200px] mx-auto leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>

                            {/* Mobile Connector */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden absolute -bottom-8 left-1/2 -translate-x-1/2 text-gray-800">
                                    <ArrowRight className="w-5 h-5 rotate-90" />
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

        </div>
    )
}
