"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { submitLead } from "@/lib/actions/leads"
import { ScrollReveal } from "./scroll-animations"
import { Terminal, ChevronRight, Loader2, CheckCircle2 } from "lucide-react"

export function EarlyAccessSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const result = await submitLead({
      email,
      name,
      source: "early_access",
    })

    setLoading(false)

    if (result.success) {
      setSuccess(true)
      setEmail("")
      setName("")
      setTimeout(() => {
        setSuccess(false)
      }, 5000)
    } else {
      setError(result.error || "Failed to submit. Please try again.")
    }
  }

  return (
    <section id="early-access" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono text-primary mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                LIMITED AVAILABILITY: Q1 2025
              </div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                Initialize <span className="text-primary">Sequence</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Secure your spot in the autonomous future.
              </p>
            </div>

            <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative group">
              {/* Terminal Header */}
              <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="ml-4 text-[10px] font-mono text-gray-500 flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  root@scaletio:~/access-request
                </div>
              </div>

              <div className="p-8 md:p-12 relative">
                {/* Scanline */}
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] pointer-events-none opacity-20" />

                {success ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Access Request Received</h3>
                    <p className="text-gray-400 font-mono text-sm">Ticket ID: #{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
                    <p className="text-gray-500 mt-4">We will contact you via secure channel shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="early-name" className="text-xs font-mono uppercase text-gray-500">Agent Name</Label>
                        <div className="relative">
                          <Input
                            id="early-name"
                            type="text"
                            placeholder="Enter full name..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="h-12 bg-white/5 border-white/10 font-mono text-white placeholder:text-gray-700 focus:border-primary/50 focus:ring-primary/20"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="early-email" className="text-xs font-mono uppercase text-gray-500">Comms Channel</Label>
                        <Input
                          id="early-email"
                          type="email"
                          placeholder="name@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="h-12 bg-white/5 border-white/10 font-mono text-white placeholder:text-gray-700 focus:border-primary/50 focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    {error && (
                      <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                        ERROR: {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg h-14 font-mono uppercase tracking-wider group relative overflow-hidden"
                      disabled={loading}
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative flex items-center gap-2">
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Processing Request...
                          </>
                        ) : (
                          <>
                            Initialize Access
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                    </Button>

                    <div className="text-center">
                      <p className="text-[10px] text-gray-600 font-mono uppercase">
                        Encrypted Connection • 256-bit SSL • Zero-Knowledge Architecture
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
