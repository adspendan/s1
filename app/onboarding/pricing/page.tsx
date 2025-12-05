"use client"

import { useOnboarding } from "@/hooks/use-onboarding"
import { Stepper } from "@/components/onboarding/stepper"
import { ConnectPlatformCard } from "@/components/onboarding/connect-platform-card"
import { SpendSummaryCard } from "@/components/onboarding/spend-summary-card"
import { PricingBandCard } from "@/components/onboarding/pricing-band-card"
import { PlanDetailsPanel } from "@/components/onboarding/plan-details-panel"
import { ConfirmActivationCard } from "@/components/onboarding/confirm-activation-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-animations"

import { GuardrailPreview } from "@/components/onboarding/guardrail-preview"
import { MessageCircle } from "lucide-react"

export default function OnboardingPricingPage() {
    const { state, connectPlatform, nextStep, prevStep, setManualOverride } = useOnboarding()

    const canProceed = () => {
        if (state.step === 1) {
            return Object.values(state.platforms).some(Boolean)
        }
        if (state.step === 3 && state.pricingResult?.recommendedPlan === "below_threshold") {
            return false
        }
        return true
    }

    return (
        <main className="min-h-screen bg-[#050708] text-white overflow-hidden flex flex-col relative">
            <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a1a1a] via-[#050708] to-[#050708] z-0 pointer-events-none" />

            {/* Need Help Link */}
            <div className="absolute top-6 right-6 z-50">
                <Button variant="ghost" className="text-gray-400 hover:text-white gap-2">
                    <MessageCircle className="w-4 h-4" />
                    Need help?
                </Button>
            </div>

            <div className="relative z-10 flex-1 flex flex-col max-w-4xl mx-auto w-full px-4 py-12">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold mb-2">Setup Your Operator</h1>
                    <p className="text-gray-400 text-sm">Configure your autonomous environment.</p>
                </div>

                <Stepper currentStep={state.step} />

                <div className="flex-1 flex flex-col justify-center">
                    <ScrollReveal key={state.step}>
                        {state.step === 1 && (
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-4">Step 1 — Connect Your Ad Accounts</h2>
                                    <p className="text-gray-400 max-w-lg mx-auto">
                                        Scaletio needs read access to your ad accounts to estimate your spend and design the best operator configuration.
                                    </p>
                                </div>
                                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
                                    <ConnectPlatformCard
                                        name="Meta"
                                        isConnected={state.platforms.meta}
                                        onConnect={() => connectPlatform("meta")}
                                        isLoading={state.isLoading}
                                    />
                                    <ConnectPlatformCard
                                        name="TikTok"
                                        isConnected={state.platforms.tiktok}
                                        onConnect={() => connectPlatform("tiktok")}
                                        isLoading={state.isLoading}
                                    />
                                    <ConnectPlatformCard
                                        name="Google"
                                        isConnected={state.platforms.google}
                                        onConnect={() => connectPlatform("google")}
                                        isLoading={state.isLoading}
                                    />
                                    <ConnectPlatformCard
                                        name="YouTube"
                                        isConnected={state.platforms.youtube}
                                        onConnect={() => connectPlatform("youtube")}
                                        isLoading={state.isLoading}
                                    />
                                </div>
                            </div>
                        )}

                        {state.step === 2 && (
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-4">Step 2 — Review Your Spend</h2>
                                    <p className="text-gray-400 max-w-lg mx-auto">
                                        We use the last 30–90 days to estimate your operator’s workload and pricing band.
                                    </p>
                                </div>
                                <SpendSummaryCard
                                    spendData={state.spendData}
                                    manualOverride={state.manualSpendOverride}
                                    onOverrideChange={setManualOverride}
                                    platforms={state.platforms}
                                />
                            </div>
                        )}

                        {state.step === 3 && state.pricingResult && (
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-4">Step 3 — Your Operator Pricing</h2>
                                    <p className="text-gray-400 max-w-lg mx-auto">
                                        Based on your current and expected ad spend, here’s how your Operator would be priced.
                                    </p>
                                </div>
                                <PricingBandCard result={state.pricingResult} />
                                {state.pricingResult.recommendedPlan !== "below_threshold" && (
                                    <>
                                        <PlanDetailsPanel plan={state.pricingResult.recommendedPlan} />
                                        <GuardrailPreview />
                                    </>
                                )}
                            </div>
                        )}

                        {state.step === 4 && state.pricingResult && (
                            <div className="space-y-8">
                                <div className="text-center">
                                    <h2 className="text-3xl font-bold mb-4">Step 4 — Activate Your Operator</h2>
                                    <p className="text-gray-400 max-w-lg mx-auto">
                                        Lock in your operator configuration and start your first optimization cycles.
                                    </p>
                                </div>
                                <ConfirmActivationCard result={state.pricingResult} />
                            </div>
                        )}
                    </ScrollReveal>
                </div>

                <div className="mt-12 flex justify-between items-center max-w-2xl mx-auto w-full">
                    {state.step > 1 ? (
                        <Button variant="ghost" onClick={prevStep} className="text-gray-400 hover:text-white">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                    ) : <div />}

                    <Button
                        onClick={nextStep}
                        disabled={!canProceed() || state.isLoading}
                        className="bg-[#C1FF72] text-black hover:bg-[#b0ef5e] px-8 py-6 rounded-full font-bold shadow-[0_0_20px_rgba(193,255,114,0.2)]"
                    >
                        {state.isLoading ? "Processing..." : state.step === 4 ? "Activate Operator" : "Continue"}
                        {!state.isLoading && state.step !== 4 && <ArrowRight className="w-4 h-4 ml-2" />}
                    </Button>
                </div>
            </div>
        </main>
    )
}
