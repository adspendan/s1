import Link from "next/link"
import { Logo } from "@/components/logo"
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const footerLinks = {
    Product: [
      { name: "How It Works", href: "/how-it-works" },
      { name: "Pricing", href: "/pricing" },
      { name: "Features", href: "/features" },
      { name: "Labs", href: "/labs" },
    ],
    Resources: [
      { name: "Hub", href: "/hub" },
      { name: "Documentation", href: "/docs" },
      { name: "Blog", href: "#" },
      { name: "Community", href: "#" },
    ],
    Company: [
      { name: "About", href: "/about" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "mailto:support@scaletio.com" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/legal/privacy" },
      { name: "Terms of Service", href: "/legal/terms" },
      { name: "Subprocessors", href: "/legal/subprocessors" },
    ],
  }

  return (
    <footer className="relative border-t border-border bg-background/40 backdrop-blur-xl pt-20 pb-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <Logo width={32} height={32} />
              <span className="text-xl font-bold tracking-tight">Scaletio</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs mb-8 leading-relaxed">
              The world's first autonomous ads operator. We replace manual media buying with intelligent, 24/7 optimization.
            </p>

            {/* Newsletter Signup */}
            <div className="max-w-xs">
              <h4 className="text-sm font-bold mb-3 text-foreground">Stay Updated</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 w-full transition-colors"
                />
                <Button size="icon" className="bg-primary text-primary-foreground hover:bg-primary/90 shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-bold text-foreground mb-6">{category}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Scaletio Inc.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono text-muted-foreground bg-secondary/50 rounded-full px-4 py-2 border border-border">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-500/80">SYSTEM ONLINE</span>
            </div>
            <div className="w-px h-3 bg-border" />
            <div>v2.0.4-beta</div>
            <div className="w-px h-3 bg-border hidden md:block" />
            <div className="hidden md:block">LATENCY: 24ms</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
