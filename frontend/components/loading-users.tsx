import { Loader2 } from "lucide-react"

export default function LoadingUsers() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <Loader2 className="h-8 w-8 text-olive-500 animate-spin mb-4" />
      <p className="text-zinc-400 text-sm">Loading personnel data...</p>
    </div>
  )
}
