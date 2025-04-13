import React from "react"
import { cn } from "@/lib/utils"

export interface ButtonGroupProps {
  children: React.ReactNode
  className?: string
  orientation?: "horizontal" | "vertical"
  fullWidth?: boolean
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  className,
  orientation = "horizontal",
  fullWidth = false,
}) => {
  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-md",
        orientation === "vertical" ? "flex-col" : "flex-row",
        fullWidth && "w-full",
        className,
      )}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child

        return React.cloneElement(child as React.ReactElement, {
          className: cn(
            child.props.className,
            "rounded-none",
            orientation === "horizontal" && [
              index === 0 && "rounded-l-md",
              index === React.Children.count(children) - 1 && "rounded-r-md",
            ],
            orientation === "vertical" && [
              index === 0 && "rounded-t-md",
              index === React.Children.count(children) - 1 && "rounded-b-md",
            ],
            index !== 0 && (orientation === "horizontal" ? "border-l-0" : "border-t-0"),
          ),
        })
      })}
    </div>
  )
}

export default ButtonGroup
