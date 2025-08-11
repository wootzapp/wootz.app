import Header from "@/components/header"
import Footer from "@/components/footer"

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    content:
      "Clinicians access records, charts, and diagnostic tools with fewer logins and stronger patient privacy. Browser-based controls allow secure telehealth and on-site workflows without extra agents.",
  },
  {
    id: "higher-education",
    title: "Higher Education",
    content:
      "Faculty, students, and staff reach campus systems from anywhere while protecting research and student data. Policies follow users across labs, dorms, and study-abroad connections.",
  },
  {
    id: "financial-services",
    title: "Financial Services",
    content:
      "Advisors and traders interact with portfolios and banking portals in a hardened environment that enforces compliance and prevents data exfiltration. Session recording and DLP keep regulators happy.",
  },
  {
    id: "third-party-contractors",
    title: "3rd-Party Contractors",
    content:
      "Temporary staff and partners get instant, least-privilege access through the browser. No need to ship laptops—permissions, logging, and watermarking travel with the session.",
  },
  {
    id: "byod-workforce",
    title: "BYOD Workforce",
    content:
      "Employees can use personal devices without mingling personal and corporate data. Contextual policies isolate work resources, check device health, and shut off risky actions like copy or screenshot.",
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
                {industry.content}
              </p>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  )
}

