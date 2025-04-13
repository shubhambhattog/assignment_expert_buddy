import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

// making the page dynamic
export const dynamic = 'force-dynamic';

export default function DocumentPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-cream">
      {/* Header with purple background */}
      <div className="bg-primary">
        {/* Navigation */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-white rounded-full py-2 px-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-primary font-bold flex items-center">
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
                  className="mr-1"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
                BUDDY
              </div>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm font-medium">
                Find Tutor
              </a>
              <a href="#" className="text-sm font-medium">
                Become Tutor
              </a>
              <a href="#" className="text-sm font-medium">
                Sign In
              </a>
              <Button className="bg-navy text-white rounded-full hover:bg-navy/90">Get Started For Free</Button>
            </div>
          </div>
        </div>

        {/* Hero section */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-white text-4xl font-bold max-w-3xl">
            Lorem Ipsum Dolor Sit Amet Consectetur. Risus Augue Sit Vestibulum Convallis Vel Euismod.
          </h1>
          <div className="flex gap-4 mt-4 text-white">
            <div>
              <span className="text-white/70 mr-1">Document Type:</span>
              <span className="font-medium">Thesis</span>
            </div>
            <div>
              <span className="text-white/70 mr-1">Subject Area:</span>
              <span className="font-medium">Management</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Document preview */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-[40px] p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Document {params.id}</h2>
                <div className="flex gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    Java
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    Code
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                    Programming
                  </Badge>
                </div>
              </div>
              <div className="border border-gray-200 rounded-md p-4 mb-6 text-xs leading-relaxed h-72 overflow-y-auto">
                <p>
                  Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis
                  fermentum turpis a diam tincidunt non consectetur. Non est ut scelerisque diam augue consectetur
                  elenctus. Enim convallis risus vel vitae aliquam. Cursus dictum massa risus facilisis. Pharetra diam
                  tincidunt eget sagittis elementum. Tellus nec in amet elit in erat lectus. Quesque suspendisse cursus
                  erat ut elementum elementum nullam ultricies ultrices. Massa vel nunc ipsum vitae tincidunt. Lorem
                  ipsum commodi egestas sagittis. Proin pellentesque proin enim in tellus eu nulla consequat egestas.
                </p>
                <p className="mt-2">
                  Viverra nunc turpis massa suspendisse egestas semper enim facilisi dignissim in futura praesentia
                  fermentum risctus. Dignissim vel posuere sed enim. Nulla et duis pellentesque consequat. Non lacus
                  tortor sed facilisis dictum fermentum et sit. Mi nunc vulputate enim leo vehicula. Turpis praesentia
                  non amet sapien blandit elit. Sed magna ipsum nunc facilisis risus molestie amet. Turpis praesentia
                  molestie dignissim est. Elementum amet elit consequat semper amet. Et sit sit et risus leo. Elementum
                  turpis ut diam tempor amet sit et. Sit amet elit in erat lectus.
                </p>
                <p className="mt-2">
                  Quesque suspendisse cursus erat ut elementum elementum nullam ultricies ultrices. Massa vel nunc ipsum
                  vitae tincidunt. Lorem ipsum commodi egestas sagittis. Proin pellentesque proin enim in tellus eu
                  nulla consequat egestas.
                </p>
                {/* More lorem ipsum text would go here */}
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  project_justification.pdf
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  document.docx
                </div>
              </div>
            </div>

            {/* Answer section */}
            <div className="bg-white rounded-lg p-6 shadow-sm mt-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Answer (2)</h2>
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
                  className="cursor-pointer"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>

              {/* First answer */}
              <div className="border-b border-gray-200 pb-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder1.png"
                        alt="Corey Stanton"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Corey Stanton</div>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        3 years ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#ffb800"
                        stroke="#ffb800"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm ml-1">4.5 (89)</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary text-primary hover:bg-primary/5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Chat
                    </Button>
                  </div>
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis
                    fermentum turpis a diam tincidunt non consectetur. Non est ut scelerisque diam augue consectetur
                    elenctus. Enim convallis risus vel vitae aliquam. Cursus dictum massa risus facilisis. Pharetra diam
                    tincidunt eget sagittis elementum. Tellus nec in amet elit in erat lectus. Quesque suspendisse
                    cursus erat ut elementum elementum nullam ultricies ultrices.
                  </p>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    project_justification.pdf
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    document.docx
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full">Plagiarism Check</Button>
                  <Button className="bg-navy text-white hover:bg-navy/90 rounded-full">Purchase $50</Button>
                </div>
              </div>

              {/* Second answer */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src="/placeholder2.png"
                        alt="Kierra Septimus"
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-medium">Kierra Septimus</div>
                      <div className="flex items-center text-xs text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        3 years ago
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#ffb800"
                        stroke="#ffb800"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      <span className="text-sm ml-1">4.2 (85)</span>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="rounded-full border-primary text-primary hover:bg-primary/5"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                      Chat
                    </Button>
                  </div>
                </div>
                <div className="text-sm text-gray-700 mb-4">
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis
                    fermentum turpis a diam tincidunt non consectetur. Non est ut scelerisque diam augue consectetur
                    elenctus. Enim convallis risus vel vitae aliquam. Cursus dictum massa risus facilisis. Pharetra diam
                    tincidunt eget sagittis elementum. Tellus nec in amet elit in erat lectus. Quesque suspendisse
                    cursus erat ut elementum elementum nullam ultricies ultrices.
                  </p>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    project_justification.pdf
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full">Plagiarism Check</Button>
                  <Button className="bg-navy text-white hover:bg-navy/90 rounded-full">Purchase $50</Button>
                </div>
              </div>
            </div>

            {/* Similar Documents */}
            <div className="mt-12">
              <div className="flex items-center gap-2 mb-6">
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
                  className="text-primary"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                <h2 className="text-xl font-bold">Similar Documents</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((item) => (
                  <Card key={item} className="overflow-hidden">
                    <div className="p-4">
                      <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet consectetur.</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Mattis fermentum turpis a diam tincidunt non
                        consectetur. Non est ut scelerisque diam augue consectetur elenctus.
                      </p>
                      <div className="flex justify-between text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                          </svg>
                          <span>Words: 514</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                          </svg>
                          <span>Pages: 02</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="outline" size="icon" className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Document details sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-[25px] p-6 shadow-sm">
              <Button className="w-full bg-primary text-white hover:bg-primary/90 mb-6 flex items-center justify-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Unlock
              </Button>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Only on Studyhelp</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Original Template</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Downloadable</span>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Content Type:</span>
                  <span className="font-medium">User generated</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Words:</span>
                  <span className="font-medium">514</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Pages:</span>
                  <span className="font-medium">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Level:</span>
                  <span className="font-medium">High School</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Language:</span>
                  <span className="font-medium">English</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Reference List:</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Formatting:</span>
                  <span className="font-medium">AMA</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Uploaded by:</span>
                  <span className="font-medium">Brandon Vetrovs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">18/10/2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}