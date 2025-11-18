"use client"

import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import { cn } from "@/lib/utils"
import { 
  Cloud, 
  Lightbulb, 
  Search, 
  Shield, 
  Zap, 
  Lock, 
  ArrowRight,
  CheckCircle2,
  Laptop,
  Smartphone,
  UserCheck,
  LayoutGrid,
  Eye,
  Bot,
  FileText,
  AlertTriangle,
  Server,
  Globe,
  User
} from "lucide-react"
import { Particles } from "@/components/ui/particles"
import { ComparisonTable } from "@/components/comparison-table"

const containerClasses = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"

// --- Original Content Data Structures ---

const howItWorksRoadmap = [
  {
    title: "GenAI-native DLP engine",
    highlight: "Understands language and context — not just patterns",
    bullets: [
      "Catches data as it's typed, pasted, uploaded",
      "Works with AI tools (even when paraphrased)",
      "You set guardrails; it enforces inline",
    ],
    icon: Search,
    color: "text-[#D504D9]",
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
    color: "text-[#3F04BF]",
  },
  {
    title: "Last-mile visibility (without creepiness)",
    highlight: "High-fidelity, click-level events flow to your SIEM",
    bullets: [
      "Personal browsing stays private",
    ],
    icon: Shield,
    color: "text-[#9303A6]",
  },
]

const coreFeatures = [
  {
    icon: Shield,
    title: "Agentic Security Control",
    body: "Treat the browser as the agent runtime. Real-time monitors watch prompts, tool invocations, file uploads, form fills, clipboard, and extension behavior.",
    points: [
      "Redact, quarantine, or require step-up auth",
      "Ask for human approval for risky actions",
      "Security that acts at the moment of action",
    ],
    status: "Active",
    statusColor: "text-emerald-400",
    dotColor: "bg-emerald-400",
  },
  {
    icon: Search,
    title: "LLM-aware Data Guard",
    body: "Modern DLP needs classification, policy enforcement, monitoring/alerts, and granular controls. We do it all at the last mile — the browser.",
    points: [
      "Granular controls for copy, paste, and uploads",
      "Explicit support for GenAI workflows",
      "Protects against paraphrasing, translation, and summarization",
    ],
    status: "Scanning",
    statusColor: "text-amber-400",
    dotColor: "bg-amber-400",
  },
  {
    icon: Zap,
    title: "Zero-trust, minus the machinery",
    body: "Use short-lived, mTLS connections for private apps while extending least-privilege policy into the render process itself.",
    points: [
      "Simpler rollout than legacy ZTNA",
      "Stronger control where it counts",
      "No complex infrastructure to manage",
    ],
    status: "Verified",
    statusColor: "text-cyan-400",
    dotColor: "bg-cyan-400",
  },
]

const solutions = [
  {
    key: "vdi-reduction",
    title: "VDI Reduction",
    main: "Centralize control without shipping pixels.",
    points: [
      "Policies live in the cloud",
      "Apps run at device speed",
      "Costs fall dramatically",
    ],
    conclusion: "Teams keep the familiar browser UX and gain precise last-mile, LLM-aware DLP.",
    icon: Laptop,
  },
  {
    key: "byod-workforce",
    title: "BYOD Workforce",
    main: "Let personal phones stay personal while corporate data stays governed.",
    points: [
      "Contextual controls stop risky copy/paste",
      "Posture checks flip risky devices to read-only",
      "No creepy MDM required",
    ],
    icon: Smartphone,
  },
  {
    key: "3rd-party-onboarding",
    title: "3rd-Party Onboarding",
    main: "Contractors install a browser—not a VM image—and receive least-privilege access in minutes.",
    points: [
      "Granular DLP prevents leakage",
      "Click-level events stream to your security stack",
      "Painless audits and compliance",
    ],
    icon: UserCheck,
  },
  {
    key: "saas-web-apps",
    title: "SaaS & Web Apps",
    main: "SaaS gave you \"anywhere\"; Wootzapp Agentic Browser gives you control back:",
    points: [
      "Built-in agentic DLP for SAAS",
      "Posture-aware access controls",
      "Layer MFA/SSO onto any web app",
    ],
    conclusion: "Browser-level controls keep data where it belongs.",
    icon: LayoutGrid,
  },
  {
    key: "privileged-access",
    title: "Privileged Access",
    main: "Inject security controls directly into sensitive workflows — without touching source code.",
    points: [
      "MFA prompts at the right moment",
      "Four-eyes approvals for critical actions",
      "UI masking for sensitive data",
    ],
    icon: Lock,
  },
  {
    key: "zero-trust",
    title: "Zero Trust",
    main: "Make the browser the policy-enforcement point.",
    points: [
      "Authenticate each request",
      "Verify device health continuously",
      "Apply data rules in the render process",
    ],
    icon: Shield,
  },
  {
    key: "safe-browsing",
    title: "Safe Browsing",
    main: "Block threats before they land, without dragging down performance.",
    points: [
      "Phishing protection",
      "Malware blocking",
      "Drive-by exploit prevention",
    ],
    conclusion: "Users feel the web, not the walls.",
    icon: Eye,
  },
  {
    key: "enable-genai",
    title: "Enable GenAI at Work",
    main: 'Say "yes" to AI tools — safely.',
    points: [
      "Enterprise DLP for GenAI guards prompts",
      "Teams can innovate without accidental leaks",
      "Clear banners show what's protected",
    ],
    icon: Bot,
  },
]

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
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 font-sans"
    >
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 bg-[#0B0326]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
           <Particles
             className="absolute inset-0 animate-fade-in"
             quantity={150}
             staticity={30}
             ease={50}
             color="213, 4, 217" // #D504D9
           />
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
        </div>

        <div className={cn(containerClasses, "relative z-10 text-center")}>
          <div className="mb-10 flex flex-col items-center animate-fade-in-up">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 p-4 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
               <span className="font-mono font-black text-3xl md:text-4xl text-primary tracking-tight drop-shadow-[0_0_15px_rgba(213,4,217,0.5)]">
                 Wootzapp ASB
               </span>
               <span className="hidden md:block h-8 w-px bg-white/20"></span>
               <span className="font-serif text-xl md:text-2xl text-white/90 tracking-wide">
                 Agentic Security Browser
               </span>
            </div>
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-bold font-serif tracking-tight sm:text-7xl mb-8 drop-shadow-2xl">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 pb-2">
              Unify Security &
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Productivity
            </span>
          </h1>

          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
            Wootzapp provides <strong>GenAI-native DLP</strong>, <strong>agentic controls</strong>, and <strong>zero-trust access</strong> in one seamless browsing experience.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-primary text-white font-bold text-lg px-8 py-6 rounded-full shadow-[0_0_30px_-5px_rgba(213,4,217,0.6)] hover:shadow-[0_0_50px_-10px_rgba(213,4,217,0.8)] hover:bg-primary/90 transition-all duration-300"
            >
              <a href="https://calendar.app.google/UCdRbHAHJYTwUEgF6" target="_blank">
                Schedule a Demo
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-white/20 px-8 py-6 rounded-full backdrop-blur-sm transition-all duration-300"
            >
              <a href="#features">
                Explore Features
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars (Why Wootzapp) - Slightly Different BG Shade */}
      <section id="features" className="relative z-10 -mt-20 pb-20">
        <div className={containerClasses}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0B0326]/90 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">Deploy in Minutes</h3>
              <p className="text-muted-foreground leading-relaxed">Install one app, and cloud-native policies handle the rest. No complex infrastructure or backhauling required.</p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0B0326]/90 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">GenAI-Native DLP</h3>
              <p className="text-muted-foreground leading-relaxed">Our browser understands context and nuance, stopping data leaks in GenAI tools that pattern-based DLP would miss.</p>
            </div>

            <div className="group relative p-8 rounded-2xl border border-white/5 bg-[#0B0326]/90 backdrop-blur-xl shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="h-12 w-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-secondary group-hover:scale-110 transition-transform duration-300">
                <Cloud className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold font-serif text-white mb-3">Full Visibility</h3>
              <p className="text-muted-foreground leading-relaxed">Get high-fidelity, click-level events streamed to your SIEM for complete last-mile visibility without compromising user privacy.</p>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />

      {/* How It Works - Darker Contrast BG */}
      <section className="py-24 relative overflow-hidden bg-[#08021C]">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#260259]/20 via-transparent to-transparent" />
         <div className={containerClasses + " relative z-10"}>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                How it works (at a glance)
              </h2>
              <p className="text-muted-foreground text-lg">
                A browser-first control plane that understands language, evaluates posture before pixels, and streams high-fidelity telemetry.
              </p>
            </div>

            <div className="relative mx-auto max-w-4xl">
               {/* Timeline Center Line */}
               <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 md:-translate-x-1/2"></div>

               <div className="space-y-12">
                  {howItWorksRoadmap.map((step, index) => (
                    <div key={index} className={cn(
                      "relative flex flex-col md:flex-row gap-8 items-start",
                      index % 2 === 0 ? "md:flex-row-reverse" : ""
                    )}>
                      {/* Icon/Number Node */}
                      <div className="absolute left-4 md:left-1/2 -translate-x-[17px] md:-translate-x-1/2 w-9 h-9 rounded-full bg-[#08021C] border-4 border-primary z-10 flex items-center justify-center shadow-[0_0_15px_theme(colors.primary)]">
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      </div>

                      {/* Content Card */}
                      <div className="ml-12 md:ml-0 w-full md:w-1/2 md:px-8">
                        <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group">
                          <div className={cn("mb-4 inline-block p-2 rounded-lg bg-white/5", step.color)}>
                             <step.icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold font-serif text-white mb-2">{step.title}</h3>
                          <p className="text-sm font-medium text-primary mb-3">{step.highlight}</p>
                          <ul className="space-y-2">
                            {step.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="h-4 w-4 text-white/50 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {/* Empty Spacer for opposite side */}
                      <div className="hidden md:block w-1/2"></div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Core Features - Gradient BG */}
      <section className="py-24 relative bg-gradient-to-b from-[#08021C] to-[#150530]">
        <div className={containerClasses}>
           <div className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
                 Agentic security — built into the browser
              </h2>
              <p className="text-lg text-muted-foreground">
                 Treat the browser as your agent runtime. The Guardrails Module injects inline intelligence while the Armor Layer keeps data locked down.
              </p>
           </div>

           <div className="space-y-24">
              {coreFeatures.map((feature, index) => (
                 <div key={index} className="grid md:grid-cols-2 gap-12 items-center group">
                    <div className={cn("space-y-6", index % 2 !== 0 ? "md:order-2" : "")}>
                       <div className="inline-flex items-center justify-center h-14 w-14 rounded-2xl bg-secondary/20 text-primary">
                          <feature.icon className="h-7 w-7" />
                       </div>
                       <h3 className="text-3xl font-bold font-serif text-white">{feature.title}</h3>
                       <p className="text-lg text-muted-foreground leading-relaxed">
                          {feature.body}
                       </p>
                       <ul className="space-y-4 pt-2">
                          {feature.points.map((point, pIdx) => (
                             <li key={pIdx} className="flex items-start gap-3 text-white/80">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0 shadow-[0_0_8px_theme(colors.primary)]" />
                                <span>{point}</span>
                             </li>
                          ))}
                       </ul>
                    </div>
                    
                    {/* Visual Side */}
                    <div className={cn(
                      "relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-[#130630] shadow-2xl group-hover:shadow-primary/20 transition-shadow duration-500",
                      index % 2 !== 0 ? "md:order-1" : ""
                    )}>
                       <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/20" />
                       <Particles
                          className="absolute inset-0 opacity-30"
                          quantity={40}
                          staticity={50}
                          color="147, 3, 166"
                       />
                       
                       <div className="absolute inset-0 flex items-center justify-center p-8">
                          {/* Feature 1: Agentic Control (Chat Interface) */}
                          {index === 0 && (
                             <div className="relative w-full max-w-sm bg-[#0B0326]/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                   <div className="flex gap-1.5">
                                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                   </div>
                                   <span className="text-xs text-muted-foreground ml-2 font-mono">agent_runtime.exe</span>
                                </div>
                                <div className="p-4 space-y-4">
                                   {/* User Message */}
                                   <div className="flex gap-3">
                                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                         <User className="w-4 h-4 text-white/70" />
                                      </div>
                                      <div className="space-y-1">
                                         <div className="bg-white/10 rounded-lg rounded-tl-none px-3 py-2 text-sm text-white/90">
                                            Analyze this customer DB dump...
                                         </div>
                                      </div>
                                   </div>
                                   
                                   {/* Scanning Indicator */}
                                   <div className="flex items-center gap-2 text-xs text-primary animate-pulse pl-11">
                                      <Bot className="w-3 h-3" />
                                      <span>Analyzing intent...</span>
                                   </div>

                                   {/* Blocked Response */}
                                   <div className="relative overflow-hidden rounded-lg border border-red-500/30 bg-red-500/10 p-3 ml-11">
                                      <div className="flex items-start gap-3">
                                         <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                                         <div className="space-y-1">
                                            <p className="text-sm font-bold text-red-400">Action Blocked</p>
                                            <p className="text-xs text-red-300/80 leading-relaxed">
                                               Sensitive PII detected in prompt. Supervisor approval required.
                                            </p>
                                         </div>
                                      </div>
                                      {/* Animated Scan Line */}
                                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500/50 animate-pulse" />
                                   </div>
                                   
                                   <div className="flex justify-end gap-2 pt-2">
                                      <div className="px-3 py-1.5 rounded bg-primary/20 text-primary text-xs font-medium border border-primary/30 hover:bg-primary/30 cursor-pointer transition-colors">
                                         Request Approval
                                      </div>
                                   </div>
                                </div>
                             </div>
                          )}

                          {/* Feature 2: Data Guard (Document Scanning) */}
                          {index === 1 && (
                             <div className="relative w-full max-w-sm">
                                {/* Floating 'Files' */}
                                <div className="absolute -right-4 -top-4 w-24 h-32 bg-white/5 border border-white/10 rounded-lg transform rotate-6 z-0" />
                                <div className="absolute -left-2 bottom-4 w-24 h-32 bg-white/5 border border-white/10 rounded-lg transform -rotate-3 z-0" />
                                
                                {/* Main Document */}
                                <div className="relative z-10 bg-[#0B0326]/95 backdrop-blur-xl border border-white/10 rounded-xl p-6 shadow-2xl">
                                   <div className="flex items-center justify-between mb-6">
                                      <div className="flex items-center gap-2">
                                         <div className="p-1.5 rounded bg-primary/20 text-primary">
                                            <FileText className="w-4 h-4" />
                                         </div>
                                         <span className="text-sm font-medium text-white/90">confidential_report.pdf</span>
                                      </div>
                                      <div className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase border border-amber-500/30">
                                         Scanning
                                      </div>
                                   </div>
                                   
                                   <div className="space-y-3 relative">
                                      {/* Animated Scanner Line */}
                                      <div className="absolute left-0 right-0 h-0.5 bg-amber-400/50 shadow-[0_0_10px_theme(colors.amber.400)] z-20 animate-[scan_3s_ease-in-out_infinite]" style={{ top: '40%' }} />
                                      
                                      {/* Text Lines */}
                                      <div className="h-2 bg-white/20 rounded w-full" />
                                      <div className="h-2 bg-white/20 rounded w-11/12" />
                                      <div className="h-2 bg-white/20 rounded w-full" />
                                      
                                      {/* Redacted Section */}
                                      <div className="flex gap-2 py-1">
                                         <div className="h-2 bg-white/20 rounded w-1/4" />
                                         <div className="h-2 bg-amber-500/40 rounded w-1/3 animate-pulse" /> {/* Detected PII */}
                                         <div className="h-2 bg-white/20 rounded w-1/4" />
                                      </div>
                                      
                                      <div className="h-2 bg-white/20 rounded w-5/6" />
                                      <div className="h-2 bg-white/20 rounded w-full" />
                                   </div>

                                   {/* Detection Popup */}
                                   <div className="absolute bottom-4 right-4 bg-[#130630] border border-amber-500/30 rounded-lg p-3 shadow-xl animate-fade-in-up">
                                      <div className="flex items-center gap-2">
                                         <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                                         <span className="text-xs font-medium text-white/80">SSN Detected</span>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          )}

                          {/* Feature 3: Zero Trust (Network/Device) */}
                          {index === 2 && (
                             <div className="relative w-full h-full flex items-center justify-center">
                                {/* Center Node (Browser) */}
                                <div className="relative z-20 flex flex-col items-center">
                                   <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px] shadow-[0_0_30px_theme(colors.primary)]">
                                      <div className="w-full h-full rounded-2xl bg-[#0B0326] flex items-center justify-center relative overflow-hidden">
                                         <div className="absolute inset-0 bg-primary/10 animate-pulse" />
                                         <Shield className="w-10 h-10 text-white relative z-10" />
                                      </div>
                                   </div>
                                   <div className="mt-4 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                                      <CheckCircle2 className="w-3 h-3" />
                                      Device Verified
                                   </div>
                                </div>

                                {/* Connected Nodes */}
                                <div className="absolute inset-0">
                                   {/* Node 1 */}
                                   <div className="absolute top-1/4 left-10 flex flex-col items-center animate-fade-in opacity-80">
                                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                         <Server className="w-6 h-6 text-white/50" />
                                      </div>
                                      <div className="h-[2px] w-24 bg-emerald-500/30 absolute left-12 top-6 rotate-[25deg] origin-left">
                                         <div className="absolute right-0 -top-[3px] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_5px_theme(colors.emerald.400)]" />
                                      </div>
                                   </div>

                                   {/* Node 2 */}
                                   <div className="absolute bottom-1/3 right-12 flex flex-col items-center animate-fade-in opacity-80">
                                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2">
                                         <Globe className="w-6 h-6 text-white/50" />
                                      </div>
                                      <div className="h-[2px] w-24 bg-emerald-500/30 absolute right-12 top-6 rotate-[155deg] origin-right">
                                          <div className="absolute left-0 -top-[3px] w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_5px_theme(colors.emerald.400)]" />
                                      </div>
                                   </div>
                                   
                                   {/* Node 3 */}
                                   <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-fade-in opacity-60">
                                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                         <Lock className="w-5 h-5 text-white/30" />
                                      </div>
                                      <div className="h-[2px] w-16 bg-white/10 absolute bottom-10 left-1/2 -translate-x-1/2 rotate-90 origin-bottom" />
                                   </div>
                                </div>
                             </div>
                          )}
                       </div>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* ZTNA Steps - Dark BG */}
      <section className="py-20 bg-[#0B0326] border-y border-white/5">
        <div className={containerClasses}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-serif text-white mb-6">
                Browser-Native Zero Trust
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Move beyond network-level controls. Wootzapp makes the browser the core of your zero-trust architecture, enforcing access policies at the last possible moment—right before a page renders.
              </p>
              <Button variant="outline" className="text-white border-white/10 hover:bg-white/10">
                Technical Architecture <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-6">
              {ztnaSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-[0_0_10px_theme(colors.primary)]">
                    {idx + 1}
                  </div>
                  <p className="pt-1 text-muted-foreground leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Solutions Showcase - Lighter Card-Like BG */}
      <section className="py-24 bg-[#150530]">
        <div className={containerClasses}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-6">
              Solutions for Every Use Case
            </h2>
            <p className="text-lg text-muted-foreground">
              From securing contractors to enabling BYOD, the Wootzapp browser adapts to your most critical security challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((sol) => (
              <div
                key={sol.key}
                className="flex flex-col p-6 rounded-xl bg-[#0B0326] border border-white/5 hover:border-primary/40 hover:bg-[#0B0326]/80 transition-all duration-300 group h-full shadow-lg"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-white/5 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300 w-fit">
                  <sol.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-serif text-white mb-2">{sol.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{sol.main}</p>
                
                <div className="space-y-2 mt-auto pt-4 border-t border-white/5">
                  {sol.points.map((point, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-white/70">
                      <div className="mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
                
                {sol.conclusion && (
                   <p className="mt-4 text-xs font-medium text-white/50 italic border-t border-white/5 pt-2">
                      &quot;{sol.conclusion}&quot;
                   </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source CLI Showcase */}
      <OpenSourceShowcase />

      {/* Final CTA - Gradient BG */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-t from-[#08021C] to-[#150530]">
        <div className={containerClasses + " relative z-10"}>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-[#0B0326]/80 backdrop-blur-xl p-12 text-center md:p-16 shadow-2xl">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent"></div>
            
            <h2 className="text-3xl font-bold font-serif tracking-tighter text-white sm:text-4xl md:text-5xl mb-6">
              Ready to Simplify Your Security?
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground mb-10">
              Fewer moving parts, faster users, and guardrails that actually understand language. See how the Wootzapp Enterprise Browser can transform your security posture.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 font-bold text-lg px-10 py-6 rounded-full shadow-lg transition-all duration-300"
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