
import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Filter, Star } from 'lucide-react';
import CategoryFilter from '@/components/CategoryFilter';

interface CourseFiltersProps {
  selectedCategory: string;
  selectedLevel: string;
  priceFilter: string[];
  handleCategoryChange: (category: string) => void;
  handleLevelChange: (level: string) => void;
  togglePriceFilter: (filter: string) => void;
  courseLevels: string[];
  courseCategories: string[];
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  selectedCategory,
  selectedLevel,
  priceFilter,
  handleCategoryChange,
  handleLevelChange,
  togglePriceFilter,
  courseLevels,
  courseCategories
}) => {
  return (
    <div className="sticky top-24 space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-lg">Filters</h3>
          <Filter className="h-5 w-5 text-gray-500" />
        </div>
        
        <div className="space-y-5">
          <div>
            <h4 className="font-medium mb-3">Category</h4>
            <CategoryFilter
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              categories={courseCategories}
            />
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Level</h4>
            <div className="space-y-2">
              {courseLevels.map((level) => (
                <div key={level} className="flex items-center">
                  <input 
                    type="radio" 
                    id={level} 
                    name="level"
                    checked={selectedLevel === level}
                    className="rounded mr-2"
                    onChange={() => handleLevelChange(level)}
                  />
                  <label htmlFor={level} className="text-sm">{level}</label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Price</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="free" 
                  className="rounded mr-2"
                  checked={priceFilter.includes('free')}
                  onChange={() => togglePriceFilter('free')}
                />
                <label htmlFor="free" className="text-sm">Free</label>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="paid" 
                  className="rounded mr-2" 
                  checked={priceFilter.includes('paid')}
                  onChange={() => togglePriceFilter('paid')}
                />
                <label htmlFor="paid" className="text-sm">Paid</label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Features</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" id="certificate" className="rounded mr-2" />
                <label htmlFor="certificate" className="text-sm">Certificate</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="coding-exercises" className="rounded mr-2" />
                <label htmlFor="coding-exercises" className="text-sm">Coding Exercises</label>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="practice-tests" className="rounded mr-2" />
                <label htmlFor="practice-tests" className="text-sm">Practice Tests</label>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Ratings</h4>
            <div className="space-y-2">
              {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                <div key={rating} className="flex items-center">
                  <input type="radio" id={`rating-${rating}`} name="rating" className="rounded mr-2" />
                  <label htmlFor={`rating-${rating}`} className="text-sm flex items-center">
                    <div className="flex text-yellow-400 mr-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3" fill={i < Math.floor(rating) ? "currentColor" : "none"} />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{rating} & up</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;
