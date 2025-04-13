"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ClientSearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
  buttonText?: string
  showButton?: boolean
  variant?: "default" | "purple" | "minimal"
  size?: "sm" | "md" | "lg"
  rounded?: boolean
}

const ClientSearchBar: React.FC<ClientSearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
  className,
  buttonText = "Search",
  showButton = true,
  variant = "default",
  size = "md",
  rounded = false,
}) => {
  const [query, setQuery] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSearch) onSearch(query)
  }

  const sizeClasses = {
    sm: "h-9 text-sm",
    md: "h-11",
    lg: "h-14 text-lg",
  }

  const variantClasses = {
    default: "bg-white border-gray-300 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
    purple: "bg-primary/5 border-primary/20 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary",
    minimal: "bg-transparent border-gray-200 focus-within:border-gray-400",
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "flex w-full items-center overflow-hidden border",
        variantClasses[variant],
        sizeClasses[size],
        rounded ? "rounded-full" : "rounded-lg",
        className,
      )}
    >
      <div className="flex flex-1 items-center px-3">
        <Search className={cn("text-gray-400", size === "sm" ? "h-4 w-4" : size === "lg" ? "h-6 w-6" : "h-5 w-5")} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 border-0 bg-transparent px-3 py-2 outline-none placeholder:text-gray-500 focus:outline-none focus:ring-0"
        />
      </div>
      {showButton && (
        <button
          type="submit"
          className={cn(
            "h-full px-4 font-medium text-white",
            variant === "purple" ? "bg-primary/80 hover:bg-primary" : "bg-primary hover:bg-primary/90",
            size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
          )}
        >
          {buttonText}
        </button>
      )}
    </form>
  )
}

export default ClientSearchBar
