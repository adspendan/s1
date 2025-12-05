"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal } from "lucide-react"

const logs = [
    { message: "Smart Audit: Scanning landing page for conversion blockers..." },
    { message: "Creative Intelligence: Detecting ad fatigue on 'Video_04'..." },
    { message: "Budget Guard: Pausing ad set (CPA > $45)..." },
    { message: "Auto-Scale: Increasing budget on winning ad set #12..." },
    { message: "Copywriter Agent: Generating 5 new headlines..." },
    { message: "Data Pipeline: Syncing 10k events from Meta Ads..." },
    { message: "ROAS Monitor: Target 4.0x achieved on Campaign A..." },
    { message: "Competitor Watch: Detected new offer from 'Competitor X'..." },
    { message: "Bid Strategy: Adjusting manual bid to $12.50..." },
    { message: "Audience Discovery: Testing 'Lookalike 1%' vs 'Broad'..." },
    { message: "Creative Lab: Synthesizing new UGC video variations..." },
    { message: "System: Optimization cycle complete. Repeating..." },
]

export function OperatorTerminal() {
    const [lines, setLines] = useState<typeof logs>([])
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLines((prev) => {
                // Keep only the last 8 lines to prevent overflow and maintain "rolling" effect
                const newLines = [...prev, logs[currentIndex % logs.length]]
                return newLines.slice(-8)
            })
            setCurrentIndex((prev) => prev + 1)
        }, Math.random() * 800 + 400) // Random interval for realism

        return () => clearTimeout(timeout)
    }, [currentIndex])

    return (
        <div className="w-full h-full bg-black/90 rounded-xl border border-white/10 overflow-hidden shadow-2xl backdrop-blur-md flex flex-col text-left">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 shrink-0">
                <div className="flex items-center gap-2">
                    <Terminal className="w-3 h-3 text-muted-foreground" />
                    <span className="text-[10px] font-mono text-muted-foreground">operator_swarm_v3.1.0</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div className="p-3 flex-1 overflow-hidden font-mono text-[10px] relative flex flex-col justify-end">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none z-10" />

                <div className="space-y-1.5 w-full">
                    <AnimatePresence mode="popLayout" initial={false}>
                        {lines.map((log, i) => (
                            <motion.div
                                key={`${log.message}-${i}`} // Unique key for each instance
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-start gap-2 w-full"
                            >
                                <span className="text-primary/80 font-mono leading-tight break-words">
                                    {">"} {log.message}
                                </span>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Typing Cursor */}
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.8 }}
                        className="w-1.5 h-3 bg-primary/50 ml-2 inline-block align-middle"
                    />
                </div>
            </div>
        </div>
    )
}
