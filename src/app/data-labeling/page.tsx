import Header from "@/components/header";
import Footer from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Labeling Security | Wootzapp Mobile Browser",
  description: "Secure data labeling workflows with Wootzapp Mobile Browser. Protect sensitive training data and maintain compliance in AI/ML development.",
};

export default function DataLabelingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12 md:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Critical Security Alert for Data Labeling Companies
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Secure Data Labeling for AI/ML
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-4 sm:px-0">
                Protect sensitive training data and maintain compliance while building AI models with enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Demo →
                </a>
                <a
                  href="#overview"
                  className="bg-white text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors w-full sm:w-auto text-sm md:text-base"
                >
                  Learn More
                </a>
              </div>

              {/* Mobile-First Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-8 md:mt-12">
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                  <div className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3">🛡️</div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Zero Data Leaks</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Block screenshots, copy/paste, and file transfers at the browser level
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
                  <div className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3">📱</div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Mobile-First Security</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Secure Android devices where your annotators actually work
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm sm:col-span-2 md:col-span-1">
                  <div className="w-6 h-6 md:w-8 md:h-8 text-blue-600 mx-auto mb-2 md:mb-3">⚡</div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">Instant Onboarding</h3>
                  <p className="text-xs md:text-sm text-gray-600">
                    Scale from 10 to 10,000 annotators in minutes, not months
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Data Labeling Security Challenges
              </h2>
              <p className="text-lg text-gray-600">
                Traditional data labeling workflows expose sensitive training data to unmanaged devices and unsecured networks, creating compliance risks and potential data breaches.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Security Risks</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Unmanaged Device Access:</strong>
                      <p className="text-gray-600">Annotators use personal devices without security controls</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Data Leakage:</strong>
                      <p className="text-gray-600">Screenshots, downloads, and clipboard access expose training data</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Compliance Gaps:</strong>
                      <p className="text-gray-600">No audit trails or data handling controls for regulatory requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Remote Workforce Risks:</strong>
                      <p className="text-gray-600">Global annotation teams on unsecured networks and devices</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Impact on Organizations</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl text-red-600">⚠️</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Regulatory Fines</div>
                      <div className="text-sm text-gray-600">GDPR, HIPAA, SOX violations</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl text-orange-600">💰</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Data Breach Costs</div>
                      <div className="text-sm text-gray-600">Average $4.45M per incident</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-2xl text-yellow-600">🔍</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">IP Theft</div>
                      <div className="text-sm text-gray-600">Training data competitive advantage loss</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="bg-gray-50 py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Wootzapp Mobile Browser Solution
              </h2>
              <p className="text-lg text-gray-600">
                Transform your data labeling workflows with enterprise-grade security controls and zero-trust access on unmanaged devices.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-blue-600">🛡️</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Data Loss Prevention</h3>
                <p className="text-gray-600">
                  Built-in DLP blocks screenshots, downloads, copy/paste, and print operations on sensitive labeling data.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-green-600">🔐</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zero-Trust Access</h3>
                <p className="text-gray-600">
                  Device-based authentication and continuous security posture assessment for every annotation session.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-2xl text-purple-600">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audit & Compliance</h3>
                <p className="text-gray-600">
                  Complete audit trails of data access, user actions, and security events for regulatory compliance.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-blue-600">1️⃣</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Deploy Browser</h4>
                  <p className="text-sm text-gray-600">Annotators install Wootzapp on their devices</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-green-600">2️⃣</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Configure Policies</h4>
                  <p className="text-sm text-gray-600">Set DLP rules and access controls for labeling platforms</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-purple-600">3️⃣</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Secure Access</h4>
                  <p className="text-sm text-gray-600">Zero-trust authentication to labeling tools</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-orange-600">4️⃣</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Monitor & Audit</h4>
                  <p className="text-sm text-gray-600">Real-time visibility and compliance reporting</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Key Features for Data Labeling
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Security Controls</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Screenshot Protection:</strong>
                      <p className="text-gray-600">Prevents screen capture of training data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Download Blocking:</strong>
                      <p className="text-gray-600">Prevents local storage of sensitive datasets</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Clipboard Control:</strong>
                      <p className="text-gray-600">Restricts copy/paste of training data</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Print Blocking:</strong>
                      <p className="text-gray-600">Prevents physical data extraction</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Access Management</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Device Authentication:</strong>
                      <p className="text-gray-600">Unique device fingerprinting and verification</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Session Management:</strong>
                      <p className="text-gray-600">Time-based access controls and automatic logout</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Geolocation Control:</strong>
                      <p className="text-gray-600">Restrict access based on geographic location</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div>
                      <strong className="text-gray-900">Network Security:</strong>
                      <p className="text-gray-600">TLS encryption and certificate pinning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Data Labeling Use Cases
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Healthcare AI</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Medical image annotation and clinical data labeling with HIPAA compliance and patient privacy protection.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">HIPAA</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">PHI</span>
                </div>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Financial Services</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Document processing and fraud detection model training with PCI-DSS and PII protection requirements.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">PCI-DSS</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">PII</span>
                </div>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Autonomous Vehicles</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Computer vision training data annotation for self-driving cars with IP protection and safety compliance.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">IP Protection</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">Safety</span>
                </div>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Government & Defense</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Classified data annotation and intelligence analysis with FedRAMP and FISMA compliance requirements.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">FedRAMP</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">FISMA</span>
                </div>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Legal Tech</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Document review and legal AI training with attorney-client privilege and confidentiality protection.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Privilege</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">Confidential</span>
                </div>
              </div>
              
              <div className="bg-white p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4">Retail & E-commerce</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Product categorization and customer behavior analysis with PII protection and competitive data security.
                </p>
                <div className="text-xs md:text-sm text-gray-500">
                  <span className="bg-gray-100 px-2 py-1 rounded">Customer Data</span>
                  <span className="bg-gray-100 px-2 py-1 rounded ml-2">Competitive Intel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Secure Your Data Labeling Workflows
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Protect sensitive training data, maintain compliance, and enable secure AI/ML development with enterprise-grade security controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 sm:px-0">
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors w-full sm:w-auto text-sm md:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                Schedule Demo
              </a>
              <a
                href="mailto:info@wootz.app"
                className="border border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors w-full sm:w-auto text-sm md:text-base"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}