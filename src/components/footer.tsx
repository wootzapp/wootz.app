import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1a0a24] py-8 md:py-12 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="mb-4 font-medium text-white">Wootzapp Mobile Browser</h4>
            <p className="mb-4 text-sm leading-relaxed text-white/80">
              The enterprise browser for people on the move. Zero-trust access, built-in DLP, and compliance on
              Android.
            </p>
            <div className="flex space-x-4 text-xs text-white/70">
              <span>Enterprise-grade</span>
              <span>SOC 2</span>
              <span>24/7</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">Product</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/#overview" className="hover:text-white">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-white">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-white">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/eula" className="hover:text-white">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/data-transfer" className="hover:text-white">
                  Data Transfer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/future-of-enterprise-browsers"
                  className="hover:text-white"
                >
                  Future of Enterprise Browsers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">Industries</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/industries#healthcare" className="hover:text-white">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#higher-education" className="hover:text-white">
                  Higher Education
                </Link>
              </li>
              <li>
                <Link href="/industries#financial-services" className="hover:text-white">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries#third-party-contractors" className="hover:text-white">
                  3rd-Party Contractors
                </Link>
              </li>
              <li>
                <Link href="/industries#byod-workforce" className="hover:text-white">
                  BYOD Workforce
                </Link>
              </li>
              <li>
                <Link href="/industries#saas-web-apps" className="hover:text-white">
                  SaaS & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/transport-eld" className="hover:text-white">
                  Transport ELD
                </Link>
              </li>
              <li>
                <Link href="/data-labeling" className="hover:text-white">
                  Data Labeling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-medium text-white">Tech</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link href="/tech" className="hover:text-white">
                  Enterprise Browser Tech
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-white">
                  Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-white/70">© 2024 Wootzapp Mobile Browser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
