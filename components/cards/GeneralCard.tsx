"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface GeneralCardProps {
  title: string
  description?: string
  tags?: string[]
  imageUrl?: string
  buttonText?: string
  buttonVariant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive"
  onClick?: () => void
  footer?: React.ReactNode
  className?: string
  imagePosition?: "top" | "left"
  children?: React.ReactNode
}

const GeneralCard: React.FC<GeneralCardProps> = ({
  title,
  description,
  tags = [],
  imageUrl,
  buttonText,
  buttonVariant = "default",
  onClick,
  footer,
  className,
  imagePosition = "top",
  children,
}) => {
  const isHorizontal = imagePosition === "left"

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl bg-white shadow-sm transition-all hover:shadow-md",
        isHorizontal ? "flex flex-col md:flex-row" : "",
        className,
      )}
    >
      {imageUrl && (
        <div
          className={cn("bg-cover bg-center", isHorizontal ? "h-48 md:h-auto md:w-1/3" : "h-48")}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}

      <div className={cn("flex flex-1 flex-col p-6", isHorizontal && "md:p-8")}>
        {tags.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        {description && <p className="mb-4 text-gray-600">{description}</p>}

        {children}

        {buttonText && (
          <Button
            variant={buttonVariant}
            onClick={onClick}
            className={cn("mt-4", buttonVariant === "default" && "bg-primary hover:bg-primary/90")}
          >
            {buttonText}
          </Button>
        )}

        {footer && <div className="mt-auto pt-4">{footer}</div>}
      </div>
    </div>
  )
}

export default GeneralCard
