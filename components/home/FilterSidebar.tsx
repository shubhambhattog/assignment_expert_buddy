"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Slider } from "@/components/custom-slider";
import { useState, useEffect } from "react";

export function FilterSidebar() {
  // Set initial range values (0-100 percentage scale)
  const [rangeValues, setRangeValues] = useState([10, 75]);
  
  // Word count range (min and max possible values)
  const minWords = 275;
  const maxWords = 50000;
  
  // Calculated actual word counts based on slider positions
  const [wordRange, setWordRange] = useState({
    min: calculateWords(rangeValues[0]),
    max: calculateWords(rangeValues[1])
  });

  // Calculate actual word count from slider percentage
  function calculateWords(percentage: number): number {
    // Convert percentage to actual word count value
    const range = maxWords - minWords;
    const words = Math.round(minWords + (range * percentage / 100));
    return words;
  }

  // Update word counts when slider values change
  useEffect(() => {
    setWordRange({
      min: calculateWords(rangeValues[0]),
      max: calculateWords(rangeValues[1])
    });
  }, [rangeValues]);

  return (
    <div className="bg-white p-4 rounded-md border border-[#e9e9e9] mb-4">
      <div className="mb-4">
        <label className="block text-sm text-[#6b7b93] mb-2">Type of work</label>
        <div className="relative">
          <select className="w-full p-2 border border-[#e9e9e9] rounded-md appearance-none pr-8 text-sm">
            <option>All Project Types</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6b7b93]" size={16} />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm text-[#6b7b93] mb-2">Subject</label>
        <div className="relative">
          <select className="w-full p-2 border border-[#e9e9e9] rounded-md appearance-none pr-8 text-sm">
            <option>Accounting</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6b7b93]" size={16} />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm text-[#6b7b93] mb-2">Academic Level</label>
        <div className="relative">
          <select className="w-full p-2 border border-[#e9e9e9] rounded-md appearance-none pr-8 text-sm">
            <option>Any Academic Level</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#6b7b93]" size={16} />
        </div>
      </div>
      
      <div className="mb-4">
        <label className="block text-sm text-[#6b7b93] mb-2">Words</label>
        <Slider 
          defaultValue={rangeValues} 
          value={rangeValues} 
          onValueChange={setRangeValues} 
          max={100} 
          step={1} 
          className="my-4" 
        />
        <div className="flex justify-between text-xs text-[#6b7b93]">
          <span>From {wordRange.min.toLocaleString()}</span>
          <span>To {wordRange.max.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between text-xs text-[#6b7b93]">
          <span>1 Page = 275 Words</span>
        </div>
      </div>
      
      <Button className="w-full bg-[#a414d5] hover:bg-[#a414d5]/90 text-white">Apply</Button>
    </div>
  );
}