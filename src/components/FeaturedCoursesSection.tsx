
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import CourseCard, { CourseType } from '@/components/CourseCard';

interface FeaturedCoursesSectionProps {
  visibleSections: {
    courses: boolean;
  }
}

const FeaturedCoursesSection = ({ visibleSections }: FeaturedCoursesSectionProps) => {
  const featuredCourses: CourseType[] = [
    {
      id: "1",
      title: "SystemVerilog for ASIC Design & Verification",
      description: "Master SystemVerilog for RTL design and functional verification of complex digital circuits",
      instructor: "Dr. Michael Chen",
      duration: "10 weeks",
      category: "Digital Design",
      price: 199,
      isFree: false,
      image: "https://i.pravatar.cc/300?img=50",
      certificateAvailable: true,
      rating: 4.8,
      studentsCount: 1245,
      level: "Intermediate",
      lastUpdated: "June 2023"
    },
    {
      id: "2",
      title: "FPGA Design with VHDL",
      description: "Learn to implement programmable logic designs using VHDL for modern FPGA architectures",
      instructor: "Sarah Williams",
      duration: "8 weeks",
      category: "FPGA",
      price: 0,
      isFree: true,
      image: "https://i.pravatar.cc/300?img=51",
      certificateAvailable: true,
      rating: 4.6,
      studentsCount: 980,
      level: "Beginner",
      lastUpdated: "August 2023"
    },
    {
      id: "3",
      title: "Physical Design & Layout Techniques",
      description: "Advanced physical design methodologies for modern process technologies",
      instructor: "Robert Johnson",
      duration: "12 weeks",
      category: "Physical Design",
      price: 249,
      isFree: false,
      image: "https://i.pravatar.cc/300?img=52",
      certificateAvailable: true,
      rating: 4.9,
      studentsCount: 745,
      level: "Advanced",
      lastUpdated: "May 2023"
    }
  ];

  return (
    <section id="courses" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className={`heading-lg text-center mb-4 transition-all duration-700 ${visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Upgrade Your Semiconductor Skills
        </h2>
        <p className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-700 ${visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '100ms' }}>
          Learn from industry experts and advance your career with our specialized IC design courses
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredCourses.map((course, index) => (
            <div 
              key={course.id}
              className={`transition-all duration-700 ${visibleSections.courses ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
          <Button variant="outline" className="flex items-center group">
            View All Courses <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
