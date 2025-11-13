import Link from "next/link";


export default function Footer() {
  const linkClass = "transition-colors text-muted-foreground hover:text-primary";

  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-background via-background/80 to-secondary/20 py-8 text-sm md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h4 className="mb-4 font-semibold text-foreground">
              Wootzapp
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              The enterprise browser for secure, modern work.
            </p>
            <div className="flex space-x-4 text-xs text-muted-foreground/50">
              <span>Enterprise-grade</span>
              <span>SOC 2</span>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
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
            <h4 className="mb-4 font-semibold text-foreground">
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
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              Industries
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/industries#healthcare" className={linkClass}>
                  Healthcare
                </Link>
              </li>
              <li>
                <Link href="/industries#financial-services" className={linkClass}>
                  Financial Services
                </Link>
              </li>
              <li>
                <Link href="/industries#byod-workforce" className={linkClass}>
                  BYOD Workforce
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-foreground">
              Resources
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tech" className={linkClass}>
                  Technology
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

        <div className="mt-8 border-t border-border/40 pt-8 text-center text-xs text-muted-foreground/50">
          <p>© 2024 Wootzapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
