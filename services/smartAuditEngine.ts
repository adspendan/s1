// services/smartAuditEngine.ts

export interface SmartAuditInput {
    inputType: "manual" | "url" | "api" | "upload";
    platforms: string[];
    spendRange: string;
    files: { name: string; size?: number; type?: string }[];
    url?: string;
    context?: string;
    email?: string;
}

export interface SmartAuditOutput {
    healthScore: number;
    wasteLow: number;
    wasteHigh: number;
    fatigueRisk: "low" | "moderate" | "high";
    roasLiftLow: number;
    roasLiftHigh: number;
    summary: string;
    recommendations: string[];
    fatigueTime: number; // kept for compatibility with UI
}

type Signals = {
    platformCount: number;
    spendBucketIndex: number;
    hasFiles: boolean;
    inputType: "manual" | "url" | "api" | "upload";
    urlValid: boolean;
};

type Scores = {
    healthScore: number;
    wasteLow: number;
    wasteHigh: number;
    fatigueRisk: "low" | "moderate" | "high";
    roasLiftLow: number;
    roasLiftHigh: number;
    fatigueTime: number;
};

// 1. Derive Signals
function deriveSignals(input: SmartAuditInput): Signals {
    let platformCount = input.platforms.length;

    // In API mode, simulate finding more platforms
    if (input.inputType === "api") {
        platformCount = Math.max(platformCount, 2);
    }

    const spendRanges = ["< $10k", "$10k–$50k", "$50k–$150k", "$150k–$500k", "$500k+"];
    let spendBucketIndex = Math.max(
        0,
        spendRanges.findIndex((r) => r === input.spendRange)
    );

    // In URL mode, infer spend from "site complexity" (random simulation for now)
    if (input.inputType === "url" && spendBucketIndex === 0) {
        spendBucketIndex = 1; // Assume at least some spend if they have a valid site
    }

    const hasFiles = input.files && input.files.length > 0;
    const urlValid = !!input.url && input.url.includes(".");

    return { platformCount, spendBucketIndex, hasFiles, inputType: input.inputType, urlValid };
}

// 2. Compute Scores
function computeScores(signals: Signals): Scores {
    let baseHealth = 82; // optimistic baseline
    baseHealth -= signals.platformCount * 3; // more platforms = more complexity/chaos
    baseHealth -= signals.spendBucketIndex * 5; // higher spend = harder to maintain efficiency

    // Confidence adjustments based on input type
    if (signals.inputType === "manual" && !signals.hasFiles) baseHealth -= 5; // less confidence
    if (signals.inputType === "api") baseHealth += 2; // higher confidence in data
    if (signals.inputType === "url" && signals.urlValid) baseHealth += 1; // verified site

    // Add some randomness to make it feel alive (simulating varying account conditions)
    baseHealth += Math.floor(Math.random() * 10 - 5);

    baseHealth = Math.min(98, Math.max(30, baseHealth));

    const wasteHigh = Math.round((100 - baseHealth) * 0.8);
    const wasteLow = Math.max(10, wasteHigh - 12);

    const roasLiftHigh = Math.round((100 - baseHealth) * 0.6);
    const roasLiftLow = Math.max(5, roasLiftHigh - 10);

    let fatigueRisk: "low" | "moderate" | "high";
    if (signals.platformCount >= 3 || signals.spendBucketIndex >= 2) fatigueRisk = "high";
    else if (signals.spendBucketIndex === 1) fatigueRisk = "moderate";
    else fatigueRisk = "low";

    const fatigueTime = fatigueRisk === "high" ? 2.1 : fatigueRisk === "moderate" ? 5.4 : 12.5;

    return { healthScore: baseHealth, wasteLow, wasteHigh, roasLiftLow, roasLiftHigh, fatigueRisk, fatigueTime };
}

// 3. Build Features (for future LLM)
function buildFeatures(
    input: SmartAuditInput,
    signals: Signals,
    scores: Scores
) {
    return {
        platforms: input.platforms,
        spendRange: input.spendRange,
        context: input.context,
        ...signals,
        ...scores,
    };
}

// 4. Generate Narrative (Rule-based for now)
function generateNarrative(features: ReturnType<typeof buildFeatures>): {
    summary: string;
    recommendations: string[];
} {
    // TODO: Replace this rule-based narrative with a Claude/Gemini call once backend AI integration is ready.

    let summary = "";
    if (features.healthScore < 50) {
        summary = `Your account is in a critical state. High complexity across ${features.platformCount} platforms and significant spend leakage is dragging down performance. Immediate consolidation is required.`;
    } else if (features.healthScore < 70) {
        summary = `Your account shows potential but is leaking efficiency. We detected signs of ${features.fatigueRisk} creative fatigue and budget fragmentation that is preventing you from scaling further.`;
    } else {
        summary = `Your account is performing well, but there is still room for optimization. Fine-tuning your creative rotation and tightening budget allocation could unlock that final tier of ROAS.`;
    }

    const recommendations = [
        "Consolidate overlapping ad sets to strengthen algorithmic learning.",
        `Shift ${Math.floor(Math.random() * 10 + 15)}% of budget from low performers to top 20% winners.`,
    ];

    if (features.fatigueRisk === "high") {
        recommendations.push("Implement a 3-day creative rotation cycle to combat high fatigue.");
    } else {
        recommendations.push("Test new creative angles every 7-10 days.");
    }

    if (features.platformCount > 2) {
        recommendations.push("Unify audience definitions across Meta and TikTok for consistent targeting.");
    }

    if (features.spendBucketIndex >= 2) {
        recommendations.push("Implement automated pacing guardrails to prevent daily budget overruns.");
    }

    return { summary, recommendations };
}

// Main Engine Function
export async function runSmartAuditEngine(
    input: SmartAuditInput
): Promise<SmartAuditOutput> {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const signals = deriveSignals(input);
    const scores = computeScores(signals);
    const features = buildFeatures(input, signals, scores);
    const narrative = generateNarrative(features);

    return {
        ...scores,
        summary: narrative.summary,
        recommendations: narrative.recommendations,
    };
}
