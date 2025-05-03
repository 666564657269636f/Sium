import { NextResponse } from "next/server"
import type { User } from "@/types/user"

export async function GET() {
  // In a real application, you would fetch from a database
  const users: User[] = [
    {
      id: 1,
      firstName: "James",
      lastName: "Miller",
      degreeProgram: "Military Strategic Studies",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      degreeProgram: "Defense Technology Engineering",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Thompson",
      degreeProgram: "Cybersecurity & Intelligence",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 4,
      firstName: "Emma",
      lastName: "Davis",
      degreeProgram: "International Security Studies",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 5,
      firstName: "Robert",
      lastName: "Wilson",
      degreeProgram: "Aerospace Engineering",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: 6,
      firstName: "Jennifer",
      lastName: "Martinez",
      degreeProgram: "Tactical Communications",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  // Add a delay to simulate network latency
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return NextResponse.json(users)
}
