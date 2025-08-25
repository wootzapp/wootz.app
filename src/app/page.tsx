"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"

function SexyComparisonSection() {
  const [activeComparison, setActiveComparison] = useState(0)

  const comparisons = [
    {
      category: "Setup",
      old: { title: "The Old Way", items: ["Server farms & endless tuning", "Gateway hardware headaches"] },
      new: { title: "Wootzapp Mobile Browser", description: "Just install the app. Policies live in the cloud." },
    },
    {
      category: "Experience",
      old: { title: "The Old Way", items: ["Pixel lag & session drops", "Is the tunnel up yet? oh no...delays"] },
      new: { title: "Wootzapp Mobile Browser", description: "Native Chromium speed, even on 3G." },
    },
    {
      category: "Security",
      old: { title: "The Old Way", items: ["Blind to local copy/paste", "Opens whole network"] },
      new: { title: "Wootzapp Mobile Browser", description: "Last-mile controls: copy, print, watermark, geo-fence." },
    },
    {
      category: "Cost",
      old: { title: "The Old Way", items: ["High infra + compute costs", "Recurring appliance fees"] },
      new: { title: "Wootzapp Mobile Browser", description: "Simple per-device license." },
    },
    {
      category: "Mobility",
      old: { title: "The Old Way", items: ["Struggles on cellular", "Temperamental mobile clients"] },
      new: { title: "Wootzapp Mobile Browser", description: "Built for LTE/5G roaming by design." },
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {/* Category Pills */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {comparisons.map((comp, index) => (
          <button
            key={index}
            onClick={() => setActiveComparison(index)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeComparison === index
                ? "bg-black text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {comp.category}
          </button>
        ))}
      </div>

      {/* Comparison Display */}
      <div className="relative overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 relative">
          {/* Old Way */}
          <div className="relative">
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-red-100 rounded-full opacity-20"></div>
            <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                <h3 className="text-lg font-medium text-gray-900">The Old Way</h3>
              </div>
              <div className="space-y-3">
                {comparisons[activeComparison].old.items.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Wootzapp Mobile Browser */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30"></div>
            <div className="relative bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-medium text-gray-900">Wootzapp Mobile Browser</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{comparisons[activeComparison].new.description}</p>
              <div className="mt-6 inline-flex items-center text-sm text-green-700 font-medium">
                <div className="w-1 h-1 bg-green-500 rounded-full mr-2"></div>
                Better by design
              </div>
            </div>
          </div>
        </div>

        {/* Connecting Arrow - Mobile: Vertical, Desktop: Horizontal */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 md:block">
          <div className="bg-white border border-gray-200 rounded-full p-3 shadow-lg">
            {/* Mobile: Down arrow */}
            <svg
              className="w-6 h-6 text-gray-400 block md:hidden"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            {/* Desktop: Right arrow */}
            <svg
              className="w-6 h-6 text-gray-400 hidden md:block"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center bg-gray-50 rounded-full px-6 py-3">
          <span className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">90% faster</span> deployment vs traditional solutions
          </span>
        </div>
      </div>
    </div>
  )
}

function MobileTabSection() {
  const tabContent = {
    "vdi-reduction": {
      title: "VDI Reduction",
      content:
        "Virtual desktops once felt like magic—until lag, licensing, and server sprawl showed the trick's ugly wires. Wootzapp Mobile Browser delivers the same centralized control without shipping pixels across the planet. Policies come from the cloud; apps run at full speed on the device, and rack costs drop like last season's servers.",
    },
    "byod-workforce": {
      title: "BYOD Workforce",
      content:
        'Let personal phones stay personal while corporate data stays put. Users sign in to Wootzapp Mobile Browser; contextual controls stop risky copy/paste or screenshots, and device-health checks flip questionable handsets to view-only. No kernel agents, no privacy scares—just harmony between "any device" and "CISO-approved."',
    },
    "3rd-party-onboarding": {
      title: "3rd-Party Onboarding",
      content:
        "Contractors, BPOs, or gig crews install a browser—not a VM image—and get instant, least-privilege access. Granular data rules prevent leakage, while click-level logs feed your SIEM for painless audits. Shipping laptops and juggling shared passwords becomes ancient history.",
    },
    "saas-web-apps": {
      title: "SaaS & Web Apps",
      content:
        "SaaS gave us everywhere access but stole our last-mile control. Wootzapp Enterprise Browser stitches that control back in: built-in DLP, posture-aware access, and the power to bolt MFA or SSO onto any web app—no code, no proxies.",
    },
    "privileged-access": {
      title: "Privileged Access",
      content:
        "Admin mistakes shouldn't be catastrophic. Inject MFA prompts, four-eyes approvals, or role-based UI masking directly into critical workflows—zero source-code edits. Every keystroke and screenshot flows into an immutable audit trail, closing the gap between power and accountability.",
    },
    "zero-trust": {
      title: "Zero Trust",
      content:
        "Why bolt a consumer browser onto a Zero-Trust framework when the browser itself can be the policy point? Wootzapp Mobile Browser authenticates every request, checks device health continuously, and applies data-handling rules right in the render process—no VPN, no extra hops.",
    },
    "safe-browsing": {
      title: "Safe Browsing",
      content:
        "Stop phishing, malware, and drive-by exploits before they land. Wootzapp Enterprise Browser's local isolation and smart blocklists protect users on or off the corporate network—without slowing them down.",
    },
    "enable-genai": {
      title: "Enable GenAI at Work",
      content:
        "Let teams tinker with the latest AI tools and keep trade secrets secret. Dynamic app boundaries prevent sensitive prompts or outputs from slipping outside, while clear banners show employees exactly what's protected.",
    },
  }

  type TabId = keyof typeof tabContent

  const [activeTab, setActiveTab] = useState<TabId>("vdi-reduction")

  const tabs: { id: TabId; label: string }[] = [
    { id: "vdi-reduction", label: "VDI Reduction" },
    { id: "byod-workforce", label: "BYOD Workforce" },
    { id: "3rd-party-onboarding", label: "3rd-Party Onboarding" },
    { id: "saas-web-apps", label: "SaaS & Web Apps" },
    { id: "privileged-access", label: "Privileged Access" },
    { id: "zero-trust", label: "Zero Trust" },
    { id: "safe-browsing", label: "Safe Browsing" },
    { id: "enable-genai", label: "Enable GenAI at Work" },
  ]

  return (
    <>
      {/* Mobile: Dropdown selector */}
      <div className="block md:hidden mb-8">
        <Select value={activeTab} onValueChange={(value) => setActiveTab(value as TabId)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a solution" />
          </SelectTrigger>
          <SelectContent>
            {tabs.map((tab) => (
              <SelectItem key={tab.id} value={tab.id}>
                {tab.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop: Tab buttons */}
      <div className="hidden md:flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 text-sm transition-colors ${
              activeTab === tab.id
                ? "bg-black text-white"
                : "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Content */}
      <Card className="border-0 shadow-sm">
        <CardContent className="p-6 md:p-8">
          <h3 className="text-xl font-medium text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
          <p className="text-gray-600 leading-relaxed">{tabContent[activeTab].content}</p>
        </CardContent>
      </Card>
    </>
  )
}

export default function WootzappMobileBrowserPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6">Wootzapp Mobile Browser</h1>

            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 font-light">
              The Enterprise Browser for People on the Move
            </h2>

            <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Zero-trust access, built-in DLP, and compliance on autopilot — all tucked into one Android browser your
              crew already knows how to tap.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/3QyXM9d359yN6aCu8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it on my phone →
                </a>
              </Button>
              <Button
                variant="outline"
                className="px-6 md:px-8 py-3 border-gray-300 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://calendar.app.google/3QyXM9d359yN6aCu8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* This is Wootzapp Mobile Browser Section */}
      <section id="overview" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 md:mb-6">This is Wootzapp Mobile Browser</h2>

            <p className="text-gray-600 mb-8 md:mb-12 leading-relaxed text-sm sm:text-base">
              Chrome policies only work when your devices are managed. Enforcing security policies in the browser for contractors using unmanaged devices is a huge win.
            </p>

            <div className="bg-black text-white p-6 md:p-8 rounded-lg">
              <p className="text-sm md:text-base leading-relaxed">
                &quot;Identity-aware policies, device-health checks, and one-click governance live right inside the browser —
                no MDM backflips, no extra agents.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/2_74O0V2pBM?modestbranding=1&rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=2_74O0V2pBM"
                title="Wootzapp Enterprise Browser Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instant, governed access Section */}
      <section id="features" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">Instant, governed access</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Adaptive App Control</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Before a page loads, policy weighs who, where, and how healthy the device is.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Live Device Health</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Checks OS patch level, screen lock, and peripherals; risky phones flip to read-only.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Zero-Trust Tunnels</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Private web apps feel local while data rides inside short-lived mutual-TLS tunnels.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Workflow Shortcuts</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  No-code actions shave minutes off price checks, chart updates, or pre-trip inspections.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Built-in armor Section */}
      <section id="security" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gray-500 text-sm mb-2">Designed & Armored from</p>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">Built-in armor (no bolt-ons)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-4xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Hardened Chromium</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shrugs off phishing, malware, and session hijacks with enterprise-grade protection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Contextual Data Guard</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Copy, paste, screenshots, and prints obey role, network, or GPS fence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Watermark + Kill-Switch</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every sensitive page carries a trace stamp; ops can end a session mid-click.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Click-Level Telemetry</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Streams to your SIEM for real-time alerts, while personal browsing stays private.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Replace VDI & VPN Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-gray-500 text-sm mb-2">The Evolution</p>
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">Replace VDI & VPN — minus the headaches</h2>
          </div>

          <SexyComparisonSection />
        </div>
      </section>

      {/* Pick Your Challenge Section */}
      <section id="solutions" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8">
              Common Solutions — Pick Your Challenge
            </h2>

            <MobileTabSection />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 md:mb-6">
              Ready to transform your mobile workforce?
            </h2>

            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              Wootzapp Mobile Browser folds top-tier security and honest-to-goodness usability into a single Android app, so
              frontline teams can stay fast, compliant, and confident.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/3QyXM9d359yN6aCu8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <Button
                variant="outline"
                className="px-6 md:px-8 py-3 border-gray-300 bg-transparent w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://calendar.app.google/3QyXM9d359yN6aCu8"
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
