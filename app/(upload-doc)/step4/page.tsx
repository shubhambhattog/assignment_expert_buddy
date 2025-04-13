import Link from "next/link"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/steps/StepIndicator"
import { FileText } from "lucide-react"

export default function Step4Page() {
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
            <StepIndicator steps={steps} currentStep={4} />
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Review and Submit</h2>
            <p className="mb-8 text-gray-600">
              Please review your document details before submitting. Once submitted, your document will be reviewed by
              our team before being published.
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-gray-50 p-6">
                <div className="flex items-center gap-4">
                  <FileText className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold">Research Paper - Climate Change Analysis</h3>
                    <p className="text-gray-600">essay_climate_change.pdf (2.4 MB)</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Document Type</h4>
                    <p>Essay</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Subject Area</h4>
                    <p>Environmental Science</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Education Level</h4>
                    <p>Undergraduate</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Pages / Word Count</h4>
                    <p>12 pages / 3,245 words</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Description</h4>
                  <p className="text-gray-700">
                    A comprehensive analysis of climate change impacts on coastal regions, including data analysis and
                    policy recommendations. This paper received an A grade and includes original research.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Tags</h4>
                  <p>climate change, environmental science, research, policy, coastal regions</p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-500">Pricing</h4>
                  <p>$9.99 (Purchase) / Unlock option enabled</p>
                </div>
              </div>

              <div className="rounded-lg bg-primary/5 p-4">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-medium text-gray-700">
                      I confirm that I have the rights to share this document
                    </label>
                    <p className="text-gray-500">
                      By submitting, you confirm that this document is your original work or that you have permission to
                      share it. You also agree to our{" "}
                      <a href="#" className="text-primary hover:underline">
                        Terms of Service
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Link href="/step3">
                  <Button variant="outline">Back</Button>
                </Link>
                <Link href="/upload-success">
                  <Button className="bg-primary hover:bg-primary/90">Submit Document</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
