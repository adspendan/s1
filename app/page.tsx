import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { ValuePillars } from "@/components/value-pillars"
import { SupportedPlatforms } from "@/components/supported-platforms"
import { LeadMagnets } from "@/components/lead-magnets"
import { Footer } from "@/components/footer"
import { NeuralBrain } from "@/components/visuals/neural-brain"
import { OperatorTelemetry } from "@/components/operator-proof/operator-telemetry"
import { OperatorFootprints } from "@/components/operator-proof/operator-footprints"
import { RedactedActions } from "@/components/operator-proof/redacted-actions"
import { ActivateOperator } from "@/components/activate-operator"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <NeuralBrain />
      <Navbar />
      <Hero />
      <HowItWorks />
      <ValuePillars />
      <SupportedPlatforms />
      <LeadMagnets />
      <OperatorTelemetry />
      <OperatorFootprints />
      <RedactedActions />
      <ActivateOperator />
      <Footer />
    </main>
  )
}
