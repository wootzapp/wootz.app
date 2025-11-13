"use client"
import { Button } from "@/components/ui/button"

import { CheckCircle, XCircle, AlertCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

export default function ComparisonPage() {

  const comparisonData = [
    {
      category: "Infrastructure & Setup",
      vpn: { text: "Complex gateway hardware, split tunneling configuration, ongoing maintenance", status: "bad" },
      vdi: { text: "Server farms, virtualization layers, storage infrastructure, endless tuning", status: "bad" },
      sase: { text: "Cloud-based but requires multiple vendor integrations and policy coordination", status: "warning" },
      enterprise_browser: { text: "Simple app installation, cloud-managed policies, zero infrastructure", status: "good" },
    },
    {
      category: "User Experience",
              vpn: { text: "Connection delays, &apos;Is the tunnel up?&apos; frustrations, bandwidth bottlenecks", status: "bad" },      vdi: { text: "Pixel lag, session drops, poor mobile experience, latency issues", status: "bad" },
      sase: { text: "Better than VPN but still introduces latency and complexity", status: "warning" },
      enterprise_browser: { text: "Native Chromium speed, works on any device, seamless experience", status: "good" },
    },
    {
      category: "Security & Control",
      vpn: { text: "Opens entire network, no application-level controls, limited visibility", status: "bad" },
      vdi: { text: "Protects data center but blind to local copy/paste, limited mobile security", status: "warning" },
      sase: { text: "Good network security but lacks last-mile browser controls", status: "warning" },
      enterprise_browser: { text: "Last-mile DLP, contextual controls, complete visibility, zero-trust by design", status: "good" },
    },
    {
      category: "Deployment & Management",
      vpn: { text: "Complex client deployment, certificate management, ongoing troubleshooting", status: "bad" },
      vdi: { text: "Massive infrastructure deployment, specialized IT staff required", status: "bad" },
      sase: { text: "Cloud deployment but requires integration with existing security stack", status: "warning" },
      enterprise_browser: { text: "Minutes to deploy, single management console, no specialized training", status: "good" },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-400" />
      case "bad":
        return <XCircle className="w-5 h-5 text-red-400" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-400" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">
              A Modern Approach to Secure Access
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              See how the Enterprise Browser stacks up against legacy solutions like VPN, VDI, and SASE.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-primary text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] hover:bg-primary/90 px-8 py-3">
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* Detailed Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4">Solution Comparison</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built for the modern workplace, the Enterprise Browser solves problems that legacy solutions can&apos;t address.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[1000px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 text-left font-semibold text-foreground w-1/5">Category</th>
                  <th className="p-4 text-left font-semibold text-foreground w-1/5">VPN</th>
                  <th className="p-4 text-left font-semibold text-foreground w-1/5">VDI</th>
                  <th className="p-4 text-left font-semibold text-foreground w-1/5">SASE</th>
                  <th className="p-4 text-left font-semibold text-primary w-1/5">Enterprise Browser</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4 font-semibold text-foreground align-top">{row.category}</td>
                    <td className="p-4 text-sm text-muted-foreground align-top">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(row.vpn.status)}
                        <span>{row.vpn.text}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground align-top">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(row.vdi.status)}
                        <span>{row.vdi.text}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-muted-foreground align-top">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(row.sase.status)}
                        <span>{row.sase.text}</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-foreground align-top">
                      <div className="flex items-start gap-2">
                        {getStatusIcon(row.enterprise_browser.status)}
                        <span className="font-semibold">{row.enterprise_browser.text}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-6">Ready to Make the Switch?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Join thousands of organizations that have already modernized their remote access with enterprise browsers.
              See the difference for yourself with a personalized demo.
            </p>
            <div className="flex justify-center">
              <Button asChild className="bg-primary text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] hover:bg-primary/90 px-8 py-3">
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
        </div>
      </section>

      <Footer />
    </div>
  )
}