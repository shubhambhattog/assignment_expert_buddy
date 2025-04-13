import { SectionTitle } from "./SectionTitle";
import { DocumentCard } from "./DocumentCard";
import { FilterSidebar } from "./FilterSidebar";
import { Pagination } from "./Pagination";

// Sample data
const documents = [
  {
    id: 1,
    title: "Financial Statement Analysis #1",
    description: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis fermentum turpis a diam tincidunt non consectetur.",
    category: "Accounting",
    wordCount: 514
  },
  {
    id: 2,
    title: "Financial Statement Analysis #2",
    description: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis fermentum turpis a diam tincidunt non consectetur.",
    category: "Accounting",
    wordCount: 612
  },
  {
    id: 3,
    title: "Financial Statement Analysis #3",
    description: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis fermentum turpis a diam tincidunt non consectetur.",
    category: "Accounting",
    wordCount: 498
  },
  {
    id: 4,
    title: "Financial Statement Analysis #4",
    description: "Lorem ipsum dolor sit amet consectetur. Mi sapien egestas risus a amet nullam ut malesuada. Mattis fermentum turpis a diam tincidunt non consectetur.",
    category: "Accounting",
    wordCount: 703
  },
];

export function FeaturedSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 z-10">
      <SectionTitle 
        title="Find Writing Inspiration in Our Data Base" 
        iconSrc="/hero_king.svg" 
      />
      
      <div className="flex flex-col md:flex-row gap-6">
        {/* Main content - 2 column cards */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <DocumentCard 
                key={doc.id}
                id={doc.id}
                title={doc.title}
                description={doc.description}
                category={doc.category}
                wordCount={doc.wordCount}
              />
            ))}
          </div>
          <Pagination currentPage={1} totalPages={25} />
        </div>
        
        {/* Filter sidebar */}
        <div className="w-full md:w-1/4">
          <FilterSidebar />
        </div>
      </div>
    </div>
  );
}