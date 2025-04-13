import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Header } from "@/components/layout/Header";

export function HeroSection() {
  return (
    <div className="bg-primary relative overflow-hidden">
      {/* Hero image positioned as background layer */}
      <div className="absolute right-0 bottom-0 z-0 hidden md:block">
        <div className="relative w-[474px] h-[461px] scale-[2]">
          <Image
            src="/hero_img.png"
            alt="Accounting study materials"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-6 relative z-10">
        <Header />
      </div>

      {/* Hero content - positioned above background image */}
      <div className="max-w-7xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          {/* Left side: Text and search */}
          <div>
            <h1 className="text-white text-4xl md:text-[55px] font-bold leading-[120%] capitalize">
              Accounting Homework Samples & Study Documents
            </h1>
            <p className="text-white/90 mt-4 text-base md:text-[23px] font-normal leading-[120%]">
              Get access to our online database of accounting writing samples, study guides, and practice problems.
            </p>
            
            {/* Search bar */}
            <div className="mt-8 relative">
              <div className="flex bg-white rounded-full overflow-hidden px-4 py-2 md:px-6 h-12 md:h-[60px] shadow-lg items-center">
                <div className="flex-1 relative flex items-center">
                  <Search className="text-gray-400 h-5 w-5 absolute left-2" />
                  <Input 
                    type="text"
                    placeholder="Search documents, accounting, homework..."
                    className="border-0 bg-transparent pl-10 focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none shadow-none h-full"
                  />
                </div>
                <div className="flex items-center">
                  <Button className="rounded-full bg-[#16192C] text-white hover:bg-[#16192C]/90 px-4 md:px-6 h-8 md:h-10">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side: Empty column to maintain grid layout */}
          <div className="hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}