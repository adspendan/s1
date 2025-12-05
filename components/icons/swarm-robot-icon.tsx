"use client"

import { cn } from "@/lib/utils"

export function SwarmRobotIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={cn("w-6 h-6", className)}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Antenna */}
            <path d="M12 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="2" r="1.5" fill="currentColor" />

            {/* Head */}
            <path d="M12 5C7.58172 5 4 8.58172 4 13V15H20V13C20 8.58172 16.4183 5 12 5Z" fill="currentColor" />

            {/* Eyes */}
            <circle cx="9" cy="11" r="1.5" fill="black" className="dark:fill-black fill-white" />
            <circle cx="15" cy="11" r="1.5" fill="black" className="dark:fill-black fill-white" />

            {/* Visor/Face Plate */}
            <rect x="3" y="15" width="18" height="4" rx="1" fill="currentColor" opacity="0.8" />

            {/* Body Base */}
            <path d="M5 19C5 19 6 22 12 22C18 22 19 19 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
        </svg>
    )
}
