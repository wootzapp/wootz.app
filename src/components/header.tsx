"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = "text-sm transition-colors whitespace-nowrap text-muted-foreground hover:text-foreground";
  const mobileLinkClass = "block py-2 transition-colors text-muted-foreground hover:text-foreground";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4 md:space-x-8">
            <Link href="/" className="flex min-w-0 items-center gap-2">
              <Image
                src="/logo.png"
                alt="Wootzapp Logo"
                width={32}
                height={20}
                className="h-5"
              />
              <span className="min-w-0 break-keep text-sm font-semibold leading-tight text-foreground sm:text-base md:text-xl">
                Wootzapp
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/industries" className={navLinkClass}>
                Industries
              </Link>
              <Link
                href="/future-of-enterprise-browsers"
                className={navLinkClass}
              >
                Research
              </Link>
              <Link href="/genai" className={navLinkClass}>
                GenAI
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-4">
              <Link href="#" className={navLinkClass}>
                Sign In
              </Link>
              <Button asChild className="bg-primary text-primary-foreground shadow-[0_0_10px_theme(colors.primary)] hover:bg-primary/90">
                <a
                  href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
            <button
              onClick={() => setIsMenuOpen((open) => !open)}
              className="sm:hidden text-muted-foreground hover:text-foreground"
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
          className="sm:hidden border-t border-border bg-background"
        >
          <ul className="flex flex-col space-y-1 px-4 py-3">
            <li>
              <Link
                href="/industries"
                className={mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/future-of-enterprise-browsers"
                className={mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
            </li>
            <li>
              <Link
                href="/genai"
                className={mobileLinkClass}
                onClick={() => setIsMenuOpen(false)}
              >
                GenAI
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={mobileLinkClass}
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
