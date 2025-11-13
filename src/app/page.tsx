"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import { cn } from "@/lib/utils"
import { Cloud, Lightbulb, Search, Shield, Target, Zap } from "lucide-react"

const containerClasses = "mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"



const howItWorksRoadmap = [
  {
    title: "GenAI-native DLP engine",
    highlight: "Understands language and context — not just patterns",
    bullets: [
      "Catches data as it&apos;s typed, pasted, uploaded",
      "Works with AI tools (even when paraphrased)",
      "You set guardrails. It enforces inline",
    ],
    icon: Search,
  },
  {
    title: "Policy before pixels",
    highlight: "Before a page renders, the browser evaluates",
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

const coreFeatures = [
  {
    icon: Shield,
    title: "Agentic Security Control",
    body: "The browser actively monitors user actions and can intervene in real-time to redact sensitive information, require additional authentication, or ask for human approval.",
  },
  {
    icon: Search,
    title: "LLM-aware Data Guard",
    body: "Modern DLP that understands context, not just patterns. It supports GenAI workflows like paraphrasing, translation, and summarization directly within the browser.",
  },
  {
    icon: Zap,
    title: "Zero-Trust, Simplified",
    body: "Use short-lived, mTLS connections for private apps while extending least-privilege policy into the browser itself. Stronger control, simpler rollout.",
  },
  {
    icon: Shield,
    title: "Hardened Chromium",
    body: "Effectively blocks phishing, malware, session hijacks, and man-in-the-browser tricks — on or off VPN, without performance hits.",
  },
  {
    icon: Target,
    title: "Contextual Data Controls",
    body: "Copy, paste, screenshots, printing, and downloads obey granular policies based on user role, network, application, and geo-fence.",
  },
  {
    icon: Zap,
    title: "Watermark & Kill-Switch",
    body: "Every sensitive page is trace-stamped, and admins can terminate any session mid-click if a risk is detected.",
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
    main: "SaaS gave you \"anywhere\"; Wootzapp Agentic Browser gives you control back:",
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
    main: 'Say "yes" to AI tools &mdash; safely.',
    points: [
      "Enterprise DLP for GenAI guards prompts and outputs",
      "Teams can innovate without accidental leaks",
      "Clear banners show what&apos;s protected",
    ],
  },
}

const ztnaSteps = [
  "Browser connects to Wootzapp Cloud with user identity, device posture, and policy intent",
  "Reverse, outbound-only secure tunnel via Private Access Connector — no inbound firewall openings",
  "Traffic tunneled over short-lived mTLS with browser-enforced controls",
  "Every click logged for audit — no deep packet inspection required",
]



export default function HomePage() {
  return (
    <div
      data-theme="dark"
      className="min-h-screen bg-background text-foreground"
    >
      <Header />

      <div className="h-8 sm:h-10" />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/20"></div>
        
        <div className={cn(containerClasses, "relative")}>
          {/* Centered Hero Content */}
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <h1 className="text-4xl font-bold leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-5xl md:text-6xl lg:text-7xl">
              The Enterprise Browser for Secure, Modern Work
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              Unify security and productivity. Wootzapp provides GenAI-native DLP, agentic controls, and zero-trust access in one seamless browsing experience.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
              <Button
                asChild
                className="w-full bg-primary px-8 py-6 text-base font-semibold text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] transition hover:bg-primary/90 sm:w-auto"
              >
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

      {/* Why Wootzapp */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
                Security policy belongs in the browser.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Most work—and most risk—lives in the browser. Instead of relying on complex, bolted-on solutions, Wootzapp builds security directly into the browsing experience, giving you last-mile control where it matters most.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Deploy in Minutes</h3>
                  <p className="mt-1 text-muted-foreground">Install one app, and cloud-native policies handle the rest. No complex infrastructure or backhauling required.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">GenAI-Native DLP</h3>
                  <p className="mt-1 text-muted-foreground">Our browser understands context and nuance, stopping data leaks in GenAI tools that pattern-based DLP would miss.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Full Visibility</h3>
                  <p className="mt-1 text-muted-foreground">Get high-fidelity, click-level events streamed to your SIEM for complete last-mile visibility without compromising user privacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our browser-first control plane understands natural language, evaluates security posture before a page renders, and streams detailed telemetry—all without compromising user privacy.
            </p>
          </div>

          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-primary/50 to-transparent"></div>
            <div className="space-y-16">
              {howItWorksRoadmap.map((step, index) => (
                <div key={step.title} className="relative flex items-start">
                  <div className="absolute left-1/2 top-5 -translate-x-1/2">
                    <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_10px_theme(colors.primary)]"></div>
                  </div>
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="rounded-lg bg-card p-6 border border-border shadow-lg shadow-primary/5">
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{step.highlight}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <div className="rounded-lg bg-card p-6 border border-border shadow-lg shadow-primary/5">
                        <h3 className="font-semibold text-foreground">{step.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{step.highlight}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
              A Secure Foundation for a Modern Workforce
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Wootzapp isn&apos;t just a browser; it&apos;s a secure workspace. We&apos;ve built a suite of agentic security tools and hardened defenses directly into the core, giving you unparalleled control and visibility.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coreFeatures.map((feature) => (
              <div key={feature.title} className="rounded-lg bg-card p-6 border border-border">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary shadow-[0_0_20px_theme(colors.primary/20)]">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZTNA */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
                Browser-Native Zero Trust
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Move beyond network-level controls. Wootzapp makes the browser the core of your zero-trust architecture, enforcing access policies at the last possible moment—right before a page renders.
              </p>
            </div>
            <div className="space-y-6">
              {ztnaSteps.map((step, idx) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-[0_0_10px_theme(colors.primary)]">
                    {idx + 1}
                  </div>
                  <p className="pt-1 text-muted-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Showcase */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl">
              Solutions for Every Use Case
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              From securing contractors to enabling BYOD, the Wootzapp browser adapts to your most critical security challenges.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(solutions).map(([key, value]) => (
              <div
                key={key}
                className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
              >
                <h3 className="font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.main}</p>
                <ul className="mt-4 space-y-2">
                  {value.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CLI Showcase */}
      <OpenSourceShowcase />

      {/* Final CTA */}
      <section className="py-20 md:py-32">
        <div className={containerClasses}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-card p-12 text-center md:p-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/20 to-transparent"></div>
            <div className="absolute -top-1/2 left-1/2 -z-10 h-[200%] w-[200%] -translate-x-1/2 animate-[spin_10s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,theme(colors.primary/50),transparent_25%)]"></div>
            
            <h2 className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 sm:text-4xl md:text-5xl">
              Ready to Simplify Your Security?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Fewer moving parts, faster users, and guardrails that actually understand language. See how the Wootzapp Enterprise Browser can transform your security posture.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                className="w-full bg-primary px-10 py-6 text-base font-semibold text-primary-foreground shadow-[0_0_20px_theme(colors.primary)] transition hover:bg-primary/90 sm:w-auto"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request a Demo
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
