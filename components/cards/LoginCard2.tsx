"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

export interface LoginCard2Props {
  title?: string
  subtitle?: string
  onSubmit?: (e: React.FormEvent) => void
  className?: string
  buttonText?: string
  showEmailOnly?: boolean
  footerText?: string
  footerLinkText?: string
  footerLinkHref?: string
  imageUrl?: string
}

const LoginCard2: React.FC<LoginCard2Props> = ({
  title = "Get started with BUDDY",
  subtitle = "Join thousands of students and tutors on our platform",
  onSubmit,
  className,
  buttonText = "Continue",
  showEmailOnly = true,
  footerText = "Already have an account?",
  footerLinkText = "Sign in",
  footerLinkHref = "/login",
  imageUrl = "/placeholder.svg?height=300&width=300",
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(e)
  }

  return (
    <div className={cn("overflow-hidden rounded-xl bg-white shadow-lg", className)}>
      <div className="grid md:grid-cols-2">
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="name@example.com" required />
              </div>

              {!showEmailOnly && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>
                </>
              )}

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600">{footerText}</span>{" "}
            <a href={footerLinkHref} className="font-medium text-primary hover:underline">
              {footerLinkText}
            </a>
          </div>
        </div>

        <div className="hidden bg-cover bg-center md:block" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="flex h-full items-center justify-center bg-primary/10 p-12">
            <div className="max-w-md text-center">
              <h3 className="text-xl font-bold text-gray-900">Learn from the best tutors</h3>
              <p className="mt-2 text-gray-600">
                Access thousands of resources and get help from expert tutors in your field
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginCard2
