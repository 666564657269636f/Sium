"use client"

import Image from "next/image"
import { useState } from "react"
import { TableCell, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Edit, Trash2, MoreVertical, FileText, Shield } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"

interface AdminUserRowProps {
  user: {
    id: number
    firstName: string
    lastName: string
    degreeProgram: string
    image: string
    enrollmentDate: string
    status: string
    scheduleDay: string
    scheduleTime: string
  }
}

export default function AdminUserRow({ user }: AdminUserRowProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-700 hover:bg-green-600 text-zinc-100">{status}</Badge>
      case "Inactive":
        return <Badge className="bg-red-700 hover:bg-red-600 text-zinc-100">{status}</Badge>
      case "On Leave":
        return <Badge className="bg-amber-700 hover:bg-amber-600 text-zinc-100">{status}</Badge>
      default:
        return <Badge className="bg-zinc-700 hover:bg-zinc-600 text-zinc-100">{status}</Badge>
    }
  }

  const handleDelete = () => {
    setIsDeleting(true)
    // In a real app, this would call an API to delete the user
    setTimeout(() => {
      setIsDeleting(false)
      alert(`User ${user.id} would be deleted in a real application`)
    }, 1000)
  }

  return (
    <TableRow className="border-zinc-700 hover:bg-zinc-800">
      <TableCell className="font-mono text-xs text-zinc-400">#{user.id.toString().padStart(6, "0")}</TableCell>
      <TableCell>
        <div className="relative h-8 w-8 rounded-full overflow-hidden bg-zinc-700">
          <Image
            src={user.image || "/placeholder.svg"}
            alt={`${user.firstName} ${user.lastName}`}
            fill
            className="object-cover"
          />
        </div>
      </TableCell>
      <TableCell className="font-medium text-zinc-200">{user.firstName}</TableCell>
      <TableCell className="font-medium text-zinc-200">{user.lastName}</TableCell>
      <TableCell className="text-zinc-300">{user.degreeProgram}</TableCell>
      <TableCell className="text-zinc-300">{user.scheduleDay}</TableCell>
      <TableCell className="text-zinc-300">{user.scheduleTime}</TableCell>
      <TableCell>{getStatusBadge(user.status)}</TableCell>
      <TableCell className="text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-400 hover:text-zinc-100">
              <MoreVertical className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-zinc-900 border-zinc-700 text-zinc-300">
            <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer flex items-center gap-2">
              <Edit className="h-4 w-4 text-zinc-400" />
              <span>Edit Record</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer flex items-center gap-2">
              <FileText className="h-4 w-4 text-zinc-400" />
              <span>View Details</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-zinc-800 cursor-pointer flex items-center gap-2">
              <Shield className="h-4 w-4 text-zinc-400" />
              <span>Adjust Clearance</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-red-500 hover:text-red-400 hover:bg-zinc-800 cursor-pointer flex items-center gap-2"
              onClick={handleDelete}
              disabled={isDeleting}
            >
              <Trash2 className="h-4 w-4" />
              <span>{isDeleting ? "Deleting..." : "Delete Record"}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  )
}
