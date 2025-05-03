import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import type { User } from "@/types/user"

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Card className="bg-zinc-800 border-zinc-700 overflow-hidden hover:border-olive-600 transition-colors">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-zinc-700">
          <Image
            src={user.image || "/placeholder.svg"}
            alt={`${user.firstName} ${user.lastName}`}
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-900 to-transparent h-16"></div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-zinc-100 text-lg">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-zinc-400 text-sm mt-1">{user.degreeProgram}</p>
          </div>
          <Badge className="bg-olive-700 hover:bg-olive-600 text-zinc-100">Active</Badge>
        </div>

        <div className="mt-4 pt-4 border-t border-zinc-700">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="text-zinc-500">ID Number</div>
            <div className="text-zinc-300 font-mono">#{user.id.toString().padStart(6, "0")}</div>

            <div className="text-zinc-500">Status</div>
            <div className="text-zinc-300">Enrolled</div>

            <div className="text-zinc-500">Clearance</div>
            <div className="text-zinc-300">Level 2</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
