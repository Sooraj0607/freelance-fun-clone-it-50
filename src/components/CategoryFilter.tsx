
import React from 'react';
import { jobCategories } from '@/data/mockData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {jobCategories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm transition-colors ${
              selectedCategory === category
                ? 'bg-primary text-white'
                : 'bg-secondary hover:bg-gray-200'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
