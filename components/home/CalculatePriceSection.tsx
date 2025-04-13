"use client"

import { Button } from "@/components/ui/button";
import { ChevronDown, Calendar as CalendarIcon, CirclePlus, CircleMinus } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export function CalculatePriceSection() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [pageCount, setPageCount] = useState(1);

  const incrementPage = () => {
    setPageCount(prev => Math.min(prev + 1, 20)); //max limit
  };

  const decrementPage = () => {
    setPageCount(prev => Math.max(prev - 1, 1)); // min limit
  };

  return (
    <div className="mt-12 flex justify-center">
      {/* Main container*/}
      <div 
        className="relative w-full max-w-[770px] h-[516px] rounded-[40px] bg-white p-8 overflow-hidden"
        style={{
          boxShadow: '0px 140px 39px 0px rgba(0, 0, 0, 0.00), 0px 90px 36px 0px rgba(0, 0, 0, 0.03), 0px 51px 30px 0px rgba(0, 0, 0, 0.11), 0px 22px 22px 0px rgba(0, 0, 0, 0.19), 0px 6px 12px 0px rgba(0, 0, 0, 0.22)'
        }}
      >
        {/* Pattern inside card*/}
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 89.34%, #FFF 100%), url(/pattern_card.png) lightgray -404.834px 0px / 134.624% 100% no-repeat',
            mixBlendMode: 'multiply',
            zIndex: 0
          }}
        />
        
        {/* Purple color */}
        <div 
          className="absolute inset-0" 
          style={{
            background: '#A414D5',
            filter: 'blur(40px)',
            zIndex: 0,
            opacity: 0.8
          }}
        />
        
        {/* Blue color */}
        <div 
          className="absolute bottom-[-600px] w-[800px] h-[800px]" 
          style={{
            background: '#1A2567',
            filter: 'blur(150px)',
            zIndex: 0,
            opacity:0.5 
          }}
        />

        {/* Content on top of effects */}
        <div className="relative z-10">
          <h2 className="text-white text-[44px] font-bold mb-8">Calculate Price and Order a Custom Work</h2>
          
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white text-sm mb-2">Type of Work</label>
              <div className="relative">
                <select className="w-full p-3 rounded-[12px] border-2 border-[#EFF2F4] appearance-none pr-8 text-sm bg-white">
                  <option>Application Essay</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6b7b93]" size={16} />
              </div>
            </div>
            
            <div>
              <label className="block text-white text-sm mb-2">Academic Level</label>
              <div className="relative">
                <select className="w-full p-3 rounded-[12px] border-2 border-[#EFF2F4] appearance-none pr-8 text-sm bg-white">
                  <option>Undergraduate/Bachelor</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6b7b93]" size={16} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white text-sm mb-2">Deadline</label>
              <Popover>
                <PopoverTrigger asChild>
                  <div className="flex items-center w-full p-3 rounded-[12px] border-2 border-[#EFF2F4] bg-white cursor-pointer">
                    <div className="flex-1 text-sm">
                      {date ? (
                        format(date, "PPP")
                      ) : (
                        <span className="text-[#6b7b93]">Select Deadline</span>
                      )}
                    </div>
                    <CalendarIcon className="text-[#6b7b93]" size={16} />
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 z-50" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>

              <div>
                <label className="block text-white text-sm mb-2">Pages</label>
                {/* Counter with +/- buttons - fixed hover effect */}
                <div className="flex items-center rounded-[12px] border-2 border-[#EFF2F4] bg-white overflow-hidden">
                  <button 
                      className="p-3 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none rounded-l-[10px]" 
                      onClick={decrementPage}
                      aria-label="Decrease pages"
                      disabled={pageCount <= 1}
                    >
                      <CircleMinus size={16} className={`${pageCount <= 1 ? 'text-gray-300' : 'text-[#A414D5]'}`} />
                    </button>
                      <div className="flex-1 flex items-center justify-center border-x border-[#EFF2F4]">
                        <span className="text-sm font-medium">{pageCount} page/{pageCount * 275} words</span>
                      </div>
                      <button 
                        className="p-3 flex items-center justify-center hover:bg-gray-50 transition-colors focus:outline-none rounded-r-[10px]" 
                        onClick={incrementPage}
                        aria-label="Increase pages"
                      >
                        <CirclePlus size={16} className="text-[#A414D5]" />
                    </button>
                </div>
              </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            <div className="bg-white p-4 rounded-[12px] border-2 border-[#EFF2F4]">
              <div className="text-xs text-[#6b7b93]">Your Price</div>
              <div className="text-lg font-bold text-[#16192c]">
                <span className="line-through text-sm mr-1 text-[#6b7b93]">${(19 * pageCount).toFixed(2)}</span>
                ${(15 * pageCount).toFixed(2)}
              </div>
            </div>
            
            {/* Black Order Now button with white text */}
            <button 
              className="rounded-[100px] py-3 font-medium text-white"
              style={{ backgroundColor: '#16192C' }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}