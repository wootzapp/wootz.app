import Header from "@/components/header";
import Footer from "@/components/footer";
import { OpenSourceShowcase } from "@/components/open-source-showcase";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <OpenSourceShowcase />
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">Data Transfer Policy</h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="text-gray-500">Last updated on April 1, 2025</p>
              <p>
                This Data Transfer Policy explains how Wootzapp Inc. transfers and protects data
                between jurisdictions when you use our services.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Record 1: EU Meeting Data to US-Based Processing Infrastructure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Destination:</strong> United States
                </li>
                <li>
                  <strong>Legal Mechanism:</strong> Standard Contractual Clauses (SCCs)
                </li>
                <li>
                  <strong>Transfer Frequency:</strong> Live during active user sessions
                </li>
                <li>
                  <strong>Objective:</strong> Provide real-time transcription, AI analysis, and
                  insight generation for European enterprise clients
                </li>
                <li>
                  <strong>Data Types:</strong>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Voice and audio recordings</li>
                    <li>Generated transcripts and text content</li>
                    <li>Participant identifiers and meeting metadata</li>
                  </ul>
                </li>
                <li>
                  <strong>Protective Measures:</strong>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>End-to-end encryption (TLS 1.2+)</li>
                    <li>Encryption at rest using AES-256</li>
                    <li>Strict access controls and audit logging</li>
                    <li>Automated deletion after processing</li>
                  </ul>
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">Record 2: EU User Account Data to US-Based Database Infrastructure</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Destination:</strong> United States
                </li>
                <li>
                  <strong>Legal Mechanism:</strong> Standard Contractual Clauses (SCCs)
                </li>
                <li>
                  <strong>Transfer Frequency:</strong> Ongoing for account management
                </li>
                <li>
                  <strong>Objective:</strong> Enable authentication, account management, and
                  service delivery for EU users
                </li>
                <li>
                  <strong>Data Types:</strong>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Authentication credentials</li>
                    <li>User profile information</li>
                    <li>Settings and usage preferences</li>
                    <li>Session data and login history</li>
                  </ul>
                </li>
                <li>
                  <strong>Protective Measures:</strong>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>AES-256 encryption at rest</li>
                    <li>Encrypted connections for database access</li>
                    <li>Multi-factor authentication for administrators</li>
                    <li>Regular security patches and isolated networks</li>
                  </ul>
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <p>
                For questions about this Data Transfer Policy, contact support@wootzapp.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

