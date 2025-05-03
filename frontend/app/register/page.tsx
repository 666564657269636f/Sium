import Image from "next/image"
import { Shield, FileText, AlertTriangle, Lock } from "lucide-react"
import RegisterForm from "@/components/auth/register-form"

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen bg-zinc-900 relative overflow-hidden">
      {/* Background tactical grid */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-5"></div>

      {/* Animated security scan line */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="h-px w-full bg-olive-500/50 absolute top-1/3 animate-scan"></div>
        <div className="h-px w-full bg-red-500/30 absolute top-2/3 animate-scan-reverse"></div>
      </div>

      {/* Left side - Image */}
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-zinc-800">
          <div className="absolute inset-0 bg-gradient-to-l from-zinc-900 to-transparent z-10"></div>
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
                  <h2 className="text-2xl font-bold text-zinc-100 font-mono tracking-wider">PERSONNEL REGISTRY</h2>
                  <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
                </div>

                <div className="max-w-md mx-auto border border-zinc-700 bg-zinc-800/30 p-4">
                  <div className="text-xs text-zinc-500 font-mono mb-2 flex items-center gap-2">
                    <Lock className="h-3 w-3" />
                    SECURITY BRIEFING
                  </div>
                  <p className="text-zinc-400 text-sm">
                    All personnel must complete security verification and background checks before access is granted.
                    <br />
                    <br />
                    <span className="text-amber-500/80">WARNING:</span> Falsification of registration information is a
                    violation of Military Code 45-B and is punishable by court martial.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
                  <div className="border border-zinc-700 p-2 bg-zinc-800/30">
                    <div className="text-[10px] text-zinc-500 font-mono">CLEARANCE PROCESS</div>
                    <div className="text-olive-500 font-mono flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-olive-500 animate-pulse"></div>
                      ACTIVE
                    </div>
                  </div>
                  <div className="border border-zinc-700 p-2 bg-zinc-800/30">
                    <div className="text-[10px] text-zinc-500 font-mono">VERIFICATION REQUIRED</div>
                    <div className="text-olive-500 font-mono">LEVEL 2</div>
                  </div>
                </div>
              </div>

              {/* Military insignia/badges */}
              <div className="mt-8 grid grid-cols-3 gap-4 max-w-xs mx-auto">
                <div className="h-16 w-16 mx-auto border-2 border-zinc-700 rounded-full flex items-center justify-center">
                  <div className="h-10 w-10 bg-olive-700/50 rotate-45"></div>
                </div>
                <div className="h-16 w-16 mx-auto border-2 border-zinc-700 flex items-center justify-center">
                  <div className="h-10 w-10 border-2 border-olive-700/50 rounded-full"></div>
                </div>
                <div className="h-16 w-16 mx-auto border-2 border-zinc-700 rounded-full flex items-center justify-center">
                  <div className="h-10 w-2 bg-olive-700/50 mx-0.5"></div>
                  <div className="h-10 w-2 bg-olive-700/50 mx-0.5"></div>
                  <div className="h-10 w-2 bg-olive-700/50 mx-0.5"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Coordinates display */}
          <div className="absolute bottom-10 left-10 font-mono text-xs text-zinc-600">
            <div>LAT: 34°05'23"N</div>
            <div>LON: 118°24'12"W</div>
            <div className="mt-1 text-[10px]">CLASSIFIED LOCATION</div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 relative z-10">
        <div className="absolute top-0 left-0 w-full p-4 bg-red-900/20 border-b border-red-800/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-xs font-mono text-red-500">RESTRICTED ACCESS</span>
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
                  PERSONNEL INTAKE
                </h1>
              </div>
              <div className="bg-zinc-800/50 p-3 border border-zinc-700 text-sm text-zinc-400">
                <div className="font-mono text-xs text-zinc-500 mb-1">REGISTRATION PROTOCOL</div>
                Complete all fields with accurate information for security clearance processing.
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                  <div className="text-xs text-amber-500/80 font-mono">VERIFICATION REQUIRED</div>
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
                <RegisterForm />
              </div>
            </div>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-dashed border-zinc-700" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-zinc-900 px-2 text-zinc-400 font-mono">SECURITY NOTICE</span>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-zinc-500">
                <div className="flex items-center justify-center gap-1 mb-2">
                  <FileText className="h-3 w-3" />
                  <span className="font-mono">REGISTRATION PROTOCOL</span>
                </div>
                <div className="p-2 border border-zinc-800 bg-zinc-800/30">
                  <p className="font-mono">
                    ALL REGISTRATION REQUESTS SUBJECT TO COMMAND APPROVAL
                    <br />
                    <span className="text-[10px] text-zinc-600">
                      DOCUMENT ID: REG-
                      {Math.floor(Math.random() * 10000)
                        .toString()
                        .padStart(4, "0")}
                      -{new Date().getFullYear()}
                    </span>
                  </p>
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
    </div>
  )
}
