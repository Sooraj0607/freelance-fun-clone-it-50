
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { coursesData } from '@/data/coursesData';
import { BookOpen, Users, Clock, Award, Star, Play, BarChart, FileText, Download } from 'lucide-react';

const CourseDetails = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  
  const course = coursesData.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
            <p className="mb-6">The course you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/courses')}>Return to Courses</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  // Mock data for the course details
  const courseDetails = {
    description: `This comprehensive ${course.title} course is designed for ${course.level?.toLowerCase() || 'all level'} students who want to master the principles and practical applications of semiconductor design. You'll gain hands-on experience with industry-standard tools and techniques.`,
    whatYouWillLearn: [
      "Understand core principles and methodologies in semiconductor design",
      "Implement practical designs using industry-standard EDA tools",
      "Develop verification strategies for robust chip design",
      "Navigate complex design constraints and optimization techniques",
      "Prepare for real-world semiconductor industry challenges"
    ],
    curriculum: [
      {
        title: "Introduction to Semiconductor Design",
        lessons: [
          { title: "Course Overview", duration: "10:25", type: "video" },
          { title: "Industry Landscape", duration: "15:40", type: "video" },
          { title: "Tools and Environment Setup", duration: "20:15", type: "video" },
          { title: "Module Quiz", type: "quiz" }
        ]
      },
      {
        title: "Design Fundamentals",
        lessons: [
          { title: "Design Hierarchy and Modular Approach", duration: "18:30", type: "video" },
          { title: "Constraints and Requirements Analysis", duration: "22:15", type: "video" },
          { title: "Design Space Exploration", duration: "25:10", type: "video" },
          { title: "Practical Exercise", type: "exercise" },
          { title: "Module Quiz", type: "quiz" }
        ]
      },
      {
        title: "Advanced Techniques",
        lessons: [
          { title: "Optimization Strategies", duration: "28:45", type: "video" },
          { title: "Performance Analysis", duration: "32:20", type: "video" },
          { title: "Industry Best Practices", duration: "24:55", type: "video" },
          { title: "Case Study Analysis", type: "reading" },
          { title: "Final Project", type: "project" }
        ]
      }
    ],
    requirements: [
      "Basic understanding of digital electronics",
      "Familiarity with a programming language (preferably C/C++)",
      "Access to a computer that can run EDA tools",
      "Fundamental knowledge of logic design concepts"
    ],
    instructor: {
      name: course.instructor,
      title: "Senior Semiconductor Designer",
      experience: "15+ years in the semiconductor industry",
      bio: "A seasoned professional with extensive experience at leading semiconductor companies. Specializes in advanced chip design methodologies and has led multiple tape-outs for commercial products."
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Course Header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
              <p className="text-lg mb-4">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="font-medium mr-1">{course.rating?.toFixed(1) || "4.5"}</span>
                  <span className="text-gray-300">({course.studentsCount?.toLocaleString() || "5,000"}+ students)</span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                
                <div className="flex items-center">
                  <BarChart className="h-5 w-5 mr-1" />
                  <span>{course.level || "All Levels"}</span>
                </div>
                
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-1" />
                  <span>{course.certificateAvailable ? "Certificate of completion" : "No certificate"}</span>
                </div>
              </div>
              
              <p className="text-sm">Created by <span className="font-medium">{course.instructor}</span></p>
              <p className="text-sm">Last updated: {course.lastUpdated || "April 2025"}</p>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="overflow-hidden bg-white text-black">
                <div className="relative h-48">
                  <img 
                    src={course.image || '/placeholder.svg'} 
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-3xl font-bold mb-2">
                      {course.isFree ? (
                        <span className="text-green-600">Free</span>
                      ) : (
                        <span>${course.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full mb-3">
                    {course.isFree ? "Enroll Now" : "Buy Now"}
                  </Button>
                  
                  {!course.isFree && (
                    <Button variant="outline" className="w-full mb-4">Add to Wishlist</Button>
                  )}
                  
                  <div className="space-y-4 text-sm">
                    <p className="font-medium">This course includes:</p>
                    <div className="flex items-start">
                      <Play className="h-4 w-4 mt-0.5 mr-3 text-gray-500" />
                      <span>24 hours on-demand video</span>
                    </div>
                    <div className="flex items-start">
                      <FileText className="h-4 w-4 mt-0.5 mr-3 text-gray-500" />
                      <span>15 articles and resources</span>
                    </div>
                    <div className="flex items-start">
                      <Download className="h-4 w-4 mt-0.5 mr-3 text-gray-500" />
                      <span>25 downloadable resources</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-4 w-4 mt-0.5 mr-3 text-gray-500" />
                      <span>Full lifetime access</span>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-4 w-4 mt-0.5 mr-3 text-gray-500" />
                      <span>Certificate of completion</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Content */}
      <div className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="w-full mb-8">
                  <TabsTrigger value="overview" className="flex-1">Overview</TabsTrigger>
                  <TabsTrigger value="curriculum" className="flex-1">Curriculum</TabsTrigger>
                  <TabsTrigger value="instructor" className="flex-1">Instructor</TabsTrigger>
                  <TabsTrigger value="reviews" className="flex-1">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About This Course</h2>
                      <p className="text-gray-700 whitespace-pre-line">{courseDetails.description}</p>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">What You'll Learn</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {courseDetails.whatYouWillLearn.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mt-1 mr-2 text-green-500">✓</div>
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-2xl font-bold mb-4">Requirements</h2>
                      <ul className="list-disc pl-5 space-y-2">
                        {courseDetails.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="curriculum">
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-2xl font-bold">Course Content</h2>
                      <div className="text-sm text-gray-500">
                        {courseDetails.curriculum.reduce((sum, section) => sum + section.lessons.length, 0)} lessons • {course.duration} total length
                      </div>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {courseDetails.curriculum.map((section, sectionIndex) => (
                        <AccordionItem key={sectionIndex} value={`section-${sectionIndex}`}>
                          <AccordionTrigger className="hover:bg-gray-50 px-4">
                            <div className="text-left">
                              <div className="font-semibold">{section.title}</div>
                              <div className="text-xs text-gray-500">
                                {section.lessons.length} lessons • 
                                {section.lessons.reduce((total, lesson) => {
                                  if (lesson.duration) {
                                    const [mins, secs] = lesson.duration.split(':').map(Number);
                                    return total + mins * 60 + secs;
                                  }
                                  return total;
                                }, 0) / 60} min
                              </div>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-0">
                            <div className="divide-y">
                              {section.lessons.map((lesson, lessonIndex) => (
                                <div key={lessonIndex} className="flex items-center justify-between py-3 px-4 hover:bg-gray-50">
                                  <div className="flex items-center">
                                    {lesson.type === 'video' ? (
                                      <Play className="h-4 w-4 mr-3" />
                                    ) : lesson.type === 'quiz' ? (
                                      <FileText className="h-4 w-4 mr-3" />
                                    ) : lesson.type === 'exercise' ? (
                                      <BookOpen className="h-4 w-4 mr-3" />
                                    ) : (
                                      <FileText className="h-4 w-4 mr-3" />
                                    )}
                                    <span>{lesson.title}</span>
                                  </div>
                                  {lesson.duration && <span className="text-sm text-gray-500">{lesson.duration}</span>}
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                
                <TabsContent value="instructor">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Meet Your Instructor</h2>
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="h-32 w-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                            <Users className="h-16 w-16" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-1">{courseDetails.instructor.name}</h3>
                          <p className="text-gray-500 mb-3">{courseDetails.instructor.title}</p>
                          <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center">
                              <Star className="h-4 w-4 text-yellow-400 mr-1" fill="currentColor" />
                              <span className="text-sm">4.8 Instructor Rating</span>
                            </div>
                            <div className="flex items-center">
                              <Award className="h-4 w-4 mr-1" />
                              <span className="text-sm">24 Courses</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span className="text-sm">45,000+ Students</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{courseDetails.instructor.bio}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-6">Student Feedback</h2>
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/3 text-center">
                          <div className="text-5xl font-bold text-yellow-500 mb-2">{course.rating || 4.7}</div>
                          <div className="flex justify-center text-yellow-400 mb-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="h-5 w-5" fill={i < Math.floor(course.rating || 4.7) ? "currentColor" : "none"} />
                            ))}
                          </div>
                          <p className="text-gray-500">Course Rating</p>
                        </div>
                        <div className="md:w-2/3">
                          <div className="space-y-2">
                            {[5, 4, 3, 2, 1].map((rating) => (
                              <div key={rating} className="flex items-center">
                                <div className="w-12 text-sm text-right mr-2">{rating} stars</div>
                                <div className="flex-grow h-2 bg-gray-200 rounded-full">
                                  <div 
                                    className="h-2 bg-yellow-400 rounded-full" 
                                    style={{ 
                                      width: `${rating === 5 ? 78 : 
                                              rating === 4 ? 15 : 
                                              rating === 3 ? 5 : 
                                              rating === 2 ? 1 : 1}%` 
                                    }}
                                  ></div>
                                </div>
                                <div className="w-12 text-sm text-left ml-2">
                                  {rating === 5 ? '78%' : 
                                   rating === 4 ? '15%' : 
                                   rating === 3 ? '5%' : 
                                   rating === 2 ? '1%' : '1%'}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center py-8">
                      <p className="text-gray-500 mb-4">Reviews are only visible to enrolled students</p>
                      <Button>Enroll to See Reviews</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CourseDetails;
