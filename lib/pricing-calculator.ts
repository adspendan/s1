export type PlanType = "core" | "pro" | "enterprise" | "below_threshold"

export interface PricingResult {
    recommendedPlan: PlanType
    monthlySpendEstimate: number
    platformBreakdown: Record<string, number>
    baseFee: number | "custom"
    percentRange: [number, number] // [min_pct, max_pct] e.g. [3, 4] for 3-4%
    totalBand: [number, number] // [min_total, max_total]
}

export interface SpendInput {
    meta: number
    tiktok: number
    google: number
    youtube: number
    manualOverride?: number
}

export function calculatePricingBand(input: SpendInput): PricingResult {
    // 1. Calculate Total Spend
    const calculatedTotal = input.meta + input.tiktok + input.google + input.youtube
    const monthlySpendEstimate = input.manualOverride !== undefined ? input.manualOverride : calculatedTotal

    // 2. Determine Plan & Rates
    let recommendedPlan: PlanType = "below_threshold"
    let baseFee: number | "custom" = 0
    let percentRange: [number, number] = [0, 0]

    if (monthlySpendEstimate < 10000) {
        recommendedPlan = "below_threshold"
    } else if (monthlySpendEstimate < 50000) {
        recommendedPlan = "core"
        baseFee = 750
        percentRange = [3, 4]
    } else if (monthlySpendEstimate < 250000) {
        recommendedPlan = "pro"
        baseFee = 1500
        percentRange = [4, 5]
    } else {
        recommendedPlan = "enterprise"
        baseFee = "custom"
        percentRange = [5, 7]
    }

    // 3. Calculate Total Band
    let totalBand: [number, number] = [0, 0]

    if (typeof baseFee === "number") {
        const minVariable = monthlySpendEstimate * (percentRange[0] / 100)
        const maxVariable = monthlySpendEstimate * (percentRange[1] / 100)
        totalBand = [Math.round(baseFee + minVariable), Math.round(baseFee + maxVariable)]
    } else {
        // Enterprise custom logic placeholder
        const minVariable = monthlySpendEstimate * (percentRange[0] / 100)
        const maxVariable = monthlySpendEstimate * (percentRange[1] / 100)
        // Assuming a base fee placeholder for calculation or just variable
        // For enterprise, we might just show the variable part or a "Contact Sales"
        // But per requirements: "If you spend $500K/month → cost $30K–$40K/month."
        // Let's assume a base fee of roughly $5k for calculation purposes if needed, 
        // or just return the variable part if base is custom. 
        // Actually, let's just return the variable part + a placeholder base for the band
        // to match the example logic.
        totalBand = [Math.round(5000 + minVariable), Math.round(10000 + maxVariable)]
    }

    return {
        recommendedPlan,
        monthlySpendEstimate,
        platformBreakdown: {
            Meta: input.meta,
            TikTok: input.tiktok,
            Google: input.google,
            YouTube: input.youtube,
        },
        baseFee,
        percentRange,
        totalBand,
    }
}
