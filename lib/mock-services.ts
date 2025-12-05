export interface SpendSummary {
    platforms: {
        meta: { last30: number; last90: number; connected: boolean }
        tiktok: { last30: number; last90: number; connected: boolean }
        google: { last30: number; last90: number; connected: boolean }
        youtube: { last30: number; last90: number; connected: boolean }
    }
}

export const mockSpendData: SpendSummary = {
    platforms: {
        meta: { last30: 18450, last90: 52000, connected: false },
        tiktok: { last30: 7200, last90: 19000, connected: false },
        google: { last30: 5100, last90: 14000, connected: false },
        youtube: { last30: 1200, last90: 3500, connected: false },
    },
}

export async function fetchMockSpendSummary(): Promise<SpendSummary> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return mockSpendData
}

export async function connectMockPlatform(platform: string): Promise<boolean> {
    await new Promise((resolve) => setTimeout(resolve, 800))
    return true
}
