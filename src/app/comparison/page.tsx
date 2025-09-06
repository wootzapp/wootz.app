"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, TrendingUp, Shield, Zap, DollarSign } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ComparisonPage() {

  const comparisonData = [
    {
      category: "Infrastructure & Setup",
      vpn: {
        text: "Complex gateway hardware, split tunneling configuration, ongoing maintenance",
        status: "bad",
        cost: "High upfront + recurring",
      },
      vdi: {
        text: "Server farms, virtualization layers, storage infrastructure, endless tuning",
        status: "bad",
        cost: "$2,000-4,000/user/year",
      },
      sase: {
        text: "Cloud-based but requires multiple vendor integrations and policy coordination",
        status: "warning",
        cost: "Medium complexity",
      },
      enterprise_browser: {
        text: "Simple app installation, cloud-managed policies, zero infrastructure",
        status: "good",
        cost: "Significantly less than VDI",
      },
    },
    {
      category: "User Experience",
      vpn: {
        text: "Connection delays, &apos;Is the tunnel up?&apos; frustrations, bandwidth bottlenecks",
        status: "bad",
        cost: "Productivity loss",
      },
      vdi: {
        text: "Pixel lag, session drops, poor mobile experience, latency issues",
        status: "bad",
        cost: "40% slower workflows",
      },
      sase: {
        text: "Better than VPN but still introduces latency and complexity",
        status: "warning",
        cost: "Moderate impact",
      },
      enterprise_browser: {
        text: "Native Chromium speed, works on any device, seamless experience",
        status: "good",
        cost: "80% faster login",
      },
    },
    {
      category: "Security & Control",
      vpn: {
        text: "Opens entire network, no application-level controls, limited visibility",
        status: "bad",
        cost: "High breach risk",
      },
      vdi: {
        text: "Protects data center but blind to local copy/paste, limited mobile security",
        status: "warning",
        cost: "$10.93M avg breach",
      },
      sase: {
        text: "Good network security but lacks last-mile browser controls",
        status: "warning",
        cost: "Partial protection",
      },
      enterprise_browser: {
        text: "Last-mile DLP, contextual controls, complete visibility, zero-trust by design",
        status: "good",
        cost: "99.9% data protection",
      },
    },
    {
      category: "Mobile & BYOD Support",
      vpn: {
        text: "Temperamental mobile clients, poor cellular performance, limited device support",
        status: "bad",
        cost: "Mobile workforce blocked",
      },
      vdi: {
        text: "Struggles on mobile, requires high bandwidth, poor touch interface",
        status: "bad",
        cost: "Not mobile-ready",
      },
      sase: {
        text: "Better mobile support but still requires multiple agents and configurations",
        status: "warning",
        cost: "Complex mobile setup",
      },
      enterprise_browser: {
        text: "Built for mobile-first, works on any device, perfect for BYOD",
        status: "good",
        cost: "85% BYOD adoption",
      },
    },
    {
      category: "Deployment & Management",
      vpn: {
        text: "Complex client deployment, certificate management, ongoing troubleshooting",
        status: "bad",
        cost: "High IT overhead",
      },
      vdi: {
        text: "Massive infrastructure deployment, specialized IT staff required",
        status: "bad",
        cost: "6-12 month rollout",
      },
      sase: {
        text: "Cloud deployment but requires integration with existing security stack",
        status: "warning",
        cost: "Medium complexity",
      },
      enterprise_browser: {
        text: "Minutes to deploy, single management console, no specialized training",
        status: "good",
        cost: "Deploy in days",
      },
    },
    {
      category: "Cost & ROI",
      vpn: {
        text: "Hardware costs, bandwidth fees, maintenance, limited scalability",
        status: "bad",
        cost: "$500-1,500/user/year",
      },
      vdi: {
        text: "Massive infrastructure investment, compute costs, licensing complexity",
        status: "bad",
        cost: "$2,000-4,000/user/year",
      },
      sase: {
        text: "Subscription model but requires multiple services and integrations",
        status: "warning",
        cost: "$800-2,000/user/year",
      },
      enterprise_browser: {
        text: "Simple per-user licensing, no infrastructure, immediate ROI",
        status: "good",
        cost: "$200-600/user/year",
      },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case "bad":
        return <XCircle className="w-5 h-5 text-red-500" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-500" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "good":
        return "bg-green-50 border-green-200"
      case "bad":
        return "bg-red-50 border-red-200"
      case "warning":
        return "bg-yellow-50 border-yellow-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const marketStats = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      stat: "73%",
      description: "of organizations plan to reduce VDI usage by 2026",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      stat: "60%",
      description: "of security breaches involve compromised remote access",
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-600" />,
      stat: "40%",
      description: "productivity loss from legacy remote access solutions",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-600" />,
      stat: "$2.4M",
      description: "average annual savings from VDI replacement",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Enterprise Browsers vs VPN/VDI/SASE
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              A comprehensive comparison of modern remote access solutions
            </p>
            <div className="flex justify-center">
              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-3">
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

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">The Remote Access Revolution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Organizations worldwide are rethinking their remote access strategies as traditional solutions show their
              age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.stat}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Detailed Feature Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See how enterprise browsers stack up against traditional remote access solutions across key dimensions
            </p>
          </div>

          <div className="space-y-8">
            {comparisonData.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">{category.category}</h3>

                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    {/* VPN */}
                    <div className={`p-6 rounded-xl border-2 ${getStatusColor(category.vpn.status)}`}>
                      <div className="flex items-center mb-4">
                        {getStatusIcon(category.vpn.status)}
                        <h4 className="font-semibold text-gray-900 ml-3">VPN</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{category.vpn.text}</p>
                      <div className="text-xs font-medium text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                        {category.vpn.cost}
                      </div>
                    </div>

                    {/* VDI */}
                    <div className={`p-6 rounded-xl border-2 ${getStatusColor(category.vdi.status)}`}>
                      <div className="flex items-center mb-4">
                        {getStatusIcon(category.vdi.status)}
                        <h4 className="font-semibold text-gray-900 ml-3">VDI</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{category.vdi.text}</p>
                      <div className="text-xs font-medium text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                        {category.vdi.cost}
                      </div>
                    </div>

                    {/* SASE */}
                    <div className={`p-6 rounded-xl border-2 ${getStatusColor(category.sase.status)}`}>
                      <div className="flex items-center mb-4">
                        {getStatusIcon(category.sase.status)}
                        <h4 className="font-semibold text-gray-900 ml-3">SASE</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{category.sase.text}</p>
                      <div className="text-xs font-medium text-gray-600 bg-white/50 px-3 py-1 rounded-full">
                        {category.sase.cost}
                      </div>
                    </div>

                    {/* Enterprise Browser */}
                    <div
                      className={`p-6 rounded-xl border-2 ${getStatusColor(category.enterprise_browser.status)} ring-2 ring-green-300`}
                    >
                      <div className="flex items-center mb-4">
                        {getStatusIcon(category.enterprise_browser.status)}
                        <h4 className="font-semibold text-gray-900 ml-3">Enterprise Browser</h4>
                      </div>
                      <p className="text-gray-700 text-sm mb-4 leading-relaxed">{category.enterprise_browser.text}</p>
                      <div className="text-xs font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                        {category.enterprise_browser.cost}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Why Enterprise Browsers Win</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built for the modern workplace, enterprise browsers solve problems that legacy solutions can&apos;t address
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Native Performance</h3>
                <p className="text-gray-600 leading-relaxed">
                  No virtualization overhead or network latency. Apps run at full speed with the familiar Chromium
                  experience users love.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Last-Mile Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Complete control over data handling with contextual DLP, watermarking, and granular access policies
                  that work anywhere.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dramatic Cost Savings</h3>
                <p className="text-gray-600 leading-relaxed">
                  Eliminate infrastructure costs, reduce IT overhead, and achieve significant cost savings compared to
                  traditional VDI deployments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Migration Path */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-gray-900 mb-4">Your Migration Path</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transitioning from legacy solutions to enterprise browsers is simpler than you think
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Assess Current State</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Evaluate your existing VPN/VDI infrastructure, identify pain points, and calculate current costs
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Pilot Deployment</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Start with a small group, configure policies, and demonstrate immediate value to stakeholders
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Scale & Optimize</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Roll out organization-wide, decommission legacy infrastructure, and realize full cost savings
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg">
                <span className="text-sm text-gray-600">
                  <span className="font-semibold text-gray-900">Average migration time:</span> 30-90 days
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light mb-6">Ready to Make the Switch?</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations that have already modernized their remote access with enterprise browsers.
              See the difference for yourself with a personalized demo.
            </p>
            <div className="flex justify-center">
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3">
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