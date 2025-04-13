import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DocumentCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  wordCount: number;
}

export function DocumentCard({ id, title, description, category, wordCount }: DocumentCardProps) {
  return (
    <Link href={`/document/${id}`}>
      <Card className="h-full hover:shadow-md transition-shadow">
        <div className="p-4">
          <div className="flex gap-2 mb-3">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
              {category}
            </Badge>
          </div>
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {description}
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
              <span>Words: {wordCount}</span>
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
              <span>Pages: {Math.ceil(wordCount / 275)}</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}