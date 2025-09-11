"use client"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Cpu, Network, Database, Lock } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

export default function TechPage() {
  const technicalSpecs = {
    architecture: {
      title: "Browser Isolation Architecture",
      content: [
        {
          component: "Chromium Engine",
          version: "v120+",
          details: "Hardened Chromium with navigation layer integration for risky site blocking and enterprise security patches",
          specs: ["Navigation throttle implementation", "Site isolation enabled", "Custom CSP enforcement", "Domain validation at navigation layer", "Deep Chromium core integration"],
        },
        {
          component: "Zero Trust Gateway",
          version: "2.0",
          details: "Identity-aware proxy with continuous authentication",
          specs: ["mTLS certificate pinning", "JWT token validation", "Device attestation"],
        },
        {
          component: "Policy Engine",
          version: "3.1",
          details: "Real-time policy evaluation with SAML-driven delivery and Okta integration for secure enterprise authentication",
          specs: ["Sub-100ms policy decisions", "SAML attribute enforcement", "Okta Verify mTLS handshakes", "Cloudflare Access integration", "Per-user enforcement", "Group-based policies", "Device-specific controls"],
        },
        {
          component: "AI-Powered Automation",
          version: "ML-Enhanced",
          details: "AI agent with real-time DOM monitoring, Mojo IPC communication, and Blink renderer integration for content masking",
          specs: ["DOM mutation observation", "AI-driven pattern recognition", "Mojo IPC secure communication", "Blink WebSensitiveElementClient integration", "Multi-process architecture", "Renderer-level masking"],
        },
      ],
    },
    security: {
      title: "Security Controls & Compliance",
      content: [
        {
          component: "Data Loss Prevention",
          version: "Enterprise",
          details: "Browser-level DLP with Android FLAG_SECURE, WebContents/ClipboardHost integration, and system-level input interception",
          specs: ["Android FLAG_SECURE implementation", "WebContents clipboard control", "System-level input interception", "OS-level screenshot blocking", "Multi-layer copy/paste protection", "Renderer surface masking"],
        },
        {
          component: "Threat Protection",
          version: "Advanced",
          details: "Chromium Download Controller integration with malware detection and domain-based file transfer blocking",
          specs: ["Download Controller enforcement", "Domain-based blocking policies", "Pre-transfer file validation", "Malicious file detection", "Upload blocking at browser level", "JNI bridge security"],
        },
        {
          component: "Multi-Layer Security Architecture",
          version: "Enterprise",
          details: "Multi-process architecture with Chromium core integration, Android input pipeline interception, and synthetic keystroke injection",
          specs: ["Android input pipeline interception", "Synthetic keystroke generation", "Browser process isolation", "Renderer & Blink integration", "ContentSensitiveMaskingDriver", "SensitiveElementMaskAgent", "Secure Mojo IPC channels", "JNI bridge isolation"],
        },
        {
          component: "Compliance Framework",
          version: "Multi-standard",
          details: "Built-in compliance for major regulatory requirements",
          specs: ["SOC 2 Type II", "HIPAA", "PCI DSS", "GDPR", "FedRAMP Ready"],
        },
      ],
    },
    performance: {
      title: "Performance & Scalability",
      content: [
        {
          component: "Rendering Engine",
          version: "Optimized",
          details: "Optimized Chromium rendering with mobile-first architecture and low-latency policy enforcement",
          specs: ["<50ms policy evaluation", "Hardware-accelerated rendering", "Offline capability", "Progressive loading", "Mobile-First Design", "Efficient multi-process communication"],
        },
        {
          component: "Network Optimization",
          version: "Adaptive",
          details: "Intelligent bandwidth management and caching",
          specs: ["Compression algorithms", "Edge caching", "Adaptive bitrate", "Connection pooling"],
        },
        {
          component: "Resource Management",
          version: "Dynamic",
          details: "Efficient memory and CPU utilization",
          specs: ["Memory isolation", "CPU throttling", "Battery optimization", "Storage encryption"],
        },
      ],
    },
  }

  const [activeSpec, setActiveSpec] = useState<keyof typeof technicalSpecs>("architecture")

  const integrationAPIs = [
    {
      category: "Identity & Access",
      apis: [
        {
          name: "SAML 2.0",
          status: "Full Support",
          description: "Complete SAML implementation with metadata exchange",
        },
        { name: "OAuth 2.0/OIDC", status: "Full Support", description: "Standards-compliant OAuth with PKCE support" },
        { name: "LDAP/AD", status: "Full Support", description: "Direct integration with Active Directory and LDAP" },
        { name: "SCIM 2.0", status: "Full Support", description: "Automated user provisioning and deprovisioning" },
      ],
    },
    {
      category: "Security & Monitoring",
      apis: [
        {
          name: "SIEM Integration",
          status: "Full Support",
          description: "Real-time event streaming to major SIEM platforms",
        },
        {
          name: "DLP Connectors",
          status: "Full Support",
          description: "Integration with Symantec, Forcepoint, Microsoft Purview",
        },
        { name: "CASB Integration", status: "Full Support", description: "Cloud Access Security Broker compatibility" },
        { name: "Threat Intel", status: "Full Support", description: "Real-time threat intelligence feeds" },
      ],
    },
    {
      category: "Management & Deployment",
      apis: [
        {
          name: "MDM Integration",
          status: "Full Support",
          description: "Microsoft Intune, VMware Workspace ONE, MobileIron",
        },
        {
          name: "Configuration API",
          status: "Full Support",
          description: "Programmatic policy management and deployment",
        },
        { name: "Analytics API", status: "Full Support", description: "Usage analytics and performance metrics" },
        {
          name: "Audit API",
          status: "Full Support",
          description: "Comprehensive audit trail and compliance reporting",
        },
      ],
    },
  ]

  const deploymentOptions = [
    {
      type: "Cloud-Native SaaS",
      description: "Fully managed service with global edge deployment",
      features: ["99.9% SLA", "Global CDN", "Auto-scaling", "Zero maintenance"],
      techSpecs: ["Multi-region deployment", "Edge computing", "Kubernetes orchestration", "Auto-failover"],
    },
    {
      type: "Hybrid Deployment",
      description: "On-premises control plane with cloud-based policy engine",
      features: ["Data residency", "Custom policies", "Local caching", "Offline capability"],
      techSpecs: ["Docker containers", "Kubernetes support", "Local Redis cache", "Encrypted sync"],
    },
    {
      type: "Air-Gapped Environment",
      description: "Completely isolated deployment for high-security environments",
      features: ["No internet dependency", "Local policy engine", "Encrypted updates", "Custom certificates"],
      techSpecs: ["Offline installation", "Local certificate authority", "Manual updates", "Isolated networks"],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-4 md:mb-6">
              <Badge className="bg-blue-100 text-blue-800 px-3 md:px-4 py-1 md:py-2 text-sm">
                Technical Specifications
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 md:mb-6">
              Our Tech
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed px-4">
              Enterprise browser with navigation layer integration, Mojo IPC communication, Blink renderer masking,
              and Android input pipeline interception. Deep technical specifications for IT decision makers.
            </p>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* Technical Architecture */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4">
              Technical Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Deep Chromium integration with navigation layer controls, multi-process security architecture, and Android system-level enforcement
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-12 px-4">
            {Object.entries(technicalSpecs).map(([key, spec]) => (
              <button
                key={key}
                onClick={() => setActiveSpec(key as keyof typeof technicalSpecs)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeSpec === key ? "bg-black text-white shadow-lg" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {spec.title}
              </button>
            ))}
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6 md:mb-8">
                  {technicalSpecs[activeSpec].title}
                </h3>
                <div className="grid gap-6 md:gap-8">
                  {technicalSpecs[activeSpec].content.map((item, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 md:pl-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 md:mb-4 gap-2">
                        <h4 className="text-base md:text-lg font-medium text-gray-900">{item.component}</h4>
                        <Badge variant="outline" className="text-blue-600 border-blue-200 w-fit">
                          {item.version}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{item.details}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3">
                        {item.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-center text-xs md:text-sm text-gray-700">
                            <CheckCircle className="w-3 md:w-4 h-3 md:h-4 text-green-500 mr-2 flex-shrink-0" />
                            <span className="break-words">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration APIs */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4">Integration APIs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive API support for seamless integration with your existing enterprise infrastructure
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-6 md:gap-8">
              {integrationAPIs.map((category, index) => (
                <Card key={index} className="border-0 shadow-lg h-full">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center mb-6">
                      <Network className="w-6 h-6 mr-3 text-blue-600" />
                      <h3 className="text-xl font-medium text-gray-900">{category.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {category.apis.map((api, apiIndex) => (
                        <div key={apiIndex} className="p-4 bg-white rounded-lg border border-gray-100">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-gray-900 text-base">{api.name}</h4>
                            <Badge className="bg-green-100 text-green-800 text-xs">{api.status}</Badge>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">{api.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4">
              Deployment Architecture
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Flexible deployment options to meet your security, compliance, and operational requirements
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-8">
                  <div className="grid lg:grid-cols-5 gap-6 md:gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-medium text-gray-900 mb-4">{option.type}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {option.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="lg:col-span-3 bg-gray-50 rounded-lg p-6">
                      <h4 className="font-medium text-gray-900 mb-4 flex items-center">
                        <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                        Technical Specifications
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {option.techSpecs.map((spec, specIndex) => (
                          <div key={specIndex} className="flex items-start text-sm">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security Implementation Details */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4">
              Security Implementation Matrix
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Deep technical implementations showing browser-level, Android system-level, and multi-process architecture integration
            </p>
          </div>

          <div className="max-w-6xl mx-auto mb-12 md:mb-16">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-2 font-medium text-gray-900">Security Control</th>
                        <th className="text-center py-3 px-2 font-medium text-gray-900">Wootzapp Browser</th>
                        <th className="text-center py-3 px-2 font-medium text-gray-900">Traditional VPN</th>
                        <th className="text-center py-3 px-2 font-medium text-gray-900">VDI/DaaS</th>
                        <th className="text-left py-3 px-2 font-medium text-gray-900">Deep Technical Implementation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          control: "Zero Trust Network Access",
                          island: "✅ Native",
                          vpn: "❌ Network-based",
                          vdi: "⚠️ Perimeter-based",
                          implementation: "Okta SAML integration with CA certificate issuance for mTLS handshakes",
                        },
                        {
                          control: "Data Loss Prevention",
                          island: "✅ Granular",
                          vpn: "❌ None",
                          vdi: "⚠️ Basic",
                          implementation: "Android FLAG_SECURE, WebContents clipboard control, system-level input interception",
                        },
                        {
                          control: "Malware Protection",
                          island: "✅ Isolation",
                          vpn: "❌ Endpoint-dependent",
                          vdi: "⚠️ VM-based",
                          implementation: "Navigation layer throttle with Chromium Download Controller integration",
                        },
                        {
                          control: "Keylogger Protection",
                          island: "✅ Full",
                          vpn: "❌ None",
                          vdi: "❌ None",
                          implementation: "Android input pipeline synthetic keystroke injection with internal filtering",
                        },
                        {
                          control: "Device Trust",
                          island: "✅ Certificate-based",
                          vpn: "⚠️ Basic",
                          vdi: "⚠️ Basic",
                          implementation: "Okta Verify app integration with CA certificate issuance for Cloudflare Access mTLS",
                        },
                        {
                          control: "Content Masking",
                          island: "✅ AI-Powered",
                          vpn: "❌ None",
                          vdi: "❌ None",
                          implementation: "AI agent with DOM monitoring, Mojo IPC, and Blink renderer integration for real-time masking",
                        },
                      ].map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="py-3 px-2 font-medium text-gray-900">{row.control}</td>
                          <td className="py-3 px-2 text-center">{row.island}</td>
                          <td className="py-3 px-2 text-center">{row.vpn}</td>
                          <td className="py-3 px-2 text-center">{row.vdi}</td>
                          <td className="py-3 px-2 text-gray-600 text-xs">{row.implementation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { name: "SOC 2 Type II", icon: Shield },
              { name: "HIPAA", icon: Lock },
              { name: "PCI DSS", icon: Database },
              { name: "GDPR", icon: Shield },
              { name: "FedRAMP Ready", icon: Lock },
              { name: "ISO 27001", icon: Database },
            ].map((cert, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-3 md:p-4 lg:p-6">
                  <cert.icon className="w-6 md:w-8 h-6 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3" />
                  <h4 className="font-medium text-gray-900 text-xs md:text-sm">{cert.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 md:mb-4">
              Performance Benchmarks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">Real-world performance metrics and scalability data</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[
              { metric: "<50ms", label: "Policy Decision Latency", icon: "⚡" },
              { metric: "99.9%", label: "Service Availability", icon: "🎯" },
              { metric: "10M+", label: "Concurrent Sessions", icon: "📊" },
              { metric: "<2MB", label: "Memory Footprint", icon: "💾" },
            ].map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm text-center">
                <CardContent className="p-3 md:p-4 lg:p-6">
                  <div className="text-xl md:text-2xl mb-2">{stat.icon}</div>
                  <div className="text-lg md:text-2xl font-bold text-gray-900 mb-1">{stat.metric}</div>
                  <div className="text-xs md:text-sm text-gray-600 leading-tight">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}