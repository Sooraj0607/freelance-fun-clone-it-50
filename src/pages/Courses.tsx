import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { coursesData, enrolledCoursesData } from '@/data/coursesData';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

const courseCategories = ['All Categories', 'Development', 'Design', 'Marketing', 'Data Science', 'Security'];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filterCourses = (courses: typeof coursesData) => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           course.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  };

  const filteredCourses = filterCourses(coursesData);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">Learn Skills for Success</h1>
            <p className="text-xl mb-8">
              Discover free and premium courses to advance your career. Complete courses and earn industry-recognized certificates.
            </p>
            <div className="flex space-x-4">
              <SearchBar onSearch={handleSearch} placeholder="Search courses..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">200+</h3>
              <p className="text-gray-600">Courses Available</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">5,000+</h3>
              <p className="text-gray-600">Certificates Issued</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">10,000+</h3>
              <p className="text-gray-600">Active Learners</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all-courses" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all-courses">All Courses</TabsTrigger>
              <TabsTrigger value="my-courses">My Courses</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-courses">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <div className="sticky top-24">
                    <CategoryFilter
                      selectedCategory={selectedCategory}
                      onCategoryChange={handleCategoryChange}
                    />
                    
                    <div className="p-4 bg-secondary rounded-lg mt-6">
                      <h3 className="font-semibold mb-3">Price</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input type="checkbox" id="free" className="rounded mr-2" />
                          <label htmlFor="free">Free</label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="paid" className="rounded mr-2" />
                          <label htmlFor="paid">Paid</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-3/4">
                  <h2 className="heading-lg mb-6">Explore Courses</h2>
                  {filteredCourses.length === 0 ? (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No courses found matching your criteria.</p>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="my-courses">
              <h2 className="heading-lg mb-6">My Enrolled Courses</h2>
              {enrolledCoursesData.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">You haven't enrolled in any courses yet.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCoursesData.map((course) => (
                    <CourseCard key={course.id} course={course} enrolled />
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
