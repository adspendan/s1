"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function ScrollReveal({ children, delay = 0, direction = "up", className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("scroll-reveal-active")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const directionClass = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  }[direction]

  return (
    <div ref={ref} className={`scroll-reveal opacity-0 ${directionClass} transition-all duration-1000 ${className}`}>
      {children}
    </div>
  )
}

interface CountUpProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

export function CountUp({ end, duration = 2000, prefix = "", suffix = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            const start = 0
            const range = end - start
            const increment = range / (duration / 16)
            let current = start

            const timer = setInterval(() => {
              current += increment
              if (ref.current) {
                if (current >= end) {
                  ref.current.textContent = `${prefix}${end}${suffix}`
                  clearInterval(timer)
                } else {
                  ref.current.textContent = `${prefix}${Math.floor(current)}${suffix}`
                }
              }
            }, 16)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [end, duration, prefix, suffix])

  return <span ref={ref}>0</span>
}

export function TypeWriter({ text, speed = 50 }: { text: string; speed?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true
            let index = 0

            const timer = setInterval(() => {
              if (ref.current && index < text.length) {
                ref.current.textContent = text.slice(0, index + 1)
                index++
              } else {
                clearInterval(timer)
              }
            }, speed)

            return () => clearInterval(timer)
          }
        })
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [text, speed])

  return <span ref={ref} />
}
