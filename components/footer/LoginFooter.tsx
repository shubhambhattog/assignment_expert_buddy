import type React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface FooterLinkGroup {
  title: string
  links: {
    label: string
    href: string
  }[]
}

export interface SocialLink {
  icon: React.ReactNode
  href: string
  label: string
}

export interface LoginFooterProps {
  logo?: React.ReactNode
  description?: string
  linkGroups?: FooterLinkGroup[]
  socialLinks?: SocialLink[]
  copyright?: string
  className?: string
  showNewsletter?: boolean
  newsletterTitle?: string
  newsletterDescription?: string
}

const LoginFooter: React.FC<LoginFooterProps> = ({
  logo,
  description = "BUDDY is a platform connecting students with tutors for academic success.",
  linkGroups = [],
  socialLinks = [],
  copyright = `© ${new Date().getFullYear()} BUDDY. All rights reserved.`,
  className,
  showNewsletter = true,
  newsletterTitle = "Subscribe to our newsletter",
  newsletterDescription = "Get the latest updates and resources directly to your inbox.",
}) => {
  return (
    <footer className={cn("bg-white py-12", className)}>
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            {logo || (
              <div className="flex items-center text-xl font-bold text-primary">
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
              </div>
            )}
            <p className="mt-4 text-gray-600">{description}</p>

            {socialLinks.length > 0 && (
              <div className="mt-6 flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="text-gray-500 transition-colors hover:text-primary"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Link groups */}
          {linkGroups.map((group, groupIndex) => (
            <div key={groupIndex}>
              <h3 className="mb-4 font-semibold text-gray-900">{group.title}</h3>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-gray-600 hover:text-primary">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          {showNewsletter && (
            <div className="lg:col-span-1">
              <h3 className="mb-4 font-semibold text-gray-900">{newsletterTitle}</h3>
              <p className="mb-4 text-gray-600">{newsletterDescription}</p>
              <form className="flex flex-col space-y-2 sm:flex-row sm:space-x-2 sm:space-y-0">
                <input
                  type="email"
                  placeholder="Your email"
                  className="rounded-md border border-gray-300 px-4 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
          )}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">{copyright}</div>
      </div>
    </footer>
  )
}

export default LoginFooter
