"use client"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Shield, Smartphone, Users, Lock, ExternalLink } from "lucide-react"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DataLabelingPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section - Comply or Be Crushed */}
      <section id="overview" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center bg-secondary text-primary px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Regulatory Enforcement Accelerating
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-4 md:mb-6 leading-tight">
              Comply or Be <span className="text-primary">Crushed</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
              The <strong>mobile enterprise browser</strong> that makes cross-border data labeling provably compliant
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-8 md:mb-12">
              <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm border-l-4 border-primary">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">€1.2B</div>
                <p className="text-xs md:text-sm text-muted-foreground">Meta&apos;s GDPR fine for unlawful EU→US transfers</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm border-l-4 border-primary">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">€15M</div>
                <p className="text-xs md:text-sm text-muted-foreground">Italy fined OpenAI over ChatGPT data practices</p>
              </div>
              <div className="bg-card rounded-lg p-4 md:p-6 shadow-sm border-l-4 border-primary sm:col-span-2 md:col-span-1">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1">Model Deletion</div>
                <p className="text-xs md:text-sm text-muted-foreground">FTC can force algorithm destruction for data misuse</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4 sm:px-0">
              <a
                href="#capabilities"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 w-full sm:w-auto text-sm md:text-base rounded-lg font-medium transition-colors text-center"
              >
                Request Compliance Demo →
              </a>
              <a
                href="#proof"
                className="px-6 md:px-8 py-3 border border-border bg-card w-full sm:w-auto text-sm md:text-base rounded-lg font-medium transition-colors text-center hover:bg-accent"
              >
                See the Evidence
              </a>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-4 md:p-6 max-w-4xl mx-auto">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                <strong>Bottom line:</strong> If your labeling workforce spans borders (EU ↔ US/ROW), you must prove{" "}
                <strong>where data lived, who touched it, and what left the screen</strong>—or you&apos;re one adverse order
                away from halted pipelines, model takedowns, and nine-figure liability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Minefield */}
      <section id="regulatory" className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
              Why labeling is a regulatory minefield
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 md:mb-12">(and what auditors will ask)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                        Was EU personal data exported lawfully?
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        GDPR restricts cross-border transfers; auditors will expect SCCs/DPF or equivalent
                        safeguards—and evidence.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Users className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                        Who accessed which records? When? From where?
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        The AI Act/GDPR accountability regime elevates traceability requirements for high-risk and GPAI
                        contexts.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Shield className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                        Could annotators exfiltrate data?
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        Real-world cases show internal misuse is plausible (e.g., Tesla staff sharing customer camera
                        footage). Controls must block last-mile leakage.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* VDI vs Enterprise Browser - Technical Comparison */}
      <section id="vdi-vs-browser" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              VDI vs. Enterprise Browser — what changes, technically?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* VDI/DaaS */}
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-destructive rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold text-foreground">VDI/DaaS</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Secures a <em>remote desktop</em> you stream
                      </p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">High infra & license cost, GPU/bandwidth hungry</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Mediocre UX on low-end Android devices</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-destructive mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">Slow to surge to 1,000+ seats for labeling spikes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Browser */}
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-primary rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold text-foreground">Enterprise Browser</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Secures the <em>work surface itself</em> (Chromium-based, policy-enforced)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Deploy on managed or <strong>unmanaged/BYOD</strong> devices
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Apply <strong>per-action DLP</strong> (block copy/paste, downloads, uploads, printing)
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">
                        Get <strong>complete activity telemetry</strong> and proven VDI reduction
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2 text-lg">TL;DR</h3>
              <p className="text-muted-foreground text-base">
                VDI secures <em>desktops</em>.{" "}
                <strong>
                  Enterprise browsers secure <em>data</em>
                </strong>{" "}
                at the last mile—exactly where labeling leaks happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First EB Section */}
      <section id="mobile-first" className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
              Why <strong>mobile-first Enterprise Browser</strong> matters for labeling vendors
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 md:mb-12"></p>

            <div className="bg-secondary border-l-4 border-primary p-6 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                Your annotators don&apos;t sit in fiber-connected offices—they&apos;re global, often on{" "}
                <strong>low-cost Android</strong>. Desktop-centric controls don&apos;t catch:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Smartphone className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2 text-center">App-hopping exfiltration</h3>
                  <p className="text-sm text-muted-foreground text-center">Switch to gallery/chat; snap a screen</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2 text-center">BYOD realities</h3>
                  <p className="text-sm text-muted-foreground text-center">Shared devices, unmanaged profiles</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <AlertCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold text-foreground mb-2 text-center">Burst hiring</h3>
                  <p className="text-sm text-muted-foreground text-center">Weeks to image laptops or stand up VDI</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <p className="text-muted-foreground leading-relaxed">
                A mobile Enterprise Browser makes the browser the <strong>control plane</strong> on the worker&apos;s device:{" "}
                <strong>
                  no screenshots, no clipboard, no unapproved uploads, policy-pinned domains, per-session identity, and
                  immutable logs
                </strong>
                —even on BYOD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile Enterprise Browser Solution */}
      <section id="capabilities" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              What our <strong>Mobile Enterprise Browser</strong> enforces
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">(out-of-the-box)</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Cross-border policy gates</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Route annotators only to <strong>geo-pinned</strong> labeling endpoints (EU data stays in EU VPCs);
                    block sessions that violate residency policy.
                  </p>
                  <div className="flex items-center text-xs text-primary">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aligns with GDPR transfer constraints
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Lock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Hard DLP at the edge</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Deny <strong>copy/paste, download, print, file-upload, and screen capture</strong> on sensitive
                    routes; watermark pages; restrict external SaaS.
                  </p>
                  <div className="flex items-center text-xs text-primary">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Standard EB controls
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Per-action audit & forensics</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Every URL, record view, attempted exfil, and policy decision is logged for{" "}
                    <strong>GRC evidence</strong>
                    and incident response.
                  </p>
                  <div className="flex items-center text-xs text-primary">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Critical if regulators ask to prove lawful processing
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <Smartphone className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-semibold text-foreground mb-3">Contractor speed without VDI</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Install → authenticate → <strong>label</strong>. Customers report{" "}
                    <strong>up to 80% lower TCO</strong>
                    vs VDI and faster onboarding at scale.
                  </p>
                  <div className="flex items-center text-xs text-primary">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Zero-trust alignment
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Adjacent Proof Section */}
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <h3 className="font-semibold text-foreground mb-4 text-center text-lg">
                  Adjacent proof: in-browser AI for frontline work
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  Peak Support runs an <strong>in-browser Agent Assistant</strong> inside its enterprise browser to
                  check responses and quality—with <strong>zero client engineering</strong>. Labeling can mirror this:
                  instruction checks, QC nudges, taxonomy reminders—all <em>inside the secure browser</em>, no new
                  leaks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* History of Data Hurdles */}
      <section id="proof" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">History of Data Hurdles</h2>

            {/* Scale AI Data Breach */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="w-6 h-6 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">Scale AI Data Breach</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        In 2021, Scale AI disclosed that <strong>contractor credentials were compromised</strong>,
                        potentially exposing client training data. The incident highlighted how third-party annotation
                        workflows create attack vectors that traditional security models don&apos;t address.
                      </p>
                      <div className="bg-secondary border border-border rounded p-3">
                        <p className="text-xs text-muted-foreground font-medium">
                          &ldquo;Even with NDAs and training, a single copy-paste or screenshot can exfiltrate client data
                          forever.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Sama&apos;s Extreme Measures */} 
              <Card className="border-border bg-card">
                <CardContent className="p-8">
                  <div className="flex items-start mb-4">
                    <Shield className="w-6 h-6 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-3 text-lg">Sama&apos;s Extreme Measures</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sama implemented <strong>physical device lockdown</strong> in some facilities—workers couldn&apos;t
                        bring personal phones, and workstations had disabled USB ports. This approach works for
                        centralized operations but breaks down with remote/BYOD workforces.
                      </p>
                      <div className="bg-secondary border border-border rounded p-3">
                        <p className="text-xs text-muted-foreground font-medium">
                          Physical controls don&apos;t scale to global, mobile-first annotation teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Regulatory Enforcement Examples */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <ExternalLink className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Europe: AI Act in force</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Staged obligations (prohibitions/AI literacy from Feb 2025; GPAI duties from Aug 2025; full in
                        2026+)
                      </p>
                      <div className="bg-secondary border border-border rounded p-2">
                        <p className="text-xs text-muted-foreground">
                          <strong>Article 53:</strong> Providers must maintain detailed logs of high-risk AI system
                          operations, including data processing activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <AlertCircle className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Record €1.2B fine</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        Meta hit with massive GDPR fine for unlawful transfers; authorities will halt flows
                      </p>
                      <div className="bg-secondary border border-border rounded p-2">
                        <p className="text-xs text-muted-foreground">
                          Irish DPC: &ldquo;Fundamental&rdquo; violations of transfer restrictions.{" "}
                          <strong>Suspension orders can shut down cross-border operations immediately.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <XCircle className="w-5 h-5 text-destructive mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Italy: €15M OpenAI fine</h3>
                      <p className="text-sm text-muted-foreground mb-3">Fined over GDPR breaches, after earlier intervention</p>
                      <div className="bg-secondary border border-border rounded p-2">
                        <p className="text-xs text-muted-foreground">
                          Garante cited <strong>lack of lawful basis</strong> for training data collection. Similar
                          scrutiny applies to annotation workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">US: Algorithm destruction</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        FTC has compelled algorithm destruction for data misuse (Everalbum precedent) and is signaling
                        broader AI scrutiny
                      </p>
                      <div className="bg-secondary border border-border rounded p-2">
                        <p className="text-xs text-muted-foreground">
                          <strong>Everalbum case:</strong> FTC ordered deletion of models trained on deceptively
                          collected photos. <strong>Training data violations = model destruction.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Insider Risk Examples */}
            <div className="bg-secondary border border-border rounded-lg p-6 mb-8">
              <h3 className="font-bold text-foreground mb-4 text-lg flex items-center">
                <Users className="w-5 h-5 text-destructive mr-2" />
                Insider Risk is Real
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Tesla Internal Sharing</h4>
                  <p className="text-xs text-muted-foreground">
                    Reuters documented Tesla employees sharing customer videos internally—&ldquo;training data&rdquo; can leak
                    without last-mile controls.{" "}
                    <strong>Memes made from customer footage circulated on internal chat.</strong>
                  </p>
                </div>
                <div className="bg-card rounded p-4 border border-border">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Annotation Workforce Reality</h4>
                  <p className="text-xs text-muted-foreground">
                    Global annotation teams often work from personal devices, shared computers, or internet cafes.{" "}
                    <strong>Traditional endpoint controls don&apos;t reach these environments.</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Enterprise Browser Proof Points */}
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Enterprise browsers reduce VDI</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Prisma Access Browser (ex-Talon) positions Enterprise Browser as a cost-effective VDI alternative
                      with managed/unmanaged coverage
                    </p>
                    <div className="bg-secondary border border-border rounded p-3">
                      <p className="text-xs text-muted-foreground">
                        <strong>Palo Alto Networks case study:</strong> 80% VDI cost reduction, 90% faster contractor
                        onboarding, zero-trust alignment for BYOD scenarios.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-card text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6">
              Replace fear with proof—on mobile
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Your clients will soon <strong>demand evidence</strong>, not promises. A desktop-era stack can&apos;t prove
              mobile labeling is safe.
            </p>

            <div className="bg-secondary rounded-lg p-6 md:p-8 mb-6 md:mb-8">
              <p className="text-base md:text-lg mb-3 md:mb-4 text-muted-foreground">
                Our <strong>mobile Enterprise Browser</strong> gives you{" "}
                <strong>residency controls, hard DLP, and forensic traceability</strong>—so you can ship labels across
                borders <strong>without shipping risk</strong>.
              </p>
            </div>

            <div className="flex justify-center">
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-3 text-base md:text-lg rounded-lg font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Demo →
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}