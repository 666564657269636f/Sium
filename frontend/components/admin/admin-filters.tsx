"use client"

import type React from "react"

import { useState } from "react"
import { Search, Filter, Clock, Calendar } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function AdminFilters() {
  const [surname, setSurname] = useState("")
  const [degreeProgram, setDegreeProgram] = useState("")
  const [day, setDay] = useState("")
  const [time, setTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would trigger filtering logic
    console.log({ surname, degreeProgram, day, time })
  }

  const handleReset = () => {
    setSurname("")
    setDegreeProgram("")
    setDay("")
    setTime("")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1">
            <Search className="h-3 w-3" />
            Surname
          </label>
          <Input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Filter by surname"
            className="bg-zinc-900 border-zinc-700 text-zinc-300 h-9"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1">
            <Filter className="h-3 w-3" />
            Degree Program
          </label>
          <Select value={degreeProgram} onValueChange={setDegreeProgram}>
            <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-300 h-9">
              <SelectValue placeholder="Select program" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300">
              <SelectItem value="military-strategic-studies">Military Strategic Studies</SelectItem>
              <SelectItem value="defense-technology">Defense Technology Engineering</SelectItem>
              <SelectItem value="cybersecurity">Cybersecurity & Intelligence</SelectItem>
              <SelectItem value="international-security">International Security Studies</SelectItem>
              <SelectItem value="aerospace-engineering">Aerospace Engineering</SelectItem>
              <SelectItem value="tactical-communications">Tactical Communications</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            Day
          </label>
          <Select value={day} onValueChange={setDay}>
            <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-300 h-9">
              <SelectValue placeholder="Select day" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300">
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
              <SelectItem value="sunday">Sunday</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            Time
          </label>
          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-300 h-9">
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300">
              <SelectItem value="morning">Morning (08:00 - 12:00)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12:00 - 17:00)</SelectItem>
              <SelectItem value="evening">Evening (17:00 - 21:00)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2 pt-2 border-t border-zinc-700">
        <Button
          type="button"
          variant="outline"
          onClick={handleReset}
          className="h-8 px-3 text-xs border-zinc-700 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
        >
          Reset Filters
        </Button>
        <Button type="submit" className="h-8 px-3 text-xs bg-olive-700 hover:bg-olive-600 text-zinc-100">
          Apply Filters
        </Button>
      </div>
    </form>
  )
}
