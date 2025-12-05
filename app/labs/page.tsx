"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LabsHero } from "@/components/labs/hero"
import { FeaturedToolsGrid } from "@/components/labs/featured-tools"
import { ToolsDirectory } from "@/components/labs/tools-directory"
import { OperatorPhilosophy } from "@/components/labs/philosophy"
import { AuthWall } from "@/components/labs/auth-wall"
import { LabsFinalCTA } from "@/components/labs/final-cta"

export default function LabsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-background text-foreground selection:bg-primary selection:text-primary-foreground relative overflow-hidden">
                <LabsHero />
                <FeaturedToolsGrid />
                <ToolsDirectory />
                <OperatorPhilosophy />
                <AuthWall />
                <LabsFinalCTA />
            </main>
            <Footer />
        </>
    )
}
