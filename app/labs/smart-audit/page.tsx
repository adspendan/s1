"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackgroundGrid } from "@/components/background-grid"
import { GlowButton } from "@/components/glow-button"
import { useToolHistory } from "@/hooks/useToolHistory"
import { useState, useEffect } from "react"
import { Loader2, CheckCircle, AlertTriangle, ArrowRight, Upload, BarChart3, Clock, TrendingUp, DollarSign, ChevronLeft, Mail, Download, Share2, Globe, Link as LinkIcon, FileText, Database } from "lucide-react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { useUser } from "@clerk/nextjs"
import { runSmartAuditEngine, SmartAuditInput, SmartAuditOutput } from "@/services/smartAuditEngine"
import { Button } from "@/components/ui/button"

import { saveSmartAuditReport } from "@/services/smartAuditReportService"
import { toast } from "sonner"

export default function SmartAuditPage() {
    const { recordToolRun } = useToolHistory()
    const { user, isLoaded } = useUser()
    const [status, setStatus] = useState<"idle" | "processing" | "complete">("idle")
    const [result, setResult] = useState<SmartAuditOutput | null>(null)
    const [reportId, setReportId] = useState<string | null>(null)

    // Form State
    const [inputMode, setInputMode] = useState<"manual" | "url" | "api" | "upload">("url")
    const [platforms, setPlatforms] = useState<string[]>([])
    const [spendRange, setSpendRange] = useState<string>("")
    const [fileName, setFileName] = useState<string | null>(null)
    const [url, setUrl] = useState("")
    const [notes, setNotes] = useState("")
    const [email, setEmail] = useState("")
    const [processingStep, setProcessingStep] = useState(0)

    // Auto-fill email if logged in
    useEffect(() => {
        if (user?.primaryEmailAddress?.emailAddress) {
            setEmail(user.primaryEmailAddress.emailAddress)
        }
    }, [user])

    const togglePlatform = (p: string) => {
        setPlatforms(prev => prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p])
    }

    const handleRunAudit = async () => {
        // Validation based on mode
        if (!email) return
        if (inputMode === "manual" && (!spendRange || platforms.length === 0)) return
        if (inputMode === "url" && !url) return
        if (inputMode === "upload" && !fileName) return
        // API mode validation is simulated as "always valid" if clicked

        setStatus("processing")

        // Simulate multi-step processing text
        const interval = setInterval(() => {
            setProcessingStep(prev => (prev + 1) % 3)
        }, 800)

        try {
            const input: SmartAuditInput = {
                inputType: inputMode,
                platforms,
                spendRange,
                files: fileName ? [{ name: fileName }] : [],
                url,
                context: notes,
                email
            }

            const output = await runSmartAuditEngine(input)
            setResult(output)

            // Log to history
            await recordToolRun({
                tool: "smart_audit",
                label: `Smart Audit – ${platforms.join(", ")} – ${spendRange}`,
                status: "completed",
                summary: output.summary,
                metadata: {
                    platforms,
                    spendRange,
                    emailUsed: email,
                    healthScore: output.healthScore,
                    waste: { low: output.wasteLow, high: output.wasteHigh },
                    fatigueRisk: output.fatigueRisk,
                    roasLift: { low: output.roasLiftLow, high: output.roasLiftHigh }
                }
            })

            // Save Report to Supabase
            try {
                const { reportId: newReportId } = await saveSmartAuditReport({
                    userId: user?.id,
                    email,
                    input,
                    output
                })
                setReportId(newReportId)
            } catch (err) {
                console.error("Failed to save report:", err)
            }

            setStatus("complete")
        } catch (error) {
            console.error("Audit failed:", error)
            setStatus("idle")
        } finally {
            clearInterval(interval)
        }
    }

    const handleEmailReport = async () => {
        if (!reportId && result) {
            // If for some reason report wasn't saved, try saving again (fallback)
            try {
                const input: SmartAuditInput = {
                    platforms,
                    spendRange,
                    files: fileName ? [{ name: fileName }] : [],
                    context: notes,
                    email
                }
                const { reportId: newReportId } = await saveSmartAuditReport({
                    userId: user?.id,
                    email,
                    input,
                    output: result
                })
                setReportId(newReportId)
                await requestEmail(newReportId)
            } catch (err) {
                toast.error("Failed to save report. Please try again.")
                return
            }
        } else if (reportId) {
            await requestEmail(reportId)
        }
    }

    const requestEmail = async (id: string) => {
        try {
            const res = await fetch("/api/audit/request-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ reportId: id }),
            })

            if (res.ok) {
                toast.success("We’ll email your report shortly.")
            } else {
                toast.error("Failed to request email.")
            }
        } catch (err) {
            console.error(err)
            toast.error("Something went wrong.")
        }
    }

    const processingMessages = [
        "Reading cross-platform performance signals...",
        "Estimating budget waste and fatigue risk...",
        "Modeling scaling and ROAS opportunity..."
    ]

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black">
                <BackgroundGrid />

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                            <Link href="/hub" className="hover:text-[#C1FF72] transition-colors">Hub</Link>
                            <span>/</span>
                            <Link href="/labs" className="hover:text-[#C1FF72] transition-colors">Labs</Link>
                            <span>/</span>
                            <span className="text-white">Smart Audit</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Scaletio Smart Audit</h1>
                        <p className="text-xl text-gray-400 max-w-2xl">
                            Instant diagnosis of budget waste, creative fatigue, scaling gaps, and ROAS opportunities — powered by the Autonomous Ads Operator.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            {["Works with Meta, TikTok, Google, YouTube", "Operator-grade analysis", "Runs in seconds"].map((badge) => (
                                <span key={badge} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-gray-400">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 max-w-7xl mx-auto">

                        {/* LEFT: Input Panel */}
                        <div className="lg:col-span-5 space-y-6">
                            <div className="bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl h-full flex flex-col">
                                <div className="mb-8">
                                    <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-full bg-[#C1FF72] text-black flex items-center justify-center text-xs font-bold">1</span>
                                        Account & Data Inputs
                                    </h2>
                                    <p className="text-sm text-gray-400 pl-8">Tell the operator what you’re running so it can analyze your account health.</p>
                                </div>

                                <div className="space-y-8 flex-grow">

                                    {/* Mode Selector */}
                                    <div className="grid grid-cols-4 gap-2 p-1 bg-black/40 rounded-xl border border-white/10">
                                        {[
                                            { id: "url", icon: Globe, label: "URL Scan" },
                                            { id: "api", icon: Database, label: "Connect" },
                                            { id: "upload", icon: Upload, label: "Upload" },
                                            { id: "manual", icon: FileText, label: "Manual" },
                                        ].map((mode) => (
                                            <button
                                                key={mode.id}
                                                onClick={() => setInputMode(mode.id as any)}
                                                className={cn(
                                                    "flex flex-col items-center justify-center gap-1 py-3 rounded-lg text-[10px] font-medium transition-all",
                                                    inputMode === mode.id
                                                        ? "bg-[#C1FF72] text-black shadow-lg"
                                                        : "text-gray-400 hover:text-white hover:bg-white/5"
                                                )}
                                            >
                                                <mode.icon className="w-4 h-4" />
                                                {mode.label}
                                            </button>
                                        ))}
                                    </div>

                                    {/* URL MODE INPUTS */}
                                    {inputMode === "url" && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-3">Website URL</label>
                                                <div className="relative">
                                                    <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                    <input
                                                        type="url"
                                                        value={url}
                                                        onChange={(e) => setUrl(e.target.value)}
                                                        placeholder="https://yourbrand.com"
                                                        className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                                                    />
                                                </div>
                                                <p className="text-xs text-gray-500 mt-2">We’ll scan your landing page for pixel health and conversion optimization.</p>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-3">Monthly Ad Spend (Estimate)</label>
                                                <select
                                                    value={spendRange}
                                                    onChange={(e) => setSpendRange(e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                                                >
                                                    <option value="" disabled>Select a range</option>
                                                    <option value="< $10k">&lt; $10k</option>
                                                    <option value="$10k–$50k">$10k – $50k</option>
                                                    <option value="$50k–$150k">$50k – $150k</option>
                                                    <option value="$150k–$500k">$150k – $500k</option>
                                                    <option value="$500k+">$500k+</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* API MODE INPUTS */}
                                    {inputMode === "api" && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                            <div className="grid grid-cols-1 gap-3">
                                                <Button variant="outline" className="h-14 justify-start gap-3 border-white/10 hover:bg-[#1877F2]/10 hover:border-[#1877F2] hover:text-[#1877F2] transition-all group" onClick={() => togglePlatform("Meta")}>
                                                    <div className="w-8 h-8 rounded-full bg-[#1877F2]/20 flex items-center justify-center">
                                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-bold text-white group-hover:text-[#1877F2]">Connect Meta Ads</div>
                                                        <div className="text-xs text-gray-500">Read-only access</div>
                                                    </div>
                                                    {platforms.includes("Meta") && <CheckCircle className="ml-auto w-5 h-5 text-[#C1FF72]" />}
                                                </Button>

                                                <Button variant="outline" className="h-14 justify-start gap-3 border-white/10 hover:bg-[#EA4335]/10 hover:border-[#EA4335] hover:text-[#EA4335] transition-all group" onClick={() => togglePlatform("Google")}>
                                                    <div className="w-8 h-8 rounded-full bg-[#EA4335]/20 flex items-center justify-center">
                                                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-bold text-white group-hover:text-[#EA4335]">Connect Google Ads</div>
                                                        <div className="text-xs text-gray-500">Read-only access</div>
                                                    </div>
                                                    {platforms.includes("Google") && <CheckCircle className="ml-auto w-5 h-5 text-[#C1FF72]" />}
                                                </Button>
                                            </div>
                                            <p className="text-xs text-gray-500 text-center">We use official APIs to scan your account structure. No data is stored.</p>
                                        </div>
                                    )}

                                    {/* UPLOAD MODE INPUTS */}
                                    {inputMode === "upload" && (
                                        <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                            <label className="block text-sm font-medium text-gray-400 mb-3">Upload Campaign Data</label>
                                            <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-[#C1FF72]/50 transition-colors cursor-pointer bg-white/5 group relative overflow-hidden">
                                                <div className="absolute inset-0 bg-[#C1FF72]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                <Upload className="w-10 h-10 text-gray-500 mx-auto mb-4 group-hover:text-[#C1FF72] transition-colors" />
                                                <p className="text-sm text-gray-300 font-medium mb-1">
                                                    {fileName ? <span className="text-[#C1FF72]">{fileName}</span> : "Drop CSV, PDF, or Screenshots"}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Support for Facebook Ads Manager exports or campaign screenshots.
                                                </p>
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept=".csv,.xlsx,.zip,.png,.jpg,.jpeg,.pdf"
                                                    onChange={(e) => setFileName(e.target.files?.[0]?.name || null)}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {/* MANUAL MODE INPUTS (Existing) */}
                                    {inputMode === "manual" && (
                                        <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                            {/* Platform Selector */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-3">Ad Platforms</label>
                                                <div className="grid grid-cols-2 gap-3">
                                                    {["Meta", "TikTok", "Google", "YouTube"].map((p) => (
                                                        <button
                                                            key={p}
                                                            onClick={() => togglePlatform(p)}
                                                            className={cn(
                                                                "px-4 py-3 rounded-xl border text-sm font-medium transition-all text-left relative overflow-hidden group",
                                                                platforms.includes(p)
                                                                    ? "bg-[#C1FF72]/10 border-[#C1FF72] text-[#C1FF72] shadow-[0_0_15px_rgba(193,255,114,0.2)]"
                                                                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10"
                                                            )}
                                                        >
                                                            <span className="relative z-10">{p}</span>
                                                            {platforms.includes(p) && <div className="absolute inset-0 bg-[#C1FF72]/5 animate-pulse" />}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Spend Range */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-400 mb-3">Monthly Ad Spend</label>
                                                <select
                                                    value={spendRange}
                                                    onChange={(e) => setSpendRange(e.target.value)}
                                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                                                >
                                                    <option value="" disabled>Select a range</option>
                                                    <option value="< $10k">&lt; $10k</option>
                                                    <option value="$10k–$50k">$10k – $50k</option>
                                                    <option value="$50k–$150k">$50k – $150k</option>
                                                    <option value="$150k–$500k">$150k – $500k</option>
                                                    <option value="$500k+">$500k+</option>
                                                </select>
                                            </div>
                                        </div>
                                    )}

                                    {/* Context (Shared) */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-3">Context (Optional)</label>
                                        <textarea
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            placeholder="e.g. just launched new offers, scaling too fast, attribution feels off..."
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] min-h-[80px] text-sm"
                                        />
                                    </div>

                                    {/* Email Capture (Shared) */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-3">Email (for your report)</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="name@company.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white focus:outline-none focus:border-[#C1FF72] transition-colors"
                                            />
                                        </div>
                                        {!user && (
                                            <p className="text-xs text-gray-500 mt-2">We’ll email you a copy of your audit. No spam.</p>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-8 pt-6 border-t border-white/10">
                                    <GlowButton
                                        onClick={handleRunAudit}
                                        disabled={status === "processing" || !email || (inputMode === "manual" && (!spendRange || platforms.length === 0)) || (inputMode === "url" && !url) || (inputMode === "upload" && !fileName)}
                                        className="w-full py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === "processing" ? (
                                            <span className="flex items-center gap-2">
                                                <Loader2 className="w-5 h-5 animate-spin" /> Processing...
                                            </span>
                                        ) : "Run Audit"}
                                    </GlowButton>
                                    <p className="text-center text-xs text-gray-600 mt-3">Step 1 of 3 — Inputs → Analysis → Results</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Results Panel */}
                        <div className="lg:col-span-7">
                            <div className="bg-black/40 border border-white/10 rounded-3xl p-1 backdrop-blur-xl h-full min-h-[600px] relative overflow-hidden">

                                {/* IDLE STATE */}
                                {status === "idle" && (
                                    <div className="h-full flex flex-col items-center justify-center p-12 text-center relative">
                                        {/* Background Decoration */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                                            <div className="w-64 h-64 rounded-full border border-[#C1FF72] border-dashed animate-[spin_60s_linear_infinite]" />
                                            <div className="absolute w-48 h-48 rounded-full border border-white/20" />
                                        </div>

                                        <div className="w-20 h-20 bg-[#C1FF72]/5 rounded-full flex items-center justify-center mb-6 border border-[#C1FF72]/20 relative z-10">
                                            <BarChart3 className="w-10 h-10 text-[#C1FF72]/50" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 relative z-10">Ready to Analyze</h3>
                                        <p className="text-gray-400 max-w-md mb-8 relative z-10">
                                            Select your platforms and spend range to generate an instant audit of your account health.
                                        </p>

                                        <div className="grid grid-cols-2 gap-4 max-w-xs w-full relative z-10 opacity-50">
                                            {["Budget Waste", "Creative Fatigue", "Scaling Gaps", "ROAS Opportunity"].map((item) => (
                                                <div key={item} className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-500">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* PROCESSING STATE */}
                                {status === "processing" && (
                                    <div className="h-full flex flex-col items-center justify-center p-12 text-center relative">
                                        <div className="relative mb-8">
                                            <div className="w-24 h-24 rounded-full border-2 border-[#C1FF72]/30 border-t-[#C1FF72] animate-spin" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {/* Assuming 'Brain' icon is available or replaced with a generic one */}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-brain w-8 h-8 text-[#C1FF72] animate-pulse"><path d="M12 5c.68-.43 1.33-1 1.94-1.7C15.1 2.6 16.4 2 18 2c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2l-2.5 2.5c-.2.2-.4.3-.7.3H17c-.4 0-.7-.2-.9-.5L13.8 6c-.4-.5-1-.8-1.8-.8-.8 0-1.3.3-1.7.8L9.2 9.5c-.2.3-.5.5-.9.5H7c-.3 0-.5-.1-.7-.3L3.5 8c-.3-.6-.5-1.3-.5-2 0-2.2 1.8-4 4-4 1.6 0 2.9.6 4.1 1.7z" /><path d="M5 12c-2.2 0-4 1.8-4 4 0 .7.2 1.4.5 2l2.5 2.5c.2.2.4.3.7.3H7c.4 0 .7-.2.9-.5L10.2 18c.4-.5 1-.8 1.8-.8.8 0 1.3.3 1.7.8l2.6 3.5c.2.3.5.5.9.5h2c.3 0 .5-.1.7-.3l2.5-2.5c.3-.6.5-1.3.5-2 0-2.2-1.8-4-4-4-1.6 0-2.9.6-4.1 1.7z" /></svg>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-4">Analyzing Your Account...</h3>
                                        <div className="h-8 overflow-hidden">
                                            <p className="text-gray-400 font-mono text-sm animate-fade-in" key={processingStep}>
                                                {processingMessages[processingStep]}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* COMPLETE STATE */}
                                {status === "complete" && result && (
                                    <div className="h-full overflow-y-auto p-6 md:p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 custom-scrollbar">

                                        {/* Health Score Card */}
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1FF72]/10 blur-[50px] rounded-full pointer-events-none" />
                                            <div className="relative w-24 h-24 flex-shrink-0">
                                                <svg className="w-full h-full transform -rotate-90">
                                                    <circle cx="48" cy="48" r="40" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                                                    <circle cx="48" cy="48" r="40" stroke="#C1FF72" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 - (251.2 * result.healthScore) / 100} className="transition-all duration-1000 ease-out" />
                                                </svg>
                                                <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">
                                                    {result.healthScore}
                                                </div>
                                            </div>
                                            <div className="text-center md:text-left">
                                                <h3 className="text-lg font-bold mb-1">Account Health Score</h3>
                                                <div className={cn("inline-block px-2 py-0.5 rounded text-xs font-bold mb-2 uppercase tracking-wide",
                                                    result.healthScore > 80 ? "bg-green-500/20 text-green-400" : result.healthScore > 50 ? "bg-yellow-500/20 text-yellow-400" : "bg-red-500/20 text-red-400"
                                                )}>
                                                    {result.healthScore > 80 ? "High Performance" : result.healthScore > 50 ? "Needs Attention" : "Critical"}
                                                </div>
                                                <p className="text-sm text-gray-400">{result.summary}</p>
                                            </div>
                                        </div>

                                        {/* Budget Waste */}
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                            <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4 text-red-500" /> Budget Waste Estimate
                                            </h3>
                                            <div className="mb-4">
                                                <div className="text-3xl font-bold text-white mb-1">
                                                    {result.wasteLow}% – {result.wasteHigh}% <span className="text-base font-normal text-gray-500">Estimated Waste</span>
                                                </div>
                                                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-3">
                                                    <div className="h-full bg-gradient-to-r from-yellow-500 to-red-500" style={{ width: `${(result.wasteHigh + result.wasteLow) / 2}%` }} />
                                                </div>
                                            </div>
                                            <ul className="space-y-2 text-sm text-gray-400">
                                                <li className="flex gap-2"><span className="text-red-500">•</span> Excess spend on underperforming campaigns.</li>
                                                <li className="flex gap-2"><span className="text-red-500">•</span> Inefficient budget distribution across platforms.</li>
                                            </ul>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Fatigue */}
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                                <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                                    <Clock className="w-4 h-4 text-orange-400" /> Creative Fatigue
                                                </h3>
                                                <div className="flex items-end gap-2 mb-2">
                                                    <span className="text-2xl font-bold text-white">{result.fatigueTime} days</span>
                                                </div>
                                                <p className="text-xs text-gray-500 mb-4">Avg time to fatigue</p>
                                                <div className={cn("inline-block px-2 py-1 rounded text-xs font-bold mb-2",
                                                    result.fatigueRisk === "high" ? "bg-red-500/20 text-red-400" : result.fatigueRisk === "moderate" ? "bg-yellow-500/20 text-yellow-400" : "bg-green-500/20 text-green-400"
                                                )}>
                                                    {result.fatigueRisk.toUpperCase()} RISK
                                                </div>
                                            </div>

                                            {/* Scaling */}
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                                <h3 className="text-gray-400 font-medium mb-4 flex items-center gap-2">
                                                    <TrendingUp className="w-4 h-4 text-blue-400" /> Operator Recommendations
                                                </h3>
                                                <ul className="space-y-3 text-xs text-gray-300">
                                                    {result.recommendations.map((rec, i) => (
                                                        <li key={i} className="flex gap-2">
                                                            <span className="text-blue-400">•</span> {rec}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* ROAS Opportunity */}
                                        <div className="bg-gradient-to-br from-[#C1FF72]/10 to-black/40 border border-[#C1FF72]/30 rounded-2xl p-6 text-center relative overflow-hidden">
                                            <div className="relative z-10">
                                                <h3 className="text-[#C1FF72] font-bold mb-2 uppercase tracking-wider text-xs">ROAS Opportunity Window</h3>
                                                <div className="text-3xl font-bold text-white mb-3">
                                                    +{result.roasLiftLow}–{result.roasLiftHigh}% <span className="text-lg font-normal text-gray-400">Lift</span>
                                                </div>
                                                <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
                                                    Scaletio’s autonomous operator could capture this lift by rotating creatives earlier and reallocating budget to winners.
                                                </p>
                                                <div className="flex flex-col gap-3">
                                                    <Link href="/how-it-works">
                                                        <Button className="w-full bg-[#C1FF72] text-black hover:bg-[#b0ef5e] font-bold">
                                                            See How the Operator Works <ArrowRight className="w-4 h-4 ml-2" />
                                                        </Button>
                                                    </Link>
                                                    <Link href="/pricing" className="text-xs text-gray-500 hover:text-white transition-colors">
                                                        View Plans & Pricing →
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Report Actions */}
                                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                            <h3 className="text-sm font-bold mb-4 text-gray-300">Report Actions</h3>
                                            <div className="flex flex-col md:flex-row gap-3">
                                                <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 hover:text-white" onClick={() => alert("PDF export coming soon. Results saved to Hub.")}>
                                                    <Download className="w-4 h-4 mr-2" /> Download PDF
                                                </Button>
                                                <Button variant="outline" className="flex-1 border-white/10 hover:bg-white/5 hover:text-white" onClick={handleEmailReport}>
                                                    <Mail className="w-4 h-4 mr-2" /> Email Report
                                                </Button>
                                            </div>
                                            <div className="mt-4 pt-4 border-t border-white/10 text-center">
                                                <Link href="/hub" className="text-xs text-[#C1FF72] hover:underline flex items-center justify-center gap-1">
                                                    <CheckCircle className="w-3 h-3" /> Results automatically saved to Hub
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}
