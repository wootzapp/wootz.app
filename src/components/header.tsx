import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="text-lg md:text-xl font-medium text-gray-900">
              Wootzapp Mobile Browser
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/industries" className="text-gray-600 hover:text-gray-900 text-sm">
                Industries
              </Link>
              <Link
                href="/future-of-enterprise-browsers"
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                Enterprise Browser Research
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900 text-sm hidden sm:block">
              Sign In
            </Link>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-3 md:px-4 py-2 text-sm"
            >
              <a
                href="https://calendar.app.google/3QyXM9d359yN6aCu8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
