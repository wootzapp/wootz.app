import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-medium text-gray-900 mb-6 leading-tight">Industries & Solutions</h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Secure enterprise browser solutions tailored for your industry&apos;s unique challenges and compliance
            requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12">
            <Link
              href="#healthcare"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Healthcare
            </Link>
            <Link
              href="#higher-education"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Higher Education
            </Link>
            <Link
              href="#financial-services"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Financial Services
            </Link>
            <Link
              href="#third-party-contractors"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              3rd Party Contractors
            </Link>
            <Link
              href="#byod-workforce"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              BYOD Workforce
            </Link>
            <Link
              href="#saas-web-apps"
              className="px-6 py-3 bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-full text-sm font-medium text-gray-700 hover:text-blue-700 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              SaaS & Web Apps
            </Link>
          </div>
        </div>
      </section>

      <section id="healthcare" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">Healthcare</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed">
                Clinicians access records, charts, and diagnostic tools with fewer logins and stronger patient privacy.
                Browser-based controls allow secure telehealth and on-site workflows without extra agents.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3">$1.5M</div>
                <p className="text-gray-600 font-medium">Maximum HIPAA fine per violation</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">$10.93M</div>
                <p className="text-gray-600 font-medium">Average cost of a healthcare breach</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center border border-gray-100">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3">78%</div>
                <p className="text-gray-600 font-medium">Providers expanding telehealth programs</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 md:gap-16 mb-20">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Key Challenges</h3>
                <ul className="space-y-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">HIPAA Compliance:</strong> Protecting patient health information
                      across multiple systems and devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">Legacy VDI Costs:</strong> Expensive virtual desktop
                      infrastructure for accessing EMR systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">Telehealth Security:</strong> Securing remote consultations and
                      patient data access
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-4 mt-1 text-xl">•</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">M&A Integration:</strong> Quickly onboarding acquired practices
                      and their systems
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">Wootzapp Enterprise Browser Solutions</h3>
                <ul className="space-y-6 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-xl">✓</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">HIPAA-Ready Controls:</strong> Built-in data loss prevention and
                      audit logging
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-xl">✓</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">VDI Replacement:</strong> Direct access to web-based EMR systems
                      without virtual desktops
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-xl">✓</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">Secure Telehealth:</strong> Isolated browsing sessions for
                      patient consultations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-4 mt-1 text-xl">✓</span>
                    <span className="text-lg leading-relaxed">
                      <strong className="text-gray-900">Rapid Onboarding:</strong> Quick access provisioning for new
                      practices and staff
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-10 text-center">Common Use Cases</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏥</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-3">EMR Access</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Secure access to electronic medical records from any device
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-3">Telehealth</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Protected video consultations with data isolation
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <h4 className="font-medium text-gray-900 mb-3">BYOD Security</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Personal devices accessing clinical applications safely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="higher-education" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">Higher Education</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Faculty, students, and staff reach campus systems from anywhere while protecting research and student
              data. Policies follow users across labs, dorms, and study-abroad connections. FERPA compliance becomes a
              configuration, not a guess.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
                <p className="text-sm text-gray-600">Breaches start with social engineering</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                <p className="text-sm text-gray-600">Average connected devices per student</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Education Challenges</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>SSO with campus identity providers:</strong> Seamless integration with existing
                      authentication systems
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Per-course or lab policy sets:</strong> Policies that travel with the user across
                      different environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Logging and watermarking:</strong> Keep grant data secure with comprehensive audit trails
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Academic Integrity:</strong> Preventing cheating while enabling collaboration
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Wootzapp Enterprise Browser Benefits</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Student Freedom:</strong> Browser runs on personal devices without exposing university
                      networks
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Research Safeguards:</strong> Fine-grained policies protect sensitive projects and IP
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Unified Platform:</strong> Single solution across all campuses and remote locations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>AI Governance:</strong> Safe AI tool usage with institutional oversight and control
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Academic Use Cases</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Student Information Systems</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Secure access to grades, transcripts, and personal information with FERPA compliance.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Banner, PeopleSoft access</li>
                    <li>• Grade privacy protection</li>
                    <li>• Transcript security</li>
                    <li>• Parent portal controls</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Research Data Protection</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Safeguard sensitive research data and intellectual property across collaborative projects.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• IRB compliance</li>
                    <li>• Data classification</li>
                    <li>• Export control</li>
                    <li>• IP protection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Online Learning</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Secure remote learning environments with academic integrity controls.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• LMS integration</li>
                    <li>• Exam proctoring</li>
                    <li>• Content protection</li>
                    <li>• Accessibility support</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Administrative Systems</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Protect financial and HR systems with role-based access and audit controls.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Financial aid systems</li>
                    <li>• HR applications</li>
                    <li>• Budget management</li>
                    <li>• Compliance reporting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="financial-services" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">Financial Services</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Advisors and traders interact with portfolios and banking portals in a hardened environment that enforces
              compliance and prevents data exfiltration. Session recording and DLP keep regulators happy. FINRA-ready
              logs and watermarks satisfy the toughest regulators.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">$5.90M</div>
                <p className="text-sm text-gray-600">Average cost of a financial breach</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">63%</div>
                <p className="text-sm text-gray-600">Firms pursuing zero trust</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Front Office</h3>
                <p className="text-gray-600 mb-4">Traders launch deals in a sealed browser with live watermarking.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Session recording for audit trails</li>
                  <li>• Clipboard and download controls for compliance</li>
                  <li>• Segregates personal and corporate trading</li>
                  <li>• SEC and FINRA requirements</li>
                  <li>• Comprehensive audit trails</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Back Office</h3>
                <p className="text-gray-600 mb-4">Operations teams review records without raw data leaving the bank.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Advanced persistent threat detection</li>
                  <li>• Phishing and social engineering protection</li>
                  <li>• Malware and ransomware prevention</li>
                  <li>• Insider threat monitoring</li>
                  <li>• Real-time threat intelligence</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Operational Efficiency</h3>
                <p className="text-gray-600 mb-4">Streamline operations while maintaining security and compliance.</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• VDI/DaaS cost reduction</li>
                  <li>• Faster M&A integration</li>
                  <li>• Simplified privileged access</li>
                  <li>• Automated compliance reporting</li>
                  <li>• Reduced IT overhead</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Financial Services Use Cases</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Trading & Investment Platforms</h4>
                  <p className="text-gray-600 mb-4">
                    Secure access to trading systems and investment platforms with real-time monitoring.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Bloomberg Terminal access</li>
                    <li>• Trading platform security</li>
                    <li>• Market data protection</li>
                    <li>• Transaction monitoring</li>
                    <li>• Compliance recording</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Customer Data Protection</h4>
                  <p className="text-gray-600 mb-4">
                    Safeguard sensitive customer financial information across all touchpoints.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• PII and financial data encryption</li>
                    <li>• Customer portal security</li>
                    <li>• Mobile banking protection</li>
                    <li>• Data loss prevention</li>
                    <li>• Privacy compliance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Mergers & Acquisitions</h4>
                  <p className="text-gray-600 mb-4">
                    Accelerate M&A integration with secure, instant access to acquired systems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Rapid system integration</li>
                    <li>• Due diligence security</li>
                    <li>• Data room access</li>
                    <li>• Regulatory approval support</li>
                    <li>• Cultural integration tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Risk Management</h4>
                  <p className="text-gray-600 mb-4">
                    Comprehensive risk assessment and management with real-time visibility.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Risk analytics platforms</li>
                    <li>• Stress testing systems</li>
                    <li>• Regulatory reporting</li>
                    <li>• Fraud detection tools</li>
                    <li>• Compliance dashboards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="third-party-contractors" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">3rd Party Contractors</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Temporary staff and partners get instant, least-privilege access through the browser. No need to ship
              laptops—permissions, logging, and watermarking travel with the session. Stop contractor sprawl with
              time-boxed browser workspaces.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">63%</div>
                <p className="text-sm text-gray-600">Breaches involve a third party</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$4.45M</div>
                <p className="text-sm text-gray-600">Average cost of a breach globally</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-red-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Traditional Contractor Challenges</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>
                      <strong>Grant or revoke access in minutes:</strong> Not days with traditional provisioning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>
                      <strong>Apply automatic watermarks:</strong> And session recording for complete audit trails
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>
                      <strong>Restrict copy, paste, and downloads:</strong> On untrusted devices without device
                      management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <span>
                      <strong>Limited Visibility:</strong> No insight into contractor activities or data access
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Wootzapp Enterprise Browser Solution</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Gig Workers:</strong> Share project portals securely on any device
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>BPO Teams:</strong> Audit-ready logs for every outsourced task
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Complete Security:</strong> Enterprise-grade protection without device management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Full Visibility:</strong> Comprehensive audit trails and activity monitoring
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Key Capabilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Instant Onboarding</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Get contractors working immediately with zero-touch deployment.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• No device imaging required</li>
                    <li>• No VPN setup needed</li>
                    <li>• No software installation</li>
                    <li>• Works on any device/OS</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Granular Controls</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Fine-grained access controls tailored to each contractor&apos;s role.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Application-specific access</li>
                    <li>• Time-based permissions</li>
                    <li>• IP and location restrictions</li>
                    <li>• Device posture checking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Protection</h4>
                  <p className="text-gray-600 text-sm mb-3">Prevent data leakage while enabling productive work.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Copy/paste controls</li>
                    <li>• Download restrictions</li>
                    <li>• Screen capture blocking</li>
                    <li>• Print prevention</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Audit & Compliance</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Complete visibility into contractor activities and data access.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Detailed session recording</li>
                    <li>• Activity logging</li>
                    <li>• Compliance reporting</li>
                    <li>• Risk assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Easy Offboarding</h4>
                  <p className="text-gray-600 text-sm mb-3">Instantly revoke access when contracts end.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• One-click access removal</li>
                    <li>• No device retrieval needed</li>
                    <li>• Data retention controls</li>
                    <li>• Clean exit process</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Cost Efficiency</h4>
                  <p className="text-gray-600 text-sm mb-3">Dramatically reduce contractor IT costs and overhead.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• No hardware costs</li>
                    <li>• Reduced IT support</li>
                    <li>• Lower licensing fees</li>
                    <li>• Faster project delivery</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Common Contractor Scenarios</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">IT Services & Consulting</h4>
                  <p className="text-gray-600 mb-3">
                    Secure access to development environments, documentation, and client systems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Code repository access</li>
                    <li>• Development tool usage</li>
                    <li>• Client environment access</li>
                    <li>• Documentation and wikis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Services</h4>
                  <p className="text-gray-600 mb-3">
                    Enable consultants, auditors, and specialists to access necessary systems safely.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Financial system access</li>
                    <li>• Audit trail systems</li>
                    <li>• Compliance platforms</li>
                    <li>• Reporting tools</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Creative & Marketing</h4>
                  <p className="text-gray-600 mb-3">
                    Secure collaboration on marketing campaigns and creative projects.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Creative asset management</li>
                    <li>• Campaign management tools</li>
                    <li>• Brand asset libraries</li>
                    <li>• Collaboration platforms</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Temporary Staffing</h4>
                  <p className="text-gray-600 mb-3">Quick onboarding for temporary workers and seasonal staff.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• HR system access</li>
                    <li>• Training platforms</li>
                    <li>• Time tracking systems</li>
                    <li>• Communication tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="byod-workforce" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">BYOD Workforce</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Employees can use personal devices without mingling personal and corporate data. Contextual policies
              isolate work resources, check device health, and shut off risky actions like copy or screenshot. MDM
              optional—controls travel with the session.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <p className="text-sm text-gray-600">Organizations enabling BYOD</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$350</div>
                <p className="text-sm text-gray-600">Annual savings per BYOD user</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">BYOD Challenges</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Separate personal browsing:</strong> From corporate sessions without device management
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Device posture checks:</strong> Trigger view-only mode when security requirements aren&apos;t
                      met
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Auto wipe local data:</strong> When sessions end to prevent data persistence
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">•</span>
                    <span>
                      <strong>Compliance Gaps:</strong> Difficulty meeting regulatory requirements on personal devices
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Wootzapp Enterprise Browser Advantages</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Privacy Preserved:</strong> No device management or personal data access required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Zero Agents:</strong> No software installation or kernel-level access needed
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Data Isolation:</strong> Corporate data never touches the device or mixes with personal
                      data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Automatic Compliance:</strong> Built-in controls ensure regulatory requirements are met
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Core BYOD Capabilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Device Posture Assessment</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Automatic security posture checking without device management.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• OS version verification</li>
                    <li>• Security patch status</li>
                    <li>• Antivirus presence</li>
                    <li>• Network security assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Extension Management</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Control browser extensions that could compromise security.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Extension allowlisting</li>
                    <li>• Malicious extension blocking</li>
                    <li>• Corporate extension deployment</li>
                    <li>• Extension risk assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Privacy-Preserving Visibility</h4>
                  <p className="text-gray-600 text-sm mb-3">Security insights without compromising employee privacy.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Work activity monitoring only</li>
                    <li>• No personal data access</li>
                    <li>• Anonymized analytics</li>
                    <li>• Transparent reporting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Loss Prevention</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Prevent corporate data from leaving the secure browser environment.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Copy/paste restrictions</li>
                    <li>• Download controls</li>
                    <li>• Screen capture blocking</li>
                    <li>• Watermarking</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Seamless User Experience</h4>
                  <p className="text-gray-600 text-sm mb-3">Enterprise security that doesn&apos;t disrupt productivity.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Native browser performance</li>
                    <li>• Single sign-on integration</li>
                    <li>• Familiar interface</li>
                    <li>• Cross-platform consistency</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Flexible Policies</h4>
                  <p className="text-gray-600 text-sm mb-3">Adaptive security policies based on context and risk.</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li>• Location-based rules</li>
                    <li>• Time-based access</li>
                    <li>• Risk-adaptive controls</li>
                    <li>• Role-based permissions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Employee Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Use preferred personal devices for work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>No invasive device management software</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Personal privacy fully protected</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Seamless work-life integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-3 mt-1">✓</span>
                    <span>Familiar browser experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">IT Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>No device provisioning or support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>Reduced hardware and licensing costs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>Simplified security management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>Comprehensive audit and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>Instant onboarding and offboarding</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="saas-web-apps" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8 text-center">SaaS & Web Apps</h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
              Complete the SaaS vision with control and visibility. Govern access, stop data leakage, and see all
              behavior across applications without API dependencies.
            </p>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-medium text-gray-900 mb-6 text-center">The SaaS Data Leakage Crisis</h3>
              <p className="text-gray-600 text-center mb-8 max-w-4xl mx-auto">
                Corporate data used to live inside our four walls, under our direct control. Then SaaS happened.
                Suddenly data was accessible anywhere, anytime, on any device. But this incredible new reality meant we
                were no longer in control of our most sensitive data.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">85%</div>
                  <p className="text-sm text-gray-600">
                    of organizations experienced SaaS data breaches in the past year
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">$4.45M</div>
                  <p className="text-sm text-gray-600">
                    average cost of a data breach involving cloud misconfigurations
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">1,200+</div>
                  <p className="text-sm text-gray-600">average number of SaaS apps used by enterprises</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-white border border-gray-200 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">Why Prior Approaches Failed</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Web Gateways</h4>
                    <p className="text-gray-600 text-sm">
                      Lack fine-grained control and visibility into application behavior. Can&apos;t distinguish between
                      legitimate and malicious activities within approved SaaS apps.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Cloud Access Security Brokers (CASB)</h4>
                    <p className="text-gray-600 text-sm">
                      Limited by cloud provider API capabilities. Many SaaS vendors don&apos;t provide the granular controls
                      needed for enterprise security.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Data Loss Prevention (DLP)</h4>
                    <p className="text-gray-600 text-sm">
                      Traditional DLP tools are cumbersome and ineffective for modern SaaS environments. Create a
                      never-ending chase for better solutions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-medium text-gray-900 mb-6">The Enterprise Browser Solution</h3>
                <p className="text-gray-600 mb-6">
                  An enterprise browser creates a closed loop where nothing can pour out of the browser. By attacking
                  this problem at the browser level, organizations can quickly introduce changes to govern all
                  applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">
                      <strong>Universal Control:</strong> Works with any SaaS app, regardless of API availability
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">
                      <strong>Closed-Loop Protection:</strong> Data cannot leave the secure browser environment
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <span className="text-gray-600">
                      <strong>Deep Visibility:</strong> Complete audit trail of all user activities
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-medium text-gray-900 mb-6">Comprehensive SaaS Protection</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Data Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Block printing and screen capture</li>
                    <li>• Control copy/paste operations</li>
                    <li>• Prevent unauthorized downloads</li>
                    <li>• Redact sensitive data types</li>
                    <li>• Watermark documents</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Access Controls</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Fine-grained permissions</li>
                    <li>• Time-based access</li>
                    <li>• Location restrictions</li>
                    <li>• Device posture checking</li>
                    <li>• Risk-based authentication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Audit & Compliance</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Deep audit logging</li>
                    <li>• Session recording</li>
                    <li>• Compliance reporting</li>
                    <li>• Data classification</li>
                    <li>• Regulatory alignment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Threat Protection</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Malware scanning</li>
                    <li>• Phishing protection</li>
                    <li>• Safe file handling</li>
                    <li>• Threat intelligence</li>
                    <li>• Behavioral analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Popular SaaS Applications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Productivity</h4>
                    <ul className="space-y-1">
                      <li>• Microsoft 365</li>
                      <li>• Google Workspace</li>
                      <li>• Slack</li>
                      <li>• Zoom</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Business Apps</h4>
                    <ul className="space-y-1">
                      <li>• Salesforce</li>
                      <li>• ServiceNow</li>
                      <li>• Workday</li>
                      <li>• Jira</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
                    <ul className="space-y-1">
                      <li>• GitHub</li>
                      <li>• GitLab</li>
                      <li>• AWS Console</li>
                      <li>• Azure Portal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Finance</h4>
                    <ul className="space-y-1">
                      <li>• NetSuite</li>
                      <li>• QuickBooks</li>
                      <li>• Concur</li>
                      <li>• Coupa</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Implementation Benefits</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Instant Deployment:</strong> No API integrations or vendor negotiations required
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Universal Coverage:</strong> Works with any web-based application
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>User Transparency:</strong> No change to familiar SaaS interfaces
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Cost Effective:</strong> Single solution for all SaaS security needs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-3 mt-1">✓</span>
                    <span>
                      <strong>Future Proof:</strong> Automatically covers new SaaS adoptions
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-medium mb-6 text-center">Technical Deep Dive: Solving Data Leakage</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Browser-Level Enforcement</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Unlike traditional solutions that rely on network inspection or API controls, the enterprise browser
                    enforces policies at the application layer where users actually interact with data.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• DOM-level content inspection</li>
                    <li>• Real-time policy enforcement</li>
                    <li>• Context-aware data classification</li>
                    <li>• Behavioral pattern analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Zero-Trust Architecture</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Every action is verified and logged, creating a comprehensive audit trail while preventing
                    unauthorized data movement through multiple enforcement layers.
                  </p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Continuous verification</li>
                    <li>• Multi-layer enforcement</li>
                    <li>• Encrypted session isolation</li>
                    <li>• Immutable audit logs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-6">Ready to secure your industry?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how Wootzapp Enterprise Browser can address your industry&apos;s specific security and compliance challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-6 py-3"
            >
              <a
                href="https://calendar.app.google/3QyXM9d359yN6aCu8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 bg-transparent"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
