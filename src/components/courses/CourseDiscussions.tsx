
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { MessageSquare, ThumbsUp, Search, Star, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from "@/components/ui/use-toast";

// Mock discussion data
const discussionThreads = [
  {
    id: '1',
    title: 'Help with Exercise 3.2',
    author: 'Samantha Davis',
    date: '2 days ago',
    content: 'I\'m having trouble understanding how to implement the circuit from Exercise 3.2. Can someone explain the approach?',
    likes: 8,
    replies: [
      {
        id: '1-1',
        author: 'Dr. Michael Chen',
        isInstructor: true,
        date: '1 day ago',
        content: 'The key is to start by analyzing the transfer function. Try drawing the equivalent circuit first, then work through the equations. Happy to provide more guidance if needed!',
        likes: 12
      },
      {
        id: '1-2',
        author: 'Alex Wong',
        date: '12 hours ago',
        content: 'I found it helpful to break down the problem into smaller components and then integrate them. There\'s also a great example in the supplementary materials that uses a similar approach.',
        likes: 5
      }
    ]
  },
  {
    id: '2',
    title: 'Additional resources for advanced topics',
    author: 'James Wilson',
    date: '4 days ago',
    content: 'Does anyone have recommendations for additional resources on advanced topics covered in week 6? Looking for more in-depth materials about signal integrity.',
    likes: 15,
    replies: [
      {
        id: '2-1',
        author: 'Linda Park',
        date: '3 days ago',
        content: 'I found "Advanced Signal Integrity for High-Speed Digital Design" by Hall and Heck to be an excellent resource. It covers many of the topics from week 6 in greater detail.',
        likes: 7
      }
    ]
  },
  {
    id: '3',
    title: 'Project submission guidelines clarification',
    author: 'Thomas Brown',
    date: '1 week ago',
    content: 'Could someone clarify the submission requirements for the final project? Specifically, should we include the simulation results in the main report or as a separate appendix?',
    likes: 10,
    replies: [
      {
        id: '3-1',
        author: 'Dr. Michael Chen',
        isInstructor: true,
        date: '6 days ago',
        content: 'Great question! Please include a summary of key simulation results in the main report, but place the detailed outputs and additional figures in an appendix. This helps keep the main report focused while still providing all necessary information.',
        likes: 22
      }
    ]
  }
];

const announcements = [
  {
    id: 'a1',
    title: 'Course Update: New Exercises Added',
    author: 'Dr. Michael Chen',
    date: '3 days ago',
    content: 'I\'ve added new optional exercises to Week 4 to help reinforce the concepts. These aren\'t required but provide good additional practice.'
  },
  {
    id: 'a2',
    title: 'Live Q&A Session Next Week',
    author: 'Dr. Michael Chen',
    date: '1 week ago',
    content: 'I\'ll be holding a live Q&A session next Tuesday at 3 PM EST to answer questions about the midterm project. Please submit your questions in advance if possible.'
  }
];

interface CourseDiscussionsProps {
  courseId?: string;
}

const CourseDiscussions: React.FC<CourseDiscussionsProps> = ({ courseId }) => {
  const [newQuestion, setNewQuestion] = useState('');
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();

  const handlePostQuestion = () => {
    if (newQuestionTitle.trim() === '' || newQuestion.trim() === '') {
      toast({
        title: "Error",
        description: "Please provide both a title and content for your question.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Question Posted",
      description: "Your question has been submitted to the discussion forum.",
      variant: "default",
    });

    setNewQuestion('');
    setNewQuestionTitle('');
  };

  const handleLike = (threadId: string, replyId?: string) => {
    toast({
      title: "Thank you!",
      description: "Your vote has been recorded.",
      variant: "default",
    });
  };

  // Filter discussions based on search
  const filteredDiscussions = discussionThreads.filter(thread => 
    thread.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    thread.replies.some(reply => 
      reply.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reply.author.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="space-y-6">
      <Tabs defaultValue="discussions" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="discussions">Discussions</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>

        <TabsContent value="discussions">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <h2 className="text-2xl font-bold">Course Discussions</h2>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search discussions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium mb-3">Ask a Question</h3>
              <div className="space-y-3">
                <Input
                  placeholder="Question title"
                  value={newQuestionTitle}
                  onChange={(e) => setNewQuestionTitle(e.target.value)}
                  className="mb-2"
                />
                <Textarea 
                  placeholder="Type your question here..." 
                  className="min-h-[100px]"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button onClick={handlePostQuestion}>
                    <MessageSquare className="h-4 w-4 mr-2" /> Post Question
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            {filteredDiscussions.length > 0 ? (
              filteredDiscussions.map(thread => (
                <Card key={thread.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4">
                        <Avatar className="h-10 w-10">
                          <AvatarFallback>{thread.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-medium">{thread.title}</h3>
                          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span>{thread.author}</span>
                            <span>•</span>
                            <span>{thread.date}</span>
                          </div>
                          <p className="text-sm mt-2">{thread.content}</p>
                          
                          <div className="flex items-center mt-2">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="text-gray-500 text-xs"
                              onClick={() => handleLike(thread.id)}
                            >
                              <ThumbsUp className="h-3 w-3 mr-1" /> {thread.likes}
                            </Button>
                            <span className="text-xs text-gray-500 ml-4">{thread.replies.length} replies</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {thread.replies.length > 0 && (
                      <div className="mt-4 pl-14 space-y-4">
                        {thread.replies.map(reply => (
                          <div key={reply.id} className="border-l-2 border-gray-100 pl-4">
                            <div className="flex items-start space-x-3">
                              <Avatar className="h-8 w-8">
                                <AvatarFallback>{reply.author[0]}</AvatarFallback>
                              </Avatar>
                              <div>
                                <div className="flex items-center">
                                  <span className="font-medium text-sm">{reply.author}</span>
                                  {reply.isInstructor && (
                                    <span className="ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full">
                                      Instructor
                                    </span>
                                  )}
                                </div>
                                <div className="text-xs text-gray-500 mt-0.5">{reply.date}</div>
                                <p className="text-sm mt-1">{reply.content}</p>
                                
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  className="text-gray-500 text-xs mt-1"
                                  onClick={() => handleLike(thread.id, reply.id)}
                                >
                                  <ThumbsUp className="h-3 w-3 mr-1" /> {reply.likes}
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}

                        <div className="mt-2 flex">
                          <Input placeholder="Add a reply..." className="text-sm" />
                          <Button size="sm" className="ml-2">Reply</Button>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="text-center py-8">
                <MessageSquare className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                <h3 className="text-lg font-medium mb-1">No discussions found</h3>
                <p className="text-gray-500">Be the first to start a discussion!</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="announcements">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-6">Announcements from Instructors</h2>
            
            {announcements.map(announcement => (
              <Card key={announcement.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 rounded-full p-2 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">{announcement.title}</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                        <span>{announcement.author}</span>
                        <span>•</span>
                        <span>{announcement.date}</span>
                      </div>
                      <p className="text-sm mt-2">{announcement.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CourseDiscussions;
