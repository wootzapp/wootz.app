"use client"

import { useEffect } from 'react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import { CheckCircle, Calendar, MessageSquare, Shield } from "lucide-react";
import { OpenSourceShowcase } from "@/components/open-source-showcase";

export default function ThankYouPage() {
  useEffect(() => {
    // Fire conversion event for thank-you page with GCLID tracking
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      const gclid = urlParams.get('gclid')
      const fbclid = urlParams.get('fbclid')
      const msclkid = urlParams.get('msclkid')
      
      // Send conversion event to GTM
      interface WindowWithDataLayer extends Window {
        dataLayer?: Record<string, unknown>[]
      }
      const windowWithDataLayer = window as unknown as WindowWithDataLayer
      windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || []
      windowWithDataLayer.dataLayer.push({
        event: 'demo_conversion',
        event_category: 'conversion',
        event_label: 'thank_you_page',
        gclid: gclid,
        fbclid: fbclid,
        msclkid: msclkid,
        conversion_value: 1
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-foreground mb-6 leading-tight">
              Thank You!
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Your demo request has been received. We&apos;re opening your calendar booking in a new tab. 
              If it didn&apos;t open automatically, please check your pop-up blocker.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Calendar booking opened in new tab</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-border rounded-full"></div>
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
            <h2 className="text-3xl md:text-4xl font-light text-foreground text-center mb-12">
              What Happens Next?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Book Your Time</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Select a convenient time from our calendar. Choose a 30-minute slot that works best for your schedule.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Live Demo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  See Wootzapp Mobile Browser in action. We&apos;ll show you zero-trust security, DLP, and mobile workforce management.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">Pilot Program</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Start a pilot with your team. Get hands-on experience with our enterprise browser platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Highlight */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Enterprise Security Ready
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              While you&apos;re booking your demo, here&apos;s what makes Wootzapp Mobile Browser the most secure choice for enterprise teams:
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Zero-trust architecture built from the ground up</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Real-time Data Loss Prevention (DLP) controls</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Complete session recording and audit trails</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Device health monitoring and adaptive controls</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Chrome policy enforcement for unmanaged devices</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">VPN/VDI replacement with better user experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">Mobile-first design for deskless workforce</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-muted-foreground">SOC 2 compliant with enterprise-grade infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      {/* Emergency Contact */}
      <section className="py-12 bg-card text-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-medium text-foreground mb-4">Need immediate assistance?</h3>
          <p className="text-muted-foreground mb-6">
            If you have urgent questions or need help with booking, contact our team directly.
          </p>
          <a
            href="mailto:support@wootzapp.com"
            className="inline-flex items-center bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
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