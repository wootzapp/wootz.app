"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeaderProps = {
  variant?: "light" | "dark";
};

export default function Header({ variant = "dark" }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLight = variant === "light";

  const navLinkClass = cn(
    "text-sm transition-colors whitespace-nowrap",
    isLight ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
  );

  const mobileLinkClass = cn(
    "block py-2 transition-colors",
    isLight ? "text-slate-700 hover:text-slate-900" : "text-white/85 hover:text-white"
  );

  return (
    <header
      className={cn(
        "relative border-b backdrop-blur",
        isLight ? "border-black/10 bg-white/90" : "border-white/10 bg-[#080208]/95"
      )}
    >
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
              <span
                className={cn(
                  "min-w-0 break-keep text-sm font-semibold leading-tight sm:text-base md:text-xl",
                  isLight ? "text-slate-900" : "text-white"
                )}
              >
                Wootzapp GenAI Enterprise Browser
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
                Enterprise Browser Research
              </Link>
              <Link href="/genai" className={navLinkClass}>
                GenAI
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Button
              asChild
              className="bg-black px-3 py-2 text-sm text-white hover:bg-gray-800 md:px-4 sm:hidden"
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
              className={cn(
                "transition-colors",
                isLight ? "text-slate-700 hover:text-slate-900" : "text-white/80 hover:text-white"
              )}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden sm:flex items-center pr-4 sm:pr-6 lg:pr-8">
        <div className="pointer-events-auto flex items-center space-x-2 md:space-x-4">
          <Link
            href="#"
            className={cn(
              "text-sm transition-colors",
              isLight ? "text-slate-600 hover:text-slate-900" : "text-white/80 hover:text-white"
            )}
          >
            Sign In
          </Link>
          <Button
            asChild
            className="bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
          >
            <a
              href="https://calendar.app.google/UCdRbHAHJYTwUEgF6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className={cn(
            "md:hidden border-t",
            isLight ? "border-black/10 bg-white/95" : "border-white/10 bg-[#09010a]"
          )}
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
                Enterprise Browser Research
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
