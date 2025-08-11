import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <section className="py-12 sm:py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-900 mb-6">
              Future of Enterprise Browsers
            </h1>
            <div className="space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
              <p className="text-gray-500">
                Insights from Gartner&apos;s research and industry analysis on secure enterprise browsers.
              </p>
              <p>
                Gartner forecasts that by 2028, 25% of organizations will use secure enterprise browsers to
                enhance remote access and endpoint security.<sup>[1]</sup> These browsers move security controls to
                the point of interaction with SaaS and web apps, forming a foundation for Zero Trust strategies.
              </p>
              <p>
                Industry research also finds that enterprise browsers can replace costly virtual desktop
                infrastructure while preserving visibility and control for distributed workforces.<sup>[2]</sup>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Provide unprecedented insight into browser activity, letting security teams monitor clicks,
                  keystrokes, and application workflows without intrusive network inspection.<sup>[3]</sup>
                </li>
                <li>
                  Reduce reliance on legacy VDI, delivering dramatic cost savings and a better user experience for
                  contractors and BYOD users.<sup>[2]</sup>
                </li>
                <li>Embed data loss prevention and remote session isolation directly in the browsing layer.</li>
                <li>Integrate with identity, CASB, and endpoint tools to streamline policy enforcement.</li>
              </ul>
              <p>
                With growing analyst expectations and tangible operational benefits, enterprise browsers are emerging
                as a viable foundation for modern workforce security strategies.
              </p>
              <p className="text-xs text-gray-400 mt-8 space-y-1">
                [1] Gartner Press Release, &quot;Gartner Predicts 25% of Organizations Will Use Secure Enterprise Browsers to Enhance Remote Access and Endpoint Security by 2028,&quot; April 29, 2025.<br />
                [2] &quot;The Enterprise Browser Buyers Guide,&quot; 2024, on VDI cost savings.<br />
                [3] &quot;The Enterprise Browser Buyers Guide,&quot; 2024, on visibility into browser activity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
