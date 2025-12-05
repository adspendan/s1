export type ToolType =
    | "smart_audit"
    | "creative_intel"
    | "benchmarks"
    | "spend_split"
    | "anomaly_detector"
    | "audience_overlap"
    | "attribution_truth"
    | "other";

export interface ToolRun {
    id: string;
    userId: string;
    tool: ToolType;
    label: string;        // e.g. "Smart Audit – Meta + TikTok"
    createdAt: string;    // ISO timestamp
    status: "completed" | "running" | "failed";
    summary?: string;     // short text summary of result
    metadata?: Record<string, any>;
}
