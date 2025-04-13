"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ClientSearchBarProps {
  placeholder?: string;
  className?: string;
  buttonText?: string;
  showButton?: boolean;
  variant?: "default" | "purple" | "minimal";
  size?: "sm" | "md" | "lg";
  rounded?: boolean;
}

export default function ClientSearchBar({
  placeholder = "Search...",
  className,
  buttonText = "Search",
  showButton = true,
  variant = "default",
  size = "md",
  rounded = false
}: ClientSearchBarProps) {
  const [query, setQuery] = useState("")
  
  const handleSearch = () => {
    console.log("Search query:", query)
    // Add your search logic here
  }

  return (
    <div className={cn(
      "flex w-full",
      className
    )}>
      <div className="relative flex-grow">
        <input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2"
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <Search className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400" size={18} />
      </div>
      {showButton && (
        <button 
          onClick={handleSearch}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          {buttonText}
        </button>
      )}
    </div>
  )
}