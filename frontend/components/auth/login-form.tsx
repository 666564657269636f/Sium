"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Lock, ShieldAlert, Fingerprint } from "lucide-react"

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })
  const [securityScan, setSecurityScan] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, rememberMe: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSecurityScan(true)

    // Simulate API call with security scan
    try {
      await new Promise((resolve) => setTimeout(resolve, 2500))
      // In a real app, you would authenticate with your backend here
      console.log("Login attempt with:", formData)

      // Redirect to dashboard or home page after successful login
      window.location.href = "/"
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
      setSecurityScan(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <Label htmlFor="username" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
            <Fingerprint className="h-3 w-3" />
            IDENTIFICATION CODE
          </Label>
          <div className="h-1 w-1 rounded-full bg-olive-500"></div>
        </div>
        <div className="relative">
          <Input
            id="username"
            name="username"
            type="text"
            autoComplete="username"
            required
            value={formData.username}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
            placeholder="ENTER ID CODE"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">ID:SEC</div>
        </div>
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <Label htmlFor="password" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
            <Lock className="h-3 w-3" />
            SECURITY PASSPHRASE
          </Label>
          <Link href="/forgot-password" className="text-[10px] text-olive-500 hover:text-olive-400 font-mono">
            RESET CREDENTIALS
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
            placeholder="••••••••••••"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">ENCRYPTED</div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="remember"
            checked={formData.rememberMe}
            onCheckedChange={handleCheckboxChange}
            className="data-[state=checked]:bg-olive-600 data-[state=checked]:border-olive-600"
          />
          <Label htmlFor="remember" className="text-xs text-zinc-400 font-mono">
            REMEMBER TERMINAL
          </Label>
        </div>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono relative overflow-hidden"
        >
          {isLoading ? (
            <>
              <div className="flex items-center justify-center gap-2">
                {securityScan ? (
                  <>
                    <ShieldAlert className="h-4 w-4 text-amber-500 animate-pulse" />
                    <span className="text-amber-500">SCANNING CREDENTIALS...</span>
                  </>
                ) : (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>AUTHENTICATING...</span>
                  </>
                )}
              </div>
              {/* Animated scan line */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="h-full w-1 bg-olive-500/50 absolute left-0 animate-scan-vertical"></div>
              </div>
            </>
          ) : (
            <>
              <span>AUTHENTICATE</span>
              <div className="absolute top-0 right-0 p-1">
                <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </>
          )}
        </Button>
      </div>

      <div className="text-center text-xs text-zinc-400 font-mono border-t border-dashed border-zinc-700 pt-4">
        NOT REGISTERED?{" "}
        <Link href="/register" className="text-olive-500 hover:text-olive-400">
          REQUEST ACCESS CLEARANCE
        </Link>
      </div>
    </form>
  )
}
