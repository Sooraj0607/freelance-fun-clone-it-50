import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, BookOpen, Award, Star, Calendar, BarChart, FileText, Play, MessageSquare } from 'lucide-react';
import { enrolledCoursesData } from '@/data/coursesData';
import CourseCard from '@/components/CourseCard';

const CourseDashboard = () => {
  const navigate = useNavigate();
  
  // Mock data for learning path
  const learningPath = {
    title: "Semiconductor Design Professional",
    progress: 45,
    nextMilestone: "ASIC Design Essentials",
    remainingCourses: 3
  };

  // Mock data for learning activity
  const learningActivity = [
    { week: "Week 1", hours: 8 },
    { week: "Week 2", hours: 12 },
    { week: "Week 3", hours: 5 },
    { week: "Week 4", hours: 10 }
  ];
  
  // Mock data for upcoming deadlines
  const upcomingDeadlines = [
    {
      id: "deadline1",
      title: "Submit FPGA Design Project",
      course: "FPGA Design with VHDL",
      dueDate: "2023-06-15",
      type: "assignment"
    },
    {
      id: "deadline2",
      title: "Complete Module 2 Quiz",
      course: "SystemVerilog for ASIC Design",
      dueDate: "2023-06-18",
      type: "quiz"
    }
  ];

  // Mock data for recent achievements
  const recentAchievements = [
    {
      id: "ach1",
      title: "Perfect Score",
      description: "You scored 100% on the Layout Design Quiz",
      date: "2023-05-25"
    },
    {
      id: "ach2",
      title: "Completion Badge",
      description: "Completed Basics of Digital Design module",
      date: "2023-06-01"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Learning Dashboard</h1>
          <p className="text-gray-600">Track your progress and manage your learning journey</p>
        </div>
        <div className="mt-4 md:mt-0">
          <Button onClick={() => navigate('/courses')}>
            Browse More Courses
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Course Progress Card */}
        <Card className="col-span-1 md:col-span-2 hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Current Learning Path</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{learningPath.title}</h3>
                  <p className="text-sm text-gray-600">Next milestone: {learningPath.nextMilestone}</p>
                </div>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                  {learningPath.remainingCourses} courses left
                </span>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between items-center text-sm">
                  <span>Overall progress</span>
                  <span className="font-medium">{learningPath.progress}%</span>
                </div>
                <Progress value={learningPath.progress} className="h-2" />
              </div>
              
              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-primary">3</h4>
                  <p className="text-xs text-gray-600">Courses<br />Completed</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-yellow-500">12</h4>
                  <p className="text-xs text-gray-600">Badges<br />Earned</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <h4 className="text-2xl font-bold text-green-500">85%</h4>
                  <p className="text-xs text-gray-600">Test<br />Average</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Stats Card */}
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Learning Activity</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-primary">35</h3>
                  <p className="text-sm text-gray-600">Hours this month</p>
                </div>
                <BarChart className="h-12 w-12 text-gray-300" />
              </div>
              
              <div className="pt-4">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span>Hours by week</span>
                  <span className="text-green-600">+15% vs. last month</span>
                </div>
                <div className="flex items-end h-32 gap-2">
                  {learningActivity.map((week, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-primary/80 rounded-t-sm" 
                        style={{ height: `${(week.hours / 12) * 100}%` }}
                      ></div>
                      <span className="text-xs mt-1">{week.week}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="in-progress" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
          <TabsTrigger value="bookmarked">Bookmarked</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
        </TabsList>
        
        {/* In Progress Tab */}
        <TabsContent value="in-progress">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Continue Learning</h2>
              <div className="grid grid-cols-1 gap-6">
                {enrolledCoursesData.slice(0, 2).map(course => (
                  <Card key={course.id} className="hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/4">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover aspect-video sm:aspect-square"
                        />
                      </div>
                      <div className="p-4 w-full sm:w-3/4">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold mb-2">{course.title}</h3>
                          <span className="text-sm bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            {course.progress}% Complete
                          </span>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                        
                        <div className="space-y-1 mb-4">
                          <Progress value={course.progress} className="h-2" />
                          <div className="flex justify-between text-xs">
                            <span>{course.progress}% complete</span>
                            <span>Est. {course.duration} remaining</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                              <Play className="h-4 w-4" />
                            </div>
                            <span className="text-sm">Continue from Module 3</span>
                          </div>
                          
                          <Button variant="outline" size="sm" onClick={() => navigate(`/courses/${course.id}`)}>
                            Continue
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Calendar className="h-5 w-5 mr-2 text-primary" /> Upcoming Deadlines
                  </h3>
                  
                  <div className="space-y-3">
                    {upcomingDeadlines.map(deadline => (
                      <div key={deadline.id} className="p-3 bg-gray-50 rounded-lg">
                        <h4 className="font-medium text-sm">{deadline.title}</h4>
                        <p className="text-xs text-gray-600">Course: {deadline.course}</p>
                        <div className="flex justify-between items-center mt-2">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            deadline.type === 'assignment' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {deadline.type === 'assignment' ? 'Assignment' : 'Quiz'}
                          </span>
                          <span className="text-xs text-red-600">Due: {new Date(deadline.dueDate).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="link" className="w-full mt-2 text-sm">
                    View All Deadlines
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-primary" /> Recent Achievements
                  </h3>
                  
                  <div className="space-y-3">
                    {recentAchievements.map(achievement => (
                      <div key={achievement.id} className="flex items-start space-x-3">
                        <div className="bg-primary/10 rounded-full p-2 text-primary">
                          <Award className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{achievement.title}</h4>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                          <p className="text-xs text-gray-400 mt-1">{new Date(achievement.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="link" className="w-full mt-2 text-sm">
                    View All Achievements
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Recommended Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Complete Quiz</h3>
                  <p className="text-sm text-gray-600">Module 2 Assessment test is waiting</p>
                  <Button className="w-full mt-4">Start Quiz</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Join Discussion</h3>
                  <p className="text-sm text-gray-600">3 new posts in your enrolled courses</p>
                  <Button variant="outline" className="w-full mt-4">View Discussions</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Watch Lecture</h3>
                  <p className="text-sm text-gray-600">Continue your progress in SystemVerilog</p>
                  <Button variant="outline" className="w-full mt-4">Continue</Button>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium mb-2">Practical Exercise</h3>
                  <p className="text-sm text-gray-600">Try the hands-on lab exercise</p>
                  <Button variant="outline" className="w-full mt-4">Start Exercise</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        {/* Other tabs */}
        <TabsContent value="completed">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {enrolledCoursesData.filter(c => c.progress === 100).map(course => (
              <CourseCard key={course.id} course={course} enrolled={true} />
            ))}
            {enrolledCoursesData.filter(c => c.progress === 100).length === 0 && (
              <div className="col-span-3 text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                <h3 className="text-lg font-medium mb-1">No completed courses yet</h3>
                <p className="text-gray-500 mb-4">Complete your in-progress courses to see them here</p>
                <Button onClick={() => navigate('/courses')}>Browse Courses</Button>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="bookmarked">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-3 text-center py-12">
              <BookOpen className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <h3 className="text-lg font-medium mb-1">No bookmarked courses</h3>
              <p className="text-gray-500 mb-4">Bookmark courses to save them for later</p>
              <Button onClick={() => navigate('/courses')}>Browse Courses</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="certificates">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">My Certificates</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-6 bg-primary/10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold mb-1">SystemVerilog for ASIC Design & Verification</h3>
                        <p className="text-sm">Issued: June 3, 2023</p>
                      </div>
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400" fill="currentColor" />
                        <span className="text-sm ml-1">Top 15% of students</span>
                      </div>
                      <Button size="sm">Download</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="md:col-span-2 lg:col-span-2">
                <Card className="h-full flex flex-col">
                  <CardContent className="p-6 flex-grow flex flex-col justify-center items-center text-center">
                    <BookOpen className="h-12 w-12 text-gray-300 mb-4" />
                    <h3 className="font-medium mb-2">Earn more certificates</h3>
                    <p className="text-gray-500 mb-4 max-w-md">Complete more courses to earn certificates that showcase your skills to employers</p>
                    <Button onClick={() => navigate('/courses')}>Browse Courses</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-full p-2 mr-4">
                  <Award className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-medium text-blue-800 mb-1">Certificate Value</h3>
                  <p className="text-sm text-blue-700">
                    Your certificates are shareable on LinkedIn and other professional platforms. 
                    They validate your skills and knowledge to potential employers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseDashboard;
