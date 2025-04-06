
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Code, Trophy, Users, UserPlus, Check, Clock } from 'lucide-react';
import VlsiChatbot from '@/components/VlsiChatbot';
import ScreeningTestPortal from '@/components/ScreeningTestPortal';

interface EventProps {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'hackathon' | 'screening' | 'workshop';
  registrationOpen: boolean;
  participants?: number;
  maxParticipants?: number;
  prize?: string;
  skills?: string[];
  duration?: string;
}

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [activeSectionTab, setActiveSectionTab] = useState<string>('events');
  
  const events: EventProps[] = [
    {
      id: 'event1',
      title: 'VLSI Design Hackathon 2025',
      description: 'Design an innovative power-efficient chip for IoT applications. Compete for prizes and mentorship opportunities with industry leaders.',
      date: 'May 15-17, 2025',
      location: 'Virtual & San Jose, CA',
      type: 'hackathon',
      registrationOpen: true,
      participants: 120,
      maxParticipants: 200,
      prize: '$10,000',
      skills: ['Verilog', 'FPGA', 'Low Power Design'],
      duration: '48 hours'
    },
    {
      id: 'event2',
      title: 'Semiconductor Industry Screening Test',
      description: 'Test your knowledge and skills in analog circuit design. Top performers will be invited to interview with leading semiconductor companies.',
      date: 'June 5, 2025',
      location: 'Online',
      type: 'screening',
      registrationOpen: true,
      skills: ['Analog Design', 'SPICE', 'Circuit Analysis'],
      duration: '2 hours'
    },
    {
      id: 'event3',
      title: 'Advanced Physical Design Workshop',
      description: 'Learn advanced techniques in physical design from industry experts. Hands-on session with the latest EDA tools.',
      date: 'April 12, 2025',
      location: 'Austin, TX',
      type: 'workshop',
      registrationOpen: false,
      participants: 45,
      maxParticipants: 50,
      skills: ['Physical Design', 'EDA Tools', 'Floorplanning'],
      duration: '1 day'
    },
    {
      id: 'event4',
      title: 'Verification Challenge 2025',
      description: 'Demonstrate your verification expertise by finding bugs in a complex design. Win recognition and prizes from leading verification tool vendors.',
      date: 'July 22-23, 2025',
      location: 'Virtual',
      type: 'hackathon',
      registrationOpen: true,
      participants: 75,
      maxParticipants: 150,
      prize: '$5,000',
      skills: ['SystemVerilog', 'UVM', 'Formal Verification'],
      duration: '24 hours'
    },
    {
      id: 'event5',
      title: 'RTL Design Skills Assessment',
      description: 'Evaluate your RTL coding skills with this industry-standard assessment. Get a certificate to showcase your expertise to potential employers.',
      date: 'May 30, 2025',
      location: 'Online',
      type: 'screening',
      registrationOpen: true,
      skills: ['RTL Design', 'Verilog', 'VHDL', 'SystemVerilog'],
      duration: '3 hours'
    }
  ];
  
  const filteredEvents = activeTab === 'all' 
    ? events 
    : events.filter(event => event.type === activeTab);

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'hackathon':
        return <Code className="h-5 w-5 text-blue-500" />;
      case 'screening':
        return <Check className="h-5 w-5 text-green-500" />;
      case 'workshop':
        return <Users className="h-5 w-5 text-orange-500" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/90 to-primary py-16 text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">VLSI & Semiconductor Events</h1>
              <p className="text-xl opacity-90 mb-8">
                Join hackathons, take screening tests, and attend workshops to showcase your skills
                and connect with industry professionals.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={() => setActiveSectionTab('screening')}>
                  <Check className="mr-2 h-5 w-5" />
                  Take Screening Tests
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Trophy className="mr-2 h-5 w-5" />
                  Host an Event
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Events Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="events" value={activeSectionTab} onValueChange={setActiveSectionTab} className="mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold">
                    {activeSectionTab === 'events' ? 'Upcoming Events' : 'Screening Tests'}
                  </h2>
                  <TabsList>
                    <TabsTrigger value="events">Events</TabsTrigger>
                    <TabsTrigger value="screening">Screening Tests</TabsTrigger>
                  </TabsList>
                </div>
                
                <TabsContent value="events">
                  <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
                    <div className="flex justify-end mb-6">
                      <TabsList>
                        <TabsTrigger value="all">All Events</TabsTrigger>
                        <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
                        <TabsTrigger value="screening">Screening Tests</TabsTrigger>
                        <TabsTrigger value="workshop">Workshops</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <div className="space-y-6">
                      {filteredEvents.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-lg">
                          <p className="text-gray-500">No events found in this category.</p>
                        </div>
                      ) : (
                        filteredEvents.map((event) => (
                          <Card key={event.id} className="overflow-hidden transition-all hover:shadow-md">
                            <CardHeader className="flex flex-row items-start justify-between">
                              <div>
                                <div className="flex items-center gap-2 mb-2">
                                  {getEventTypeIcon(event.type)}
                                  <Badge variant={event.type === 'hackathon' ? 'default' : event.type === 'screening' ? 'secondary' : 'outline'}>
                                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                  </Badge>
                                  {event.registrationOpen ? (
                                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                      Registration Open
                                    </Badge>
                                  ) : (
                                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                                      Coming Soon
                                    </Badge>
                                  )}
                                </div>
                                <CardTitle className="text-xl">{event.title}</CardTitle>
                                <CardDescription className="mt-2">{event.description}</CardDescription>
                              </div>
                            </CardHeader>
                            
                            <CardContent>
                              <div className="flex flex-wrap gap-y-3 gap-x-8 text-sm">
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4 text-gray-500" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <span>{event.duration}</span>
                                </div>
                                {event.participants && (
                                  <div className="flex items-center gap-2">
                                    <Users className="h-4 w-4 text-gray-500" />
                                    <span>{event.participants}/{event.maxParticipants} participants</span>
                                  </div>
                                )}
                                {event.prize && (
                                  <div className="flex items-center gap-2">
                                    <Trophy className="h-4 w-4 text-gray-500" />
                                    <span>Prize: {event.prize}</span>
                                  </div>
                                )}
                              </div>
                              
                              {event.skills && (
                                <div className="mt-4">
                                  <p className="text-sm text-gray-500 mb-2">Skills:</p>
                                  <div className="flex flex-wrap gap-2">
                                    {event.skills.map((skill, idx) => (
                                      <Badge key={idx} variant="outline" className="bg-gray-50">
                                        {skill}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </CardContent>
                            
                            <CardFooter className="flex justify-between border-t bg-gray-50/50 p-4">
                              <p className="text-sm text-gray-500">Location: {event.location}</p>
                              <Button 
                                disabled={!event.registrationOpen}
                                variant={event.registrationOpen ? "default" : "outline"}
                              >
                                {event.registrationOpen ? 'Register Now' : 'Coming Soon'}
                              </Button>
                            </CardFooter>
                          </Card>
                        ))
                      )}
                    </div>
                  </Tabs>
                </TabsContent>
                
                <TabsContent value="screening">
                  <ScreeningTestPortal />
                </TabsContent>
              </Tabs>
              
              {/* Call to Action */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mt-12 text-center">
                <h3 className="text-xl font-semibold mb-2">Want to host your own event?</h3>
                <p className="text-gray-600 mb-4">
                  Partner with SemiXpertz to organize hackathons, conduct screening tests, 
                  or host workshops for semiconductor professionals.
                </p>
                <Button>Contact Us to Host</Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* VLSI Expert Chatbot Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Need Help with VLSI Concepts?</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our VLSI Expert Assistant can help answer your semiconductor design questions
                  and prepare you for upcoming events.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ask Our VLSI Expert</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <span>Get answers about Verilog, VHDL, and hardware description languages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <span>Learn about physical design, synthesis, and verification techniques</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <span>Understand power optimization, timing analysis, and more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                      <span>Prepare for upcoming hackathons and screening tests</span>
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 italic">
                    Note: This is a demo version. A full implementation would connect to a specialized AI model.
                  </p>
                </div>
                
                <VlsiChatbot />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default EventsPage;
