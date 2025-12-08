"use client"
import { Button } from "@/components/ui/button"
import { Code, GitBranch, ExternalLink } from "lucide-react"
import Link from "next/link"

export function OpenSourceShowcase() {
  const commands = [
    {
      cmd: "git clone https://github.com/wootzapp/wootz-browser.git",
      output: [
        "Cloning into 'wootz-browser'...",
        "✓ World's only open-source enterprise browser",
        "✓ Zero vendor lock-in, full transparency",
      ],
    },
    {
      cmd: "cat README.md | grep -i security",
      output: [
        "🔒 Enterprise-grade DLP built-in",
        "🛡️ Zero-trust architecture ready",
        "🔍 Every line of code auditable",
      ],
    },
    {
      cmd: "run build --production",
      output: [
        "Building enterprise browser...",
        "✓ Hardened Chromium base",
        "✓ Mobile-first security policies",
        "✓ Ready for production deployment",
      ],
    },
  ]

  return (
    <section className="relative bg-gray-900 section-py-sm text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="relative container-stripe">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="overflow-hidden rounded-lg border border-gray-700 bg-black shadow-lg">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-800 bg-gray-900/60 px-3 py-2.5">
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                </div>
                <span className="font-mono text-[11px] text-gray-400">wootz-browser</span>
              </div>
              <div className="hidden items-center gap-2 font-mono text-[10px] text-gray-500 sm:flex">
                <GitBranch className="h-3 w-3" /> main
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              </div>
            </div>
            <div className="space-y-4 overflow-x-auto px-4 py-5 font-mono text-[13px] text-gray-200">
              <p className="text-[11px] text-gray-500">developer@enterprise:~$ # Explore the world&apos;s only open-source enterprise browser</p>
              {commands.map((command) => (
                <div key={command.cmd} className="space-y-1.5">
                  <div className="text-red-400">
                    <span className="text-red-500">$</span> {command.cmd}
                  </div>
                  <div className="space-y-0.5 border-l-2 border-red-800/60 bg-gray-900/40 px-3 py-2 text-[11px] text-gray-300">
                    {command.output.map((line) => (
                      <div key={line}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Link href="https://github.com/wootzapp/wootz-browser" target="_blank" className="inline-flex items-center gap-2 text-[13px] font-medium text-red-400 hover:text-red-300">
                <GitBranch className="h-3.5 w-3.5" /> wootzapp/wootz-browser
              </Link>
              <p className="text-[13px] leading-relaxed text-gray-300">
                The world&apos;s only open-source enterprise browser. Built on hardened Chromium with enterprise security,
                mobile-first design, and zero vendor lock-in.
              </p>
            </div>

            <div className="grid gap-3 rounded-lg border border-gray-700 bg-black/40 p-4 text-[13px] text-gray-200 sm:grid-cols-2">
              <div>
                <div className="font-semibold text-white">🔓 Open Source</div>
                <div className="text-[11px] text-gray-400">Audit every line</div>
              </div>
              <div>
                <div className="font-semibold text-white">🏢 Enterprise</div>
                <div className="text-[11px] text-gray-400">Production ready</div>
              </div>
              <div>
                <div className="font-semibold text-white">📱 Mobile First</div>
                <div className="text-[11px] text-gray-400">Android native</div>
              </div>
              <div>
                <div className="font-semibold text-white">🛡️ Zero Trust</div>
                <div className="text-[11px] text-gray-400">Built-in DLP</div>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <Link href="https://github.com/wootzapp/wootz-browser" target="_blank" className="flex-1">
                <Button size="lg" className="w-full justify-center border border-red-500 bg-red-500 text-white hover:bg-red-600">
                  <Code className="mr-2 h-4 w-4" /> View Source
                </Button>
              </Link>
              <Link href="https://github.com/wootzapp/wootz-browser/fork" target="_blank" className="flex-1">
                <Button size="lg" variant="outline" className="w-full justify-center border border-gray-600 text-white hover:bg-gray-800">
                  <ExternalLink className="mr-2 h-4 w-4" /> Fork the Code
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
