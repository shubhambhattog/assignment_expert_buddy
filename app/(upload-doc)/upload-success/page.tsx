import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function UploadSuccessPage() {
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
        <div className="mx-auto max-w-2xl rounded-xl bg-white p-8 shadow-md">
          <div className="text-center">
            <CheckCircle className="mx-auto h-16 w-16 text-green-500" />
            <h1 className="mt-4 text-2xl font-bold">Document Successfully Uploaded!</h1>
            <p className="mt-2 text-gray-600">
              Your document has been submitted and is now pending review. We'll notify you once it's approved and
              published.
            </p>

            <div className="mt-8 rounded-lg bg-gray-50 p-6 text-left">
              <h2 className="text-lg font-semibold">What happens next?</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                    1
                  </span>
                  <span>
                    Our team will review your document to ensure it meets our quality and content guidelines (typically
                    within 24-48 hours).
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                    2
                  </span>
                  <span>
                    Once approved, your document will be published on the platform and available for others to purchase
                    or unlock.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs text-white">
                    3
                  </span>
                  <span>
                    You'll earn credits whenever someone purchases your document or when it helps others with their
                    studies.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link href="/afterlogin" className="flex-1">
                <Button variant="outline" className="w-full">
                  Go to Dashboard
                </Button>
              </Link>
              <Link href="/step1" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90">Upload Another Document</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
