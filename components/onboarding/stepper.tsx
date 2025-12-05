"use client"

import { Check } from "lucide-react"
import { OnboardingStep } from "@/hooks/use-onboarding"

interface StepperProps {
    currentStep: OnboardingStep
}

export function Stepper({ currentStep }: StepperProps) {
    const steps = [
        { id: 1, title: "Connect" },
        { id: 2, title: "Review Spend" },
        { id: 3, title: "Pricing" },
        { id: 4, title: "Activate" },
    ]

    return (
        <div className="w-full max-w-3xl mx-auto mb-16 px-4">
            <div className="relative flex justify-between items-center">
                {/* Background Track */}
                <div className="absolute top-5 left-0 w-full h-[2px] bg-white/10 rounded-full z-0" />

                {/* Active Progress Track */}
                <div
                    className="absolute top-5 left-0 h-[2px] bg-[#C1FF72] rounded-full z-0 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(193,255,114,0.5)]"
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />

                {steps.map((step) => {
                    const isActive = step.id === currentStep
                    const isCompleted = step.id < currentStep

                    return (
                        <div key={step.id} className="relative z-10 flex flex-col items-center group cursor-default">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500 ${isActive
                                        ? "bg-[#050708] border-[#C1FF72] text-[#C1FF72] shadow-[0_0_20px_rgba(193,255,114,0.4)] scale-110"
                                        : isCompleted
                                            ? "bg-[#C1FF72] border-[#C1FF72] text-black shadow-[0_0_10px_rgba(193,255,114,0.2)]"
                                            : "bg-[#050708] border-white/10 text-gray-600"
                                    }`}
                            >
                                {isCompleted ? <Check className="w-5 h-5" /> : step.id}
                            </div>
                            <span
                                className={`absolute top-14 text-xs font-medium tracking-wider uppercase transition-all duration-300 w-32 text-center ${isActive ? "text-white opacity-100 translate-y-0" : isCompleted ? "text-[#C1FF72] opacity-70" : "text-gray-600 opacity-50"
                                    }`}
                            >
                                {step.title}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
