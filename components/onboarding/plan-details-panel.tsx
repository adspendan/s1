"use client"

import { Check } from "lucide-react"
import { PlanType } from "@/lib/pricing-calculator"

interface PlanDetailsPanelProps {
    plan: PlanType
}

export function PlanDetailsPanel({ plan }: PlanDetailsPanelProps) {
    if (plan === "below_threshold") return null

    const features = {
        core: [
            "Operator cycles every 6 hours",
            "Budget & bid optimizations",
            "Waste protection",
            "Creative fatigue alerts"
        ],
        pro: [
            "Operator cycles every 1–2 hours",
            "Cross-platform reallocations",
            "Autonomous scaling",
            "Weekly Operator Briefing"
        ],
        enterprise: [
            "Continuous optimization",
            "Custom playbooks",
            "Multi-market orchestration",
            "Dedicated success pod"
        ]
    }

    const currentFeatures = features[plan as keyof typeof features] || []

    return (
        <div className="max-w-2xl mx-auto mt-8">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 text-center">Included Features</h4>
            <div className="grid grid-cols-2 gap-4">
                {currentFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <Check className="w-4 h-4 text-[#C1FF72] mt-0.5 shrink-0" />
                        {feature}
                    </div>
                ))}
            </div>
        </div>
    )
}
