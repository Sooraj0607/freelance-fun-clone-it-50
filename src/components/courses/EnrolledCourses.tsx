
import React from 'react';
import CourseCard, { CourseType } from '@/components/CourseCard';
import EmptyCourseState from './EmptyCourseState';

interface EnrolledCoursesProps {
  enrolledCourses: (CourseType & { progress: number })[];
  onBrowseClick: () => void;
}

const EnrolledCourses: React.FC<EnrolledCoursesProps> = ({ enrolledCourses, onBrowseClick }) => {
  return (
    <>
      <h2 className="heading-lg mb-6">My Learning Journey</h2>
      {enrolledCourses.length === 0 ? (
        <EmptyCourseState type="enrolled" onBrowseClick={onBrowseClick} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enrolledCourses.map((course) => (
            <CourseCard key={course.id} course={course} enrolled />
          ))}
        </div>
      )}
    </>
  );
};

export default EnrolledCourses;
