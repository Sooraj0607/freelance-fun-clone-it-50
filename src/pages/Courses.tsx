
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import SearchBar from '@/components/SearchBar';
import CategoryFilter from '@/components/CategoryFilter';
import { coursesData, enrolledCoursesData } from '@/data/coursesData';
import { BookOpen, GraduationCap, Users, Filter, Star, Clock, Award, LayoutGrid, LayoutList } from 'lucide-react';

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
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Advance Your Semiconductor Career</h1>
            <p className="text-xl mb-8">
              Master VLSI, chip design, and verification with industry-recognized courses taught by top semiconductor experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center max-w-xl mx-auto">
              <SearchBar onSearch={handleSearch} placeholder="Search for courses..." />
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
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
                </div>
                
                <div className="lg:w-3/4">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">{searchQuery ? `Results for "${searchQuery}"` : "Explore Courses"}</h2>
                    <div className="flex items-center space-x-3">
                      <div className="text-sm text-gray-500">{filteredCourses.length} results</div>
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
                  
                  {filteredCourses.length === 0 ? (
                    <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                      <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  ) : (
                    <div className={`${gridView ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}`}>
                      {filteredCourses.map((course) => (
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
              </div>
            </TabsContent>
            
            <TabsContent value="my-courses">
              <h2 className="heading-lg mb-6">My Learning Journey</h2>
              {enrolledCoursesData.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <GraduationCap className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">You haven't enrolled in any courses yet</h3>
                  <p className="text-muted-foreground mb-4">Explore our courses and start learning today</p>
                  <button 
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                    onClick={() => document.querySelector('[data-value="all-courses"]')?.click()}
                  >
                    Browse Courses
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {enrolledCoursesData.map((course) => (
                    <CourseCard key={course.id} course={course} enrolled />
                  ))}
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="wishlist">
              <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                <Star className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Your wishlist is empty</h3>
                <p className="text-muted-foreground mb-4">Save courses you're interested in to view them later</p>
                <button 
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                  onClick={() => document.querySelector('[data-value="all-courses"]')?.click()}
                >
                  Browse Courses
                </button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
