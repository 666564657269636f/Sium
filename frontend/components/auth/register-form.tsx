"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, User, Mail, Lock, BookOpen, ShieldAlert, Fingerprint } from "lucide-react"

export default function RegisterForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [securityScan, setSecurityScan] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    degreeProgram: "",
    termsAccepted: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, degreeProgram: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, termsAccepted: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSecurityScan(true)

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("SECURITY ERROR: PASSPHRASE MISMATCH")
      setIsLoading(false)
      return
    }

    // Simulate API call with security verification
    try {
      // First security scan
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSecurityScan(false)

      // Then processing
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSecurityScan(false)

      // Then processing
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you would register with your backend here
      console.log("Registration attempt with:", formData)

      // Redirect to login page after successful registration
      window.location.href = "/login"
    } catch (error) {
      console.error("Registration failed:", error)
    } finally {
      setIsLoading(false)
      setSecurityScan(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-1">
          <Label htmlFor="firstName" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
            <User className="h-3 w-3" />
            FIRST NAME
          </Label>
          <div className="relative">
            <Input
              id="firstName"
              name="firstName"
              type="text"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">REQ</div>
          </div>
        </div>

        <div className="space-y-1">
          <Label htmlFor="lastName" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
            <User className="h-3 w-3" />
            LAST NAME
          </Label>
          <div className="relative">
            <Input
              id="lastName"
              name="lastName"
              type="text"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">REQ</div>
          </div>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="email" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
          <Mail className="h-3 w-3" />
          COMMUNICATION CHANNEL
        </Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
            placeholder="name@domain.com"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">SECURE</div>
        </div>
      </div>

      <div className="space-y-1">
        <Label htmlFor="password" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
          <Lock className="h-3 w-3" />
          SECURITY PASSPHRASE
        </Label>
        <div className="relative">
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={formData.password}
            onChange={handleChange}
            className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] text-zinc-600 font-mono">ENCRYPTED</div>
        </div>
        <p className="text-[10px] text-zinc-500 font-mono">MINIMUM 8 CHARACTERS WITH ALPHANUMERIC COMPLEXITY</p>
      </div>

      <div className="space-y-1">
        <Label htmlFor="confirmPassword" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
          <Fingerprint className="h-3 w-3" />
          CONFIRM PASSPHRASE
        </Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          autoComplete="new-password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          className="bg-zinc-900 border-zinc-700 text-zinc-100 focus:ring-olive-500 focus:border-olive-500 font-mono"
        />
      </div>

      <div className="space-y-1">
        <Label htmlFor="degreeProgram" className="text-zinc-400 font-mono text-xs flex items-center gap-1">
          <BookOpen className="h-3 w-3" />
          SPECIALIZATION DIVISION
        </Label>
        <Select value={formData.degreeProgram} onValueChange={handleSelectChange}>
          <SelectTrigger className="bg-zinc-900 border-zinc-700 text-zinc-300 font-mono">
            <SelectValue placeholder="SELECT DIVISION" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-700 text-zinc-300 font-mono">
            <SelectItem value="military-strategic-studies">MILITARY STRATEGIC STUDIES</SelectItem>
            <SelectItem value="defense-technology">DEFENSE TECHNOLOGY ENGINEERING</SelectItem>
            <SelectItem value="cybersecurity">CYBERSECURITY & INTELLIGENCE</SelectItem>
            <SelectItem value="international-security">INTERNATIONAL SECURITY STUDIES</SelectItem>
            <SelectItem value="aerospace-engineering">AEROSPACE ENGINEERING</SelectItem>
            <SelectItem value="tactical-communications">TACTICAL COMMUNICATIONS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-start space-x-2 border border-zinc-700 p-3 bg-zinc-900/50">
        <Checkbox
          id="terms"
          checked={formData.termsAccepted}
          onCheckedChange={handleCheckboxChange}
          className="data-[state=checked]:bg-olive-600 data-[state=checked]:border-olive-600 mt-1"
        />
        <Label htmlFor="terms" className="text-xs text-zinc-400 font-mono">
          I ACKNOWLEDGE THAT I HAVE READ AND AGREE TO THE{" "}
          <Link href="/terms" className="text-olive-500 hover:text-olive-400 underline">
            TERMS OF SERVICE
          </Link>{" "}
          AND{" "}
          <Link href="/privacy" className="text-olive-500 hover:text-olive-400 underline">
            SECURITY PROTOCOL
          </Link>
        </Label>
      </div>

      <div>
        <Button
          type="submit"
          disabled={isLoading || !formData.termsAccepted}
          className="w-full bg-olive-700 hover:bg-olive-600 text-zinc-100 font-mono relative overflow-hidden"
        >
          {isLoading ? (
            <>
              <div className="flex items-center justify-center gap-2">
                {securityScan ? (
                  <>
                    <ShieldAlert className="h-4 w-4 text-amber-500 animate-pulse" />
                    <span className="text-amber-500">VERIFYING IDENTITY...</span>
                  </>
                ) : (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>PROCESSING REQUEST...</span>
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
              <span>SUBMIT FOR CLEARANCE</span>
              <div className="absolute top-0 right-0 p-1">
                <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></div>
              </div>
            </>
          )}
        </Button>
      </div>

      <div className="text-center text-xs text-zinc-400 font-mono border-t border-dashed border-zinc-700 pt-4">
        ALREADY REGISTERED?{" "}
        <Link href="/login" className="text-olive-500 hover:text-olive-400">
          ACCESS SYSTEM
        </Link>
      </div>
    </form>
  )
}
