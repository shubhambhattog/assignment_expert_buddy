"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"
import { Github, Mail } from "lucide-react"

export interface LoginCardProps {
  title?: string
  subtitle?: string
  onSubmit?: (e: React.FormEvent) => void
  onGoogleLogin?: () => void
  onGithubLogin?: () => void
  className?: string
  showSocialLogin?: boolean
  showRememberMe?: boolean
  showForgotPassword?: boolean
  buttonText?: string
  footerText?: string
  footerLinkText?: string
  footerLinkHref?: string
}

const LoginCard: React.FC<LoginCardProps> = ({
  title = "Welcome back",
  subtitle = "Enter your credentials to access your account",
  onSubmit,
  onGoogleLogin,
  onGithubLogin,
  className,
  showSocialLogin = true,
  showRememberMe = true,
  showForgotPassword = true,
  buttonText = "Sign In",
  footerText = "Don't have an account?",
  footerLinkText = "Sign up",
  footerLinkHref = "/signup",
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(e)
  }

  return (
    <div className={cn("w-full max-w-md rounded-xl bg-white p-8 shadow-lg", className)}>
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
      </div>

      {showSocialLogin && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              type="button"
              onClick={onGithubLogin}
              className="flex items-center justify-center gap-2"
            >
              <Github className="h-4 w-4" />
              <span>Github</span>
            </Button>
            <Button
              variant="outline"
              type="button"
              onClick={onGoogleLogin}
              className="flex items-center justify-center gap-2"
            >
              <Mail className="h-4 w-4" />
              <span>Google</span>
            </Button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
        </>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              {showForgotPassword && (
                <a href="/forgot-password" className="text-xs text-primary hover:underline">
                  Forgot password?
                </a>
              )}
            </div>
            <Input id="password" type="password" required />
          </div>

          {showRememberMe && (
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm font-normal">
                Remember me
              </Label>
            </div>
          )}

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            {buttonText}
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
  )
}

export default LoginCard
