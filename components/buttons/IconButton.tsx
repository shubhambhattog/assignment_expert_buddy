import React from "react"
import { cn } from "@/lib/utils"

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  variant?: "default" | "outline" | "ghost" | "link" | "primary"
  size?: "sm" | "md" | "lg"
  rounded?: boolean
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  variant = "default",
  size = "md",
  rounded = false,
  className,
  ...props
}) => {
  const variantClasses = {
    default: "bg-gray-100 hover:bg-gray-200 text-gray-700",
    outline: "border border-gray-300 hover:bg-gray-100 text-gray-700",
    ghost: "hover:bg-gray-100 text-gray-700",
    link: "text-primary hover:underline",
    primary: "bg-primary hover:bg-primary/90 text-white",
  }

  const sizeClasses = {
    sm: "p-1",
    md: "p-2",
    lg: "p-3",
  }

  const iconSizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  }

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        variantClasses[variant],
        sizeClasses[size],
        rounded ? "rounded-full" : "rounded-md",
        className,
      )}
      {...props}
    >
      {React.isValidElement(icon)
        ? React.cloneElement(icon as React.ReactElement, {
            className: cn(iconSizeClasses[size], (icon as React.ReactElement).props.className),
          })
        : icon}
    </button>
  )
}

export default IconButton
