import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-zinc-800/70 border border-zinc-700 p-6 hover:border-olive-600 transition-colors">
      <div className="h-12 w-12 rounded-sm bg-olive-700/30 border border-olive-600 flex items-center justify-center mb-4">
        <div className="text-olive-500">{icon}</div>
      </div>
      <h3 className="text-lg font-bold text-zinc-100 mb-2 font-mono">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}
