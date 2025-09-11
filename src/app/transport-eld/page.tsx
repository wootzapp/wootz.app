import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { OpenSourceShowcase } from "@/components/open-source-showcase"

export default function TransportEldPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <OpenSourceShowcase />
      
      <main>
        {/* Hero */}
        <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm text-gray-500">Transport • Logistics • Warehousing</p>
            <h1 className="mt-2 text-pretty text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-gray-900">
              ELD compliance and VDI/SASE/MDM security implications
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              A mobile‑first playbook for securing driver ELD tablets, handhelds, and office/warehouse workstations with
              SASE, VDI/RDS/AVD, and MDM/UEM—complete with real deployments and measurable outcomes.
            </p>

          </div>
        </section>

        {/* Why secure device management */}
        <section id="why" className="w-full border-t scroll-mt-24 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-pretty text-gray-900">
              Why secure device management is non‑negotiable
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Ransomware & safety risks</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  ELDs and in‑cab tablets connect to logistics systems and vehicle data. Compromise can enable lateral
                  movement into back‑office apps and planning systems. FBI/CISA have warned operators to harden connected
                  devices.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">Regulatory & compliance gaps</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  The FMCSA ELD mandate emphasizes logging, not cybersecurity. Fleets must apply best‑practice controls
                  (policy enforcement, validation, monitoring) to meet internal and customer security requirements.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">End‑to‑end control & visibility</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  SASE consolidates Zero Trust access, secure web gateway, and threat inspection—improving performance and
                  reducing brittle VPN dependencies and hardware sprawl.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
                <h3 className="font-medium text-gray-900">Reduce risk via centralization</h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  VDI/RDS/AVD keeps sensitive data off endpoints, speeds patching, and standardizes policy enforcement. If
                  a kiosk is compromised, core systems remain insulated.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Driver-facing deployments (MDM + SASE) */}
        <section id="driver-mdm-sase" className="w-full border-t scroll-mt-24 py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-pretty text-gray-900">
              Who&apos;s already doing it: Driver‑facing MDM + SASE
            </h2>
            <p className="mt-4 text-gray-600">
              Examples of fleets using kiosk‑mode lockdown, UEM/MDM, and SASE to secure ELD tablets and handhelds.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Melher Transport (US)",
                  detail:
                    "Hexnode MDM on Android ELD tablets with kiosk‑mode; eliminated uncontrolled data usage and restricted devices to approved apps.",
                },
                {
                  name: "Melton Truck Lines (US)",
                  detail:
                    "1,500 Samsung tablets provisioned with SOTI MobiControl for centralized lockdown and configuration.",
                },
                {
                  name: "Schneider (US)",
                  detail:
                    "Samsung tablets + Knox Configure + PlatformScience; company‑owned devices removed BYOD reliance and reduced costs ~25%.",
                },
                {
                  name: "Werner Enterprises (US)",
                  detail:
                    "8,000+ rugged Samsung Tab Active devices via Knox + PlatformScience RPM; instant access to apps, no boot delays.",
                },
                {
                  name: "Autamarocchi (IT)",
                  detail:
                    "Scalefusion MDM to enroll and lock Android tablets to work apps—saving IT effort and boosting driver productivity.",
                },
                {
                  name: "Spedition Bork (DE)",
                  detail: "Cortado MDM configured ~450 devices in one day; kiosk‑mode phones allow only logistics apps.",
                },
                {
                  name: "PlatformScience RPM (multi‑fleet)",
                  detail:
                    "Transportation‑specific platform pairs Samsung rugged tablets with RPM for app delivery and sensor integration; managed >1B distraction‑free miles.",
                },
                {
                  name: "XPO Logistics (US)",
                  detail:
                    "Zscaler SASE across 300+ centers and ~20k handhelds; eliminated VPN failures and blocked threats in real time while cutting hardware costs.",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Office / Warehouse VDI */}
        <section id="office-vdi" className="w-full border-t scroll-mt-24 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-pretty text-gray-900">
              Desktop virtualization in logistics offices and warehouses
            </h2>
            <p className="mt-4 text-gray-600">
              Citrix / VMware Horizon / Microsoft RDS & AVD deployments that centralize IT, cut login times, and improve
              security.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Dachser Group (DE)", detail: "Citrix for 20k+ employees; centrally managed access at scale." },
                { name: "H.Essers (BE)", detail: "Citrix thin‑client model managed from HQ across 40+ sites." },
                { name: "MBS Logistics (DE)", detail: "Citrix XenApp; halved server footprint and ~30% energy savings." },
                {
                  name: "Neovia Logistics (US)",
                  detail: "Citrix VDI + FSLogix; ~15s logins, ~125k user‑hours saved/year; ~25% server reduction.",
                },
                { name: "Verhoek Europe (NL)", detail: "RDS + small VMware pool with Liquit; logins cut to seconds." },
                { name: "Abakus Logistics (PL)", detail: "AVD with MFA; cloud‑scale without new on‑prem servers." },
                {
                  name: "BCA Logistics (UK)",
                  detail: "RDS + Parallels RAS; HTML5 desktops, lower TCO, and BYOD flexibility.",
                },
                {
                  name: "Denholm Group (UK)",
                  detail: "Migrated to AVD; Azure MFA, auto‑scaling; ~$900/month savings and major admin time recovered.",
                },
              ].map((item) => (
                <article
                  key={item.name}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow h-full"
                >
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Technical ROI */}
        <section id="roi" className="w-full border-t scroll-mt-24 py-12 md:py-16 lg:py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-pretty text-gray-900">
              Technical ROI: what you gain
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">MDM / UEM</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Enforce kiosk‑mode, app allow‑lists, remote wipe, posture controls.</li>
                  <li>Block unauthorized installs; apply geofencing and usage monitoring.</li>
                  <li>Stop data burn; ensure only required apps run.</li>
                </ul>
              </article>
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">SASE / Zero Trust</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Inline inspection and SWG for mobile endpoints; remove brittle VPNs.</li>
                  <li>Least‑privilege access with continuous verification.</li>
                  <li>Threat blocking and consistent policy on road and in office.</li>
                </ul>
              </article>
              <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-medium text-gray-900">VDI / RDS / AVD</h3>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  <li>Data stays in the DC/cloud; minimal endpoint risk.</li>
                  <li>Fast onboarding; standardized images and patching.</li>
                  <li>Measured outcomes: faster logins, reduced infra costs.</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* FAQ + CTA */}
        <section id="faq" className="w-full border-t scroll-mt-24 py-12 md:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-pretty text-gray-900">FAQ</h2>
            <div className="mt-8 grid grid-cols-1 gap-6">
              <details className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="font-medium cursor-pointer text-base sm:text-lg text-gray-900">
                  Do fleets deploy full VDI on in‑cab tablets?
                </summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  We found no documented cases of VDI on driver tablets; fleets standardize on mobile apps with MDM/UEM
                  and SASE for network security. VDI is common for office/warehouse users.
                </p>
              </details>
              <details className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <summary className="font-medium cursor-pointer text-base sm:text-lg text-gray-900">Will this replace our VPN?</summary>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Many fleets reduce or retire legacy VPNs as SASE/SWG + Zero Trust app access come online—improving
                  reliability and removing hardware sprawl.
                </p>
              </details>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                className="inline-flex items-center rounded-md bg-black text-white px-6 py-3 text-sm font-medium hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-colors"
              >
                Talk to a trucking security specialist
              </Link>
              <a
                href="#driver-mdm-sase"
                className="inline-flex items-center rounded-md border border-gray-200 px-6 py-3 text-sm font-medium hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-black transition-colors"
              >
                See who&apos;s already doing this
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}