import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Subprocessors | Scaletio",
    description: "List of third-party subprocessors used by Scaletio.",
}

export default function SubprocessorsPage() {
    return (
        <>
            <h1>Scaletio Subprocessors</h1>
            <p className="lead">
                To provide our Autonomous Ads Operator service, Scaletio engages third-party service providers ("Subprocessors") to process customer data.
            </p>

            <p>Last updated: December 2025</p>

            <hr className="border-white/10 my-8" />

            <h2>Infrastructure & Hosting</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-4 font-bold text-white">Name</th>
                            <th className="py-4 font-bold text-white">Purpose</th>
                            <th className="py-4 font-bold text-white">Location</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td className="py-4">Vercel</td>
                            <td className="py-4">Web Hosting & Edge Functions</td>
                            <td className="py-4">USA</td>
                        </tr>
                        <tr>
                            <td className="py-4">Supabase</td>
                            <td className="py-4">Database & Authentication Storage</td>
                            <td className="py-4">USA</td>
                        </tr>
                        <tr>
                            <td className="py-4">Clerk</td>
                            <td className="py-4">Identity & Access Management</td>
                            <td className="py-4">USA</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h2 className="mt-12">AI & Processing</h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="py-4 font-bold text-white">Name</th>
                            <th className="py-4 font-bold text-white">Purpose</th>
                            <th className="py-4 font-bold text-white">Location</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        <tr>
                            <td className="py-4">OpenAI</td>
                            <td className="py-4">LLM Inference (GPT-4)</td>
                            <td className="py-4">USA</td>
                        </tr>
                        <tr>
                            <td className="py-4">Anthropic</td>
                            <td className="py-4">LLM Inference (Claude 3.5 Sonnet)</td>
                            <td className="py-4">USA</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
