import Link from "next/link"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/steps/StepIndicator"
import { Card } from "@/components/ui/card"
import { FileText, BookOpen, FileCode, FileImage, File } from "lucide-react"

export default function Step1Page() {
  const steps = [
    {
      number: 1,
      title: "Document Type",
      description: "Select type",
    },
    {
      number: 2,
      title: "Document Details",
      description: "Add information",
    },
    {
      number: 3,
      title: "Pricing",
      description: "Set your price",
    },
    {
      number: 4,
      title: "Review",
      description: "Submit document",
    },
  ]

  const documentTypes = [
    {
      id: "essay",
      title: "Essay",
      description: "Academic essays, research papers, and written assignments",
      icon: <FileText className="h-10 w-10 text-primary" />,
    },
    {
      id: "notes",
      title: "Class Notes",
      description: "Lecture notes, study guides, and course materials",
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
    {
      id: "code",
      title: "Code",
      description: "Programming assignments, code snippets, and projects",
      icon: <FileCode className="h-10 w-10 text-primary" />,
    },
    {
      id: "presentation",
      title: "Presentation",
      description: "Slides, presentations, and visual materials",
      icon: <FileImage className="h-10 w-10 text-primary" />,
    },
    {
      id: "other",
      title: "Other",
      description: "Any other academic or educational document",
      icon: <File className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <div className="min-h-screen bg-cream">
      <header className="bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center text-white">
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
              <span className="text-xl font-bold">BUDDY</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12">
            <h1 className="mb-6 text-center text-3xl font-bold">Upload Your Document</h1>
            <StepIndicator steps={steps} currentStep={1} />
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Select Document Type</h2>
            <p className="mb-8 text-gray-600">
              Choose the type of document you're uploading to help others find it more easily.
            </p>

            <div className="space-y-4">
              {documentTypes.map((type) => (
                <Link href="/step2" key={type.id}>
                  <Card className="cursor-pointer border border-gray-200 p-4 transition-all hover:border-primary hover:shadow-md">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{type.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold">{type.title}</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-end">
              <Link href="/step2">
                <Button className="bg-primary hover:bg-primary/90">Continue</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
