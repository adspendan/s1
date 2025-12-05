"use client"

import { useState, useEffect } from "react"
import { SpendSummary, fetchMockSpendSummary, connectMockPlatform } from "@/lib/mock-services"
import { calculatePricingBand, PricingResult } from "@/lib/pricing-calculator"

export type OnboardingStep = 1 | 2 | 3 | 4

export interface OnboardingState {
    step: OnboardingStep
    platforms: {
        meta: boolean
        tiktok: boolean
        google: boolean
        youtube: boolean
    }
    spendData: SpendSummary | null
    manualSpendOverride: number | undefined
    pricingResult: PricingResult | null
    isLoading: boolean
}

export function useOnboarding() {
    const [state, setState] = useState<OnboardingState>({
        step: 1,
        platforms: {
            meta: false,
            tiktok: false,
            google: false,
            youtube: false,
        },
        spendData: null,
        manualSpendOverride: undefined,
        pricingResult: null,
        isLoading: false,
    })

    const connectPlatform = async (platform: keyof typeof state.platforms) => {
        setState((prev) => ({ ...prev, isLoading: true }))
        await connectMockPlatform(platform)
        setState((prev) => ({
            ...prev,
            platforms: { ...prev.platforms, [platform]: true },
            isLoading: false,
        }))
    }

    const fetchSpend = async () => {
        setState((prev) => ({ ...prev, isLoading: true }))
        const data = await fetchMockSpendSummary()
        setState((prev) => ({ ...prev, spendData: data, isLoading: false }))
    }

    const calculatePricing = async () => {
        if (!state.spendData) return

        setState((prev) => ({ ...prev, isLoading: true }))

        // Simulate "Operator Scanning" animation delay
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const input = {
            meta: state.platforms.meta ? state.spendData.platforms.meta.last30 : 0,
            tiktok: state.platforms.tiktok ? state.spendData.platforms.tiktok.last30 : 0,
            google: state.platforms.google ? state.spendData.platforms.google.last30 : 0,
            youtube: state.platforms.youtube ? state.spendData.platforms.youtube.last30 : 0,
            manualOverride: state.manualSpendOverride,
        }

        const result = calculatePricingBand(input)
        setState((prev) => ({ ...prev, pricingResult: result, isLoading: false }))
    }

    const nextStep = async () => {
        if (state.step === 1) {
            await fetchSpend()
            setState((prev) => ({ ...prev, step: 2 }))
        } else if (state.step === 2) {
            await calculatePricing()
            setState((prev) => ({ ...prev, step: 3 }))
        } else if (state.step === 3) {
            setState((prev) => ({ ...prev, step: 4 }))
        }
    }

    const prevStep = () => {
        setState((prev) => ({ ...prev, step: Math.max(1, prev.step - 1) as OnboardingStep }))
    }

    const setManualOverride = (amount: number) => {
        setState((prev) => ({ ...prev, manualSpendOverride: amount }))
    }

    return {
        state,
        connectPlatform,
        nextStep,
        prevStep,
        setManualOverride,
    }
}
