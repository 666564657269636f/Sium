import type { User } from "@/types/user"
import UserCard from "./user-card"

async function getUsers() {
  // In a real application, you would fetch from a real API
  // For demonstration, we'll use a delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Sample user data
  return [
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
  ] as User[]
}

export default async function UsersList() {
  const users = await getUsers()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
