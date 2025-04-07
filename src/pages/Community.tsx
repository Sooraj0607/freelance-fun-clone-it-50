
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CommunityGroups from '@/components/CommunityGroups';
import VlsiChatbot from '@/components/VlsiChatbot';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Users } from 'lucide-react';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex-1">
        <div className="py-12 bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100">
          <div className="container mx-auto px-4">
            <h1 className="heading-lg text-center mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Semiconductor Community Hub
            </h1>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">
              Connect with semiconductor professionals worldwide. Join our specialized groups to discuss, learn, and collaborate on cutting-edge VLSI topics.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-8">
          <Tabs defaultValue="groups" className="w-full mb-8">
            <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
              <TabsTrigger value="groups" className="flex items-center justify-center gap-2">
                <Users className="h-4 w-4" />
                Community Groups
              </TabsTrigger>
              <TabsTrigger value="chatbot" className="flex items-center justify-center gap-2">
                <MessageSquare className="h-4 w-4" />
                VLSI Expert Chat
              </TabsTrigger>
            </TabsList>
            <TabsContent value="groups" className="mt-6">
              <CommunityGroups />
            </TabsContent>
            <TabsContent value="chatbot" className="mt-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
                <h2 className="heading-md mb-4 text-center">Ask the VLSI Expert</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Get instant answers to your semiconductor design and verification questions from our AI assistant.
                </p>
                <VlsiChatbot />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Community;
