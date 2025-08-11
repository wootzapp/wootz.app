import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                <Link href="#" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Enterprise
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Privacy
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
