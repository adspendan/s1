"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { Search, Zap, Activity, TrendingUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface OperatorPulseProps {
    isActive: boolean
}

export function OperatorPulse({ isActive }: OperatorPulseProps) {
    const controls = useAnimation()
    const [activeStep, setActiveStep] = useState<number>(-1)

    useEffect(() => {
        if (isActive) {
            const sequence = async () => {
                // Reset
                setActiveStep(-1)
                await controls.start("hidden")

                // Step 1: Audit
                setActiveStep(0)
                await controls.start("step1")

                // Step 2: Decide
                setActiveStep(1)
                await controls.start("step2")

                // Step 3: Act
                setActiveStep(2)
                await controls.start("step3")

                // Step 4: Learn
                setActiveStep(3)
                await controls.start("step4")

                // Final: Complete
                setActiveStep(4)
                await controls.start("complete")
            }
            sequence()
        }
    }, [isActive, controls])

    const steps = [
        { id: "audit", icon: Search, label: "Audit" },
        { id: "decide", icon: Zap, label: "Decide" },
        { id: "act", icon: Activity, label: "Act" },
        { id: "learn", icon: TrendingUp, label: "Learn" },
    ]

    return (
        <div className="relative w-full h-24 flex items-center justify-between px-8">
            {/* Connecting Line (Background) */}
            <div className="absolute top-1/2 left-8 right-8 h-[1px] bg-white/5 -translate-y-1/2" />

            {/* Animated Pulse Line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                <motion.path
                    d="M 32 48 L 100% 48" // Simplified path, will need dynamic calculation in real app or fixed width assumption
                    stroke="url(#pulse-gradient)"
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={controls}
                    variants={{
                        hidden: { pathLength: 0, opacity: 0 },
                        step1: { pathLength: 0.25, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
                        step2: { pathLength: 0.5, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
                        step3: { pathLength: 0.75, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
                        step4: { pathLength: 1, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
                        complete: { pathLength: 1, opacity: 0, transition: { duration: 0.3 } }
                    }}
                />
                <defs>
                    <linearGradient id="pulse-gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="currentColor" className="text-primary" />
                        <stop offset="100%" stopColor="currentColor" className="text-primary" />
                    </linearGradient>
                </defs>
            </svg>

            {steps.map((step, i) => (
                <div key={step.id} className="relative z-10 flex flex-col items-center gap-3">
                    <div className="relative">
                        {/* Icon Container */}
                        <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 bg-transparent border border-white/10",
                            activeStep >= i ? "border-primary text-primary shadow-[0_0_20px_-5px_currentColor]" : "text-muted-foreground"
                        )}>
                            <step.icon className="w-4 h-4" />
                        </div>

                        {/* Circular Progress SVG */}
                        <svg className="absolute -inset-2 w-14 h-14 rotate-[-90deg] pointer-events-none">
                            <motion.circle
                                cx="28"
                                cy="28"
                                r="23"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                className="text-primary"
                                initial={{ pathLength: 0 }}
                                animate={activeStep === i ? { pathLength: 1 } : { pathLength: activeStep > i ? 1 : 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>
                    <span className={cn(
                        "text-[10px] font-medium uppercase tracking-wider transition-colors duration-300",
                        activeStep >= i ? "text-white" : "text-gray-500"
                    )}>
                        {step.label}
                    </span>
                </div>
            ))}
        </div>
    )
}
