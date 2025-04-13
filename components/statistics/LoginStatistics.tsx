import type React from "react"
import { cn } from "@/lib/utils"

export interface StatisticItemProps {
  value: string | number
  label: string
  icon?: React.ReactNode
  className?: string
}

export const StatisticItem: React.FC<StatisticItemProps> = ({ value, label, icon, className }) => {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {icon && <div className="mb-2 text-primary">{icon}</div>}
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  )
}

export interface LoginStatisticsProps {
  statistics: Omit<StatisticItemProps, "className">[]
  className?: string
  title?: string
  subtitle?: string
}

const LoginStatistics: React.FC<LoginStatisticsProps> = ({ statistics, className, title, subtitle }) => {
  return (
    <div className={cn("rounded-xl bg-white p-6 shadow-sm", className)}>
      {(title || subtitle) && (
        <div className="mb-6 text-center">
          {title && <h3 className="text-xl font-bold text-gray-900">{title}</h3>}
          {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
        </div>
      )}

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {statistics.map((stat, index) => (
          <StatisticItem key={index} value={stat.value} label={stat.label} icon={stat.icon} />
        ))}
      </div>
    </div>
  )
}

export default LoginStatistics
