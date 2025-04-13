import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "BUDDY - Component Examples",
  description: "Explore reusable components for the BUDDY learning platform",
}

export default function ExamplesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-cream">{children}</div>
}
