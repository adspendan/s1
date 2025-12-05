import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Scaletio",
    description: "Scaletio Terms of Service.",
}

export default function TermsPage() {
    return (
        <>
            <h1>Terms of Service</h1>
            <p>Last updated: December 2025</p>

            <p>
                Please read these Terms of Service ("Terms") carefully before using the Scaletio platform operated by Scaletio Inc.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
                By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
            </p>

            <h2>2. Description of Service</h2>
            <p>
                Scaletio provides an AI-powered autonomous ads operator that manages and optimizes digital advertising campaigns across various platforms.
            </p>

            <h2>3. Accounts</h2>
            <p>
                When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
                The Service and its original content, features, and functionality are and will remain the exclusive property of Scaletio Inc. and its licensors.
            </p>

            <h2>5. Termination</h2>
            <p>
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
        </>
    )
}
