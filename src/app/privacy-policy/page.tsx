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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">Privacy Policy</h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="text-gray-500">Last updated on June 10, 2025</p>
              <p>
                Your privacy is important to us. This Privacy Policy ("Policy") explains what
                information Wootzapp Inc. ("we", "us", or "our") collects when you use our website,
                applications, and services (collectively, the "Services"), how we use that
                information, and the choices you have.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Scope and Applicability</h2>
              <p>
                This Policy applies to information collected when you visit our website or otherwise
                use the Services. It does not apply where we process information on behalf of our
                enterprise customers.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
              <h3 className="font-semibold text-gray-900">Information You Provide</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Account Information:</strong> name, email, profile picture, and
                  authentication credentials.
                </li>
                <li>
                  <strong>Payment Information:</strong> billing details and payment method
                  information processed by our payment providers.
                </li>
                <li>
                  <strong>Recordings and Other Data:</strong> audio recordings, transcripts, or
                  screenshots submitted through the Services.
                </li>
                <li>
                  <strong>Business Contact Information:</strong> information about your role and
                  organization when you engage with us on behalf of a company.
                </li>
              </ul>
              <h3 className="font-semibold text-gray-900">Information We Collect Automatically</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Log Data:</strong> IP address, browser type, and how you interact with the
                  Services.
                </li>
                <li>
                  <strong>Usage Data:</strong> features you use, access times, and pages viewed.
                </li>
              </ul>
              <h2 className="text-xl font-semibold text-gray-900">How We Use Information</h2>
              <p>
                We use the information we collect to operate, maintain, and improve the Services,
                process transactions, provide customer support, and communicate with you about
                updates and promotional offers.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">How We Share Information</h2>
              <p>
                We do not sell your personal information. We may share it with service providers
                that assist in delivering the Services, with your consent, or as required by law.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Your Rights and Choices</h2>
              <p>
                You may request access to, correction of, or deletion of your personal information
                by contacting us. You can also object to or restrict certain processing.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Security</h2>
              <p>
                We use administrative, technical, and physical safeguards to protect your
                information. However, no security measures are perfect or impenetrable.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Changes to this Policy</h2>
              <p>
                We may update this Policy from time to time. If we make material changes, we will
                notify you by posting the new Policy on this page and updating the date above.
              </p>
              <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
              <p>
                Questions about this Privacy Policy can be sent to privacy@wootzapp.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

