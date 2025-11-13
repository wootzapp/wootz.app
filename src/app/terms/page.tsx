/* eslint-disable react/no-unescaped-entities */
import Header from "@/components/header";
import Footer from "@/components/footer";
import { OpenSourceShowcase } from "@/components/open-source-showcase";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <OpenSourceShowcase />
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6">Terms of Service</h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p className="text-muted-foreground/80">Last updated on June 10, 2025</p>
              <p>
                These Terms of Service ("Terms") govern your access to and use of the Wootzapp
                Mobile Browser and related services (collectively, the "Services"). By accessing or
                using the Services, you agree to be bound by these Terms and our Privacy Policy.
              </p>
              <h2 className="text-xl font-semibold text-foreground">1. Eligibility and Accounts</h2>
              <p>
                You must be at least 18 years old and have the authority to enter into these Terms.
                When you create an account, you must provide accurate information and keep it
                up-to-date. You are responsible for all activities under your account.
              </p>
              <h2 className="text-xl font-semibold text-foreground">2. Use of the Services</h2>
              <p>
                You agree to use the Services only for lawful purposes and in accordance with these
                Terms. You will not attempt to interfere with or disrupt the integrity or
                performance of the Services.
              </p>
              <h2 className="text-xl font-semibold text-foreground">3. Subscription and Billing</h2>
              <p>
                Some features of the Services may require payment of fees. If you subscribe, your
                subscription will automatically renew unless you cancel in accordance with your
                plan&apos;s terms. All fees are non-refundable except as required by law.
              </p>
              <h2 className="text-xl font-semibold text-foreground">4. Intellectual Property</h2>
              <p>
                The Services, including all related software and content, are owned by Wootzapp or
                its licensors. We grant you a limited, non-exclusive license to use the Services in
                accordance with these Terms.
              </p>
              <h2 className="text-xl font-semibold text-foreground">5. Termination</h2>
              <p>
                We may suspend or terminate your access to the Services at any time if you violate
                these Terms. You may cancel your account at any time by contacting support.
              </p>
              <h2 className="text-xl font-semibold text-foreground">6. Disclaimers</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
                IMPLIED. WOOTZAPP DISCLAIMS ALL WARRANTIES INCLUDING ANY IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <h2 className="text-xl font-semibold text-foreground">7. Limitation of Liability</h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, WOOTZAPP SHALL NOT BE LIABLE FOR ANY
                INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF
                PROFITS OR DATA.
              </p>
              <h2 className="text-xl font-semibold text-foreground">8. Governing Law and Dispute Resolution</h2>
              <p>
                These Terms are governed by the laws of the State of Delaware. Any disputes will be
                resolved through binding arbitration on an individual basis in accordance with the
                rules of the American Arbitration Association.
              </p>
              <h2 className="text-xl font-semibold text-foreground">9. Contact</h2>
              <p>
                Questions about these Terms can be sent to support@wootzapp.com.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

