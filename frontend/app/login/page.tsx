import Image from "next/image"
import { Shield, Lock, AlertTriangle } from "lucide-react"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Background tactical grid */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Animated security scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-px w-full bg-olive-500/50 absolute top-1/2 animate-scan"></div>
      </div>

      {/* Left side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 relative z-10">
        <div className="absolute top-0 left-0 w-full p-4 bg-red-900/20 border-b border-red-800/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-xs font-mono text-red-500">SECURE AREA</span>
          </div>
          <div className="text-xs font-mono text-zinc-500">
            {new Date().toLocaleTimeString("en-US", { hour12: false })} HRS
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="flex flex-col items-start space-y-6">
            <div className="flex items-center space-x-2 bg-zinc-800/80 p-2 border-l-4 border-olive-600">
              <Shield className="h-8 w-8 text-olive-500" />
              <div>
                <span className="font-bold text-xl tracking-tight text-zinc-100">TACTICAL DB</span>
                <div className="text-[10px] text-zinc-500 font-mono">MILITARY INTELLIGENCE DIVISION</div>
              </div>
            </div>

            <div className="space-y-2 w-full">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
                <h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl border-l-4 border-olive-600 pl-3">
                  SECURE ACCESS
                </h1>
              </div>
              <div className="bg-zinc-800/50 p-3 border border-zinc-700 text-sm text-zinc-400">
                <div className="font-mono text-xs text-zinc-500 mb-1">AUTHORIZATION REQUIRED</div>
                Enter your credentials to access the tactical database system.
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                  <div className="text-xs text-amber-500/80 font-mono">CLEARANCE LEVEL 3 REQUIRED</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="absolute -inset-1">
                <div className="w-full h-full mx-auto rotate-180 opacity-30 blur-sm filter bg-gradient-to-r from-olive-600 via-transparent to-olive-600"></div>
              </div>
              <div className="relative bg-zinc-800/80 border border-zinc-700 p-6">
                <LoginForm />
              </div>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dashed border-zinc-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-zinc-900 px-2 text-zinc-400 font-mono">SECURITY PROTOCOL</span>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-zinc-500">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <Lock className="h-3 w-3" />
                  <span className="font-mono">ENCRYPTED TRANSMISSION</span>
                </div>
                <div className="p-2 border border-zinc-800 bg-zinc-800/30">
                  <p className="font-mono">UNAUTHORIZED ACCESS WILL BE PROSECUTED UNDER MILITARY CODE 31-27B</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <div className="h-1 w-1 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="h-1 w-1 rounded-full bg-amber-500 animate-pulse delay-100"></div>
                    <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Military background"
              fill
              className="object-cover opacity-20"
            />
            <div className="z-10 p-8 text-center">
              <div className="relative">
                <div className="absolute -inset-1">
                  <div className="w-full h-full mx-auto opacity-30 blur-sm filter bg-gradient-to-r from-olive-600 via-transparent to-olive-600"></div>
                </div>
                <div className="relative">
                  <Shield className="h-20 w-20 text-olive-500 mx-auto mb-4" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-flex gap-2 items-center px-3 py-1 bg-zinc-800/50 border border-zinc-700 rounded-sm">
                  <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
                  <h2 className="text-2xl font-bold text-zinc-100 font-mono tracking-wider">TACTICAL DATABASE</h2>
                  <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
                </div>
                <p className="text-zinc-400 max-w-md mx-auto border-l-4 border-r-4 border-zinc-700 px-4 py-2 bg-zinc-800/30">
                  CLASSIFIED MILITARY INTELLIGENCE SYSTEM
                  <br />
                  <span className="text-xs text-zinc-500">AUTHORIZED PERSONNEL ONLY</span>
                </p>
                <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
                  <div className="border border-zinc-700 p-2 bg-zinc-800/30">
                    <div className="text-[10px] text-zinc-500 font-mono">SECURITY LEVEL</div>
                    <div className="text-olive-500 font-mono">ALPHA</div>
                  </div>
                  <div className="border border-zinc-700 p-2 bg-zinc-800/30">
                    <div className="text-[10px] text-zinc-500 font-mono">ENCRYPTION</div>
                    <div className="text-olive-500 font-mono">ACTIVE</div>
                  </div>
                  <div className="border border-zinc-700 p-2 bg-zinc-800/30">
                    <div className="text-[10px] text-zinc-500 font-mono">SYSTEM STATUS</div>
                    <div className="text-olive-500 font-mono">ONLINE</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Radar animation */}
          <div className="absolute bottom-10 right-10 w-40 h-40 opacity-20">
            <div className="w-full h-full rounded-full border-2 border-olive-500 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-olive-500/50"></div>
                <div className="w-1/2 h-1/2 rounded-full border border-olive-500/50"></div>
                <div className="w-1/4 h-1/4 rounded-full border border-olive-500/50"></div>
              </div>
              <div className="absolute top-0 left-0 bottom-0 right-0 origin-center">
                <div className="w-1/2 h-1 bg-gradient-to-r from-olive-500/80 to-transparent absolute top-1/2 left-1/2 origin-left animate-radar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
