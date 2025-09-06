"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle, AlertCircle, Shield, Smartphone, Users, Lock } from "lucide-react"
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DataLabelingPage() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isSticky, setIsSticky] = useState(false)

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "risks", label: "Security Risks" },
    { id: "vdi-vs-browser", label: "VDI vs Browser" },
    { id: "mobile-first", label: "Mobile-First" },
    { id: "capabilities", label: "Our Solution" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const navElement = document.getElementById("navigation-pills")
      if (navElement) {
        const navPosition = navElement.getBoundingClientRect().top
        setIsSticky(navPosition <= 80) // 80px is roughly header height
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      // Check if we're on mobile (md breakpoint is 768px)
      const isMobile = window.innerWidth < 768;
      const headerOffset = isMobile ? 80 : (isSticky ? 160 : 80); // Mobile: 80px, Desktop: 80px or 160px with sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Sticky Navigation Pills - Hidden on mobile */}
      {isSticky && (
        <div className="hidden md:block fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-40 py-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center">
              <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg">
                <div className="flex gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="overview" className="py-12 md:py-16 lg:py-24 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
              <AlertCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
              Critical Security Alert for Data Labeling Companies
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
              The First <span className="text-red-600">Mobile Enterprise Browser</span> for Data Labeling Security
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
              Your business lives on trust. One leak, one screenshot, one bad contractor, and that trust is gone
              forever.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4 sm:px-0">
              <Button
                onClick={() => scrollToSection("capabilities")}
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto text-sm md:text-base"
              >
                Secure Your Data Now →
              </Button>
              <Button
                onClick={() => scrollToSection("risks")}
                variant="outline"
                className="px-6 md:px-8 py-3 border-gray-300 bg-white w-full sm:w-auto text-sm md:text-base"
              >
                See the Risks
              </Button>
            </div>

            {/* Navigation Pills - Hidden on mobile */}
            <div id="navigation-pills" className="hidden md:flex justify-center mb-8 md:mb-12">
              <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-full p-2 shadow-lg">
                <div className="flex gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-black text-white shadow-lg"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {section.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <Shield className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Zero Data Leaks</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Block screenshots, copy/paste, and file transfers at the browser level
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                <Smartphone className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Mobile-First Security</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Secure Android devices where your annotators actually work
                </p>
              </div>
              <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm sm:col-span-2 md:col-span-1">
                <Users className="w-6 h-6 md:w-8 md:h-8 text-red-600 mx-auto mb-2 md:mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Instant Onboarding</h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Scale from 10 to 10,000 annotators in minutes, not months
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters Now */}
      <section id="risks" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Why This Matters Now
            </h2>

            <div className="bg-red-50 border-l-4 border-red-500 p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                Your business lives on trust. Clients like Google, Meta, and government agencies hand over terabytes of
                <strong> sensitive data</strong>—images, medical records, proprietary R&D datasets—for annotation. One
                leak, one screenshot, one bad contractor, and that trust is gone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start mb-3 md:mb-4">
                    <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Scale AI Data Breach
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700">
                        Left thousands of confidential documents exposed on public Google Docs, including details about
                        contractors and client projects.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start mb-3 md:mb-4">
                    <Lock className="w-5 h-5 md:w-6 md:h-6 text-red-500 mr-2 md:mr-3 mt-0.5 md:mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                        Sama&apos;s Extreme Measures
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700">
                        Locks annotators in biometric-secured rooms just to keep data safe—an expensive, non-scalable
                        solution.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 md:p-6">
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">The Reality Check</h3>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">
                Even with NDAs and training,{" "}
                <strong>a single copy-paste or screenshot can exfiltrate client data forever</strong>.
              </p>
              <ul className="space-y-2 text-xs md:text-sm text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                  Annotators work on personal devices with no security controls
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                  Screenshots and screen recordings are undetectable
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0"></div>
                  Copy/paste allows instant data exfiltration to messaging apps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VDI vs Enterprise Browser */}
      <section id="vdi-vs-browser" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              VDI vs. Enterprise Browser: What&apos;s the Difference?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* VDI */}
              <Card className="border-red-200">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-red-500 rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold text-gray-900">VDI (Virtual Desktop Infrastructure)</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Runs a remote Windows desktop in the cloud</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">High overhead: licensing, servers, GPU allocation</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Poor user experience: latency, bandwidth issues, unusable on low-cost Android devices
                      </p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Scales slowly: spinning up 1,000 virtual desktops for a labeling surge is neither cheap nor fast
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Browser */}
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                    <h3 className="text-xl font-semibold text-gray-900">Enterprise Browser</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">Installs directly on the worker&apos;s device</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Enforces DLP policies at the last mile: block copy/paste, downloads, screen capture
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Integrates with identity systems: only authorized labelers access the platform
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-gray-700">
                        Zero infrastructure to maintain: labelers just download the browser, authenticate, and start
                        working
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="font-semibold text-gray-900 mb-2">The Bottom Line</h3>
              <p className="text-gray-700">
                VDI secures the <em>desktop</em>. An enterprise browser secures the <em>work</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile-First Section */}
      <section id="mobile-first" className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
              Why Mobile-First Matters
            </h2>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 md:p-6 mb-6 md:mb-8">
              <p className="text-gray-800 leading-relaxed text-sm md:text-base">
                Your workforce isn&apos;t sitting in offices with fiber internet. They&apos;re global, distributed, and
                increasingly mobile.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <Card className="text-center">
                <CardContent className="p-4 md:p-6">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">Millions</div>
                  <p className="text-xs md:text-sm text-gray-600">
                    of annotators use low-cost Android devices as their primary work tool
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4 md:p-6">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">0%</div>
                  <p className="text-xs md:text-sm text-gray-600">
                    Standard desktop enterprise browsers don&apos;t solve mobile security
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center sm:col-span-2 md:col-span-1">
                <CardContent className="p-4 md:p-6">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1 md:mb-2">100%</div>
                  <p className="text-xs md:text-sm text-gray-600">
                    visibility gap when annotators switch apps or take screenshots
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 mb-8 md:mb-12">
              <h3 className="font-semibold text-gray-900 mb-2 md:mb-3 text-sm md:text-base">The Mobile Security Gap</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">
                Without mobile controls, annotators can{" "}
                <strong>switch apps, take screenshots, or upload client data elsewhere</strong>, outside your
                visibility.
              </p>
              <p className="text-gray-700 font-medium text-sm md:text-base">That&apos;s the gap we close.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section id="capabilities" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
              What Our Mobile Enterprise Browser Does
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Lock Down Data on Mobile Devices</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    No screenshots, no copy/paste, no file transfers, no unapproved apps.
                  </p>
                  <div className="flex items-center text-xs text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Enforced at the browser level
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Work-Only Profiles</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Client data is sealed inside the secure browser container—completely separated from personal apps.
                  </p>
                  <div className="flex items-center text-xs text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Zero data leakage risk
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Granular Policy Control</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Admins can define who can annotate what, when, and how, in real time.
                  </p>
                  <div className="flex items-center text-xs text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Real-time policy updates
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Built for Scale</h3>
                  <p className="text-sm text-gray-700 mb-4">
                    Onboard 10 or 10,000 annotators in minutes. No VDI servers, no shipping laptops.
                  </p>
                  <div className="flex items-center text-xs text-green-700">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Instant deployment
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-8">
                <h3 className="font-semibold text-gray-900 mb-4 text-center">Mobile Annotation Assist</h3>
                <p className="text-gray-700 text-center leading-relaxed">
                  Embed AI-powered tools directly in-browser (quality checks, annotation suggestions), just like Peak
                  Support does for support agents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Risk of Doing Nothing */}
      <section className="py-16 md:py-20 bg-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">The Risk of Doing Nothing</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Security Incidents</h3>
                  <p className="text-sm text-gray-700">
                    Like Scale AI&apos;s leaked docs are already public—and regulators are watching.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <Users className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Client Demands</h3>
                  <p className="text-sm text-gray-700">
                    Clients will demand proof of zero-leak environments. &ldquo;Trust us&rdquo; won&apos;t cut it anymore.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <XCircle className="w-8 h-8 text-red-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Margins Collapse</h3>
                  <p className="text-sm text-gray-700">
                    When you&apos;re forced into Sama-style biometric facilities or costly VDI.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-red-100 border border-red-300 rounded-lg p-6">
              <p className="text-red-800 font-semibold text-lg">
                If your labeling platform isn&apos;t locked down at the browser layer, you are one contractor mistake away
                from front-page headlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Take Action Before Your Competitors Do
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
              Enterprise browsers are already reshaping customer support BPOs and contractor-heavy industries. Labeling
              will be next.
            </p>

            <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-6 md:mb-8">
              <p className="text-base md:text-lg mb-3 md:mb-4">
                We built the <strong>first mobile enterprise browser for annotation workflows</strong>.
              </p>
              <p className="text-gray-300 text-sm md:text-base">
                No VDI. No heavy infrastructure. Just secure, scalable, provable compliance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                className="bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 w-full sm:w-auto text-base md:text-lg rounded-lg font-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request a Demo →
              </a>
              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-6 md:px-8 py-3 w-full sm:w-auto text-base md:text-lg bg-transparent"
              >
                See Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}