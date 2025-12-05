"use client"

import { PricingResult } from "@/lib/pricing-calculator"
import { CheckSquare } from "lucide-react"

interface ConfirmActivationCardProps {
    result: PricingResult
}

export function ConfirmActivationCard({ result }: ConfirmActivationCardProps) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-center">Summary</h3>

            <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                    <div className="text-sm text-gray-400 mb-1">Plan</div>
                    <div className="text-lg font-bold text-white capitalize">Autonomous {result.recommendedPlan}</div>
                </div>
                <div>
                    <div className="text-sm text-gray-400 mb-1">Est. Monthly Cost</div>
                    <div className="text-lg font-bold text-[#C1FF72]">
                        ${result.totalBand[0].toLocaleString()} – ${result.totalBand[1].toLocaleString()}
                    </div>
                </div>
            </div>

            <div className="space-y-4 mb-8 bg-black/20 p-6 rounded-xl">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-0.5 w-4 h-4 rounded border border-gray-600 group-hover:border-[#C1FF72] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#C1FF72] rounded-sm opacity-100" />
                    </div>
                    <span className="text-sm text-gray-400">
                        I understand that my Operator pricing will scale with my managed ad spend.
                    </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="mt-0.5 w-4 h-4 rounded border border-gray-600 group-hover:border-[#C1FF72] flex items-center justify-center">
                        <div className="w-2 h-2 bg-[#C1FF72] rounded-sm opacity-100" />
                    </div>
                    <span className="text-sm text-gray-400">
                        I understand I can change plans or pause Autopilot at any time.
                    </span>
                </label>
            </div>
        </div>
    )
}
