
import React from 'react';
import { LayoutGrid, LayoutList, DollarSign, Star, BookOpen } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import CourseCard, { CourseType } from '@/components/CourseCard';

interface CourseListProps {
  courses: CourseType[];
  gridView: boolean;
  setGridView: (view: boolean) => void;
  searchQuery: string;
}

const CourseList: React.FC<CourseListProps> = ({
  courses,
  gridView,
  setGridView,
  searchQuery
}) => {
  return (
    <div className="lg:w-3/4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{searchQuery ? `Results for "${searchQuery}"` : "Explore Courses"}</h2>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500">{courses.length} results</div>
          <div className="border-l h-6 border-gray-300"></div>
          <div className="flex items-center space-x-2">
            <button 
              className={`p-1.5 rounded ${gridView ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setGridView(true)}
            >
              <LayoutGrid className="h-5 w-5" />
            </button>
            <button 
              className={`p-1.5 rounded ${!gridView ? 'bg-primary/10 text-primary' : ''}`}
              onClick={() => setGridView(false)}
            >
              <LayoutList className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {searchQuery && <p className="text-sm text-gray-500 mb-4">Showing results for "{searchQuery}"</p>}
      
      {courses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No courses found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </div>
      ) : (
        <div className={`${gridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
          {courses.map((course) => (
            gridView ? (
              <CourseCard key={course.id} course={course} />
            ) : (
              <div key={course.id} className="flex bg-white rounded-lg shadow-sm overflow-hidden h-40">
                <div className="w-1/3 relative">
                  <img
                    src={course.image || '/placeholder.svg'}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  {course.isFree ? (
                    <Badge variant="secondary" className="absolute top-2 right-2 bg-green-100 text-green-800">
                      Free
                    </Badge>
                  ) : null}
                </div>
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold mb-1 line-clamp-1">{course.title}</h3>
                    <p className="text-xs text-gray-500 mb-1 line-clamp-1">{course.description}</p>
                    <div className="flex items-center text-xs">
                      <span className="text-gray-600">{course.instructor}</span>
                      <span className="mx-1">•</span>
                      <span className="text-gray-600">{course.level}</span>
                    </div>
                    {course.rating && (
                      <div className="flex items-center mt-1">
                        <span className="text-xs font-medium mr-1">{course.rating.toFixed(1)}</span>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3" fill={i < Math.floor(course.rating!) ? "currentColor" : "none"} />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm font-medium">
                      {course.isFree ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <div className="flex items-center">
                          <DollarSign className="h-4 w-4 text-blue-600" />
                          <span className="text-blue-600">{course.price.toFixed(2)}</span>
                        </div>
                      )}
                    </div>
                    <button 
                      className="px-3 py-1 text-xs bg-primary text-white rounded hover:bg-primary/90 transition-colors"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseList;
