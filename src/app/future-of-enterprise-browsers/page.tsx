
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { OpenSourceShowcase } from "@/components/open-source-showcase";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
              The Future of Enterprise Browsers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Industry research and analyst insights on why secure enterprise browsers are becoming the cornerstone of modern enterprise security architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Gartner Prediction */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <Card className="border-l-4 border-primary bg-card shadow-lg shadow-primary/10">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center shadow-[0_0_15px_theme(colors.primary/30)]">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Gartner Prediction</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    <strong>25% of organizations will use secure enterprise browsers</strong> to enhance remote access and endpoint security by 2028.
                  </p>
                  <p className="text-sm text-muted-foreground/80">
                    Source: Gartner Innovation Insight: Secure Enterprise Browsers, April 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* Market Drivers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-8 text-center">
            Why Enterprise Browsers Are Critical Now
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              { title: "Hybrid Work Reality", content: "Traditional security perimeters have dissolved. Employees access corporate resources from personal devices, home networks, and public spaces.", points: ["70% of workforce now hybrid or remote", "BYOD adoption increased 300% since 2020", "Unmanaged endpoints are the new normal"] },
              { title: "Security Gap Crisis", content: "Legacy VPN and VDI solutions weren&apos;t designed for today&apos;s cloud-first, browser-based work environment.", points: ["80% of work happens in browsers", "VPN vulnerabilities increased 400%", "Traditional DLP can&apos;t see encrypted traffic"] },
              { title: "Contractor & Third-Party Access", content: "Organizations need secure ways to grant temporary access to contractors, vendors, and partners without compromising security.", points: ["60% increase in contractor workforce", "Third-party breaches cost $4.5M average", "Traditional onboarding takes weeks"] },
              { title: "Compliance & Governance", content: "Regulatory requirements demand granular visibility and control over data access and user activities.", points: ["GDPR, HIPAA, SOX compliance", "Zero Trust mandates from governments", "Audit trail requirements increasing"] }
            ].map(item => (
              <Card key={item.title} className="bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{item.content}</p>
                  <ul className="text-xs text-muted-foreground/80 space-y-1">
                    {item.points.map(point => <li key={point}>• {point}</li>)}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
            Ready to Future-Proof Your Enterprise Security?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the forward-thinking organizations that will leverage secure enterprise browsers to transform their security posture and enable the future of work.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              className="bg-primary text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] hover:bg-primary/90 px-8 py-3"
            >
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
