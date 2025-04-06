
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Clock, Calendar, AlertTriangle, Cpu } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from 'sonner';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Checkbox } from '@/components/ui/checkbox';
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer';
import { useMobile } from '@/hooks/use-mobile';

interface ScreeningTest {
  id: string;
  title: string;
  description: string;
  date: string;
  duration: string;
  skills: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  registrationOpen: boolean;
  category: 'Digital' | 'Analog' | 'Physical Design' | 'Verification';
}

const screeningTests: ScreeningTest[] = [
  {
    id: 'test1',
    title: 'Digital Design Concepts Assessment',
    description: 'Test your knowledge of digital design fundamentals including combinational and sequential circuits, state machines, and RTL design principles.',
    date: 'April 25, 2025',
    duration: '2 hours',
    skills: ['Verilog', 'RTL Design', 'State Machines', 'Timing Analysis'],
    difficulty: 'Intermediate',
    registrationOpen: true,
    category: 'Digital'
  },
  {
    id: 'test2',
    title: 'Analog Circuit Design Screening',
    description: 'Evaluate your skills in analog circuit design, focusing on amplifiers, filters, and mixed-signal circuits.',
    date: 'May 10, 2025',
    duration: '2.5 hours',
    skills: ['Op-Amps', 'Filters', 'Mixed-Signal', 'SPICE'],
    difficulty: 'Advanced',
    registrationOpen: true,
    category: 'Analog'
  },
  {
    id: 'test3',
    title: 'Physical Design Fundamentals',
    description: 'Assessment of your knowledge in physical design flow, floorplanning, placement, routing, and timing closure.',
    date: 'May 18, 2025',
    duration: '3 hours',
    skills: ['Floorplanning', 'Placement', 'Routing', 'Timing Closure'],
    difficulty: 'Intermediate',
    registrationOpen: true,
    category: 'Physical Design'
  },
  {
    id: 'test4',
    title: 'Verification Methodologies Test',
    description: 'Assess your understanding of modern verification methodologies including UVM, constrained random verification, and formal verification.',
    date: 'June 5, 2025',
    duration: '2 hours',
    skills: ['SystemVerilog', 'UVM', 'Assertions', 'Coverage'],
    difficulty: 'Advanced',
    registrationOpen: true,
    category: 'Verification'
  },
  {
    id: 'test5',
    title: 'Beginner VLSI Design Concepts',
    description: 'A fundamental test for those new to VLSI design, covering basic digital concepts and introductory semiconductor theory.',
    date: 'April 15, 2025',
    duration: '1.5 hours',
    skills: ['Basic Digital Logic', 'CMOS Fundamentals', 'Simple Verilog'],
    difficulty: 'Beginner',
    registrationOpen: false,
    category: 'Digital'
  }
];

const formSchema = z.object({
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms to proceed"
  }),
  acknowledgeRequirements: z.boolean().refine(val => val === true, {
    message: "You must acknowledge the technical requirements"
  })
});

const ScreeningTestPortal = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedTest, setSelectedTest] = useState<ScreeningTest | null>(null);
  const [isRegisterDialogOpen, setIsRegisterDialogOpen] = useState(false);
  const isMobile = useMobile();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeToTerms: false,
      acknowledgeRequirements: false
    }
  });
  
  const filteredTests = activeTab === 'all' 
    ? screeningTests 
    : screeningTests.filter(test => test.category.toLowerCase() === activeTab);
    
  const handleRegisterClick = (test: ScreeningTest) => {
    setSelectedTest(test);
    setIsRegisterDialogOpen(true);
  };
  
  const handleRegisterSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Registration values:', values);
    setIsRegisterDialogOpen(false);
    toast.success(`Successfully registered for ${selectedTest?.title}`);
    form.reset();
  };
  
  const RegisterForm = () => (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleRegisterSubmit)} className="space-y-6">
        <div className="space-y-4">
          <h3 className="font-medium">Test Details</h3>
          <div className="bg-secondary/30 p-4 rounded-md space-y-2">
            <p><strong>Title:</strong> {selectedTest?.title}</p>
            <p><strong>Date:</strong> {selectedTest?.date}</p>
            <p><strong>Duration:</strong> {selectedTest?.duration}</p>
            <p><strong>Difficulty:</strong> {selectedTest?.difficulty}</p>
          </div>
          
          <div className="pt-4 space-y-3">
            <FormField
              control={form.control}
              name="agreeToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions of this screening test
                    </FormLabel>
                    <FormDescription>
                      Including the academic integrity policy and data usage guidelines
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="acknowledgeRequirements"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox 
                      checked={field.value} 
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I acknowledge the technical requirements needed for this test
                    </FormLabel>
                    <FormDescription>
                      Including a stable internet connection, webcam, and required software
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </div>
        
        <div className="flex justify-end space-x-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={() => setIsRegisterDialogOpen(false)}
          >
            Cancel
          </Button>
          <Button type="submit">Register Now</Button>
        </div>
      </form>
    </Form>
  );
  
  const renderRegisterUI = () => {
    if (isMobile) {
      return (
        <Drawer open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Register for Screening Test</DrawerTitle>
              <DrawerDescription>
                Complete the form below to register for this test
              </DrawerDescription>
            </DrawerHeader>
            <div className="px-4">
              <RegisterForm />
            </div>
            <DrawerFooter>
              <Button 
                variant="outline" 
                onClick={() => setIsRegisterDialogOpen(false)}
              >
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      );
    }
    
    return (
      <Dialog open={isRegisterDialogOpen} onOpenChange={setIsRegisterDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Register for Screening Test</DialogTitle>
            <DialogDescription>
              Complete the form below to register for this test
            </DialogDescription>
          </DialogHeader>
          <RegisterForm />
        </DialogContent>
      </Dialog>
    );
  };
  
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Intermediate':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Advanced':
        return 'bg-orange-50 text-orange-700 border-orange-200';
      default:
        return '';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">VLSI Screening Tests</h2>
          <p className="text-muted-foreground">Showcase your semiconductor design skills and get certified</p>
        </div>
        
        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="digital">Digital</TabsTrigger>
            <TabsTrigger value="analog">Analog</TabsTrigger>
            <TabsTrigger value="physical design">Physical</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="grid gap-6">
        {filteredTests.length === 0 ? (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">No screening tests available in this category.</p>
          </Card>
        ) : (
          filteredTests.map((test) => (
            <Card key={test.id} className="overflow-hidden transition-all hover:shadow-md">
              <CardHeader>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="outline" className={getDifficultyColor(test.difficulty)}>
                    {test.difficulty}
                  </Badge>
                  <Badge variant="outline">
                    {test.category}
                  </Badge>
                  {test.registrationOpen ? (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      Registration Open
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                      Coming Soon
                    </Badge>
                  )}
                </div>
                <CardTitle className="flex items-center gap-2">
                  <Cpu className="h-5 w-5 text-primary" />
                  {test.title}
                </CardTitle>
                <CardDescription>{test.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <span>{test.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>{test.duration}</span>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">Required Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {test.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-gray-50">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between border-t bg-gray-50/50 p-4">
                {test.registrationOpen ? (
                  <div className="flex items-center text-sm text-green-600">
                    <Check className="h-4 w-4 mr-1" />
                    Registration Open
                  </div>
                ) : (
                  <div className="flex items-center text-sm text-amber-600">
                    <AlertTriangle className="h-4 w-4 mr-1" />
                    Coming Soon
                  </div>
                )}
                <Button 
                  onClick={() => handleRegisterClick(test)}
                  disabled={!test.registrationOpen}
                >
                  Register for Test
                </Button>
              </CardFooter>
            </Card>
          ))
        )}
      </div>
      
      {renderRegisterUI()}
    </div>
  );
};

export default ScreeningTestPortal;
