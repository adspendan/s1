import { Zap, Shield, Activity, BarChart3, Users, Beaker, LineChart, Palette } from "lucide-react"

export const pricingData = {
    header: {
        eyebrow: "Pricing",
        headline: "Pricing That Scales With Your Ad Spend",
        subheadline: "Scaletio runs like a media buyer, not a dashboard. You pay a simple base operator fee plus a small percentage of managed ad spend — so your cost tracks the value we create.",
        keyline: "No long-term contracts. No setup tax. Just an operator that wakes up when your spend does."
    },
    strip: [
        {
            title: "Base Operator Fee",
            description: "Access to operator intelligence, monitoring, and dashboards."
        },
        {
            title: "% of Managed Ad Spend",
            description: "A small percentage of spend Scaletio actively optimizes."
        },
        {
            title: "Optional Upgrades",
            description: "Creative+ Lab, Forecasting Engine, Autonomous Experimentation, Agency Mode."
        }
    ],
    plans: [
        {
            name: "Autonomous Core",
            tagline: "For Growing Brands",
            baseFee: 750,
            percentage: "3–4%",
            spendRange: "$10k–$50k/month",
            example: "If you spend $25,000/month → total cost ~$1,500–$1,750/month.",
            features: [
                "Operator cycles every 6 hours",
                "Up to $50k/month spend",
                "Budget & bid optimizations",
                "Waste protection",
                "Creative fatigue alerts",
                "Cross-platform",
                "Operator Log",
                "Slack/email alerts"
            ],
            cta: "Start with Core",
            highlight: false,
            bestFor: "Perfect for early-scale DTC/info brands"
        },
        {
            name: "Autonomous Pro",
            tagline: "Most Popular",
            baseFee: 1500,
            percentage: "4–5%",
            spendRange: "$50k–$250k/month",
            example: "If you spend $100k/month → total cost ~$5,500–$6,500/month.",
            features: [
                "Operator cycles every 1–2 hours",
                "Up to $250k/month spend",
                "Cross-platform reallocations",
                "Autonomous scaling",
                "Multi-account",
                "Creative fatigue intelligence",
                "Weekly Operator Briefing",
                "Priority support"
            ],
            cta: "Talk to Sales About Pro",
            highlight: true,
            popular: true,
            bestFor: "For brands scaling aggressively"
        },
        {
            name: "Operator+ Enterprise",
            tagline: "For Serious Spend",
            baseFee: "Custom",
            percentage: "5–7%",
            spendRange: "$250k → $5M+/month",
            example: "If you spend $500k/month → cost $30k–$40k/month.",
            features: [
                "Continuous operator cycles",
                "No spend limit",
                "Custom optimization playbooks",
                "Multi-market orchestration",
                "Enterprise controls",
                "VPC/on-prem",
                "Audit logs",
                "Dedicated success pod"
            ],
            cta: "Book Enterprise Strategy Call",
            highlight: false,
            bestFor: "For agencies & brands requiring deep autonomy"
        }
    ],
    comparison: [
        {
            feature: "Cost Structure",
            human: "Salary + Benefits ($60k+)",
            saas: "Flat Fee (Low Value)",
            scaletio: "Base + % (Aligned)",
        },
        {
            feature: "Availability",
            human: "9-5, Mon-Fri",
            saas: "24/7 (Passive)",
            scaletio: "24/7 (Active)",
        },
        {
            feature: "Optimization Cycles",
            human: "Daily/Weekly",
            saas: "Manual Trigger",
            scaletio: "Continuous (1-6h)",
        },
        {
            feature: "Cross-Platform Intelligence",
            human: "Siloed",
            saas: "Siloed",
            scaletio: "Unified Brain",
        },
        {
            feature: "Incentive Alignment",
            human: "Variable",
            saas: "None",
            scaletio: "High (Growth Focused)",
        },
        {
            feature: "Execution Autonomy",
            human: "High (Manual)",
            saas: "Low (Manual)",
            scaletio: "High (Autonomous)",
        }
    ],
    modules: [
        {
            title: "Creative Intelligence Lab",
            icon: Palette,
            description: "Unlock inside the app once you're live."
        },
        {
            title: "Forecasting Engine",
            icon: LineChart,
            description: "Unlock inside the app once you're live."
        },
        {
            title: "Autonomous Experimentation",
            icon: Beaker,
            description: "Unlock inside the app once you're live."
        },
        {
            title: "Agency Mode",
            icon: Users,
            description: "Unlock inside the app once you're live."
        }
    ],
    faqs: [
        {
            question: "Why % of spend?",
            answer: "It aligns our incentives. We only make more when you scale successfully. It also allows us to provide enterprise-grade infrastructure to smaller brands without a massive upfront fee."
        },
        {
            question: "Is there a minimum?",
            answer: "Yes, the Autonomous Core plan starts at $750/mo base fee. This covers the infrastructure costs of running your dedicated operator instances."
        },
        {
            question: "How is “managed spend” calculated?",
            answer: "It's the total ad spend flowing through the ad accounts connected to Scaletio. We calculate this at the end of your billing cycle."
        },
        {
            question: "Can I cap my billing?",
            answer: "Yes. You can set strict spend limits in the dashboard. The operator will never exceed the budget guardrails you define."
        },
        {
            question: "Do you replace our agency/media buyer?",
            answer: "We replace the manual, repetitive tasks (bid management, budget pacing, anomaly detection). This frees up your human team to focus on strategy, creative, and offer development."
        },
        {
            question: "Is annual available?",
            answer: "Yes. Annual plans receive a 15% discount on the Base Operator Fee."
        }
    ]
}
