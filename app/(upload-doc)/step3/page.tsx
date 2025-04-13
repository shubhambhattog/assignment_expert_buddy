import Link from "next/link"
import { Button } from "@/components/ui/button"
import StepIndicator from "@/components/steps/StepIndicator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { DollarSign, Lock } from "lucide-react"

export default function Step3Page() {
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
            <StepIndicator steps={steps} currentStep={3} />
          </div>

          <div className="rounded-xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Set Your Price</h2>
            <p className="mb-8 text-gray-600">
              Choose how you want to monetize your document. You'll earn credits when others purchase or unlock your
              content.
            </p>

            <div className="space-y-8">
              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Sell Your Document</h3>
                    <p className="mb-4 text-gray-600">Set a price for others to purchase your document.</p>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="price">Price (USD)</Label>
                        <div className="flex items-center">
                          <span className="mr-2 text-gray-500">$</span>
                          <Input
                            id="price"
                            type="number"
                            min="0"
                            step="0.01"
                            defaultValue="9.99"
                            className="border-gray-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label>Suggested Price Range</Label>
                          <span className="text-sm text-gray-500">$5 - $25</span>
                        </div>
                        <Slider defaultValue={[9.99]} min={0} max={50} step={0.01} />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>$0</span>
                          <span>$50</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-gray-50 p-4">
                        <h4 className="font-medium">Pricing Tips</h4>
                        <ul className="mt-2 list-inside list-disc text-sm text-gray-600">
                          <li>Higher quality documents can command higher prices</li>
                          <li>Consider the length and depth of your content</li>
                          <li>Research similar documents to set competitive pricing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Lock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Unlock System</h3>
                    <p className="mb-4 text-gray-600">
                      Allow users to unlock your document by uploading their own documents.
                    </p>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="unlock"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label htmlFor="unlock" className="ml-2 text-sm text-gray-700">
                        Enable unlock option (users can access by contributing their own document)
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-primary/5 p-4">
                <h3 className="font-medium">Your Earnings</h3>
                <p className="mt-1 text-sm text-gray-600">
                  You'll receive 70% of the purchase price when someone buys your document. Earnings are added to your
                  BUDDY account balance.
                </p>
              </div>

              <div className="flex justify-between">
                <Link href="/step2">
                  <Button variant="outline">Back</Button>
                </Link>
                <Link href="/step4">
                  <Button className="bg-primary hover:bg-primary/90">Continue</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
