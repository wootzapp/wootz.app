import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="font-medium text-gray-900 mb-4">Wootzapp Mobile Browser</h4>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The enterprise browser for people on the move. Zero-trust access, built-in DLP, and compliance on
              Android.
            </p>
            <div className="flex space-x-4 text-xs text-gray-500">
              <span>99.9%</span>
              <span>SOC 2</span>
              <span>24/7</span>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/#overview" className="hover:text-gray-900">
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#security" className="hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-gray-900">
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/eula" className="hover:text-gray-900">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/data-transfer" className="hover:text-gray-900">
                  Data Transfer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-900">
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/future-of-enterprise-browsers"
                  className="hover:text-gray-900"
                >
                  Future of Enterprise Browsers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Industries</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/industries#healthcare" className="hover:text-gray-900">
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#higher-education" className="hover:text-gray-900">
                  Higher Education
                </Link>
              </li>
              <li>
                <Link href="/industries#financial-services" className="hover:text-gray-900">
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries#third-party-contractors" className="hover:text-gray-900">
                  3rd-Party Contractors
                </Link>
              </li>
              <li>
                <Link href="/industries#byod-workforce" className="hover:text-gray-900">
                  BYOD Workforce
                </Link>
              </li>
              <li>
                <Link href="/industries#saas-web-apps" className="hover:text-gray-900">
                  SaaS & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/transport-eld" className="hover:text-gray-900">
                  Transport ELD
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Tech</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/tech" className="hover:text-gray-900">
                  Enterprise Browser Tech
                </Link>
              </li>
              <li>
                <Link href="/comparison" className="hover:text-gray-900">
                  Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-xs text-gray-500">© 2024 Wootzapp Mobile Browser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
