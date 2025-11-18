"use client"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"
import { ComparisonTable } from "@/components/comparison-table"

export default function ComparisonPage() {
  return (
    <div className="min-h-screen bg-[#0B0326] text-foreground font-sans selection:bg-primary/30">
      <Header />

      {/* Hero Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 blur-[100px] rounded-full opacity-20" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-md mb-6">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              Legacy vs. Modern
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                A Modern Approach to
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Secure Access
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              See how the Enterprise Browser stacks up against legacy solutions like VPN, VDI, and SASE.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                asChild 
                size="lg"
                className="bg-primary text-white font-bold shadow-[0_0_30px_-5px_rgba(213,4,217,0.5)] hover:shadow-[0_0_50px_-10px_rgba(213,4,217,0.7)] hover:bg-primary/90 transition-all duration-300 rounded-full px-8"
              >
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule a Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <OpenSourceShowcase />

      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-[#130630] to-[#0B0326] border border-white/10 p-8 md:p-16 text-center overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
             <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/20 blur-[80px] rounded-full" />
             <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full" />

             <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mb-6">
                  Ready to Make the Switch?
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Join thousands of organizations that have already modernized their remote access with enterprise browsers.
                  See the difference for yourself with a personalized demo.
                </p>
                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 font-bold rounded-full px-10 py-6 shadow-lg transition-transform hover:scale-105">
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
        </div>
      </section>

      <Footer />
    </div>
  )
}