"use client"
import { Button } from "@/components/ui/button"
import { Terminal, Code, GitBranch, ExternalLink } from "lucide-react"
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
    <section className="py-6 md:py-8 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black rounded-lg border border-gray-700 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <Terminal className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-300 font-mono">wootz-browser</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-xs text-gray-400 font-mono">
                <GitBranch className="w-3 h-3" />
                <span>main</span>
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-0 min-h-[280px]">
              {/* Terminal Commands - Left Side */}
              <div className="bg-black p-4 space-y-4">
                <div className="text-green-400 font-mono text-xs mb-3">
                  developer@enterprise:~$ # Explore the world&apos;s only open-source enterprise browser
                </div>

                {commands.map((command, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="font-mono text-xs text-cyan-400">
                      <span className="text-green-400">$ </span>
                      {command.cmd}
                    </div>
                    <div className="ml-2 space-y-0.5">
                      {command.output.map((line, lineIdx) => (
                        <div key={lineIdx} className="text-gray-300 font-mono text-xs">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Info Panel - Right Side */}
              <div className="bg-gray-900 p-4 border-l border-gray-700 space-y-4">
                <div className="space-y-3">
                  {/* GitHub-style header */}
                  <div className="border-b border-gray-700 pb-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-white rounded-sm flex items-center justify-center">
                        <GitBranch className="w-2.5 h-2.5 text-black" />
                      </div>
                      <Link href="https://github.com/wootzapp/wootz-browser" target="_blank">
                        <span className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer font-mono text-sm">
                          wootzapp/wootz-browser
                        </span>
                      </Link>
                    </div>
                    <div className="flex items-center space-x-4 text-xs">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-400">Familiar Chromium-based source</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-400">⭐</span>
                        <span className="text-gray-300">Public</span>
                      </div>
                      <div className="text-gray-400">Updated now</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    The world&apos;s only open-source enterprise browser. Built on hardened Chromium with enterprise
                    security, mobile-first design, and zero vendor lock-in.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <div className="text-cyan-400 font-mono text-xs">🔓 Open Source</div>
                    <div className="text-gray-400 text-xs">Audit every line</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-cyan-400 font-mono text-xs">🏢 Enterprise</div>
                    <div className="text-gray-400 text-xs">Production ready</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-cyan-400 font-mono text-xs">📱 Mobile First</div>
                    <div className="text-gray-400 text-xs">Android native</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-cyan-400 font-mono text-xs">🛡️ Zero Trust</div>
                    <div className="text-gray-400 text-xs">Built-in DLP</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                  <Link href="https://github.com/wootzapp/wootz-browser" target="_blank" className="flex-1">
                    <Button className="w-full bg-white text-black hover:bg-blue-600 hover:text-white font-mono text-xs h-8 transition-all duration-200">
                      <Code className="w-3 h-3 mr-1" />
                      View Source
                    </Button>
                  </Link>
                  <Link href="https://github.com/wootzapp/wootz-browser/fork" target="_blank" className="flex-1">
                    <Button
                      variant="outline"
                      className="w-full border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 font-mono bg-transparent text-xs h-8"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Fork the Code
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}