import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    variant?: "primary" | "secondary" | "outline" | "ghost"
}

export function GlowButton({ children, className, variant = "primary", ...props }: GlowButtonProps) {
    const baseStyles = "relative overflow-hidden transition-all duration-300 group"

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(127,0,255,0.3)] hover:shadow-[0_0_30px_rgba(127,0,255,0.5)] font-bold rounded-full",
        secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10 backdrop-blur-sm rounded-full",
        outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 shadow-[0_0_10px_rgba(127,0,255,0.1)] rounded-full",
        ghost: "bg-transparent text-gray-400 hover:text-white hover:bg-white/5 rounded-lg",
    }

    return (
        <Button
            className={cn(baseStyles, variants[variant], className)}
            {...props}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>
            {variant === "primary" && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 blur-md" />
            )}
        </Button>
    )
}
