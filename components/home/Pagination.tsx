interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
  }
  
  export function Pagination({ currentPage = 1, totalPages = 25 }: PaginationProps) {
    return (
      <div className="flex items-center justify-center mt-8 gap-1">
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">First</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">Back</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded bg-[#a414d5] text-white">1</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">2</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">3</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">4</button>
        <span className="px-3 py-1 text-xs">...</span>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">{totalPages}</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">Next</button>
        <button className="px-3 py-1 text-xs border border-[#e9e9e9] rounded">Last</button>
      </div>
    );
  }