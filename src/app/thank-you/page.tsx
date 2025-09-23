import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Calendar, MessageSquare, Shield } from "lucide-react";
import { OpenSourceShowcase } from "@/components/open-source-showcase";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Thank You!
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Your demo request has been received. We&apos;re opening your calendar booking in a new tab. 
              If it didn&apos;t open automatically, please check your pop-up blocker.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Calendar booking opened in new tab</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span>We&apos;ll follow up within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 text-center mb-12">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Book Your Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Select a convenient time from our calendar. Choose a 30-minute slot that works best for your schedule.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Live Demo</h3>
                <p className="text-gray-600 leading-relaxed">
                  See Wootzapp Mobile Browser in action. We&apos;ll show you zero-trust security, DLP, and mobile workforce management.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-3">Pilot Program</h3>
                <p className="text-gray-600 leading-relaxed">
                  Start a pilot with your team. Get hands-on experience with our enterprise browser platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Highlight */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Enterprise Security Ready
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              While you&apos;re booking your demo, here&apos;s what makes Wootzapp Mobile Browser the most secure choice for enterprise teams:
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Zero-trust architecture built from the ground up</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Real-time Data Loss Prevention (DLP) controls</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Complete session recording and audit trails</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Device health monitoring and adaptive controls</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Chrome policy enforcement for unmanaged devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">VPN/VDI replacement with better user experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Mobile-first design for deskless workforce</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">SOC 2 compliant with enterprise-grade infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* Emergency Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-medium mb-4">Need immediate assistance?</h3>
          <p className="text-gray-300 mb-6">
            If you have urgent questions or need help with booking, contact our team directly.
          </p>
          <a
            href="mailto:support@wootzapp.com"
            className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            support@wootzapp.com
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}