import { SignIn } from "@clerk/nextjs"
import { Logo } from "@/components/logo"
import Link from "next/link"

export default function SignInPage() {
    return (
        <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C1FF72]/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2 mb-6">
                        <Logo width={40} height={40} />
                        <span className="text-2xl font-bold text-white tracking-tight">Scaletio</span>
                    </Link>
                    <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-gray-400">Run your ads on autopilot.</p>
                </div>

                <div className="bg-black/40 border border-white/10 rounded-2xl p-2 backdrop-blur-xl shadow-2xl">
                    <SignIn
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                card: "bg-transparent shadow-none w-full p-6",
                                headerTitle: "hidden",
                                headerSubtitle: "hidden",
                                socialButtonsBlockButton: "bg-white/5 border-white/10 hover:bg-white/10 text-white",
                                socialButtonsBlockButtonText: "text-white font-medium",
                                dividerLine: "bg-white/10",
                                dividerText: "text-gray-500",
                                formFieldLabel: "text-gray-400",
                                formFieldInput: "bg-white/5 border-white/10 text-white focus:border-[#C1FF72] focus:ring-[#C1FF72]",
                                footerActionLink: "text-[#C1FF72] hover:text-[#b0ef5e]",
                                formButtonPrimary: "bg-[#C1FF72] text-black hover:bg-[#b0ef5e] shadow-[0_0_20px_rgba(193,255,114,0.2)]",
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    )
}
