import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionTitle } from "./SectionTitle";

const categories = [
  "Accounting", "Algebra", "Analysis", "Anthropology", "Archaeology", 
  "Chemistry Tutors", "Coding Tutors", "Computer Science", "Elementary Tutors", 
  "French Tutors", "Geometry Tutors", "Writing Tutor", "Geometry Tutors", 
  "German Tutors", "GMAT Tutors"
];

export function DocumentTypesSection() {
  return (
    <div className="mt-16">
      <div className="flex items-center justify-center gap-2 mb-6 mx-auto">

        <SectionTitle 
                title="Documents by Type" 
                iconSrc="/hero_king.svg" 
              />
             
      </div>
      
      <div className="flex items-center justify-center self-stretch flex-wrap gap-[20px] max-w-[770px] mx-auto">
        {categories.map((category, i) => (
          <button key={i} className="bg-white border border-[#e9e9e9] rounded-[20px] w-[243px] h-[75px] py-3 px-4 text-[#16192c] text-sm font-medium hover:border-[#a414d5] transition-colors text-left">
            {category}
          </button>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 gap-2 flex-col items-center">
        <div className="flex gap-1 mb-4">
          <div className="w-6 h-2 bg-[#16192c] rounded-full"></div>
          <div className="w-2 h-2 bg-[#e9e9e9] rounded-full"></div>
          <div className="w-2 h-2 bg-[#e9e9e9] rounded-full"></div>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 rounded-full border border-[#e9e9e9] flex items-center justify-center">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 rounded-full border border-[#e9e9e9] flex items-center justify-center">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}