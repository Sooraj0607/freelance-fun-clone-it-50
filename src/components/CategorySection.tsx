
import React from 'react';
import { Cpu, CircuitBoard, Chip } from 'lucide-react';

interface CategorySectionProps {
  visibleSections: {
    categories: boolean;
  };
}

const CategorySection = ({ visibleSections }: CategorySectionProps) => {
  const categories = [
    { name: 'IC Design', icon: Cpu, jobs: 145 },
    { name: 'Verification', icon: CircuitBoard, jobs: 128 },
    { name: 'Physical Design', icon: Chip, jobs: 113 },
    { name: 'Embedded Systems', icon: Cpu, jobs: 97 },
  ];

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-12 transition-all duration-700 ${visibleSections.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Semiconductor Specializations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-700 ${visibleSections.categories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                {React.createElement(category.icon, { className: "h-6 w-6" })}
              </div>
              <h3 className="font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-gray-600">{category.jobs}+ jobs</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
