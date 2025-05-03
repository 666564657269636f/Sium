export default function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-zinc-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tactical Database System | Classified Information
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-xs text-zinc-500">SECURITY LEVEL: AUTHORIZED PERSONNEL</span>
            <div className="h-2 w-2 rounded-full bg-olive-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
