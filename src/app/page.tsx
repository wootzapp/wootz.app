"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import { Cloud, Lightbulb, Search, Shield, Target, Zap } from "lucide-react"

const containerClasses = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"

const heroStats = [
  "Install one app; cloud policies do the rest",
  "Native Chromium speed on spotty cellular",
  "GenAI-native DLP + last-mile controls",
]

const howItWorksRoadmap = [
  {
    title: "GenAI-native DLP engine",
    highlight: "Understands language and context — not just patterns",
    bullets: [
      "Catches data as it&apos;s typed, pasted, uploaded",
      "Works with AI tools (even when paraphrased)",
      "You set guardrails; it enforces inline",
    ],
    icon: Search,
  },
  {
    title: "Policy before pixels",
    highlight: "Before a page paints, the browser evaluates",
    bullets: [
      "Identity, device posture, network, location",
      "Then applies controls (mask, block, watermark)",
      "No proxies or code changes",
    ],
    icon: Lightbulb,
  },
  {
    title: "Last-mile visibility (without creepiness)",
    highlight: "High-fidelity, click-level events flow to your SIEM",
    bullets: [
      "Personal browsing stays private",
    ],
    icon: Shield,
  },
]

const securityPillars = [
  {
    title: "Agentic Security Control",
    body: "Treat the browser as the agent runtime. Real-time monitors watch prompts, tool invocations, file uploads, form fills, clipboard, and extension behavior. Policies let agents intervene: redact, quarantine, require step-up auth, or ask for human approval. Security acts at the moment of action.",
  },
  {
    title: "LLM-aware Data Guard",
    body: "Modern DLP needs classification, policy enforcement, monitoring/alerts, granular controls (copy/paste/uploads), and explicit support for GenAI workflows like paraphrasing, translation, and summarization. We do it all at the last mile — the browser.",
  },
  {
    title: "Zero-trust, minus the machinery",
    body: "Use short-lived, mTLS connections for private apps while extending least-privilege policy into the render process itself. Simpler rollout than legacy ZTNA; stronger control where it counts.",
  },
]

const armorHighlights = [
  {
    icon: Shield,
    title: "Hardened Chromium",
    body: "Shrugs off phishing, malware, session hijacks, and man-in-the-browser tricks — on or off VPN.",
  },
  {
    icon: Target,
    title: "Agent-driven Contextual Data Controls",
    body: "Copy, paste, screenshots, printing, and downloads obey role, network, app, and geo-fence.",
  },
  {
    icon: Zap,
    title: "Watermark & Kill-Switch",
    body: "Every sensitive page is trace-stamped; admins can end a session mid-click if something goes sideways.",
  },
]

const solutions = {
  "vdi-reduction": {
    title: "VDI Reduction",
    main: "Centralize control without shipping pixels.",
    points: [
      "Policies live in the cloud",
      "Apps run at device speed",
      "Costs fall dramatically",
    ],
    conclusion: "Teams keep the familiar browser UX and gain precise last-mile, LLM-aware DLP.",
  },
  "byod-workforce": {
    title: "BYOD Workforce",
    main: "Let personal phones stay personal while corporate data stays governed.",
    points: [
      "Contextual controls stop risky copy/paste, screenshots, or uploads",
      "Posture checks flip risky devices to read-only",
      "No creepy MDM required",
    ],
  },
  "3rd-party-onboarding": {
    title: "3rd-Party Onboarding",
    main: "Contractors install a browser—not a VM image—and receive least-privilege access in minutes.",
    points: [
      "Granular DLP prevents leakage",
      "Click-level events stream to your security stack",
      "Painless audits and compliance",
    ],
  },
  "saas-web-apps": {
    title: "SaaS & Web Apps",
    main: "SaaS gave you &quot;anywhere&quot;; Wootzapp Agentic Browser gives you control back:",
    points: [
      "Built-in agentic DLP for SAAS",
      "Posture-aware access controls",
      "Layer MFA/SSO onto any web app — no proxies, no code",
    ],
    conclusion: "Browser-level controls keep data where it belongs.",
  },
  "privileged-access": {
    title: "Privileged Access",
    main: "Inject security controls directly into sensitive workflows — without touching source code.",
    points: [
      "MFA prompts at the right moment",
      "Four-eyes approvals for critical actions",
      "UI masking for sensitive data",
      "Every action recorded for accountability",
    ],
  },
  "zero-trust": {
    title: "Zero Trust",
    main: "Make the browser the policy-enforcement point.",
    points: [
      "Authenticate each request",
      "Verify device health continuously",
      "Apply data rules in the render process",
    ],
  },
  "safe-browsing": {
    title: "Safe Browsing",
    main: "Block threats before they land, without dragging down performance.",
    points: [
      "Phishing protection",
      "Malware blocking",
      "Drive-by exploit prevention",
    ],
    conclusion: "Users feel the web, not the walls.",
  },
  "enable-genai": {
    title: "Enable GenAI at Work",
    main: 'Say “yes” to AI tools — safely.',
    points: [
      "Enterprise DLP for GenAI guards prompts and outputs",
      "Teams can innovate without accidental leaks",
      "Clear banners show what's protected",
    ],
  },
}

const ztnaSteps = [
  "Browser connects to Wootzapp Cloud with user identity, device posture, and policy intent",
  "Reverse, outbound-only secure tunnel via Private Access Connector — no inbound firewall openings",
  "Traffic tunneled over short-lived mTLS with browser-enforced controls",
  "Every click logged for audit — no packet archaeology needed",
]

const saasBullets = [
  "Restrict uploads to approved tenants",
  "Watermark sensitive views",
  "Block risky extensions",
  "Apply GenAI-aware DLP to prompts and outputs",
]

const sectionBackgrounds = {
  hero: "bg-gradient-to-b from-[#451337] via-[#1b061b] to-[#260c28]",
  why: "bg-gradient-to-b from-[#371033] via-[#1a081f] to-[#250d2c]",
  how: "bg-gradient-to-br from-[#3f1331] via-[#1d091f] to-[#2c1128]",
  security: "bg-gradient-to-br from-[#34132e] via-[#170a1f] to-[#26102b]",
  armor: "bg-gradient-to-r from-[#4b173d] via-[#210c26] to-[#311534]",
  ztna: "bg-gradient-to-r from-[#31153d] via-[#160a28] to-[#3a1337]",
  solutions: "bg-gradient-to-br from-[#3f1536] via-[#1e1334] to-[#301430]",
  finalCta: "bg-gradient-to-b from-[#2a1235] via-[#180b24] to-[#321434]",
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#12021a] text-white">
      <Header />

      {/* Hero */}
      <section className={`relative overflow-hidden ${sectionBackgrounds.hero}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.35),_transparent_60%)]" />
        <div className={`${containerClasses} relative grid gap-12 py-24 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`}>
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full border border-rose-500/60 bg-rose-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-rose-200">
                Wootzapp Agentic Browser
              </span>
              <h1 className="text-left text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl">
                The GenAI Browser for Enterprise Security Teams
              </h1>
              <p className="text-left text-lg text-white/90 sm:text-xl">
                A simpler, complete way to secure modern work: GenAI-native DLP, agentic security controls, and zero-trust access — all inside one Android browser.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                className="w-full justify-center bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 transition hover:brightness-110 sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a secure demo →
                </a>
              </Button>
              <p className="text-xs uppercase tracking-[0.4em] text-rose-100 sm:ml-4">
                Replace VDI • Retain speed • Gain visibility
              </p>
            </div>

            <div className="grid gap-4 text-sm text-white/85 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-2xl border border-rose-500/40 bg-gradient-to-br from-rose-500/20 to-transparent p-4"
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-rose-500/40 bg-rose-500/10 p-6 shadow-[0_30px_60px_-45px_rgba(244,63,94,0.8)] backdrop-blur sm:mx-auto sm:max-w-lg lg:mx-0">
            <p className="text-sm uppercase tracking-[0.4em] text-rose-100">Enterprise leaders choose Wootzapp to:</p>
            <ul className="space-y-4 text-sm text-white/90">
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                Kill VDI sprawl without sacrificing control
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                Embrace BYOD and contractors with policy-grade guardrails
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                Say &quot;yes&quot; to GenAI with deterministic DLP
              </li>
            </ul>
            <div className="rounded-2xl border border-rose-500/60 bg-black/30 p-4 text-xs text-white/75">
              &quot;GenAI-native DLP, agentic security controls, and zero-trust access live right inside the browser — no VDI pixel-pushing, no sprawling ZTNA complexity.&quot;
            </div>
          </div>
        </div>
      </section>

      {/* Why a GenAI Browser */}
      <section className={`relative overflow-hidden border-t border-rose-500/10 py-20 ${sectionBackgrounds.why}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.35),_transparent_65%)]" />
        <div className={`${containerClasses} relative grid gap-12 lg:grid-cols-2`}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white sm:text-4xl">Why a GenAI Browser?</h2>
            <p className="text-sm leading-relaxed text-white/85 sm:text-base">
              Most work — including your AI tools — lives in the browser. So we put
              <span className="mx-1 inline-block rounded bg-rose-500/25 px-2 py-0.5 font-semibold uppercase tracking-wide text-rose-100">DLP</span>
              <span className="mr-1 inline-block rounded bg-rose-500/25 px-2 py-0.5 font-semibold uppercase tracking-wide text-rose-100">Access</span>
              <span className="mr-1 inline-block rounded bg-rose-500/25 px-2 py-0.5 font-semibold uppercase tracking-wide text-rose-100">Analytics</span>
              <strong className="mx-1 font-semibold text-white">into</strong> the browser and taught it to speak
              <span className="ml-1 inline-block rounded border border-rose-400/70 px-2 py-0.5 font-semibold italic text-rose-100">“LLM.”</span>
              It can <em className="font-semibold text-white">detect, explain, and stop</em> risky data flows in real time, without juggling heavy VDI or sprawling ZTNA stacks.
            </p>
          </div>
          <div className="space-y-4 rounded-3xl border border-rose-500/40 bg-black/40 p-6 text-sm text-white/85">
            <p>
              • No more shipping pixels.
              <br />• No more bolted-on proxies.
              <br />• No more wondering what happened in the last mile.
            </p>
            <p>
              Wootzapp, the Enterprise GenAI Browser, applies last-mile policy where it matters: inside the render process.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={`relative overflow-hidden border-t border-rose-500/10 py-20 ${sectionBackgrounds.how}`}>
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(244,63,94,0.28),_transparent_70%)] lg:block" />
        <div className={`${containerClasses} relative space-y-12`}>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <h2 className="text-2xl font-light text-white md:text-3xl">How it works (at a glance)</h2>
            <p className="max-w-lg text-sm text-white/85">
              A browser-first control plane that understands language, evaluates posture before pixels, and streams high-fidelity telemetry — without creeping on personal browsing.
            </p>
          </div>
          <div className="space-y-8">
            {howItWorksRoadmap.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-rose-500/20 bg-black/40 p-6 shadow-lg shadow-rose-900/30 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full border border-rose-400/50 bg-rose-500/15 text-base font-semibold text-rose-100">
                      {index + 1}
                    </span>
                    <step.icon className="h-6 w-6 text-rose-300" />
                  </div>
                  <div className="flex-1 space-y-3 text-left">
                    <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                    <p className="text-sm font-medium text-white/90">{step.highlight}</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      {step.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="relative pl-6 text-left before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400"
                        >
                          {bullet.includes("Personal browsing") ? <span className="italic">{bullet}</span> : bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Capabilities */}
      <section className={`border-t border-rose-500/10 py-20 ${sectionBackgrounds.security}`}>
        <div className={`${containerClasses} space-y-12`}>
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className="text-2xl font-light text-white md:text-3xl">Agentic security — built into the browser</h2>
            <p className="max-w-3xl text-sm text-white/85">
              Treat the browser as your agent runtime. The Guardrails Module injects inline intelligence while the Armor Layer keeps data locked down.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {securityPillars.map((pillar) => (
              <Card key={pillar.title} className="border border-rose-500/20 bg-neutral-900 shadow-lg shadow-rose-900/20">
                <CardContent className="space-y-3 p-6">
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                  <p className="text-sm leading-relaxed text-white/85">{pillar.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built-in armor */}
      <section className={`border-t border-rose-500/10 py-20 ${sectionBackgrounds.armor}`}>
        <div className={`${containerClasses} space-y-10 bg-white/5 p-8 rounded-[48px] backdrop-blur-sm sm:p-12 shadow-[0_60px_120px_-80px_rgba(244,63,94,0.6)]`}>
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className="text-3xl font-light text-white">Built-in armor</h2>
            <p className="text-sm text-white/80">No bolt-ons. No drama. Your last-mile defense, ready out of the box.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {armorHighlights.map((item) => (
              <Card key={item.title} className="border border-rose-500/30 bg-neutral-900/80 hover:border-rose-400/50">
                <CardContent className="space-y-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-500/25 text-rose-100">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-white/85">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ZTNA */}
      <section className={`border-t border-rose-500/10 py-20 ${sectionBackgrounds.ztna}`}>
        <div className={`${containerClasses} grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`}>
          <div className="space-y-6">
            <h2 className="text-3xl font-light text-white">Browser-native ZTNA</h2>
            <p className="text-sm text-white/85">Reverse-proxy friendly, last-mile enforced. Yes, we do “Access-style” ZTNA — with a twist: the browser is your enforcement point, not just the network box.</p>
            <ol className="space-y-4 text-sm text-white/80">
              {ztnaSteps.map((step, idx) => (
                <li key={step} className="relative pl-12">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-rose-500/50 bg-rose-500/15 text-xs font-semibold text-rose-100">
                    {idx + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <Card className="border border-rose-500/20 bg-neutral-900 shadow-lg shadow-rose-900/20">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500/25 text-rose-100">
                  <Cloud className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white">SaaS stays zippy. Security stays deterministic.</h3>
              </div>
              <p className="text-sm text-white/85">Keep using your favorite cloud apps — now with browser-level guardrails:</p>
              <ul className="space-y-2 text-sm text-white/80">
                {saasBullets.map((line) => (
                  <li key={line} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                    {line.includes("GenAI-aware") ? (
                      <>
                        Apply <strong>GenAI-aware DLP</strong> to prompts and outputs
                      </>
                    ) : (
                      line
                    )}
                  </li>
                ))}
              </ul>
              <p className="text-sm italic text-white/80">Users get the full, zippy SaaS experience. Security gets deterministic, last-mile control.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className={`border-t border-rose-500/10 py-20 ${sectionBackgrounds.solutions}`}>
        <div className={`${containerClasses} space-y-12 bg-white/5 p-8 rounded-[48px] shadow-[0_60px_120px_-80px_rgba(244,63,94,0.6)] backdrop-blur-sm sm:p-12`}>
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className="text-2xl font-light text-white md:text-3xl">Common Solutions — Pick Your Challenge</h2>
            <p className="max-w-3xl text-sm text-white/85">Choose the scenario that mirrors your security goals and see how the same browser adapts with precise controls.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(solutions).map(([key, value], index) => (
              <Card key={key} className="group border border-rose-500/20 bg-neutral-900/80 shadow-lg shadow-rose-900/20 transition hover:border-rose-400/40">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-center justify-between text-xs text-white/80">
                    <span>0{index + 1}</span>
                    <span className="rounded-full border border-rose-500/50 px-3 py-1 uppercase tracking-[0.3em] text-rose-100">
                      {value.title}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-white">{value.main}</p>
                  {value.points && (
                    <ul className="space-y-2 text-sm text-white/80">
                      {value.points.map((point) => (
                        <li key={point} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {value.conclusion && (
                    <div className="rounded-2xl border border-rose-500/50 bg-rose-500/20 p-4 text-xs font-semibold text-white">
                      {value.conclusion}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CLI Showcase */}
      <OpenSourceShowcase />

      {/* Final CTA */}
      <section className={`border-t border-rose-500/10 py-20 ${sectionBackgrounds.finalCta}`}>
        <div className={`${containerClasses} space-y-8 text-center`}>
          <h2 className="text-2xl font-light text-white sm:text-3xl">Enterprise Security Ready</h2>
          <p className="mx-auto max-w-3xl text-sm text-white/85 sm:text-base">
            Wootzapp Agentic Browser is the Enterprise GenAI Browser: a warmer, simpler way to do Zero Trust and DLP. Fewer moving parts, faster users, and guardrails that actually understand language — not just patterns.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="w-full justify-center bg-gradient-to-r from-rose-500 via-red-500 to-orange-500 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-900/40 transition hover:brightness-110 sm:w-auto"
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
              className="inline-flex w-full items-center justify-center rounded-xl border border-rose-500/50 px-8 py-3 text-sm font-semibold text-white transition hover:bg-rose-500/10 sm:w-auto"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
