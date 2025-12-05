import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function LegalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-32 pb-20 bg-[#0A0A0A] text-white selection:bg-[#C1FF72] selection:text-black">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-[#C1FF72] prose-strong:text-white">
                        {children}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
