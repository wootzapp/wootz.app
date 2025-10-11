"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Target, Zap, Search, Lightbulb, Building, Cloud } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

const sectionSpacing = "py-20 border-t border-gray-100"
const containerClasses = "mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"

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
    <div className="space-y-10">
      <div className="flex flex-wrap justify-center gap-3">
        {comparisons.map((comp, index) => (
          <button
            key={index}
            onClick={() => setActiveComparison(index)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              activeComparison === index
                ? "border-red-500 bg-red-50 text-red-700"
                : "border-gray-200 text-gray-600 hover:border-gray-300"
            }`}
          >
            {comp.category}
          </button>
        ))}
      </div>

      <Card className="border border-gray-200 shadow-none">
        <CardContent className="p-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">The Old Way</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {comparisons[activeComparison].old.items.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-wide text-red-600">Wootzapp Agentic Browser</p>
              <p className="text-sm leading-relaxed text-gray-700">
                {comparisons[activeComparison].new.description}
              </p>
              <p className="text-xs font-medium text-red-600">Better by design</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-center text-sm text-gray-600">
        <span className="font-semibold text-gray-900">Rapid</span> deployment vs traditional solutions
      </p>
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
    <div className="space-y-8">
      <div className="block md:hidden">
        <Select value={activeTab} onValueChange={(value) => setActiveTab(value as TabId)}>
          <SelectTrigger className="w-full border-gray-200 bg-white/80 text-left">
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

      <Card className="border border-gray-200 shadow-sm md:hidden">
        <CardContent className="space-y-4 p-6">
          <div className="flex items-center justify-between">
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              {tabContent[activeTab].title}
            </span>
            <span className="text-xs text-gray-400">{tabs.findIndex((tab) => tab.id === activeTab) + 1} / {tabs.length}</span>
          </div>
          <p className="text-base font-medium leading-relaxed text-gray-800">
            {tabContent[activeTab].content.main}
          </p>
          {tabContent[activeTab].content.points && (
            <ul className="space-y-3 text-sm text-gray-600">
              {tabContent[activeTab].content.points.map((point, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-left before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-400"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
          {'conclusion' in tabContent[activeTab].content && tabContent[activeTab].content.conclusion && (
            <div className="rounded-xl border border-red-100 bg-red-50/70 p-4 text-sm font-medium text-red-700">
              {tabContent[activeTab].content.conclusion}
            </div>
          )}
        </CardContent>
      </Card>

      <div className="hidden gap-6 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-sm md:grid md:grid-cols-[260px_1fr] lg:gap-10 lg:p-10">
        <div className="flex flex-col gap-2">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group flex items-start gap-3 rounded-2xl border px-4 py-4 text-left transition-all ${
                  isActive
                    ? "border-red-300 bg-red-50/70 shadow-sm"
                    : "border-transparent hover:border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition ${
                    isActive
                      ? "border-red-400 bg-red-500 text-white"
                      : "border-gray-300 bg-white text-gray-500 group-hover:border-gray-400"
                  }`}
                >
                  {index + 1}
                </span>
                <div className="flex-1 space-y-1">
                  <p
                    className={`text-sm font-semibold transition ${
                      isActive ? "text-gray-900" : "text-gray-600 group-hover:text-gray-800"
                    }`}
                  >
                    {tab.label}
                  </p>
                  <p className="text-xs text-gray-400">
                    {tabContent[tab.id].content.main}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        <div className="space-y-6 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-[0_30px_60px_-35px_rgba(244,63,94,0.35)] lg:p-8">
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-red-600">
              {tabContent[activeTab].title}
            </span>
          </div>
          <p className="text-base font-medium leading-relaxed text-gray-800">
            {tabContent[activeTab].content.main}
          </p>
          {tabContent[activeTab].content.points && (
            <ul className="space-y-3 text-sm text-gray-600">
              {tabContent[activeTab].content.points.map((point, index) => (
                <li
                  key={index}
                  className="relative pl-6 text-left before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-red-400"
                >
                  {point}
                </li>
              ))}
            </ul>
          )}
          {'conclusion' in tabContent[activeTab].content && tabContent[activeTab].content.conclusion && (
            <div className="rounded-2xl border border-red-100 bg-red-50/70 p-4 text-sm font-medium text-red-700">
              {tabContent[activeTab].content.conclusion}
            </div>
          )}
        </div>
      </div>
    </div>
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
      <section className="relative overflow-hidden bg-gray-50 py-28">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-gradient-to-bl from-red-100 via-white to-transparent lg:block" />
        <div className={`${containerClasses} relative grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`}>
          <div className="flex flex-col items-start gap-8 sm:gap-10">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full border border-red-200 bg-white px-4 py-1 text-xs font-medium uppercase tracking-wide text-red-600">
                Wootzapp
              </span>
              <h1 className="text-left text-4xl font-light leading-[1.1] text-gray-900 sm:text-5xl md:text-6xl">
                Agentic Browser
              </h1>
            </div>
            <div className="space-y-4 text-left text-lg text-gray-700 sm:text-xl">
              <p>
                The <span className="rounded bg-red-100 px-2 py-1 font-semibold text-gray-900">GenAI Browser</span> for the
                <span className="ml-2 inline-block rounded px-2 py-0.5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">Enterprise</span>
              </p>
              <p className="text-base font-semibold uppercase tracking-[0.22em] text-gray-500">
                A simpler, complete way to secure modern work
              </p>
              <p className="text-base text-gray-600 sm:text-lg">
                <span className="rounded bg-red-50 px-2 py-1 font-semibold underline decoration-red-300 underline-offset-4 text-gray-900">GenAI-native DLP</span>,
                <span className="px-2 font-semibold text-gray-900 underline decoration-red-200 underline-offset-4">agentic security controls</span>,
                and <span className="rounded bg-red-50 px-2 py-1 font-semibold text-gray-900 italic">zero-trust access</span>
              </p>
              <p className="text-base italic text-gray-500 sm:text-lg">— all inside one Android browser.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="w-full justify-center bg-black px-7 py-3 text-sm text-white transition hover:bg-gray-900 sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See it on my phone →
                </a>
              </Button>
              <div className="flex items-center gap-4 text-left text-xs text-gray-500 sm:text-sm">
                <div className="h-px flex-1 bg-gray-200" />
                Replace VDI & VPN — keep the speed, lose the headaches
                <div className="h-px flex-1 bg-gray-200" />
              </div>
            </div>
          </div>

          <Card className="border border-gray-200 bg-white/80 shadow-lg backdrop-blur sm:mx-auto sm:max-w-xl lg:mx-0">
            <CardContent className="space-y-5 p-6 sm:p-8">
              <div className="space-y-3">
                <p className="rounded-lg border border-red-100 bg-red-50/60 p-4 text-sm text-gray-700">
                  Install one app; cloud policies do the rest
                </p>
                <p className="rounded-lg border border-red-100 bg-white p-4 text-sm text-gray-700">
                  Native Chromium speed on spotty cellular
                </p>
                <p className="rounded-lg border border-red-100 bg-white p-4 text-sm text-gray-700">
                  GenAI-native DLP + last-mile controls (copy/print/uploads/geo-fence)
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* YouTube Video Section */}
      <section className={sectionSpacing}>
        <div className={`${containerClasses} max-w-4xl`}> 
          <div className="relative w-full overflow-hidden rounded-2xl border border-gray-200 shadow-sm" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/2_74O0V2pBM?modestbranding=1&rel=0&controls=0&autoplay=1&mute=1&loop=1&playlist=2_74O0V2pBM"
              title="Wootzapp Enterprise Browser Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Why a GenAI Browser Section */}
      <section id="overview" className={`${sectionSpacing} bg-white`}>
        <div className={`${containerClasses} relative overflow-hidden rounded-3xl border border-gray-100 bg-white/70 px-6 py-16 text-center shadow-sm sm:px-12`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.12),_transparent_60%)]" />
          <div className="relative space-y-8">
            <h2 className="text-3xl font-light text-gray-900">Why a GenAI Browser?</h2>
            <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base">
              Most work — including your AI tools — lives in the browser. So we put
              <span className="ml-1 mr-1 inline-block rounded bg-red-50 px-2 py-0.5 font-semibold uppercase tracking-wide text-gray-900">DLP</span>,
              <span className="mr-1 inline-block rounded bg-red-50 px-2 py-0.5 font-semibold uppercase tracking-wide text-gray-900">Access</span>, and
              <span className="mr-1 inline-block rounded bg-red-50 px-2 py-0.5 font-semibold uppercase tracking-wide text-gray-900">Analytics</span>
              <strong className="mx-1 font-semibold">into</strong> the browser and taught it to speak
              <span className="ml-1 inline-block rounded border border-red-200 px-2 py-0.5 font-semibold italic text-gray-900">“LLM.”</span>
              It can <em className="font-semibold text-gray-800">detect, explain, and stop</em> risky data flows in real time,
              without juggling heavy VDI or sprawling ZTNA stacks.
            </p>
            <blockquote className="mx-auto max-w-2xl rounded-md border border-gray-200 bg-gray-50 p-6 text-sm text-gray-800">
              &quot;GenAI-native DLP, agentic security controls, and zero-trust access live right inside the browser — no VDI pixel-pushing,
              no sprawling ZTNA complexity.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className={`${sectionSpacing} bg-gradient-to-br from-white via-red-50/20 to-white`}>
        <div className={`${containerClasses} space-y-12`}>
          <h2 className="text-center text-2xl font-light text-gray-900 md:text-3xl">How it works (at a glance)</h2>
          <div className="relative grid gap-8 md:grid-cols-3">
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="mr-1 rounded bg-red-100 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">GenAI-native</span>
                  <span className="underline decoration-red-200 decoration-4 underline-offset-4">DLP engine</span>
                </h3>
                <p className="text-sm font-medium text-gray-700">
                  Understands <span className="bg-red-50 px-1 font-semibold text-gray-900">language and context</span> — not just patterns
                </p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><span className="font-semibold text-gray-900">•</span> Catches data as it&apos;s typed, pasted, uploaded</li>
                  <li><span className="font-semibold text-gray-900">•</span> Works with AI tools (even when paraphrased)</li>
                  <li><span className="font-semibold text-red-600">•</span> <span className="font-medium">You set guardrails; it enforces inline</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600">
                  <Lightbulb className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="mr-1 rounded bg-red-100 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Policy</span>
                  <span className="underline decoration-red-200 decoration-4 underline-offset-4">before pixels</span>
                </h3>
                <p className="text-sm font-medium text-gray-700">Before a page paints, the browser evaluates:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li><span className="font-semibold text-gray-900">•</span> Identity, device posture, network, location</li>
                  <li><span className="font-semibold text-gray-900">•</span> Then applies controls (mask, block, watermark)</li>
                  <li><span className="font-semibold text-red-600">•</span> <span className="font-medium">No proxies or code changes</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-red-200 bg-red-50 text-red-600">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="mr-1 rounded bg-red-100 px-1.5 py-0.5 text-sm font-semibold uppercase tracking-[0.25em] text-red-600">Last-mile</span>
                  <span className="underline decoration-red-200 decoration-4 underline-offset-4">visibility</span>
                  <span className="block text-sm font-normal italic text-gray-500">(without creepiness)</span>
                </h3>
                <p className="text-sm font-medium text-gray-700">
                  <span className="rounded bg-red-50 px-1 font-semibold text-gray-900">High-fidelity, click-level events</span> flow to your SIEM
                </p>
                <p className="text-sm italic text-gray-600">Personal browsing stays private</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Agentic Security Section */}
      <section id="features" className={`${sectionSpacing} bg-white`}>
        <div className={`${containerClasses} space-y-12`}>
          <div className="text-center">
            <h2 className="text-2xl font-light text-gray-900 md:text-3xl">Agentic security — built into the browser</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Agentic</span>
                  <span className="ml-2 underline decoration-red-200 decoration-4 underline-offset-4">Security Control</span>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Treat the browser as the
                  <strong className="ml-1 uppercase tracking-wide text-gray-900">agent runtime</strong>. Real-time monitors watch prompts, tool invocations, file uploads,
                  form fills, clipboard, and extension behavior. Policies let agents
                  <strong className="ml-1 text-red-600">intervene</strong>: redact, quarantine,
                  require step-up auth, or ask for human approval. Security acts <em className="font-semibold text-gray-800">at the moment of action</em>.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600">LLM-aware</span>
                  <span className="ml-2 underline decoration-red-200 decoration-4 underline-offset-4">Data Guard</span>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Modern DLP needs classification, policy enforcement, monitoring/alerts, granular controls (copy/paste/uploads),
                  and explicit support for GenAI workflows like paraphrasing, translation, and summarization. We do it all at the last mile —
                  <span className="ml-1 rounded bg-red-50 px-1.5 py-0.5 font-semibold text-gray-900">the browser</span>.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-4 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  <span className="rounded bg-red-100 px-2 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-red-600">Zero-trust</span>
                  <span className="ml-2 underline decoration-red-200 decoration-4 underline-offset-4">minus the machinery</span>
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Use short-lived, mTLS connections for private apps while extending least-privilege policy into the
                  <strong className="ml-1 rounded bg-red-50 px-1.5 py-0.5 text-gray-900">render process</strong> itself.
                  Simpler rollout than legacy ZTNA; stronger control where it counts.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-6 rounded-xl border border-gray-200 bg-gray-50 p-8">
            <h3 className="text-center text-lg font-semibold text-gray-900">
              <span className="rounded bg-red-100 px-2 py-1 text-sm text-red-700">Why the browser</span> is the best agentic security platform:
            </h3>
            <p className="text-center text-sm text-gray-600 md:text-base">
              The enterprise browser has unique visibility into:
            </p>
            <div className="grid grid-cols-2 gap-4 text-center text-sm text-gray-700 md:grid-cols-4">
              <div>
                <div className="font-semibold text-gray-900">WHO</div>
                <div className="mt-1 text-gray-600">the user is</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">HOW</div>
                <div className="mt-1 text-gray-600">healthy the device is</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">WHERE</div>
                <div className="mt-1 text-gray-600">it operates</div>
              </div>
              <div>
                <div className="font-semibold text-gray-900">WHICH</div>
                <div className="mt-1 text-gray-600">app is in view</div>
              </div>
            </div>
            <div className="space-y-2 rounded-md border border-red-100 bg-white p-4 text-sm text-gray-700">
              <p>
                This lets you enforce <span className="bg-red-50 px-1">zero-trust and DLP decisions</span>
                <em className="ml-1 text-gray-600">exactly when they matter</em>.
              </p>
              <p className="italic text-gray-600">
                That vantage makes the browser the natural control plane for <strong className="bg-red-100 px-1">agentic defenses</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built-in armor Section */}
      <section id="security" className={`${sectionSpacing} bg-gray-50`}>
        <div className={`${containerClasses} space-y-12`}>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-light text-gray-900">Built-in armor</h2>
            <p className="text-sm text-gray-600">(no bolt-ons, no drama)</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Hardened Chromium</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Shrugs off phishing, malware, session hijacks, and man-in-the-browser tricks — on or off VPN.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Target className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Agent-driven Contextual Data Controls</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Copy, paste, screenshots, printing, and downloads obey role, network, app, and geo-fence.
                </p>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-3 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-red-50 text-red-600">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">Watermark & Kill-Switch</h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Every sensitive page is trace-stamped; admins can end a session mid-click if something goes sideways.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Replace VDI & VPN Section */}
      <section className={`${sectionSpacing} bg-white`}>
        <div className={`${containerClasses} space-y-10`}>
          <div className="text-center">
            <h2 className="text-2xl font-light text-gray-900 md:text-3xl">
              Replace VDI & VPN — keep the speed, lose the headaches
            </h2>
          </div>
          <ComparisonTable />
        </div>
      </section>

      {/* Browser-native ZTNA Section */}
      <section className={`${sectionSpacing} bg-gray-50`}>
        <div className={`${containerClasses} space-y-12`}>
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-light text-gray-900">Browser-native ZTNA</h2>
            <p className="text-sm text-gray-600">reverse-proxy friendly, last-mile enforced</p>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-700">
              <strong className="rounded bg-red-100 px-2 py-1 text-red-700">Yes, we do &ldquo;Access-style&rdquo; ZTNA — with a twist:</strong> the <em>browser</em> is your enforcement point, not just the network box.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-5 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                    <Building className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">How private-app access works</h3>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-medium text-red-700">1</span>
                    <p>
                      Browser connects to Wootzapp Cloud with <strong>user identity</strong>, <strong>device posture</strong>, and <strong>policy intent</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-medium text-red-700">2</span>
                    <p><strong>Reverse, outbound-only secure tunnel</strong> via Private Access Connector — no inbound firewall openings</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-medium text-red-700">3</span>
                    <p>Traffic <strong>tunneled</strong> over short-lived mTLS with browser-enforced controls</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-xs font-medium text-red-700">4</span>
                    <p>Every click <strong>logged for audit</strong> — no packet archaeology needed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border border-gray-200 shadow-none">
              <CardContent className="space-y-5 p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600">
                    <Cloud className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900">And for SaaS</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  Keep using your favorite cloud apps — now with <strong className="bg-red-100 px-1">browser-level guardrails</strong>:
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <p>Restrict uploads to approved tenants</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <p>Watermark sensitive views</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <p>Block risky extensions</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-red-500" />
                    <p>Apply <strong>GenAI-aware DLP</strong> to prompts and outputs</p>
                  </div>
                </div>
                <p className="text-sm italic text-gray-600">
                  Users get the full, zippy SaaS experience. Security gets deterministic, last-mile control.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Solutions Section */}
      <section id="solutions" className={`${sectionSpacing} bg-gradient-to-br from-white via-red-50/25 to-white`}>
        <div className={`${containerClasses} space-y-10 text-center md:text-left`}>
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <h2 className="text-2xl font-light text-gray-900 md:text-3xl">Common Solutions — Pick Your Challenge</h2>
            <p className="text-sm text-gray-500 md:max-w-sm">
              Choose the scenario that mirrors your security goals and see how the same browser adapts with precise controls.
            </p>
          </div>
          <SolutionsTabSection />
        </div>
      </section>

      {/* Final Statement Section */}
      <section className="bg-gray-900 py-20 text-white">
        <div className={`${containerClasses} space-y-8 text-center`}>
          <h2 className="text-2xl font-light md:text-3xl">Enterprise Security Ready</h2>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-gray-200 sm:text-base">
            Wootzapp Agentic Browser is the <strong>Enterprise GenAI Browser</strong>: a warmer, simpler way to do Zero Trust and DLP.
            Fewer moving parts, faster users, and guardrails that actually understand language — not just patterns.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="w-full bg-white px-6 py-3 text-sm text-gray-900 hover:bg-gray-200 sm:w-auto"
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
              className="inline-flex w-full items-center justify-center rounded-md border border-white px-6 py-3 text-sm text-white transition-colors hover:bg-white hover:text-gray-900 sm:w-auto"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
