import Link from "next/link"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/steps/StepIndicator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload } from "lucide-react"

export default function Step2Page() {
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
            <StepIndicator steps={steps} currentStep={2} />
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Document Details</h2>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Document Title</Label>
                <Input
                  id="title"
                  placeholder="Enter a descriptive title for your document"
                  className="border-gray-300"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief description of your document"
                  rows={4}
                  className="border-gray-300"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject Area</Label>
                  <select
                    id="subject"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select a subject</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="science">Science</option>
                    <option value="english">English</option>
                    <option value="history">History</option>
                    <option value="computer_science">Computer Science</option>
                    <option value="business">Business</option>
                    <option value="arts">Arts</option>
                    <option value="engineering">Engineering</option>
                    <option value="medicine">Medicine</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Education Level</Label>
                  <select
                    id="education"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select education level</option>
                    <option value="high_school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="graduate">Graduate</option>
                    <option value="phd">PhD</option>
                    <option value="professional">Professional</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="pages">Number of Pages</Label>
                  <Input id="pages" type="number" min="1" className="border-gray-300" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="words">Word Count</Label>
                  <Input id="words" type="number" min="1" className="border-gray-300" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="tags">Tags (comma separated)</Label>
                <Input id="tags" placeholder="e.g., research, biology, experiment" className="border-gray-300" />
              </div>

              <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium">Upload Your Document</h3>
                <p className="mt-1 text-sm text-gray-500">Drag and drop your file here, or click to browse</p>
                <p className="mt-1 text-xs text-gray-500">Supported formats: PDF, DOCX, PPT, TXT (Max size: 50MB)</p>
                <Button variant="outline" className="mt-4">
                  Browse Files
                </Button>
              </div>

              <div className="flex justify-between">
                <Link href="/step1">
                  <Button variant="outline">Back</Button>
                </Link>
                <Link href="/step3">
                  <Button className="bg-primary hover:bg-primary/90">Continue</Button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
