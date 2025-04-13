import type { Metadata } from 'next'
import { dmSans } from './fonts';
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'Expert Buddy',
  description: '',
  generator: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={dmSans.variable}>
      {/* Add suppressHydrationWarning to the body tag as well */}
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
