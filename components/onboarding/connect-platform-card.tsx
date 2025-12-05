"use client"

import { Button } from "@/components/ui/button"
import { Check, Link } from "lucide-react"

interface ConnectPlatformCardProps {
    name: string
    isConnected: boolean
    onConnect: () => void
    isLoading: boolean
}

export function ConnectPlatformCard({ name, isConnected, onConnect, isLoading }: ConnectPlatformCardProps) {
    return (
        <div className={`group relative p-6 rounded-2xl border transition-all duration-300 overflow-hidden ${isConnected
                ? "bg-[#C1FF72]/5 border-[#C1FF72]/30 shadow-[0_0_30px_rgba(193,255,114,0.1)]"
                : "bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10"
            }`}>
            {/* Background Glow */}
            {isConnected && (
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#C1FF72] rounded-full blur-[60px] opacity-20" />
            )}

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-colors ${isConnected ? "bg-[#C1FF72] text-black" : "bg-white/10 text-white group-hover:bg-white/20"
                        }`}>
                        {name[0]}
                    </div>
                    {isConnected && (
                        <div className="flex items-center gap-1.5 text-[#C1FF72] text-[10px] font-bold uppercase tracking-wider bg-[#C1FF72]/10 px-2 py-1 rounded-full border border-[#C1FF72]/20">
                            <Check className="w-3 h-3" /> Connected
                        </div>
                    )}
                </div>

                <h3 className="text-lg font-bold mb-1 text-white">{name}</h3>
                <p className="text-sm text-gray-400 mb-6">Connect to sync spend data.</p>

                <Button
                    onClick={onConnect}
                    disabled={isConnected || isLoading}
                    variant={isConnected ? "outline" : "default"}
                    className={`w-full transition-all duration-300 ${isConnected
                            ? "border-[#C1FF72]/30 text-[#C1FF72] hover:bg-[#C1FF72]/10"
                            : "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                        }`}
                >
                    {isConnected ? "Manage Connection" : "Connect Account"}
                </Button>
            </div>
        </div>
    )
}
