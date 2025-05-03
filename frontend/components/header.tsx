import { Shield } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-zinc-800 border-b border-zinc-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-6 w-6 text-olive-500" />
            <span className="font-bold text-xl tracking-tight text-zinc-100">TACTICAL DB</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              Dashboard
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              Personnel
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              Operations
            </Link>
            <Link
              href="#"
              className="text-sm text-zinc-300 hover:text-zinc-100 transition-colors uppercase tracking-wider"
            >
              Reports
            </Link>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-olive-600 flex items-center justify-center">
              <span className="text-xs font-bold text-zinc-100">CO</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
