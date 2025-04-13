import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
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
  );
}