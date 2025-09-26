"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

function ComparisonTable() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-6 font-medium text-gray-900"></th>
              <th className="text-center p-6 font-medium text-gray-900 bg-red-50">VDI</th>
              <th className="text-center p-6 font-medium text-gray-900 bg-orange-50">VPN</th>
              <th className="text-center p-6 font-medium text-gray-900 bg-green-50">Wootzapp Agentic Browser</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100">
              <td className="p-6 font-medium text-gray-900">Setup</td>
              <td className="p-6 text-sm text-gray-600 bg-red-50">Server farms, tuning, licenses</td>
              <td className="p-6 text-sm text-gray-600 bg-orange-50">Gateways, split-tunnel gymnastics</td>
              <td className="p-6 text-sm text-gray-700 bg-green-50 font-medium">Install one app; cloud policies do the rest</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-6 font-medium text-gray-900">User experience</td>
              <td className="p-6 text-sm text-gray-600 bg-red-50">Pixel lag & session drops</td>
              <td className="p-6 text-sm text-gray-600 bg-orange-50">&ldquo;Is the tunnel up yet?&rdquo; delays</td>
              <td className="p-6 text-sm text-gray-700 bg-green-50 font-medium">Native Chromium speed on spotty cellular</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-6 font-medium text-gray-900">Security scope</td>
              <td className="p-6 text-sm text-gray-600 bg-red-50">Datacenter-centric; blind to local copy/paste</td>
              <td className="p-6 text-sm text-gray-600 bg-orange-50">Opens the whole network; weak last-mile DLP</td>
              <td className="p-6 text-sm text-gray-700 bg-green-50 font-medium">GenAI-native DLP + last-mile controls (copy/print/uploads/geo-fence)</td>
            </tr>
            <tr className="border-b border-gray-100">
              <td className="p-6 font-medium text-gray-900">Cost & upkeep</td>
              <td className="p-6 text-sm text-gray-600 bg-red-50">High infra & compute per user</td>
              <td className="p-6 text-sm text-gray-600 bg-orange-50">Recurring appliance & bandwidth costs</td>
              <td className="p-6 text-sm text-gray-700 bg-green-50 font-medium">Simple per-device licensing</td>
            </tr>
            <tr>
              <td className="p-6 font-medium text-gray-900">Reality check</td>
              <td className="p-6 text-sm text-gray-600 bg-red-50">Most-delivered VDI app? Chrome</td>
              <td className="p-6 text-sm text-gray-600 bg-orange-50">Works... when it works</td>
              <td className="p-6 text-sm text-gray-700 bg-green-50 font-medium">Re-engineer the browser itself and skip the scaffolding</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function SolutionsTabSection() {
  const tabContent = {
    "vdi-reduction": {
      title: "VDI Reduction",
      content:
        "Centralize control without shipping pixels. Policies live in the cloud; apps run at device speed; costs fall. Teams keep the familiar browser UX and gain precise last-mile, LLM-aware DLP.",
    },
    "byod-workforce": {
      title: "BYOD Workforce",
      content:
        "Let personal phones stay personal while corporate data stays governed. Contextual controls stop risky copy/paste, screenshots, or uploads; posture checks flip risky devices to read-only. No creepy MDM.",
    },
    "3rd-party-onboarding": {
      title: "3rd-Party Onboarding",
      content:
        "Contractors install a browser—not a VM image—and receive least-privilege access in minutes. Granular DLP prevents leakage; click-level events stream to your security stack for painless audits.",
    },
    "saas-web-apps": {
      title: "SaaS & Web Apps",
      content:
        "SaaS gave you &ldquo;anywhere&rdquo;; Wootzapp Agentic Browser gives you control back: built-in DLP, posture-aware access, and the power to layer MFA/SSO onto any web app — no proxies, no code. Browser-level controls keep data where it belongs.",
    },
    "privileged-access": {
      title: "Privileged Access",
      content:
        "Inject MFA prompts, four-eyes approvals, and UI masking directly into sensitive workflows — without touching source code. Every action is recorded for accountability.",
    },
    "zero-trust": {
      title: "Zero Trust",
      content:
        "Make the browser the policy-enforcement point. Authenticate each request, verify device health continuously, and apply data rules in the render process — VPN optional.",
    },
    "safe-browsing": {
      title: "Safe Browsing",
      content:
        "Block phishing, malware, and drive-by exploits before they land, without dragging down performance. Users feel the web, not the walls.",
    },
    "enable-genai": {
      title: "Enable GenAI at Work",
      content:
        "Say &ldquo;yes&rdquo; to AI tools — safely. Enterprise DLP for GenAI guards prompts and outputs, so teams can innovate without accidental leaks. Clear banners show what&apos;s protected.",
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

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Wootzapp Agentic Browser — The GenAI Browser for the Enterprise
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 md:mb-8 font-light leading-relaxed">
              A simpler, complete way to secure modern work: <strong>GenAI-native DLP</strong>, agentic security controls, 
              and zero-trust access — all inside one Android browser. Fewer boxes. More brains.
            </p>

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

      {/* Why a GenAI Browser Section */}
      <section id="overview" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6 md:mb-8">Why a GenAI Browser?</h2>
            
            <div className="text-left mb-8 md:mb-12">
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                Most work — including your AI tools — lives in the browser. So we put DLP, access, and analytics <strong>into</strong> the 
                browser and taught it to speak &ldquo;LLM.&rdquo; It can <em>detect, explain, and stop</em> risky data flows in real time, 
                without juggling heavy VDI or sprawling ZTNA stacks.
              </p>
            </div>

            <div className="flex justify-center">
              <Button
                variant="outline"
                className="px-6 md:px-8 py-3 border-gray-300 bg-transparent"
                asChild
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

      {/* How it works Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8 md:mb-12">How it works (at a glance)</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-blue-600 mb-4">1</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">GenAI-native DLP engine</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Understands language and context — not just patterns — to catch sensitive data as it&apos;s typed, pasted, uploaded, 
                    or prompted into AI tools (even when paraphrased or summarized). You set the guardrails; it enforces them inline.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-green-600 mb-4">2</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Policy before pixels</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Before a page paints, the browser evaluates identity, device posture, network, location, and app context — then applies 
                    the right controls (mask fields, block uploads, watermark, read-only, etc.). No proxies or code changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-purple-600 mb-4">3</div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Last-mile visibility (without creepiness)</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    High-fidelity, click-level events flow to your SIEM for audit and alerting, while personal browsing stays private.
                  </p>
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

          <div className="text-center mt-12">
            <p className="text-gray-600 text-base leading-relaxed max-w-3xl mx-auto">
              <strong>Why the browser is the best agentic security platform:</strong> The enterprise browser knows <strong>who</strong> the user is, 
              <strong>how</strong> healthy the device is, <strong>where</strong> it operates, and <strong>which</strong> app is in view — 
              letting you enforce zero-trust and DLP decisions <em>exactly when they matter</em>. That vantage makes the browser the natural control plane for <strong>agentic</strong> defenses.
            </p>
          </div>
        </div>
      </section>

      {/* Built-in armor Section */}
      <section id="security" className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900">Built-in armor (no bolt-ons, no drama)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700">Hardened Chromium shrugs off phishing, malware, session hijacks, and man-in-the-browser tricks — on or off VPN.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Contextual Data Controls</strong> — copy, paste, screenshots, printing, and downloads obey role, network, app, and geo-fence.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700"><strong>Watermark & Kill-Switch</strong> — every sensitive page is trace-stamped; admins can end a session mid-click if something goes sideways.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Replace VDI & VPN Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-8">Replace VDI & VPN — keep the speed, lose the headaches</h2>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* Browser-native ZTNA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">Browser-native ZTNA — reverse-proxy friendly, last-mile enforced</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Yes, we do &ldquo;Access-style&rdquo; ZTNA — with a twist:</strong> the <em>browser</em> is your enforcement point, not just the network box.
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">How private-app access works (in plain English):</h3>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  <li>• The browser connects to Wootzapp Cloud, carrying <strong>user identity</strong>, <strong>device posture</strong>, and <strong>policy intent</strong>.</li>
                  <li>• A <strong>reverse, outbound-only secure tunnel</strong> is established from your environment via a <strong>Private Access Connector</strong> — no inbound firewall openings, no hair-pinning.</li>
                  <li>• Traffic is <strong>tunneled</strong> to your private web apps over short-lived mTLS, while the browser enforces <strong>field masking, copy/paste rules, downloads, watermarks, and session end</strong> at the edge.</li>
                  <li>• Every click is <strong>logged for audit</strong>, so investigations don&apos;t require packet archaeology.</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">And for SaaS:</h3>
                <p className="text-gray-600 leading-relaxed">
                  Keep using your favorite cloud apps — now with <strong>browser-level guardrails</strong>: restrict uploads to approved tenants, 
                  watermark sensitive views, block risky extensions, and apply <strong>GenAI-aware DLP</strong> to prompts and outputs. 
                  Users get the full, zippy SaaS experience. Security gets deterministic, last-mile control. Everyone breathes easier.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Solutions Section */}
      <section id="solutions" className="py-12 md:py-20 bg-white">
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
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-6 md:px-8 py-3 w-full sm:w-auto"
                asChild
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
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}