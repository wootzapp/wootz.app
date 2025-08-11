import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

interface Industry {
  id: string
  title: string
  description: string
  highlights?: string[]
  stats: { value: string; label: string }[]
}

const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Clinicians move between EHR systems, imaging suites, and telehealth portals. Wootzapp keeps PHI locked in the browser while allowing frictionless access on any device. Role-based policies follow staff from nurse station to home office, and built-in logging supports HIPAA audits without extra agents.",
    highlights: [
      "Secure EHR and imaging access in clinics or from home",
      "Device posture checks before opening patient charts",
      "No VPN required for telehealth visits",
    ],
    stats: [
      { value: "4x", label: "Faster clinician onboarding" },
      { value: "100%", label: "Session recording for audit" },
      { value: "HIPAA", label: "Aligned controls" },
    ],
  },
  {
    id: "higher-education",
    title: "Higher Education",
    description:
      "Students and faculty need open access while research and personal data stay secure. Wootzapp delivers campus resources in a controlled browser that travels with the user across dorms, libraries, and study-abroad networks. Identity-based rules enforce the difference between public kiosks and research labs.",
    highlights: [
      "Single sign-on to LMS, portals, and research apps",
      "Granular policies for labs versus public kiosks",
      "Watermarking and copy guards for exam integrity",
    ],
    stats: [
      { value: "60%", label: "Less IT overhead" },
      { value: "24/7", label: "Access from any device" },
      { value: "FERPA", label: "Compliant handling" },
    ],
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Trading floors and remote advisors operate under strict regulations. Wootzapp wraps every brokerage, banking, and research tool in enterprise policies that stop leaks and capture evidence automatically. Fine-grained controls and session recording make audits painless while keeping traders in the flow.",
    highlights: [
      "Hardened sessions with DLP and watermarking",
      "Transaction logs streamed to your SIEM",
      "Micro-segmentation for high-risk applications",
    ],
    stats: [
      { value: "99.9%", label: "Uptime for trading ops" },
      { value: "AES-256", label: "Encryption at rest/in transit" },
      { value: "SOX", label: "Ready controls" },
    ],
  },
  {
    id: "third-party-contractors",
    title: "3rd-Party Contractors",
    description:
      "Partners and gig workers can contribute quickly without being trusted with the entire network. Send them a link, not a laptop; Wootzapp enforces least privilege with detailed tracking. Access automatically expires when the job is done, leaving no loose ends.",
    stats: [
      { value: "10min", label: "Average onboarding" },
      { value: "0", label: "Devices to ship" },
      { value: "100%", label: "Activity visibility" },
    ],
  },
  {
    id: "byod-workforce",
    title: "BYOD Workforce",
    description:
      "Employees prefer their own devices but companies need control. Wootzapp creates a secure workspace inside the browser while leaving personal apps untouched. Policies adapt to location and device health so corporate data stays in its lane even on risky phones.",
    highlights: [
      "Context-based policies separate work from personal",
      "Local file and clipboard isolation",
      "Health checks downgrade risky devices to view-only",
    ],
    stats: [
      { value: "5x", label: "Increase in BYOD adoption" },
      { value: "0", label: "Agent installs" },
      { value: "GDPR", label: "Aligned data handling" },
    ],
  },
]

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-4">
              Industries
            </h1>
            <p className="text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
              Wootzapp Mobile Browser adapts to the needs of modern sectors, protecting data without slowing down work.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <a
                  key={industry.id}
                  href={`#${industry.id}`}
                  className="px-6 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                >
                  {industry.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {industries.map((industry, index) => (
        <section
          key={industry.id}
          id={industry.id}
          className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} py-12 md:py-16`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                    {industry.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base mb-6">
                    {industry.description}
                  </p>
                  {industry.highlights && (
                    <ul className="space-y-3">
                      {industry.highlights.map((item) => (
                        <li key={item} className="flex items-start">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-gray-600 text-sm sm:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {industry.id === "third-party-contractors" && (
                    <ol className="mt-4 list-decimal list-inside space-y-2 text-gray-600 text-sm sm:text-base">
                      <li>Send an invite link—no hardware shipping</li>
                      <li>Contractor signs in and works through Wootzapp</li>
                      <li>Access logs close automatically at project end</li>
                    </ol>
                  )}
                </div>
                <div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {industry.stats.map((stat) => (
                      <Card key={stat.label} className="text-center">
                        <CardContent className="p-6">
                          <div className="text-2xl font-semibold text-gray-900">
                            {stat.value}
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  {industry.id === "higher-education" && (
                    <Card className="mt-8 bg-blue-50 border-blue-200">
                      <CardContent className="p-6 text-sm text-gray-700">
                        Rolling out to thousands of students? Wootzapp syncs with your IdP to provision classes automatically.
                      </CardContent>
                    </Card>
                  )}
                  {industry.id === "byod-workforce" && (
                    <div className="mt-8 grid sm:grid-cols-2 gap-4">
                      <Card className="bg-gray-50">
                        <CardContent className="p-6">
                          <h3 className="font-medium text-gray-900 mb-2">Work Data</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Encrypted tabs, managed bookmarks, clipboard isolation.
                          </p>
                        </CardContent>
                      </Card>
                      <Card className="bg-gray-50">
                        <CardContent className="p-6">
                          <h3 className="font-medium text-gray-900 mb-2">Personal Life</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            Social apps and photos stay outside the workspace.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  )
}

