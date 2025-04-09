
import React from 'react';
import { GraduationCap, Star } from 'lucide-react';

interface EmptyCourseStateProps {
  type: 'enrolled' | 'wishlist';
  onBrowseClick: () => void;
}

const EmptyCourseState: React.FC<EmptyCourseStateProps> = ({ type, onBrowseClick }) => {
  const isEnrolled = type === 'enrolled';
  
  return (
    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
      {isEnrolled ? (
        <GraduationCap className="h-12 w-12 text-gray-300 mx-auto mb-4" />
      ) : (
        <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
      )}
      <h3 className="text-xl font-semibold mb-2">
        {isEnrolled 
          ? "You haven't enrolled in any courses yet" 
          : "Your wishlist is empty"
        }
      </h3>
      <p className="text-muted-foreground mb-4">
        {isEnrolled 
          ? "Explore our courses and start learning today" 
          : "Save courses you're interested in to view them later"
        }
      </p>
      <button 
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        onClick={onBrowseClick}
      >
        Browse Courses
      </button>
    </div>
  );
};

export default EmptyCourseState;
