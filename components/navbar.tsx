"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

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
        <Link href="/" className="flex items-center gap-2 z-50 relative" onClick={() => setIsMobileMenuOpen(false)}>
          <Logo width={32} height={32} />
          <span className="text-xl font-bold tracking-tight">Scaletio</span>
        </Link>

        {/* Desktop Menu */}
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

        <div className="hidden md:flex items-center gap-4">
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

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50 relative">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <motion.span
                animate={isMobileMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-transform"
              />
              <motion.span
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-current transition-opacity"
              />
              <motion.span
                animate={isMobileMenuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-current origin-center transition-transform"
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden flex flex-col pt-24 px-6"
            >
              <div className="flex flex-col gap-6 text-lg font-medium">
                <SignedIn>
                  <Link
                    href="/hub"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "py-2 border-b border-border/50 transition-colors",
                      pathname === "/hub" ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    Hub
                  </Link>
                </SignedIn>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "py-2 border-b border-border/50 transition-colors",
                      pathname === link.href ? "text-foreground" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="mt-8 flex flex-col gap-4">
                  <SignedOut>
                    <Link href="/sign-in" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full justify-center text-lg py-6 rounded-xl">Sign In</Button>
                    </Link>
                    <Link href="/sign-up" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full justify-center bg-primary text-black hover:bg-primary/90 text-lg py-6 rounded-xl font-bold shadow-[0_0_20px_rgba(193,255,114,0.2)]">
                        Get Started
                      </Button>
                    </Link>
                  </SignedOut>
                  <SignedIn>
                    <div className="flex items-center gap-4 py-4">
                      <UserButton />
                      <span className="text-muted-foreground">Account Settings</span>
                    </div>
                  </SignedIn>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
