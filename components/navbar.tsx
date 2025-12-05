"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Brain } from "lucide-react"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { cn } from "@/lib/utils"

import { Logo } from "@/components/logo"

import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ["rgba(var(--background), 0)", "rgba(var(--background), 0.8)"]
  )
  const backdropBlur = useTransform(
    scrollY,
    [0, 50],
    ["blur(0px)", "blur(12px)"]
  )
  const borderOpacity = useTransform(
    scrollY,
    [0, 50],
    [0, 1]
  )

  const navLinks = [
    { name: "How it Works", href: "/how-it-works" },
    { name: "Labs", href: "/labs" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
  ]

  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 border-b border-transparent bg-transparent">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Logo width={32} height={32} />
            <span className="text-xl font-bold tracking-tight">Scaletio</span>
          </Link>
        </div>
      </nav>
    )
  }

  return (
    <motion.nav
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
        borderBottom: `1px solid rgba(var(--border), ${borderOpacity})`,
      }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4"
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo width={32} height={32} />
          <span className="text-xl font-bold tracking-tight">Scaletio</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <SignedIn>
            <Link
              href="/hub"
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === "/hub" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Hub
            </Link>
          </SignedIn>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <SignedOut>
            <Link href="/sign-in" className="text-sm font-medium hover:text-foreground transition-colors text-muted-foreground">
              Sign In
            </Link>
            <Link href="/sign-up">
              <Button className="bg-foreground text-background hover:bg-foreground/90 rounded-full font-bold">Get Started</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10 border border-border",
                },
              }}
            />
          </SignedIn>
        </div>
      </div>
    </motion.nav>
  )
}
