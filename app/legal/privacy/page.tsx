import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Scaletio",
    description: "Scaletio Privacy Policy.",
}

export default function PrivacyPage() {
    return (
        <>
            <h1>Privacy Policy</h1>
            <p>Last updated: December 2025</p>

            <p>
                At Scaletio, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our Autonomous Ads Operator platform.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We collect information you provide directly to us, such as when you create an account, connect your ad platforms, or contact support. This includes:
            </p>
            <ul>
                <li>Account Information (Name, Email, Password)</li>
                <li>Ad Platform Tokens (Meta Ads Manager, Google Ads, TikTok Ads)</li>
                <li>Usage Data (Logs, interactions with the Operator)</li>
            </ul>

            <h2>2. How We Use Your Information</h2>
            <p>
                We use your information to:
            </p>
            <ul>
                <li>Provide, maintain, and improve our services.</li>
                <li>Process transactions and send related information.</li>
                <li>Send technical notices, updates, security alerts, and support messages.</li>
                <li>Respond to your comments, questions, and requests.</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
                We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2>4. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@scaletio.com">privacy@scaletio.com</a>.
            </p>
        </>
    )
}
