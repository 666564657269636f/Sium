import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function PersonnelPreview() {
  const personnel = [
    {
      id: 1,
      name: "James Miller",
      rank: "Lieutenant",
      status: "Active",
      activity: "Field Training",
      image: "/placeholder.svg?height=100&width=100",
      progress: 75,
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rank: "Sergeant",
      status: "Active",
      activity: "Equipment Maintenance",
      image: "/placeholder.svg?height=100&width=100",
      progress: 60,
    },
    {
      id: 3,
      name: "Michael Thompson",
      rank: "Corporal",
      status: "On Leave",
      activity: "Medical Recovery",
      image: "/placeholder.svg?height=100&width=100",
      progress: 30,
    },
    {
      id: 4,
      name: "Emma Davis",
      rank: "Specialist",
      status: "Active",
      activity: "Communications",
      image: "/placeholder.svg?height=100&width=100",
      progress: 90,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {personnel.map((person) => (
        <div key={person.id} className="bg-zinc-800/70 border border-zinc-700 hover:border-olive-600 transition-colors">
          <div className="p-4 border-b border-zinc-700 flex items-center gap-3">
            <div className="relative h-12 w-12 rounded-full overflow-hidden bg-zinc-700">
              <Image src={person.image || "/placeholder.svg"} alt={person.name} fill className="object-cover" />
            </div>
            <div>
              <div className="font-bold text-zinc-100">{person.name}</div>
              <div className="text-xs text-zinc-400">{person.rank}</div>
            </div>
          </div>

          <div className="p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="text-xs text-zinc-500 font-mono">STATUS</div>
              <Badge
                className={`
                  ${
                    person.status === "Active"
                      ? "bg-green-700 hover:bg-green-600"
                      : person.status === "On Leave"
                        ? "bg-amber-700 hover:bg-amber-600"
                        : "bg-red-700 hover:bg-red-600"
                  } 
                  text-zinc-100
                `}
              >
                {person.status}
              </Badge>
            </div>

            <div>
              <div className="text-xs text-zinc-500 font-mono">CURRENT ACTIVITY</div>
              <div className="text-sm text-zinc-300">{person.activity}</div>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-500 font-mono">TASK PROGRESS</span>
                <span className="text-zinc-400">{person.progress}%</span>
              </div>
              <div className="mt-1 h-1 w-full bg-zinc-700">
                <div className="h-1 bg-olive-500" style={{ width: `${person.progress}%` }}></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
