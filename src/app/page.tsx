"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import { cn } from "@/lib/utils"
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

type SolutionConfig = {
  title: string
  main: string
  points: string[]
  conclusion?: string
}

const solutions: Record<string, SolutionConfig> = {
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

const sectionBackgroundsDark = {
  hero: "bg-gradient-to-b from-[#451337] via-[#1b061b] to-[#260c28]",
  why: "bg-gradient-to-b from-[#371033] via-[#1a081f] to-[#250d2c]",
  how: "bg-gradient-to-br from-[#3f1331] via-[#1d091f] to-[#2c1128]",
  security: "bg-gradient-to-br from-[#34132e] via-[#170a1f] to-[#26102b]",
  armor: "bg-gradient-to-r from-[#4b173d] via-[#210c26] to-[#311534]",
  ztna: "bg-gradient-to-r from-[#31153d] via-[#160a28] to-[#3a1337]",
  solutions: "bg-gradient-to-br from-[#3f1536] via-[#1e1334] to-[#301430]",
  finalCta: "bg-gradient-to-b from-[#2a1235] via-[#180b24] to-[#321434]",
} as const

const sectionBackgroundsLight = {
  hero: "bg-gradient-to-b from-[#fff5f8] via-[#fff9fc] to-[#ffeef8]",
  why: "bg-gradient-to-b from-[#fff7fb] via-[#fffdfd] to-[#ffeef6]",
  how: "bg-gradient-to-br from-[#fff4f7] via-[#fff9fd] to-[#ffe9f5]",
  security: "bg-gradient-to-br from-[#fff2f8] via-[#fef6fb] to-[#ffe8f4]",
  armor: "bg-gradient-to-r from-[#ffe8f2] via-[#fff5f9] to-[#ffeef7]",
  ztna: "bg-gradient-to-r from-[#fff3fa] via-[#fff8fb] to-[#ffe9f4]",
  solutions: "bg-gradient-to-br from-[#fff6fb] via-[#fffdfd] to-[#ffeef6]",
  finalCta: "bg-gradient-to-b from-[#fff3f9] via-[#fff8fb] to-[#ffedf6]",
} as const

const darkTheme = {
  page: "bg-[#12021a] text-white",
  sectionDivider: "border-t border-rose-500/10",
  heroBadge: "border border-rose-500/60 bg-rose-500/10 text-rose-200",
  heroHeading: "text-white",
  heroLead: "text-white/90",
  heroAccent: "text-rose-100",
  heroStatsText: "text-white/85",
  heroStatsCard: "border border-rose-500/40 bg-gradient-to-br from-rose-500/20 to-transparent",
  heroPanel: "border border-rose-500/40 bg-rose-500/10 text-white/90",
  heroPanelAccent: "text-rose-100",
  heroPanelList: "text-white/90",
  heroQuote: "border border-rose-500/60 bg-black/30 text-white/75",
  sectionTitle: "text-white",
  sectionBody: "text-white/85",
  inlineBadgeSolid: "bg-rose-500/20 text-rose-100",
  inlineBadgeOutline: "border border-rose-400/70 text-rose-100",
  inlineStrong: "text-white",
  sectionCard: "border border-rose-500/40 bg-black/40 text-white/85",
  stepCard: "border border-rose-500/20 bg-black/40",
  stepShadow: "shadow-lg shadow-rose-900/30",
  stepBadge: "border border-rose-400/50 bg-rose-500/15 text-rose-100",
  stepIcon: "text-rose-300",
  stepHighlight: "text-white/90",
  stepList: "text-white/80",
  cardHeading: "text-white",
  cardBody: "text-white/85",
  pillarCard: "border border-rose-500/20 bg-neutral-900 text-white/85 shadow-lg shadow-rose-900/20",
  armorContainer: "bg-white/5 shadow-[0_60px_120px_-80px_rgba(244,63,94,0.6)]",
  armorIntro: "text-white/80",
  armorCard: "border border-rose-500/30 bg-neutral-900/80 hover:border-rose-400/50",
  armorIcon: "bg-rose-500/20 text-rose-200",
  ztnaList: "text-white/80",
  ztnaBadge: "border border-rose-500/50 bg-rose-500/15 text-rose-100",
  ztnaCard: "border border-rose-500/20 bg-neutral-900 shadow-lg shadow-rose-900/20",
  ztnaCardText: "text-white/85",
  ztnaCardList: "text-white/80",
  ztnaNote: "text-white/80",
  solutionsTitle: "text-white",
  solutionsBody: "text-white/85",
  solutionsCard: "border border-rose-500/20 bg-neutral-900/80 shadow-lg shadow-rose-900/20 hover:border-rose-400/40",
  solutionsMeta: "text-white/80",
  solutionsPill: "border border-rose-500/50 text-rose-100",
  solutionsMain: "text-white",
  solutionsList: "text-white/80",
  solutionsConclusion: "border border-rose-500/50 bg-rose-500/20 text-white",
  finalTitle: "text-white",
  finalBody: "text-white/85",
  outlineButton: "border border-rose-500/50 text-white hover:bg-rose-500/10",
  toggleButton: "border border-rose-500/50 text-rose-100 hover:bg-rose-500/10",
} as const

const lightTheme = {
  page: "bg-[#fef7fb] text-slate-900",
  sectionDivider: "border-t border-rose-100",
  heroBadge: "border border-rose-300 bg-rose-100 text-rose-700",
  heroHeading: "text-slate-900",
  heroLead: "text-slate-700",
  heroAccent: "text-rose-600",
  heroStatsText: "text-slate-700",
  heroStatsCard: "border border-rose-200 bg-gradient-to-br from-rose-100 to-white",
  heroPanel: "border border-rose-200 bg-white/90 text-slate-700 shadow-[0_30px_60px_-45px_rgba(244,63,94,0.35)]",
  heroPanelAccent: "text-rose-600",
  heroPanelList: "text-slate-700",
  heroQuote: "border border-rose-200 bg-rose-50 text-slate-600",
  sectionTitle: "text-slate-900",
  sectionBody: "text-slate-700",
  inlineBadgeSolid: "bg-rose-100 text-rose-600",
  inlineBadgeOutline: "border border-rose-200 text-rose-600",
  inlineStrong: "text-slate-900",
  sectionCard: "border border-rose-200 bg-white/90 text-slate-700",
  stepCard: "border border-rose-200 bg-white/90",
  stepShadow: "shadow-lg shadow-rose-100/60",
  stepBadge: "border border-rose-300 bg-rose-100 text-rose-700",
  stepIcon: "text-rose-500",
  stepHighlight: "text-slate-800",
  stepList: "text-slate-600",
  cardHeading: "text-slate-900",
  cardBody: "text-slate-600",
  pillarCard: "border border-rose-200 bg-white text-slate-600 shadow-md shadow-rose-100/40",
  armorContainer: "bg-white shadow-[0_60px_120px_-90px_rgba(244,63,94,0.25)]",
  armorIntro: "text-slate-600",
  armorCard: "border border-rose-200 bg-white hover:border-rose-300",
  armorIcon: "bg-rose-100 text-rose-700",
  ztnaList: "text-slate-600",
  ztnaBadge: "border border-rose-300 bg-rose-100 text-rose-700",
  ztnaCard: "border border-rose-200 bg-white shadow-md shadow-rose-100/40",
  ztnaCardText: "text-slate-700",
  ztnaCardList: "text-slate-600",
  ztnaNote: "text-slate-600",
  solutionsTitle: "text-slate-900",
  solutionsBody: "text-slate-600",
  solutionsCard: "border border-rose-200 bg-white shadow-md shadow-rose-100/40 hover:border-rose-300",
  solutionsMeta: "text-slate-500",
  solutionsPill: "border border-rose-200 text-rose-600",
  solutionsMain: "text-slate-900",
  solutionsList: "text-slate-600",
  solutionsConclusion: "border border-rose-200 bg-rose-50 text-rose-700",
  finalTitle: "text-slate-900",
  finalBody: "text-slate-600",
  outlineButton: "border border-rose-200 text-rose-600 hover:bg-rose-100/60",
  toggleButton: "border border-rose-200 text-rose-600 hover:bg-rose-100/70",
} as const

export default function HomePage() {
  const [isLightMode, setIsLightMode] = useState(false)
  const theme = isLightMode ? lightTheme : darkTheme
  const sectionBackgrounds = isLightMode
    ? sectionBackgroundsLight
    : sectionBackgroundsDark

  const themeToggle = (
    <button
      type="button"
      onClick={() => setIsLightMode((prev) => !prev)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.35em] transition-colors sm:px-4 sm:py-2 sm:text-xs",
        theme.toggleButton
      )}
    >
      {isLightMode ? "Use Dark Mode" : "Use Light Mode"}
    </button>
  )

  return (
    <div
      data-theme={isLightMode ? "light" : "dark"}
      className={cn(
        "min-h-screen transition-colors duration-500",
        theme.page
      )}
    >
      <div className="relative">
        <Header variant={isLightMode ? "light" : "dark"} />
        <div
          className={cn(
            "absolute right-3 top-full flex justify-end sm:right-6 lg:right-8",
            isLightMode ? "drop-shadow-sm" : "drop-shadow-[0_6px_16px_rgba(0,0,0,0.35)]"
          )}
          style={{ transform: "translateY(-1px)" }}
        >
          {themeToggle}
        </div>
      </div>

      <div className="h-8 sm:h-10" />

      {/* Hero */}
      <section className={cn("relative overflow-hidden", sectionBackgrounds.hero)}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,63,94,0.35),_transparent_60%)]" />
        <div
          className={cn(
            containerClasses,
            "relative grid gap-12 py-24 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
          )}
        >
          <div className="space-y-10">
            <div className="space-y-4">
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em]",
                  theme.heroBadge
                )}
              >
                Wootzapp Agentic Browser
              </span>
              <h1
                className={cn(
                  "text-left text-4xl font-light leading-tight tracking-tight sm:text-5xl md:text-6xl",
                  theme.heroHeading
                )}
              >
                The GenAI Browser for Enterprise Security Teams
              </h1>
              <p className={cn("text-left text-lg sm:text-xl", theme.heroLead)}>
                A simpler, complete way to secure modern work: GenAI-native DLP, agentic security controls, and
                zero-trust access — all inside one Android browser.
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
              <p
                className={cn(
                  "text-xs uppercase tracking-[0.4em] sm:ml-4",
                  theme.heroAccent
                )}
              >
                Replace VDI • Retain speed • Gain visibility
              </p>
            </div>

            <div className={cn("grid gap-4 text-sm sm:grid-cols-3", theme.heroStatsText)}>
              {heroStats.map((stat) => (
                <div
                  key={stat}
                  className={cn("rounded-2xl p-4", theme.heroStatsCard)}
                >
                  {stat}
                </div>
              ))}
            </div>
          </div>

          <div
            className={cn(
              "space-y-6 rounded-3xl p-6 backdrop-blur sm:mx-auto sm:max-w-lg lg:mx-0",
              theme.heroPanel
            )}
          >
            <p
              className={cn(
                "text-sm uppercase tracking-[0.4em]",
                theme.heroPanelAccent
              )}
            >
              Enterprise leaders choose Wootzapp to:
            </p>
            <ul className={cn("space-y-4 text-sm", theme.heroPanelList)}>
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
            <div className={cn("rounded-2xl border p-4 text-xs", theme.heroQuote)}>
              &quot;GenAI-native DLP, agentic security controls, and zero-trust access live right inside the browser — no VDI
              pixel-pushing, no sprawling ZTNA complexity.&quot;
            </div>
          </div>
        </div>
      </section>

      {/* Why a GenAI Browser */}
      <section
        className={cn(
          "relative overflow-hidden py-20",
          theme.sectionDivider,
          sectionBackgrounds.why
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(244,63,94,0.35),_transparent_65%)]" />
        <div className={`${containerClasses} relative grid gap-12 lg:grid-cols-2`}>
          <div className="space-y-6">
            <h2 className={cn("text-3xl font-light sm:text-4xl", theme.sectionTitle)}>
              Why a GenAI Browser?
            </h2>
            <p className={cn("text-sm leading-relaxed sm:text-base", theme.sectionBody)}>
              Most work — including your AI tools — lives in the browser. So we put
              <span
                className={cn(
                  "mx-1 inline-block rounded px-2 py-0.5 font-semibold uppercase tracking-wide",
                  theme.inlineBadgeSolid
                )}
              >
                DLP
              </span>
              <span
                className={cn(
                  "mr-1 inline-block rounded px-2 py-0.5 font-semibold uppercase tracking-wide",
                  theme.inlineBadgeSolid
                )}
              >
                Access
              </span>
              <span
                className={cn(
                  "mr-1 inline-block rounded px-2 py-0.5 font-semibold uppercase tracking-wide",
                  theme.inlineBadgeSolid
                )}
              >
                Analytics
              </span>
              <strong className={cn("mx-1 font-semibold", theme.inlineStrong)}>
                into
              </strong>
              the browser and taught it to speak
              <span
                className={cn(
                  "ml-1 inline-block rounded border px-2 py-0.5 font-semibold italic",
                  theme.inlineBadgeOutline
                )}
              >
                “LLM.”
              </span>
              It can
              <em className={cn("mx-1 font-semibold", theme.inlineStrong)}>
                detect, explain, and stop
              </em>
              risky data flows in real time, without juggling heavy VDI or sprawling ZTNA stacks.
            </p>
          </div>
          <div className={cn("space-y-4 rounded-3xl border p-6 text-sm", theme.sectionCard)}>
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
      <section
        className={cn(
          "relative overflow-hidden py-20",
          theme.sectionDivider,
          sectionBackgrounds.how
        )}
      >
        <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_center,_rgba(244,63,94,0.28),_transparent_70%)] lg:block" />
        <div className={`${containerClasses} relative space-y-12`}>
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <h2 className={cn("text-2xl font-light md:text-3xl", theme.sectionTitle)}>
              How it works (at a glance)
            </h2>
            <p className={cn("max-w-lg text-sm", theme.sectionBody)}>
              A browser-first control plane that understands language, evaluates posture before pixels, and streams high-fidelity telemetry — without creeping on personal browsing.
            </p>
          </div>
          <div className="space-y-8">
            {howItWorksRoadmap.map((step, index) => (
              <div
                key={step.title}
                className={cn(
                  "rounded-3xl border p-6 sm:p-8",
                  theme.stepCard,
                  theme.stepShadow
                )}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  <div className="flex items-center gap-4 sm:flex-col sm:items-center sm:gap-3">
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold",
                        theme.stepBadge
                      )}
                    >
                      {index + 1}
                    </span>
                    <step.icon className={cn("h-6 w-6", theme.stepIcon)} />
                  </div>
                  <div className="flex-1 space-y-3 text-left">
                    <h3 className={cn("text-lg font-semibold", theme.cardHeading)}>
                      {step.title}
                    </h3>
                    <p className={cn("text-sm font-medium", theme.stepHighlight)}>
                      {step.highlight}
                    </p>
                    <ul className={cn("space-y-2 text-sm", theme.stepList)}>
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
      <section
        className={cn(
          "py-20",
          theme.sectionDivider,
          sectionBackgrounds.security
        )}
      >
        <div className={`${containerClasses} space-y-12`}>
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className={cn("text-2xl font-light md:text-3xl", theme.sectionTitle)}>
              Agentic security — built into the browser
            </h2>
            <p className={cn("max-w-3xl text-sm", theme.sectionBody)}>
              Treat the browser as your agent runtime. The Guardrails Module injects inline intelligence while the Armor Layer keeps data locked down.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {securityPillars.map((pillar) => (
              <Card key={pillar.title} className={cn(theme.pillarCard)}>
                <CardContent className="space-y-3 p-6">
                  <h3 className={cn("text-lg font-semibold", theme.cardHeading)}>
                    {pillar.title}
                  </h3>
                  <p className={cn("text-sm leading-relaxed", theme.cardBody)}>
                    {pillar.body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Built-in armor */}
      <section
        className={cn(
          "py-20",
          theme.sectionDivider,
          sectionBackgrounds.armor
        )}
      >
        <div
          className={cn(
            containerClasses,
            "space-y-10 rounded-[48px] p-8 backdrop-blur-sm sm:p-12",
            theme.armorContainer
          )}
        >
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className={cn("text-3xl font-light", theme.sectionTitle)}>
              Built-in armor
            </h2>
            <p className={cn("text-sm", theme.armorIntro)}>
              No bolt-ons. No drama. Your last-mile defense, ready out of the box.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {armorHighlights.map((item) => (
              <Card key={item.title} className={cn(theme.armorCard)}>
                <CardContent className="space-y-4 p-6">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full",
                      theme.armorIcon
                    )}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className={cn("text-lg font-semibold", theme.cardHeading)}>
                    {item.title}
                  </h3>
                  <p className={cn("text-sm", theme.cardBody)}>{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ZTNA */}
      <section
        className={cn(
          "py-20",
          theme.sectionDivider,
          sectionBackgrounds.ztna
        )}
      >
        <div className={`${containerClasses} grid gap-12 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]`}>
          <div className="space-y-6">
            <h2 className={cn("text-3xl font-light", theme.sectionTitle)}>
              Browser-native ZTNA
            </h2>
            <p className={cn("text-sm", theme.sectionBody)}>
              Reverse-proxy friendly, last-mile enforced. Yes, we do “Access-style” ZTNA — with a twist: the browser is your enforcement point, not just the network box.
            </p>
            <ol className={cn("space-y-4 text-sm", theme.ztnaList)}>
              {ztnaSteps.map((step, idx) => (
                <li key={step} className="relative pl-12">
                  <span
                    className={cn(
                      "absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold",
                      theme.ztnaBadge
                    )}
                  >
                    {idx + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <Card className={cn(theme.ztnaCard)}>
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    theme.armorIcon
                  )}
                >
                  <Cloud className="h-5 w-5" />
                </div>
                <h3 className={cn("text-lg font-semibold", theme.cardHeading)}>
                  SaaS stays zippy. Security stays deterministic.
                </h3>
              </div>
              <p className={cn("text-sm", theme.ztnaCardText)}>
                Keep using your favorite cloud apps — now with browser-level guardrails:
              </p>
              <ul className={cn("space-y-2 text-sm", theme.ztnaCardList)}>
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
              <p className={cn("text-sm italic", theme.ztnaNote)}>
                Users get the full, zippy SaaS experience. Security gets deterministic, last-mile control.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section
        className={cn(
          "py-20",
          theme.sectionDivider,
          sectionBackgrounds.solutions
        )}
      >
        <div
          className={cn(
            containerClasses,
            "space-y-12 rounded-[48px] p-8 backdrop-blur-sm sm:p-12",
            theme.armorContainer
          )}
        >
          <div className="flex flex-col items-start gap-4 text-left">
            <h2 className={cn("text-2xl font-light md:text-3xl", theme.solutionsTitle)}>
              Common Solutions — Pick Your Challenge
            </h2>
            <p className={cn("max-w-3xl text-sm", theme.solutionsBody)}>
              Choose the scenario that mirrors your security goals and see how the same browser adapts with precise controls.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(solutions).map(([key, value], index) => (
              <Card key={key} className={cn("group transition", theme.solutionsCard)}>
                <CardContent className="space-y-4 p-6">
                  <div className={cn("flex items-center justify-between text-xs", theme.solutionsMeta)}>
                    <span>0{index + 1}</span>
                    <span
                      className={cn(
                        "rounded-full px-3 py-1 uppercase tracking-[0.3em]",
                        theme.solutionsPill
                      )}
                    >
                      {value.title}
                    </span>
                  </div>
                  <p className={cn("text-sm font-medium", theme.solutionsMain)}>
                    {value.main}
                  </p>
                  {value.points && (
                    <ul className={cn("space-y-2 text-sm", theme.solutionsList)}>
                      {value.points.map((point) => (
                        <li key={point} className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-rose-400">
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                  {value.conclusion && (
                    <div
                      className={cn(
                        "rounded-2xl border p-4 text-xs font-semibold",
                        theme.solutionsConclusion
                      )}
                    >
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
      <section
        className={cn(
          "py-20",
          theme.sectionDivider,
          sectionBackgrounds.finalCta
        )}
      >
        <div className={`${containerClasses} space-y-8 text-center`}>
          <h2 className={cn("text-2xl font-light sm:text-3xl", theme.finalTitle)}>
            Enterprise Security Ready
          </h2>
          <p className={cn("mx-auto max-w-3xl text-sm sm:text-base", theme.finalBody)}>
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
              className={cn(
                "inline-flex w-full items-center justify-center rounded-xl px-8 py-3 text-sm font-semibold transition sm:w-auto",
                theme.outlineButton
              )}
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>

      <Footer variant={isLightMode ? "light" : "dark"} />
    </div>
  )
}
