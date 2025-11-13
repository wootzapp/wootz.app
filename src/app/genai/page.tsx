
"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Shield, CheckCircle, TrendingUp, Users, DollarSign, Lock, Eye } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

export default function GenAIPage() {
  const [activeRisk, setActiveRisk] = useState(0)

  const risks = [
    {
      title: "Data Leakage Crisis",
      stat: "63% of breaches",
      description:
        "Samsung employees leaked confidential source code to ChatGPT for debugging, exposing trade secrets and creating long-term dataset contamination.",
      impact: "$4.45M average breach cost",
    },
    {
      title: "Compliance Violations",
      stat: "78% non-compliance",
      description:
        "Healthcare and financial organizations face massive fines when AI tools process regulated data without proper controls.",
      impact: "$1.5M HIPAA fines possible",
    },
    {
      title: "Productivity Paradox",
      stat: "14% productivity loss",
      description:
        "Organizations blocking AI entirely lose competitive advantage while competitors gain 14% productivity increases.",
      impact: "$350 per employee annually",
    },
    {
      title: "Shadow AI Usage",
      stat: "85% unauthorized use",
      description: "Employees use unsanctioned AI tools, creating ungoverned data flows and security blind spots.",
      impact: "Zero visibility or control",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Critical Enterprise Risk Alert
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6">GenAI in the Workplace</h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
              The Promise, The Peril, The Solution
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Generative AI offers unprecedented productivity gains, but uncontrolled usage creates catastrophic data
              security risks. Learn how enterprise browsers provide the governance framework to safely harness AI&apos;s
              transformative potential.
            </p>

          </div>
        </div>
      </section>

      <OpenSourceShowcase />

            {/* The GenAI Danger Zone */}      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">The GenAI Danger Zone</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real incidents, measurable risks, and the hidden costs of uncontrolled AI adoption
            </p>
          </div>

          {/* Risk Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {risks.map((risk, index) => (
              <button
                key={index}
                onClick={() => setActiveRisk(index)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeRisk === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-muted-foreground hover:bg-accent"
                }`}>
                {risk.title}
              </button>
            ))}
          </div>

          {/* Active Risk Display */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-border bg-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-4">
                      <AlertTriangle className="w-8 h-8 text-destructive mr-3" />
                      <h3 className="text-2xl font-semibold text-foreground">{risks[activeRisk].title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{risks[activeRisk].description}</p>
                    <div className="bg-secondary rounded-lg p-4 border border-border">
                      <div className="text-sm text-muted-foreground mb-1">Financial Impact</div>
                      <div className="text-lg font-semibold text-destructive">{risks[activeRisk].impact}</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-destructive mb-2">{risks[activeRisk].stat}</div>
                    <div className="text-muted-foreground">of organizations affected</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">300%</div>
                <div className="text-sm text-muted-foreground">Increase in AI-related data breaches since 2023</div>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">92%</div>
                <div className="text-sm text-muted-foreground">Of Fortune 500 companies use unsanctioned AI tools</div>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <DollarSign className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">$5.9M</div>
                <div className="text-sm text-muted-foreground">Average cost of AI-enabled data breach</div>
              </CardContent>
            </Card>

            <Card className="text-center border-border bg-card">
              <CardContent className="p-6">
                <Eye className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-xl md:text-2xl font-bold text-foreground mb-1">0%</div>
                <div className="text-sm text-muted-foreground">Visibility into employee AI usage without controls</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Real-World Case Studies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Real-World AI Disasters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These aren&apos;t hypothetical scenarios&mdash;they&apos;re documented incidents that cost organizations millions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Samsung Source Code Leak</h3>
                    <div className="text-sm text-muted-foreground/80 mb-3">Reported by Tom&apos;s Hardware, 2023</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Samsung employees submitted highly sensitive semiconductor source code to ChatGPT for debugging
                  assistance. The confidential code became part of OpenAI&apos;s training dataset, creating permanent
                  intellectual property exposure.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm font-medium text-destructive mb-1">Impact</div>
                  <div className="text-sm text-muted-foreground">
                    Trade secrets permanently compromised, competitive advantage lost
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">AI-Generated Legal Disaster</h3>
                    <div className="text-sm text-muted-foreground/80 mb-3">BBC News, 2023</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A New York lawyer submitted court filings containing AI-generated case citations that didn&apos;t exist.
                  The fabricated legal precedents led to sanctions and professional embarrassment.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm font-medium text-destructive mb-1">Impact</div>
                  <div className="text-sm text-muted-foreground">
                    Professional sanctions, client trust destroyed, legal malpractice exposure
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Healthcare Data Exposure</h3>
                    <div className="text-sm text-muted-foreground/80 mb-3">Industry Analysis, 2024</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Healthcare workers using AI for patient care documentation inadvertently shared PHI with external AI
                  services, violating HIPAA and exposing sensitive medical records.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm font-medium text-destructive mb-1">Impact</div>
                  <div className="text-sm text-muted-foreground">
                    $1.5M+ HIPAA fines, patient privacy violations, regulatory scrutiny
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-8">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4">
                    <AlertTriangle className="w-6 h-6 text-destructive" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Financial Services Breach</h3>
                    <div className="text-sm text-muted-foreground/80 mb-3">Cybersecurity Report, 2024</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Investment firm employees used AI tools to analyze client portfolios, inadvertently sharing
                  confidential financial data and trading strategies with external AI providers.
                </p>
                <div className="bg-secondary rounded-lg p-4">
                  <div className="text-sm font-medium text-destructive mb-1">Impact</div>
                  <div className="text-sm text-muted-foreground">$5.9M breach cost, regulatory fines, client trust erosion</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* The Solution: Enterprise Browsers */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-secondary text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              The Solution
            </div>

            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Enterprise Browsers: The AI Governance Platform
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              According to the{" "}
              <strong>TagCyber Enterprise Browser Security Requirements to Counter AI-Enabled Risks</strong> report,
              enterprise browsers provide the essential governance framework for safe AI adoption.
            </p>
          </div>

          {/* Solution Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">AI Input Protection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Real-time scanning prevents sensitive data like SSNs, API keys, and confidential documents from being
                  shared with AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Complete AI Visibility</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Track all AI tool usage, audit user prompts, and identify early adopters for controlled rollouts.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Smart AI Redirection</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Automatically redirect users from unsafe AI tools to approved alternatives, with contextual education.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Application Boundaries</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Keep sensitive data within approved applications while preventing copy/paste to unauthorized AI tools.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">AI Output Scanning</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scan AI-generated code and content for security flaws before allowing copy/paste into production
                  systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Contextual User Education</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  In-browser messaging educates users about AI policies at the moment they need guidance most.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Federal AI Compliance */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">Federal AI Compliance Made Simple</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              New OMB Memoranda M-25-21 and M-25-22 create urgent compliance demands. Enterprise browsers provide the
              practical path to safe AI adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">M-25-21: Accelerating AI Innovation</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Promote Innovation</div>
                    <div className="text-sm text-muted-foreground">
                      Enable American-developed AI solutions with built-in governance
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Establish AI Leadership</div>
                    <div className="text-sm text-muted-foreground">
                      Support Chief AI Officers with comprehensive visibility and control
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Enhance Governance</div>
                    <div className="text-sm text-muted-foreground">Automated oversight with keystroke-level audit trails</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">M-25-22: Efficient AI Acquisition</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Competitive Marketplace</div>
                    <div className="text-sm text-muted-foreground">
                      Access diverse AI vendors through secure browser platform
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Performance Tracking</div>
                    <div className="text-sm text-muted-foreground">Real-time usage analytics and ROI measurement</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Data Protection</div>
                    <div className="text-sm text-muted-foreground">
                      Ensure proper use of government data with granular controls
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">The Business Case for Controlled AI</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Organizations using enterprise browsers for AI governance see measurable improvements in both security and
              productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">14%</div>
                <div className="text-sm text-muted-foreground mb-3">Productivity increase with governed AI usage</div>
                <div className="text-xs text-muted-foreground/80">Source: NBER Research Paper</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground mb-3">Fewer AI-related security risks</div>
                <div className="text-xs text-muted-foreground/80">With proper browser controls</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$350</div>
                <div className="text-sm text-muted-foreground mb-3">Annual savings per employee with safe AI adoption</div>
                <div className="text-xs text-muted-foreground/80">Productivity gains minus risk costs</div>
              </CardContent>
            </Card>

            <Card className="text-center bg-card border-border">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground mb-3">Visibility into AI tool usage and data flows</div>
                <div className="text-xs text-muted-foreground/80">Complete audit trail and governance</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-purple-600 text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-primary-foreground mb-6">
              Don&apos;t Let AI Risks Derail Your Digital Transformation
            </h2>

            <p className="text-xl mb-8 opacity-90 text-primary-foreground">
              Join forward-thinking organizations using Wootzapp Enterprise Browser to safely harness AI&apos;s transformative
              potential while maintaining complete data security and regulatory compliance.
            </p>

            <div className="flex justify-center">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-3 text-lg">
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule AI Risk Assessment
                </a>
              </Button>
            </div>

            <div className="mt-12 text-center">
              <div className="text-sm opacity-75 text-primary-foreground mb-2">Built for enterprise security</div>
              <div className="flex justify-center items-center space-x-8 opacity-60 text-primary-foreground">
                <div className="text-sm">Enterprise-grade</div>
                <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                <div className="text-sm">Zero-trust ready</div>
                <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                <div className="text-sm">Healthcare Systems</div>
                <div className="w-1 h-1 bg-primary-foreground rounded-full"></div>
                <div className="text-sm">Financial Services</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
