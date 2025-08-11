/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">End User License Agreement</h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="text-gray-500">Last updated: January 2024</p>
              <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the Wootzapp Mobile Browser ("Software"), you
                agree to be bound by this End User License Agreement ("Agreement"). If you do not
                agree to these terms, do not install or use the Software.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
              <p>
                Wootzapp provides an enterprise mobile browser with zero-trust access controls,
                data loss prevention, and compliance features designed for organizations.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">3. License Grant</h2>
              <p>
                Subject to your compliance with this Agreement, Wootzapp grants you a limited,
                non-exclusive, non-transferable, revocable license to install and use the Software
                on devices you own or control for your personal or internal business purposes.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal use on your own devices</li>
                <li>Internal business use within your organization</li>
                <li>Use in accordance with your subscription plan limits</li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">4. Use Restrictions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Remove or modify any proprietary notices or labels</li>
                <li>Use the Software for any illegal or unauthorized purpose</li>
                <li>Share your account credentials with unauthorized users</li>
                <li>Attempt to circumvent usage limitations or security measures</li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">5. Privacy and Data</h2>
              <p>
                Your privacy is important to us. The Software processes screen content and audio
                data to provide services. All transmissions use end-to-end encryption, and no data
                is used for model training without your explicit consent.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">6. Intellectual Property</h2>
              <p>
                The Software and all related intellectual property rights are and remain the
                exclusive property of Wootzapp Inc. This Agreement does not grant you any rights to
                Wootzapp trademarks, service marks, or logos.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">7. Disclaimers</h2>
              <p>
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WOOTZAPP DISCLAIMS
                ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">8. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WOOTZAPP SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS OR DATA.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">9. Termination</h2>
              <p>
                This Agreement is effective until terminated. You may terminate it at any time by
                uninstalling the Software. Wootzapp may terminate this Agreement if you breach any
                terms. Upon termination, you must cease all use of the Software and destroy all
                copies.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">10. Updates and Modifications</h2>
              <p>
                Wootzapp may update the Software and this Agreement from time to time. Continued
                use of the Software after updates constitutes acceptance of the revised terms.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">11. Governing Law</h2>
              <p>
                This Agreement is governed by the laws of the State of Delaware, without regard to
                its conflict of law principles.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">12. Contact Information</h2>
              <p>
                Wootzapp Inc.<br />Email: legal@wootzapp.com<br />Address: [Company Address]<br />Phone:
                [Company Phone]
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

