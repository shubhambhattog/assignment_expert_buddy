"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface DocumentCategory {
  id: string | number
  title: string
  href?: string
  count?: number
}

export interface DocumentGridProps {
  title?: string
  titleIcon?: React.ReactNode
  categories: DocumentCategory[]
  className?: string
  itemsPerPage?: number
  itemsPerRow?: 2 | 3 | 4
  onCategoryClick?: (category: DocumentCategory) => void
}

const DocumentGrid: React.FC<DocumentGridProps> = ({
  title = "Documents by Type",
  titleIcon,
  categories,
  className,
  itemsPerPage = 9,
  itemsPerRow = 3,
  onCategoryClick,
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(categories.length / itemsPerPage)
  const paginatedCategories = categories.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))
  }

  const handleCategoryClick = (category: DocumentCategory) => {
    if (onCategoryClick) {
      onCategoryClick(category)
    }
  }

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  }

  return (
    <div className={cn("w-full", className)}>
      {/* Title with icon */}
      {title && (
        <div className="mb-6 flex items-center">
          {titleIcon && <div className="mr-2 text-primary">{titleIcon}</div>}
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
      )}

      {/* Grid of categories */}
      <div className={cn("grid gap-4", gridCols[itemsPerRow])}>
        {paginatedCategories.map((category) => (
          <div
            key={category.id}
            className="cursor-pointer rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md"
            onClick={() => handleCategoryClick(category)}
          >
            <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
            {category.count !== undefined && <p className="mt-1 text-sm text-gray-500">{category.count} documents</p>}
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex flex-col items-center justify-center">
          <div className="flex items-center justify-center space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <div
                key={index}
                className={cn("h-2 w-2 rounded-full", currentPage === index ? "bg-navy" : "bg-gray-300")}
                onClick={() => setCurrentPage(index)}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={handlePrevious}
              disabled={currentPage === 0}
              className="h-10 w-10 rounded-full border-gray-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="h-10 w-10 rounded-full border-gray-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default DocumentGrid
