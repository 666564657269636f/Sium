import type { User } from "@/types/user"
import AdminUserRow from "./admin-user-row"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

async function getUsers() {
  // In a real application, you would fetch from a real API
  // For demonstration, we'll use a delay to simulate network request
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Sample user data with additional fields for admin view
  return [
    {
      id: 1,
      firstName: "James",
      lastName: "Miller",
      degreeProgram: "Military Strategic Studies",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-09-15",
      status: "Active",
      scheduleDay: "Monday",
      scheduleTime: "10:00 - 14:00",
    },
    {
      id: 2,
      firstName: "Sarah",
      lastName: "Johnson",
      degreeProgram: "Defense Technology Engineering",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-08-22",
      status: "Active",
      scheduleDay: "Tuesday",
      scheduleTime: "14:00 - 18:00",
    },
    {
      id: 3,
      firstName: "Michael",
      lastName: "Thompson",
      degreeProgram: "Cybersecurity & Intelligence",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-09-01",
      status: "On Leave",
      scheduleDay: "Wednesday",
      scheduleTime: "09:00 - 13:00",
    },
    {
      id: 4,
      firstName: "Emma",
      lastName: "Davis",
      degreeProgram: "International Security Studies",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-10-05",
      status: "Active",
      scheduleDay: "Thursday",
      scheduleTime: "13:00 - 17:00",
    },
    {
      id: 5,
      firstName: "Robert",
      lastName: "Wilson",
      degreeProgram: "Aerospace Engineering",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-07-18",
      status: "Inactive",
      scheduleDay: "Friday",
      scheduleTime: "10:00 - 14:00",
    },
    {
      id: 6,
      firstName: "Jennifer",
      lastName: "Martinez",
      degreeProgram: "Tactical Communications",
      image: "/placeholder.svg?height=200&width=200",
      enrollmentDate: "2023-08-30",
      status: "Active",
      scheduleDay: "Monday",
      scheduleTime: "15:00 - 19:00",
    },
  ] as (User & {
    enrollmentDate: string
    status: string
    scheduleDay: string
    scheduleTime: string
  })[]
}

export default async function AdminUsersList() {
  const users = await getUsers()

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow className="bg-zinc-900 hover:bg-zinc-900">
            <TableHead className="text-zinc-400 font-medium w-[50px]">ID</TableHead>
            <TableHead className="text-zinc-400 font-medium w-[50px]">Image</TableHead>
            <TableHead className="text-zinc-400 font-medium">Name</TableHead>
            <TableHead className="text-zinc-400 font-medium">Surname</TableHead>
            <TableHead className="text-zinc-400 font-medium">Degree Program</TableHead>
            <TableHead className="text-zinc-400 font-medium">Day</TableHead>
            <TableHead className="text-zinc-400 font-medium">Time</TableHead>
            <TableHead className="text-zinc-400 font-medium">Status</TableHead>
            <TableHead className="text-zinc-400 font-medium text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <AdminUserRow key={user.id} user={user} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
