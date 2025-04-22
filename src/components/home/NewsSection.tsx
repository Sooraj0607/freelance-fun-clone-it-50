
import React from "react";
import { Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";

const NEWS_ITEMS = [
  {
    title: "Latest Semiconductor Innovations",
    category: "Industry News",
    date: "2025-04-22",
    preview: "Breakthrough in quantum computing chip design..."
  },
  {
    title: "VLSI Design Trends 2025",
    category: "Technology",
    date: "2025-04-21",
    preview: "New architectures for efficient power consumption..."
  },
  {
    title: "Upcoming IC Design Conference",
    category: "Events",
    date: "2025-04-20",
    preview: "Global experts gather to discuss future of chip design..."
  }
];

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="heading-lg">Industry News & Updates</h2>
          <Button variant="outline" className="hidden md:flex">
            <Newspaper className="h-4 w-4 mr-2" />
            View All News
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((item, i) => (
            <div key={i} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="text-sm text-blue-600 mb-2">{item.category}</div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{item.preview}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{item.date}</span>
                <Button variant="link" size="sm" className="text-blue-600">
                  Read More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center md:hidden">
          <Button variant="outline">
            <Newspaper className="h-4 w-4 mr-2" />
            View All News
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
