"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface NeuralBeamProps {
    containerRef: React.RefObject<HTMLDivElement>
    fromRef: React.RefObject<HTMLDivElement>
    toRef: React.RefObject<HTMLDivElement>
    isActive: boolean
}

export function NeuralBeam({ containerRef, fromRef, toRef, isActive }: NeuralBeamProps) {
    // In a real implementation, we would calculate positions dynamically.
    // For this specific dashboard use case, we can simplify by assuming a horizontal layout
    // and just animating a "beam" across the container.

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Background Track */}
            {/* Background Track - Removed as per user request */}
            {/* <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -translate-y-1/2" /> */}

            {/* Active Beam (Gradient Pulse) */}
            <motion.div
                className="absolute top-1/2 left-0 h-[4px] w-[150px] -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/80 to-transparent blur-[2px]"
                animate={{
                    x: ["-100%", "500%"], // Move across the container
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 0.5
                }}
            />

            {/* Data Packets (High speed particles) */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute top-1/2 left-0 w-1 h-1 rounded-full bg-white shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] -translate-y-1/2 z-10"
                    animate={{
                        x: ["-10%", "110%"],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.8,
                        repeatDelay: 1
                    }}
                />
            ))}
        </div>
    )
}
