"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  label: string
  href: string
  isActive?: boolean
}

export interface NavbarProps {
  logo?: React.ReactNode
  navItems?: NavItem[]
  actions?: React.ReactNode[]
  className?: string
  variant?: "default" | "transparent" | "colored"
  sticky?: boolean
  mobileBreakpoint?: "sm" | "md" | "lg"
}

const Navbar: React.FC<NavbarProps> = ({
  logo,
  navItems = [],
  actions = [],
  className,
  variant = "default",
  sticky = false,
  mobileBreakpoint = "md",
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const variantClasses = {
    default: "bg-white border-b border-gray-200",
    transparent: "bg-transparent",
    colored: "bg-primary text-white",
  }

  const breakpoints = {
    sm: "sm:flex",
    md: "md:flex",
    lg: "lg:flex",
  }

  return (
    <nav className={cn("w-full", variantClasses[variant], sticky ? "sticky top-0 z-50" : "", className)}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            {logo || (
              <Link href="/" className="flex items-center text-xl font-bold">
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
                  className="mr-2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                BUDDY
              </Link>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className={cn("hidden items-center space-x-1", breakpoints[mobileBreakpoint])}>
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  item.isActive
                    ? variant === "colored"
                      ? "text-white font-semibold"
                      : "text-primary"
                    : variant === "colored"
                      ? "text-white/80 hover:text-white"
                      : "text-gray-700",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={cn("hidden items-center space-x-2", breakpoints[mobileBreakpoint])}>{actions}</div>

          {/* Mobile Menu Button */}
          <div className={cn("flex", breakpoints[mobileBreakpoint].replace("flex", "hidden"))}>
            <button
              onClick={toggleMenu}
              className={cn("p-2", variant === "colored" ? "text-white" : "text-gray-700")}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={cn("border-b border-gray-200 px-4 py-4", variant === "colored" ? "bg-primary" : "bg-white")}>
          <div className="flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium",
                  item.isActive
                    ? variant === "colored"
                      ? "text-white font-semibold"
                      : "text-primary"
                    : variant === "colored"
                      ? "text-white/80"
                      : "text-gray-700",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-2">{actions}</div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
