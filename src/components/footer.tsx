import Link from "next/link";


export default function Footer() {
  const linkClass = "transition-colors text-[13px] text-muted-foreground hover:text-primary";

  return (
    <footer className="border-t border-border/40 bg-gradient-to-t from-background via-background/80 to-secondary/20 py-10 md:py-14">
      <div className="container-stripe">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <h4 className="mb-3 text-[15px] font-semibold text-foreground">
              Wootzapp
            </h4>
            <p className="mb-3 text-[13px] leading-relaxed text-muted-foreground">
              The enterprise browser for secure, modern work.
            </p>
            <div className="flex gap-3 text-[11px] text-muted-foreground/50">
              <span>Enterprise-grade</span>
              <span>SOC 2</span>
            </div>
          </div>

          <div>
            <h4 className="mb-3 text-[13px] font-semibold text-foreground">
              Product
            </h4>
            <ul className="space-y-1.5">
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
            <h4 className="mb-3 text-[13px] font-semibold text-foreground">
              Company
            </h4>
            <ul className="space-y-1.5">
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
            <h4 className="mb-3 text-[13px] font-semibold text-foreground">
              Industries
            </h4>
            <ul className="space-y-1.5">
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
            <h4 className="mb-3 text-[13px] font-semibold text-foreground">
              Resources
            </h4>
            <ul className="space-y-1.5">
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

        <div className="mt-8 border-t border-border/40 pt-6 text-center text-[11px] text-muted-foreground/50">
          <p>© 2024 Wootzapp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
