import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

export function ComparisonTable() {
  const comparisonData = [
    {
      category: "Infrastructure & Setup",
      vpn: { text: "Complex gateway hardware, split tunneling configuration, ongoing maintenance", status: "bad" },
      vdi: { text: "Server farms, virtualization layers, storage infrastructure, endless tuning", status: "bad" },
      sase: { text: "Cloud-based but requires multiple vendor integrations and policy coordination", status: "warning" },
      enterprise_browser: { text: "Simple app installation, cloud-managed policies, zero infrastructure", status: "good" },
    },
    {
      category: "User Experience",
      vpn: { text: "Connection delays, 'Is the tunnel up?' frustrations, bandwidth bottlenecks", status: "bad" },
      vdi: { text: "Pixel lag, session drops, poor mobile experience, latency issues", status: "bad" },
      sase: { text: "Better than VPN but still introduces latency and complexity", status: "warning" },
      enterprise_browser: { text: "Native Chromium speed, works on any device, seamless experience", status: "good" },
    },
    {
      category: "Security & Control",
      vpn: { text: "Opens entire network, no application-level controls, limited visibility", status: "bad" },
      vdi: { text: "Protects data center but blind to local copy/paste, limited mobile security", status: "warning" },
      sase: { text: "Good network security but lacks last-mile browser controls", status: "warning" },
      enterprise_browser: { text: "Last-mile DLP, contextual controls, complete visibility, zero-trust by design", status: "good" },
    },
    {
      category: "Deployment & Management",
      vpn: { text: "Complex client deployment, certificate management, ongoing troubleshooting", status: "bad" },
      vdi: { text: "Massive infrastructure deployment, specialized IT staff required", status: "bad" },
      sase: { text: "Cloud deployment but requires integration with existing security stack", status: "warning" },
      enterprise_browser: { text: "Minutes to deploy, single management console, no specialized training", status: "good" },
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "good":
        return <CheckCircle className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
      case "bad":
        return <XCircle className="w-6 h-6 text-red-400 opacity-80" />
      case "warning":
        return <AlertCircle className="w-6 h-6 text-amber-400 opacity-80" />
      default:
        return <Info className="w-6 h-6 text-muted-foreground" />
    }
  }

  return (
    <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="py-1 px-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-primary uppercase tracking-widest">
                Feature Breakdown
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                Solution Comparison
              </span>
            </h2>
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-8 rounded-full opacity-70" />
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans font-light">
              Built for the modern workplace, the <span className="text-white font-medium">Enterprise Browser</span> solves specific friction points and security gaps that legacy hardware and virtualized solutions simply can&apos;t address.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#130630]/40 backdrop-blur-xl shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] font-sans">
            {/* Glow behind the table */}
            <div className="absolute top-0 right-0 -z-10 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

            <div className="overflow-x-auto">
              <table className="w-full min-w-[1000px] border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-6 text-left font-bold text-lg text-white w-[15%] sticky left-0 bg-[#0B0326]/95 md:bg-transparent z-10">Category</th>
                    <th className="p-6 text-left font-semibold text-white/60 w-[20%]">VPN</th>
                    <th className="p-6 text-left font-semibold text-white/60 w-[20%]">VDI</th>
                    <th className="p-6 text-left font-semibold text-white/60 w-[20%]">SASE</th>
                    <th className="relative p-6 text-left w-[25%] overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 opacity-100" />
                      <div className="relative z-10 flex items-center gap-2">
                         <span className="font-bold text-xl text-white text-shadow-sm">Wootzapp</span>
                         <span className="px-2 py-0.5 rounded-full bg-primary text-[10px] font-bold text-white uppercase tracking-wider">Winner</span>
                      </div>
                      {/* Top highlight line */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary shadow-[0_0_10px_theme(colors.primary)]" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonData.map((row, index) => (
                    <tr key={index} className="group hover:bg-white/5 transition-colors duration-300">
                      <td className="p-6 font-bold text-white align-top sticky left-0 bg-[#0B0326] md:bg-transparent z-10 group-hover:bg-[#1a103c] md:group-hover:bg-transparent transition-colors">
                        {row.category}
                      </td>
                      <td className="p-6 text-sm text-muted-foreground align-top">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">{getStatusIcon(row.vpn.status)}</div>
                          <span className="leading-relaxed">{row.vpn.text}</span>
                        </div>
                      </td>
                      <td className="p-6 text-sm text-muted-foreground align-top">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">{getStatusIcon(row.vdi.status)}</div>
                          <span className="leading-relaxed">{row.vdi.text}</span>
                        </div>
                      </td>
                      <td className="p-6 text-sm text-muted-foreground align-top">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 shrink-0">{getStatusIcon(row.sase.status)}</div>
                          <span className="leading-relaxed">{row.sase.text}</span>
                        </div>
                      </td>
                      <td className={cn(
                        "p-6 text-sm align-top relative",
                        "bg-primary/5 group-hover:bg-primary/10 transition-colors duration-300"
                      )}>
                         {/* Side borders for the highlight column */}
                         <div className="absolute left-0 top-0 bottom-0 w-px bg-primary/20" />
                         <div className="absolute right-0 top-0 bottom-0 w-px bg-primary/20" />
                         
                        <div className="flex items-start gap-3 relative z-10">
                          <div className="mt-0.5 shrink-0">{getStatusIcon(row.enterprise_browser.status)}</div>
                          <span className="font-semibold text-white leading-relaxed shadow-black drop-shadow-md">{row.enterprise_browser.text}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  )
}
