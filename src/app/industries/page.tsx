import Header from "@/components/header"
import Footer from "@/components/footer"

const sourceLinks = {
  ibm: "https://www.ibm.com/reports/data-breach",
  verizon: "https://www.verizon.com/business/resources/reports/dbir/",
  ponemon: "https://www.ponemon.org/library/2023-data-risk-in-the-third-party-ecosystem",
  cisco: "https://www.cisco.com/c/en/us/solutions/executive-perspectives/annual-cybersecurity-report.html",
}

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Clinicians access records, charts, and diagnostic tools with fewer logins and stronger patient privacy. Browser-based controls allow secure telehealth and on-site workflows without extra agents. Isolation keeps PHI inside hospital systems while letting practitioners use any device.",
    callout:
      "HIPAA fines can reach $1.5M per violation—browser isolation keeps PHI on hospital servers.",
    highlights: [
      "Isolates patient data from personal apps or downloads.",
      "Locks down clipboard, printing, and screenshots of charts.",
      "Geo-fences EHR access to approved facilities.",
    ],
    stats: [
      { value: "$10.93M", label: "avg cost of a healthcare breach", source: sourceLinks.ibm },
      { value: "78%", label: "providers expanding telehealth programs", source: sourceLinks.cisco },
    ],
    dual: [
      {
        title: "Telehealth Sessions",
        content:
          "Run virtual visits in a secure canvas with mic and camera controls.",
      },
      {
        title: "Nurses' Stations",
        content:
          "Auto-lock idle EHR tabs to keep hallway traffic out.",
      },
    ],
  },
  {
    id: "higher-education",
    title: "Higher Education",
    description:
      "Faculty, students, and staff reach campus systems from anywhere while protecting research and student data. Policies follow users across labs, dorms, and study-abroad connections.",
    callout: "FERPA compliance becomes a configuration, not a guess.",
    highlights: [
      "SSO with campus identity providers.",
      "Per-course or lab policy sets travel with the user.",
      "Logging and watermarking keep grant data secure.",
    ],
    stats: [
      { value: "30%", label: "breaches start with social engineering", source: sourceLinks.verizon },
      { value: "3", label: "avg connected devices per student", source: sourceLinks.cisco },
    ],
    dual: [
      {
        title: "Student Freedom",
        content:
          "Browser runs on personal devices without exposing university networks.",
      },
      {
        title: "Research Safeguards",
        content:
          "Fine-grained policies protect sensitive projects and IP.",
      },
    ],
  },
  {
    id: "financial-services",
    title: "Financial Services",
    description:
      "Advisors and traders interact with portfolios and banking portals in a hardened environment that enforces compliance and prevents data exfiltration. Session recording and DLP keep regulators happy.",
    callout: "FINRA-ready logs and watermarks satisfy the toughest regulators.",
    highlights: [
      "Session recording for audit trails.",
      "Clipboard and download controls for compliance.",
      "Segregates personal and corporate trading.",
    ],
    stats: [
      { value: "$5.90M", label: "avg cost of a financial breach", source: sourceLinks.ibm },
      { value: "63%", label: "firms pursuing zero trust", source: sourceLinks.verizon },
    ],
    dual: [
      {
        title: "Front Office",
        content:
          "Traders launch deals in a sealed browser with live watermarking.",
      },
      {
        title: "Back Office",
        content:
          "Operations teams review records without raw data leaving the bank.",
      },
    ],
  },
  {
    id: "third-party-contractors",
    title: "3rd-Party Contractors",
    description:
      "Temporary staff and partners get instant, least-privilege access through the browser. No need to ship laptops—permissions, logging, and watermarking travel with the session.",
    callout: "Stop contractor sprawl with time-boxed browser workspaces.",
    highlights: [
      "Grant or revoke access in minutes, not days.",
      "Apply automatic watermarks and session recording.",
      "Restrict copy, paste, and downloads on untrusted devices.",
    ],
    stats: [
      { value: "63%", label: "breaches involve a third party", source: sourceLinks.ponemon },
      { value: "$4.45M", label: "avg cost of a breach globally", source: sourceLinks.ibm },
    ],
    dual: [
      {
        title: "Gig Workers",
        content: "Share project portals securely on any device.",
      },
      {
        title: "BPO Teams",
        content: "Audit-ready logs for every outsourced task.",
      },
    ],
  },
  {
    id: "byod-workforce",
    title: "BYOD Workforce",
    description:
      "Employees can use personal devices without mingling personal and corporate data. Contextual policies isolate work resources, check device health, and shut off risky actions like copy or screenshot.",
    callout: "MDM optional—controls travel with the session.",
    highlights: [
      "Separate personal browsing from corporate sessions.",
      "Device posture checks trigger view-only mode.",
      "Auto wipe local data when sessions end.",
    ],
    stats: [
      { value: "85%", label: "organizations enabling BYOD", source: sourceLinks.cisco },
      { value: "$350", label: "annual savings per BYOD user", source: sourceLinks.cisco },
    ],
    dual: [
      {
        title: "Employee-Owned Phones",
        content:
          "Workers stay productive on their own devices without exposing data.",
      },
      {
        title: "Security Teams",
        content:
          "Policies and logs enforce compliance without MDM friction.",
      },
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
                {industry.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {industry.description}
              </p>

              {industry.callout && (
                <div className="mt-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                  {industry.callout}
                </div>
              )}

              <ul className="mt-6 list-disc pl-5 space-y-2 text-gray-600 text-sm sm:text-base">
                {industry.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {industry.stats.map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border rounded-lg p-4 text-center shadow-sm"
                  >
                    <div className="text-2xl font-semibold text-gray-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                    <a
                      href={stat.source}
                      className="mt-2 inline-block text-xs text-blue-600"
                    >
                      Source
                    </a>
                  </div>
                ))}
              </div>

              {industry.dual && (
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                  {industry.dual.map((card, i) => (
                    <div key={i} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-medium text-gray-900 mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-600">{card.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  )
}

