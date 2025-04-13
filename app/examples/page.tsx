import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ExamplesPage() {
  const examples = [
    {
      title: "Step Indicator",
      description: "Multi-step process indicator with progress tracking",
      href: "/examples/step-indicator",
    },
    {
      title: "Login Cards",
      description: "Different styles of login and signup cards",
      href: "/examples/login-cards",
    },
    {
      title: "General Card",
      description: "Versatile card component for various content types",
      href: "/examples/general-card",
    },
    {
      title: "Statistics",
      description: "Display important metrics and statistics",
      href: "/examples/statistics",
    },
    {
      title: "Footer",
      description: "Customizable footer with links and newsletter",
      href: "/examples/footer",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-2 text-3xl font-bold">Component Examples</h1>
      <p className="mb-8 text-gray-600">Browse through our collection of reusable components for the BUDDY platform</p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {examples.map((example, index) => (
          <div key={index} className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <h2 className="mb-2 text-xl font-semibold">{example.title}</h2>
            <p className="mb-4 text-gray-600">{example.description}</p>
            <Link href={example.href}>
              <Button className="bg-primary hover:bg-primary/90">View Example</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
