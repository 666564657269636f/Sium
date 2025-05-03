"use client"

import { useState, useEffect } from "react"
import { Activity, Users, CheckCircle, AlertCircle } from "lucide-react"

export default function CommandMetrics() {
  const [metrics, setMetrics] = useState({
    personnelActive: 0,
    tasksCompleted: 0,
    alertLevel: 0,
    readiness: 0,
  })

  // Animate the metrics on load
  useEffect(() => {
    const timer = setTimeout(() => {
      setMetrics({
        personnelActive: 42,
        tasksCompleted: 87,
        alertLevel: 2,
        readiness: 94,
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between border-b border-dashed border-zinc-700 pb-2">
        <div className="text-sm text-zinc-300 font-mono">COMMAND METRICS</div>
        <div className="flex items-center gap-2">
          <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></div>
          <div className="text-xs text-green-500 font-mono">LIVE</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-zinc-900/80 border border-zinc-700 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users className="h-4 w-4 text-olive-500" />
            <div className="text-xs text-zinc-400 font-mono">PERSONNEL ACTIVE</div>
          </div>
          <div className="text-3xl font-bold text-zinc-100">{metrics.personnelActive}</div>
          <div className="mt-2 h-1 w-full bg-zinc-800">
            <div className="h-1 bg-olive-500" style={{ width: `${(metrics.personnelActive / 50) * 100}%` }}></div>
          </div>
          <div className="mt-1 text-xs text-zinc-500 font-mono">TOTAL UNIT: 50</div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-700 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle className="h-4 w-4 text-olive-500" />
            <div className="text-xs text-zinc-400 font-mono">TASKS COMPLETED</div>
          </div>
          <div className="text-3xl font-bold text-zinc-100">{metrics.tasksCompleted}%</div>
          <div className="mt-2 h-1 w-full bg-zinc-800">
            <div className="h-1 bg-olive-500" style={{ width: `${metrics.tasksCompleted}%` }}></div>
          </div>
          <div className="mt-1 text-xs text-zinc-500 font-mono">MISSION PROGRESS</div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-700 p-4">
          <div className="flex items-center gap-2 mb-2">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            <div className="text-xs text-zinc-400 font-mono">ALERT LEVEL</div>
          </div>
          <div className="text-3xl font-bold text-zinc-100">{metrics.alertLevel}</div>
          <div className="mt-2 h-1 w-full bg-zinc-800">
            <div className="h-1 bg-amber-500" style={{ width: `${(metrics.alertLevel / 5) * 100}%` }}></div>
          </div>
          <div className="mt-1 text-xs text-zinc-500 font-mono">SCALE: 0-5</div>
        </div>

        <div className="bg-zinc-900/80 border border-zinc-700 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-olive-500" />
            <div className="text-xs text-zinc-400 font-mono">UNIT READINESS</div>
          </div>
          <div className="text-3xl font-bold text-zinc-100">{metrics.readiness}%</div>
          <div className="mt-2 h-1 w-full bg-zinc-800">
            <div className="h-1 bg-olive-500" style={{ width: `${metrics.readiness}%` }}></div>
          </div>
          <div className="mt-1 text-xs text-zinc-500 font-mono">COMBAT EFFECTIVENESS</div>
        </div>
      </div>

      <div className="bg-zinc-900/80 border border-zinc-700 p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-zinc-400 font-mono">ACTIVITY TIMELINE</div>
          <div className="text-xs text-zinc-500 font-mono">
            {new Date().toLocaleTimeString("en-US", { hour12: false })} HRS
          </div>
        </div>

        <div className="space-y-3">
          {[
            { time: "08:15", event: "Morning briefing completed", status: "complete" },
            { time: "09:30", event: "Field training exercise initiated", status: "active" },
            { time: "11:45", event: "Equipment inspection scheduled", status: "pending" },
            { time: "14:00", event: "Command review meeting", status: "pending" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-xs font-mono text-zinc-500">{item.time}</div>
              <div
                className={`h-2 w-2 rounded-full ${
                  item.status === "complete"
                    ? "bg-green-500"
                    : item.status === "active"
                      ? "bg-amber-500 animate-pulse"
                      : "bg-zinc-600"
                }`}
              ></div>
              <div className="text-sm text-zinc-300">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
