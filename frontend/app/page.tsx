import Image from "next/image"
import Link from "next/link"
import {
  Shield,
  Users,
  Activity,
  Clock,
  FileText,
  ChevronRight,
  BarChart3,
  MapPin,
  Eye,
  AlertTriangle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommandMetrics from "@/components/home/command-metrics"
import FeatureCard from "@/components/home/feature-card"
import PersonnelPreview from "@/components/home/personnel-preview"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-zinc-900 relative">
      {/* Background tactical grid */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Animated security scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-px w-full bg-olive-500/50 absolute top-1/3 animate-scan"></div>
        <div className="h-px w-full bg-red-500/30 absolute top-2/3 animate-scan-reverse"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-zinc-800/80 border-b border-zinc-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 bg-zinc-800/80 p-2 border-l-4 border-olive-600">
              <Shield className="h-8 w-8 text-olive-500" />
              <div>
                <span className="font-bold text-xl tracking-tight text-zinc-100">TACTICAL DB</span>
                <div className="text-[10px] text-zinc-500 font-mono">COMMAND & CONTROL SYSTEM</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="#features"
                className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider font-mono"
              >
                Capabilities
              </Link>
              <Link
                href="#command"
                className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider font-mono"
              >
                Command Center
              </Link>
              <Link
                href="#personnel"
                className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider font-mono"
              >
                Personnel
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Link href="/login">
                <Button
                  variant="outline"
                  className="h-9 border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 font-mono text-xs"
                >
                  ACCESS SYSTEM
                </Button>
              </Link>
              <Link href="/register">
                <Button className="h-9 bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono text-xs">
                  REQUEST ACCESS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-zinc-800/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-sm">
                  <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse mr-2"></div>
                  <span className="text-xs text-zinc-400 font-mono">SECURITY CLEARANCE ACTIVE</span>
                </div>

                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-zinc-100 border-l-4 border-olive-600 pl-4">
                    COMMAND & CONTROL
                  </h1>
                  <p className="mt-2 text-xl text-zinc-300 max-w-2xl">
                    Tactical personnel management system for section commanders
                  </p>
                </div>

                <div className="bg-zinc-800/70 border border-zinc-700 p-4 max-w-2xl">
                  <div className="font-mono text-xs text-zinc-500 mb-2 flex items-center gap-2">
                    <AlertTriangle className="h-3 w-3 text-amber-500" />
                    MISSION BRIEFING
                  </div>
                  <p className="text-zinc-300">
                    This tactical system provides section commanders with real-time oversight of personnel activities,
                    progress tracking, and critical information management. Maintain complete situational awareness of
                    your unit's operations at all times, ensuring mission readiness and operational efficiency.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/login">
                    <Button className="bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono">
                      ACCESS COMMAND CENTER
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button
                      variant="outline"
                      className="border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 font-mono"
                    >
                      VIEW CAPABILITIES
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono">
                  <Clock className="h-3 w-3" />
                  <span>SYSTEM UPTIME: 99.8% | LAST UPDATED: {new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex-1 relative">
                <div className="absolute -inset-1">
                  <div className="w-full h-full mx-auto opacity-30 blur-sm filter bg-gradient-to-r from-olive-600 via-transparent to-olive-600"></div>
                </div>
                <div className="relative bg-zinc-800/70 border border-zinc-700 p-6">
                  <CommandMetrics />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 bg-zinc-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-sm mb-4">
                <span className="text-xs text-zinc-400 font-mono">TACTICAL CAPABILITIES</span>
              </div>
              <h2 className="text-3xl font-bold text-zinc-100">COMMAND FUNCTIONS</h2>
              <div className="mt-2 h-1 w-20 bg-olive-600 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Eye />}
                title="REAL-TIME MONITORING"
                description="Maintain constant awareness of personnel activities and locations. Track assignments and operational status in real-time."
              />
              <FeatureCard
                icon={<Activity />}
                title="PERFORMANCE TRACKING"
                description="Monitor individual and unit performance metrics. Identify trends and areas requiring command attention."
              />
              <FeatureCard
                icon={<Users />}
                title="PERSONNEL MANAGEMENT"
                description="Comprehensive personnel records and qualification tracking. Manage assignments and duty rotations efficiently."
              />
              <FeatureCard
                icon={<BarChart3 />}
                title="ANALYTICS & REPORTING"
                description="Generate detailed reports on unit readiness and performance. Data-driven decision support for command staff."
              />
              <FeatureCard
                icon={<MapPin />}
                title="LOCATION TRACKING"
                description="Monitor personnel deployment and positioning. Ensure optimal distribution of resources across operational areas."
              />
              <FeatureCard
                icon={<FileText />}
                title="DOCUMENTATION"
                description="Centralized repository for orders, reports, and personnel files. Secure, classified information management."
              />
            </div>
          </div>
        </section>

        {/* Command Center Preview */}
        <section id="command" className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-6 order-2 lg:order-1">
                <div className="inline-flex items-center px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-sm">
                  <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse mr-2"></div>
                  <span className="text-xs text-zinc-400 font-mono">COMMAND INTERFACE</span>
                </div>

                <h2 className="text-3xl font-bold text-zinc-100 border-l-4 border-olive-600 pl-4">
                  TOTAL SITUATIONAL AWARENESS
                </h2>

                <div className="bg-zinc-800/70 border border-zinc-700 p-4">
                  <p className="text-zinc-300">
                    The Command Center provides section commanders with a comprehensive overview of all personnel
                    activities and status. Monitor your team's operations in real-time, track progress on assigned
                    tasks, and maintain complete control over your unit's activities.
                  </p>
                </div>

                <ul className="space-y-3">
                  {[
                    "Real-time activity monitoring dashboard",
                    "Personnel status and location tracking",
                    "Task assignment and completion metrics",
                    "Performance analytics and trend identification",
                    "Secure communications and order dissemination",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-sm bg-olive-700/30 border border-olive-600 flex items-center justify-center mt-0.5 mr-3">
                        <div className="h-1.5 w-1.5 bg-olive-500"></div>
                      </div>
                      <span className="text-zinc-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/login">
                  <Button className="bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono">
                    ACCESS COMMAND CENTER
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <div className="flex-1 order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute -inset-1">
                    <div className="w-full h-full mx-auto opacity-30 blur-sm filter bg-gradient-to-r from-olive-600 via-transparent to-olive-600"></div>
                  </div>
                  <div className="relative bg-zinc-800/70 border border-zinc-700 p-2">
                    <div className="aspect-video bg-zinc-900 relative overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Command Center Interface"
                        width={800}
                        height={600}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <div className="text-xs text-zinc-500 font-mono mb-1">COMMAND INTERFACE PREVIEW</div>
                        <div className="h-1 w-full bg-zinc-800 mb-2">
                          <div className="h-1 bg-olive-500 w-3/4"></div>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-zinc-400 font-mono">SECURITY LEVEL: ALPHA</div>
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
                            <div className="text-xs text-green-500 font-mono">LIVE</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personnel Preview */}
        <section id="personnel" className="py-16 bg-zinc-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-sm mb-4">
                <span className="text-xs text-zinc-400 font-mono">PERSONNEL OVERSIGHT</span>
              </div>
              <h2 className="text-3xl font-bold text-zinc-100">UNIT MANAGEMENT</h2>
              <div className="mt-2 h-1 w-20 bg-olive-600 mx-auto"></div>
              <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
                Maintain complete visibility of your personnel's activities, qualifications, and status at all times.
                The section commander's ultimate tool for effective unit management.
              </p>
            </div>

            <PersonnelPreview />

            <div className="mt-12 text-center">
              <Link href="/register">
                <Button className="bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono">
                  REQUEST COMMAND ACCESS
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-zinc-800/50"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-sm mb-6">
                <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse mr-2"></div>
                <span className="text-xs text-zinc-400 font-mono">SECURE ACCESS REQUIRED</span>
              </div>

              <h2 className="text-3xl font-bold text-zinc-100">TAKE COMMAND OF YOUR UNIT</h2>
              <p className="mt-4 text-zinc-300">
                Gain complete visibility and control over your personnel. Monitor activities, track progress, and
                maintain operational readiness at all times. The ultimate command tool for section leaders.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/login">
                  <Button className="bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono">
                    ACCESS COMMAND CENTER
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:bg-zinc-700 hover:text-zinc-100 font-mono"
                  >
                    REQUEST ACCESS
                  </Button>
                </Link>
              </div>

              <div className="mt-8 p-4 border border-zinc-700 bg-zinc-800/50 inline-block">
                <div className="text-xs text-zinc-500 font-mono mb-1">SECURITY NOTICE</div>
                <p className="text-xs text-zinc-400">
                  This system contains classified military information. Unauthorized access is prohibited. All
                  activities are monitored and recorded in accordance with Military Directive 31-27B.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-800 border-t border-zinc-700 py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-olive-500" />
              <div>
                <span className="font-bold text-lg tracking-tight text-zinc-100">TACTICAL DB</span>
                <div className="text-[10px] text-zinc-500 font-mono">COMMAND & CONTROL SYSTEM</div>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-xs text-zinc-500 font-mono">SECURITY LEVEL: COMMAND ACCESS</span>
              <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between">
            <div className="text-zinc-500 text-xs mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Military Command Systems | All Rights Reserved
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-zinc-500">
              <Link href="#" className="hover:text-zinc-300">
                Security Policy
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Terms of Use
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Privacy
              </Link>
              <Link href="#" className="hover:text-zinc-300">
                Contact Command
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
