"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-white/10 bg-[#080208]/95 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Wootzapp Logo"
                width={32}
                height={20}
                className="h-5"
              />
              <span className="text-lg md:text-xl font-medium text-white">
                Wootzapp Mobile Browser
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/industries" className="text-white/80 hover:text-white text-sm">
                Industries
              </Link>
              <Link
                href="/future-of-enterprise-browsers"
                className="text-white/80 hover:text-white text-sm"
              >
                Enterprise Browser Research
              </Link>
              <Link href="/genai" className="text-white/80 hover:text-white text-sm">
                GenAI
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link
              href="#"
              className="hidden text-sm text-white/80 hover:text-white sm:block"
            >
              Sign In
            </Link>
            <Button
              asChild
              className="bg-black hover:bg-gray-800 text-white px-3 md:px-4 py-2 text-sm"
            >
              <a
                href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="text-white/80 hover:text-white md:hidden"
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
          className="md:hidden border-t border-white/10 bg-[#09010a]"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            <li>
              <Link
                href="/industries"
                className="block py-2 text-white/85 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/future-of-enterprise-browsers"
                className="block py-2 text-white/85 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                Enterprise Browser Research
              </Link>
            </li>
            <li>
              <Link
                href="/genai"
                className="block py-2 text-white/85 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                GenAI
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-white/85 hover:text-white"
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
