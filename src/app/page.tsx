"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Target, Zap, Search, Lightbulb, Building, Cloud } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

function SexyComparisonSection() {
  const [activeComparison, setActiveComparison] = useState(0)

  const comparisons = [
    {
      category: "Setup",
      old: { title: "The Old Way", items: ["Server farms, tuning, licenses", "Gateways, split-tunnel gymnastics"] },
      new: { title: "Wootzapp Agentic Browser", description: "Install one app; cloud policies do the rest" },
    },
    {
      category: "Experience",
      old: { title: "The Old Way", items: ["Pixel lag & session drops", "\"Is the tunnel up yet?\" delays"] },
      new: { title: "Wootzapp Agentic Browser", description: "Native Chromium speed on spotty cellular" },
    },
    {
      category: "Security",
      old: { title: "The Old Way", items: ["Datacenter-centric; blind to local copy/paste", "Opens the whole network; weak last-mile DLP"] },
      new: { title: "Wootzapp Agentic Browser", description: "GenAI-native DLP + last-mile controls (copy/print/uploads/geo-fence)" },
    },
    {
      category: "Cost",
      old: { title: "The Old Way", items: ["High infra & compute per user", "Recurring appliance & bandwidth costs"] },
      new: { title: "Wootzapp Agentic Browser", description: "Simple per-device licensing" },
    },
    {
      category: "Reality Check",
      old: { title: "The Old Way", items: ["Most-delivered VDI app? Chrome", "Works... when it works"] },
      new: { title: "Wootzapp Agentic Browser", description: "Re-engineer the browser itself and skip the scaffolding" },
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

          {/* Wootzapp Agentic Browser */}
          <div className="relative">
            <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 rounded-full opacity-30"></div>
            <div className="relative bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-2xl p-8 h-full">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                <h3 className="text-lg font-medium text-gray-900">Wootzapp Agentic Browser</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">{comparisons[activeComparison].new.description}</p>
              <div className="mt-6 inline-flex items-center text-sm text-red-700 font-medium">
                <div className="w-1 h-1 bg-red-500 rounded-full mr-2"></div>
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
            <span className="font-semibold text-gray-900">Rapid</span> deployment vs traditional solutions
          </span>
        </div>
      </div>
    </div>
  )
}

function SolutionsTabSection() {
  const tabContent = {
    "vdi-reduction": {
      title: "VDI Reduction",
      content: {
        main: "Centralize control without shipping pixels.",
        points: [
          "Policies live in the cloud",
          "Apps run at device speed", 
          "Costs fall dramatically"
        ],
        conclusion: "Teams keep the familiar browser UX and gain precise last-mile, LLM-aware DLP."
      }
    },
    "byod-workforce": {
      title: "BYOD Workforce",
      content: {
        main: "Let personal phones stay personal while corporate data stays governed.",
        points: [
          "Contextual controls stop risky copy/paste, screenshots, or uploads",
          "Posture checks flip risky devices to read-only",
          "No creepy MDM required"
        ]
      }
    },
    "3rd-party-onboarding": {
      title: "3rd-Party Onboarding", 
      content: {
        main: "Contractors install a browser—not a VM image—and receive least-privilege access in minutes.",
        points: [
          "Granular DLP prevents leakage",
          "Click-level events stream to your security stack", 
          "Painless audits and compliance"
        ]
      }
    },
    "saas-web-apps": {
      title: "SaaS & Web Apps",
      content: {
        main: "SaaS gave you \"anywhere\"; Wootzapp Agentic Browser gives you control back:",
        points: [
          "Built-in agentic DLP for SAAS",
          "Posture-aware access controls",
          "Layer MFA/SSO onto any web app — no proxies, no code"
        ],
        conclusion: "Browser-level controls keep data where it belongs."
      }
    },
    "privileged-access": {
      title: "Privileged Access",
      content: {
        main: "Inject security controls directly into sensitive workflows — without touching source code.",
        points: [
          "MFA prompts at the right moment",
          "Four-eyes approvals for critical actions", 
          "UI masking for sensitive data",
          "Every action recorded for accountability"
        ]
      }
    },
    "zero-trust": {
      title: "Zero Trust",
      content: {
        main: "Make the browser the policy-enforcement point.",
        points: [
          "Authenticate each request",
          "Verify device health continuously",
          "Apply data rules in the render process"
        ],
      }
    },
    "safe-browsing": {
      title: "Safe Browsing",
      content: {
        main: "Block threats before they land, without dragging down performance.",
        points: [
          "Phishing protection",
          "Malware blocking",
          "Drive-by exploit prevention"
        ],
        conclusion: "Users feel the web, not the walls."
      }
    },
    "enable-genai": {
      title: "Enable GenAI at Work",
      content: {
        main: "Say \"yes\" to AI tools — safely.",
        points: [
          "Enterprise DLP for GenAI guards prompts and outputs",
          "Teams can innovate without accidental leaks",
          "Clear banners show what's protected"
        ]
      }
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
        <CardContent className="p-6 md:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-gray-900 mb-4">{tabContent[activeTab].title}</h3>
          <div className="space-y-4">
            <p className="text-gray-700 font-medium leading-relaxed">{tabContent[activeTab].content.main}</p>
            {tabContent[activeTab].content.points && (
              <ul className="space-y-2">
                {tabContent[activeTab].content.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            )}
            {tabContent[activeTab].content.conclusion && (
              <p className="text-gray-700 italic font-medium bg-red-50 px-3 py-2 rounded">{tabContent[activeTab].content.conclusion}</p>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}

function ComparisonTable() {
  return (
    <SexyComparisonSection />
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 md:mb-12">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-gray-900 mb-4 leading-tight">
                <span className="block">Wootzapp</span>
                <span className="block bg-red-100 px-3 py-1 rounded-lg inline-block mt-2">Agentic Browser</span>
              </h1>
              
              <div className="space-y-4 max-w-4xl mx-auto">
                <p className="text-xl sm:text-2xl md:text-3xl font-light text-gray-700">
                  The <span className="bg-red-100 px-2 py-1 rounded">GenAI Browser</span> for the Enterprise
                </p>
                
                <div className="text-base sm:text-lg md:text-xl text-gray-600 space-y-3 leading-relaxed">
                  <p>
                    A simpler, complete way to secure modern work:
                  </p>
                  <p>
                    <span className="bg-red-50 px-2 py-1 rounded font-medium text-gray-800">GenAI-native DLP</span>, 
                    <span className="underline decoration-red-200 decoration-2">agentic security controls</span>, 
                    and <span className="bg-red-50 px-2 py-1 rounded font-medium text-gray-800">zero-trust access</span>
                  </p>
                  <p className="text-gray-500">
                    — all inside one Android browser.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it on my phone →
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

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

      {/* Why a GenAI Browser Section */}
      <section id="overview" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-8 md:mb-12">Why a GenAI Browser?</h2>
            
            <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Most work — including your AI tools — lives in the browser. So we put DLP, access, and analytics <strong>into</strong> the 
              browser and taught it to speak &ldquo;LLM.&rdquo; It can <em>detect, explain, and stop</em> risky data flows in real time, 
              without juggling heavy VDI or sprawling ZTNA stacks.
            </p>

            <div className="bg-black text-white p-6 md:p-8 rounded-lg">
              <p className="text-sm md:text-base leading-relaxed">
                &quot;GenAI-native DLP, agentic security controls, and zero-trust access live right inside the browser — 
                no VDI pixel-pushing, no sprawling ZTNA complexity.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">How it works (at a glance)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Search className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <span className="underline decoration-red-200 decoration-2">GenAI-native</span> DLP engine
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium text-sm">
                      Understands <span className="bg-red-50 px-1 rounded">language and context</span> — not just patterns
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Catches data as it&apos;s typed, pasted, uploaded</li>
                      <li>• Works with AI tools (even when paraphrased)</li>
                      <li>• <span className="font-medium">You set guardrails; it enforces inline</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <span className="underline decoration-red-200 decoration-2">Policy before</span> pixels
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium text-sm">
                      Before a page paints, the browser evaluates:
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Identity, device posture, network, location</li>
                      <li>• Then applies controls (mask, block, watermark)</li>
                      <li>• <span className="font-medium">No proxies or code changes</span></li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    <span className="underline decoration-red-200 decoration-2">Last-mile</span> visibility
                    <span className="block text-sm font-normal text-gray-500">(without creepiness)</span>
                  </h3>
                  <div className="space-y-3">
                    <p className="text-gray-700 font-medium text-sm">
                      <span className="bg-red-50 px-1 rounded">High-fidelity, click-level events</span> flow to your SIEM
                    </p>
                    <p className="text-sm text-gray-600 italic border-l-2 border-red-100 pl-3">
                      Personal browsing stays private
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Agentic Security Section */}
      <section id="features" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Agentic security — built into the browser</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Agentic Security Control</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Treat the browser as the <strong>agent runtime</strong>. Real-time monitors watch prompts, tool invocations, file uploads, 
                  form fills, clipboard, and extension behavior. Policies let agents <strong>intervene</strong>: redact, quarantine, 
                  require step-up auth, or ask for human approval. Security acts <em>at the moment of action</em>.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">LLM-aware Data Guard</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Modern DLP needs classification, policy enforcement, monitoring/alerts, granular controls (copy/paste/uploads), 
                  and explicit support for GenAI workflows like paraphrasing, translation, and summarization. We do it all at the last mile — the browser.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Zero-trust, minus the machinery</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Use short-lived, mTLS connections for private apps while extending least-privilege policy into the <strong>render process</strong> itself. 
                  Simpler rollout than legacy ZTNA; stronger control where it counts.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <span className="bg-red-100 px-2 py-1 rounded">Why the browser</span> is the best agentic security platform:
              </h3>
              
              <p className="text-gray-700 leading-relaxed">
                The enterprise browser has unique visibility into:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="font-semibold text-gray-800 underline decoration-red-200 decoration-2">WHO</div>
                  <div className="text-gray-600 mt-1">the user is</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800 underline decoration-red-200 decoration-2">HOW</div>
                  <div className="text-gray-600 mt-1">healthy the device is</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800 underline decoration-red-200 decoration-2">WHERE</div>
                  <div className="text-gray-600 mt-1">it operates</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-gray-800 underline decoration-red-200 decoration-2">WHICH</div>
                  <div className="text-gray-600 mt-1">app is in view</div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-4 space-y-2">
                <p className="text-gray-700 font-medium">
                  This lets you enforce <span className="bg-red-50 px-1 rounded">zero-trust and DLP decisions</span> 
                  <em className="text-gray-600">exactly when they matter</em>.
                </p>
                <p className="text-gray-600 italic">
                  That vantage makes the browser the natural control plane for <strong className="bg-red-100 px-1 rounded">agentic defenses</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in armor Section */}
      <section id="security" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">Built-in armor</h2>
            <p className="text-lg text-gray-600">(no bolt-ons, no drama)</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Hardened Chromium</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shrugs off phishing, malware, session hijacks, and man-in-the-browser tricks — on or off VPN.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Agent-driven Contextual Data Controls</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Copy, paste, screenshots, printing, and downloads obey role, network, app, and geo-fence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-3">Watermark & Kill-Switch</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every sensitive page is trace-stamped; admins can end a session mid-click if something goes sideways.
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
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Replace VDI & VPN — keep the speed, lose the headaches</h2>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Browser-native ZTNA Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Browser-native ZTNA</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-2">reverse-proxy friendly, last-mile enforced</p>
              <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <strong className="bg-red-100 px-2 py-1 rounded">Yes, we do &ldquo;Access-style&rdquo; ZTNA — with a twist:</strong> the <em>browser</em> is your enforcement point, not just the network box.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">How private-app access works</h3>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-red-700">1</span>
                      </div>
                      <p>Browser connects to Wootzapp Cloud with <strong>user identity</strong>, <strong>device posture</strong>, and <strong>policy intent</strong></p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-red-700">2</span>
                      </div>
                      <p><strong>Reverse, outbound-only secure tunnel</strong> via Private Access Connector — no inbound firewall openings</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-red-700">3</span>
                      </div>
                      <p>Traffic <strong>tunneled</strong> over short-lived mTLS with browser-enforced controls</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-red-700">4</span>
                      </div>
                      <p>Every click <strong>logged for audit</strong> — no packet archaeology needed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <Cloud className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-900">And for SaaS</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Keep using your favorite cloud apps — now with <strong className="bg-red-100 px-1 rounded">browser-level guardrails</strong>:
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">Restrict uploads to approved tenants</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">Watermark sensitive views</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">Block risky extensions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">Apply <strong>GenAI-aware DLP</strong> to prompts and outputs</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-6 italic">
                    Users get the full, zippy SaaS experience. Security gets deterministic, last-mile control.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Common Solutions Section */}
      <section id="solutions" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8">
              Common Solutions — Pick Your Challenge
            </h2>

            <SolutionsTabSection />
          </div>
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="py-12 md:py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light mb-6 md:mb-8">
              Enterprise Security Ready
            </h2>

            <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm sm:text-base">
              Wootzapp Agentic Browser is the <strong>Enterprise GenAI Browser</strong>: a warmer, simpler way to do Zero Trust and DLP. 
              Fewer moving parts, faster users, and guardrails that actually understand language — not just patterns.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-white text-gray-900 hover:bg-gray-100 px-6 md:px-8 py-3 w-full sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start Free Trial
                </a>
              </Button>
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 w-full sm:w-auto rounded-md transition-colors bg-transparent inline-flex items-center justify-center"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}