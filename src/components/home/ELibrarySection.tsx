
import React from "react";
import { Book, BookOpen, Library } from "lucide-react";
import { Button } from "@/components/ui/button";

const LIBRARY_FEATURES = [
  {
    icon: <Book className="h-8 w-8 text-blue-600" />,
    title: "Technical Publications",
    desc: "Access latest semiconductor research papers"
  },
  {
    icon: <BookOpen className="h-8 w-8 text-green-600" />,
    title: "Digital Textbooks",
    desc: "Comprehensive VLSI design resources"
  },
  {
    icon: <Library className="h-8 w-8 text-purple-600" />,
    title: "Reference Materials",
    desc: "Industry standards and documentation"
  }
];

const ELibrarySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">E-Library Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive collection of semiconductor and VLSI design resources
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LIBRARY_FEATURES.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gray-50 rounded-lg">{item.icon}</div>
                <h3 className="font-semibold ml-3">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
              <Button variant="outline" className="w-full">Browse</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ELibrarySection;
