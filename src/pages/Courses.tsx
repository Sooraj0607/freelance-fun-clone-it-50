
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { coursesData, enrolledCoursesData } from '@/data/coursesData';

// Import our new components
import CourseHero from '@/components/courses/CourseHero';
import CourseStats from '@/components/courses/CourseStats';
import CourseFilters from '@/components/courses/CourseFilters';
import CourseList from '@/components/courses/CourseList';
import EnrolledCourses from '@/components/courses/EnrolledCourses';
import EmptyCourseState from '@/components/courses/EmptyCourseState';

const courseCategories = ['All Categories', 'VLSI Design', 'RTL Design', 'Layout Design', 'DSP', 'Verification', 'Analog Design', 'ASIC Design', 'FPGA'];
const courseLevels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced', 'Expert'];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [searchQuery, setSearchQuery] = useState('');
  const [gridView, setGridView] = useState(true);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
  };

  const togglePriceFilter = (filter: string) => {
    if (priceFilter.includes(filter)) {
      setPriceFilter(priceFilter.filter(item => item !== filter));
    } else {
      setPriceFilter([...priceFilter, filter]);
    }
  };

  const handleBrowseClick = () => {
    const allCoursesTab = document.querySelector('[data-value="all-courses"]');
    if (allCoursesTab) {
      (allCoursesTab as HTMLElement).click();
    }
  };

  const filterCourses = (courses: typeof coursesData) => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = priceFilter.length === 0 || 
        (priceFilter.includes('free') && course.isFree) ||
        (priceFilter.includes('paid') && !course.isFree);
      
      return matchesCategory && matchesLevel && matchesSearch && matchesPrice;
    });
  };

  const filteredCourses = filterCourses(coursesData);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <CourseHero onSearch={handleSearch} />
      
      {/* Stats Section */}
      <CourseStats />
      
      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="all-courses" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="all-courses" className="py-2 px-4">All Courses</TabsTrigger>
              <TabsTrigger value="my-courses" className="py-2 px-4">My Learning</TabsTrigger>
              <TabsTrigger value="wishlist" className="py-2 px-4">Wishlist</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all-courses">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/4">
                  <CourseFilters 
                    selectedCategory={selectedCategory}
                    selectedLevel={selectedLevel}
                    priceFilter={priceFilter}
                    handleCategoryChange={handleCategoryChange}
                    handleLevelChange={handleLevelChange}
                    togglePriceFilter={togglePriceFilter}
                    courseLevels={courseLevels}
                    courseCategories={courseCategories}
                  />
                </div>
                
                <CourseList 
                  courses={filteredCourses}
                  gridView={gridView}
                  setGridView={setGridView}
                  searchQuery={searchQuery}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="my-courses">
              <EnrolledCourses 
                enrolledCourses={enrolledCoursesData}
                onBrowseClick={handleBrowseClick} 
              />
            </TabsContent>
            
            <TabsContent value="wishlist">
              <EmptyCourseState type="wishlist" onBrowseClick={handleBrowseClick} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
