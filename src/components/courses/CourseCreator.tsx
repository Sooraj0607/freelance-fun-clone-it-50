import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  FileText, Video, Upload, BookOpen, BarChart, 
  MessageSquare, Settings, Star, Users, Calendar 
} from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { useToast } from "@/components/ui/use-toast";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const CourseCreator = () => {
  const [currentTab, setCurrentTab] = useState('course-details');
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseCategory, setCourseCategory] = useState('');
  const [courseLevel, setCourseLevel] = useState('');
  const { toast } = useToast();
  
  // Mock data for curriculum
  const [curriculum, setCurriculum] = useState([
    {
      id: '1',
      title: 'Getting Started',
      isExpanded: false,
      lessons: [
        { id: '1-1', title: 'Introduction to the Course', type: 'video', duration: '10:25' },
        { id: '1-2', title: 'Setting Up Your Environment', type: 'video', duration: '15:40' }
      ]
    },
    {
      id: '2',
      title: 'Core Concepts',
      isExpanded: false,
      lessons: [
        { id: '2-1', title: 'Fundamental Principles', type: 'video', duration: '18:30' },
        { id: '2-2', title: 'Reading Material: Key Concepts', type: 'article' },
        { id: '2-3', title: 'Module Assessment', type: 'quiz' }
      ]
    }
  ]);

  // Mock data for AI-generated content recommendations
  const aiContentSuggestions = [
    "Introduction to Semiconductor Physics",
    "Understanding Band Gaps and Carrier Mobility",
    "Doping Effects in Semiconductor Materials",
    "PN Junction Theory and Applications",
    "MOSFET Operation and Characteristics"
  ];

  const handleSaveCourse = () => {
    toast({
      title: "Course Draft Saved",
      description: "Your course progress has been saved as a draft.",
      variant: "default",
    });
  };

  const handlePublishCourse = () => {
    toast({
      title: "Course Published",
      description: "Your course is now visible to students.",
      variant: "default",
    });
  };

  const handleAddSection = () => {
    const newSection = {
      id: `${curriculum.length + 1}`,
      title: `New Section ${curriculum.length + 1}`,
      isExpanded: true,
      lessons: []
    };
    setCurriculum([...curriculum, newSection]);
  };

  const handleAddLesson = (sectionId: string) => {
    const updatedCurriculum = curriculum.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: [
            ...section.lessons,
            { 
              id: `${sectionId}-${section.lessons.length + 1}`, 
              title: `New Lesson ${section.lessons.length + 1}`, 
              type: 'video',
              duration: '00:00'
            }
          ]
        };
      }
      return section;
    });
    setCurriculum(updatedCurriculum);
  };

  const handleGenerateWithAI = (contentType: string) => {
    toast({
      title: "AI Content Generation",
      description: `Generating ${contentType} with AI...`,
      variant: "default",
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Course Creator Studio</h1>
          <p className="text-gray-600">Create and manage your courses</p>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <Button variant="outline" onClick={handleSaveCourse}>Save Draft</Button>
          <Button onClick={handlePublishCourse}>Publish Course</Button>
        </div>
      </div>

      <Tabs defaultValue="course-details" className="w-full" onValueChange={setCurrentTab}>
        <div className="flex overflow-x-auto pb-2">
          <TabsList className="mb-8 h-auto flex flex-nowrap">
            <TabsTrigger value="course-details" className="px-4 py-2">
              <FileText className="h-4 w-4 mr-2" /> Course Details
            </TabsTrigger>
            <TabsTrigger value="curriculum" className="px-4 py-2">
              <BookOpen className="h-4 w-4 mr-2" /> Curriculum
            </TabsTrigger>
            <TabsTrigger value="media" className="px-4 py-2">
              <Video className="h-4 w-4 mr-2" /> Media
            </TabsTrigger>
            <TabsTrigger value="assessments" className="px-4 py-2">
              <BarChart className="h-4 w-4 mr-2" /> Assessments
            </TabsTrigger>
            <TabsTrigger value="settings" className="px-4 py-2">
              <Settings className="h-4 w-4 mr-2" /> Settings
            </TabsTrigger>
            <TabsTrigger value="ai-tools" className="px-4 py-2">
              <Star className="h-4 w-4 mr-2" /> AI Tools
            </TabsTrigger>
            <TabsTrigger value="preview" className="px-4 py-2">
              <Users className="h-4 w-4 mr-2" /> Preview
            </TabsTrigger>
          </TabsList>
        </div>
        
        {/* Course Details Tab */}
        <TabsContent value="course-details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
                  
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="course-title">Course Title</Label>
                      <Input 
                        id="course-title" 
                        placeholder="Enter a descriptive title" 
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course-description">Course Description</Label>
                      <Textarea 
                        id="course-description" 
                        placeholder="Describe what students will learn" 
                        className="min-h-[150px]"
                        value={courseDescription}
                        onChange={(e) => setCourseDescription(e.target.value)}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="course-category">Category</Label>
                        <Select value={courseCategory} onValueChange={setCourseCategory}>
                          <SelectTrigger id="course-category">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vlsi">VLSI Design</SelectItem>
                            <SelectItem value="rtl">RTL Design</SelectItem>
                            <SelectItem value="layout">Layout Design</SelectItem>
                            <SelectItem value="dsp">DSP</SelectItem>
                            <SelectItem value="verification">Verification</SelectItem>
                            <SelectItem value="analog">Analog Design</SelectItem>
                            <SelectItem value="asic">ASIC Design</SelectItem>
                            <SelectItem value="fpga">FPGA</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="course-level">Level</Label>
                        <Select value={courseLevel} onValueChange={setCourseLevel}>
                          <SelectTrigger id="course-level">
                            <SelectValue placeholder="Select difficulty level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner</SelectItem>
                            <SelectItem value="intermediate">Intermediate</SelectItem>
                            <SelectItem value="advanced">Advanced</SelectItem>
                            <SelectItem value="expert">Expert</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="course-objectives">Learning Objectives</Label>
                      <Textarea 
                        id="course-objectives" 
                        placeholder="List what students will learn (one per line)" 
                        className="min-h-[100px]"
                      />
                      <p className="text-xs text-gray-500">Enter each objective on a new line</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Course Requirements</h2>
                  <div className="space-y-2">
                    <Label htmlFor="course-prerequisites">Prerequisites</Label>
                    <Textarea 
                      id="course-prerequisites" 
                      placeholder="List any prerequisites (one per line)" 
                      className="min-h-[100px]"
                    />
                    <p className="text-xs text-gray-500">Enter each prerequisite on a new line</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Instructor Information</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="instructor-bio">Instructor Bio</Label>
                      <Textarea 
                        id="instructor-bio" 
                        placeholder="Tell students about your expertise" 
                        className="min-h-[100px]"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Course Image</h2>
                  <div className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
                    <Upload className="h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500 mb-2">Drag & drop or click to upload</p>
                    <p className="text-xs text-gray-400 text-center">1280x720 pixels recommended</p>
                    <Button variant="outline" className="mt-4">Upload Image</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Course Settings</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="is-free">Free Course</Label>
                        <p className="text-xs text-gray-500">Make this course free for all students</p>
                      </div>
                      <Switch id="is-free" />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="certificate">Certificate</Label>
                        <p className="text-xs text-gray-500">Issue certificates upon completion</p>
                      </div>
                      <Switch id="certificate" defaultChecked />
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="forum">Community Forum</Label>
                        <p className="text-xs text-gray-500">Enable discussion forum for students</p>
                      </div>
                      <Switch id="forum" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Publishing Checklist</h2>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-sm">Basic information</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-gray-400 text-xs">○</span>
                      </div>
                      <span className="text-sm">Course image</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-gray-400 text-xs">○</span>
                      </div>
                      <span className="text-sm">Curriculum (min. 5 lessons)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mr-2 flex-shrink-0">
                        <span className="text-gray-400 text-xs">○</span>
                      </div>
                      <span className="text-sm">Pricing information</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Curriculum Tab */}
        <TabsContent value="curriculum">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Course Curriculum</h2>
                    <Button onClick={handleAddSection}>
                      Add Section
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {curriculum.map((section) => (
                      <Card key={section.id} className="border border-gray-200">
                        <div className="p-4 bg-gray-50 flex justify-between items-center">
                          <div className="font-medium">Section {section.id}: {section.title}</div>
                          <div className="flex gap-2">
                            <Button variant="ghost" size="sm">Edit</Button>
                            <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <div className="space-y-3">
                            {section.lessons.map((lesson) => (
                              <div key={lesson.id} className="flex items-center justify-between p-3 bg-white border rounded-md">
                                <div className="flex items-center">
                                  {lesson.type === 'video' ? (
                                    <Video className="h-4 w-4 mr-3 text-blue-600" />
                                  ) : lesson.type === 'article' ? (
                                    <FileText className="h-4 w-4 mr-3 text-green-600" />
                                  ) : (
                                    <BarChart className="h-4 w-4 mr-3 text-purple-600" />
                                  )}
                                  <div>
                                    <div className="font-medium text-sm">{lesson.title}</div>
                                    <div className="text-xs text-gray-500">
                                      {lesson.type === 'video' ? 'Video Lecture' : 
                                       lesson.type === 'article' ? 'Article' : 'Quiz'}
                                      {lesson.duration && ` • ${lesson.duration}`}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex gap-2">
                                  <Button variant="ghost" size="sm">Edit</Button>
                                  <Button variant="ghost" size="sm" className="text-red-600">Delete</Button>
                                </div>
                              </div>
                            ))}
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="w-full mt-2"
                              onClick={() => handleAddLesson(section.id)}
                            >
                              Add Lesson
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Lesson Types</h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Video className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Video Lecture</h3>
                        <p className="text-xs text-gray-500">Upload or record video content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <FileText className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Article</h3>
                        <p className="text-xs text-gray-500">Create text-based content</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BarChart className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Quiz</h3>
                        <p className="text-xs text-gray-500">Assess student knowledge</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <BookOpen className="h-5 w-5 text-amber-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Assignment</h3>
                        <p className="text-xs text-gray-500">Practical exercises and homework</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Calendar className="h-5 w-5 text-indigo-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium text-sm">Live Session</h3>
                        <p className="text-xs text-gray-500">Schedule real-time meetings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Curriculum Tips</h2>
                  <div className="space-y-3 text-sm">
                    <p>• Structure your content in logical sections</p>
                    <p>• Mix different content types to engage students</p>
                    <p>• Keep video lectures under 10 minutes</p>
                    <p>• Include practice exercises after key concepts</p>
                    <p>• End each section with a quiz or assessment</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Import Content</h2>
                  <p className="text-sm text-gray-600 mb-4">Import existing content from various sources</p>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" /> Import from PDF
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Video className="h-4 w-4 mr-2" /> Import from YouTube
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="h-4 w-4 mr-2" /> Import from File
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* AI Tools Tab */}
        <TabsContent value="ai-tools">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">AI Content Generator</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ai-prompt">What would you like to create?</Label>
                      <Textarea 
                        id="ai-prompt" 
                        placeholder="E.g., Generate an introduction for a course on VLSI design fundamentals" 
                        className="min-h-[100px]"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <Button onClick={() => handleGenerateWithAI('course description')}>
                        <FileText className="h-4 w-4 mr-2" /> Generate Description
                      </Button>
                      <Button onClick={() => handleGenerateWithAI('learning objectives')}>
                        <BarChart className="h-4 w-4 mr-2" /> Generate Objectives
                      </Button>
                      <Button onClick={() => handleGenerateWithAI('course outline')}>
                        <BookOpen className="h-4 w-4 mr-2" /> Generate Outline
                      </Button>
                      <Button onClick={() => handleGenerateWithAI('quiz questions')}>
                        <MessageSquare className="h-4 w-4 mr-2" /> Generate Quiz
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">AI-Generated Content Suggestions</h2>
                  <p className="text-sm text-gray-600 mb-4">Select topics to generate detailed content</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {aiContentSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                        <span>{suggestion}</span>
                        <Button size="sm" variant="ghost">Generate</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">AI Tools</h2>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="content">
                      <AccordionTrigger>Content Creation</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm">Generate course descriptions, lesson plans, and learning objectives with AI assistance.</p>
                          <Button variant="outline" size="sm" className="w-full">Try Content Creation</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="image">
                      <AccordionTrigger>Image Generation</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm">Create custom images and diagrams for your course materials.</p>
                          <Button variant="outline" size="sm" className="w-full">Try Image Generation</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="assessment">
                      <AccordionTrigger>Assessment Creation</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm">Generate quizzes, tests, and assessments based on your course content.</p>
                          <Button variant="outline" size="sm" className="w-full">Try Assessment Creation</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="summarization">
                      <AccordionTrigger>Content Summarization</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <p className="text-sm">Create summaries and key points from longer content.</p>
                          <Button variant="outline" size="sm" className="w-full">Try Summarization</Button>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-lg font-semibold mb-4">Content Enhancement</h2>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Improve Content</Label>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-start">
                        <MessageSquare className="h-4 w-4 mr-2" /> Grammar & Style Check
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Transform Content</Label>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-start">
                        <FileText className="h-4 w-4 mr-2" /> Simplify Language
                      </Button>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-start">
                        <BarChart className="h-4 w-4 mr-2" /> Make More Technical
                      </Button>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Generate Supplements</Label>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-start">
                        <BookOpen className="h-4 w-4 mr-2" /> Create Practice Exercises
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Other tabs would be implemented similarly */}
        <TabsContent value="media">
          <div className="text-center py-12">
            <Video className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">Media Upload Center</h3>
            <p className="text-gray-500 mb-4">Manage your course videos, presentations, and other media</p>
            <Button>Upload Media</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="assessments">
          <div className="text-center py-12">
            <BarChart className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">Assessment Center</h3>
            <p className="text-gray-500 mb-4">Create quizzes, tests, and assignments</p>
            <Button>Create Assessment</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="settings">
          <div className="text-center py-12">
            <Settings className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">Course Settings</h3>
            <p className="text-gray-500 mb-4">Configure pricing, visibility, and course parameters</p>
            <Button>Edit Settings</Button>
          </div>
        </TabsContent>
        
        <TabsContent value="preview">
          <div className="text-center py-12">
            <Users className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium mb-1">Course Preview</h3>
            <p className="text-gray-500 mb-4">See how your course will appear to students</p>
            <Button>View Preview</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseCreator;
