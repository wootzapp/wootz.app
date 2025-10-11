import Link from "next/link";
import { cn } from "@/lib/utils";

type FooterProps = {
  variant?: "light" | "dark";
};

export default function Footer({ variant = "dark" }: FooterProps) {
  const isLight = variant === "light";

  const linkClass = cn(
    "transition-colors hover:text-rose-600",
    isLight ? "text-slate-600" : "text-white/80"
  );

  return (
    <footer
      className={cn(
        "border-t py-8 text-sm md:py-12",
        isLight
          ? "border-black/10 bg-[#f7f2f8] text-slate-800"
          : "border-white/10 bg-[#1a0a24] text-white"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h4
              className={cn(
                "mb-4 font-medium",
                isLight ? "text-slate-900" : "text-white"
              )}
            >
              Wootzapp Mobile Browser
            </h4>
            <p
              className={cn(
                "mb-4 text-sm leading-relaxed",
                isLight ? "text-slate-600" : "text-white/80"
              )}
            >
              The enterprise browser for people on the move. Zero-trust access, built-in DLP, and compliance on
              Android.
            </p>
            <div
              className={cn(
                "flex space-x-4 text-xs",
                isLight ? "text-slate-500" : "text-white/70"
              )}
            >
              <span>Enterprise-grade</span>
              <span>SOC 2</span>
              <span>24/7</span>
            </div>
          </div>

          <div>
            <h4
              className={cn(
                "mb-4 font-medium",
                isLight ? "text-slate-900" : "text-white"
              )}
            >
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#overview" className={linkClass}>
                  Overview
                </Link>
              </li>
              <li>
                <Link href="/#features" className={linkClass}>
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#security" className={linkClass}>
                  Security
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className={linkClass}>
                  Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={cn(
                "mb-4 font-medium",
                isLight ? "text-slate-900" : "text-white"
              )}
            >
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/eula" className={linkClass}>
                  EULA
                </Link>
              </li>
              <li>
                <Link href="/data-transfer" className={linkClass}>
                  Data Transfer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClass}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className={linkClass}>
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/future-of-enterprise-browsers"
                  className={linkClass}
                >
                  Future of Enterprise Browsers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={cn(
                "mb-4 font-medium",
                isLight ? "text-slate-900" : "text-white"
              )}
            >
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries#healthcare" className={linkClass}>
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#higher-education" className={linkClass}>
                  Higher Education
                </Link>
              </li>
              <li>
                <Link href="/industries#financial-services" className={linkClass}>
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries#third-party-contractors" className={linkClass}>
                  3rd-Party Contractors
                </Link>
              </li>
              <li>
                <Link href="/industries#byod-workforce" className={linkClass}>
                  BYOD Workforce
                </Link>
              </li>
              <li>
                <Link href="/industries#saas-web-apps" className={linkClass}>
                  SaaS & Web Apps
                </Link>
              </li>
              <li>
                <Link href="/transport-eld" className={linkClass}>
                  Transport ELD
                </Link>
              </li>
              <li>
                <Link href="/data-labeling" className={linkClass}>
                  Data Labeling
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className={cn(
                "mb-4 font-medium",
                isLight ? "text-slate-900" : "text-white"
              )}
            >
              Tech
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tech" className={linkClass}>
                  Enterprise Browser Tech
                </Link>
              </li>
              <li>
                <Link href="/comparison" className={linkClass}>
                  Comparison
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={cn(
            "mt-8 border-t pt-8 text-center text-xs",
            isLight ? "border-black/10 text-slate-500" : "border-white/10 text-white/70"
          )}
        >
          <p>© 2024 Wootzapp Mobile Browser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
