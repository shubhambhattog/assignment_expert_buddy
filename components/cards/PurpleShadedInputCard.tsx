"use client"

import React from "react"

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export interface PurpleShadedInputCardProps {
  title?: string
  subtitle?: string
  inputLabel?: string
  inputPlaceholder?: string
  buttonText?: string
  onSubmit?: (value: string) => void
  className?: string
  icon?: ReactNode
  showIcon?: boolean
}

const PurpleShadedInputCard: React.FC<PurpleShadedInputCardProps> = ({
  title = "Get started",
  subtitle = "Enter your information to continue",
  inputLabel = "Email",
  inputPlaceholder = "Enter your email",
  buttonText = "Continue",
  onSubmit,
  className,
  icon,
  showIcon = true,
}) => {
  const [inputValue, setInputValue] = React.useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(inputValue)
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-primary/20 p-8 shadow-sm",
        className,
      )}
    >
      <div className="flex items-start">
        {showIcon && (
          <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon || (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            )}
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>

          <form onSubmit={handleSubmit} className="mt-6">
            <div className="space-y-2">
              <Label htmlFor="input-field" className="text-sm font-medium">
                {inputLabel}
              </Label>
              <Input
                id="input-field"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={inputPlaceholder}
                className="border-gray-300 bg-white"
              />
            </div>
            <Button type="submit" className="mt-4 w-full bg-primary hover:bg-primary/90">
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PurpleShadedInputCard
