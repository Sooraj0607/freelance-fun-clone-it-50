
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Clock, Award, Upload, CheckCircle, AlertCircle, HelpCircle } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";
import { Badge } from '@/components/ui/badge';

// Mock assignments data
const assignments = [
  {
    id: '1',
    title: 'Week 1: Circuit Design Basics',
    description: 'Implement a simple circuit based on the specifications provided in the lecture.',
    dueDate: '2023-06-15T23:59:59',
    status: 'completed',
    score: 95,
    maxScore: 100,
    feedback: 'Excellent work! Your circuit design meets all the requirements and is well-documented.',
    type: 'project'
  },
  {
    id: '2',
    title: 'Week 2: Signal Analysis',
    description: 'Analyze the given signal and provide a comprehensive report on its characteristics.',
    dueDate: '2023-06-22T23:59:59',
    status: 'pending',
    type: 'assignment'
  },
  {
    id: '3',
    title: 'Week 3: Design Optimization',
    description: 'Optimize the provided circuit design for power efficiency while maintaining performance.',
    dueDate: '2023-06-29T23:59:59',
    status: 'overdue',
    type: 'project'
  }
];

// Mock quizzes data
const quizzes = [
  {
    id: 'q1',
    title: 'Module 1 Assessment',
    description: 'Test your knowledge of basic semiconductor principles.',
    questions: 15,
    timeLimit: 30, // minutes
    status: 'completed',
    score: 14,
    maxScore: 15,
    feedback: 'Outstanding performance! You\'ve demonstrated an excellent understanding of the principles.'
  },
  {
    id: 'q2',
    title: 'Module 2 Assessment',
    description: 'Evaluate your understanding of circuit design fundamentals.',
    questions: 20,
    timeLimit: 45, // minutes
    status: 'not_started'
  },
  {
    id: 'q3',
    title: 'Midterm Quiz',
    description: 'Comprehensive assessment covering all topics from the first half of the course.',
    questions: 30,
    timeLimit: 60, // minutes
    status: 'not_started'
  }
];

// Mock practice exercises
const practiceExercises = [
  {
    id: 'p1',
    title: 'Logic Gate Implementation',
    description: 'Practice implementing basic logic gates and combinations.',
    difficulty: 'Easy',
    estimatedTime: 20,
    status: 'completed'
  },
  {
    id: 'p2',
    title: 'Signal Integrity Analysis',
    description: 'Analyze signal integrity issues in high-speed circuits.',
    difficulty: 'Medium',
    estimatedTime: 35,
    status: 'in_progress'
  },
  {
    id: 'p3',
    title: 'Power Optimization Techniques',
    description: 'Practice applying various power optimization techniques to circuit designs.',
    difficulty: 'Hard',
    estimatedTime: 45,
    status: 'not_started'
  }
];

interface CourseAssignmentsProps {
  courseId?: string;
}

const CourseAssignments: React.FC<CourseAssignmentsProps> = ({ courseId }) => {
  const [selectedTab, setSelectedTab] = useState('assignments');
  const { toast } = useToast();

  const handleStartQuiz = (quizId: string, quizTitle: string) => {
    toast({
      title: "Quiz Started",
      description: `You've started the ${quizTitle}. Good luck!`,
      variant: "default",
    });
  };

  const handleSubmitAssignment = (assignmentId: string) => {
    toast({
      title: "Submission Started",
      description: "Please select your files to upload.",
      variant: "default",
    });
  };

  const handleStartExercise = (exerciseId: string, exerciseTitle: string) => {
    toast({
      title: "Exercise Started",
      description: `You've started the ${exerciseTitle} exercise.`,
      variant: "default",
    });
  };

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  };

  // Helper function to determine if a due date is approaching (within 3 days)
  const isDueSoon = (dateString: string) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    const diffTime = dueDate.getTime() - today.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays > 0 && diffDays < 3;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Assignments & Assessments</h2>

      <Tabs defaultValue="assignments" className="w-full" onValueChange={setSelectedTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="quizzes">Quizzes & Tests</TabsTrigger>
          <TabsTrigger value="practice">Practice Exercises</TabsTrigger>
        </TabsList>

        <TabsContent value="assignments">
          <div className="space-y-4">
            {assignments.map(assignment => (
              <Card key={assignment.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        assignment.status === 'completed' ? 'bg-green-100 text-green-600' : 
                        assignment.status === 'overdue' ? 'bg-red-100 text-red-600' : 
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {assignment.status === 'completed' ? <CheckCircle className="h-5 w-5" /> : 
                         assignment.status === 'overdue' ? <AlertCircle className="h-5 w-5" /> : 
                         <Clock className="h-5 w-5" />}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{assignment.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{assignment.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>Due: {formatDate(assignment.dueDate)}</span>
                            {isDueSoon(assignment.dueDate) && assignment.status === 'pending' && (
                              <Badge variant="outline" className="ml-2 bg-yellow-50 text-yellow-700 border-yellow-200">
                                Due Soon
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <FileText className="h-4 w-4 mr-1 text-gray-500" />
                            <span>Type: {assignment.type.charAt(0).toUpperCase() + assignment.type.slice(1)}</span>
                          </div>
                          
                          {assignment.status === 'completed' && (
                            <div className="flex items-center text-sm text-green-600">
                              <Award className="h-4 w-4 mr-1" />
                              <span>Score: {assignment.score}/{assignment.maxScore}</span>
                            </div>
                          )}
                        </div>

                        {assignment.status === 'completed' && assignment.feedback && (
                          <div className="mt-3 p-3 bg-gray-50 border rounded-md text-sm">
                            <p className="font-medium mb-1">Instructor Feedback:</p>
                            <p className="text-gray-700">{assignment.feedback}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:self-center flex-shrink-0">
                      {assignment.status === 'completed' ? (
                        <Button variant="outline" className="w-[120px]">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-600" /> Completed
                        </Button>
                      ) : assignment.status === 'overdue' ? (
                        <Button 
                          className="w-[120px]"
                          onClick={() => handleSubmitAssignment(assignment.id)}
                        >
                          <Upload className="h-4 w-4 mr-2" /> Submit Late
                        </Button>
                      ) : (
                        <Button 
                          className="w-[120px]"
                          onClick={() => handleSubmitAssignment(assignment.id)}
                        >
                          <Upload className="h-4 w-4 mr-2" /> Submit
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="quizzes">
          <div className="space-y-4">
            {quizzes.map(quiz => (
              <Card key={quiz.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        quiz.status === 'completed' ? 'bg-green-100 text-green-600' : 
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {quiz.status === 'completed' ? 
                          <CheckCircle className="h-5 w-5" /> : 
                          <HelpCircle className="h-5 w-5" />
                        }
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium">{quiz.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{quiz.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                          <div className="flex items-center text-sm">
                            <HelpCircle className="h-4 w-4 mr-1 text-gray-500" />
                            <span>{quiz.questions} Questions</span>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>Time Limit: {quiz.timeLimit} minutes</span>
                          </div>
                          
                          {quiz.status === 'completed' && (
                            <div className="flex items-center text-sm text-green-600">
                              <Award className="h-4 w-4 mr-1" />
                              <span>Score: {quiz.score}/{quiz.maxScore}</span>
                            </div>
                          )}
                        </div>

                        {quiz.status === 'completed' && quiz.feedback && (
                          <div className="mt-3 p-3 bg-gray-50 border rounded-md text-sm">
                            <p className="font-medium mb-1">Feedback:</p>
                            <p className="text-gray-700">{quiz.feedback}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="md:self-center flex-shrink-0">
                      {quiz.status === 'completed' ? (
                        <div className="space-y-2">
                          <Button variant="outline" className="w-full">
                            Review Answers
                          </Button>
                          <Progress value={Math.round((quiz.score / quiz.maxScore) * 100)} className="h-2 w-[120px]" />
                          <p className="text-xs text-center">{Math.round((quiz.score / quiz.maxScore) * 100)}% Score</p>
                        </div>
                      ) : (
                        <Button 
                          className="w-[120px]"
                          onClick={() => handleStartQuiz(quiz.id, quiz.title)}
                        >
                          Start Quiz
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="practice">
          <div className="space-y-4">
            {practiceExercises.map(exercise => (
              <Card key={exercise.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-full ${
                        exercise.status === 'completed' ? 'bg-green-100 text-green-600' : 
                        exercise.status === 'in_progress' ? 'bg-yellow-100 text-yellow-600' : 
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {exercise.status === 'completed' ? <CheckCircle className="h-5 w-5" /> : 
                         exercise.status === 'in_progress' ? <Clock className="h-5 w-5" /> : 
                         <HelpCircle className="h-5 w-5" />}
                      </div>
                      
                      <div>
                        <h3 className="font-medium">{exercise.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{exercise.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3">
                          <div className="flex items-center text-sm">
                            <span className={`px-2 py-0.5 rounded-full text-xs ${
                              exercise.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 
                              exercise.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                              'bg-red-100 text-red-700'
                            }`}>
                              {exercise.difficulty}
                            </span>
                          </div>
                          
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>Est. Time: {exercise.estimatedTime} mins</span>
                          </div>
                          
                          {exercise.status !== 'not_started' && (
                            <div className="flex items-center text-sm">
                              <span className={`px-2 py-0.5 rounded-full text-xs ${
                                exercise.status === 'completed' ? 'bg-green-100 text-green-700' : 
                                'bg-yellow-100 text-yellow-700'
                              }`}>
                                {exercise.status === 'completed' ? 'Completed' : 'In Progress'}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:self-center flex-shrink-0">
                      {exercise.status === 'completed' ? (
                        <Button variant="outline" className="w-[120px]">
                          Review
                        </Button>
                      ) : exercise.status === 'in_progress' ? (
                        <Button className="w-[120px]">
                          Continue
                        </Button>
                      ) : (
                        <Button 
                          className="w-[120px]"
                          onClick={() => handleStartExercise(exercise.id, exercise.title)}
                        >
                          Start
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mt-8">
        <div className="flex items-start">
          <div className="bg-blue-100 rounded-full p-2 mr-4">
            <Award className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-blue-800 mb-1">Your Progress</h3>
            <p className="text-sm text-blue-700">
              {selectedTab === 'assignments' 
                ? 'Complete all assignments to earn your course certificate.' 
                : selectedTab === 'quizzes'
                ? 'Quizzes help reinforce your learning. Take them multiple times to master the material.'
                : 'Practice exercises help you apply what you've learned without affecting your grade.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseAssignments;
