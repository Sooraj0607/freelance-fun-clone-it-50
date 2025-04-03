
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, BookOpen, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { enrolledCoursesData } from '@/data/coursesData';
import { userProfile, completedTasks, userSkills, userProjects, userCertifications } from '@/data/profileData';

const Profile = () => {
  const totalTasksCount = 50; // Assuming there are 50 total tasks in the system
  const completedTasksCount = completedTasks.length;
  const completionPercentage = Math.round((completedTasksCount / totalTasksCount) * 100);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Profile Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Avatar className="h-24 w-24 border-4 border-white">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>{userProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{userProfile.name}</h1>
              <p className="text-lg opacity-90 mb-4">{userProfile.title}</p>
              
              <div className="flex flex-wrap gap-2">
                {userProfile.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Progress Overview */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{enrolledCoursesData.length}</h3>
              <p className="text-gray-600">Courses in Progress</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{userCertifications.length}</h3>
              <p className="text-gray-600">Certifications Earned</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                <Check className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{completedTasksCount}/{totalTasksCount}</h3>
              <p className="text-gray-600">Tasks Completed</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-background flex-grow">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="mb-8">
              <TabsTrigger value="progress">Progress Tracking</TabsTrigger>
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="certifications">Certifications</TabsTrigger>
            </TabsList>
            
            {/* Progress Tracking Tab */}
            <TabsContent value="progress">
              <h2 className="text-2xl font-semibold mb-6">Your Learning Progress</h2>
              
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Overall Completion</CardTitle>
                  <CardDescription>Your progress across all learning paths</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Total Progress</span>
                        <span>{completionPercentage}%</span>
                      </div>
                      <Progress value={completionPercentage} className="h-2" />
                    </div>
                    
                    <h3 className="text-lg font-medium mt-6 mb-4">Courses Progress</h3>
                    
                    {enrolledCoursesData.map(course => (
                      <div key={course.id} className="mb-4">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{course.title}</span>
                          <span className="text-sm">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <h3 className="text-xl font-medium mb-4">Recent Tasks Completed</h3>
              <Card>
                <CardContent className="pt-6">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Task</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Completed On</TableHead>
                        <TableHead>Points</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {completedTasks.slice(0, 5).map((task, index) => (
                        <TableRow key={index}>
                          <TableCell className="font-medium">{task.name}</TableCell>
                          <TableCell>{task.category}</TableCell>
                          <TableCell>{task.completedDate}</TableCell>
                          <TableCell>{task.points}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm" className="ml-auto">View All Tasks</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Portfolio Tab */}
            <TabsContent value="portfolio">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Your Portfolio</h2>
                <Button size="sm" variant="outline">Edit Portfolio</Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {userProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-48 bg-gray-100">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.category}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">View Project</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center">
                <Button>Add New Project</Button>
              </div>
            </TabsContent>
            
            {/* Skills Tab */}
            <TabsContent value="skills">
              <h2 className="text-2xl font-semibold mb-6">Your Skills</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {userSkills.map((skillCategory, index) => (
                      <div key={index} className="mb-6">
                        <h3 className="text-lg font-medium mb-4">{skillCategory.category}</h3>
                        <div className="space-y-4">
                          {skillCategory.skills.map((skill, skillIndex) => (
                            <div key={skillIndex}>
                              <div className="flex justify-between mb-1">
                                <span className="text-sm font-medium">{skill.name}</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-4 w-4 ${i < skill.level ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                                    />
                                  ))}
                                </div>
                              </div>
                              <Progress value={skill.level * 20} className="h-1" />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Add New Skill</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Certifications Tab */}
            <TabsContent value="certifications">
              <h2 className="text-2xl font-semibold mb-6">Your Certifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {userCertifications.map((cert, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="h-40 bg-gradient-to-r from-primary/20 to-primary/5 flex items-center justify-center">
                      <Award className="h-16 w-16 text-primary" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg">{cert.title}</CardTitle>
                      <CardDescription>{cert.issuer}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="text-sm text-gray-600 mb-1">Earned on: {cert.date}</div>
                      <div className="text-sm text-gray-600">Credential ID: {cert.credentialId}</div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm" className="w-full">View Certificate</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Profile;
