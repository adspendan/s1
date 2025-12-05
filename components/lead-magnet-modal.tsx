"use client"

import type React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { submitLead } from "@/lib/actions/leads"

const Loader2Icon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" strokeWidth={2} strokeLinecap="round" />
  </svg>
)

const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    <polyline points="22 4 12 14.01 9 11.01" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface LeadMagnetModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  source: "smart_audit" | "framework" | "benchmarks" | "extension"
  requiresMessage?: boolean
}

export function LeadMagnetModal({
  isOpen,
  onClose,
  title,
  description,
  source,
  requiresMessage = false,
}: LeadMagnetModalProps) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
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
      source,
      message: message || undefined,
    })

    setLoading(false)

    if (result.success) {
      setSuccess(true)
      setTimeout(() => {
        handleClose()
      }, 2000)
    } else {
      setError(result.error || "Failed to submit. Please try again.")
    }
  }

  const handleClose = () => {
    setEmail("")
    setName("")
    setMessage("")
    setSuccess(false)
    setError(null)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        {success ? (
          <div className="py-8 text-center">
            <CheckCircleIcon className="w-16 h-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Success!</h3>
            <p className="text-muted-foreground">Check your email for your download link.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">{title}</DialogTitle>
              <DialogDescription className="text-base">{description}</DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {requiresMessage && (
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your ad spend and goals..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    required={requiresMessage}
                  />
                </div>
              )}

              {error && <p className="text-sm text-red-500">{error}</p>}

              <Button type="submit" className="w-full bg-primary text-primary-foreground neon-glow" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Get Instant Access"
                )}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
