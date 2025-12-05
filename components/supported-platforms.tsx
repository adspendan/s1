"use client"

import { ScrollReveal } from "./scroll-animations"
import { useEffect, useRef } from "react"
import { Logo } from "@/components/logo"

const platforms = [
  {
    name: "Meta",
    color: "#0081FB",
    path: "M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a6.624 6.624 0 0 0 .265.86 5.297 5.297 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927 1.497 0 2.633-.671 3.965-2.444.76-1.012 1.144-1.626 2.663-4.32l.756-1.339.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314 1.046.987 1.992 1.22 3.06 1.22 1.075 0 1.876-.355 2.455-.843a3.743 3.743 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745 0-2.72-.681-5.357-2.084-7.45-1.282-1.912-2.957-2.93-4.716-2.93-1.047 0-2.088.467-3.053 1.308-.652.57-1.257 1.29-1.82 2.05-.69-.875-1.335-1.547-1.958-2.056-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999 1.132 1.748 1.647 4.195 1.647 6.4 0 1.548-.368 2.9-1.839 2.9-.58 0-1.027-.23-1.664-1.004-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a44.908 44.908 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327 1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338-1.191 1.649-1.81 1.817-2.486 1.817-.524 0-1.038-.237-1.383-.794-.263-.426-.464-1.13-.464-2.046 0-2.221.63-4.535 1.66-6.088.454-.687.964-1.226 1.533-1.533a2.264 2.264 0 0 1 1.088-.285z"
  }, // Official Meta logo path from Simple Icons
  {
    name: "Google",
    color: "#4285F4",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .533 5.347.533 12S5.867 24 12.48 24c3.44 0 6.013-1.133 8.053-3.24 2.08-2.16 2.72-5.2 2.72-7.667 0-.72-.08-1.36-.213-1.973h-10.56z"
  },
  {
    name: "TikTok",
    color: "#FF0050",
    path: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
  },
  {
    name: "YouTube",
    color: "#FF0000",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
  },
  {
    name: "LinkedIn",
    color: "#0A66C2",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: "Snapchat",
    color: "#FFFC00",
    path: "M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"
  }, // Official Snapchat logo path from Simple Icons
]

function PlatformVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = 400 * 2
      ctx.scale(2, 2)
    }
    resize()

    const centerX = canvas.offsetWidth / 2
    const centerY = 200
    const radius = 140

    let angle = 0
    let animationId: number

    // Pre-create Path2D objects for logos safely
    const logoPaths = platforms.map(p => {
      try {
        return new Path2D(p.path)
      } catch (e) {
        console.error("Invalid path for", p.name, e)
        return null
      }
    })

    const animate = () => {
      if (canvas.offsetWidth === 0 || canvas.offsetHeight === 0) {
        animationId = requestAnimationFrame(animate)
        return
      }

      ctx.clearRect(0, 0, canvas.offsetWidth, 400);

      // Draw Connection Lines & Particles
      platforms.forEach((platform, i) => {
        const platformAngle = angle + (i * Math.PI * 2) / platforms.length
        const x = centerX + Math.cos(platformAngle) * radius
        const y = centerY + Math.sin(platformAngle) * (radius * 0.6)

        // Gradient Line to center
        const gradient = ctx.createLinearGradient(x, y, centerX, centerY);
        gradient.addColorStop(0, `${platform.color}40`);
        gradient.addColorStop(1, "transparent"); // Fade out near center to not overlap logo

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.lineTo(x, y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 1
        ctx.stroke()

        // Animate data flow particles (moving towards center)
        const flowProgress = ((Date.now() / 1500 + i) % 1)
        // Invert progress to move towards center: 1 -> 0
        const currentProgress = 1 - flowProgress

        const flowX = centerX + (x - centerX) * currentProgress
        const flowY = centerY + (y - centerY) * currentProgress

        ctx.beginPath()
        ctx.arc(flowX, flowY, 2, 0, Math.PI * 2)
        ctx.fillStyle = platform.color
        ctx.shadowBlur = 8
        ctx.shadowColor = platform.color
        ctx.fill()
        ctx.shadowBlur = 0

        // Draw platform node background (Glass Orb)
        ctx.beginPath()
        ctx.arc(x, y, 32, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(10, 10, 10, 0.9)" // Dark backing
        ctx.fill()
        ctx.strokeStyle = `${platform.color}40`
        ctx.lineWidth = 1
        ctx.stroke()

        // Draw SVG Logo
        const path = logoPaths[i]
        if (path) {
          ctx.save()
          try {
            ctx.translate(x - 12, y - 12) // Center the 24x24 icon
            ctx.scale(1, 1)
            ctx.fillStyle = platform.color
            ctx.shadowBlur = 10
            ctx.shadowColor = platform.color
            ctx.fill(path)
          } catch (e) {
            // Fallback
          } finally {
            ctx.restore()
          }
        }

        // Label
        ctx.fillStyle = "#ffffff"
        ctx.font = "600 12px Inter, sans-serif"
        ctx.textAlign = "center"
        ctx.textBaseline = "alphabetic"
        ctx.fillText(platform.name, x, y + 50)
      })

      angle += 0.001 // Slower, more majestic rotation
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="w-full h-[400px] rounded-2xl glass-effect overflow-hidden relative">
      {/* Central Logo Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        {/* Pulsing Glow Behind Logo */}
        <div className="absolute w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />

        {/* The Logo Component */}
        <div className="relative z-20 p-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border shadow-2xl">
          <Logo width={64} height={64} className="rounded-xl" />
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-full relative z-0" style={{ width: "100%", height: "400px" }} />
    </div>
  )
}

export function SupportedPlatforms() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Centralized Intelligence
            </h2>
            <p className="text-xl text-muted-foreground">
              Scaletio connects directly to your ad accounts, creating a unified layer of intelligence across the entire ecosystem.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="relative max-w-5xl mx-auto">
            <PlatformVisualization />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
