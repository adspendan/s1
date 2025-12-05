import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata for Scaletio
export const metadata: Metadata = {
  title: "Scaletio | Autonomous Ads Operator",
  description:
    "Run your ads on autopilot. Scaletio autonomously optimizes Meta, Google, TikTok, and YouTube campaigns — budgets, bids, creatives, audiences, pacing, and scaling decisions.",
  keywords: [
    "autonomous ads",
    "autopilot ad optimization",
    "AI ads operator",
    "automated campaign scaling",
    "AI media buying",
    "creative fatigue detection",
    "run ads on autopilot",
    "optimize Meta ads automatically",
    "TikTok ads optimization AI",
    "multi-platform ad scaling",
    "ROAS optimization system",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"

import { BackgroundGrid } from "@/components/background-grid"

import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#C1FF72",
          colorBackground: "#0A0A0A",
          colorText: "#ffffff",
          colorTextSecondary: "#9ca3af",
          colorInputBackground: "#1a1a1a",
          colorInputText: "#ffffff",
          borderRadius: "0.75rem",
        },
        elements: {
          formButtonPrimary: "bg-[#C1FF72] text-black hover:bg-[#b0ef5e] shadow-[0_0_20px_rgba(193,255,114,0.2)]",
          footerActionLink: "text-[#C1FF72] hover:text-[#b0ef5e]",
          card: "bg-[#0A0A0A] border border-white/10",
        },
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <BackgroundGrid />
            {children}
            <Analytics />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
