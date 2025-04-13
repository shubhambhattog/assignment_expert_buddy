import React from "react"
import { cn } from "@/lib/utils"

export interface StepProps {
  number: number
  title: string
  description?: string
  isActive?: boolean
  isCompleted?: boolean
  className?: string
}

export const Step: React.FC<StepProps> = ({
  number,
  title,
  description,
  isActive = false,
  isCompleted = false,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      <div
        className={cn(
          "flex h-12 w-12 items-center justify-center rounded-full border-2 text-lg font-bold",
          isActive
            ? "border-primary bg-primary text-white"
            : isCompleted
              ? "border-primary bg-white text-primary"
              : "border-gray-300 bg-white text-gray-400",
        )}
      >
        {isCompleted ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          number
        )}
      </div>
      <h3 className={cn("mt-2 text-sm font-semibold", isActive || isCompleted ? "text-primary" : "text-gray-500")}>
        {title}
      </h3>
      {description && <p className="mt-1 text-xs text-gray-500">{description}</p>}
    </div>
  )
}

export interface StepIndicatorProps {
  steps: Omit<StepProps, "isActive" | "isCompleted">[]
  currentStep: number
  className?: string
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ steps, currentStep, className }) => {
  return (
    <div className={cn("flex w-full justify-between", className)}>
      {steps.map((step, index) => {
        const isActive = index + 1 === currentStep
        const isCompleted = index + 1 < currentStep

        // Only render connector line between steps (not before first or after last)
        const showConnector = index < steps.length - 1

        return (
          <React.Fragment key={index}>
            <Step
              number={step.number}
              title={step.title}
              description={step.description}
              isActive={isActive}
              isCompleted={isCompleted}
            />
            {showConnector && (
              <div className="relative flex flex-1 items-center justify-center">
                <div className={cn("h-0.5 w-full", index + 1 < currentStep ? "bg-primary" : "bg-gray-300")} />
              </div>
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default StepIndicator
