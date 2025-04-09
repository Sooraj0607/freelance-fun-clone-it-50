
import React from 'react';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const CourseStats: React.FC = () => {
  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-1">200+</h3>
            <p className="text-gray-600">Specialized Courses</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-1">5,000+</h3>
            <p className="text-gray-600">Industry Certifications</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold mb-1">10,000+</h3>
            <p className="text-gray-600">Semiconductor Professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStats;
