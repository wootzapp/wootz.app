import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link href="/genai" className="text-gray-600 hover:text-gray-900 text-sm">
                GenAI
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm hidden sm:block"
            >
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
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="md:hidden text-gray-600 hover:text-gray-900"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden border-t border-gray-100 bg-white"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            <li>
              <Link
                href="/industries"
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/future-of-enterprise-browsers"
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Enterprise Browser Research
              </Link>
            </li>
            <li>
              <Link
                href="/genai"
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                GenAI
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-gray-700 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
